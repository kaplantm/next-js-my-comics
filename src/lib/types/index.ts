import { AxiosError, AxiosResponse } from "axios";

export interface appAxiosResponse<T> {
  response: AxiosResponse<T>;
  error?: AxiosError<any>;
}

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
