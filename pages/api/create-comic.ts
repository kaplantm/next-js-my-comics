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
issueNumber: ${issueNumber || null}
arc: ${arc ? `"${arc}"` : null}
link: ${link ? `"${link}"` : null}
---

${description.trim()}
`;

// TODO: issue number always number
export default async function handler(req, res) {
  const body = req.body || ({} as BuildComicRequestType);
  const issueNumber = parseInt(req.body.issueNumber);
  console.log({ req });

  if (
    body.series &&
    body.title &&
    issueNumber &&
    body.link &&
    body.description
  ) {
    const issueDirectory = getIssueDirectory(body.series, body.issueNumber);
    const issueExists = existsSync(issueDirectory);
    if (issueExists && req.method === "POST") {
      return res.status(409).json("Issue already exists");
    }
    const seriesExists = existsSync(getSeriesDirectory(body.series));
    if (!seriesExists) {
      return res.status(404).json("Series not found");
    }

    try {
      const markdownData = buildComicData(body);
      const fileLocation = `${issueDirectory}/data.md`;
      ensureDirectoryExistence(fileLocation);
      await promises.writeFile(fileLocation, markdownData);
      return res.status(200).json("Comic Created");
    } catch (e) {
      console.log(e);
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
