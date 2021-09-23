import React from 'react';
import { getReadingOrder } from '@lib/utils/static-comics/utils';
import MainIndex from '@page-containers/main-index';
import { getReadingOrderGroupData } from '@page-containers/main-index/build-helpers';
import { sortingEnum } from '@page-containers/main-index/helpers';
import { getAllSeries } from '@lib/utils/api-client';

const IndexPage = props => (
  <MainIndex sorting={sortingEnum.READING_ORDER} {...props} />
);

export const getStaticProps = async () => {
  const readingOrder = await getReadingOrder(); // TODO: now just a json file?
  const series =
    (await getAllSeries({ issues: true, arcs: true }))?.response?.data || [];

  // Omit issue descriptions to reduce JSON data size
  const allIssues = series
    .map(s => {
      const minimalSeries = { ...s, issues: null };
      return (s.issues || []).map(issue => ({
        series: minimalSeries,
        ...issue,
        description: '',
      }));
    })
    .flat();

  const groupData = getReadingOrderGroupData({
    allIssues,
    readingOrder,
    sorting: sortingEnum.READING_ORDER,
  });

  return {
    props: {
      groupData,
      readingOrder,
    },
  };
};

export default IndexPage;
