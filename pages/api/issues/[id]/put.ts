import { NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import {
  IdentifierQuery,
  prismaErrorCodesMap,
  UpdateIssueRequestType,
} from '../../../../lib/api/types';
import { getConnectDisconnectOneToOne } from '../../../../lib/api/utils';

const handlePutMethod = async (
  body: UpdateIssueRequestType,
  query: IdentifierQuery,
  res: NextApiResponse
) => {
  const {
    title,
    start,
    description,
    link,
    issueNumber,
    seriesId,
    arcId,
  }: UpdateIssueRequestType = body || ({} as UpdateIssueRequestType);
  const id = parseInt(query?.id);
  if (!title || !link || !issueNumber || !description || !start || !id) {
    return res.status(405).json({
      error: {
        message:
          'Missing required data: title, start, issueNumber, link description and id are required.',
      },
    });
  }
  try {
    const data = {
      title,
      coverDate: start,
      description: description.trim(),
      link,
      number: issueNumber,
      series: { connect: { id: seriesId } },
      // sending undefined doesn't change arc
      // sending null removes arc
      // sending arcId sets arc
      arc: getConnectDisconnectOneToOne(arcId),
    };
    const result = await prisma.comicIssue.update({ data, where: { id } });
    return res.status(result ? 200 : 404).json(result);
  } catch (e) {
    const status = prismaErrorCodesMap[e?.code] || 500;
    return res.status(status).json({
      error: {
        message: e?.message || 'Unknown',
        meta: e?.meta,
        code: e?.code,
      },
    });
  }
};

export default handlePutMethod;
