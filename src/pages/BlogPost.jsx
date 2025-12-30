import React, { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MOCK_BLOGS } from "../data/mockBlogs";
import { Heart, Share2, ArrowLeft, Clock, Eye, MessageCircle } from "lucide-react";

/* ===============================
    Premium Content Renderer
================================ */
const renderContent = (rawContent = "") => {
    const lines = rawContent.split("\n").map((line) => line.trim());
    const elements = [];
    let listBuffer = [];
    let listType = null;

    const flushList = () => {
        if (!listBuffer.length) return;
        elements.push(
            <div key={elements.length} className="my-8">
                {listType === "ul" ? (
                    <ul className="space-y-4">
                        {listBuffer.map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-xl text-gray-700">
                                <span className="mt-2.5 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <ol className="list-decimal pl-8 space-y-4 text-xl text-gray-700 font-bold">
                        {listBuffer.map((item, i) => <li key={i}>{item}</li>)}
                    </ol>
                )}
            </div>
        );
        listBuffer = [];
        listType = null;
    };

    lines.forEach((line, index) => {
        if (!line) { flushList(); return; }

        if (line.startsWith("### ")) {
            flushList();
            elements.push(<h3 key={index} className="text-3xl font-black text-gray-900 mt-16 mb-6 uppercase tracking-tighter">{line.replace("### ", "")}</h3>);
        } else if (line.startsWith("## ")) {
            flushList();
            elements.push(<h2 key={index} className="text-5xl font-black text-gray-900 mt-20 mb-8 uppercase tracking-tighter leading-none">{line.replace("## ", "")}</h2>);
        } else if (/^\d+\.\s/.test(line)) {
            if (listType !== "ol") { flushList(); listType = "ol"; }
            listBuffer.push(line.replace(/^\d+\.\s/, ""));
        } else if (line.startsWith("- ")) {
            if (listType !== "ul") { flushList(); listType = "ul"; }
            listBuffer.push(line.replace("- ", ""));
        } else {
            flushList();
            elements.push(
                <p key={index} className="text-xl md:text-2xl text-gray-600 leading-[1.8] mb-10 font-medium first-letter:text-8xl first-letter:font-black first-letter:text-gray-900 first-letter:mr-4 first-letter:float-left first-letter:leading-[0.7] first-letter:mt-2">
                    {line}
                </p>
            );
        }
    });

    flushList();
    return elements;
};

const BlogPost = () => {
    const { slug } = useParams();
    const [scrollProgress, setScrollProgress] = useState(0);
    const blog = useMemo(() => MOCK_BLOGS.find((b) => b.slug === slug), [slug]);

    useEffect(() => {
        const updateScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress((window.scrollY / scrollHeight) * 100);
        };
        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    if (!blog) return <div className="p-20 text-center font-black">Post Not Found</div>;

    return (
        <main className="min-h-screen bg-white pb-32">
            {/* Minimal Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-gray-50">
                <div className="h-full bg-orange-600 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
            </div>

            {/* Title Section - Center Aligned Magazine Style */}
            <header className="pt-40 pb-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center items-center gap-4 mb-10">
                        <span className="px-5 py-1.5 bg-gray-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                            {blog.category}
                        </span>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                            <Clock size={14} /> {blog.readTime} READ
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black text-gray-900 mb-12 tracking-tighter leading-[0.85] uppercase">
                        {blog.title}
                    </h1>

                    {/* Author Info - Clean & Floating */}
                    <div className="flex flex-col items-center gap-4 mt-16">
                        <img
                            src={blog.author?.avatar}
                            className="w-16 h-16 rounded-full border-4 border-gray-50 shadow-sm"
                            alt={blog.author?.name}
                        />
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-gray-900">Written by {blog.author?.name}</p>
                            <p className="text-[10px] font-bold uppercase text-gray-400 mt-1">{blog.date}</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Image - Extra Rounded */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] aspect-[21/10]">
                    <img src={blog.coverImage} className="w-full h-full object-cover" alt="" />
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Left Interaction Sidebar */}
                <aside className="hidden lg:flex lg:col-span-1 flex-col items-center gap-8 sticky top-40 h-fit">
                    <button className="group flex flex-col items-center gap-2">
                        <div className="p-4 rounded-full bg-gray-50 group-hover:bg-orange-50 transition-colors">
                            <Heart className="text-gray-400 group-hover:text-orange-600" size={24} />
                        </div>
                        <span className="text-[10px] font-black text-gray-400">{blog.likes}</span>
                    </button>
                    <button className="group flex flex-col items-center gap-2">
                        <div className="p-4 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
                            <Share2 className="text-gray-400 group-hover:text-blue-600" size={24} />
                        </div>
                    </button>
                </aside>

                {/* Article Content */}
                <article className="lg:col-span-8 lg:col-start-3">
                    <div className="prose prose-zinc max-w-none">
                        {renderContent(blog.content)}
                    </div>

                    {/* Tags Match Sidebar Pills */}
                    <div className="mt-24 pt-12 border-t border-gray-100 flex flex-wrap gap-3">
                        {blog.tags?.map(tag => (
                            <span key={tag} className="px-6 py-2 bg-white border border-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-orange-500 hover:text-orange-600 transition-all cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </article>

                {/* Right Sidebar - More from this Raga/Author */}
                <aside className="hidden lg:block lg:col-span-2 sticky top-40 h-fit">
                    <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                        <h4 className="text-xs font-black uppercase tracking-widest mb-6">Up Next</h4>
                        <div className="space-y-6">
                            <div className="group cursor-pointer">
                                <div className="aspect-square rounded-2xl bg-gray-200 mb-3 overflow-hidden">
                                    <img src={blog.coverImage} className="object-cover w-full h-full group-hover:scale-110 transition-transform" />
                                </div>
                                <p className="text-xs font-black leading-tight group-hover:text-orange-600 transition-colors uppercase">The Magic of Bilaval Raga</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default BlogPost;