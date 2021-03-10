import { mappedRouteType } from "../types";
import { sortObjectArrayAlphabeticallyBy } from "../utils/array-utils";

export const routeMap: { [key: string]: mappedRouteType } = {
  home: {
    pathname: "/",
    name: "Home",
  },
  closures: {
    pathname: "/closures",
    name: "Closures",
  },
  isMounted: {
    pathname: "/is-mounted",
    name: "Is Mounted",
  },
  rounding: {
    pathname: "/rounding",
    name: "Rounding",
  },
  whenHooksRun: {
    pathname: "/when-hooks-run",
    name: "When Hooks Run",
  },
  materialCascadeGood: {
    pathname: "/material-cascade",
    name: "Material Cascade - Good",
    query: { bad: false },
  },
  materialCascadeBad: {
    pathname: "/material-cascade",
    name: "Material Cascade - Bad",
    query: { bad: true },
  },
};

export const navRoutes = sortObjectArrayAlphabeticallyBy(
  Object.values(routeMap).slice(1),
  "name"
);
