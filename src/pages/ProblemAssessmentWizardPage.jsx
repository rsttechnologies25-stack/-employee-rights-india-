import React, { useState } from 'react';
import { HelpCircle, ArrowRight, CheckCircle2, Scale, RefreshCw, Calculator, MapPin, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import NextStepActions from '../components/NextStepActions';

export default function ProblemAssessmentWizardPage() {
    const [step, setStep] = useState(1);
    
    // Form selections
    const [problem, setProblem] = useState('');
    const [employmentType, setEmploymentType] = useState('direct');
    const [state, setState] = useState('Tamil Nadu');
    const [tenure, setTenure] = useState('1_to_5');
    const [hasOfferLetter, setHasOfferLetter] = useState('yes');
    const [salaryPaid, setSalaryPaid] = useState('delayed');

    const handleReset = () => {
        setStep(1);
        setProblem('');
    };

    return (
        <div>
            <SEOHead 
                title="Workplace Problem Assessment Wizard — Employee Rights India"
                description="Assess your workplace dispute in 4 quick steps to receive tailored legal breakdown, evidence requirements, and next step action plan."
                path="/tools/problem-wizard"
            />

            <PageHero 
                title="What Is Your Workplace Problem?"
                subtitle="Answer 4 simple questions about your situation to get a plain-language summary of your rights, evidence requirements, and recommended next steps."
                icon={HelpCircle}
                gradient="purple"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-3xl mx-auto space-y-6">
                    <Breadcrumb items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Problem Wizard', path: '/tools/problem-wizard' }
                    ]} />

                    {/* Step Progress Tracker */}
                    <div className="flex items-center justify-between text-xs font-extrabold text-gray-500 bg-white dark:bg-gray-950 p-4 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft">
                        <span className="text-primary font-bold">
                            {step <= 4 ? `Step ${step} of 4` : 'Assessment Complete'}
                        </span>
                        <div className="w-40 sm:w-56 bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                            <div 
                                className="bg-primary h-2 rounded-full transition-all duration-300 ease-out" 
                                style={{ width: `${(Math.min(step, 4) / 4) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* ── STEP 1: PRIMARY PROBLEM ── */}
                    {step === 1 && (
                        <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6 animate-in fade-in">
                            <div>
                                <span className="text-[11px] font-black uppercase text-primary tracking-wider">Step 1 of 4</span>
                                <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
                                    What primary issue are you experiencing at work?
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { id: 'salary_issue', label: '💰 Salary not paid, delayed, or arbitrary deductions made', subtitle: 'Unpaid wages past 7th/10th, illegal deductions, held salary' },
                                    { id: 'exit_issue', label: '📄 Resignation, notice buyout, or relieving letter withheld', subtitle: 'Employer refusing notice buyout, withholding experience letter' },
                                    { id: 'termination_issue', label: '🚪 Fired without notice, put on biased PIP, or forced to resign', subtitle: 'Unfair dismissal, silent layoff, constructive termination' },
                                    { id: 'bond_issue', label: '⚖️ Demanded to pay money for breaking employment bond', subtitle: 'Training bond recovery, Section 27 non-compete threats' },
                                    { id: 'social_sec_issue', label: '🏦 PF deducted but not deposited in EPFO / Gratuity denied', subtitle: 'UAN passbook issues, 5-year gratuity eligibility dispute' },
                                    { id: 'harassment_issue', label: '⚠️ POSH sexual harassment or unsafe night shift conditions', subtitle: 'ICC complaint required, 90-day inquiry, safety compliance' }
                                ].map(item => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => { setProblem(item.id); setStep(2); }}
                                        className="p-4 sm:p-5 rounded-2xl border text-left transition-all hover:border-primary/50 hover:bg-primary/5 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 flex justify-between items-center group active:scale-[0.99]"
                                    >
                                        <div className="space-y-0.5">
                                            <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white block group-hover:text-primary transition-colors">{item.label}</span>
                                            <span className="text-xs text-gray-500">{item.subtitle}</span>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-transform shrink-0" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── STEP 2: EMPLOYMENT & STATE ── */}
                    {step === 2 && (
                        <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6 animate-in fade-in">
                            <div>
                                <span className="text-[11px] font-black uppercase text-primary tracking-wider">Step 2 of 4</span>
                                <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
                                    What is your employment structure & workplace state?
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">Employment Classification</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                        {[
                                            { id: 'direct', label: 'Direct Salaried Employee' },
                                            { id: 'contractor', label: 'Staffing Agency / Contractor' },
                                            { id: 'not_sure', label: 'No Formal Contract' }
                                        ].map(item => (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() => setEmploymentType(item.id)}
                                                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                                                    employmentType === item.id 
                                                        ? 'bg-primary text-white border-primary shadow-soft' 
                                                        : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300'
                                                }`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">Workplace State / Region</label>
                                    <select
                                        value={state}
                                        onChange={e => setState(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm font-bold text-gray-800 dark:text-gray-200 outline-none"
                                    >
                                        {['Tamil Nadu', 'Karnataka', 'Maharashtra', 'Delhi NCR', 'Telangana', 'Andhra Pradesh', 'Kerala', 'Gujarat', 'West Bengal', 'Uttar Pradesh', 'Haryana', 'Other State'].map(st => (
                                            <option key={st} value={st}>{st}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-850">
                                <button type="button" onClick={() => setStep(1)} className="text-xs font-bold text-gray-500 hover:text-primary flex items-center gap-1">
                                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                                </button>
                                <button type="button" onClick={() => setStep(3)} className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold shadow-soft hover:bg-primary-dark transition-all">
                                    Next Question →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* ── STEP 3: TENURE & DOCUMENTATION ── */}
                    {step === 3 && (
                        <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6 animate-in fade-in">
                            <div>
                                <span className="text-[11px] font-black uppercase text-primary tracking-wider">Step 3 of 4</span>
                                <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
                                    Tenure & Proof of Employment
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">Total Service Duration</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {[
                                            { id: 'under_6m', label: 'Less than 6 months (Probation)' },
                                            { id: '6m_to_1y', label: '6 months to 1 year' },
                                            { id: '1y_to_4y', label: '1 year to 4 years' },
                                            { id: '4y_240d', label: '4 years & 240 days+ (Gratuity Eligible)' }
                                        ].map(item => (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() => setTenure(item.id)}
                                                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                                                    tenure === item.id 
                                                        ? 'bg-primary text-white border-primary shadow-soft' 
                                                        : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300'
                                                }`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">Do you have a signed offer / appointment letter?</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                        {[
                                            { id: 'yes', label: 'Yes, Signed Letter' },
                                            { id: 'email_only', label: 'Email Confirmations' },
                                            { id: 'no', label: 'No Formal Document' }
                                        ].map(item => (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() => setHasOfferLetter(item.id)}
                                                className={`p-3.5 rounded-xl border text-xs font-bold text-left transition-all ${
                                                    hasOfferLetter === item.id 
                                                        ? 'bg-primary text-white border-primary shadow-soft' 
                                                        : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300'
                                                }`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-850">
                                <button type="button" onClick={() => setStep(2)} className="text-xs font-bold text-gray-500 hover:text-primary flex items-center gap-1">
                                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                                </button>
                                <button type="button" onClick={() => setStep(4)} className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold shadow-soft hover:bg-primary-dark transition-all">
                                    Next Question →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* ── STEP 4: SALARY STATUS ── */}
                    {step === 4 && (
                        <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6 animate-in fade-in">
                            <div>
                                <span className="text-[11px] font-black uppercase text-primary tracking-wider">Step 4 of 4</span>
                                <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
                                    Salary & Final Settlement Status
                                </h2>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-2">What is the status of your monthly pay / exit dues?</label>
                                <div className="grid grid-cols-1 gap-2.5">
                                    {[
                                        { id: 'paid', label: 'Salary paid up to date' },
                                        { id: 'delayed', label: 'Delayed past the 7th/10th day of the month' },
                                        { id: 'unpaid_months', label: 'Unpaid for 1 or more full months' },
                                        { id: 'ff_pending', label: 'Full & Final (F&F) settlement / Gratuity withheld on exit' }
                                    ].map(item => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => { setSalaryPaid(item.id); setStep(5); }}
                                            className={`p-4 rounded-xl border text-left text-xs sm:text-sm font-bold transition-all ${
                                                salaryPaid === item.id 
                                                    ? 'bg-primary text-white border-primary shadow-soft' 
                                                    : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300'
                                            }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-850">
                                <button type="button" onClick={() => setStep(3)} className="text-xs font-bold text-gray-500 hover:text-primary flex items-center gap-1">
                                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                                </button>
                                <button type="button" onClick={() => setStep(5)} className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold shadow-soft hover:bg-primary-dark transition-all">
                                    View Action Plan →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* ── ACTION PLAN RESULT OUTPUT ── */}
                    {step === 5 && (
                        <div className="space-y-6 animate-in fade-in">
                            <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
                                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-850 pb-4">
                                    <div>
                                        <span className="text-[10px] font-black uppercase text-primary tracking-wider">Assessment Complete</span>
                                        <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                                            Your Tailored Legal Action Plan
                                        </h3>
                                    </div>
                                    <button 
                                        type="button" 
                                        onClick={handleReset} 
                                        className="text-xs font-bold text-gray-500 hover:text-primary flex items-center gap-1 border border-gray-200 dark:border-gray-800 px-3 py-1.5 rounded-xl"
                                    >
                                        <RefreshCw className="w-3.5 h-3.5" /> Start Over
                                    </button>
                                </div>

                                {/* Key Statutory Analysis */}
                                <div className="bg-blue-50/60 dark:bg-blue-950/30 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/40 text-xs sm:text-sm space-y-2 text-blue-950 dark:text-blue-200">
                                    <h4 className="font-extrabold flex items-center gap-2 text-sm sm:text-base">
                                        <Scale className="w-4 h-4 text-primary" /> Statutory Observations for {state}:
                                    </h4>
                                    <ul className="list-disc list-inside space-y-1.5 text-xs text-blue-900 dark:text-blue-200">
                                        {hasOfferLetter === 'no' && <li><strong>Proof of Service:</strong> Even without an appointment letter, employment in India is established via bank salary credits, Form 26AS TDS logs, and UAN logs.</li>}
                                        {salaryPaid === 'unpaid_months' && <li><strong>Wage Payment Violation:</strong> Withholding earned salary past the 7th/10th day violates Section 5 of the Payment of Wages Act, 1936.</li>}
                                        {tenure === '4y_240d' && <li><strong>Gratuity Entitlement:</strong> Having completed over 4 years and 240 days, you qualify for statutory Gratuity payout under Payment of Gratuity Act 1972 per Supreme Court precedent.</li>}
                                    </ul>
                                </div>

                                {/* Next Action Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                    <Link 
                                        to="/tools/authority-finder" 
                                        className="p-4 rounded-2xl bg-primary text-white font-bold text-xs flex items-center justify-between hover:bg-primary-dark transition-all shadow-soft"
                                    >
                                        <span>Find Where to Complain in {state}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link 
                                        to="/tools/grievance-generator" 
                                        className="p-4 rounded-2xl bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 font-bold text-xs flex items-center justify-between hover:border-primary/40 transition-all"
                                    >
                                        <span>Draft Formal Grievance Letter</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            <NextStepActions category="general" />
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
