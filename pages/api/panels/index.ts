import type { NextApiRequest, NextApiResponse } from 'next';
import handleGetMethod from './get';
import handlePostMethod from './post';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return handleGetMethod(req.query as any, res);
    case 'POST':
      return handlePostMethod(req.body, res);
    default:
      return res.status(405).json({
        error: { message: 'Method not allowed.' },
      });
  }
}
