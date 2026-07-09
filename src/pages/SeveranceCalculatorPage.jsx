import { useState, useEffect } from 'react';
import { Briefcase, IndianRupee, ShieldCheck, AlertTriangle, HelpCircle, Calendar, Scale } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';

const severanceFaqs = [
    {
        question: "Does retrenchment compensation apply if I resign?",
        answer: "No. Retrenchment compensation under Section 25F only applies when the employer terminates your employment (layoff, redundancy, restructuring, downsizing). If you resign voluntarily, you are not eligible for retrenchment pay, though you still get gratuity (if service > 5 years) and leave encashment."
    },
    {
        question: "How is a 'completed year of service' calculated for retrenchment?",
        answer: "Under the Industrial Disputes Act, 1947, any period of continuous service exceeding 6 months counts as a full completed year of service. For example, if you worked for 1 year and 7 months, it is rounded up to 2 years for retrenchment calculations. If you worked 1 year and 5 months, it is rounded down to 1 year."
    },
    {
        question: "What is notice pay under Section 25F?",
        answer: "The law requires employers to provide at least 1 month notice in writing indicating the reasons for retrenchment, OR pay wages in lieu of such notice. If they terminate you immediately without notice, they must pay you 1 full month of salary as notice pay in addition to the retrenchment compensation."
    }
];

