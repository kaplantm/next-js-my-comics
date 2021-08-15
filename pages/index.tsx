import React from 'react';
import { getAllSeries, getReadingOrder } from '@lib/utils/static-comics/utils';
import MainIndex from '@page-containers/main-index';
import { getReadingOrderGroupData } from '@page-containers/main-index/build-helpers';
import { sortingEnum } from '@page-containers/main-index/helpers';

const IndexPage = props => <MainIndex {...props} />;

export const getStaticProps = async () => {
  const readingOrder = await getReadingOrder();
  const comics = await getAllSeries(true);
  // Omit issue descriptions to reduce JSON data size
  const allIssues = Object.keys(comics)
    .map(seriesTitle => {
      const issuesInSeries = comics[seriesTitle].issues;
      return Object.values(issuesInSeries).map(issue => ({
        ...issue,
        comic: { ...issue.comic, description: '' },
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
