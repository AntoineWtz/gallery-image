import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSearch} className="m-8 flex justify-center">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for images"
                className="p-2 border border-gray-300 rounded-md w-full md:w-1/2"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-md ml-2">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
