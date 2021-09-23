import { NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import {
  prismaErrorCodesMap,
  UpdateArcRequestType,
  IdentifierQuery,
} from '../../../../lib/api/types';

const handlePutMethod = async (
  body: UpdateArcRequestType,
  query: IdentifierQuery,
  res: NextApiResponse
) => {
  const id = parseInt(query?.id);
  const { title, start, end, description, link }: UpdateArcRequestType =
    body || ({} as UpdateArcRequestType);

  if (!title || !link || !description || !start || !id) {
    return res.status(405).json({
      error: {
        message:
          'Missing required data: title, start, link description and id are required.',
      },
    });
  }
  try {
    const data = {
      title,
      startCoverDate: start,
      endCoverDate: end,
      description: description.trim(),
      link,
    };
    const result = await prisma.comicArc.update({ data, where: { id } });
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
