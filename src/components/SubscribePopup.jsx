import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Music, Sparkles } from 'lucide-react';

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
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    {/* Glass Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={closePopup}
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 40 }}
                        className="relative max-w-[420px] w-full bg-white rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20"
                    >
                        {/* Decorative Top Bar */}
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400" />

                        {/* Close Button - More Visible */}
                        <button
                            onClick={closePopup}
                            className="absolute top-6 right-6 p-2 rounded-full bg-gray-50 text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition-all z-20 group"
                        >
                            <X size={18} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        <div className="p-8 md:p-12 pt-14">
                            {/* Icon Section */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
                                    <Music size={22} />
                                </div>
                                <div>
                                    <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] block mb-0.5">
                                        RagaRhythm Insider
                                    </span>
                                    <div className="flex items-center gap-1 text-gray-400">
                                        <Sparkles size={10} className="text-orange-400" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Limited Access</span>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <h2 className="text-4xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-4 uppercase italic">
                                Elevate Your <br /> <span className="text-orange-600 not-italic">Musical</span> Soul.
                            </h2>

                            <p className="text-gray-500 mb-8 font-medium text-sm leading-relaxed">
                                Join our community of <span className="text-gray-900 font-bold">5,000+</span> curators. Weekly deep-dives into Ragas and modern rhythm.
                            </p>

                            {/* Form Section */}
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="group relative">
                                    <input
                                        type="email"
                                        placeholder="yourname@email.com"
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-[1.25rem] focus:border-orange-600/20 focus:bg-white focus:outline-none transition-all font-bold text-sm text-gray-900 placeholder:text-gray-300"
                                        required
                                    />
                                </div>

                                <button
                                    className="w-full py-4 bg-gray-900 text-white font-black rounded-[1.25rem] hover:bg-orange-600 transition-all shadow-xl shadow-gray-200 hover:shadow-orange-200 uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 group"
                                >
                                    Claim Invite
                                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>

                            {/* Trust Badge */}
                            <div className="mt-8 flex items-center justify-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                                <div className="h-[1px] w-8 bg-gray-300" />
                                <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.25em]">
                                    Secure & Private
                                </p>
                                <div className="h-[1px] w-8 bg-gray-300" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SubscribePopup;