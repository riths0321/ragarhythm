import React from 'react';
import { Link } from 'react-router-dom';

const CategoryFilter = ({ activeCategory }) => {
    // Static Categories array - matches your Category.jsx info
    const categories = [
        { name: 'All', path: '/', icon: '🎵' },
        { name: 'Classical', path: '/category/Classical', icon: '🎼' },
        { name: 'Bollywood', path: '/category/Bollywood', icon: '🎬' },
        { name: 'Indie', path: '/category/Indie', icon: '🎸' },
        { name: 'Fusion', path: '/category/Fusion', icon: '🎭' },
        { name: 'Electronic', path: '/category/Electronic', icon: '🎧' },
        { name: 'Global', path: '/category/Global', icon: '🌍' },
    ];

    return (
        <nav className="mb-12" aria-label="Blog categories">
            {/* Horizontal scroll on mobile, wrap on desktop */}
            <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide md:flex-wrap md:justify-center">
                {categories.map((cat) => {
                    const isActive = activeCategory === cat.name || (cat.name === 'All' && !activeCategory);

                    return (
                        <Link
                            key={cat.name}
                            to={cat.path}
                            className={`
                flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border-2
                ${isActive
                                    ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-200 scale-105'
                                    : 'bg-white border-gray-100 text-gray-600 hover:border-orange-200 hover:text-orange-600'
                                }
              `}
                        >
                            <span>{cat.icon}</span>
                            {cat.name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default CategoryFilter;