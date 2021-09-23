import { NextApiResponse } from 'next';
import { IdentifierQuery } from '../../../../../../lib/api/types';
import prisma from '../../../../../../lib/prisma';

const handleGetMethod = async (
  data: { issueNumber: string } & IdentifierQuery,
  res: NextApiResponse
) => {
  const id = parseInt(data?.id);
  const issueNumber = parseInt(data?.issueNumber);
  if (!id || !issueNumber) {
    return res.status(400).json({
      error: { message: 'Missing or invalid series id or issueNumber' },
    });
  }
  try {
    const result = await prisma.comicIssue.findFirst({
      where: { seriesId: id, number: issueNumber },
      include: {
        series: true,
        arc: true,
        coverImage: true,
        imageCollection: { include: { images: true } },
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
