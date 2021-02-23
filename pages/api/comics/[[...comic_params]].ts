// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { appAxios } from "../../../src/lib/utils";

// You might assume I made an internal endpoint to protect my API key from being leaked into the FE javascript code
// But its mostly because the comicvine API is bad and doesn't send a cors header so chrome blocks it
const comicVineApiUrl = "http://comicvine.gamespot.com/api";
export default async function handler(req, res) {
  // remove our api path and query params, leaving behind only desired comicVinePath
  const comicVinePath = req.url.split("api/comics/")[1]?.split("?")[0];
  const url = `${comicVineApiUrl}/${comicVinePath}`;

  const queryWithEmptyComicParams = req.query;
  delete queryWithEmptyComicParams.comic_params;
  const params = {
    ...queryWithEmptyComicParams,
    api_key: process.env.COMIC_VINE_API_KEY,
    format: "json",
  };
  const result = await appAxios({
    method: "get",
    url,
    params,
  });

  res
    .status(result.error?.code || result.response?.status)
    .json(result.error?.message || result.response?.data);
}