export default function SeveranceCalculatorPage() {
    const [joinDate, setJoinDate] = useState('');
    const [exitDate, setExitDate] = useState('');
    const [monthlySalary, setMonthlySalary] = useState('');
    const [noticeServed, setNoticeServed] = useState('no');
    const [noticePeriodMonths, setNoticePeriodMonths] = useState('1');
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (!joinDate || !exitDate || !monthlySalary) {
            setResult(null);
            return;
        }

        const start = new Date(joinDate);
        const end = new Date(exitDate);
        const salary = parseFloat(monthlySalary);

        if (end < start) {
            setResult({ error: 'Exit date must be after the join date.' });
            return;
        }

        // Calculate service duration
        const diffMs = end.getTime() - start.getTime();
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
        
        const years = Math.floor(diffDays / 365.25);
        const remainingDays = diffDays % 365.25;
        const months = Math.floor(remainingDays / 30.43);
        
        // Under Sec 25F, service > 6 months counts as a full year
        let completedYears = years;
        if (months >= 6) {
            completedYears += 1;
        }

        // Calculations
        const dailyWage = salary / 26; // Ordinary wage divisor under law
        const retrenchmentPay = Math.round(dailyWage * 15 * completedYears);
        
        const noticePay = noticeServed === 'no' ? Math.round(salary * parseFloat(noticePeriodMonths)) : 0;
        const totalSeverance = retrenchmentPay + noticePay;

        setResult({
            diffDays,
            years,
            months,
            days: Math.round(remainingDays % 30.43),
            completedYears,
            dailyWage: parseFloat(dailyWage.toFixed(2)),
            retrenchmentPay,
            noticePay,
            totalSeverance
        });

    }, [joinDate, exitDate, monthlySalary, noticeServed, noticePeriodMonths]);

    const relatedLinks = [
        { title: 'Termination Guide', subtitle: 'Know your retrenchment rights', path: '/termination/after-confirmation' },
        { title: 'F&F Calculator', subtitle: 'Detailed exit dues sheet', path: '/tools/ff-calculator' },
        { title: 'Grievance Generator', subtitle: 'Draft a complaint draft', path: '/tools/grievance-generator' },
        { title: 'Labour Directory', subtitle: 'Find regional office address', path: '/tools/labour-directory' }
    ];

    return (
        <div>
            <SEOHead path="/tools/severance-calculator" />

            <PageHero
                title="Retrenchment Severance Calculator"
                subtitle="Calculate your statutory retrenchment compensation and notice pay under Section 25F of the Industrial Disputes Act, 1947."
                icon={Briefcase}
                gradient="green"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Tools & FAQ', path: '/tools' },
                        { label: 'Severance Calculator', path: '/tools/severance-calculator' }
                    ]} />

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* ── LEFT: FORM INPUTS ── */}
                        <div className="lg:col-span-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 md:p-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
                                🔧 Enter Service Dues
                            </h2>

                            <div className="space-y-5">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-gray-650 dark:text-gray-400">Join Date</label>
                                        <input
                                            type="date"
                                            value={joinDate}
                                            onChange={e => setJoinDate(e.target.value)}
                                            required
                                            className="px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-gray-650 dark:text-gray-400">Exit / Termination Date</label>
                                        <input
                                            type="date"
                                            value={exitDate}
                                            onChange={e => setExitDate(e.target.value)}
                                            required
                                            className="px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-gray-650 dark:text-gray-400">
                                        Monthly Salary <span className="text-gray-400">(Basic + DA)</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                                        <input
                                            type="number"
                                            value={monthlySalary}
                                            onChange={e => setMonthlySalary(e.target.value)}
                                            placeholder="e.g. 50000"
                                            required
                                            className="w-full pl-8 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-base font-bold outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-gray-650 dark:text-gray-400">Was notice served?</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            <input type="radio" value="yes" checked={noticeServed === 'yes'} onChange={() => setNoticeServed('yes')} /> Yes, notice served
                                        </label>
                                        <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            <input type="radio" value="no" checked={noticeServed === 'no'} onChange={() => setNoticeServed('no')} /> No, terminated immediately
                                        </label>
                                    </div>
                                </div>

                                {noticeServed === 'no' && (
                                    <div className="flex flex-col gap-1.5 animate-in slide-in-from-top-1">
                                        <label className="text-xs font-bold text-gray-650 dark:text-gray-400">Contractual Notice Period (Months)</label>
                                        <select
                                            value={noticePeriodMonths}
                                            onChange={e => setNoticePeriodMonths(e.target.value)}
                                            className="w-full px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none"
                                        >
                                            <option value="1">1 Month (Statutory Min)</option>
                                            <option value="2">2 Months</option>
                                            <option value="3">3 Months</option>
                                        </select>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* ── RIGHT: RESULTS ── */}
                        <div className="lg:col-span-6 flex flex-col gap-6">
                            
                            <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 md:p-8 flex-1 flex flex-col justify-center">
                                {result ? (
                                    result.error ? (
                                        <div className="text-center text-red-500 font-bold">{result.error}</div>
                                    ) : (
                                        <div>
                                            <div className="text-center mb-6">
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Total Legal Severance Pay</p>
                                                <p className="text-4xl font-black text-green-600 mt-1">
                                                    ₹{result.totalSeverance.toLocaleString('en-IN')}
                                                </p>
                                            </div>

                                            <div className="space-y-3.5 text-sm border-t border-gray-100 dark:border-gray-850 pt-5">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Service Duration:</span>
                                                    <span className="font-bold text-gray-850 dark:text-gray-200">
                                                        {result.years}y {result.months}m {result.days}d
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Completed Years (Sec 25F):</span>
                                                    <span className="font-bold text-indigo-500">
                                                        {result.completedYears} Year{result.completedYears !== 1 ? 's' : ''}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Daily Wage divisor:</span>
                                                    <span className="font-semibold">₹{result.dailyWage}/day</span>
                                                </div>
                                                
                                                <div className="pt-3.5 border-t border-dashed border-gray-150 dark:border-gray-800 flex justify-between">
                                                    <span className="font-semibold text-gray-700 dark:text-gray-300">Retrenchment Compensation:</span>
                                                    <span className="font-bold">₹{result.retrenchmentPay.toLocaleString('en-IN')}</span>
                                                </div>
                                                <div className="text-right text-[10px] text-gray-400 -mt-2">
                                                    (15 days * ₹{result.dailyWage} * {result.completedYears} years)
                                                </div>

                                                {result.noticePay > 0 && (
                                                    <div className="flex justify-between">
                                                        <span className="font-semibold text-gray-700 dark:text-gray-300">Notice Pay (In Lieu):</span>
                                                        <span className="font-bold">₹{result.noticePay.toLocaleString('en-IN')}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <div className="text-center py-12 text-gray-400">
                                        <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                        <p className="font-bold text-gray-500 dark:text-gray-400">Awaiting Service Info</p>
                                        <p className="text-xs mt-1">Please enter your join date, exit date, and salary to run calculations.</p>
                                    </div>
                                )}
                            </div>

                            {/* Eligibility warning box */}
                            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-250 dark:border-yellow-900 rounded-xl p-5">
                                <h4 className="font-extrabold text-yellow-800 dark:text-yellow-350 text-sm mb-2 flex items-center gap-1.5">
                                    <Scale className="w-5 h-5 text-yellow-600" /> Workman Definition Warning
                                </h4>
                                <p className="text-xs text-yellow-750 dark:text-yellow-400 leading-relaxed">
                                    Statutory retrenchment compensation applies to "workmen" under Section 2(s) of the Industrial Disputes Act, 1947. 
                                    If you are in a purely administrative or managerial role (possessing supervisor/firing authority and earning high salary), the employer may argue you are exempt. 
                                    However, courts analyze your actual day-to-day duties, not your title (e.g. a 'Software Engineer' is generally treated as a workman unless managing teams with firing authority).
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Statutory Layoff conditions */}
                    <div className="mt-12 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 md:p-8">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
                            <Scale className="w-6 h-6 text-green-600" /> Section 25F Conditions for Retrenchment
                        </h2>
                        <ul className="space-y-4 text-sm text-gray-650 dark:text-gray-400">
                            <li className="flex items-start gap-2.5">
                                <span className="text-green-600 font-bold shrink-0 mt-0.5">•</span>
                                <p><strong>Continuous Service:</strong> You must have completed at least 240 days of continuous service in the preceding 12 months to qualify for retrenchment protection and compensation.</p>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-green-600 font-bold shrink-0 mt-0.5">•</span>
                                <p><strong>Notice to Government:</strong> Under Section 25F(c), the employer must also serve a notice of retrenchment to the appropriate state government or Labour Department in the prescribed format.</p>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-green-600 font-bold shrink-0 mt-0.5">•</span>
                                <p><strong>First In Last Out (FILO):</strong> Under Section 25G, retrenchment must follow the principle of "last category of workmen hired, first category retrenched" unless reasons are documented in writing.</p>
                            </li>
                        </ul>
                    </div>

                    {/* FAQ */}
                    <FAQSection faqs={severanceFaqs} title="FAQs — Retrenchment Laws" />

                    <InternalLinks currentPath="/tools/severance-calculator" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
