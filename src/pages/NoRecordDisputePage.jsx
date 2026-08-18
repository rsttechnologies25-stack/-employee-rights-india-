import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import LegalMetadataBadge from '../components/LegalMetadataBadge';
import { FileQuestion, CheckCircle2, ShieldCheck, Scale, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NoRecordDisputePage() {
    return (
        <div>
            <SEOHead 
                path="/disputes/no-employment-record"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Employer Denies Employment Record: How to Legally Prove You Worked There",
                    "description": "What to do if an employer in India claims you were never an employee or refuses to acknowledge your service without an appointment letter."
                }}
            />

            <PageHero 
                title="Employer Denies Employment Record"
                subtitle="Worked without an appointment letter or being told 'there is no record of your work'? Learn how Indian courts establish master-servant relationships through circumstantial and statutory evidence."
                icon={FileQuestion}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Breadcrumb items={[
                        { label: 'Dispute Guides', path: '/complaint-guide' },
                        { label: 'No Employment Record', path: '/disputes/no-employment-record' }
                    ]} />

                    <LegalMetadataBadge 
                        lastReviewed="18 August 2026"
                        status="Current Law (Indian Evidence Act & Industrial Disputes Act)"
                        jurisdiction="Central & State Applicable"
                        source="Supreme Court Jurisprudence on Master-Servant Relationship"
                    />

                    {/* Legal Principle Card */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-4">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <Scale className="w-6 h-6 text-primary" /> The Legal Truth: Appointment Letter Is Not the Sole Proof
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            Under Indian labour jurisprudence, failure to issue a written appointment letter is a statutory violation <strong>committed by the employer</strong> (under various State Shops & Establishments Acts). An employer cannot use their own default to deny your existence as a workman or employee.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            Courts and Labour Commissioners examine the <em>Substance of Relationship</em> (supervisory control, regular payment of remuneration, attendance records, and company email communications) rather than purely formal paper contracts.
                        </p>
                    </div>

                    {/* Hierarchy of Proof */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">
                            The 6 Strongest Proofs of Employment in India
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 space-y-1.5">
                                <span className="font-bold text-primary flex items-center gap-1.5 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" /> 1. Bank Account Statement
                                </span>
                                <p className="text-gray-600 dark:text-gray-400">Regular monthly credits from the company's current account containing narration (e.g. "CMS/Salary/NEFT").</p>
                            </div>

                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 space-y-1.5">
                                <span className="font-bold text-primary flex items-center gap-1.5 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" /> 2. Form 26AS / AIS Tax Logs
                                </span>
                                <p className="text-gray-600 dark:text-gray-400">Income Tax Department records showing TDS deductions deposited under Section 192 (Salary) or 194J with the employer's TAN.</p>
                            </div>

                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 space-y-1.5">
                                <span className="font-bold text-primary flex items-center gap-1.5 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" /> 3. EPFO / ESIC Electronic Records
                                </span>
                                <p className="text-gray-600 dark:text-gray-400">UAN member portal entries showing monthly contribution credits from the establishment's PF establishment code.</p>
                            </div>

                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 space-y-1.5">
                                <span className="font-bold text-primary flex items-center gap-1.5 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" /> 4. Official Domain Emails & Chats
                                </span>
                                <p className="text-gray-600 dark:text-gray-400">Work emails sent to/from <code>@companydomain.com</code>, client communications, task allocations, and attendance logs.</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-3">
                            <Link 
                                to="/tools/authority-finder" 
                                className="flex-1 bg-primary text-white font-bold py-3 rounded-xl text-center text-xs hover:bg-primary/90 shadow-soft"
                            >
                                Find Labour Office Jurisdiction →
                            </Link>
                            <Link 
                                to="/tools/evidence-checklist" 
                                className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 font-bold py-3 rounded-xl text-center text-xs text-gray-800 dark:text-gray-200"
                            >
                                Open Evidence Preservation Checklist →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
