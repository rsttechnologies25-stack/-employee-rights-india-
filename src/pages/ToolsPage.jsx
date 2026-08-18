import { Link } from 'react-router-dom';
import { Wrench, Calculator, Briefcase, Award, Clock, FileCheck, Banknote, IndianRupee, FileText, Scale, MapPin, DollarSign, ShieldAlert, Search, Map, Coins, UserX, Home, Baby, Moon, Gift, FileX, Bike, ShieldCheck, Calendar } from 'lucide-react';
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
        icon: Scale,
        title: 'Legal Notice Generator',
        description: 'Draft advocate-grade legal demand notices for unpaid salary, delayed PF, and withheld letters.',
        path: '/tools/legal-notice-generator',
        badge: 'New Suite',
        badgeClass: 'bg-primary/10 text-primary font-bold',
    },
    {
        icon: Scale,
        title: 'Bond & Non-Compete Scanner',
        description: 'Check whether service bonds or post-employment non-compete clauses are legally void.',
        path: '/tools/employment-bond-scanner',
        badge: 'Section 27',
        badgeClass: 'bg-blue-100 text-blue-700',
    },
    {
        icon: Calendar,
        title: 'Notice & Leave Adjustment',
        description: 'Calculate net notice shortfall by offsetting accrued Earned Leaves against notice days.',
        path: '/tools/notice-adjustment-calculator',
        badge: 'Cost Saver',
        badgeClass: 'bg-emerald-100 text-emerald-700',
    },
    {
        icon: ShieldCheck,
        title: 'POSH Complaint Builder',
        description: 'Draft a confidential formal sexual harassment complaint to the ICC with interim relief.',
        path: '/tools/posh-complaint-builder',
        badge: 'Confidential',
        badgeClass: 'bg-rose-100 text-rose-700',
    },
    {
        icon: Bike,
        title: 'Gig Worker Rights Hub',
        description: 'Deactivation appeal generator and social security rights for Blinkit, Swiggy, Zomato & Uber.',
        path: '/tools/gig-worker-rights',
        badge: 'Gig Economy',
        badgeClass: 'bg-amber-100 text-amber-700',
    },
    {
        icon: Gift,
        title: 'Bonus Resignation Analyzer',
        description: 'Check if you are legally entitled to your statutory or variable bonus after resigning.',
        path: '/tools/bonus-analyzer',
        badge: 'Survival Kit',
        badgeClass: 'bg-orange-100 text-orange-700',
    },
    {
        icon: FileX,
        title: 'Offer Revocation Guide',
        description: 'Legal steps to claim compensation if a company revokes your offer letter.',
        path: '/tools/offer-revocation',
        badge: 'Survival Kit',
        badgeClass: 'bg-orange-100 text-orange-700',
    },
    {
        icon: ShieldAlert,
        title: 'BGV Defamation Shield',
        description: 'Check if your manager\'s threats to tank your background verification are illegal.',
        path: '/tools/bgv-shield',
        badge: 'Survival Kit',
        badgeClass: 'bg-orange-100 text-orange-700',
    },
    {
        icon: Briefcase,
        title: 'Mass Layoff Survival Kit',
        description: 'Audit your mass layoff severance package for Chapter VB compliance.',
        path: '/tools/layoff-survival',
        badge: 'Survival Kit',
        badgeClass: 'bg-orange-100 text-orange-700',
    },
    {
        icon: UserX,
        title: '"Sham Contractor" Scanner',
        description: 'Take the legal control test to see if you are an employee illegally disguised as a contractor.',
        path: '/tools/sham-contractor',
        badge: 'Legal Tool',
        badgeClass: 'bg-red-100 text-red-700',
    },
    {
        icon: Home,
        title: 'HRA Tax Exemption Optimizer',
        description: 'Calculate your exact House Rent Allowance tax-free amount using the Income Tax Least of 3 rule.',
        path: '/tools/hra-calculator',
        badge: 'Tax Saver',
        badgeClass: 'bg-green-100 text-green-700',
    },
    {
        icon: Baby,
        title: 'Maternity Benefit Legal Tracker',
        description: 'Calculate your exact 26-week timeline and verify your statutory rights for maternity leave.',
        path: '/tools/maternity-tracker',
        badge: 'Women\'s Rights',
        badgeClass: 'bg-pink-100 text-pink-700',
    },
    {
        icon: Moon,
        title: 'Night Shift Safety Audit',
        description: 'Audit your company\'s safety compliance for women working night shifts (cabs, security, etc).',
        path: '/tools/night-shift-audit',
        badge: 'Safety',
        badgeClass: 'bg-indigo-100 text-indigo-700',
    },
    {
        icon: DollarSign,
        title: 'PF & Pension Analyzer',
        description: 'Calculate EPF/EPS splits and scan for illegal CTC manipulation by HR.',
        path: '/tools/pf-analyzer',
        badge: 'New',
        badgeClass: 'bg-red-100 text-red-700',
    },
    {
        icon: ShieldAlert,
        title: 'PIP Defense Kit',
        description: 'Analyze your Performance Improvement Plan and generate a legal rebuttal draft.',
        path: '/tools/pip-defense',
        badge: 'Defense Toolkit',
        badgeClass: 'bg-primary/10 text-primary',
    },
    {
        icon: Coins,
        title: 'Gratuity Payout Calculator',
        description: 'Check 4-year/240-day eligibility and calculate your statutory gratuity payout.',
        path: '/tools/gratuity-calculator',
        badge: 'New',
        badgeClass: 'bg-primary/10 text-primary',
    },
    {
        icon: Search,
        title: 'Exit Interview Scanner',
        description: 'Scan HR exit demands (like NDAs, Non-Competes, Bonds) for legal enforceability.',
        path: '/tools/exit-scanner',
        badge: 'Legal Tool',
        badgeClass: 'bg-accent/10 text-accent',
    },
    {
        icon: Map,
        title: 'Interactive State Legal Hub',
        description: 'Find your specific state labor laws, minimum wages, and labour commissioner.',
        path: '/legal-map',
        badge: 'Essential',
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
    {
        icon: IndianRupee,
        title: 'Minimum Wage Checker',
        description: 'Verify if your monthly salary meets the legal minimum wage limit in your state and sector.',
        path: '/tools/minimum-wage-checker',
        badge: 'Compliance',
        badgeClass: 'bg-green-100 text-green-700',
    },
    {
        icon: Clock,
        title: 'Overtime & Shift Tracker',
        description: 'Log daily hours worked, calculate overtime, and estimate double-rate earnings.',
        path: '/tools/overtime-tracker',
        badge: 'Work Hours',
        badgeClass: 'bg-blue-100 text-blue-700',
    },
    {
        icon: FileText,
        title: 'Grievance Draft Generator',
        description: 'Draft professionally written, legally cited complaint letters for delayed salary, letters, PF, or wrongful termination.',
        path: '/tools/grievance-generator',
        badge: 'Legal',
        badgeClass: 'bg-red-100 text-red-700',
    },
    {
        icon: Scale,
        title: 'Contract Clause Analyzer',
        description: 'Paste notice periods, training bonds, or non-competes to check their validity under Indian law.',
        path: '/tools/clause-analyzer',
        badge: 'Contract Check',
        badgeClass: 'bg-indigo-100 text-indigo-700',
    },
    {
        icon: MapPin,
        title: 'Labour Office Directory',
        description: 'Search official contact directories, websites, and emails for regional and district labour offices across India.',
        path: '/tools/labour-directory',
        badge: 'Contacts',
        badgeClass: 'bg-teal-100 text-teal-700',
    },
    {
        icon: Briefcase,
        title: 'Retrenchment Severance Calculator',
        description: 'Estimate legal retrenchment severance pay and notice pay under Section 25F of the Industrial Disputes Act.',
        path: '/tools/severance-calculator',
        badge: 'Statutory Pay',
        badgeClass: 'bg-orange-100 text-orange-700',
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
