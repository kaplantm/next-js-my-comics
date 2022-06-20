import { useEffect, useMemo, useState } from 'react';

function usePaginate<T>(
  items: T[],
  currentPage = 0,
  showMoreMode?: boolean, // if true, return all items up to and include the current page. false, only return current page
  itemsPerPage = 20
) {
  // State and setters for debounced value
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const retVal = useMemo(
    () => ({
      page,
      setPage,
      items: items.slice(
        showMoreMode ? 0 : itemsPerPage * page,
        itemsPerPage * (page + 1)
      ),
      isLastPage: page >= Math.floor(items?.length / itemsPerPage),
    }),
    [items, itemsPerPage, showMoreMode, page]
  );

  return retVal;
}

export default usePaginate;
