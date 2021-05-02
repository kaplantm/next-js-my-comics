import ViewableImage from '@components/viewable-image';
import useKeyPress from '@lib/hooks/use-key-press';
import { Button, useMediaQuery } from '@material-ui/core';
import { useCallback, useEffect, useState } from 'react';
import useStyles from './use-styles';

const pageSize = 12;

/**
 * MasonryLayout component
 * Source: https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99
 */
const MasonryLayout = ({
  columns = 3,
  smallWidthColumns = 2,
  gap = 20,
  images,
}: {
  columns?: number;
  smallWidthColumns?: number;
  gap?: number;
  images: string[];
}) => {
  const {
    ArrowRight: isRightArrowPressed,
    ArrowLeft: isLeftArrowPressed,
  } = useKeyPress(['ArrowRight', 'ArrowLeft']);
  const [openIndex, setOpenIndex] = useState(null);
  const classes = useStyles();
  const columnWrapper = {};
  const result = [];
  const isSmallWindow = useMediaQuery('(max-width:600px)');
  const numColumns = isSmallWindow ? smallWidthColumns : columns;
  const [numItemsToDisplay, setNumItemsToDisplay] = useState(pageSize);
  const showShowMore = numItemsToDisplay < images.length;

  const safetlyChangeOpenIndex = useCallback(
    (delta: number) => {
      setOpenIndex((prev: number) =>
        Math.min(numItemsToDisplay, Math.max(0, prev + delta))
      );
    },
    [numItemsToDisplay]
  );

  useEffect(() => {
    if (isLeftArrowPressed) {
      safetlyChangeOpenIndex(-1);
    } else if (isRightArrowPressed) {
      safetlyChangeOpenIndex(1);
    }
  }, [isRightArrowPressed, isLeftArrowPressed, safetlyChangeOpenIndex]);

  const showMoreItem = (
    <div className={classes.showMoreButtonContainer} key="showMoreItem">
      <Button
        variant="contained"
        color="default"
        onClick={onShowMore}
        className={classes.showMoreButton}
      >
        Show More
      </Button>
    </div>
  );
  const itemsToDisplay = images.slice(0, numItemsToDisplay);

  function onShowMore() {
    setNumItemsToDisplay(prev => prev + pageSize);
  }

  // create columns
  for (let i = 0; i < numColumns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  // divide children into columns
  for (let i = 0; i < itemsToDisplay.length; i++) {
    const columnIndex = i % numColumns;
    const image = images[i];
    columnWrapper[`column${columnIndex}`].push(
      <div
        className={classes.imageMatte}
        style={{ marginBottom: `${gap}px` }}
        key={`column${columnIndex}${i}`}
      >
        <ViewableImage
          src={image}
          key={image}
          index={i}
          open={openIndex === i}
          setOpenIndex={setOpenIndex}
          changeOpenIndex={safetlyChangeOpenIndex}
        />
      </div>
    );
  }

  if (showShowMore) {
    columnWrapper[`column${Math.floor(numColumns / 2)}`].push(showMoreItem);
  }

  // wrap children in each column with a div
  for (let i = 0; i < numColumns; i++) {
    result.push(
      <div
        key={`column${i}`}
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          flex: 1,
        }}
      >
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return <div className={classes.masonryResultContainer}>{result}</div>;
};

export default MasonryLayout;
