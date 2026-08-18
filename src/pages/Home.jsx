import React from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, ShieldCheck, Database, Lock, Compass, HelpCircle, FileText, Scale, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import SearchBar from '../components/SearchBar';

const problemCards = [
    { title: 'Salary Not Paid / Withheld', desc: 'Employer delayed salary past 7th/10th or stopped payment', path: '/delayed-salary', icon: '💰', badge: 'High Urgency' },
    { title: 'Salary Arbitrarily Deducted', desc: 'Unlawful deductions, unexplained cuts, or notice recovery', path: '/salary-calculation', icon: '📉' },
    { title: 'Employer Claims "Absconding"', desc: 'Falsely tagged as absconder after resigning or medical leave', path: '/disputes/absconding-allegation', icon: '🏃', badge: 'Dispute Kit' },
    { title: 'Resignation & Notice Period', desc: 'Notice buyout disputes, early release, garden leave rules', path: '/notice-period', icon: '📝' },
    { title: 'Fired / Retrenched / Layoff', desc: 'Termination without notice, domestic enquiry, severance pay', path: '/termination/after-confirmation', icon: '🚪' },
    { title: 'Relieving / Experience Letter Refused', desc: 'Employer withholding service certificates or clearance', path: '/relieving-letter', icon: '📄' },
    { title: 'PF / UAN Passbook Issues', desc: 'PF deducted but not deposited by employer in EPFO', path: '/pf-esi', icon: '🏦' },
    { title: 'ESI Medical Benefits Denied', desc: 'ESI eligibility, Pehchan card, and sick leave cover', path: '/pf-esi', icon: '🏥' },
    { title: 'Statutory Annual Bonus', desc: '8.33% to 20% statutory bonus rules under Bonus Act', path: '/tools/bonus-analyzer', icon: '🎁' },
    { title: 'Workplace Harassment (POSH)', desc: 'Sexual harassment, ICC complaints, and 90-day time limits', path: '/posh-act', icon: '⚠️', badge: 'Confidential' },
    { title: 'Contractor / Staffing Agency', desc: 'Direct vs agency rights, sham contracts, CLRA Act', path: '/tools/sham-contractor', icon: '🏢' },
    { title: 'No Record of Employment', desc: 'Working without an offer letter or appointment letter', path: '/disputes/no-employment-record', icon: '📁', badge: 'Proof Guide' },
    { title: 'Leave & Attendance Rules', desc: 'Earned leave encashment, casual leave, weekly off', path: '/leave-holidays', icon: '🏖️' },
    { title: 'Overtime & 12-Hour Shifts', desc: 'Statutory 2x overtime rate and 48-hour weekly limits', path: '/working-hours', icon: '⏰' },
    { title: 'Gratuity Payout After 5 Years', desc: '4y 240d rule, ₹20 Lakh cap, and Form I claim filing', path: '/gratuity', icon: '🏆' },
    { title: 'Full & Final (F&F) Settlement', desc: 'Final dues timeline, leave encashment, and deductions', path: '/full-final-settlement', icon: '💼' }
];

