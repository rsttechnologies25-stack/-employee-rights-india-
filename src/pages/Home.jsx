import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle, Compass, Scale, ShieldCheck, Lock, Calculator, FileText, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SearchBar from '../components/SearchBar';

const topProblemCards = [
    { title: 'Salary Not Paid / Withheld', desc: 'Employer delayed salary past 7th/10th or stopped payment', path: '/delayed-salary', icon: '💰', badge: 'Urgent' },
    { title: 'Notice Period & Buyout Rules', desc: 'Notice buyout disputes, early release, garden leave rules', path: '/notice-period', icon: '📝' },
    { title: 'Fired / Retrenched / Layoff', desc: 'Termination without notice, domestic enquiry, severance pay', path: '/termination/after-confirmation', icon: '🚪' },
    { title: 'Relieving / Experience Letter', desc: 'Employer withholding service certificates or clearance', path: '/relieving-letter', icon: '📄' },
    { title: 'PF / UAN Passbook Issues', desc: 'PF deducted but not deposited by employer in EPFO', path: '/pf-esi', icon: '🏦' },
    { title: 'Gratuity Payout Rights', desc: '4y 240d rule, ₹20 Lakh cap, and Form I claim filing', path: '/gratuity', icon: '🏆' },
    { title: 'Workplace Harassment (POSH)', desc: 'Sexual harassment, ICC complaints, and 90-day time limits', path: '/posh-act', icon: '⚠️', badge: 'Confidential' },
    { title: 'Full & Final (F&F) Settlement', desc: 'Final dues timeline, leave encashment, and deductions', path: '/full-final-settlement', icon: '💼' }
];

const secondaryProblemCards = [
    { title: 'Salary Arbitrarily Deducted', desc: 'Unlawful deductions, unexplained cuts, or notice recovery', path: '/salary-calculation', icon: '📉' },
    { title: 'Employer Claims "Absconding"', desc: 'Falsely tagged as absconder after resigning or health leave', path: '/disputes/absconding-allegation', icon: '🏃', badge: 'Dispute Kit' },
    { title: 'ESI Medical Benefits Denied', desc: 'ESI eligibility, Pehchan card, and sick leave cover', path: '/pf-esi', icon: '🏥' },
    { title: 'Statutory Annual Bonus', desc: '8.33% to 20% statutory bonus rules under Bonus Act', path: '/tools/bonus-analyzer', icon: '🎁' },
    { title: 'Contractor / Staffing Agency', desc: 'Direct vs agency rights, sham contracts, CLRA Act', path: '/tools/sham-contractor', icon: '🏢' },
    { title: 'No Record of Employment', desc: 'Working without an offer letter or appointment letter', path: '/disputes/no-employment-record', icon: '📁', badge: 'Proof Guide' },
    { title: 'Leave & Attendance Rules', desc: 'Earned leave encashment, casual leave, weekly off', path: '/leave-holidays', icon: '🏖️' },
    { title: 'Overtime & 12-Hour Shifts', desc: 'Statutory 2x overtime rate and 48-hour weekly limits', path: '/working-hours', icon: '⏰' }
];

const popularTools = [
    { title: 'Take-Home Salary Calculator', desc: 'Calculate CTC to in-hand salary with PF, tax, and HRA.', path: '/salary-calculator', icon: Calculator, badge: 'Popular' },
    { title: 'Gratuity Eligibility Calculator', desc: 'Calculate gratuity payout under 4y 240d Supreme Court rule.', path: '/tools/gratuity-calculator', icon: Calculator, badge: 'High Utility' },
    { title: 'Authority Finder Tool', desc: 'Find exact Labour Commissioner office (State ALC / Central RLC).', path: '/tools/authority-finder', icon: Compass, badge: 'Essential' },
    { title: 'Labour Grievance Generator', desc: 'Draft formal statute-cited complaint letter for HR or Labour Officer.', path: '/tools/grievance-generator', icon: FileText, badge: 'Legal Draft' },
    { title: 'Advocate-Grade Legal Demand Notice', desc: 'Generate formal legal demand notice for unpaid salary or dues.', path: '/tools/legal-notice-generator', icon: Scale, badge: 'Demand Notice' },
    { title: 'Bond & Non-Compete Scanner', desc: 'Audit service bond penalty clauses under Section 27 Contract Act.', path: '/tools/employment-bond-scanner', icon: ShieldCheck, badge: 'Section 27' }
];

