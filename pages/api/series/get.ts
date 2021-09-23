import { NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

const handleGetMethod = async (
  data: { issues: string; arcs: string },
  res: NextApiResponse
) => {
  try {
    const includeIssues = data?.issues === '' || data?.issues === 'true';
    const includeArcs = data?.arcs === '' || data?.arcs === 'true';

    const issueData = includeArcs ? { include: { arc: true } } : true;
    const additionalData = {
      include: {
        issues: includeIssues || includeArcs ? issueData : false,
      },
    };
    const result = await prisma.comicSeries.findMany(additionalData);
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
