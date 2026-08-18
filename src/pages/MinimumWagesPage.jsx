import React from 'react';
import { useState } from 'react';
import { IndianRupee, MapPin, AlertTriangle, ShieldCheck, ExternalLink, Info, Search, Gavel, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import { getAllStates } from '../data/stateLawsData';
import { Link } from 'react-router-dom';

const minimumWagesFaqs = [
    {
        question: "Is it illegal for an employer to pay below the state minimum wage?",
        answer: "Yes, absolutely. Under Section 22 of the Minimum Wages Act, 1948, paying less than the minimum wage set by the state government is a cognizable offence. Employers can face fines, recovery orders, and even imprisonment for up to six months."
    },
    {
        question: "Why do minimum wages vary so much across different states?",
        answer: "Minimum wages in India are set by state governments based on local living costs, consumer price indices, and economic factors. For example, Delhi has a very high cost of living, leading to higher minimum wages (₹783–₹1,035/day) compared to states like Tamil Nadu or Uttar Pradesh."
    },
    {
        question: "Do minimum wage laws apply to IT/Software sector employees?",
        answer: "Yes. IT companies, software firms, BPOs, and KPOs are classified as 'Commercial Establishments' under respective state Shops & Establishments Acts. The minimum wage rates defined for commercial establishments or specific IT schedules apply to support staff, BPO agents, junior engineers, and developers."
    },
    {
        question: "Does the minimum wage include allowances like HRA and Travel Allowance?",
        answer: "Generally, the statutory minimum wage consists of 'Basic + Dearness Allowance (DA)'. Special allowances or reimbursements like HRA, travel allowances, or performance bonuses cannot be counted to artificially show that the minimum wage is met if the base pay is lower."
    },
    {
        question: "How often are minimum wages revised in India?",
        answer: "Minimum wages are revised twice a year by most states through the Dearness Allowance (DA) or Variable Dearness Allowance (VDA) adjustment, reflecting inflation. The base minimum wages are typically revised every 3 to 5 years."
    },
    {
        question: "Can an employer deduct salary below the minimum wage for performance or training?",
        answer: "No. Under no circumstances can any deduction (except statutory ones like PF, ESI, or Professional Tax) bring your net wages below the state-notified minimum wage. Deductions for 'low performance' or 'training costs' that breach this limit are illegal."
    },
    {
        question: "What should I do if my employer is paying me less than the minimum wage?",
        answer: "You should collect your appointment letter, pay slips, and bank statements, and then file a formal complaint with the local Labour Commissioner or Inspector. You can also file online via the Shramik Suvidha Portal or CPGRAMS."
    }
];

export default function MinimumWagesPage() {
    const states = getAllStates();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStates = states.filter(state =>
        state.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const relatedLinks = [
        { title: 'State-Wise Labour Laws', subtitle: 'Detailed rules & Shop Act provisions', path: '/state-labour-laws' },
        { title: 'Salary Calculation Rules', subtitle: 'How daily & LOP wages are calculated', path: '/salary-calculation' },
        { title: 'Delayed Salary Guide', subtitle: 'What to do if salary is withheld', path: '/delayed-salary' },
        { title: 'New Labour Codes', subtitle: 'Proposed changes to minimum wage laws', path: '/new-labour-codes' }
    ];

    return (
        <div>
            <SEOHead path="/minimum-wages" />

            <PageHero
                title="Minimum Wages in India"
                subtitle="Official 2025-2026 state-wise minimum wage rates, category breakups, and your legal rights."
                icon={IndianRupee}
                gradient="green"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumb items={[{ label: 'Minimum Wages', path: '/minimum-wages' }]} />

                    {/* ── SOCIAL MEDIA MYTH BUSTER ── */}
                    <div className="mt-8 mb-10 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700 rounded-2xl p-6 flex gap-4 shadow-soft">
                        <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <h2 className="font-extrabold text-amber-800 dark:text-amber-300 text-lg mb-1">
                                Warning: Delhi Wage Misconception
                            </h2>
                            <p className="text-amber-700 dark:text-amber-400 text-sm leading-relaxed">
                                Viral social media posts frequently claim that the minimum wage in India is <strong>₹783 to ₹1,035 per day</strong>. 
                                <strong> This is FALSE.</strong> Those specific rates apply <strong>only to Delhi</strong> (which has the highest rates in the country). 
                                Minimum wages in India are determined by individual state governments. Other states have lower, state-specific rates which you can check in the comparison table below.
                            </p>
                        </div>
                    </div>

                    {/* ── WAGE COMPARISON SUMMARY ── */}
                    <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 mb-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                    State-Wise Comparison (IT & Commercial Sector)
                                </h2>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                    Showing approximate monthly wage ranges from Unskilled to Highly Skilled roles.
                                </p>
                            </div>
                            <div className="relative max-w-xs w-full">
                                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search state..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-150 dark:border-gray-800 text-left">
                                        <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300">State</th>
                                        <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300">Unskilled (Basic + DA)</th>
                                        <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300">Highly Skilled (Basic + DA)</th>
                                        <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                    {filteredStates.map((state) => {
                                        const wageGroup = state.wages?.[0];
                                        const unskilledRow = wageGroup?.rows?.[0];
                                        const highlySkilledRow = wageGroup?.rows?.[wageGroup.rows.length - 1];

                                        return (
                                            <tr key={state.slug} className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                                                <td className="px-5 py-4 font-bold text-gray-900 dark:text-gray-100">
                                                    {state.name}
                                                </td>
                                                <td className="px-5 py-4">
                                                    {unskilledRow ? (
                                                        <div className="flex flex-col">
                                                            <span className="font-bold text-gray-800 dark:text-gray-200">₹{unskilledRow.monthly.toLocaleString('en-IN')}/mo</span>
                                                            <span className="text-xs text-gray-400">₹{unskilledRow.daily}/day</span>
                                                        </div>
                                                    ) : 'N/A'}
                                                </td>
                                                <td className="px-5 py-4">
                                                    {highlySkilledRow ? (
                                                        <div className="flex flex-col">
                                                            <span className="font-bold text-gray-800 dark:text-gray-200">₹{highlySkilledRow.monthly.toLocaleString('en-IN')}/mo</span>
                                                            <span className="text-xs text-gray-400">₹{highlySkilledRow.daily}/day</span>
                                                        </div>
                                                    ) : 'N/A'}
                                                </td>
                                                <td className="px-5 py-4 text-center">
                                                    <Link
                                                        to={`/state-labour-laws/${state.slug}`}
                                                        className="inline-flex items-center justify-center gap-1 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 hover:bg-green-600 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                                                    >
                                                        Full Table <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    {filteredStates.length === 0 && (
                                        <tr>
                                            <td colSpan="4" className="px-5 py-8 text-center text-gray-500 dark:text-gray-400">
                                                No states found matching your search.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ── STATE GRID ── */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b pb-3">
                        Detailed State-Wise Wage Tables
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
                        {states.map((state) => (
                            <Link
                                key={state.slug}
                                to={`/state-labour-laws/${state.slug}`}
                                className="flex items-center gap-2 p-3 bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-800 rounded-xl hover:border-green-300 hover:shadow-soft transition-all text-gray-700 dark:text-gray-300 group"
                            >
                                <MapPin className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                                <span className="font-semibold text-sm group-hover:text-green-700 transition-colors">{state.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* ── KEY WAGE RIGHTS ── */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft">
                            <div className="w-12 h-12 bg-green-50 dark:bg-green-950/40 text-green-600 rounded-xl flex items-center justify-center mb-4">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="font-extrabold text-gray-900 dark:text-gray-100 mb-2">Overtime at 2x Rate</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Any hours worked beyond the standard shift length (usually 8-9 hours per day) must be paid at double the regular wage rate. This is mandatory under the Minimum Wages Act.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft">
                            <div className="w-12 h-12 bg-green-50 dark:bg-green-950/40 text-green-600 rounded-xl flex items-center justify-center mb-4">
                                <Gavel className="w-6 h-6" />
                            </div>
                            <h3 className="font-extrabold text-gray-900 dark:text-gray-100 mb-2">No Illegal Deductions</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Employers cannot make deductions from your salary for training, performance penalties, or basic infrastructure that reduces your take-home pay below the minimum wage.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft">
                            <div className="w-12 h-12 bg-green-50 dark:bg-green-950/40 text-green-600 rounded-xl flex items-center justify-center mb-4">
                                <Info className="w-6 h-6" />
                            </div>
                            <h3 className="font-extrabold text-gray-900 dark:text-gray-100 mb-2">Variable Dearness (VDA)</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Minimum wages consist of a basic rate plus Variable Dearness Allowance (VDA) linked to inflation. VDA is adjusted twice a year (typically April and October).
                            </p>
                        </div>
                    </div>

                    {/* ── HOW TO COMPLAIN ── */}
                    <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 md:p-8 mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-red-50 dark:bg-red-950/40 text-red-600 rounded-xl">
                                <Gavel className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                How to File a Wage Underpayment Complaint
                            </h2>
                        </div>
                        <ol className="space-y-4">
                            {[
                                { step: '1', title: 'Compile Wages Evidence', desc: 'Collect payslips, bank statements, appointment letter showing your job category (Unskilled/Skilled), and written communication about salary adjustments.' },
                                { step: '2', title: 'File Online Complaint', desc: 'Lodge a grievance on the Shramik Suvidha Portal (shramiksuvidhaportal.gov.in) or pgportal.gov.in. Provide details of underpayment.' },
                                { step: '3', title: 'Visit Labour Commissioner', desc: 'Go to your regional District Labour Office. Present evidence to the Labour Inspector under Section 20 of the Minimum Wages Act.' },
                                { step: '4', title: 'Escalate to Labour Court', desc: 'If the inspector does not resolve the issue, you can file a petition in the local Labour Court. For minimum wages, lawyers are not strictly required for representation.' },
                            ].map(item => (
                                <li key={item.step} className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm flex items-center justify-center">
                                        {item.step}
                                    </span>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-gray-100">{item.title}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* ── FAQ SECTION ── */}
                    <FAQSection faqs={minimumWagesFaqs} title="FAQs — Minimum Wages in India" />

                    <InternalLinks currentPath="/minimum-wages" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
