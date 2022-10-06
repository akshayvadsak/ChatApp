import { useCallback, useMemo, useState } from 'react';

const usePagination = <T extends any>(data: T[], pageLimit: number = 10) => {
    const totalPages = useMemo(() => Math.floor(data.length / pageLimit), [
      pageLimit,
      data.length
    ]);
    const [page, setPage] = useState(0);

    const currentData = data.slice(page * pageLimit, page * pageLimit + pageLimit)

    function nextPage() {
      setPage((currentPage) => Math.min(currentPage + 1, totalPages));
    }
    
    function prevPage() {
      setPage((currentPage) => Math.max(currentPage - 1, 1));
    }

    function jumpToPage(page: any) {
      const pageNumber = Math.max(1, page);
      setPage((currentPage) => Math.min(pageNumber, totalPages));
    }
  
    return { currentData, currentPage: page, jumpToPage, totalPages, nextPage, prevPage };
  };

export default usePagination;