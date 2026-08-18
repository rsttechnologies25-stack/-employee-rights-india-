import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { BookOpen, CheckCircle2, RefreshCw, Scale, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EditorialPolicyPage() {
    return (
        <div>
            <SEOHead 
                path="/editorial-policy"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Editorial & Legal Verification Policy — Employee Rights India",
                    "description": "Learn about our rigorous legal research methodology, statute verification process, and correction guidelines."
                }}
            />

            <PageHero 
                title="Editorial & Verification Policy"
                subtitle="How we research, verify, and maintain our legal guides, state wage schedules, and complaint procedures."
                icon={BookOpen}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Breadcrumb items={[{ label: 'Editorial Policy', path: '/editorial-policy' }]} />

                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        
                        <section className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <Scale className="w-5 h-5 text-primary" /> 1. Primary Source Standards
                            </h3>
                            <p>
                                Every guide, calculator formula, and article published on <em>Employee Rights India</em> must be grounded in primary statutory sources:
                            </p>
                            <ul className="list-disc list-inside space-y-2 pl-2 text-gray-600 dark:text-gray-400">
                                <li><strong>Legislative Acts & Gazettes:</strong> Official texts of Central and State enactments published by the Ministry of Law & Justice and State Labour Departments.</li>
                                <li><strong>Judicial Precedents:</strong> Reported judgments of the Supreme Court of India, High Courts, and National Industrial Tribunals.</li>
                                <li><strong>Official Government Circulars:</strong> Notifications issued by statutory bodies such as the Employees' Provident Fund Organisation (EPFO) and Employees' State Insurance Corporation (ESIC).</li>
                            </ul>
                        </section>

                        <section className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <RefreshCw className="w-5 h-5 text-primary" /> 2. Review Cadence & Verification Matrix
                            </h3>
                            <p>
                                Indian labour law is currently in a transitional phase as states formulate rules under the 4 New Labour Codes (Code on Wages, Social Security Code, OSHWC Code, and Industrial Relations Code).
                            </p>
                            <p>
                                Our editorial team adheres to the following review schedules:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">State Minimum Wages & VDA</h4>
                                    <p className="text-xs text-gray-500">Reviewed bi-annually (April & October) following state cost-of-living revisions.</p>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Tax & TDS Provisions</h4>
                                    <p className="text-xs text-gray-500">Reviewed annually following Union Budget releases and Finance Act enactments.</p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-primary" /> 3. Correction & Transparency Protocol
                            </h3>
                            <p>
                                If a state issues an amendment or a reader identifies a discrepancy, we follow a strict correction workflow:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 pl-2 text-gray-600 dark:text-gray-400">
                                <li>The flagged section is reviewed against the official State Labour Gazette notification.</li>
                                <li>If an update has occurred, all related calculator constants, state law entries, and template citations are updated synchronously.</li>
                                <li>The "Last Reviewed" timestamp on the guide is updated accordingly.</li>
                            </ol>
                            <p className="pt-2">
                                To report an update or notification, please email us at <a href="mailto:contact@rexonsofttech.in" className="text-primary font-bold hover:underline">contact@rexonsofttech.in</a> or visit our <Link to="/contact" className="text-primary font-bold hover:underline">Contact Page</Link>.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}
