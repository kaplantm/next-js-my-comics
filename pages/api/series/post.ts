import { NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import {
  CreateSeriesRequestType,
  prismaErrorCodesMap,
} from '../../../lib/api/types';

const handlePostMethod = async (
  body: CreateSeriesRequestType,
  res: NextApiResponse
) => {
  const { title, start, end, description, link }: CreateSeriesRequestType =
    body || ({} as CreateSeriesRequestType);

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
    const result = await prisma.comicSeries.create({ data });
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
