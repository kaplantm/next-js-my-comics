import React, { useState, memo } from "react";
import {
  Typography,
  Grid,
  Collapse,
  IconButton,
  Box,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
} from "@material-ui/core";
import useStyles from "./use-styles";
import { getInitialState } from "./helpers";
import AppLink from "@components/app-link";
import { KeyboardArrowDown, KeyboardArrowLeft } from "@material-ui/icons";
import ReactMarkdown from "react-markdown";
import { ComicWithMetadata } from "@lib/types";
import ArcSpot from "@components/arc-spot";

type ComicListIndexProps = {
  headerLabel: string;
  listData: ComicWithMetadata[];
  skipArcColorTooltip?: boolean;
};

// TODO: page head
// TODO: expand all

function ComicListIndex({
  headerLabel,
  listData,
  skipArcColorTooltip,
}: ComicListIndexProps) {
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
        <List>
          {listData.map(({ link, comic }, index) => (
            <ListItem key={link.pathname}>
              <ListItemIcon>
                <ArcSpot
                  tooltipText={
                    skipArcColorTooltip
                      ? null
                      : comic.frontMatter.arc || "No Arc / Unknown"
                  }
                  colorString={comic.frontMatter.arc}
                />
              </ListItemIcon>
              <Box display="flex" alignItems="center">
                <ListItemText>
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

                  <Collapse in={expandedState[index]}>
                    {comic?.description && (
                      <ReactMarkdown>{comic.description}</ReactMarkdown>
                    )}
                  </Collapse>
                </ListItemText>
              </Box>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default ComicListIndex;

export const MemoizedListIndex = memo(ComicListIndex);
