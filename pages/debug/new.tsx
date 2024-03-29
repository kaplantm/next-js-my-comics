import React from 'react';
import { getAllSeries } from '@lib/utils/static-comics/utils';
import DebugOnlyWrapper from '@components/debug-only-wrapper';
import { isDevMode } from '@lib/utils';
import dynamic from 'next/dynamic';

const DebugAddComic = dynamic(() => import('@page-containers/debug-add-comic'));

const DebugAddComicPage = props => (
  <DebugOnlyWrapper>
    <DebugAddComic {...props} />
  </DebugOnlyWrapper>
);

export const getStaticProps = async () => {
  if (!isDevMode) {
    return {
      props: {},
    };
  }
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
      seriesTitles,
      allArcs,
    },
  };
};

export default DebugAddComicPage;
