import React from 'react';
import {
  getAllSeries,
  getReadingOrder,
  writeJSONToFile,
} from '@lib/utils/static-comics/utils';
import MainIndex from '@page-containers/main-index';
import { getReadingOrderGroupData } from '@page-containers/main-index/build-helpers';
import { sortingEnum } from '@components/search-results/helpers';

const IndexPage = props => <MainIndex {...props} />;

export const getStaticProps = async () => {
  const readingOrder = await getReadingOrder();
  const comics = await getAllSeries(true, false);
  // Omit unneeded data to reduce JSON data size
  const allIssues = Object.keys(comics)
    .map(seriesTitle => {
      const issuesInSeries = comics[seriesTitle].issues;
      return Object.values(issuesInSeries).map(issue => ({
        ...issue,
        comic: { ...issue.comic, imagePaths: [] },
      }));
    })
    .flat();

  const groupData = getReadingOrderGroupData({
    allIssues,
    readingOrder,
    sorting: sortingEnum.READING_ORDER,
  });

  // write to file so we can make a request later
  await writeJSONToFile('./public/data/all-data', groupData);

  const groupDataWithoutDescription = {
    order: groupData.order,
    groups: Object.keys(groupData.groups).reduce((acc, key) => {
      acc[key] = {
        ...groupData.groups[key],
        issues: groupData.groups[key].issues.map(el => ({
          ...el,
          description: '',
        })),
      };
      return acc;
    }, {}),
  };

  return {
    props: {
      groupData: groupDataWithoutDescription,
      readingOrder,
    },
  };
};

export default IndexPage;
