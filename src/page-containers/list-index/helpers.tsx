import { ComicType, mappedRouteType } from "@lib/types";

export type listDataType = { link: mappedRouteType; comic: ComicType }[];

export const getInitialState = (listData: listDataType) =>
  listData.map((item) => false);
