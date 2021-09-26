import {
  allArcsEndpoint,
  allIssuesEndpoint,
  allSeriesEndpoint,
  getSeriesEndpoint,
  getIssueBySeriesAndNumberEndpoint,
  allPanelsEndpoint,
  getPanelsEndpoint,
} from '@lib/constants/api-endpoints';
import {
  AppAxiosResponse,
  extendedComicArc,
  extendedComicIssue,
  extendedComicSeries,
  extendedImageCollection,
} from '@lib/types';
import { appAxios } from '.';

export async function getAllSeries(
  params: {
    issues?: boolean;
    arcs?: boolean;
  } = {}
): Promise<AppAxiosResponse<extendedComicSeries[]>> {
  return appAxios<extendedComicSeries[]>({
    url: allSeriesEndpoint,
    params,
  });
}

export async function getSeries(
  id: string,
  params: { issues?: boolean } = {}
): Promise<AppAxiosResponse<extendedComicSeries[]>> {
  return appAxios<extendedComicSeries[]>({
    url: getSeriesEndpoint(id),
    params,
  });
}

export async function getAllIssues(): Promise<
  AppAxiosResponse<extendedComicIssue[]>
> {
  return appAxios<extendedComicIssue[]>({
    url: allIssuesEndpoint,
  });
}

export async function getIssueBySeriesAndNumber(
  seriesId: string,
  issueNumber: string
): Promise<AppAxiosResponse<extendedComicIssue>> {
  const url = getIssueBySeriesAndNumberEndpoint(seriesId, issueNumber);
  return appAxios<extendedComicIssue>({
    url,
  });
}

export async function getAllArcs(): Promise<
  AppAxiosResponse<extendedComicArc[]>
> {
  return appAxios<extendedComicArc[]>({
    url: allArcsEndpoint,
  });
}

export async function getAllStandalonePanels(
  params: {
    images?: boolean;
  } = {}
): Promise<AppAxiosResponse<extendedImageCollection[]>> {
  return appAxios<extendedImageCollection[]>({
    url: allPanelsEndpoint,
    params,
  });
}

export async function getStandalonePanels(
  id: string
): Promise<AppAxiosResponse<extendedImageCollection>> {
  return appAxios<extendedImageCollection>({
    url: getPanelsEndpoint(id),
  });
}
