import React from 'react';
import ListIndex from '@page-containers/comic-list-index/index';
import { getAllSeries } from '@lib/utils/static-comics/utils';

const SeriesIndexPage = ({ listData }) => (
  <ListIndex listData={listData} headerLabel="Series" skipArcColorTooltip />
);

export const getStaticProps = async () => {
  const series = await getAllSeries(false, true);

  return {
    props: {
      listData: Object.values(series),
    },
  };
};

export default SeriesIndexPage;
