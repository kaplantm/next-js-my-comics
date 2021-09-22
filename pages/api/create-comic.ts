import prisma from '../../lib/prisma';

// TODO: Optimize images - separate endpoint, save to public gitignored folder and return urls?

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
  }: BuildComicRequestType = req.body || ({} as BuildComicRequestType);
  const issueNumber = parseInt(req.body.issueNumber) || req.body.issueNumber;

  if (title && (!isIssue || (issueNumber && seriesId)) && link && description) {
    let result;
    try {
      if (isIssue) {
        result = await prisma.comicIssue.create({
          data: {
            title,
            coverDate: new Date(start).getTime(),
            description: description.trim(),
            link,
            number: issueNumber,
            series: { connect: { id: seriesId } },
            imageCollection: { create: {} },
          },
        });
      } else {
        const data = {
          title,
          startCoverDate: new Date(start).getTime(),
          endCoverDate: new Date(end).getTime(),
          description: description.trim(),
          link,
        };
        console.log('*******', { data, body: req.body });

        result = await prisma.comicSeries.create({
          data,
        });
      }
      return res.status(result ? 200 : 500).json(result);
      console.log('*****', { result });
    } catch (e) {
      console.log({ myError: e });
      return res.status(500).json({ error: e.message });
    }
  } else {
    return res
      .status(400)
      .json(
        'Missing required data. Series, title, issueNumber, link and description are required.'
      );
  }
}
