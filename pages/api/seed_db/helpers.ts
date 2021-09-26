/* eslint-disable import/prefer-default-export */
import { ComicWithMetadata } from '@lib/types';
import { isValidDate } from '@lib/utils/date-utils';
import { getAllSeries } from '@lib/utils/static-comics/utils';
import type { NextApiResponse } from 'next';
import { IssueType } from '.prisma/client';
import prisma from '../../../lib/prisma';

const defaultDate = new Date(1, 1, 1);
async function seedSeries(allSeriesFiles: {
  [key: string]: ComicWithMetadata;
}) {
  const data = Object.keys(allSeriesFiles).map(key => {
    const series = allSeriesFiles[key];

    const start = new Date(series.comic.frontMatter.start);
    const end = new Date(series.comic.frontMatter.end);
    console.log({
      start: series.comic.frontMatter.start,
      end: series.comic.frontMatter.end,
      start1: start,
      end1: end,
    });
    return {
      title: key,
      startCoverDate: isValidDate(start) ? start.toISOString() : undefined,
      endCoverDate: isValidDate(end) ? end.toISOString() : undefined,
      description: series.comic.description.trim(),
      link: series.comic.frontMatter.link || '',
    };
  });
  return prisma.comicSeries.createMany({ data });
}

// Note: will need to add arc info manualy
async function seedArcs(arcs: string[]) {
  const data = arcs.map(arc => ({
    title: arc,
    startCoverDate: new Date(1, 1, 1).toISOString(),
    link: 'TBD',
    description: 'TBD',
  }));
  return prisma.comicArc.createMany({ data });
}

async function seedIssues(
  allIssuesFiles: ComicWithMetadata[],
  allSeriesNameIdMap: { [key: string]: number },
  allArcsNameIdMap: { [key: string]: number }
) {
  const dataArray = allIssuesFiles.map(issue => {
    const seriesId = allSeriesNameIdMap[issue.params.series];
    const arcId = allArcsNameIdMap[issue.comic.frontMatter.arc];
    const start = new Date(issue.comic.frontMatter.start);
    return {
      title: issue.comic.frontMatter.title,
      coverDate: isValidDate(start) ? start.toISOString() : undefined,
      description: issue.comic.description.trim(),
      link: issue.comic.frontMatter.link || '',
      number: parseInt(issue.comic.frontMatter.issueNumber),
      series: seriesId ? { connect: { id: seriesId } } : undefined,
      arc: arcId ? { connect: { id: arcId } } : undefined,
      issueType: issue.comic.frontMatter.issueType || IssueType.STANDARD,
      imageCollection: issue.comic.imagePaths?.length
        ? {
            create: {
              images: {
                create: issue.comic.imagePaths.map(imageUrl => ({ imageUrl })),
              },
            },
          }
        : { create: {} },
    };
  });

  // Not using createMany since we need to create new relations
  return Promise.all(
    dataArray.map(async data => prisma.comicIssue.create({ data }))
  );
}

export async function seedAll(res: NextApiResponse);
const allSeriesFiles = await getAllSeries(true);
// await seedSeries(allSeriesFiles);
const allSeries = await prisma.comicSeries.findMany();
const allSeriesNameIdMap = allSeries.reduce((acc, val) => {
  acc[val.title] = val.id;
  return acc;
}, {});

{
  const allSeriesFiles = await getAllSeries(true);
  // await seedSeries(allSeriesFiles);
  const allSeries = await prisma.comicSeries.findMany();
  const allSeriesNameIdMap = allSeries.reduce((acc, val) => {
    acc[val.title] = val.id;
    return acc;
  }, {});

  console.log({ allSeriesNameIdMap });
  const allArcsFromFiles = Object.keys(
    Object.values(allSeriesFiles).reduce((acc, s) => {
      if (s.issues && Object.values(s.issues).length) {
        Object.values(s.issues).forEach(issue => {
          if (issue.comic.frontMatter.arc) {
            acc[issue.comic.frontMatter.arc] = true;
          }
        });
      }
      return acc;
    }, {})
  );
  // await seedArcs(allArcsFromFiles as string[]);
  const allArcs = await prisma.comicArc.findMany();
  const allArcsNameIdMap = allArcs.reduce((acc, val) => {
    acc[val.title] = val.id;
    return acc;
  }, {});
  console.log({ allArcsNameIdMap });

  // TODO: seed panels
  const allIssuesFromFiles = Object.values(allSeriesFiles)
    .map(s => Object.values(s.issues))
    .flat();
  // await seedIssues(allIssuesFromFiles, allSeriesNameIdMap, allArcsNameIdMap);

  return res.status(200).json(allArcsFromFiles);
}
