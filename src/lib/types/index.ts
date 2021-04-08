import { AxiosError, AxiosResponse } from "axios";

export interface AppAxiosResponse<T> {
  response: AxiosResponse<T>;
  error?: AxiosError<any>;
}

export type ComicPageParams = {
  series: string;
  issueNumber?: number;
};

export type ComicType = {
  coverPath: string;
  imagePaths: string[];
  description: string;
  frontMatter: {
    title: string;
    arc: string;
    start: string | number;
    end: string | number;
    issueNumber: number;
    link: string;
  };
};

export type ComicWithMetadata = {
  link: MappedRouteType;
  params: ComicPageParams;
  comic: ComicType;
  issues?: {
    [issueNumber: number]: ComicWithMetadata;
  };
};

export type MappedRouteType = {
  pathname: string;
  name: string;
  query?: { [key: string]: string | boolean | number };
};

export interface FormValidatorConfigType {
  validator: (value: string | number | boolean, formFields?: any) => boolean;
  message: string;
}
