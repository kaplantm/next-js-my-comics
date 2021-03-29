import AppLink from "../../components/app-link";
import { getSeriesRoute } from "../../lib/constants/routes";
import { Typography } from "@material-ui/core";

// TODO:
// get indexes working for series and issues
// get main index working w/ reading order andd filters
// add content
export const getStartEnd = (
  startYear: string | number,
  endYear: string | number
) => {
  if (!startYear && !endYear) {
    return null;
  }
  if (!endYear) {
    return ` (${startYear})`;
  }
  return ` (${startYear || "?"} - ${endYear})`;
};

export const getDisplayTitle = (
  titleLink: string,
  title: string,
  isIssue: boolean,
  seriesStartYear: string | number,
  seriesEndYear: string | number
) => {
  const displayTitle = (
    <Typography variant="h1" gutterBottom>
      {title}
      {isIssue ? "" : getStartEnd(seriesStartYear, seriesEndYear)}
    </Typography>
  );
  return titleLink ? (
    <AppLink nextProps={{ href: titleLink }}>{displayTitle}</AppLink>
  ) : (
    displayTitle
  );
};
export const getDisplaySubtitle = (
  paramSeries: string,
  seriesTitle: string,
  issueNumber: number,
  issueStartYear: string | number,
  issueEndYear: string | number
) => (
  <AppLink nextProps={{ href: getSeriesRoute(paramSeries) }}>
    <Typography variant="h2">
      {seriesTitle}
      {issueNumber ? ` - #${issueNumber} ` : ""}
      {getStartEnd(issueStartYear, issueEndYear)}
    </Typography>
  </AppLink>
);
