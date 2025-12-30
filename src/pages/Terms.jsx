import React from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Scale, ShieldAlert, FileText, Globe } from "lucide-react";

const Terms = () => {
    return (
        <main className="min-h-screen bg-[#fafafa] text-gray-900 pt-40 pb-24 selection:bg-orange-100">
            <SEO
                title="Terms & Conditions | RagaRhythm"
                description="Read the legal terms governing the RagaRhythm music ecosystem."
            />

            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                {/* ================= HERO HEADER ================= */}
                <header className="max-w-3xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <Scale className="text-orange-600" size={20} />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">Standard Protocol v2.1</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 uppercase"
                    >
                        Terms of <br />
                        <span className="font-serif italic font-light text-gray-400 lowercase">Service.</span>
                    </motion.h1>

                    <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <p>Last Revised: <span className="text-gray-900">Dec 30, 2025</span></p>
                        <div className="h-4 w-[1px] bg-gray-300" />
                        <p>Jurisdiction: <span className="text-gray-900">Global</span></p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* ================= LEFT SIDE NAVIGATION (Sticky) ================= */}
                    <aside className="hidden lg:block lg:col-span-4 sticky top-40 h-fit">
                        <div className="space-y-8 border-l-2 border-gray-100 pl-8">
                            {['Agreement', 'Copyright', 'Conduct', 'Liability'].map((item, idx) => (
                                <div key={item} className="group cursor-pointer">
                                    <p className="text-[10px] font-black text-gray-300 uppercase mb-1">Article 0{idx + 1}</p>
                                    <p className="text-sm font-bold text-gray-500 group-hover:text-orange-600 transition-colors uppercase tracking-widest">{item}</p>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* ================= MAIN CONTENT ================= */}
                    <div className="lg:col-span-8 space-y-24">

                        {/* Section 1 */}
                        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-serif italic text-orange-200">01</span>
                                <h2 className="text-3xl font-black uppercase tracking-tight">Acceptance of Terms</h2>
                            </div>
                            <div className="prose prose-orange text-gray-600 text-lg leading-relaxed space-y-4">
                                <p>By engaging with <strong>RagaRhythm</strong>, you enter into a binding digital agreement. We provide a curated lens into music theory and fusion; your use of this platform constitutes full acceptance of our operational governance.</p>
                                <p className="bg-orange-50 p-6 rounded-2xl text-sm border-l-4 border-orange-500 italic">
                                    "Our beats are shared, but our terms are non-negotiable for maintaining community integrity."
                                </p>
                            </div>
                        </motion.section>

                        {/* Section 2 - Creative Grid */}
                        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-4xl font-serif italic text-orange-200">02</span>
                                <h2 className="text-3xl font-black uppercase tracking-tight">Intellectual Property</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-900/5 transition-all">
                                    <FileText className="text-orange-600 mb-4" size={24} />
                                    <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-widest">Original Analysis</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed font-medium">Our Raga breakdowns and deep-dives are exclusive intellectual assets. Mirroring or scraping content is strictly prohibited.</p>
                                </div>
                                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-900/5 transition-all">
                                    <Globe className="text-orange-600 mb-4" size={24} />
                                    <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-widest">Public Domain</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed font-medium">While the Ragas are timeless, our specific interpretation, UI, and code are protected under digital copyright laws.</p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Section 3 - Highlight Box */}
                        <motion.section
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="bg-gray-900 text-white p-12 rounded-[3rem] relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                                <ShieldAlert size={120} />
                            </div>
                            <div className="relative z-10">
                                <span className="text-orange-500 text-[10px] font-black uppercase tracking-[.3em] mb-4 block">Critical Clause</span>
                                <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase leading-none">Limitation of <br />Liability</h2>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                    RagaRhythm is an educational and cultural platform. We provide content "as-is". We are not liable for any rhythmic disruptions, technical glitches, or external link inaccuracies. Use the soul of the site at your own discretion.
                                </p>
                            </div>
                        </motion.section>

                        {/* Section 4 - Simple & Clean */}
                        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-serif italic text-orange-200">03</span>
                                <h2 className="text-3xl font-black uppercase tracking-tight">Governance Updates</h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                The digital landscape evolves faster than a teen-taal cycle. We reserve the right to update these terms. Your continued presence on the site post-update confirms your alignment with our new rhythm.
                            </p>
                        </motion.section>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Terms;