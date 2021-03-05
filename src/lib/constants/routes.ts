import { mappedRouteType } from "../types";
import { sortObjectArrayAlphabeticallyBy } from "../utils/array-utils";

export const routeMap: { [key: string]: mappedRouteType } = {
  home: {
    path: "/",
    name: "Home",
  },
  closures: {
    path: "/closures",
    name: "Closures",
  },
  isMounted: {
    path: "/is-mounted",
    name: "Is Mounted",
  },
  rounding: {
    path: "/rounding",
    name: "Rounding",
  },
  whenHooksRun: {
    path: "/when-hooks-run",
    name: "When Hooks Run",
  },
  materialCascadeGood: {
    path: "/material-cascade",
    name: "Material Cascade - Good",
    query: { bad: false },
  },
  materialCascadeBad: {
    path: "/material-cascade",
    name: "Material Cascade - Bad",
    query: { bad: true },
  },
};

export const navRoutes = sortObjectArrayAlphabeticallyBy(
  Object.values(routeMap).slice(1),
  "name"
);
