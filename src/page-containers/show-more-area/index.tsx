import React, { memo } from 'react';
import { Button } from '@mui/material';
import usePaginate from '../../lib/hooks/use-paginate';

function ShowMoreArea({ children }) {
  const { items, isLastPage, setPage } = usePaginate(children, 0, true);

  const onShowMoreClick = () => {
    setPage(prev => prev + 1);
  };
  return (
    <>
      {items}
      {!isLastPage && <Button onClick={onShowMoreClick}>Show More</Button>}
    </>
  );
}

export default memo(ShowMoreArea);