export default function Home() {
    const [showAllProblems, setShowAllProblems] = useState(false);

    return (
        <div>
            <SEOHead path="/" />

            {/* ── 1. FIRST IMPRESSION HERO ── */}
            <section className="bg-gradient-to-br from-primary via-[#1e3a8a] to-indigo-950 py-16 sm:py-24 px-4 text-white">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold tracking-wide uppercase">
                        <Sparkles className="w-3.5 h-3.5 text-accent" />
                        Free & Privacy-First Legal Guidance
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                        Is Your Job Legal & Fair?
                    </h1>

                    <p className="text-sm sm:text-lg text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed">
                        Understand workplace rights, salary disputes, resignation, notice buyout, termination, PF, and labour complaints — explained in plain language.
                    </p>

                    {/* Search Bar */}
                    <div className="pt-2 max-w-xl mx-auto">
                        <SearchBar />
                    </div>

                    {/* Primary Hero CTAs */}
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                        <Link 
                            to="/tools/problem-wizard" 
                            className="bg-accent hover:bg-accent-dark text-white px-7 py-4 rounded-2xl font-black text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group active:scale-[0.98]"
                        >
                            <HelpCircle className="w-5 h-5" /> Tell Us Your Problem <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link 
                            to="/rights" 
                            className="bg-white/15 hover:bg-white/25 border border-white/30 text-white px-6 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all flex items-center gap-2 active:scale-[0.98]"
                        >
                            <Scale className="w-4 h-4 text-blue-300" /> Explore Employee Rights
                        </Link>

                        <Link 
                            to="/tools/authority-finder" 
                            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all flex items-center gap-2 active:scale-[0.98]"
                        >
                            <Compass className="w-4 h-4 text-blue-300" /> Find Where to Complain
                        </Link>
                    </div>

                </div>
            </section>

            {/* ── 2. WHAT PROBLEM ARE YOU FACING? ── */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto space-y-8">
                    
                    <div className="text-center space-y-2">
                        <span className="text-xs font-black text-primary uppercase tracking-wider">
                            Interactive Diagnosis
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                            What Problem Are You Facing?
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                            Select your situation below to get relevant rights, statutory rules, and complaint steps:
                        </p>
                    </div>

                    {/* Problem Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {topProblemCards.map((card, idx) => (
                            <Link
                                key={idx}
                                to={card.path}
                                className="bg-white dark:bg-gray-950 p-5 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between group active:scale-[0.98]"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="text-2xl">{card.icon}</span>
                                        {card.badge && (
                                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                {card.badge}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-1">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                                        {card.desc}
                                    </p>
                                </div>
                                <div className="text-xs font-bold text-primary flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-850 group-hover:translate-x-0.5 transition-transform">
                                    <span>Check Rights & Steps</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </Link>
                        ))}

                        {showAllProblems && secondaryProblemCards.map((card, idx) => (
                            <Link
                                key={idx}
                                to={card.path}
                                className="bg-white dark:bg-gray-950 p-5 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between group active:scale-[0.98] animate-in fade-in"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="text-2xl">{card.icon}</span>
                                        {card.badge && (
                                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                {card.badge}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-1">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                                        {card.desc}
                                    </p>
                                </div>
                                <div className="text-xs font-bold text-primary flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-850 group-hover:translate-x-0.5 transition-transform">
                                    <span>Check Rights & Steps</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Toggle All Cards Button for Mobile/Desktop */}
                    <div className="text-center pt-2">
                        <button
                            type="button"
                            onClick={() => setShowAllProblems(!showAllProblems)}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-primary transition-all"
                        >
                            {showAllProblems ? (
                                <>Show Top 8 Problems <ChevronUp className="w-4 h-4" /></>
                            ) : (
                                <>View All 16 Workplace Problems <ChevronDown className="w-4 h-4" /></>
                            )}
                        </button>
                    </div>

                </div>
            </section>

            {/* ── 3. HOW CAN WE HELP? (3 SIMPLE PATHS) ── */}
            <section className="py-16 px-4 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-5xl mx-auto space-y-10">
                    
                    <div className="text-center space-y-2">
                        <span className="text-xs font-black text-primary uppercase tracking-wider">
                            Simple 3-Step Solution Framework
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                            How We Help You Resolve Disputes
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        <Link to="/rights" className="p-6 rounded-3xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-150 dark:border-blue-900 shadow-soft hover:shadow-md transition-all space-y-3 group">
                            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                                1
                            </div>
                            <h3 className="font-extrabold text-base text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                Understand Your Rights
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                Read plain-language legal summaries covering salary payment deadlines, notice period limits, gratuity, and termination rules.
                            </p>
                            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                                Browse Rights Index →
                            </span>
                        </Link>

                        <Link to="/tools" className="p-6 rounded-3xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-150 dark:border-emerald-900 shadow-soft hover:shadow-md transition-all space-y-3 group">
                            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm">
                                2
                            </div>
                            <h3 className="font-extrabold text-base text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                Calculate What You're Owed
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                Use take-home salary, gratuity, notice period buyout, leave encashment, and retrenchment calculators to get exact figures.
                            </p>
                            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                Open Calculators →
                            </span>
                        </Link>

                        <Link to="/tools/authority-finder" className="p-6 rounded-3xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-150 dark:border-purple-900 shadow-soft hover:shadow-md transition-all space-y-3 group">
                            <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white flex items-center justify-center font-black text-sm">
                                3
                            </div>
                            <h3 className="font-extrabold text-base text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                Find Where to Complain
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                Identify competent government authorities (State Labour Commissioner, Central RLC, EPFO, ICC) and generate formal complaint drafts.
                            </p>
                            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1">
                                Launch Authority Finder →
                            </span>
                        </Link>

                    </div>

                </div>
            </section>

            {/* ── 4. POPULAR ESSENTIAL TOOLS (TOP 6 ONLY) ── */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-6xl mx-auto space-y-8">
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <span className="text-xs font-black text-primary uppercase tracking-wider">
                                Statutory Calculators & Generators
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                                Essential Tools & Calculators
                            </h2>
                        </div>
                        <Link to="/tools" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                            Browse All 20+ Calculators →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {popularTools.map((tool, idx) => {
                            const IconComponent = tool.icon;
                            return (
                                <Link
                                    key={idx}
                                    to={tool.path}
                                    className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between group active:scale-[0.98]"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-4">
                                            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-850 text-gray-600 dark:text-gray-300">
                                                {tool.badge}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-1.5">
                                            {tool.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                                            {tool.desc}
                                        </p>
                                    </div>
                                    <div className="text-xs font-bold text-primary flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-850 group-hover:translate-x-0.5 transition-transform">
                                        <span>Open Tool</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* ── 5. TRUST & PRIVACY GUARANTEE ── */}
            <section className="py-16 px-4 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-5xl mx-auto space-y-10">
                    
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                            Zero Login • 100% Client-Side Privacy
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                            Employee Rights India is built to operate with zero server-side personal data collection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-6 rounded-3xl border border-gray-150 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 shadow-soft">
                            <Lock className="w-10 h-10 text-primary mx-auto mb-3" />
                            <h3 className="font-bold text-base mb-1 text-gray-900 dark:text-white">Local Memory Processing</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                All calculations, complaint drafters, and incident timelines execute inside your browser. No data leaves your device.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-gray-150 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 shadow-soft">
                            <Scale className="w-10 h-10 text-primary mx-auto mb-3" />
                            <h3 className="font-bold text-base mb-1 text-gray-900 dark:text-white">Verified Legal Citations</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                Guides link to Central & State Acts, Payment of Wages Act, EPF Act, and Supreme Court precedent citations.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-gray-150 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 shadow-soft">
                            <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
                            <h3 className="font-bold text-base mb-1 text-gray-900 dark:text-white">Free & Educational</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                Public legal knowledge resource designed to empower employees with clarity before filing formal complaints.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
