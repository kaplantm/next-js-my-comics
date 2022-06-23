import React from 'react';
import {
  getIssue,
  getSeriesTitles,
  getIssueNumbers,
} from '@lib/utils/static-comics/utils';
import dynamic from 'next/dynamic';
import { ComicPageParams } from '@lib/types';
import DebugOnlyWrapper from '@components/debug-only-wrapper';
import { isDevMode } from '@lib/utils';

const DebugAddImages = dynamic(
  () => import('@page-containers/debug-add-images')
);

const DebugEditComicImagesPage = props => (
  <DebugOnlyWrapper>
    <DebugAddImages {...props} editMode />
  </DebugOnlyWrapper>
);

export const getStaticPaths = async () => {
  if (!isDevMode) {
    return {
      paths: [],
      fallback: false,
    };
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

  return {
    props: {
      params,
      issue,
    },
  };
}
export default DebugEditComicImagesPage;
