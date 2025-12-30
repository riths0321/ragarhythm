import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Music } from 'lucide-react';

const SubscribePopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const isClosed = sessionStorage.getItem('popupClosed');
            if (!isClosed) setIsOpen(true);
        }, 15000);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
        sessionStorage.setItem('popupClosed', 'true');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Glass Overlay - Image Style */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={closePopup}
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 40 }}
                        className="relative max-w-md w-full bg-white rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border border-gray-100"
                    >
                        {/* Decorative Gradient - Image Theme */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400" />

                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-8 right-8 text-gray-300 hover:text-orange-600 transition-all hover:rotate-90"
                        >
                            <X size={20} strokeWidth={3} />
                        </button>

                        <div className="p-10 md:p-14 pt-16">
                            {/* Icon Sync with Image Sidecards */}
                            <div className="w-14 h-14 bg-orange-50 rounded-[1.5rem] flex items-center justify-center mb-8 text-orange-600 border border-orange-100 shadow-sm">
                                <Music size={28} />
                            </div>

                            <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">
                                Join the Inner Circle
                            </span>

                            <h2 className="text-4xl font-black text-gray-900 tracking-tighter leading-none mb-6 uppercase">
                                Get the <br /> <span className="text-orange-600">Purest</span> Beats.
                            </h2>

                            <p className="text-gray-400 mb-10 font-bold text-sm leading-relaxed">
                                Join 5,000+ raga lovers. Weekly curated playlists & deep music theory analysis.
                            </p>

                            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-6 py-4.5 bg-gray-50 border border-transparent rounded-2xl focus:border-orange-500 focus:bg-white focus:outline-none transition-all font-bold text-sm"
                                        required
                                    />
                                </div>
                                <button
                                    className="w-full py-4.5 bg-gray-900 text-white font-black rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-100 uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 group"
                                >
                                    Subscribe Now
                                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>

                            <p className="mt-8 text-center text-[10px] font-black text-gray-300 uppercase tracking-widest">
                                ✦ No Spam. Just Soul. ✦
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SubscribePopup;