import axios, { AxiosRequestConfig } from "axios";
import Router from "next/router";
import { AppAxiosResponse } from "../types";

export function sleep(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function appAxios<T>(
  config: AxiosRequestConfig
): Promise<AppAxiosResponse<T>> {
  await sleep();
  try {
    return { response: await axios(config), error: null };
  } catch (e) {
    return { response: null, error: e };
  }
}

export function removeUndefinedProperties<T>(obj: T): Partial<T> {
  const keysArray = Object.keys(obj) as (keyof T)[];
  const reducer = (accumulator: Partial<T>, key: keyof T) => {
    const val: T[keyof T] = obj[key];
    if (val !== undefined) {
      accumulator[key] = obj[key];
    }
    return accumulator;
  };
  return keysArray.reduce(reducer, {});
}

export function getQueryParamsObjFromString(fullUrl: string) {
  const params: any = new URLSearchParams(fullUrl);
  const paramObj = (Array.from(params.keys()) as string[]).reduce(
    (acc: { [key: string]: string }, key: string) => {
      acc[key] = params.get(key);
      return acc;
    },
    {}
  );
  return paramObj;
}

/**
 * Adds or removes query params to the current page
 * @param newQuery new query objects to add to the path,
 * set keys you want to remove as undefined
 * @param options.shallow if true, update the path of the current page without rerunning
 */
export async function pushCurrentPageWithUpdatedQueryParams(
  newQuery: {
    [key: string]: string | boolean | number;
  },
  options: { shallow: boolean } = { shallow: true }
) {
  // manually getting query params from url string to omit dynamic subpath values
  // (e.g. public_id) that can be included in router.query
  const [asPathWithoutQuery, prevQuery] = Router.asPath.split("?");
  // setting a query to undefined will remove it
  const query = removeUndefinedProperties({
    ...(prevQuery ? getQueryParamsObjFromString(prevQuery) : {}),
    ...newQuery,
  });
  const newParams = new URLSearchParams((query as any) as string).toString();
  return Router.push(
    {
      pathname: Router.pathname,
      query,
    },
    newParams ? `${asPathWithoutQuery}?${newParams}` : asPathWithoutQuery,
    options
  );
}
