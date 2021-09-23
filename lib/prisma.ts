// https://vercel.com/guides/nextjs-prisma-postgres
import { PrismaClient } from '@prisma/client';

// eslint-disable-next-line import/no-mutable-exports
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({ errorFormat: 'minimal' });
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient({ errorFormat: 'minimal' });
  }
  prisma = (global as any).prisma;
}

export default prisma;
