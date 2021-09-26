import type { NextApiRequest, NextApiResponse } from 'next';
import { seedAll } from './helpers';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return seedAll(res);
    default:
      return res.status(405).json({
        error: { message: 'Method not allowed.' },
      });
  }
}
