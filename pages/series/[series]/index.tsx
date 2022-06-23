import { ComicWithMetadata } from '@lib/types';
import React from 'react';
import { getSeries, getSeriesTitles } from '@lib/utils/static-comics/utils';
import ComicBody from '@page-containers/comic-body';
import ListIndex from '@page-containers/comic-list-index/index';

const SeriesPage = ({
  listData,
  ...rest
}: {
  listData: ComicWithMetadata[];
  series: ComicWithMetadata;
  params: { series: string; issueNumber: string };
}) => (
  <>
    <ComicBody {...rest}>
      <ListIndex listData={listData} headerLabel="Comics" />
    </ComicBody>
  </>
);

export const getStaticPaths = async () => {
  const seriesTitles = await getSeriesTitles();
  const paths = seriesTitles.map(series => ({ params: { series } }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({
  params,
}: {
  params: { series: string };
}) {
  const series = await getSeries(params.series, true, false);
  const listData = Object.values(series.issues);
  return {
    props: {
      params,
      series,
      listData,
    },
  };
}

export default SeriesPage;
