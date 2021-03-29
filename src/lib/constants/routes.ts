import { mappedRouteType } from "../types";
import { sortObjectArrayAlphabeticallyBy } from "../utils/array-utils";

export const routeMap: { [key: string]: mappedRouteType } = {
  home: {
    pathname: "/",
    name: "Home",
  },
  seriesIndex: {
    pathname: "/series",
    name: "Series Index",
  },
};

export const navRoutes = sortObjectArrayAlphabeticallyBy(
  Object.values(routeMap),
  "name"
);

export const getSeriesRoute = (series: string) => `/series/${series}`;
export const getIssueRoute = (series: string, issueNumber: number) =>
  `${getSeriesRoute(series)}/issues/${issueNumber}`;
