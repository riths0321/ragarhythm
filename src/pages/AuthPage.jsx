import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowLeft, ChevronRight } from 'lucide-react';

const AuthPage = ({ initialType = 'signin' }) => {
    const [type, setType] = useState(initialType);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="min-h-screen flex bg-white">

            {/* --- LEFT SIDE: BRANDING & IMAGE (Image Match Vibe) --- */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-black overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Auth Visual"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 via-transparent to-transparent" />

                <div className="relative z-10 p-16 flex flex-col justify-between w-full">
                    <Link to="/" className="flex items-center gap-2 text-white font-black text-2xl tracking-tighter">
                        <span className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-xl">🎵</span>
                        RAGARHYTHM
                    </Link>

                    <div>
                        <h1 className="text-7xl font-black text-white leading-none tracking-tighter mb-6">
                            FEEL THE <br /> <span className="text-orange-500 italic">ANCIENT</span> BEAT.
                        </h1>
                        <p className="text-gray-300 text-lg max-w-md font-medium leading-relaxed">
                            Join our community of music enthusiasts and explore the fusion of tradition and technology.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-white/50 text-sm font-bold tracking-widest uppercase">
                        <span>EST. 2024</span>
                        <div className="w-12 h-[1px] bg-white/20" />
                        <span>High Fidelity Stories</span>
                    </div>
                </div>
            </div>

            {/* --- RIGHT SIDE: COMPACT FORM --- */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-24 py-12 relative">

                {/* Back to Home */}
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-10 right-10 flex items-center gap-2 text-xs font-black text-gray-400 hover:text-orange-600 transition-all uppercase tracking-widest"
                >
                    <ArrowLeft size={16} /> Back Home
                </button>

                <div className="max-w-[400px] mx-auto w-full">
                    <div className="mb-12">
                        <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em] mb-3 block">
                            {type === 'signin' ? 'Welcome Back' : 'Start Journey'}
                        </span>
                        <h2 className="text-5xl font-black text-gray-900 tracking-tighter leading-none uppercase">
                            {type === 'signin' ? 'Log In' : 'Sign Up'}
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {type === 'signup' && (
                            <div className="relative">
                                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text" placeholder="Full Name"
                                    className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 rounded-2xl focus:bg-white outline-none font-bold transition-all"
                                />
                            </div>
                        )}

                        <div className="relative">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="email" placeholder="Email Address"
                                className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 rounded-2xl focus:bg-white outline-none font-bold transition-all"
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="password" placeholder="Password"
                                className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-transparent focus:border-orange-500 rounded-2xl focus:bg-white outline-none font-bold transition-all"
                            />
                        </div>

                        <button className="w-full py-5 bg-gray-900 text-white font-black rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-100 uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                            {type === 'signin' ? 'Sign In' : 'Create Account'}
                            <ChevronRight size={18} />
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                        <p className="text-gray-400 font-bold text-sm">
                            {type === 'signin' ? "Don't have an account?" : "Already part of the rhythm?"}
                            <button
                                onClick={() => setType(type === 'signin' ? 'signup' : 'signin')}
                                className="ml-2 text-orange-600 hover:text-black transition-all underline decoration-2 underline-offset-4"
                            >
                                {type === 'signin' ? 'Sign Up' : 'Log In'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;