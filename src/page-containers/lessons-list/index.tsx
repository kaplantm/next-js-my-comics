import React, { useMemo, useState } from "react";
import { List, ListItem, Box, ListItemText } from "@material-ui/core";
import {
  lessonsListItemType,
  categoriesEnum,
  allCategories,
} from "./list-items";
import useStyles from "./useStyles";
import CategoryChip from "./category-chip";
import { getInitialState, tagStateType, getDisplayItems } from "./helpers";
import AppLink from "../../components/app-link";
import { mappedRouteType } from "../../lib/types";

export default function LessonsList() {
  const classes = useStyles();
  const [tags, setTags] = useState<tagStateType>(getInitialState());

  function onTagClick(category: categoriesEnum) {
    setTags((prev) => ({ ...prev, [category]: !prev[category] }));
  }

  const filteredItems = useMemo(() => getDisplayItems(tags), [tags]);

  return (
    <>
      <div className={classes.allCategories}>
        {allCategories.map((category: categoriesEnum) => (
          <CategoryChip
            category={category}
            key={category}
            toggleActive={onTagClick}
            active={tags[category]}
          />
        ))}
      </div>
      <List>
        {filteredItems.map((item: lessonsListItemType) => (
          <ListItem key={item.text} classes={{ root: classes.listItem }}>
            <Box display="flex" flex={1} flexDirection="column">
              <ListItemText>{item.text}</ListItemText>
              <Box
                display="flex"
                alignItems="flex-end"
                justifyContent="flex-end"
              >
                {!!item.categories &&
                  item.categories.map((category: categoriesEnum) => (
                    <CategoryChip
                      category={category}
                      key={category}
                      toggleActive={onTagClick}
                      active={tags[category]}
                    />
                  ))}
              </Box>
              <Box display="flex" flexDirection="column">
                {!!item.links &&
                  item.links.map((link: mappedRouteType) => (
                    <AppLink
                      key={`${link.name}${link.pathname}`}
                      nextProps={{
                        href: {
                          pathname: link.pathname,
                          query: link.query,
                        },
                      }}
                    >
                      {link.name}
                    </AppLink>
                  ))}
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );
}
