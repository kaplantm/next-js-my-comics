import { NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import {
  CreateIssueRequestType,
  prismaErrorCodesMap,
} from '../../../lib/api/types';

const handlePostMethod = async (
  body: CreateIssueRequestType,
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
  }: CreateIssueRequestType = body || ({} as CreateIssueRequestType);

  if (!title || !link || !issueNumber || !description || !start) {
    return res.status(405).json({
      error: {
        message:
          'Missing required data: title, start, issueNumber, link and description are required.',
      },
    });
  }
  try {
    const exists = await prisma.comicIssue.findFirst({
      where: { number: issueNumber, seriesId },
    });
    if (exists) {
      return res.status(409).json({
        error: {
          message: `IssueNumber ${issueNumber} already exists for seriesId ${seriesId}.`,
        },
      });
    }

    const data = {
      title,
      coverDate: start,
      description: description.trim(),
      link,
      number: issueNumber,
      series: { connect: { id: seriesId } },
      arc: arcId ? { connect: { id: arcId } } : undefined,
      imageCollection: { create: {} },
    };
    const result = await prisma.comicIssue.create({ data });
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

export default handlePostMethod;
