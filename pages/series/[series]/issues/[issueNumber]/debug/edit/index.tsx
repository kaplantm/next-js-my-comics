import React from 'react';
import {
  getIssue,
  getSeriesTitles,
  getIssueNumbers,
  getAllSeries,
} from '@lib/utils/static-comics/utils';
import dynamic from 'next/dynamic';
import { ComicPageParams } from '@lib/types';
import DebugOnlyWrapper from '@components/debug-only-wrapper';
import { isDevMode } from '@lib/utils';

const DebugAddComic = dynamic(() => import('@page-containers/debug-add-comic'));

const DebugEditComicPage = props => (
  <DebugOnlyWrapper>
    <DebugAddComic {...props} editMode />
  </DebugOnlyWrapper>
);

export const getStaticPaths = async () => {
  if (!isDevMode) {
    return { paths: [], fallback: false };
  }
  const seriesTitles = await getSeriesTitles();
  const paths = (
    await Promise.all(
      seriesTitles.map(async series => {
        const issueNumbers = await getIssueNumbers(series);
        return issueNumbers.map(issueNumber => ({
          params: { series, issueNumber },
        }));
      })
    )
  ).flat();

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: { params: ComicPageParams }) {
  if (!isDevMode) {
    return {
      props: {},
    };
  }
  const issue = await getIssue(params.series, params.issueNumber);
  const comics = await getAllSeries(true, true);
  const seriesTitles = Object.keys(comics);
  const allIssues = seriesTitles
    .map(seriesTitle => {
      const issuesInSeries = comics[seriesTitle].issues;
      return Object.values(issuesInSeries);
    })
    .flat();
  const allArcs = allIssues.reduce((acc, { comic }) => {
    if (comic.frontMatter.arc) {
      const index = acc.indexOf(comic.frontMatter.arc);
      if (index === -1) {
        acc.push(comic.frontMatter.arc);
      }
    }
    return acc;
  }, []);

  return {
    props: {
      params,
      issue,
      allArcs,
    },
  };
}
export default DebugEditComicPage;
