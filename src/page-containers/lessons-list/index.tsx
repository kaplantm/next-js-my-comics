import React, { useState } from "react";
import {
  Chip,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Box,
  ListItemText,
} from "@material-ui/core";
import {
  lessonsListItems,
  lessonsListItemType,
  categoriesEnum,
} from "./list-items";
import useStyles from "./useStyles";
import { Info } from "@material-ui/icons";
import clsx from "clsx";
import CategoryChip from "./category-chip";

// TODO: filters
export default function LessonsList() {
  const classes = useStyles();
  return (
    <List>
      {lessonsListItems.map((item: lessonsListItemType) => (
        <ListItem key={item.text} classes={{ root: classes.listItem }}>
          <Box display="flex" flex={1} flexDirection="column">
            <ListItemText>{item.text}</ListItemText>
            <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
              {!!item.categories &&
                item.categories.map((category: categoriesEnum) => (
                  <CategoryChip category={category} key={category} />
                ))}
            </Box>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
