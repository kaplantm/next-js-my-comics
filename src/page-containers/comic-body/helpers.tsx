import AppLink from "../../components/app-link";
import { getSeriesRoute } from "../../lib/constants/routes";
import { Typography } from "@material-ui/core";

export const getStartEnd = (start: string | number, end: string | number) => {
  if (!start && !end) {
    return null;
  }
  if (!end) {
    return ` (${start})`;
  }
  return ` (${start || "?"} - ${end})`;
};

export const getDisplayTitle = (
  titleLink: string,
  title: string,
  isIssue: boolean,
  seriesStart: string | number,
  seriesEnd: string | number
) => {
  const displayTitle = (
    <Typography variant="h1" gutterBottom>
      {title}
      {isIssue ? "" : getStartEnd(seriesStart, seriesEnd)}
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
  issueStart: string | number,
  issueEnd: string | number
) => (
  <AppLink nextProps={{ href: getSeriesRoute(paramSeries) }}>
    <Typography variant="h2">
      {seriesTitle}
      {issueNumber ? ` - #${issueNumber} ` : ""}
      {getStartEnd(issueStart, issueEnd)}
    </Typography>
  </AppLink>
);
