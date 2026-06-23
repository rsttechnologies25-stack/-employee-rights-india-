import { useState } from 'react';
import { Sun } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import InternalLinks from '../components/InternalLinks';
import CalculatorCard, { CalcInput, CalcResult, CalcDisclaimer } from '../components/CalculatorCard';

const relatedLinks = [
    { title: 'All Calculators', subtitle: 'Other tools', path: '/tools' },
    { title: 'Full & Final Settlement', subtitle: 'F&F dues guide', path: '/full-final-settlement' },
    { title: 'Salary Calculation Methods', subtitle: 'How divisors work', path: '/salary-calculation' },
];

export default function LeaveEncashmentCalculatorPage() {
    const [basicDa, setBasicDa] = useState(25000);
    const [leaveDays, setLeaveDays] = useState(15);
    const [method, setMethod] = useState(30);

    const perDay = basicDa / method;
    const encashment = perDay * leaveDays;
    const taxNote = encashment <= 2500000; // ₹25 lakh exemption
    const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN');

    return (
        <div>
            <SEOHead path="/tools/leave-encashment-calculator" />
            <PageHero title="Leave Encashment Calculator" subtitle="Calculate your earned leave encashment at the time of exit from a company." icon={Sun} gradient="accent" />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Tools', path: '/tools' }, { label: 'Leave Encashment Calculator', path: '/tools/leave-encashment-calculator' }]} />
                    <CalculatorCard title="Leave Encashment Calculator" description="Estimate your earned leave encashment during F&F settlement" icon={Sun}
                        assumptions="Formula: (Basic + DA ÷ divisor) × Leave Days. Divisor depends on company policy (÷30 or ÷26). Some companies use gross salary instead of Basic+DA — check your leave policy.">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <CalcInput label="Basic Salary + DA (Monthly)" value={basicDa} onChange={v => setBasicDa(Number(v))} prefix="₹" placeholder="25000" helpText="Basic + Dearness Allowance only" />
                            <CalcInput label="Leave Balance (Days)" value={leaveDays} onChange={v => setLeaveDays(Number(v))} placeholder="15" suffix="days" />
                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Calculation Method</label>
                                <div className="flex gap-2">
                                    {[30, 26].map(d => (
                                        <button key={d} onClick={() => setMethod(d)} className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${method === d ? 'bg-accent text-white' : 'bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700'}`}>÷{d}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <CalcResult label="Per Day Value (Basic+DA ÷ {method})" value={fmt(perDay)} />
                            <CalcResult label="Leave Encashment Amount" value={fmt(encashment)} variant="success" sublabel={`Based on ÷${method} method`} />
                            {!taxNote && (
                                <CalcResult label="⚠ Exceeds ₹25 Lakh Tax Exemption" value="Partially Taxable" variant="danger" sublabel="Amount above ₹25L is taxable. Consult a CA." />
                            )}
                        </div>
                        <CalcDisclaimer>Leave encashment up to ₹25 lakhs is tax-exempt for non-government employees (Budget 2023). Amount above is taxable. Actual encashment depends on your company policy on divisor and salary base.</CalcDisclaimer>
                    </CalculatorCard>
                    <InternalLinks currentPath="/tools/leave-encashment-calculator" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
