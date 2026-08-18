import React from 'react';
import { useState } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import InternalLinks from '../components/InternalLinks';
import CalculatorCard, { CalcInput, CalcResult, CalcDisclaimer } from '../components/CalculatorCard';

const relatedLinks = [
    { title: 'Notice Period Rights', subtitle: 'Full notice period guide', path: '/notice-period' },
    { title: 'All Calculators', subtitle: 'Other tools', path: '/tools' },
    { title: 'Full & Final Settlement', subtitle: 'F&F dues', path: '/full-final-settlement' },
];

export default function NoticeBuyoutCalculator() {
    const [monthlySalary, setMonthlySalary] = useState(60000);
    const [noticeDays, setNoticeDays] = useState(90);
    const [daysServed, setDaysServed] = useState(30);

    const daysRemaining = Math.max(0, noticeDays - daysServed);
    const perDay = monthlySalary / 30;
    const buyout = perDay * daysRemaining;
    const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN');

    return (
        <div>
            <SEOHead path="/tools/notice-buyout-calculator" />
            <PageHero title="Notice Period Buyout Calculator" subtitle="Calculate how much you need to pay to leave before your notice period ends." icon={Clock} gradient="primary" />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Tools', path: '/tools' }, { label: 'Notice Buyout Calculator', path: '/tools/notice-buyout-calculator' }]} />
                    <CalculatorCard title="Notice Period Buyout Calculator" description="Estimate the amount payable to exit before serving full notice" icon={Clock}
                        assumptions="Formula: (Monthly Salary ÷ 30) × Remaining Notice Days. Divisor of 30 is used as it is the most common method. Actual amount may vary based on your appointment letter terms.">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <CalcInput label="Monthly Salary (CTC/Gross)" value={monthlySalary} onChange={v => setMonthlySalary(Number(v))} prefix="₹" placeholder="60000" helpText="Gross or CTC monthly amount" />
                            <CalcInput label="Notice Period (Days)" value={noticeDays} onChange={v => setNoticeDays(Number(v))} placeholder="90" suffix="days" />
                            <CalcInput label="Days Already Served" value={daysServed} onChange={v => setDaysServed(Number(v))} placeholder="30" suffix="days" />
                        </div>
                        <div className="space-y-3">
                            <CalcResult label="Per Day Salary" value={fmt(perDay)} />
                            <CalcResult label="Days Remaining" value={daysRemaining + ' days'} />
                            <CalcResult label="Buyout Amount" value={fmt(buyout)} variant="accent" sublabel="Amount deducted from F&F if you leave early" />
                        </div>
                        <CalcDisclaimer>This is an estimate. Your employer may use a different divisor (÷26 or ÷31). Always check your appointment letter for the exact notice pay calculation method.</CalcDisclaimer>
                    </CalculatorCard>
                    <InternalLinks currentPath="/tools/notice-buyout-calculator" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
