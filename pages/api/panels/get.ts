import { NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

const handleGetMethod = async (
  params: { images: string },
  res: NextApiResponse
) => {
  try {
    const includeImages = params?.images === 'true' || params?.images === '';
    const result = await prisma.imageCollection.findMany({
      where: { standalone: true },
      include: { images: includeImages },
    });
    return res.status(result ? 200 : 404).json(result);
  } catch (e) {
    return res.status(500).json({
      error: {
        message: e?.message || 'Unknown',
        meta: e?.meta,
        code: e?.code,
      },
    });
  }
};

export default handleGetMethod;
