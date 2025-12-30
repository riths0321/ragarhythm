import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[650px] w-full flex items-end pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden bg-black">
      {/* 1. THE IMMERSIVE BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
          alt="Classical Music Background"
          className="w-full h-full object-cover opacity-80 scale-105 animate-subtle-zoom"
        />
        {/* Multilayered Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div className="relative z-10 container mx-auto">
        <div className="max-w-4xl animate-fade-in-up">

          {/* Category Badge with Glass Effect */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-primary-500"></span>
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl text-primary-300 text-[10px] uppercase tracking-[0.2em] font-bold border border-white/10">
              Featured Insight
            </span>
          </div>

          {/* Headline - Mixed weight for artistic look */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1] tracking-tighter">
            Where Tradition <br />
            <span className="font-light italic text-primary-400">Meets</span> Beats
          </h1>

          {/* Subheading - Refined spacing */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-normal leading-relaxed">
            Exploring the seamless fusion of Indian classical heritage with
            the pulse of modern electronic soundscapes.
          </p>

          {/* 3. AUTHOR & INFO (Clean & Minimal) */}
          <div className="flex items-center gap-5 mb-12">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary-600 to-accent-400 p-[2px]">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white font-bold text-sm">
                  RR
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></div>
            </div>
            <div className="text-sm">
              <p className="font-bold text-white tracking-wide">RagaRhythm Editorial</p>
              <p className="text-gray-400 font-medium">Jan 2024 • 10 Mins Read</p>
            </div>
          </div>

          {/* 4. ACTION BUTTONS */}
          <div className="flex flex-wrap gap-5">
            <Link
              to="/category/Classical"
              className="group relative px-10 py-4 overflow-hidden rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10">Explore Classical</span>
            </Link>

            <Link
              to="/category/Fusion"
              className="px-10 py-4 rounded-full bg-transparent border border-white/30 text-white font-extrabold text-xs uppercase tracking-widest hover:bg-white/5 transition-all duration-300"
            >
              Discover Fusion
            </Link>
          </div>
        </div>

        {/* 5. NAVIGATION INDICATORS (The dots) */}
        <div className="mt-16 flex items-center gap-4">
          <div className="group cursor-pointer">
            <div className="w-12 h-1 bg-primary-500 rounded-full transition-all group-hover:w-16" />
          </div>
          <div className="w-2 h-2 bg-white/20 rounded-full cursor-pointer hover:bg-white/50 transition-all" />
          <div className="w-2 h-2 bg-white/20 rounded-full cursor-pointer hover:bg-white/50 transition-all" />
        </div>
      </div>

      {/* CSS for Subtle Zoom Animation - Put this in your index.css or style tag */}
      <style italic>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite alternate ease-in-out;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;