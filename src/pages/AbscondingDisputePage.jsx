import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import LegalMetadataBadge from '../components/LegalMetadataBadge';
import { ShieldAlert, AlertTriangle, CheckCircle2, FileText, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AbscondingDisputePage() {
    return (
        <div>
            <SEOHead 
                path="/disputes/absconding-allegation"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Employer Says I Am Absconding: Legal Rights & Step-by-Step Defense Guide",
                    "description": "What to do if your employer falsely tags you as an absconder after you resigned, were hospitalized, or faced a toxic workplace in India."
                }}
            />

            <PageHero 
                title="My Employer Says I Am Absconding"
                subtitle="Has your employer sent a notice claiming you have 'absconded' or abandoned your job? Understand what legally constitutes absconding and how to protect your relieving letter and career."
                icon={ShieldAlert}
                gradient="red"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Breadcrumb items={[
                        { label: 'Dispute Guides', path: '/complaint-guide' },
                        { label: 'Absconding Allegations', path: '/disputes/absconding-allegation' }
                    ]} />

                    <LegalMetadataBadge 
                        lastReviewed="18 August 2026"
                        status="Current Law (Industrial Jurisprudence)"
                        jurisdiction="All India (Shops & Establishments & Industrial Disputes Act)"
                        source="Supreme Court Precedents on Job Abandonment"
                    />

                    {/* Core Distinction Box */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-4">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <Scale className="w-6 h-6 text-primary" /> What Is Legally "Absconding" in India?
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            Under Indian industrial jurisprudence (including landmark Supreme Court rulings like <em>Buckingham & Carnatic Co. Ltd.</em> and <em>G.T. Lad v. Chemicals and Fibres India Ltd.</em>), <strong>"Abandonment of Service" requires an intention by the employee to permanently sever the employment relationship without informing the employer</strong>.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-2xl border border-red-200 dark:border-red-900/40 text-xs text-red-900 dark:text-red-200">
                                <h3 className="font-bold text-sm mb-1 text-red-800 dark:text-red-300">❌ True Absconding:</h3>
                                <p>Disappearing without any resignation email, ignoring all phone/email inquiries, not returning company property, and breaking communication completely.</p>
                            </div>
                            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-2xl border border-green-200 dark:border-green-900/40 text-xs text-green-900 dark:text-green-200">
                                <h3 className="font-bold text-sm mb-1 text-green-800 dark:text-green-300">✅ NOT Absconding:</h3>
                                <p>You sent a formal resignation email (even if asking for early release), were on documented medical leave with hospital certificates, or offered a notice buyout.</p>
                            </div>
                        </div>
                    </div>

                    {/* Step by Step Action Plan */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">
                            10-Step Defense Protocol
                        </h2>
                        
                        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                            <div className="flex gap-4 items-start">
                                <span className="w-7 h-7 bg-primary text-white font-bold rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5">1</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100 text-base">Do Not Panic & Do Not Ignore the Email</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">An unanswered absconding notice can be cited later during BGV. Always reply in writing within 48 to 72 hours.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <span className="w-7 h-7 bg-primary text-white font-bold rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5">2</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100 text-base">Send a Polite Written Rebuttal</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">State clearly: <em>"I refer to my resignation email dated [Date]. I have not absconded; I have tendered my formal resignation and am willing to complete handover / pay notice buyout."</em></p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <span className="w-7 h-7 bg-primary text-white font-bold rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5">3</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100 text-base">Offer Return of Company Assets Immediately</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Ensure you request a formal receipt for laptop, ID card, and access badges. Never keep company equipment as leverage for unpaid salary.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <span className="w-7 h-7 bg-primary text-white font-bold rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5">4</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100 text-base">Preserve All Written Communications</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Forward all resignation threads, manager chat logs, and medical certificates to your personal email address.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-3">
                            <Link 
                                to="/tools/bgv-shield" 
                                className="flex-1 bg-primary text-white font-bold py-3 rounded-xl text-center text-xs hover:bg-primary/90 shadow-soft"
                            >
                                Check BGV Defamation Shield Tool →
                            </Link>
                            <Link 
                                to="/tools/notice-adjustment-calculator" 
                                className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 font-bold py-3 rounded-xl text-center text-xs text-gray-800 dark:text-gray-200"
                            >
                                Calculate Notice & Leave Adjustment →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
