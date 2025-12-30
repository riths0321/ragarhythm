import React from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Lock, Eye, ShieldCheck, Database, Zap } from "lucide-react";

const Privacy = () => {
    return (
        <main id='privacy-policy' className="min-h-screen bg-[#fafafa] text-gray-900 pt-40 pb-24 selection:bg-orange-100">
            <SEO
                title="Privacy Policy | RagaRhythm"
                description="Learn how RagaRhythm collects, uses, and protects your personal information."
            />

            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                {/* ================= HERO HEADER ================= */}
                <header className="max-w-3xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <Lock className="text-orange-600" size={20} />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">Privacy Safeguard v1.0</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 uppercase"
                    >
                        Privacy <br />
                        <span className="font-serif italic font-light text-gray-400 lowercase">Policy.</span>
                    </motion.h1>

                    <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <p>Effective: <span className="text-gray-900">Dec 20, 2025</span></p>
                        <div className="h-4 w-[1px] bg-gray-300" />
                        <p>Status: <span className="text-green-600 font-black italic underline decoration-2">Active</span></p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* ================= STICKY SIDEBAR (Optional Desktop Navigation) ================= */}
                    <aside className="hidden lg:block lg:col-span-4 sticky top-40 h-fit">
                        <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-4 text-orange-600">
                                <ShieldCheck size={24} />
                                <h4 className="font-black text-xs uppercase tracking-widest">Our Promise</h4>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed font-medium">
                                We treat your digital footprint like a classical masterpiece—handled with care, respect, and total transparency.
                            </p>
                            <div className="pt-4 border-t border-gray-50">
                                <span className="text-[10px] font-black text-gray-300 uppercase block mb-2 tracking-tighter">In Brief:</span>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-[11px] font-bold text-gray-600"> <Zap size={12} className="text-orange-500" /> No Data Selling </li>
                                    <li className="flex items-center gap-2 text-[11px] font-bold text-gray-600"> <Zap size={12} className="text-orange-500" /> Minimal Cookies </li>
                                    <li className="flex items-center gap-2 text-[11px] font-bold text-gray-600"> <Zap size={12} className="text-orange-500" /> Secure Storage </li>
                                </ul>
                            </div>
                        </div>
                    </aside>

                    {/* ================= MAIN CONTENT ================= */}
                    <div className="lg:col-span-8 space-y-24">

                        {/* Section 1 */}
                        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-serif italic text-orange-200">01</span>
                                <h2 className="text-3xl font-black uppercase tracking-tight">Information Collection</h2>
                            </div>
                            <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                                <p>RagaRhythm collects only what is necessary. When you subscribe to our <strong>Newsletter</strong>, we store your email address. When you browse, we collect anonymous usage data—like a musical score being read, but we don't track who is reading.</p>
                                <div className="bg-white p-8 rounded-3xl border border-gray-100 flex items-start gap-6 shadow-sm">
                                    <Database className="text-orange-600 shrink-0" size={32} />
                                    <div>
                                        <h4 className="font-black uppercase text-xs tracking-widest mb-2">Technical Logs</h4>
                                        <p className="text-sm text-gray-500 font-medium">IP addresses and browser types are logged for security and to optimize your experience across different devices.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Section 2 */}
                        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-4xl font-serif italic text-orange-200">02</span>
                                <h2 className="text-3xl font-black uppercase tracking-tight">Cookies & Identity</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-900 text-white p-8 rounded-[2rem] shadow-xl">
                                    <Eye className="text-orange-500 mb-4" size={24} />
                                    <h4 className="font-bold mb-2 uppercase text-xs tracking-widest">Minimal Tracking</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed font-medium">We use cookies to remember your theme choice (Light/Dark) and your favorite music categories. No cross-site tracking.</p>
                                </div>
                                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                                    <ShieldCheck className="text-orange-600 mb-4" size={24} />
                                    <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-widest">No Third-Party Ads</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed font-medium">We don't host third-party tracking pixels from advertisers. Your reading habits are your own business.</p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Section 3 - Highlight Box */}
                        <motion.section
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="bg-orange-600 text-white p-12 rounded-[3rem] shadow-2xl shadow-orange-200 flex flex-col md:flex-row items-center gap-10"
                        >
                            <div className="md:w-2/3">
                                <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase leading-none">Security of Soul</h2>
                                <p className="text-orange-100 text-lg leading-relaxed">
                                    Your data is encrypted and stored in secure environments. While no system is 100% impenetrable, we use modern industry standards to prevent unauthorized access.
                                </p>
                            </div>
                            <div className="md:w-1/3 flex justify-center">
                                <div className="w-24 h-24 rounded-full border-4 border-white/20 flex items-center justify-center animate-pulse">
                                    <Lock size={40} />
                                </div>
                            </div>
                        </motion.section>

                        {/* Section 4 */}
                        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-serif italic text-orange-200">03</span>
                                <h2 className="text-3xl font-black uppercase tracking-tight">Your Rights</h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                You have the right to request a copy of the data we hold (which is usually just your email) or ask us to delete it entirely. Just like a song ending, you can choose to leave our digital space whenever you wish.
                            </p>
                        </motion.section>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Privacy;