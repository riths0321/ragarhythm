import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Facebook, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Custom links for dynamic navigation
    const navLinks = [
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' },
    ];

    const socialLinks = [
        { name: 'Instagram', icon: <Instagram size={18} />, href: 'https://instagram.com' },
        { name: 'Twitter', icon: <Twitter size={18} />, href: 'https://twitter.com' },
        { name: 'YouTube', icon: <Youtube size={18} />, href: 'https://youtube.com' },
        { name: 'Facebook', icon: <Facebook size={18} />, href: 'https://facebook.com' },
    ];

    return (
        <footer className="relative bg-[#0a0a0a] text-gray-400 pt-20 pb-10 overflow-hidden" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            {/* Subtle Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

                    {/* 1. Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-3 group" aria-label="RagaRhythm Home">
                            <span className="text-3xl transition-transform group-hover:rotate-12 duration-300" aria-hidden="true">
                                🎹
                            </span>
                            <span className="text-2xl font-black tracking-tighter text-white">
                                Raga<span className="text-orange-500">Rhythm</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Bridging the gap between timeless Indian Classical Ragas and the
                            modern beats of today. An odyssey through sound and soul.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all duration-300 shadow-sm"
                                    aria-label={`Follow us on ${social.name}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Collections */}
                    <nav aria-label="Footer Collections">
                        <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.25em] mb-8 opacity-70">Collections</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            {['Classical', 'Bollywood', 'Indie', 'Fusion'].map((cat) => (
                                <li key={cat}>
                                    <Link to={`/category/${cat.toLowerCase()}`} className="hover:text-white transition-colors flex items-center group">
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-orange-500 transition-all mr-0 group-hover:mr-2" aria-hidden="true"></span>
                                        {cat} Music
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* 3. Navigation (Privacy & Terms Integrated Here) */}
                    <nav aria-label="Footer Navigation">
                        <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.25em] mb-8 opacity-70">Navigation</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.path}
                                        className="hover:text-white transition-colors flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-orange-500 transition-all mr-0 group-hover:mr-2" aria-hidden="true"></span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* 4. Newsletter */}
                    <section aria-label="Newsletter Subscription" className="bg-white/[0.03] p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.25em] mb-4 opacity-70">Stay Connected</h3>
                        <p className="text-[11px] text-gray-500 mb-6 leading-relaxed">
                            Join 5,000+ music lovers getting weekly fusion insights.
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <label htmlFor="footer-email" className="sr-only">Email address</label>
                                <input
                                    id="footer-email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-orange-500 outline-none transition pl-10 placeholder:text-gray-700"
                                />
                                <Mail size={14} className="absolute left-3 top-4 text-gray-600" aria-hidden="true" />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-600 hover:bg-orange-500 text-white text-[11px] font-bold py-3.5 rounded-xl transition-all uppercase tracking-[0.15em] active:scale-[0.98] shadow-lg shadow-orange-600/10"
                            >
                                Subscribe
                            </button>
                        </form>
                    </section>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium tracking-widest text-gray-600 uppercase">
                    <p>© {currentYear} RagaRhythm. Built for the culture.</p>
                    <div className="flex items-center gap-6">
                        <button className="hover:text-white transition-colors cursor-pointer uppercase tracking-widest">English (IN)</button>
                        <Link to="/contact" className="hover:text-white transition-colors uppercase tracking-widest">Support</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;