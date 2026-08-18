import React from 'react';
import { useState } from 'react';
import { Calculator } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import InternalLinks from '../components/InternalLinks';
import CalculatorCard, { CalcInput, CalcDisclaimer } from '../components/CalculatorCard';

const relatedLinks = [
    { title: 'Salary Calculation Methods', subtitle: 'In-depth method guide', path: '/salary-calculation' },
    { title: 'All Calculators', subtitle: 'Other tools', path: '/tools' },
    { title: 'Delayed Salary Recovery', subtitle: 'If salary is wrong or delayed', path: '/delayed-salary' },
];

export default function SalaryProrationCalculatorPage() {
    const [monthlySalary, setMonthlySalary] = useState(50000);
    const [daysWorked, setDaysWorked] = useState(22);
    const [totalDays, setTotalDays] = useState(30);

    const workingDaysInMonth = totalDays === 31 ? 23 : totalDays === 30 ? 22 : 21;

    const methods = [
        { label: '÷30 Method', divisor: 30, desc: 'Most common. Consistent across all months.' },
        { label: '÷31 Method', divisor: 31, desc: 'Based on actual calendar days of the month.' },
        { label: '÷26 Method', divisor: 26, desc: 'Excludes Sundays. Higher per-day rate — best for employee.' },
        { label: '÷Working Days', divisor: workingDaysInMonth, desc: `Based on actual working days (est. ${workingDaysInMonth} days this month).` },
    ];

    const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
    const best = Math.max(...methods.map(m => (monthlySalary / m.divisor) * daysWorked));

    return (
        <div>
            <SEOHead path="/tools/salary-proration-calculator" />
            <PageHero title="Salary Proration Calculator" subtitle="Compare all 4 salary calculation methods side-by-side with your actual numbers." icon={Calculator} gradient="primary" />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Tools', path: '/tools' }, { label: 'Salary Proration Calculator', path: '/tools/salary-proration-calculator' }]} />
                    <CalculatorCard title="Salary Proration Calculator" description="See exactly how much you get paid under each method your employer might use" icon={Calculator}
                        assumptions="Results show gross salary (before deductions). The divisor changes which method is used to compute your per-day rate. All 4 methods are equally legal in India.">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <CalcInput label="Monthly Salary (₹)" value={monthlySalary} onChange={v => setMonthlySalary(Number(v))} prefix="₹" placeholder="50000" />
                            <CalcInput label="Days Worked" value={daysWorked} onChange={v => setDaysWorked(Number(v))} placeholder="22" suffix="days" />
                            <CalcInput label="Days in Month" value={totalDays} onChange={v => setTotalDays(Number(v))} placeholder="30" suffix="days" helpText="Calendar days (28–31)" />
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-900">
                                        <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-300">Method</th>
                                        <th className="px-4 py-3 text-right font-bold text-gray-700 dark:text-gray-300">Per Day</th>
                                        <th className="px-4 py-3 text-right font-bold text-gray-700 dark:text-gray-300">Earned Salary</th>
                                        <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-300">Note</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {methods.map((m, idx) => {
                                        const earned = (monthlySalary / m.divisor) * daysWorked;
                                        const isHighest = Math.abs(earned - best) < 0.01;
                                        return (
                                            <tr key={idx} className={isHighest ? 'bg-success/5 border-success/20' : 'bg-white dark:bg-gray-950 hover:bg-gray-50 dark:bg-gray-900'}>
                                                <td className="px-4 py-4 font-medium text-gray-900 dark:text-gray-100">
                                                    {m.label}
                                                    {isHighest && <span className="ml-2 text-[10px] bg-success text-white px-1.5 py-0.5 rounded-full font-bold">HIGHEST</span>}
                                                </td>
                                                <td className="px-4 py-4 text-right font-mono">{fmt(monthlySalary / m.divisor)}</td>
                                                <td className={`px-4 py-4 text-right font-mono font-bold text-lg ${isHighest ? 'text-success' : 'text-gray-900 dark:text-gray-100'}`}>{fmt(earned)}</td>
                                                <td className="px-4 py-4 text-xs text-gray-500 dark:text-gray-400">{m.desc}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr className="bg-gray-100">
                                        <td colSpan="4" className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                                            Difference between highest and lowest: <strong>{fmt(Math.max(...methods.map(m => (monthlySalary / m.divisor) * daysWorked)) - Math.min(...methods.map(m => (monthlySalary / m.divisor) * daysWorked)))}</strong>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <CalcDisclaimer>This calculator shows gross salary for the days worked. Actual take-home depends on PF, ESI, TDS, and other deductions. Check your appointment letter to know which method your employer uses.</CalcDisclaimer>
                    </CalculatorCard>
                    <InternalLinks currentPath="/tools/salary-proration-calculator" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
