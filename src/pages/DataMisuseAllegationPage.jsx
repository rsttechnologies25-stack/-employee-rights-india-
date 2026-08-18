import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import LegalMetadataBadge from '../components/LegalMetadataBadge';
import { Lock, ShieldAlert, AlertTriangle, Scale, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DataMisuseAllegationPage() {
    return (
        <div>
            <SEOHead 
                path="/disputes/data-misuse-allegation"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Employer Accuses Me of Data Misuse / IP Theft: Rights & Legal Defense Protocol",
                    "description": "What to do if an employer in India threatens IT Act 66, confidentiality breach, or data theft allegations to block your resignation."
                }}
            />

            <PageHero 
                title="Employer Alleges Data Misuse or IP Theft"
                subtitle="Is your employer threatening legal notices under Section 66/72 of the IT Act or claiming breach of confidentiality after you resigned to join a competitor? Learn the legal reality."
                icon={Lock}
                gradient="red"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Breadcrumb items={[
                        { label: 'Dispute Guides', path: '/complaint-guide' },
                        { label: 'Data Misuse Allegations', path: '/disputes/data-misuse-allegation' }
                    ]} />

                    <LegalMetadataBadge 
                        lastReviewed="18 August 2026"
                        status="Current Law (Information Technology Act, 2000 & DPDP Act 2023)"
                        jurisdiction="Central Law Applicable"
                        source="Sections 43, 66 & 72 of the IT Act & Section 27 Contract Act"
                    />

                    {/* Threat Analysis Box */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-4">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <Scale className="w-6 h-6 text-primary" /> Genuine IP Theft vs. Coercive Intimidation
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            In the IT and corporate sector, unscrupulous employers occasionally use generic threats of "data breach" or "stealing client confidential information" to intimidate employees into withdrawing resignations or waiving unpaid salary.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200">
                                <h3 className="font-bold text-sm mb-1 text-amber-800 dark:text-amber-300">⚠️ General Skills & Knowledge:</h3>
                                <p>General programming skills, domain experience, and public industry knowledge belong to you. Supreme Court precedent confirms that employers cannot restrain your right to work under Section 27.</p>
                            </div>
                            <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-2xl border border-red-200 dark:border-red-900/40 text-xs text-red-900 dark:text-red-200">
                                <h3 className="font-bold text-sm mb-1 text-red-800 dark:text-red-300">❌ Serious Red Flags to Avoid:</h3>
                                <p>Never download proprietary source code, internal client databases, pricing spreadsheets, or customer contact lists to personal pen drives or personal emails.</p>
                            </div>
                        </div>
                    </div>

                    {/* Defense Rules */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">
                            Strict Safety Rules for Exiting Employees
                        </h2>

                        <div className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-150 dark:border-gray-800 flex gap-3 items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <div>
                                    <strong>Do Not Access Systems After Authorization Ends:</strong> Once your resignation last working day is reached or you are relieved, never attempt to log into company VPNs, Slack, or GitHub.
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-150 dark:border-gray-800 flex gap-3 items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <div>
                                    <strong>Never Forward Company Emails with Attachments to Personal Mail:</strong> Only forward personal communications (such as your own salary slips, offer letter, and resignation threads).
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-150 dark:border-gray-800 flex gap-3 items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <div>
                                    <strong>Respond to False Allegations Formally in Writing:</strong> Request specific server log evidence or forensic audit reports if an employer makes unsubstantiated claims.
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-3">
                            <Link 
                                to="/tools/clause-analyzer" 
                                className="flex-1 bg-primary text-white font-bold py-3 rounded-xl text-center text-xs hover:bg-primary/90 shadow-soft"
                            >
                                Analyze Non-Compete Clauses →
                            </Link>
                            <Link 
                                to="/data-privacy" 
                                className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 font-bold py-3 rounded-xl text-center text-xs text-gray-800 dark:text-gray-200"
                            >
                                Workplace Data Privacy Rights Guide →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
