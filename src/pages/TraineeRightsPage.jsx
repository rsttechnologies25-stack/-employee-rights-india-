import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import LegalMetadataBadge from '../components/LegalMetadataBadge';
import { GraduationCap, CheckCircle2, AlertTriangle, ShieldCheck, Scale, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TraineeRightsPage() {
    return (
        <div>
            <SEOHead 
                path="/trainee-apprentice-rights"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Trainee & Apprentice Rights in India: Stipend Rules, Bonds & Working Hours",
                    "description": "Complete statutory guide for interns, trainees, and apprentices under the Apprentices Act 1961. Minimum stipend rules, bond enforceability, and maximum work hours."
                }}
            />

            <PageHero 
                title="Trainee & Apprentice Rights in India"
                subtitle="Are you an intern, graduate trainee, or registered apprentice? Understand your statutory protections regarding mandatory stipends, maximum working hours, and employment bond limits."
                icon={GraduationCap}
                gradient="purple"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Breadcrumb items={[
                        { label: 'Employee Rights', path: '/rights' },
                        { label: 'Trainees & Apprentices', path: '/trainee-apprentice-rights' }
                    ]} />

                    <LegalMetadataBadge 
                        lastReviewed="18 August 2026"
                        status="Current Law (Apprentices Act, 1961 & Apprenticeship Rules)"
                        jurisdiction="Central & State Applicable"
                        source="Ministry of Skill Development & Entrepreneurship"
                        sourceUrl="https://www.apprenticeshipindia.gov.in"
                    />

                    {/* Apprentices Act Core Rights */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <Scale className="w-6 h-6 text-primary" /> Key Statutory Rights Under the Apprentices Act, 1961
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 space-y-1.5">
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm">💰 Mandatory Statutory Stipend</h3>
                                <p className="text-gray-600 dark:text-gray-400">Unpaid full-time apprenticeships are illegal. Trainees must be paid designated monthly stipends based on educational qualification (Graduate/Technician/Trade).</p>
                            </div>

                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 space-y-1.5">
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm">⏰ Strict Working Hours Limit</h3>
                                <p className="text-gray-600 dark:text-gray-400">Under Rule 12 of Apprenticeship Rules, total working hours must not exceed 40 to 45 hours per week. <strong>Apprentices cannot be forced to work overtime.</strong></p>
                            </div>

                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 space-y-1.5">
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm">📜 Training Bonds & Penalties</h3>
                                <p className="text-gray-600 dark:text-gray-400">Employers cannot impose arbitrary 2-year or 3-year bonds unless they prove specialized, measurable, and documented third-party training expenditure under Section 74 of the Contract Act.</p>
                            </div>

                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 space-y-1.5">
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm">🏥 Health, Safety & Leave Rights</h3>
                                <p className="text-gray-600 dark:text-gray-400">Apprentices are entitled to medical leave (15 days/year) and casual leave (12 days/year), plus workplace safety gear under the Factories Act.</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-3">
                            <Link 
                                to="/tools/employment-bond-scanner" 
                                className="flex-1 bg-primary text-white font-bold py-3 rounded-xl text-center text-xs hover:bg-primary/90 shadow-soft"
                            >
                                Scan Your Training Bond Legality →
                            </Link>
                            <Link 
                                to="/contracts" 
                                className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 font-bold py-3 rounded-xl text-center text-xs text-gray-800 dark:text-gray-200"
                            >
                                Employment Contract & Bond Guide →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
