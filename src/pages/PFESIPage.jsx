import React from 'react';
import { Link } from 'react-router-dom';
import LawCard from '../components/LawCard';
import PFChecker from '../components/PFChecker';
import SalaryCalculator from '../components/SalaryCalculator';
import SEOHead from '../components/SEOHead';
import { 
    Landmark, Heart, ShieldAlert, History, Zap, RefreshCw, 
    TrendingUp, ShieldCheck, FileCheck, AlertTriangle, ArrowRight, 
    ExternalLink, Scale, CheckCircle2, FileText, ChevronRight, HelpCircle
} from 'lucide-react';

export default function PFESIPage() {
    const cards = [
        {
            title: "Mandatory from Day 1",
            description: "EPF is mandatory from the first day of joining. Employers cannot exempt you during probation, training, or internship if the company has 20+ employees.",
            status: "green",
            icon: Landmark
        },
        {
            title: "Employer Contribution",
            description: "Employer contribution (12%) is in addition to your salary. Deducting the employer's share from your promised gross/net salary is an illegal practice.",
            status: "red",
            icon: ShieldAlert
        },
        {
            title: "PF Blocking",
            description: "Companies cannot block your PF transfer or withdrawal for not serving notice period or breaking a bond. PF is your personal legal entitlement.",
            status: "red",
            icon: ShieldAlert
        },
        {
            title: "ESI Benefits",
            description: "If your salary is ≤ ₹21,000, you are legally entitled to ESI medical benefits for yourself and family. Employers must register you immediately.",
            status: "green",
            icon: Heart
        }
    ];

    const epfo2026Rules = [
        {
            icon: Zap,
            badge: "⚡ Auto-Claim ₹1 Lakh",
            badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300",
            title: "EPFO Auto-Settlement Limit Doubled to ₹1,00,000",
            summary: "EPFO doubled the auto-settlement limit for advance EPF claims to ₹1,00,000 (from ₹50,000) for illness, education, marriage, and home purchase. Processed automatically by IT system in 3-4 days with zero human intervention."
        },
        {
            icon: RefreshCw,
            badge: "🔄 Auto-Transfer 3.0",
            badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300",
            title: "Frictionless Auto-Transfer on Job Switch",
            summary: "EPFO 3.0 automatically transfers member balances from previous employer Member IDs to the new Member ID under the same UAN. Physical signatures and employer attestations are completely bypassed if Aadhaar & UAN are linked."
        },
        {
            icon: TrendingUp,
            badge: "📈 8.25% Interest",
            badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300",
            title: "8.25% Annual Interest Credited",
            summary: "Central Board of Trustees (CBT) confirmed 8.25% annual interest. Inoperative PF accounts continue to earn interest until the subscriber reaches 58 years of age (no loss of interest even during prolonged unemployment)."
        },
        {
            icon: ShieldCheck,
            badge: "🛡️ ₹7 Lakh Free Cover",
            badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
            title: "EDLI Free Life Insurance up to ₹7,00,000",
            summary: "Under the Employees' Deposit-Linked Insurance (EDLI) Scheme, 1976, all active EPF members automatically receive life insurance coverage ranging from ₹2.5 Lakh to ₹7 Lakh payable to nominees with zero premium charged to employee."
        },
        {
            icon: FileCheck,
            badge: "📋 SOP v3.0 Digital",
            badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300",
            title: "Joint Declaration SOP v3.0 for Profile Fixes",
            summary: "Revised Standard Operating Procedure enables online corrections for Name, Date of Birth, Gender, Father/Spouse Name, and Date of Exit. Corrections with minor differences are auto-approved via UIDAI Aadhaar verification."
        },
        {
            icon: AlertTriangle,
            badge: "⚖️ IPC 405 & 14B Penalties",
            badgeColor: "bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300",
            title: "Criminal Liability for Non-Deposit past 15th",
            summary: "Deducting the employee's 12% PF share from salary and failing to remit it to EPFO by the 15th of the following month constitutes Criminal Breach of Trust under Section 405 IPC, attracting 12% penal interest and up to 25% damages under Section 14B."
        }
    ];

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
            <SEOHead path="/pf-esi" />
            <div className="max-w-7xl mx-auto space-y-12">
                
                {/* ── Page Header ── */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-bold mb-3">
                        <Landmark className="w-3.5 h-3.5" />
                        EPFO & ESIC Statutory Guidelines • 2026 Edition
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        PF & ESI Statutory Rules (2026)
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mt-2 text-sm sm:text-base leading-relaxed">
                        Comprehensive guide to Employees' Provident Fund (EPFO), Employees' State Insurance (ESIC), 
                        the ₹1 Lakh advance auto-settlement, UAN transfer 3.0, and employer deposit protections under Indian Labour Law.
                    </p>
                </div>

                {/* ── EPF Wage Ceiling Hike Info Box ── */}
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 rounded-2xl border border-blue-200 dark:border-blue-900/50 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <span className="p-1.5 rounded-lg bg-blue-600 text-white font-black text-xs">2026</span>
                            <span className="font-extrabold text-blue-950 dark:text-blue-100 text-base sm:text-lg">
                                📈 EPF Statutory Wage Ceiling Revision: ₹15,000 ➔ ₹25,000 Proposal
                            </span>
                        </div>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-200/60 dark:bg-blue-900 text-blue-900 dark:text-blue-200">
                            Active Cabinet Review
                        </span>
                    </div>
                    <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
                        <strong>Current Rule:</strong> Mandatory EPF contribution applies to employees earning up to <strong>₹15,000 Basic pay (statutory PF deduction cap = ₹1,800/month)</strong> unless both employee and employer voluntarily opt to contribute on actual full basic wages.
                    </p>
                    <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
                        <strong>Proposed Revision:</strong> Raising the statutory ceiling from <strong>₹15,000 to ₹25,000/month</strong> will raise the mandatory monthly deduction cap from <strong>₹1,800 to ₹3,000/month</strong>, boost the maximum EPS pension contribution from ₹1,250 to ₹2,083/month, and bring millions of additional private-sector workers under mandatory social security.
                    </p>
                </div>

                {/* ── 2026 EPFO Digital Reforms Hub ── */}
                <section className="space-y-6">
                    <div>
                        <span className="text-xs font-black text-primary uppercase tracking-wider">
                            Latest Operational Directives
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mt-1">
                            New EPFO Rules & Digital Reforms (2026)
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Key updates issued by the Central Board of Trustees (CBT) and Ministry of Labour & Employment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {epfo2026Rules.map((rule, idx) => {
                            const IconComp = rule.icon;
                            return (
                                <div key={idx} className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft flex flex-col justify-between space-y-4">
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                                                <IconComp className="w-5 h-5" />
                                            </div>
                                            <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${rule.badgeColor}`}>
                                                {rule.badge}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-base text-gray-900 dark:text-white mb-2 leading-snug">
                                            {rule.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {rule.summary}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* ── 12% PF Contribution Breakdown Table ── */}
                <section className="bg-white dark:bg-gray-950 rounded-2xl p-6 sm:p-8 border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
                    <div>
                        <span className="text-xs font-black text-primary uppercase tracking-wider">
                            Statutory Salary Math
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-1">
                            Where Does Your 12% PF Money Actually Go?
                        </h2>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Under the EPF & MP Act 1952, total contribution is 24% of Basic + DA (12% from Employee + 12% from Employer).
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs sm:text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60">
                                    <th className="py-3 px-4 font-bold text-gray-900 dark:text-white">Component</th>
                                    <th className="py-3 px-4 font-bold text-gray-900 dark:text-white">Share %</th>
                                    <th className="py-3 px-4 font-bold text-gray-900 dark:text-white">Where Deposited</th>
                                    <th className="py-3 px-4 font-bold text-gray-900 dark:text-white">Employee Benefit</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-850">
                                <tr>
                                    <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-200">Employee Contribution</td>
                                    <td className="py-3 px-4 font-bold text-primary">12.00%</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">EPF Account</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">100% credited with 8.25% compound interest. Withdrawable at retirement or during emergencies.</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-200">Employer Share (EPF)</td>
                                    <td className="py-3 px-4 font-bold text-emerald-600">3.67%</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">EPF Account</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Directly added to employee provident fund corpus along with employee share.</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-200">Employer Share (EPS Pension)</td>
                                    <td className="py-3 px-4 font-bold text-blue-600">8.33%</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">EPS Pension Fund</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Capped at ₹1,250/mo (8.33% of ₹15,000). Guarantees lifelong pension after 10 years of service.</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-200">Employer EDLI Life Insurance</td>
                                    <td className="py-3 px-4 font-bold text-purple-600">0.50%</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">EDLI Insurance Fund</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Provides up to ₹7,00,000 life insurance protection to family nominees with zero employee deduction.</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-200">Employer Admin Charges</td>
                                    <td className="py-3 px-4 font-bold text-gray-500">0.50%</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">EPFO Operations</td>
                                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Borne entirely by employer (min ₹500/mo). Cannot be recovered from employee salary.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ── 4 Foundation Law Cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, idx) => (
                        <LawCard key={idx} {...card} />
                    ))}
                </div>

                {/* ── Interactive Eligibility Checker ── */}
                <div>
                    <PFChecker />
                </div>

                {/* ── Salary Take-Home Calculator ── */}
                <div>
                    <SalaryCalculator />
                </div>

                {/* ── Step-by-Step EPFiGMS Grievance Guide ── */}
                <section className="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl p-6 sm:p-8 space-y-6">
                    <div className="flex items-center gap-3">
                        <AlertTriangle className="w-7 h-7 text-amber-600 shrink-0" />
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                                Employer Deducted PF But Not Depositing? Here is How to Complain
                            </h2>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                Non-deposit of deducted employee PF is a non-bailable offence under Section 405/406 of the Indian Penal Code.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-amber-100 dark:border-amber-900/30 space-y-2">
                            <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center">1</span>
                            <h4 className="font-bold text-sm text-gray-900 dark:text-white">Download UAN Passbook</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Log into epfindia.gov.in passbook portal and take screenshots showing missing monthly credits.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-amber-100 dark:border-amber-900/30 space-y-2">
                            <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center">2</span>
                            <h4 className="font-bold text-sm text-gray-900 dark:text-white">Preserve Monthly Payslips</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Payslips prove the employer withheld 12% PF from your salary while failing to remit it.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-amber-100 dark:border-amber-900/30 space-y-2">
                            <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center">3</span>
                            <h4 className="font-bold text-sm text-gray-900 dark:text-white">Lodge EPFiGMS Grievance</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">File an online complaint on epfigms.gov.in under Category: "Non-deposit of PF by Employer".</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-amber-100 dark:border-amber-900/30 space-y-2">
                            <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center">4</span>
                            <h4 className="font-bold text-sm text-gray-900 dark:text-white">Section 7A Recovery Notice</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">RPFC summons the employer, freezes bank accounts, and recovers dues with 12% compound penal interest.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        <a 
                            href="https://epfigms.gov.in" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl font-bold text-xs inline-flex items-center gap-1.5 transition-all shadow-sm"
                        >
                            Open Official EPFiGMS Portal <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <Link 
                            to="/tools/authority-finder" 
                            className="bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-850 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 px-5 py-2.5 rounded-xl font-bold text-xs inline-flex items-center gap-1.5 transition-all"
                        >
                            Find Regional PF Office (RPFC) <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </section>

                {/* ── Compliance Checklist & Reminders ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-soft">
                        <div className="flex items-center gap-3 mb-6">
                            <History className="w-8 h-8 text-primary" />
                            <h2 className="text-2xl font-bold">Compliance Checklist</h2>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-gray-700 dark:text-gray-300 text-sm p-3 bg-red-50 dark:bg-red-950/40 rounded-lg border border-red-100 dark:border-red-900/40">
                                <ShieldAlert className="w-5 h-5 text-danger shrink-0" />
                                <span><strong className="text-red-900 dark:text-red-300">Red Flag:</strong> Employer asking money to "close" or "transfer" your PF account. This is illegal; PF transfers are completely automated via UAN.</span>
                            </li>
                            <li className="flex gap-3 text-gray-700 dark:text-gray-300 text-sm p-3 bg-red-50 dark:bg-red-950/40 rounded-lg border border-red-100 dark:border-red-900/40">
                                <ShieldAlert className="w-5 h-5 text-danger shrink-0" />
                                <span><strong className="text-red-900 dark:text-red-300">Red Flag:</strong> Both employer (12%) and employee (12%) PF shares being deducted from your Net take-home salary.</span>
                            </li>
                            <li className="flex gap-3 text-gray-700 dark:text-gray-300 text-sm p-3 bg-yellow-50 dark:bg-yellow-950/40 rounded-lg border border-yellow-100 dark:border-yellow-900/40">
                                <ShieldAlert className="w-5 h-5 text-warning shrink-0" />
                                <span><strong className="text-yellow-900 dark:text-yellow-300">Warning:</strong> PF/ESI contributions must show on your monthly slip. Check the UAN portal monthly before the 20th for deposits.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-soft">
                        <div className="flex items-center gap-3 mb-6">
                            <Landmark className="w-8 h-8 text-primary" />
                            <h2 className="text-2xl font-bold">Important Reminders</h2>
                        </div>
                        <ul className="grid grid-cols-1 gap-4">
                            <li className="flex gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                                Salary must be deposited by the 7th or 10th of every month depending on company size under Payment of Wages Act.
                            </li>
                            <li className="flex gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                                Inoperative PF accounts continue to earn annual interest up to 58 years of age.
                            </li>
                            <li className="flex gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                                Universal Account Number (UAN) is portable for life. Never create multiple UANs; link new Member IDs to your existing UAN.
                            </li>
                            <li className="flex gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                                Notice period disputes cannot be used to block PF claims or UAN transfers.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

