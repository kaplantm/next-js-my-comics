/* eslint-disable import/prefer-default-export */
import { ComicIssue, ComicSeries } from '.prisma/client';

export const getInitialState = (listData: ComicIssue[] | ComicSeries[]) =>
  listData.map(() => false);
