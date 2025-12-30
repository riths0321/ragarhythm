import React, { useState } from 'react';
import { X, Mail, Lock, User, ChevronRight } from 'lucide-react';

const AuthModal = ({ isOpen, onClose }) => {
    const [isSignIn, setIsSignIn] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Dark Blur Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Box */}
            <div className="relative bg-white w-full max-w-[420px] max-h-[90vh] rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] animate-in zoom-in duration-300 flex flex-col overflow-hidden border border-gray-100">

                {/* Subtle Background Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 blur-[60px] rounded-full pointer-events-none" />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 z-20 text-gray-400 hover:text-orange-600 transition-all duration-300"
                >
                    <X size={22} strokeWidth={2.5} />
                </button>

                {/* Content Container */}
                <div className="p-10 md:p-12 overflow-y-auto custom-scrollbar relative z-10">

                    {/* Centered Header - Updated Section */}
                    <div className="mb-10 text-center">
                        <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">
                            {isSignIn ? 'Welcome Back' : 'Start Journey'}
                        </span>
                        <h2 className="text-4xl font-black text-gray-900 tracking-tighter leading-none uppercase">
                            {isSignIn ? 'Log In' : 'Sign Up'}
                        </h2>
                        <div className="w-10 h-1 bg-orange-600 mx-auto mt-4 rounded-full" /> {/* Aesthetic Divider */}
                    </div>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        {!isSignIn && (
                            <div className="relative">
                                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 rounded-2xl focus:bg-white outline-none font-bold text-sm transition-all"
                                />
                            </div>
                        )}

                        <div className="relative">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 rounded-2xl focus:bg-white outline-none font-bold text-sm transition-all"
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 rounded-2xl focus:bg-white outline-none font-bold text-sm transition-all"
                            />
                        </div>

                        <button className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-100 uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 mt-4">
                            {isSignIn ? 'Sign In' : 'Create Account'}
                            <ChevronRight size={18} />
                        </button>
                    </form>

                    {/* Footer Toggle */}
                    <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                        <p className="text-gray-400 font-bold text-xs uppercase tracking-tight">
                            {isSignIn ? "New here?" : "Joined before?"}
                            <button
                                onClick={() => setIsSignIn(!isSignIn)}
                                className="ml-2 text-orange-600 hover:text-black transition-all underline decoration-2 underline-offset-4"
                            >
                                {isSignIn ? 'Sign Up' : 'Log In'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;