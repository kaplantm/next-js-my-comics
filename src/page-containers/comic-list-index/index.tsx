import React, { useState } from "react";
import { Typography, Grid, Collapse, IconButton, Box } from "@material-ui/core";
import useStyles from "./use-styles";
import { getInitialState } from "./helpers";
import AppLink from "@components/app-link";
import { KeyboardArrowDown, KeyboardArrowLeft } from "@material-ui/icons";
import ReactMarkdown from "react-markdown";
import { ComicWithMetadata } from "@lib/types";

type ComicListIndexProps = {
  headerLabel: string;
  listData: ComicWithMetadata[];
};

// TODO: page head
// TODO: expand all

function ComicListIndex({ headerLabel, listData }: ComicListIndexProps) {
  const [expandedState, setExpandedState] = useState(getInitialState(listData));
  const classes = useStyles();

  function toggleExpanded(index: number) {
    setExpandedState((prev) => {
      const clone = [...prev];
      clone[index] = !prev[index];
      return clone;
    });
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.coverImageContainer}>
        {headerLabel && <Typography variant="h1">{headerLabel}</Typography>}
        <ul>
          {listData.map(({ link, comic }, index) => (
            <li key={link.pathname}>
              <Box display="flex" alignItems="center">
                <AppLink nextProps={{ href: link.pathname }}>
                  {link.name}
                </AppLink>
                <IconButton onClick={() => toggleExpanded(index)}>
                  {expandedState[index] ? (
                    <KeyboardArrowDown />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </IconButton>
              </Box>
              <Collapse in={expandedState[index]}>
                {comic?.description && (
                  <ReactMarkdown>{comic.description}</ReactMarkdown>
                )}
              </Collapse>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}

export default ComicListIndex;
