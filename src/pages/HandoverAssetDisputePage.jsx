import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import LegalMetadataBadge from '../components/LegalMetadataBadge';
import { Laptop, CheckCircle2, AlertTriangle, ShieldCheck, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HandoverAssetDisputePage() {
    return (
        <div>
            <SEOHead 
                path="/disputes/handover-asset-dispute"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Company Laptop Return & Asset Handover Disputes in India: Complete Guide",
                    "description": "How to legally return company laptops, avoid false property damage deductions, and obtain formal clearance acknowledgements on resignation."
                }}
            />

            <PageHero 
                title="Asset Return & Handover Disputes"
                subtitle="Is your employer withholding your relieving letter over alleged missing equipment or claiming inflated laptop damage? Learn your statutory rights and how to protect yourself."
                icon={Laptop}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Breadcrumb items={[
                        { label: 'Dispute Guides', path: '/complaint-guide' },
                        { label: 'Asset Return & Handover', path: '/disputes/handover-asset-dispute' }
                    ]} />

                    <LegalMetadataBadge 
                        lastReviewed="18 August 2026"
                        status="Current Law (Payment of Wages Act, 1936)"
                        jurisdiction="Central & State Applicable"
                        source="Section 7(2)(c) & Section 9 of Payment of Wages Act"
                    />

                    {/* Section 7 Deduction Rules */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-4">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-primary" /> Can Employers Deduct Laptop Costs from Your Salary?
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            Under <strong>Section 7(2)(c) of the Payment of Wages Act, 1936</strong>, deductions for damage to or loss of goods expressly entrusted to the employee are permitted <em>only if</em>:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 pl-2">
                            <li>The damage is directly attributable to the employee's willful neglect or default (normal wear-and-tear cannot be deducted).</li>
                            <li>The employer provides a formal written show-cause notice explaining the exact damage.</li>
                            <li>The employee is given a reasonable opportunity to be heard before any deduction is made.</li>
                            <li>Deductions cannot exceed the actual depreciated market value of the item.</li>
                        </ul>
                    </div>

                    {/* Surrender Best Practices */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">
                            Safe Asset Return Protocol (Step-by-Step)
                        </h2>

                        <div className="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800">
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-sm">1. Document the Device Condition</h3>
                                <p className="text-gray-600 dark:text-gray-400">Take clear timestamped photos and a 360-degree video of the laptop (screen on, ports, chassis) before dispatching or handing it over.</p>
                            </div>

                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800">
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-sm">2. Demand a Signed Asset Clearance Receipt</h3>
                                <p className="text-gray-600 dark:text-gray-400">Ensure the IT administrator or courier acknowledges receipt of serial numbers: Laptop, Charger, Bag, and ID Card.</p>
                            </div>

                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800">
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-sm">3. Never Hold Company Laptops as Hostage</h3>
                                <p className="text-gray-600 dark:text-gray-400">Never refuse to return company devices because salary is pending. Withholding property can result in criminal allegations (IPC 403 / 405). Return the property first, then pursue wage recovery via Labour Commissioner.</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-3">
                            <Link 
                                to="/full-final-settlement" 
                                className="flex-1 bg-primary text-white font-bold py-3 rounded-xl text-center text-xs hover:bg-primary/90 shadow-soft"
                            >
                                Full & Final Settlement Guide →
                            </Link>
                            <Link 
                                to="/tools/ff-calculator" 
                                className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 font-bold py-3 rounded-xl text-center text-xs text-gray-800 dark:text-gray-200"
                            >
                                Full & Final Settlement Calculator →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
