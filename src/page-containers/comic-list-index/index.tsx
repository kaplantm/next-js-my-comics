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
            <ListItem
              className={classes.listItem}
              disableGutters
              key={link.pathname}
            >
              <Box
                display="flex"
                alignItems="flex-start"
                flexDirection="column"
              >
                <Box display="flex" alignItems="center">
                  {!skipArcColorTooltip && (
                    <ListItemIcon className={classes.arcSpotWrapper}>
                      <ArcSpot
                        tooltipText={
                          skipArcColorTooltip
                            ? null
                            : comic.frontMatter.arc || "No Arc / Unknown"
                        }
                        colorString={comic.frontMatter.arc}
                      />
                    </ListItemIcon>
                  )}
                  <ListItemText>
                    <Box display="flex" alignItems="center">
                      <AppLink nextProps={{ href: link.pathname }}>
                        {link.name}
                      </AppLink>
                      <IconButton
                        className={classes.expandButton}
                        onClick={() => toggleExpanded(index)}
                      >
                        {expandedState[index] ? (
                          <KeyboardArrowDown />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                      </IconButton>
                    </Box>
                  </ListItemText>
                </Box>
                <Collapse in={expandedState[index]}>
                  {comic?.description && (
                    <Box mt={2} mb={1} ml={3}>
                      <ReactMarkdown>{comic.description}</ReactMarkdown>
                    </Box>
                  )}
                </Collapse>
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
