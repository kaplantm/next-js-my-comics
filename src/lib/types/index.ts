import { AxiosError, AxiosResponse } from "axios";

export interface appAxiosResponse<T> {
  response: AxiosResponse<T>;
  error?: AxiosError<any>;
}

export type comicVineResponse<T> = {
  error: "OK";
  limit: 1;
  offset: 0;
  number_of_page_results: 1;
  number_of_total_results: 1;
  status_code: 1;
  results: T;
  version: "1.0";
};

export type comicVineCharacterType = {
  name: string;
  image: {
    icon_url: string;
    medium_url: string;
    screen_url: string;
    screen_large_url: string;
    small_url: string;
    super_url: string;
    thumb_url: string;
    tiny_url: string;
    original_url: string;
    image_tags: "All Images,Batgirl,DC Rebirth";
  };
  first_appeared_in_issue: {
    api_detail_url: string;
    id: number;
    name: string;
    issue_number: string;
  };
  site_detail_url?: string;
  id: string;
};

export type comicVineIssueType = {
  name: string;
  image: {
    icon_url: string;
    medium_url: string;
    screen_url: string;
    screen_large_url: string;
    small_url: string;
    super_url: string;
    thumb_url: string;
    tiny_url: string;
    original_url: string;
    image_tags: "All Images,Batgirl,DC Rebirth";
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
