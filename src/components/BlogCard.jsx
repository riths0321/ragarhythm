import React from "react";
import { Link } from "react-router-dom";
import { Clock, Eye, ArrowUpRight } from "lucide-react";

const BlogCard = ({ blog }) => {
    if (!blog) return null;

    const {
        title = "Untitled Blog",
        excerpt = "",
        slug = "#",
        coverImage,
        category = "General",
        date,
        views = 0,
        readTime = "5 min read",
        author = {},
    } = blog;

    const authorName = author?.name ?? "Unknown Author";

    return (
        <article className="group bg-white rounded-[2.5rem] p-4 border border-gray-100 hover:border-orange-200 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col h-full">

            {/* Image Section - Compact and Rounded */}
            <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] mb-6">
                {coverImage ? (
                    <img
                        src={coverImage}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center bg-gray-50 text-gray-400">No Image</div>
                )}

                {/* Minimal Category Tag */}
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-4 pb-4 flex flex-col flex-grow">

                {/* Meta: Date & Read Time */}
                <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1.5 text-gray-400 text-[11px] font-bold">
                        <Clock size={12} className="text-orange-500" />
                        <span>{readTime}</span>
                    </div>
                    <span className="text-gray-200">|</span>
                    <div className="text-gray-400 text-[11px] font-bold uppercase tracking-tight">
                        {date}
                    </div>
                </div>

                {/* Title */}
                <Link to={`/blog/${slug}`} className="block mb-3">
                    <h3 className="text-xl font-black text-gray-900 leading-[1.3] group-hover:text-orange-600 transition-colors line-clamp-2">
                        {title}
                    </h3>
                </Link>

                {/* Excerpt - More subtle as per image */}
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6 font-medium">
                    {excerpt}
                </p>

                {/* Footer: Author & Action */}
                <div className="mt-auto pt-5 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 text-[10px] font-black border border-orange-100">
                            {authorName.charAt(0)}
                        </div>
                        <span className="text-[11px] font-bold text-gray-900 uppercase tracking-tight">
                            {authorName}
                        </span>
                    </div>

                    {/* Action Icon - Image style Arrow */}
                    <Link
                        to={`/blog/${slug}`}
                        className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300"
                    >
                        <ArrowUpRight size={18} />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;