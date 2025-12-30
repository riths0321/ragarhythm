import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import BlogGrid from "../components/BlogGrid";
import CategoryFilter from "../components/CategoryFilter";
import SEO from "../components/SEO";
import { MOCK_BLOGS } from "../data/mockBlogs";
import { motion } from "framer-motion";

const categoryInfo = {
    Classical: {
        icon: "🎼",
        accent: "from-orange-600 to-orange-400",
        image: "https://images.unsplash.com/photo-1599313291070-49272332617f?q=80&w=2000",
        description: "Experience the soul of India through its timeless ragas and orchestral traditions.",
    },
    Bollywood: {
        icon: "🎬",
        accent: "from-purple-600 to-purple-400",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000",
        description: "From golden oldies to chart-topping hits, explore the rhythm of Indian cinema.",
    },
    Indie: {
        icon: "🎸",
        accent: "from-blue-600 to-blue-400",
        image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2000",
        description: "Raw talent and authentic stories from the heart of the independent music scene.",
    },
    Fusion: {
        icon: "🎭",
        accent: "from-green-600 to-green-400",
        image: "https://images.unsplash.com/photo-1514525253361-bee8718a7439?q=80&w=2000",
        description: "Where East meets West—breaking genre boundaries to create something new.",
    },
};

const Category = () => {
    const { category } = useParams();

    const filteredBlogs = useMemo(() => {
        if (!category) return [];
        return MOCK_BLOGS.filter(
            (blog) => blog.category?.toLowerCase() === category.toLowerCase()
        );
    }, [category]);

    const info = categoryInfo[category] || {
        icon: "🎵",
        accent: "from-orange-600 to-orange-400",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000",
        description: "Explore our latest music articles and deep-dives.",
    };

    return (
        <main className="bg-white min-h-screen">
            <SEO title={`${category} Hub — RagaRhythm`} description={info.description} />

            {/* HERO SECTION - Responsive Height */}
            <header className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-950">
                <div className="absolute inset-0">
                    <img
                        src={info.image}
                        alt={category}
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/50" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="inline-block mb-4 md:mb-6 px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
                    >
                        <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.3em] md:tracking-[0.4em]">
                            Curated Collection
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-6xl md:text-9xl font-black text-white mb-6 md:mb-8 tracking-tighter uppercase leading-none"
                    >
                        {category}<span className={`bg-gradient-to-r ${info.accent} bg-clip-text text-transparent`}>.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed italic px-4"
                    >
                        "{info.description}"
                    </motion.p>
                </div>
            </header>

            {/* CONTENT SECTION */}
            <section className="relative -mt-12 md:-mt-20 z-20 bg-white rounded-t-[3rem] md:rounded-t-[4rem] px-4 md:px-12 py-12 md:py-20 shadow-2xl">
                <div className="container mx-auto">

                    {/* FIXED CATEGORY NAV: Scrollable on mobile, Centered on Desktop */}
                    <div className="w-full mb-16 md:mb-24 overflow-x-auto scrollbar-hide">
                        <div className="flex justify-start md:justify-center min-w-max md:min-w-0 px-4">
                            <CategoryFilter activeCategory={category} />
                        </div>
                    </div>

                    {/* Results Header: Responsive Flex */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 pb-6 border-b border-gray-100 gap-4">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase">
                            Archive <span className="text-orange-600">/</span> {category}
                        </h2>
                        <span className="self-start md:self-center text-[10px] font-black bg-gray-900 text-white px-4 py-2 rounded-full uppercase tracking-widest">
                            {filteredBlogs.length} Stories
                        </span>
                    </div>

                    {/* Blog Grid */}
                    {filteredBlogs.length > 0 ? (
                        <div className="pb-10 md:pb-20">
                            <BlogGrid blogs={filteredBlogs} />
                        </div>
                    ) : (
                        <div className="text-center py-24 md:py-40 px-6">
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 text-3xl md:text-4xl">
                                {info.icon}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase mb-4 tracking-tight">The strings are silent...</h3>
                            <p className="text-gray-400 font-bold max-w-sm mx-auto uppercase text-[9px] md:text-[10px] tracking-widest">
                                Check back soon for the latest {category} stories.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Category;