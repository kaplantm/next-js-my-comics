import axios, { AxiosRequestConfig } from "axios";
import { appAxiosResponse } from "../types";

export function sleep(ms: number = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function appAxios<T>(
  config: AxiosRequestConfig
): Promise<appAxiosResponse<T>> {
  await sleep();
  try {
    return { response: await axios(config), error: null };
  } catch (e) {
    return { response: null, error: e };
  }
}
