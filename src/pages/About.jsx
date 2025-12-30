import React from 'react';
import SEO from '../components/SEO';
import { Music, Mic2, Radio, Globe2, Sparkles, Heart, Users, ArrowRight } from 'lucide-react';

const About = () => {
    return (
        <>
            <SEO
                title="Our Story — RagaRhythm"
                description="Learn how RagaRhythm is bridging the gap between Indian classical heritage and modern electronic beats."
            />

            {/* Premium Hero Section - Matching Image Vibe */}
            <div className="relative bg-gray-900 pt-32 pb-20 overflow-hidden">
                {/* Background Glows like Hero Image */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-orange-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
                        The Soul of Sound
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 uppercase">
                        WHERE TRADITION <br />
                        <span className="text-orange-600">MEETS A BEATS</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        We are more than a blog. We are a digital sanctuary where ancient Ragas find their rhythm in the modern world.
                    </p>
                </div>
            </div>

            <section className="bg-white py-24">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Mission Section - Image Style Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <div className="relative">
                            <div className="aspect-square bg-gray-100 rounded-[4rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80"
                                    alt="Musical Heritage"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating Card like Latest Articles */}
                            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 max-w-xs hidden md:block">
                                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-4">
                                    <Sparkles size={24} />
                                </div>
                                <h4 className="font-black text-gray-900 uppercase tracking-tight mb-2">Editor's Vision</h4>
                                <p className="text-xs text-gray-500 font-bold">Bridging 5000 years of tradition with the energy of tomorrow.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-8">
                                Our <span className="text-orange-600">Mission</span>
                            </h2>
                            <p className="text-gray-500 text-lg font-bold leading-relaxed mb-6 italic border-l-4 border-orange-600 pl-6">
                                "Music is the shorthand of emotion. We help you translate the ancient dialect of Ragas into the universal language of modern beats."
                            </p>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                RagaRhythm started as a small project to document the dying art of classical storytelling. Today, we stand at the intersection of culture and technology, bringing artist spotlights, deep-dives into Raga theory, and modern fusion analysis to over 50,000 monthly listeners.
                            </p>
                        </div>
                    </div>

                    {/* What We Cover - Cards Synced with Archive Grid */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">WHAT WE EXPLORE</h2>
                        <div className="w-20 h-1.5 bg-orange-600 mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                        {[
                            { icon: <Music />, title: "Classical", desc: "Hindustani & Carnatic roots.", color: "bg-orange-50 text-orange-600" },
                            { icon: <Radio />, title: "Bollywood", desc: "Magic of the silver screen.", color: "bg-purple-50 text-purple-600" },
                            { icon: <Mic2 />, title: "Indie", desc: "Voice of the independent artist.", color: "bg-blue-50 text-blue-600" },
                            { icon: <Globe2 />, title: "Fusion", desc: "Where East meets West.", color: "bg-green-50 text-green-600" }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-black text-gray-900 uppercase mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Values Section - Dark Theme like Featured Card */}
                    <div className="bg-gray-900 rounded-[4rem] p-10 md:p-20 relative overflow-hidden">
                        <div className="relative z-10 grid md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <Heart className="text-orange-600 mx-auto mb-6" size={40} />
                                <h3 className="text-white font-black text-xl mb-4 uppercase">Authenticity</h3>
                                <p className="text-gray-400 text-sm font-medium">Respecting the roots while reaching for the stars.</p>
                            </div>
                            <div className="text-center">
                                <Users className="text-orange-600 mx-auto mb-6" size={40} />
                                <h3 className="text-white font-black text-xl mb-4 uppercase">Community</h3>
                                <p className="text-gray-400 text-sm font-medium">A home for every rhythm lover across the globe.</p>
                            </div>
                            <div className="text-center">
                                <Sparkles className="text-orange-600 mx-auto mb-6" size={40} />
                                <h3 className="text-white font-black text-xl mb-4 uppercase">Innovation</h3>
                                <p className="text-gray-400 text-sm font-medium">Evolving music for the next generation.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA - Final Push */}
                    <div className="mt-32 text-center">
                        <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter mb-8">Ready to Dive Deep?</h2>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-full font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl shadow-orange-100"
                        >
                            Connect With Us <ArrowRight size={20} />
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
};

export default About;