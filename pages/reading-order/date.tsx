import React from 'react';
import {
  getAllSeries,
  getReadingOrder,
  writeJSONToFile,
} from '@lib/utils/static-comics/utils';
import MainIndex from '@page-containers/main-index';
import { sortingEnum } from '@page-containers/main-index/helpers';
import { getReadingOrderGroupData } from '@page-containers/main-index/build-helpers';
import { defaultItemsPerPage } from '@lib/hooks/use-paginate';

const IndexPage = props => <MainIndex sorting={sortingEnum.YEAR} {...props} />;

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

  const sorting = sortingEnum.YEAR;
  const groupData = getReadingOrderGroupData({
    allIssues,
    readingOrder,
    sorting,
  });

  // write to file so we can make a request later
  await writeJSONToFile(`./public/data/all-data-${sorting}`, groupData);

  let totalIssues = 0;
  const groupDataWithoutDescription = {
    order: groupData.order,
    groups: Object.keys(groupData.groups).reduce((acc, key) => {
      const issues = groupData.groups[key].issues.slice(
        0,
        defaultItemsPerPage - totalIssues
      );
      acc[key] = {
        ...groupData.groups[key],
        issues: issues.map(el => ({
          ...el,
          description: '',
        })),
      };
      totalIssues += issues.length;
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
