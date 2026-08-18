import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { AlertOctagon, Scale, ShieldAlert, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DisclaimerPage() {
    return (
        <div>
            <SEOHead 
                path="/disclaimer"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Legal Disclaimer — Employee Rights India",
                    "description": "Important legal disclaimer regarding procedural information, non-advocate relationship, and legal accuracy parameters."
                }}
            />

            <PageHero 
                title="Legal Disclaimer"
                subtitle="Employee Rights India is an independent educational platform. Please read this disclaimer carefully before relying on any guide, calculation, or generated template."
                icon={AlertOctagon}
                gradient="red"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Breadcrumb items={[{ label: 'Disclaimer', path: '/disclaimer' }]} />

                    <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60 p-6 rounded-2xl flex gap-4 text-red-900 dark:text-red-200 shadow-soft">
                        <Scale className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <h2 className="font-extrabold text-lg mb-1">Non-Advocate & Educational Notice</h2>
                            <p className="text-sm leading-relaxed text-red-800 dark:text-red-300">
                                This website provides general educational information and procedural guidance regarding Indian labour laws. <strong>It does not constitute legal advice, a formal legal opinion, or create an advocate-client relationship under the Advocates Act, 1961.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        
                        <section className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-primary" /> 1. No Legal Advice or Representation
                            </h3>
                            <p>
                                The materials, calculators, templates, and guides published on <em>Employee Rights India</em> are intended solely to help employees, workers, and job candidates understand general principles of Indian employment jurisprudence (such as the Payment of Wages Act, Industrial Disputes Act, and Shops & Establishments Acts).
                            </p>
                            <p>
                                Every workplace dispute turns on its own unique facts, including the wording of your appointment letter, your specific job designation (workman vs. managerial), establishment thresholds, and recent state notifications. <strong>General principles may not apply identically to your specific case.</strong>
                            </p>
                        </section>

                        <section className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-primary" /> 2. Calculators & Automated Scanners
                            </h3>
                            <p>
                                Output from our calculators (e.g. Gratuity Calculator, Notice Buyout Calculator, Take-Home Salary Calculator, HRA Exemption Optimizer) and diagnostic scanners (e.g. Bond Scanner, PIP Defense Scanner) are <strong>mathematical estimates and preliminary assessments only</strong>.
                            </p>
                            <p>
                                Actual statutory payouts, tax deductions, or legal enforceability depend on verified wage registers, judicial determinations, and official conciliation proceedings.
                            </p>
                        </section>

                        <section className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">3. Non-Affiliation with Government Bodies</h3>
                            <p>
                                Employee Rights India is an independent initiative operated by <strong>RexonSoftTech</strong>. We are <strong>not affiliated with, endorsed by, or representing</strong> the Ministry of Labour & Employment, EPFO, ESIC, or any State Labour Department. Links to government portals (`.gov.in` / `.nic.in`) are provided as external references for user convenience.
                            </p>
                        </section>

                        <section className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">4. When to Consult a Licensed Advocate</h3>
                            <p>
                                If you are facing complex legal situations such as domestic enquiry charges, substantial unpaid gratuity claims before the Controlling Authority, wrongful dismissal petitions before a Labour Court, or criminal allegations, you should immediately consult an advocate licensed with the State Bar Council.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}