export default function Home() {
    return (
        <div>
            <SEOHead path="/" />

            {/* ── HERO SECTION ── */}
            <section className="bg-gradient-to-br from-primary via-[#1e3a8a] to-indigo-950 py-20 px-4 text-white">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold tracking-wide uppercase">
                        <Sparkles className="w-3.5 h-3.5 text-accent" />
                        India's Free Employment Law & Guidance Platform
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
                        Know Your Employee Rights in India
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-normal leading-relaxed">
                        Understand workplace rights, salary disputes, resignation, termination, PF, ESI, workplace issues and labour complaint procedures — explained in simple language.
                    </p>

                    {/* Universal Search Bar */}
                    <div className="pt-2 max-w-2xl mx-auto">
                        <SearchBar />
                    </div>

                    {/* Primary Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                        <Link 
                            to="/tools/problem-wizard" 
                            className="bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
                        >
                            <HelpCircle className="w-5 h-5" /> Find My Rights <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link 
                            to="/tools/authority-finder" 
                            className="bg-white/15 hover:bg-white/25 border border-white/30 text-white px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all flex items-center gap-2"
                        >
                            <Compass className="w-5 h-5 text-blue-300" /> Who Should I Complain To?
                        </Link>
                        <Link 
                            to="/rights" 
                            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all flex items-center gap-2"
                        >
                            <Scale className="w-4 h-4 text-blue-300" /> Browse All Rights
                        </Link>
                    </div>

                </div>
            </section>

            {/* ── UPDATES BANNER ── */}
            <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 py-3.5 px-4 text-white">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-2.5">
                        <span className="bg-white/20 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            2025–2026 Legal Updates
                        </span>
                        <p className="font-medium text-blue-100">
                            Budget ₹12L tax exemption · PF interest 8.25% · 4 Labour Codes transition status
                        </p>
                    </div>
                    <Link to="/whats-new" className="font-bold underline hover:text-white flex items-center gap-1">
                        Read Statutory Updates →
                    </Link>
                </div>
            </section>

            {/* ── PROBLEM-FIRST ENTRANCE GRID ── */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto space-y-10">
                    
                    <div className="text-center space-y-3">
                        <span className="text-xs font-extrabold text-primary uppercase tracking-wider">
                            Interactive Legal Guidance
                        </span>
                        <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100">
                            What Problem Are You Facing?
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Select your situation below to get relevant statutory provisions, document requirements, and step-by-step resolution workflows:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {problemCards.map((card, idx) => (
                            <Link
                                key={idx}
                                to={card.path}
                                className="bg-white dark:bg-gray-950 p-5 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft hover:shadow-md hover:border-primary/50 transition-all flex flex-col justify-between group"
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
                                    <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors mb-1.5">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                                        {card.desc}
                                    </p>
                                </div>
                                <div className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform pt-2 border-t border-gray-100 dark:border-gray-800">
                                    View Rights & Steps <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── CASE WORKFLOW HIGHLIGHT ── */}
            <section className="py-16 px-4 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-4 max-w-xl">
                            <span className="px-3 py-1 bg-white/15 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200">
                                Smart Government Navigator
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black leading-tight">
                                Confused About Central vs. State Labour Authorities?
                            </h2>
                            <p className="text-sm text-blue-100 leading-relaxed">
                                Don't waste weeks filing complaints in the wrong office. Our <strong>Authority Finder</strong> analyzes your dispute type, establishment classification, and state to pinpoint the exact competent officer and verified government filing portal.
                            </p>
                            <div className="pt-2">
                                <Link 
                                    to="/tools/authority-finder" 
                                    className="bg-white text-indigo-950 font-black px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-2 text-sm shadow-md"
                                >
                                    <Compass className="w-4 h-4 text-primary" /> Launch Authority Finder
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 w-full md:w-auto text-xs">
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                                <span className="font-bold block text-sm mb-1">State Sphere</span>
                                <p className="text-blue-200">IT, Startups, Retail, Local Factories</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                                <span className="font-bold block text-sm mb-1">Central Sphere</span>
                                <p className="text-blue-200">PSUs, Banks, Railways, Mines</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                                <span className="font-bold block text-sm mb-1">EPFiGMS</span>
                                <p className="text-blue-200">PF Default & Pension Claims</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                                <span className="font-bold block text-sm mb-1">SHe-Box / LCC</span>
                                <p className="text-blue-200">Workplace POSH Harassment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRUST & PRIVACY GUARANTEE ── */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                            Privacy-First & Citation-Backed
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                            Employee Rights India is an independent public-knowledge resource created by RexonSoftTech.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-6 rounded-2xl border border-gray-150 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-soft">
                            <Lock className="w-10 h-10 text-primary mx-auto mb-3" />
                            <h3 className="font-bold text-base mb-1 text-gray-900 dark:text-gray-100">Zero Server Data Storage</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">All calculations, complaint drafters, and timelines run locally in your device's browser memory.</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-gray-150 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-soft">
                            <Scale className="w-10 h-10 text-primary mx-auto mb-3" />
                            <h3 className="font-bold text-base mb-1 text-gray-900 dark:text-gray-100">Statute & Case Citations</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Every guide links directly to official Central/State Acts, Supreme Court rulings, and `.gov.in` portals.</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-gray-150 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-soft">
                            <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
                            <h3 className="font-bold text-base mb-1 text-gray-900 dark:text-gray-100">Educational Guidance</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Clear procedural guidance without confusing jargon or high legal retainer fees.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
