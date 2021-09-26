import { AxiosError, AxiosResponse } from 'axios';
import {
  ComicSeries,
  ComicArc,
  ComicIssue,
  ComicImage,
  IssueType,
  ImageCollection,
} from '.prisma/client';

export interface AppAxiosResponse<T> {
  response: AxiosResponse<T>;
  error?: AxiosError<any>;
}

export type ComicPageParams = {
  series: string;
  issueNumber?: string;
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
    issueNumber: string;
    link: string;
    issueType?: IssueType;
  };
};

export type ComicWithMetadata = {
  link: MappedRouteType;
  params: ComicPageParams;
  comic: ComicType;
  issues?: {
    [issueNumber: string]: ComicWithMetadata;
  };
};

export type MappedRouteType = {
  pathname: string;
  name: string;
  query?: { [key: string]: string | boolean | number };
  dev?: boolean; // only appear in nav in dev mode
};

export interface FormValidatorConfigType {
  validator: (value: string | number | boolean, formFields?: any) => boolean;
  message: string;
}

// using includes we can get data from db the returns relation
export type extendedComicSeries = ComicSeries & {
  issues?: extendedComicIssue[];
  coverImage: ComicImage;
};

export type extendedImageCollection = ImageCollection & {
  images: ComicImage[];
};

export type extendedComicIssue = ComicIssue & {
  series?: ComicSeries;
  arc?: ComicArc;
  coverImage: ComicImage;
  imageCollection: extendedImageCollection;
};
export type extendedComicArc = ComicArc;
