import { mappedRouteType } from "../types";

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
  // Keep this last, since we add the "bad" version for the nav bar
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

export const navRoutes = Object.values(routeMap);
