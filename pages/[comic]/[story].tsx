import React from "react";
import { appAxios } from "../../src/lib/utils";
import ComicStory from "../../src/page-containers/comic-story";

const ComicStoryPage = (props) => <ComicStory {...props} />;

const imageSearchArray = new Array(50).fill(0).map((value, index) => index + 1);

export const getStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps = async ({ params }) => {
  const summary = await appAxios({
    method: "get",
    url: `/${params.comic}/${params.story}/summary.md`,
  });
  const info = await appAxios({
    method: "get",
    url: `/${params.comic}/${params.story}/info.json`,
  });

  // Search folder for up to 50 images (by name)
  const imageResults = (
    await Promise.all(
      imageSearchArray.map(async (value: number) => {
        const url = `/${params.comic}/${params.story}/${value}.png`;
        return {
          result: await appAxios({
            method: "get",
            url,
          }),
          url,
        };
      })
    )
  ).filter(({ result }) => result.response);

  return {
    props: {
      params,
      summary: summary.response?.data || null,
      info: info.response?.data || null,
      imageUrls: imageResults.map(({ url }) => url),
    },
  };
};

export default ComicStoryPage;
