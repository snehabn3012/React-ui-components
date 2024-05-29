import { useEffect, useMemo, useState } from 'react';

function usePagination({ data, itemsPerPage }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageRanges, setPageRanges] = useState([1, 2, 3]);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        if (currentPage < totalPages && currentPage != 1) {
            setPageRanges([currentPage - 1, currentPage, currentPage + 1]);
        }
    }, [currentPage]);

    function onPrevClick() {
        setCurrentPage((currentPage) => currentPage - 1);
    }

    function onNextClick() {
        setCurrentPage((currentPage) => currentPage + 1);
    }

    function changePage(pageNum) {
        setCurrentPage(pageNum);
    }

    function getPaginatedData() {
        const begin = (currentPage - 1) * itemsPerPage;
        // const end= Math.min(begin + , data.length);
        const end = begin + itemsPerPage
        return data.slice(begin, end);
    }

    return {
        getPaginatedData, onPrevClick, onNextClick, changePage,
        currentPage, totalPages, pageRanges
    }
}

export default usePagination;
