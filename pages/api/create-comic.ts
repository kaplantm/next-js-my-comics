import {
  getSeriesDirectory,
  getIssueDirectory,
  ensureDirectoryExistence,
} from "@lib/utils/static-comics/utils";
import { promises, existsSync } from "fs";

// TODO: Optimize images - separate endpoint, save to public gitignored folder and return urls?

type BuildComicRequestType = {
  series: string;
  title: string;
  start: string | number;
  end?: string | number;
  issue: string | number;
  arc: string;
  link: string;
  description: string;
};

const buildComicData = ({
  title,
  start,
  end,
  issue,
  arc,
  link,
  description,
}: BuildComicRequestType) => `---
title: ${title || null}
start: ${start || null}
end: ${end || null}
issue: ${issue || null}
arc: ${arc || null}
link: ${link || null}
---

${description}
`;

export default async function handler(req, res) {
  const body = req.body || ({} as BuildComicRequestType);
  console.log({ req });

  if (
    body.series &&
    body.title &&
    body.issue &&
    body.link &&
    body.description
  ) {
    const issueDirectory = getIssueDirectory(body.series, body.issue);
    const issueExists = existsSync(issueDirectory);
    if (issueExists) {
      res.status(409).json("Issue already exists");
    }
    const seriesExists = existsSync(getSeriesDirectory(body.series));
    if (!seriesExists) {
      res.status(404).json("Series not found");
    }

    try {
      const markdownData = buildComicData(body);
      const fileLocation = `${issueDirectory}/data.md`;
      ensureDirectoryExistence(fileLocation);
      await promises.writeFile(fileLocation, markdownData);
      res.status(200).json("Comic Created");
    } catch (e) {
      console.log(e);
      res.status(500).json("Something went wrong. See server console.");
    }
  } else {
    res
      .status(400)
      .json(
        "Missing required data. Series, title, issue, link and description are required."
      );
    return;
  }
  // TODO: write markdown file
  // TODO: upload images to s3

  // TODO: errors
  // - no series, no issue number, no title, no link, series doesn't exist, issue already exists
}

// TODO: separate edit pages in series/edit and series/issues/#/edit
