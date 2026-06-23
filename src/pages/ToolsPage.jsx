import { Link } from 'react-router-dom';
import { Wrench, Calculator, Briefcase, Award, Clock, FileCheck, Banknote } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';

const calculators = [
    {
        icon: Calculator,
        title: 'Salary Calculator',
        description: 'Calculate your in-hand salary from CTC — deductions, PF, tax, and take-home.',
        path: '/salary-calculator',
        badge: 'Popular',
        badgeClass: 'bg-success/10 text-success',
    },
    {
        icon: Briefcase,
        title: 'PF Eligibility Checker',
        description: 'Check if you qualify for Provident Fund and estimate your PF corpus.',
        path: '/pf-checker',
        badge: 'EPFO',
        badgeClass: 'bg-primary/10 text-primary',
    },
    {
        icon: Award,
        title: 'Gratuity Calculator',
        description: 'Calculate your gratuity using the standard formula — covered and non-covered employees.',
        path: '/gratuity',
        badge: 'Gratuity Act',
        badgeClass: 'bg-accent/10 text-accent',
    },
    {
        icon: Clock,
        title: 'Notice Period Buyout Calculator',
        description: 'Estimate how much you need to pay to buy out your notice period early.',
        path: '/tools/notice-buyout-calculator',
        badge: 'Notice Period',
        badgeClass: 'bg-warning/10 text-warning',
    },
    {
        icon: FileCheck,
        title: 'Leave Encashment Calculator',
        description: 'Calculate your earned leave encashment at the time of exit.',
        path: '/tools/leave-encashment-calculator',
        badge: 'F&F',
        badgeClass: 'bg-teal-100 text-teal-700',
    },
    {
        icon: Calculator,
        title: 'Salary Proration Calculator',
        description: 'Compare all 4 salary calculation methods (÷26, ÷30, ÷31, working days) with your numbers.',
        path: '/tools/salary-proration-calculator',
        badge: 'New',
        badgeClass: 'bg-purple-100 text-purple-700',
    },
    {
        icon: Banknote,
        title: 'F&F Settlement Calculator',
        description: 'Estimate your total Full & Final settlement — salary, leave, gratuity, bonus, notice pay.',
        path: '/tools/ff-calculator',
        badge: 'Popular',
        badgeClass: 'bg-success/10 text-success',
    },
    {
        icon: Calculator,
        title: 'Income Tax Calculator (Old vs New)',
        description: 'Compare the Old and New tax regimes side-by-side to find out which saves you more money.',
        path: '/tools/income-tax-calculator',
        badge: 'Tax',
        badgeClass: 'bg-indigo-100 text-indigo-700',
    },
];

export default function ToolsPage() {
    return (
        <div>
            <SEOHead path="/tools" />
            <PageHero
                title="Tools & Calculators"
                subtitle="Free employee rights calculators — salary, gratuity, notice period buyout, leave encashment, and F&F settlement estimation."
                icon={Wrench}
                gradient="teal"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <Breadcrumb items={[{ label: 'Tools & Calculators', path: '/tools' }]} />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {calculators.map((calc, idx) => {
                            const Icon = calc.icon;
                            return (
                                <Link key={idx} to={calc.path} className="card card-hover p-6 flex flex-col group">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                            <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <span className={`badge text-[10px] uppercase tracking-wider ${calc.badgeClass}`}>{calc.badge}</span>
                                    </div>
                                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary transition-colors">{calc.title}</h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">{calc.description}</p>
                                    <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm">
                                        <span>Open Calculator</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">About These Calculators</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">All calculations are estimates based on standard Indian labour law formulas. Actual amounts may vary based on your company policy, employment contract, applicable state laws, and tax bracket. These tools are for awareness and planning purposes only. For precise legal advice, consult a qualified labour law professional.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
