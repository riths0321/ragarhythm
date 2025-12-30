import React, { useState } from 'react';
import SEO from '../components/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Mocking a successful submission
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
        }, 1500);
    };

    return (
        <main className="pt-24 pb-16 bg-white">
            <SEO
                title="Contact Us - RagaRhythm"
                description="Get in touch with the RagaRhythm team for collaborations, feedback, or music inquiries."
            />

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Side: Contact Info */}
                    <div>
                        <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Let's Talk <span className="text-orange-600">Music.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Have a fusion track to share? Or want to write for us? Reach out and let the rhythm connect us.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl">📍</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Our Studio</h3>
                                    <p className="text-gray-600">Cultural Beat Hub, Mumbai, India</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl">📧</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Email Us</h3>
                                    <p className="text-gray-600">hello@ragarhythm.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Element for UX */}
                        <div className="mt-12 p-8 bg-gray-900 rounded-3xl text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">Join the Community</h3>
                                <p className="text-gray-400">Follow us for daily Raga-infused beats.</p>
                            </div>
                            <span className="absolute -right-4 -bottom-4 text-9xl opacity-10 rotate-12">🎸</span>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    className="w-full px-5 py-4 bg-white border-2 border-gray-100 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none"
                                    placeholder="Aryan Sharma"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full px-5 py-4 bg-white border-2 border-gray-100 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none"
                                    placeholder="aryan@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full px-5 py-4 bg-white border-2 border-gray-100 rounded-xl focus:border-orange-500 transition-all outline-none appearance-none"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                >
                                    <option>General Inquiry</option>
                                    <option>Music Submission</option>
                                    <option>Partnership</option>
                                    <option>Feedback</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows="4"
                                    className="w-full px-5 py-4 bg-white border-2 border-gray-100 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all outline-none resize-none"
                                    placeholder="Tell us about your musical journey..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`w-full py-5 rounded-xl font-black uppercase tracking-widest transition-all ${status === 'success'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-orange-600 hover:bg-orange-700 text-white shadow-xl shadow-orange-200'
                                    }`}
                            >
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! ✓' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Contact;