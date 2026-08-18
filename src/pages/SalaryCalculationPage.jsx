import React from 'react';
import { useState } from 'react';
import { Calculator, AlertTriangle, TrendingUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { ContentList, CalloutBox } from '../components/ContentSection';
import { salaryCalculationFaqs, salaryMethods } from '../data/salaryData';

const relatedLinks = [
    { title: 'Pay Cycle Guide', subtitle: 'Salary credit date rules', path: '/pay-cycle' },
    { title: 'Delayed Salary Recovery', subtitle: 'If your salary is withheld', path: '/delayed-salary' },
    { title: 'Full & Final Settlement', subtitle: 'Exit dues calculation', path: '/full-final-settlement' },
    { title: 'Salary Proration Calculator', subtitle: 'Calculate your exact salary', path: '/tools/salary-proration-calculator' },
];

export default function SalaryCalculationPage() {
    const [monthlySalary, setMonthlySalary] = useState(50000);
    const [daysWorked, setDaysWorked] = useState(22);
    const [lopDays, setLopDays] = useState(2);

    const div30 = { perDay: monthlySalary / 30, earned: (monthlySalary / 30) * daysWorked, lop: (monthlySalary / 30) * lopDays };
    const div31 = { perDay: monthlySalary / 31, earned: (monthlySalary / 31) * daysWorked, lop: (monthlySalary / 31) * lopDays };
    const div26 = { perDay: monthlySalary / 26, earned: (monthlySalary / 26) * daysWorked, lop: (monthlySalary / 26) * lopDays };
    const divWD = { perDay: monthlySalary / 23, earned: (monthlySalary / 23) * daysWorked, lop: (monthlySalary / 23) * lopDays };

    const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN');

    return (
        <div>
            <SEOHead path="/salary-calculation" />
            <PageHero
                title="Salary Calculation Methods in India"
                subtitle="Understand how your salary is calculated — ÷26, ÷30, ÷31, and working-day methods. Know which method your employer uses and whether it is fair."
                icon={Calculator}
                gradient="primary"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Salary & Pay', path: '/salary-calculation' },
                        { label: 'Salary Calculation', path: '/salary-calculation' }
                    ]} />

                    <ContentSection title="The Four Salary Calculation Methods" icon={Calculator} variant="info">
                        <p>Indian labour law does not prescribe a specific method for pro-rating salaries. Companies choose from these four approaches:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {salaryMethods.map((m, idx) => (
                                <div key={idx} className="p-5 bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800">
                                    <h3 className="font-bold text-primary mb-2">{m.name}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded mb-2">{m.formula}</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{m.description}</p>
                                    <div className="text-xs">
                                        <span className="text-success font-semibold">Example: </span>
                                        <span className="text-gray-700 dark:text-gray-300">{m.example}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    {/* Live Comparison Calculator */}
                    <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft overflow-hidden mb-8">
                        <div className="bg-primary p-6 text-white">
                            <div className="flex items-center gap-3">
                                <TrendingUp className="w-7 h-7" />
                                <div>
                                    <h2 className="text-xl font-bold">Live Method Comparison</h2>
                                    <p className="text-blue-200 text-sm">See all 4 methods side-by-side with your numbers</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                {[
                                    { label: 'Monthly Salary (₹)', value: monthlySalary, setter: setMonthlySalary },
                                    { label: 'Days Worked', value: daysWorked, setter: setDaysWorked },
                                    { label: 'LOP Days', value: lopDays, setter: setLopDays },
                                ].map((inp, idx) => (
                                    <div key={idx}>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">{inp.label}</label>
                                        <input type="number" value={inp.value} onChange={e => inp.setter(Number(e.target.value))}
                                            className="w-full px-4 py-3 border-2 border-gray-100 dark:border-gray-800 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none font-bold text-lg" />
                                    </div>
                                ))}
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-50 dark:bg-gray-900">
                                            <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-300">Method</th>
                                            <th className="px-4 py-3 text-right font-bold text-gray-700 dark:text-gray-300">Per Day Rate</th>
                                            <th className="px-4 py-3 text-right font-bold text-gray-700 dark:text-gray-300">Salary Earned</th>
                                            <th className="px-4 py-3 text-right font-bold text-gray-700 dark:text-gray-300">LOP Deduction</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[
                                            { name: '÷30 Method', data: div30, best: false },
                                            { name: '÷31 Method', data: div31, best: false },
                                            { name: '÷26 Method (Best for Employee)', data: div26, best: true },
                                            { name: '÷Working Days', data: divWD, best: false },
                                        ].map((row, idx) => (
                                            <tr key={idx} className={row.best ? 'bg-success/5' : 'bg-white dark:bg-gray-950 hover:bg-gray-50 dark:bg-gray-900'}>
                                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{row.name}{row.best && <span className="ml-2 text-[10px] bg-success text-white px-1.5 py-0.5 rounded-full">HIGHEST</span>}</td>
                                                <td className="px-4 py-3 text-right font-mono">{fmt(row.data.perDay)}</td>
                                                <td className="px-4 py-3 text-right font-mono font-bold">{fmt(row.data.earned)}</td>
                                                <td className="px-4 py-3 text-right font-mono text-danger">-{fmt(row.data.lop)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <ContentSection title="Which Method is Fairest?" icon={Calculator} variant="default">
                        <ContentList items={[
                            '÷26 method gives the highest per-day rate (assumes 26 payable days, excludes Sundays) — most favorable to employees',
                            '÷30 method is the most common, consistent month-to-month, and neutral to both parties over a year',
                            '÷31 method is strictest in 31-day months — slightly disadvantages employees in those months',
                            'Working-days method is most variable and can be complex to verify',
                        ]} ordered={false} />
                        <CalloutBox type="warning" title="Check Your Appointment Letter">
                            Your appointment letter or employee handbook should specify which method the company uses. If it is unclear, ask HR in writing. Changing the method without notice or consent is a breach of employment terms.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="Loss of Pay (LOP) Calculation" icon={AlertTriangle} variant="warning">
                        <p>LOP (also called UPL — Unpaid Leave) is applied when you are absent without leave balance. The per-day deduction depends on your company's method:</p>
                        <ContentList items={[
                            'Under ÷30: LOP = Monthly Salary ÷ 30 × LOP Days',
                            'Under ÷26: LOP = Monthly Salary ÷ 26 × LOP Days',
                            'Under ÷31: LOP = Monthly Salary ÷ 31 × LOP Days',
                            'Sandwiching policy: Some companies apply LOP to weekends and holidays adjacent to unauthorized leaves — check your leave policy',
                            'LOP must be reflected clearly in the salary slip for transparency',
                        ]} ordered={false} variant="warning" />
                    </ContentSection>

                    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
                        <p className="text-sm text-yellow-800"><strong>Disclaimer:</strong> This content is for educational awareness only. For legal advice, consult a qualified professional.</p>
                    </div>

                    <FAQSection faqs={salaryCalculationFaqs} title="FAQs — Salary Calculation" />
                    <InternalLinks currentPath="/salary-calculation" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
