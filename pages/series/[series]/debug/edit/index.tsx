import React from 'react';
import { getSeriesTitles, getSeries } from '@lib/utils/static-comics/utils';
import { ComicPageParams } from '@lib/types';
import DebugOnlyWrapper from '@components/debug-only-wrapper';
import { isDevMode } from '@lib/utils';
import dynamic from 'next/dynamic';

const DebugAddComic = dynamic(() => import('@page-containers/debug-add-comic'));

const DebugEditComicPage = props => (
  <DebugOnlyWrapper>
    <DebugAddComic {...props} editMode />
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
  const paths = seriesTitles.map(series => ({ params: { series } }));

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
  const series = await getSeries(params.series);

  return {
    props: {
      params,
      series,
    },
  };
}
export default DebugEditComicPage;
