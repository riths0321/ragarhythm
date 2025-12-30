import React from "react";
import SEO from "../components/SEO";

const Terms = () => {
    return (
        <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24">
            <SEO
                title="Terms & Conditions | RagaRhythm"
                description="Read the terms and conditions governing the use of the RagaRhythm music blog."
            />

            <div className="max-w-4xl mx-auto px-6">
                {/* ================= HEADER ================= */}
                <header className="mb-20">
                    <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 text-xs font-black uppercase tracking-widest rounded-full mb-6">
                        Legal Information
                    </span>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                        Terms <span className="text-orange-600">&</span> Conditions
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
                            1. Acceptance of Terms
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            By accessing or using RagaRhythm, you agree to be bound by these
                            Terms and Conditions. If you do not agree with any part of these
                            terms, please discontinue use of the platform.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="border-l-4 border-orange-600 pl-8">
                        <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">
                            2. Use of Content
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            All articles, musical analysis, visuals, and original content
                            published on RagaRhythm are intended for personal and
                            non-commercial use only. Republishing, reproducing, or modifying
                            content without proper attribution or permission is prohibited.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="font-black text-xl mb-3 text-gray-900">
                                Intellectual Property
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                All trademarks, logos, and creative materials remain the
                                intellectual property of RagaRhythm or respective contributors.
                                Unauthorized use may result in legal action.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="font-black text-xl mb-3 text-gray-900">
                                User Contributions
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Comments and user-submitted content must remain respectful and
                                constructive. We reserve the right to remove content that is
                                abusive, misleading, or violates community standards.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="border-l-4 border-orange-600 pl-8">
                        <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">
                            4. User Conduct
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Users are expected to engage respectfully within the community.
                            Any form of harassment, spamming, hate speech, or misuse of the
                            platform may result in restricted access or permanent removal.
                        </p>
                    </section>

                    {/* Highlighted Section */}
                    <section className="bg-gray-900 text-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl shadow-orange-200">
                        <h2 className="text-2xl font-black mb-4 tracking-tight">
                            Limitation of Liability
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            RagaRhythm is provided “as is” without warranties of any kind. We
                            are not responsible for any direct or indirect damages resulting
                            from the use or inability to use the platform.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="border-l-4 border-orange-600 pl-8">
                        <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">
                            5. Changes to Terms
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We may revise these Terms & Conditions at any time. Continued use
                            of the platform after updates signifies acceptance of the revised
                            terms. The latest version will always be available on this page.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="text-center pt-12">
                        <p className="text-gray-500 text-lg">
                            Questions regarding these terms? Please visit our{" "}
                            <span className="font-bold text-orange-600">Contact</span> page.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Terms;
