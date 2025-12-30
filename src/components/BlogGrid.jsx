import React from 'react';
import BlogCard from './BlogCard';

const BlogGrid = ({ blogs = [], loading = false }) => {

    /* ============================
       Skeleton Loader (Image Match)
    ============================ */
    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {[1, 2, 4, 5].map((i) => (
                    <div
                        key={i}
                        className="bg-white rounded-[2rem] p-4 border border-gray-100 shadow-sm overflow-hidden"
                    >
                        <div className="animate-pulse">
                            <div className="bg-gray-100 aspect-[16/11] rounded-[1.5rem] mb-6"></div>
                            <div className="px-2 space-y-4">
                                <div className="h-2 bg-gray-100 rounded-full w-1/4"></div>
                                <div className="h-5 bg-gray-100 rounded-full w-3/4"></div>
                                <div className="h-3 bg-gray-100 rounded-full w-full"></div>
                                <div className="pt-6 mt-6 border-t border-gray-50 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="h-8 w-8 bg-gray-100 rounded-full"></div>
                                        <div className="h-2 bg-gray-100 rounded-full w-16"></div>
                                    </div>
                                    <div className="h-8 w-8 bg-gray-100 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    /* ============================
       Empty State
    ============================ */
    if (blogs.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gray-50/50 rounded-[2.5rem] border border-dashed border-gray-200">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mb-6">
                    🔇
                </div>
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-2">
                    No <span className="text-orange-600">Archive</span> Found
                </h3>
                <p className="text-gray-400 text-sm font-medium max-w-xs mb-8">
                    Try adjusting your filters or search terms to find the right beat.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-orange-600 transition-all text-xs uppercase tracking-widest"
                >
                    Reset Filter
                </button>
            </div>
        );
    }

    /* ============================
       Blog Grid (Layout Match)
    ============================ */
    return (
        <section className="w-full" aria-label="Blog articles grid">
            {/* Responsive Grid: 
                - 1 column on mobile
                - 2 columns on tablet/desktop (to fit next to sidebar as per image)
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                {blogs.map((blog, index) => {
                    if (!blog?.title || !blog?.slug) return null;

                    return (
                        <div
                            key={blog.id || blog.slug || index}
                            className="flex h-full animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <BlogCard blog={blog} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default BlogGrid;