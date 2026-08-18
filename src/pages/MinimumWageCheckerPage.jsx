import React from 'react';
import { useState, useEffect } from 'react';
import { IndianRupee, ShieldCheck, AlertOctagon, Scale, ArrowRight, Gavel, HelpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import { getAllStates } from '../data/stateLawsData';
import { Link } from 'react-router-dom';

const checkerFaqs = [
    {
        question: "Does my Basic Salary alone have to meet the minimum wage, or does the total CTC count?",
        answer: "Under Indian labour laws, the minimum wage is calculated based on Basic Salary + Dearness Allowance (DA). Employers cannot include allowances like HRA, travel expenses, performance bonuses, or employer PF/ESI contributions to claim they are meeting the minimum wage if the base (Basic + DA) is below the limit."
    },
    {
        question: "Can an employer reduce my Basic Salary to meet minimum wage and increase other allowances?",
        answer: "No. Decreasing the basic salary or restructuring the wage structure to bypass minimum wage rules or PF/ESI obligations is considered an unfair labour practice. Any restructuring must not lead to a drop in statutory pay."
    },
    {
        question: "What if my state or industry sector is not listed in the checker?",
        answer: "This checker covers 15 major states and their primary employment sectors (IT, Shops, Manufacturing, Construction). If your state is not covered, visit your state's official Labour Department portal to see the latest Minimum Wages Act notification for your scheduled employment."
    }
];

export default function MinimumWageCheckerPage() {
    const states = getAllStates();
    
    const [selectedStateSlug, setSelectedStateSlug] = useState('karnataka');
    const [selectedSectorIndex, setSelectedSectorIndex] = useState(0);
    const [selectedRowIndex, setSelectedRowIndex] = useState(0);
    const [monthlySalary, setMonthlySalary] = useState('');
    const [complianceResult, setComplianceResult] = useState(null);

    const stateData = states.find(s => s.slug === selectedStateSlug) || states[0];
    const sectorData = stateData?.wages?.[selectedSectorIndex] || stateData?.wages?.[0];
    const rowData = sectorData?.rows?.[selectedRowIndex] || sectorData?.rows?.[0];

    // Reset sector/row indexes when state changes
    useEffect(() => {
        setSelectedSectorIndex(0);
        setSelectedRowIndex(0);
    }, [selectedStateSlug]);

    // Reset row index when sector changes
    useEffect(() => {
        setSelectedRowIndex(0);
    }, [selectedSectorIndex]);

    // Handle check calculation
    useEffect(() => {
        if (!rowData || monthlySalary === '') {
            setComplianceResult(null);
            return;
        }

        const inputSal = parseFloat(monthlySalary);
        const minMonthly = rowData.monthly;
        const minDaily = rowData.daily;
        const diff = inputSal - minMonthly;
        const isCompliant = diff >= 0;

        setComplianceResult({
            isCompliant,
            minMonthly,
            minDaily,
            diff: Math.abs(diff),
            percentage: ((inputSal / minMonthly) * 100).toFixed(0)
        });
    }, [rowData, monthlySalary]);

    const relatedLinks = [
        { title: 'Minimum Wages Guide', subtitle: 'Browse state comparison tables', path: '/minimum-wages' },
        { title: 'Salary Calculator', subtitle: 'Detailed salary breakups', path: '/salary-calculator' },
        { title: 'How to File Complaint', subtitle: 'Step-by-step grievance guide', path: '/complaint-guide' },
        { title: 'State-Wise Labour Laws', subtitle: 'Choose another state', path: '/state-labour-laws' }
    ];

    return (
        <div>
            <SEOHead path="/tools/minimum-wage-checker" />

            <PageHero
                title="Minimum Wage Compliance Checker"
                subtitle="Calculate instantly if your monthly take-home salary meets the legal minimum wage limit in your state."
                icon={IndianRupee}
                gradient="green"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Tools & Calculators', path: '/tools' },
                        { label: 'Minimum Wage Checker', path: '/tools/minimum-wage-checker' }
                    ]} />

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* ── LEFT: FORM INPUTS ── */}
                        <div className="lg:col-span-7 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 md:p-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
                                🔧 Enter Employment Details
                            </h2>

                            <div className="space-y-6">
                                {/* State Select */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Select State</label>
                                    <select
                                        value={selectedStateSlug}
                                        onChange={(e) => setSelectedStateSlug(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        {states.map(s => (
                                            <option key={s.slug} value={s.slug}>{s.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Sector Selection */}
                                {stateData?.wages && (
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Industry / Sector</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {stateData.wages.map((sec, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    onClick={() => setSelectedSectorIndex(idx)}
                                                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                                                        selectedSectorIndex === idx
                                                            ? 'border-green-500 bg-green-50/50 dark:bg-green-950/20 text-green-700 dark:text-green-400 font-bold'
                                                            : 'border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400'
                                                    }`}
                                                >
                                                    <p className="font-semibold text-sm mb-0.5">{sec.sector}</p>
                                                    <p className="text-[10px] opacity-70 truncate">{sec.note}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Category Selection */}
                                {sectorData?.rows && (
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Job Role / Skill Level</label>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                            {sectorData.rows.map((row, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    onClick={() => setSelectedRowIndex(idx)}
                                                    className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                                                        selectedRowIndex === idx
                                                            ? 'border-green-500 bg-green-600 text-white font-bold'
                                                            : 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                                                    }`}
                                                >
                                                    {row.category}
                                                </button>
                                            ))}
                                        </div>
                                        {rowData?.note && (
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">
                                                * Applies to: {rowData.note}
                                            </p>
                                        )}
                                    </div>
                                )}

                                {/* Salary Input */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                        Your Monthly Salary <span className="text-xs font-medium text-gray-400">(Basic + Dearness Allowance)</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg">₹</span>
                                        <input
                                            type="number"
                                            value={monthlySalary}
                                            onChange={(e) => setMonthlySalary(e.target.value)}
                                            placeholder="e.g. 15000"
                                            className="w-full pl-8 pr-4 py-3.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-base font-bold text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT: CALCULATIONS & Badges ── */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            
                            {/* Live Result Card */}
                            <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 md:p-8 flex-1 flex flex-col justify-center">
                                {complianceResult ? (
                                    <div className="text-center">
                                        <div className="mb-4 inline-flex p-4 rounded-full bg-gray-50 dark:bg-gray-900">
                                            {complianceResult.isCompliant ? (
                                                <ShieldCheck className="w-16 h-16 text-green-600" />
                                            ) : (
                                                <AlertOctagon className="w-16 h-16 text-red-500 animate-pulse" />
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                                            {complianceResult.isCompliant ? 'Pay is Legally Compliant' : 'Wages Below Minimum Limit'}
                                        </h3>

                                        <div className="my-6">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Legal State Minimum</p>
                                            <p className="text-3xl font-black text-gray-900 dark:text-gray-100">
                                                ₹{complianceResult.minMonthly.toLocaleString('en-IN')}/mo
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">₹{complianceResult.minDaily}/day</p>
                                        </div>

                                        <div className={`p-4 rounded-xl border mb-2 ${
                                            complianceResult.isCompliant
                                                ? 'bg-green-50 border-green-200 dark:bg-green-950/20 text-green-800 dark:text-green-400'
                                                : 'bg-red-50 border-red-200 dark:bg-red-950/20 text-red-800 dark:text-red-400'
                                        }`}>
                                            {complianceResult.isCompliant ? (
                                                <p className="text-sm font-semibold">
                                                    Your pay is <strong>₹{complianceResult.diff.toLocaleString('en-IN')}</strong> ({complianceResult.percentage}%) above the state minimum wage limit.
                                                </p>
                                            ) : (
                                                <p className="text-sm font-semibold">
                                                    Your pay is <strong>₹{complianceResult.diff.toLocaleString('en-IN')}</strong> ({100 - parseInt(complianceResult.percentage)}%) below the legal minimum wage limit.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-12 text-gray-400">
                                        <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                        <p className="font-bold text-gray-500 dark:text-gray-400">Awaiting Inputs</p>
                                        <p className="text-xs mt-1">Please select state/role and enter salary to run compliance check.</p>
                                    </div>
                                )}
                            </div>

                            {/* State Source / Info Box */}
                            <div className="bg-green-50/50 dark:bg-green-950/10 border border-green-150 dark:border-green-900 rounded-xl p-5">
                                <h4 className="font-bold text-green-800 dark:text-green-300 text-sm mb-2">📄 State Wage Source</h4>
                                <p className="text-xs text-green-700 dark:text-green-400 leading-relaxed">
                                    <strong>State:</strong> {stateData.name}<br />
                                    <strong>Revision:</strong> {stateData.wageRevision}<br />
                                    <strong>Source Notification:</strong> {stateData.wageSource}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* ── ACTIONS IF UNDERPAID ── */}
                    {complianceResult && !complianceResult.isCompliant && (
                        <div className="mt-8 bg-red-600 rounded-2xl p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 animate-in fade-in slide-in-from-bottom-5 duration-300">
                            <div>
                                <h3 className="text-2xl font-black mb-2 flex items-center gap-2">
                                    <Scale className="w-7 h-7" /> Underpaid? Take Action
                                </h3>
                                <p className="text-red-100 text-sm leading-relaxed max-w-2xl">
                                    Paying less than the state-mandated minimum wage is a criminal offense under the Minimum Wages Act, 1948. 
                                    You have the legal right to claim the deficit and file a complaint. No company policy can bypass state laws.
                                </p>
                            </div>
                            <Link
                                to="/complaint-guide"
                                className="bg-white text-red-700 hover:bg-red-50 text-base font-extrabold px-6 py-4 rounded-xl shadow-md transition-all shrink-0 flex items-center gap-2 group"
                            >
                                How to Complain <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    )}

                    {/* ── LEGAL CONSIDERATIONS ── */}
                    <div className="mt-12 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 md:p-8">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
                            <Gavel className="w-6 h-6 text-green-600" /> Key Minimum Wage Rules
                        </h2>
                        <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                            <li className="flex items-start gap-2.5">
                                <span className="text-green-600 font-bold shrink-0 mt-0.5">•</span>
                                <p><strong>Overtime Double Pay (2x):</strong> Working beyond 8–9 hours/day requires overtime pay at double the ordinary wage rate. Employers cannot waive this using compensatory off unless the worker agrees.</p>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-green-600 font-bold shrink-0 mt-0.5">•</span>
                                <p><strong>No Wage Forfeiture:</strong> Even in probation or training periods, minimum wage rules apply. The employer cannot state that 'probationers' are exempt from minimum wages.</p>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-green-600 font-bold shrink-0 mt-0.5">•</span>
                                <p><strong>Variable Dearness Allowance (VDA):</strong> Most states adjust minimum wages twice a year (typically in April and October) to account for changes in the Consumer Price Index (inflation).</p>
                            </li>
                        </ul>
                    </div>

                    {/* FAQ */}
                    <FAQSection faqs={checkerFaqs} title="FAQs — Minimum Wage Compliance" />

                    <InternalLinks currentPath="/tools/minimum-wage-checker" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
