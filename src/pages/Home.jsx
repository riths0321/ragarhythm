import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";

// Components
import CategoryFilter from "../components/CategoryFilter";
import BlogGrid from "../components/BlogGrid";
import SEO from "../components/SEO";
import Hero from "../components/Hero";

// Central mock data
import { MOCK_BLOGS } from "../data/mockBlogs";

const Home = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const featuredBlogs = useMemo(
        () => MOCK_BLOGS.filter((blog) => blog.featured === true).slice(0, 3),
        []
    );

    const filteredBlogs = useMemo(() => {
        return MOCK_BLOGS.filter((blog) => {
            const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <main className="bg-[#f8f9fa] min-h-screen">
            <SEO title="RagaRhythm | Where Tradition Meets Beats" />
            <Hero />

            {/* FEATURED SECTION */}
            <section className="py-20 container mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <p className="text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] mb-2">Curated Hits</p>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase">Featured <span className="text-orange-600">Rhythm</span></h2>
                    </div>
                    <Link to="/archive" className="hidden md:flex text-gray-900 font-black text-xs uppercase tracking-widest items-center gap-2 group border-b-2 border-gray-900 pb-1">
                        Explore Full Archive <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-zinc-900 rounded-[2.5rem] p-10 flex flex-col justify-between text-white border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 blur-[50px] rounded-full -mr-16 -mt-16" />
                        <div className="relative z-10">
                            <span className="text-orange-500 text-[10px] font-black tracking-[0.3em] uppercase">Vibe Check</span>
                            <h3 className="text-3xl font-black leading-tight mt-4 uppercase">Editor's <br />Choice <br />2024</h3>
                        </div>
                        <button
                            onClick={() => navigate('/category/fusion')}
                            className="relative z-10 w-14 h-14 bg-orange-600 hover:bg-white hover:text-orange-600 transition-all duration-500 rounded-full flex items-center justify-center"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {featuredBlogs.map((blog) => (
                        <Link key={blog.id} to={`/blog/${blog.slug}`} className="group relative h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:-translate-y-2 duration-500">
                            <img src={blog.coverImage} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={blog.title} />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <span className="text-[10px] bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-black uppercase mb-3 inline-block tracking-widest border border-white/10">{blog.category}</span>
                                <h4 className="text-2xl font-black leading-tight tracking-tight uppercase group-hover:text-orange-500 transition-colors">{blog.title}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ARCHIVE SECTION */}
            <section className="py-24 bg-white rounded-t-[5rem] shadow-[0_-30px_60px_rgba(0,0,0,0.05)] border-t border-gray-100">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-20">

                        {/* LEFT SIDEBAR */}
                        <aside className="lg:w-1/3">
                            <div className="sticky top-32">
                                <div className="mb-12">
                                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-2">The <span className="text-orange-600">Feed</span></h2>
                                    <div className="h-1 w-12 bg-gray-900 mb-4" />
                                    <p className="text-gray-400 text-xs font-black uppercase tracking-widest">Found {filteredBlogs.length} Stories</p>
                                </div>

                                <div className="space-y-10">
                                    {MOCK_BLOGS.slice(0, 4).map(blog => (
                                        <Link key={blog.id} to={`/blog/${blog.slug}`} className="flex gap-6 group">
                                            <img src={blog.coverImage} className="w-20 h-20 rounded-2xl object-cover group-hover:scale-110 transition-all duration-500" alt="" />
                                            <div className="flex flex-col justify-center">
                                                <span className="text-orange-600 text-[10px] font-black uppercase tracking-widest mb-1">{blog.category}</span>
                                                <h5 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-tight line-clamp-2 uppercase text-sm tracking-tight">{blog.title}</h5>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* RIGHT MAIN CONTENT (FIXED SEARCH & CATEGORY) */}
                        <div className="lg:w-2/3">
                            <div className="mb-16 space-y-10">
                                {/* 1. Search Bar - Full Width */}
                                <div className="relative group">
                                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-600 transition-colors" size={24} />
                                    <input
                                        type="text"
                                        placeholder="SEARCH TRACKS, GENRES, STORIES..."
                                        className="w-full bg-gray-50 border-2 border-transparent py-6 pl-16 pr-8 rounded-[2rem] focus:outline-none focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 text-sm font-bold tracking-widest uppercase transition-all shadow-sm"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                {/* 2. Category Filter - Below Search */}
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-px flex-grow bg-gray-100"></div>
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Browse Categories</span>
                                        <div className="h-px flex-grow bg-gray-100"></div>
                                    </div>
                                    <CategoryFilter
                                        activeCategory={selectedCategory}
                                        onCategoryChange={(cat) => setSelectedCategory(cat)}
                                    />
                                </div>
                            </div>

                            {/* Results Grid */}
                            {filteredBlogs.length > 0 ? (
                                <div className="min-h-[600px]">
                                    <BlogGrid blogs={filteredBlogs} loading={false} />
                                </div>
                            ) : (
                                <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                                    <span className="text-5xl block mb-4">🎵</span>
                                    <h3 className="text-2xl font-black text-gray-900 uppercase">No beats found</h3>
                                    <button
                                        onClick={() => { setSearchQuery(""); setSelectedCategory("All") }}
                                        className="mt-6 text-orange-600 font-black uppercase text-xs tracking-widest underline"
                                    >
                                        Reset Search
                                    </button>
                                </div>
                            )}

                            <div className="mt-20 text-center">
                                <button className="px-12 py-5 bg-gray-900 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-orange-600 transition-all shadow-xl">
                                    Load More Stories
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;