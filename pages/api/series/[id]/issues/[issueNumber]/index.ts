import type { NextApiRequest, NextApiResponse } from 'next';
import handleGetMethod from './get';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return handleGetMethod(req.query as any, res);
    default:
      return res.status(405).json({
        error: { message: 'Method not allowed.' },
      });
  }
}
