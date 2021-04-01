import { ComicType, mappedRouteType } from "@lib/types";

// TODO: remove?
export type listDataType = { link: mappedRouteType; comic: ComicType }[];

export const getInitialState = (listData: listDataType) =>
  listData.map((item) => false);
