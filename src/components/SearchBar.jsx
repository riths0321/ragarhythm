import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            onSearch(searchTerm);
        }, 300);
        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, onSearch]);

    return (
        <div className="w-full mb-8">
            <div className="relative group max-w-md"> {/* Image mein search bar left-aligned aur medium width ka hai */}

                {/* Search Icon - Subtle as per image */}
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                    <Search
                        className="h-4 w-4 text-gray-300 group-focus-within:text-orange-500 transition-colors"
                        strokeWidth={3}
                    />
                </div>

                {/* The Input Field - Rounded as per Image */}
                <input
                    type="text"
                    placeholder="Search More"
                    className="w-full pl-6 pr-12 py-3.5 bg-white border border-gray-100 rounded-[1.5rem] text-gray-600 placeholder-gray-300 focus:outline-none focus:border-orange-200 transition-all shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] text-sm font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Clear logic hidden for cleaner look like image */}
                {searchTerm && (
                    <button
                        onClick={() => setSearchTerm('')}
                        className="absolute inset-y-0 right-12 flex items-center text-gray-300 hover:text-orange-500"
                    >
                        <X size={14} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBar;