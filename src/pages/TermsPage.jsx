import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { FileText, ShieldAlert, Scale, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
    return (
        <div>
            <SEOHead 
                path="/terms"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Terms of Use — Employee Rights India",
                    "description": "Terms of use and conditions for accessing educational labour law tools and guides on Employee Rights India."
                }}
            />

            <PageHero 
                title="Terms of Use"
                subtitle="Please review these terms before using Employee Rights India. By accessing our educational guides, calculators, and complaint drafters, you agree to these conditions."
                icon={FileText}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Breadcrumb items={[{ label: 'Terms of Use', path: '/terms' }]} />

                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        
                        <section className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <Scale className="w-5 h-5 text-primary" /> 1. Nature of Service: Educational Guidance Only
                            </h3>
                            <p>
                                <em>Employee Rights India</em>, operated by <strong>RexonSoftTech</strong>, provides free informational resources, statutory guides, calculation models, and letter drafting utilities related to Indian labour legislation.
                            </p>
                            <p>
                                <strong>Important:</strong> Use of this website, including the generation of grievance letters, legal notices, or calculator outputs, <strong>does not constitute legal representation, advocacy, or advice</strong>, nor does it create an advocate-client relationship under the Advocates Act, 1961.
                            </p>
                        </section>

                        <section className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-primary" /> 2. User Responsibility & Fact Verification
                            </h3>
                            <p>
                                While our research team strives to keep state minimum wage schedules, PF thresholds, and court citations up to date, Indian labour laws are subject to state amendments, regional notifications, and varying judicial interpretations based on specific employment contracts.
                            </p>
                            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-600 dark:text-gray-400">
                                <li>You are solely responsible for verifying the accuracy of any dates, amounts, and facts before submitting generated drafts to employers or government authorities.</li>
                                <li>You agree not to submit false, fabricated, or perjurious claims to government complaint portals (e.g. SAMADHAN, EPFiGMS, or Labour Commissioners).</li>
                            </ul>
                        </section>

                        <section className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-primary" /> 3. Permissible Use
                            </h3>
                            <p>
                                You may freely access, print, and download generated letter drafts for personal use in employment disputes. You may not scrape, mirror, or repackage platform content for commercial exploitation without prior written consent from RexonSoftTech.
                            </p>
                        </section>

                        <section className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">4. Limitation of Liability</h3>
                            <p>
                                Under no circumstances shall RexonSoftTech, its developers, or contributors be held liable for any damages, adverse employment actions, lost wages, or legal disputes resulting from the use or reliance upon information provided on this platform. For formal representation, users are strongly advised to engage a qualified employment advocate.
                            </p>
                        </section>

                        <section className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">5. Related Policies</h3>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <Link to="/privacy-policy" className="text-primary font-bold hover:underline">Privacy Policy</Link>
                                <Link to="/disclaimer" className="text-primary font-bold hover:underline">Full Legal Disclaimer</Link>
                                <Link to="/editorial-policy" className="text-primary font-bold hover:underline">Editorial & Verification Policy</Link>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}
