import React from "react";
import { Typography, Grid } from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import AppLink from "../../../src/components/app-link";
import useStyles from "./useStyles";
import ViewableImage from "../../components/viewable-image";

const imageSearchArray = new Array(50).fill(0).map((value, index) => index + 1);

// TODO: tpye of info and prop type
// TODO: main page w/ everything in order. Order options: reading order, by comic, by year published
function ComicStory(props) {
  const classes = useStyles();
  const { params, summary, info, imageUrls } = props;
  const { comic, story } = params;

  const title = (
    <Typography variant="h1">
      {comic} {info.issue ? `#${info.issue}` : ""} {story} (
      {info.collects ? `Collects ${info.collects}, ` : ""}
      {info.year})
    </Typography>
  );
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {info.link ? (
          <AppLink nextProps={{ href: info.link }}>{title}</AppLink>
        ) : (
          title
        )}
      </Grid>

      <Grid
        item
        xs={12}
        container
        spacing={3}
        className={classes.summaryImageContainer}
      >
        <Grid item xs={12} md={9}>
          <Typography component="div">
            {summary && <ReactMarkdown>{summary}</ReactMarkdown>}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <ViewableImage
            src={`/${params.comic}/${params.story}/cover.png`}
            width="100%"
          />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3}>
          {imageUrls.map((url: string) => (
            <Grid item xs={12} md={4} key={url}>
              <ViewableImage src={url} width="100%" />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ComicStory;
