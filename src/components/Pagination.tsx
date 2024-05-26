import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (endPage - startPage < 4) {
        if (currentPage < totalPages / 2) {
            endPage = Math.min(totalPages, startPage + 4);
        } else {
            startPage = Math.max(1, endPage - 4);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center m-4">
            <button
                onClick={() => onPageChange(1)}
                className={`p-2 mx-1 ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                disabled={currentPage === 1}
            >
                &laquo;
            </button>
            {pageNumbers.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`p-2 mx-1 ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(totalPages)}
                className={`p-2 mx-1 ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                disabled={currentPage === totalPages}
            >
                &raquo;
            </button>
        </div>
    );
};

export default Pagination;
