import { ComicWithMetadata, MappedRouteType } from "@lib/types";

export const getInitialState = (listData: ComicWithMetadata[]) =>
  listData.map((item) => false);
