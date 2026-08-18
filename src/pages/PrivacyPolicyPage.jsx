import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { Shield, Lock, EyeOff, Database, CheckCircle2, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <div>
            <SEOHead 
                path="/privacy-policy"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Privacy Policy — Employee Rights India",
                    "description": "Privacy policy compliant with India's DPDP Act 2023. Learn how Employee Rights India operates with zero server-side personal data collection."
                }}
            />

            <PageHero 
                title="Privacy Policy"
                subtitle="We believe privacy is a fundamental right. Employee Rights India is designed so you can audit your salary, check your rights, and draft complaints without sharing your personal data with our servers."
                icon={Shield}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Breadcrumb items={[{ label: 'Privacy Policy', path: '/privacy-policy' }]} />

                    {/* Zero PII Guarantee Banner */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 p-6 rounded-2xl flex gap-4 text-emerald-900 dark:text-emerald-200 shadow-soft">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <h2 className="font-extrabold text-lg mb-1">Zero Server-Side PII Architecture</h2>
                            <p className="text-sm leading-relaxed text-emerald-800 dark:text-emerald-300">
                                When you use our Grievance Generator, Legal Notice Generator, Salary Calculators, or Case Timeline tools, <strong>your name, salary figures, company details, and dispute records are processed exclusively in your device's browser memory</strong>. Nothing is transmitted to or stored in any database on our servers.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        
                        <section className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-primary" /> 1. Compliance with the DPDP Act, 2023
                            </h3>
                            <p>
                                This Privacy Policy sets out how <strong>RexonSoftTech (RST Technologies)</strong> operates <em>Employee Rights India</em> in accordance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of India.
                            </p>
                            <p>
                                Because our interactive tools (such as grievance generators and calculators) run client-side via JavaScript, our web application functions as a static information interface rather than a data-fiduciary holding sensitive employment dossiers.
                            </p>
                        </section>

                        <section className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <Database className="w-5 h-5 text-primary" /> 2. Information We Do NOT Collect
                            </h3>
                            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-600 dark:text-gray-400">
                                <li>We do <strong>not</strong> require user registration, logins, or social account sign-ins.</li>
                                <li>We do <strong>not</strong> collect or store salary amounts, bank statements, or payslips.</li>
                                <li>We do <strong>not</strong> collect employee IDs, Universal Account Numbers (UAN), or PF passbooks.</li>
                                <li>We do <strong>not</strong> request or store Aadhaar numbers, PAN cards, or confidential company secrets.</li>
                            </ul>
                        </section>

                        <section className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <EyeOff className="w-5 h-5 text-primary" /> 3. Local Browser Storage
                            </h3>
                            <p>
                                We utilize browser <code className="bg-gray-100 dark:bg-gray-900 px-1.5 py-0.5 rounded text-xs">localStorage</code> solely to remember non-personal interface preferences:
                            </p>
                            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-600 dark:text-gray-400">
                                <li><strong>Theme Preference:</strong> To remember whether you selected Light Mode or Dark Mode.</li>
                                <li><strong>Offline PWA Cache:</strong> Service worker caching of static HTML, CSS, and JS assets so you can read statutory rights guides while offline.</li>
                            </ul>
                        </section>

                        <section className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" /> 4. Third-Party Services & Cookies
                            </h3>
                            <p>
                                Our website uses reputable third-party services for performance analysis and sustainable funding:
                            </p>
                            <ul className="list-disc list-inside space-y-2 pl-2 text-gray-600 dark:text-gray-400">
                                <li>
                                    <strong>Google AdSense:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites. You may opt out of personalized advertising by visiting Google Ad Settings (<a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">adssettings.google.com</a>).
                                </li>
                                <li>
                                    <strong>Web Analytics:</strong> Anonymous aggregated traffic metrics (e.g. pageviews, browser types, country of origin) to help us identify which labour law guides require expansion.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">5. Contact Information</h3>
                            <p>
                                If you have any questions or data privacy inquiries regarding this policy, you may contact our designated compliance team:
                            </p>
                            <p className="font-semibold text-gray-900 dark:text-gray-100">
                                RexonSoftTech (RST Technologies)<br />
                                Email: <a href="mailto:contact@rexonsofttech.in" className="text-primary hover:underline">contact@rexonsofttech.in</a><br />
                                Last Updated: 18 August 2026
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}
