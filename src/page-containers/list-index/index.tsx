import React, { useState } from "react";
import {
  Typography,
  Grid,
  Divider,
  Collapse,
  IconButton,
  Box,
} from "@material-ui/core";
import useStyles from "./use-styles";
import { listDataType, getInitialState } from "./helpers";
import { ComicType, mappedRouteType } from "@lib/types";
import AppLink from "@components/app-link";
import { KeyboardArrowLeft, KeyboardArrowUp } from "@material-ui/icons";
import ComicBody from "@page-containers/comic-body";
import ReactMarkdown from "react-markdown";

export type ListIndexProps = {
  headerLabel: string;
  listData: listDataType;
};

// TODO: page head
// TODO: expand all

function ListIndex({ headerLabel, listData }: ListIndexProps) {
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
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowUp />
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

export default ListIndex;
