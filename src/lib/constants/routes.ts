import { mappedRouteType } from "../types";
import { sortObjectArrayAlphabeticallyBy } from "../utils/array-utils";

export const routeMap: { [key: string]: mappedRouteType } = {
  home: {
    pathname: "/",
    name: "Home",
  },
};

export const navRoutes = sortObjectArrayAlphabeticallyBy(
  Object.values(routeMap).slice(1),
  "name"
);
