import React from 'react';
import ComicBody from '@page-containers/comic-body';
import ListIndex from '@page-containers/comic-list-index/index';
import { getAllSeries, getSeries } from '@lib/utils/api-client';
import { ComicSeries, ComicIssue } from '.prisma/client';

const SeriesPage = ({
  series,
}: {
  series: ComicSeries & { issues: ComicIssue[] };
}) => (
  <>
    <ComicBody series={series}>
      <ListIndex listData={series.issues} headerLabel="Comics" isIssueList />
    </ComicBody>
  </>
);

export const getStaticPaths = async () => {
  const series =
    (await getAllSeries())?.response?.data || ([] as ComicSeries[]);
  const paths = series.map(({ id }) => ({ params: { series: `${id}` } }));

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
  const series =
    (await getSeries(params.series, { issues: true }))?.response.data ||
    ([] as ComicSeries[]);

  return {
    props: {
      series,
    },
  };
}

export default SeriesPage;
