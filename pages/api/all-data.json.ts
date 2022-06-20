import { getAllSeries, getReadingOrder } from '@lib/utils/static-comics/utils';
import { getReadingOrderGroupData } from '@page-containers/main-index/build-helpers';
import { sortingEnum } from '@page-containers/main-index/helpers';

export default async function handler(req, res) {
  const readingOrder = await getReadingOrder();
  const comics = await getAllSeries(true);
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

  return res.status(200).json(groupData);
}
