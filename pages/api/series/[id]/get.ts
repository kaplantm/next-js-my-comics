import { NextApiResponse } from 'next';
import { IdentifierQuery } from '../../../../lib/api/types';
import prisma from '../../../../lib/prisma';

const handleGetMethod = async (
  data: IdentifierQuery & { issues?: string },
  res: NextApiResponse
) => {
  const id = parseInt(data?.id);
  if (!id) {
    return res.status(400).json({
      error: { message: 'Missing or invalid id' },
    });
  }
  try {
    const includeIssues = data.issues === '' || data.issues === 'true';
    const additionalData = includeIssues
      ? {
          issues: {
            include: {
              arc: true,
            },
          },
        }
      : {};
    const result = await prisma.comicSeries.findFirst({
      where: { id },
      include: {
        coverImage: true,
        ...additionalData,
      },
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
