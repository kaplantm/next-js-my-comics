import { AxiosError, AxiosResponse } from "axios";

export interface appAxiosResponse<T> {
  response: AxiosResponse<T>;
  error?: AxiosError<any>;
}

export type ComicPageParams = {
  series: string;
  issueNumber: number;
};

export type ComicType = {
  coverPath: string;
  imagePaths: string[];
  description: string;
  frontMatter: {
    title: string;
    arc: string;
    startYear: string | number;
    endYear: string | number;
    issueNumber: number;
    link: string;
    readingOrder: number;
  };
};

export type ComicWithParamsType = { params: ComicPageParams; comic: ComicType };

export type allStaticComicsSeriesType = ComicWithParamsType & {
  issues: {
    [issueNumber: number]: ComicWithParamsType;
  };
};

export type allStaticComicsType = {
  [seriesTitle: string]: allStaticComicsSeriesType;
};

export type allStaticPanelsType = {
  [category: string]: string[];
};

export enum loadingEnum {
  LOADED = "LOADED",
  FAILED = "FAILED",
  LOADING = "LOADING",
  NOT_STARTED = "NOT_STARTED",
}

export type mappedRouteType = {
  pathname: string;
  name: string;
  query?: { [key: string]: string | boolean | number };
};

export interface FormValidatorConfigType {
  validator: (value: string | number | boolean, formFields?: any) => boolean;
  message: string;
}

export type Nullable<T> = T | null;
