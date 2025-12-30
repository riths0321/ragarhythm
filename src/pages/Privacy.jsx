import React from "react";
import SEO from "../components/SEO";

const Privacy = () => {
    return (
        <main id='privacy-policy' className="min-h-screen bg-white text-gray-900 pt-32 pb-24">
            <SEO
                title="Privacy Policy | RagaRhythm"
                description="Learn how RagaRhythm collects, uses, and protects your personal information."
            />

            <div className="max-w-4xl mx-auto px-6">
                {/* ================= HEADER ================= */}
                <header className="mb-20">
                    <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 text-xs font-black uppercase tracking-widest rounded-full mb-6">
                        Legal & Privacy
                    </span>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                        Privacy <span className="text-orange-600">Policy</span>
                    </h1>

                    <p className="text-gray-500 text-lg font-medium">
                        Effective Date: <strong>December 20, 2025</strong>
                    </p>
                </header>

                {/* ================= CONTENT ================= */}
                <div className="space-y-16">
                    {/* Section 1 */}
                    <section className="border-l-4 border-orange-600 pl-8">
                        <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">
                            1. Information We Collect
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            RagaRhythm collects only the information necessary to provide a
                            meaningful and smooth reading experience. This may include your
                            email address when you voluntarily subscribe to our newsletter,
                            along with limited, anonymous usage data to understand how readers
                            interact with our content.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="font-black text-xl mb-3 text-gray-900">
                                Personal Data
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We respect your privacy. Your personal information is never
                                sold, rented, or shared with third parties for marketing
                                purposes. Your musical journey stays personal.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="font-black text-xl mb-3 text-gray-900">
                                Cookies & Preferences
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We use minimal cookies to remember preferences such as selected
                                categories or theme choices. These cookies enhance usability
                                and never track you across external platforms.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="border-l-4 border-orange-600 pl-8">
                        <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">
                            3. How We Use Your Information
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Any information collected is used strictly to improve content
                            quality, platform performance, and communication with our
                            community. We analyze trends, not individuals.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="border-l-4 border-orange-600 pl-8">
                        <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">
                            4. Data Security
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We take reasonable technical and organizational measures to
                            protect your data from unauthorized access, misuse, or loss.
                            While no digital platform can guarantee absolute security, we
                            continuously improve our safeguards.
                        </p>
                    </section>

                    {/* Highlighted Section */}
                    <section className="bg-gray-900 text-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl shadow-orange-200">
                        <h2 className="text-2xl font-black mb-4 tracking-tight">
                            Our Commitment to Trust
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Whether you are exploring classical ragas, indie soul, or modern
                            fusion, your trust matters to us. RagaRhythm is built on respect
                            for culture, creativity, and community — and that includes
                            respecting your privacy.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="border-l-4 border-orange-600 pl-8">
                        <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">
                            5. Policy Updates
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We may update this Privacy Policy from time to time to reflect
                            changes in technology, legal requirements, or platform features.
                            Any updates will be clearly posted on this page with a revised
                            effective date.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="text-center pt-12">
                        <p className="text-gray-500 text-lg">
                            If you have any questions about this Privacy Policy, feel free to
                            reach out via our{" "}
                            <span className="font-bold text-orange-600">Contact</span> page.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Privacy;
