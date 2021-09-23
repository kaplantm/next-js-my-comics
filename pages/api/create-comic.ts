import prisma from '../../lib/prisma';

type BuildComicRequestType = {
  seriesId?: number;
  title: string;
  start: string | number;
  end?: string | number;
  issueNumber: number;
  arc: string;
  link: string;
  description: string;
  isIssue: boolean;
  id?: number;
};

// TODO: issue number always number
// TODO: handle PUT
export default async function handler(req, res) {
  const {
    title,
    start,
    end,
    description,
    link,
    isIssue,
    seriesId,
    id,
  }: BuildComicRequestType = req.body || ({} as BuildComicRequestType);
  const issueNumber = parseInt(req.body.issueNumber) || req.body.issueNumber;

  if (title && (!isIssue || (issueNumber && seriesId)) && link && description) {
    let result;
    try {
      if (req.method === 'POST') {
        const exists = await (isIssue
          ? prisma.comicIssue.findFirst({
              where: { number: issueNumber, seriesId },
            })
          : prisma.comicSeries.findFirst({
              where: { title },
            }));
        if (exists) {
          return res.status(409).json({
            error: {
              message: isIssue
                ? `IssueNumber ${issueNumber} already exists for seriesId ${seriesId}.`
                : `Series with title ${title} already exists.`,
            },
          });
        }
      }
      if (isIssue) {
        const data = {
          title,
          coverDate: new Date(start).getTime(),
          description: description.trim(),
          link,
          number: issueNumber,
          series: { connect: { id: seriesId } },
          imageCollection: { create: {} },
        };
        result = await (req.method === 'POST'
          ? prisma.comicIssue.create({ data })
          : prisma.comicIssue.update({ data, where: { id } }));
      } else {
        const data = {
          title,
          startCoverDate: new Date(start).getTime(),
          endCoverDate: new Date(end).getTime(),
          description: description.trim(),
          link,
        };
        result = await (req.method === 'POST'
          ? prisma.comicSeries.create({ data })
          : prisma.comicSeries.update({ data, where: { id } }));
      }
      return res.status(result ? 200 : 500).json(result);
    } catch (e) {
      return res.status(500).json({
        error: {
          message: e?.message,
          meta: e?.meta,
          code: e?.code,
        },
      });
    }
  } else {
    return res.status(400).json({
      error: {
        message:
          'Missing required data. Series, title, issueNumber, link and description are required.',
      },
    });
  }
}
