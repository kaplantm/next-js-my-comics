import React, { useState, memo } from 'react';
import { ComicType, MappedRouteType } from '@lib/types';
import useStyles from './use-styles';
import MemoCollapsibleDescription from './description';
import MemoTitle from './title';

const ComicIndexListItem = ({
  link,
  comic,
  skipArcColorTooltip,
  skipDescription,
}: {
  link: MappedRouteType;
  comic: ComicType;
  skipArcColorTooltip: boolean;
  skipDescription: boolean;
}) => {
  if (link.pathname === '/series/Robin Volume 2/issues/53') {
    console.log('*** ComicIndexListItem render');
  }
  const [expanded, setExpanded] = useState(false);
  const { classes } = useStyles();

  function toggleExpanded() {
    setExpanded(prev => !prev);
  }

  return (
    <li className={classes.listItem} key={link.pathname}>
      <MemoTitle
        arc={comic.frontMatter.arc}
        skipArcColorTooltip={skipArcColorTooltip}
        linkPath={link.pathname}
        linkName={link.name}
        skipDescription={skipDescription}
        toggleExpanded={toggleExpanded}
        expanded={expanded}
      />
      {!skipDescription && (
        <MemoCollapsibleDescription
          linkPath={link.pathname}
          description={comic.description}
          expanded={expanded}
        />
      )}
    </li>
  );
};

export default memo(ComicIndexListItem);
