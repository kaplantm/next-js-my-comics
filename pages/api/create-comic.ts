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
  issueNumber: string | number;
  arc: string;
  link: string;
  description: string;
};

const buildComicData = ({
  title,
  start,
  end,
  issueNumber,
  arc,
  link,
  description,
}: BuildComicRequestType) => `---
title: ${title ? `"${title}"` : null}
start: ${start ? `"${start}"` : null}
end: ${end ? `"${end}"` : null}
issue: ${issueNumber || null}
arc: ${arc ? `"${arc}"` : null}
link: ${link ? `"${link}"` : null}
---

${description.trim()}
`;

// TODO: issue number always number
export default async function handler(req, res) {
  const body = req.body || ({} as BuildComicRequestType);
  const issueNumber = parseInt(req.body.issueNumber) || req.body.issueNumber;

  if (
    body.series &&
    body.title &&
    (!body.isIssue || issueNumber) &&
    body.link &&
    body.description
  ) {
    const comicDirectory = body.isIssue
      ? getIssueDirectory(body.series, body.issueNumber)
      : getSeriesDirectory(body.series);
    const comicExists = existsSync(comicDirectory);

    if (comicExists && req.method === "POST") {
      return res.status(409).json("Comic already exists");
    }
    if (!comicExists && req.method === "PUT") {
      return res.status(409).json("Comic not found");
    }
    if (body.isIssue) {
      const seriesExists = existsSync(getSeriesDirectory(body.series));
      if (!seriesExists) {
        return res.status(404).json("Series not found");
      }
    }

    try {
      const markdownData = buildComicData(body);
      const fileLocation = `${comicDirectory}/data.md`;
      ensureDirectoryExistence(fileLocation);
      await promises.writeFile(fileLocation, markdownData);
      return res.status(200).json("Comic Created");
    } catch (e) {
      console.log("create-comic", e);
      return res.status(500).json("Something went wrong. See server console.");
    }
  } else {
    return res
      .status(400)
      .json(
        "Missing required data. Series, title, issueNumber, link and description are required."
      );
  }
}
