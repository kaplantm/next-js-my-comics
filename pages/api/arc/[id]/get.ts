import { NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

const handleGetMethod = async (data: { id: string }, res: NextApiResponse) => {
  const id = parseInt(data?.id);
  if (!id) {
    return res.status(400).json({
      error: { message: 'Missing or invalid id' },
    });
  }
  try {
    const result = await prisma.comicArc.findFirst({
      where: { id },
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
