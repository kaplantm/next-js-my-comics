import React from 'react';
import ListIndex from '@page-containers/comic-list-index/index';
import { getAllSeries } from '@lib/utils/api-client';
import { ComicSeries } from '.prisma/client';

const SeriesIndexPage = ({ listData }) => (
  <ListIndex listData={listData} headerLabel="Series" skipArcColorTooltip />
);

export const getStaticProps = async () => {
  const series =
    (await getAllSeries())?.response?.data || ([] as ComicSeries[]);

  return {
    props: {
      listData: series,
    },
  };
};

export default SeriesIndexPage;
