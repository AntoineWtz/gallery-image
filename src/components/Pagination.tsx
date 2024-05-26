import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);

    return (
        <div className="flex justify-center mt-4">
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`p-2 mx-1 ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
