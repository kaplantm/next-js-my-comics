import { IssueType } from '.prisma/client';
import { getMonthYear } from '@lib/utils/date-utils';
import { unSnakeTitleCase } from '@lib/utils/string-utils';
import { Typography } from '@material-ui/core';
import AppLink from '../../components/app-link';
import { getSeriesRoute } from '../../lib/constants/routes';

export const getStartEnd = (start: Date, end: Date, short?: boolean) => {
  if (!start && !end) {
    return null;
  }
  if (!end) {
    return ` (${getMonthYear(start, short)})`;
  }
  return ` (${getMonthYear(start, short) || '?'} - ${getMonthYear(
    end,
    short
  )})`;
};

export const getDisplayTitle = (
  titleLink: string,
  title: string,
  isIssue: boolean,
  seriesStart: Date,
  seriesEnd: Date
) => {
  const displayTitle = (
    <Typography variant="h1" gutterBottom>
      {title}
      {isIssue ? '' : getStartEnd(seriesStart, seriesEnd, true)}
    </Typography>
  );
  return titleLink ? (
    <AppLink nextProps={{ href: titleLink }}>{displayTitle}</AppLink>
  ) : (
    displayTitle
  );
};
export const getDisplaySubtitle = (
  seriesId: number,
  seriesTitle: string,
  issueNumber: string | number,
  issueStart: Date,
  issueType: IssueType
) => (
  <AppLink nextProps={{ href: getSeriesRoute(seriesId) }}>
    <Typography variant="h2">
      {seriesTitle}
      {issueNumber
        ? ` - ${
            issueType && issueType !== IssueType.STANDARD
              ? `${unSnakeTitleCase(issueType)} `
              : ''
          }#${issueNumber} `
        : ''}
      {getStartEnd(issueStart, null)}
    </Typography>
  </AppLink>
);
