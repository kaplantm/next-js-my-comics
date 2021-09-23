import {
  allArcsEndpoint,
  allIssuesEndpoint,
  allSeriesEndpoint,
} from '@lib/constants/api-endpoints';
import { AppAxiosResponse } from '@lib/types';
import { appAxios } from '.';
import { ComicSeries, ComicIssue, ComicArc } from '.prisma/client';

export async function getAllSeries(): Promise<AppAxiosResponse<ComicSeries[]>> {
  return appAxios<ComicSeries[]>({
    url: allSeriesEndpoint,
  });
}

export async function getAllIssues(): Promise<AppAxiosResponse<ComicIssue[]>> {
  return appAxios<ComicIssue[]>({
    url: allIssuesEndpoint,
  });
}

export async function getAllArcs(): Promise<AppAxiosResponse<ComicArc[]>> {
  return appAxios<ComicArc[]>({
    url: allArcsEndpoint,
  });
}
