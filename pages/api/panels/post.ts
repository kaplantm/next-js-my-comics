import { NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import {
  CreateImageCollectionRequestType,
  prismaErrorCodesMap,
} from '../../../lib/api/types';

const handlePostMethod = async (
  body: CreateImageCollectionRequestType,
  res: NextApiResponse
) => {
  const { name }: CreateImageCollectionRequestType =
    body || ({} as CreateImageCollectionRequestType);

  if (!name) {
    return res.status(405).json({
      error: {
        message: 'Missing required data: name is required.',
      },
    });
  }
  try {
    const data = {
      name,
      standalone: true,
    };
    const result = await prisma.imageCollection.create({ data });
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
