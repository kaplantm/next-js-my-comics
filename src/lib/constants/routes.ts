import { MappedRouteType } from "../types";
import { sortObjectArrayAlphabeticallyBy } from "../utils/array-utils";

export const routeMap: { [key: string]: MappedRouteType } = {
  home: {
    pathname: "/",
    name: "Home",
  },
  seriesIndex: {
    pathname: "/series",
    name: "Series",
  },
  panelsIndex: {
    pathname: "/panels",
    name: "Panels",
  },
};

export const navRoutes = sortObjectArrayAlphabeticallyBy(
  Object.values(routeMap),
  "name"
);

export const getSeriesRoute = (series: string) => `/series/${series}`;
export const getIssueRoute = (series: string, issueNumber: number) =>
  `${getSeriesRoute(series)}/issues/${issueNumber}`;
export const getPanelsCategoryRoute = category => `/panels/${category}`;
