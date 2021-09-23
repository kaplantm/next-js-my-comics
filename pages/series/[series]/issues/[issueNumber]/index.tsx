import ComicBody from '@page-containers/comic-body';
import React from 'react';
import { extendedComicSeries } from '@lib/types';
import { getAllSeries, getIssueBySeriesAndNumber } from '@lib/utils/api-client';

// TODO: right arrow - next in series
// TODO: down arrow - next in reading order
const IssuePage = props => <ComicBody {...props} />;

export const getStaticPaths = async () => {
  const series =
    (await getAllSeries({ issues: true }))?.response?.data ||
    ([] as extendedComicSeries[]);

  const paths = series
    .map(s =>
      (s.issues || []).map(issue => ({
        params: { series: `${s.id}`, issueNumber: `${issue.number}` },
      }))
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({
  params,
}: {
  params: {
    series: string;
    issueNumber: string;
  };
}) {
  const issue = (
    await getIssueBySeriesAndNumber(params.series, params.issueNumber)
  )?.response?.data;

  return {
    props: {
      issue,
    },
  };
}

export default IssuePage;
