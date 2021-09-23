import { NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import {
  CreateArcRequestType,
  prismaErrorCodesMap,
} from '../../../lib/api/types';

const handlePostMethod = async (
  body: CreateArcRequestType,
  res: NextApiResponse
) => {
  const { title, start, end, description, link }: CreateArcRequestType =
    body || ({} as CreateArcRequestType);

  if (!title || !link || !description || !start) {
    return res.status(405).json({
      error: {
        message:
          'Missing required data: title, start, link and description are required.',
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
    const result = await prisma.comicArc.create({ data });
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
