import { NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

const handleGetMethod = async (res: NextApiResponse) => {
  try {
    const result = await prisma.comicSeries.findMany();
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
