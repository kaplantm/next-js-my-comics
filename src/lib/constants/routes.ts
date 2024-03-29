import { sortingEnum } from '@components/search-results/helpers';
import { MappedRouteType } from '../types';
import { sortObjectArrayAlphabeticallyBy } from '../utils/array-utils';

export const routeMap: { [key: string]: MappedRouteType } = {
  newComic: {
    pathname: '/debug/new',
    name: 'Add Comic',
    dev: true,
  },
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
    // This route omitted from nav
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
export const getReadingOrderRoute = (order: string): string => {
  if (order === sortingEnum.READING_ORDER) {
    return routeMap.home.pathname;
  }
  return `${routeMap.readingOrderIndex.pathname}/${order.toLowerCase()}`;
};
