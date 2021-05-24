import { sortingEnum } from '@page-containers/main-index/helpers';
import { MappedRouteType } from '../types';
import { sortObjectArrayAlphabeticallyBy } from '../utils/array-utils';

export const routeMap: { [key: string]: MappedRouteType } = {
  home: {
    pathname: '/',
    name: 'Home',
  },
  seriesIndex: {
    pathname: '/series',
    name: 'Series',
  },
  panelsIndex: {
    pathname: '/panels',
    name: 'Panels',
  },
  readingOrderIndex: {
    pathname: '/reading-order',
    name: 'Reading Order',
  },
};

const routeMapValues = Object.values(routeMap);

export const navRoutes = sortObjectArrayAlphabeticallyBy(
  routeMapValues.slice(0, -1),
  'name'
);

export const getSeriesRoute = (series: string) => `/series/${series}`;
export const getIssueRoute = (series: string, issueNumber: string) =>
  `${getSeriesRoute(series)}/issues/${issueNumber}`;
export const getPanelsCategoryRoute = category => `/panels/${category}`;
export const getReadingOrderRoute = (order: string): string =>
  `${routeMap.readingOrderIndex.pathname}/${
    order === sortingEnum.READING_ORDER ? '' : order.toLowerCase()
  }`;
