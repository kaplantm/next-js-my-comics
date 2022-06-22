import React from 'react';
import { getAllSeries, getReadingOrder } from '@lib/utils/static-comics/utils';
import MainIndex from '@page-containers/main-index';
import { sortingEnum } from '@page-containers/main-index/helpers';
import { getReadingOrderGroupData } from '@page-containers/main-index/build-helpers';

const IndexPage = props => <MainIndex sorting={sortingEnum.YEAR} {...props} />;

export const getStaticProps = async () => {
  const readingOrder = await getReadingOrder();
  const comics = await getAllSeries(true, true);
  const allIssues = Object.keys(comics)
    .map(seriesTitle => {
      const issuesInSeries = comics[seriesTitle].issues;
      return Object.values(issuesInSeries);
    })
    .flat();

  const groupData = getReadingOrderGroupData({
    allIssues,
    readingOrder,
    sorting: sortingEnum.YEAR,
  });

  return {
    props: {
      groupData,
      readingOrder,
    },
  };
};

export default IndexPage;
