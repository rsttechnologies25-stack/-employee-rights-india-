import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { HelpCircle, ArrowRight, ShieldAlert, CheckCircle2, FileText, AlertTriangle, Scale, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProblemAssessmentWizardPage() {
    const [step, setStep] = useState(1);
    
    // Form selections
    const [problem, setProblem] = useState('');
    const [employmentType, setEmploymentType] = useState('direct');
    const [state, setState] = useState('Tamil Nadu');
    const [tenure, setTenure] = useState('1_to_5');
    const [hasOfferLetter, setHasOfferLetter] = useState('yes');
    const [salaryPaid, setSalaryPaid] = useState('delayed');
    const [communication, setCommunication] = useState('written_email');

    const handleReset = () => {
        setStep(1);
        setProblem('');
    };

    return (
        <div>
            <SEOHead 
                path="/tools/problem-wizard"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Employee Problem Assessment Wizard — Employee Rights India",
                    "description": "Assess your workplace dispute in 7 questions to receive tailored procedural guidance, evidence preservation tips, and next steps."
                }}
            />

            <PageHero 
                title="What Is My Workplace Problem?"
                subtitle="Answer 7 quick questions about your employment situation to receive an objective breakdown of applicable rights, documents to preserve, and procedural steps."
                icon={HelpCircle}
                gradient="purple"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Breadcrumb items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Problem Wizard', path: '/tools/problem-wizard' }
                    ]} />

                    {/* Step Tracker */}
                    <div className="flex items-center justify-between text-xs font-bold text-gray-500 bg-white dark:bg-gray-950 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft">
                        <span>Step {step} of 7</span>
                        <div className="w-48 bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${(step / 7) * 100}%` }}></div>
                        </div>
                    </div>

                    {/* Step 1 */}
                    {step === 1 && (
                        <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-5 animate-fade-in">
                            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">
                                1. What primary issue are you facing?
                            </h2>
                            <div className="grid grid-cols-1 gap-2.5">
                                {[
                                    { id: 'salary_issue', label: 'Salary unpaid, delayed, or arbitrary deductions made' },
                                    { id: 'exit_issue', label: 'Employer refusing resignation, relieving letter, or claiming absconding' },
                                    { id: 'termination_issue', label: 'Fired without notice, put on arbitrary PIP, or forced to resign' },
                                    { id: 'bond_issue', label: 'Asked to pay money for breaking employment bond or training cost' },
                                    { id: 'social_sec_issue', label: 'PF not deposited, ESI denied, or gratuity unpaid' },
                                    { id: 'harassment_issue', label: 'Workplace harassment, unsafe night shift, or POSH violation' }
                                ].map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => { setProblem(item.id); setStep(2); }}
                                        className="p-4 rounded-xl border text-left font-medium text-sm transition-all hover:border-primary hover:bg-primary/5 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 flex justify-between items-center"
                                    >
                                        <span>{item.label}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                        <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-5 animate-fade-in">
                            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">
                                2. Are you directly employed or through a contractor/agency?
                            </h2>
                            <div className="grid grid-cols-1 gap-2.5">
                                {[
                                    { id: 'direct', label: 'Direct Permanent / Salaried Employee of the Company' },
                                    { id: 'contractor', label: 'Employed via Staffing Agency / Third-Party Vendor' },
                                    { id: 'not_sure', label: 'Not Sure / No Formal Contract Provided' }
                                ].map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => { setEmploymentType(item.id); setStep(3); }}
                                        className="p-4 rounded-xl border text-left font-medium text-sm transition-all hover:border-primary hover:bg-primary/5 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 flex justify-between items-center"
                                    >
                                        <span>{item.label}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setStep(1)} className="text-xs text-gray-500 hover:underline">← Previous Question</button>
                        </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                        <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-5 animate-fade-in">
                            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">
                                3. Which state or territory is your work location in?
                            </h2>
                            <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto pr-1">
                                {['Tamil Nadu', 'Karnataka', 'Maharashtra', 'Delhi NCR', 'Telangana', 'Andhra Pradesh', 'Kerala', 'Gujarat', 'West Bengal', 'Uttar Pradesh', 'Haryana', 'Other State'].map(st => (
                                    <button
                                        key={st}
                                        onClick={() => { setState(st); setStep(4); }}
                                        className="p-3 rounded-xl border text-left font-medium text-sm transition-all hover:border-primary hover:bg-primary/5 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200"
                                    >
                                        {st}
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setStep(2)} className="text-xs text-gray-500 hover:underline">← Previous Question</button>
                        </div>
                    )}

                    {/* Step 4 */}
                    {step === 4 && (
                        <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-5 animate-fade-in">
                            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">
                                4. How long have you worked at this establishment?
                            </h2>
                            <div className="grid grid-cols-1 gap-2.5">
                                {[
                                    { id: 'under_6m', label: 'Less than 6 months (Probation / Training Period)' },
                                    { id: '6m_to_1y', label: '6 months to 1 year' },
                                    { id: '1y_to_4y', label: '1 year to 4 years' },
                                    { id: '4y_240d', label: 'More than 4 years and 8 months (Gratuity Eligible Range)' },
                                    { id: '5y_plus', label: '5+ completed continuous years' }
                                ].map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => { setTenure(item.id); setStep(5); }}
                                        className="p-4 rounded-xl border text-left font-medium text-sm transition-all hover:border-primary hover:bg-primary/5 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 flex justify-between items-center"
                                    >
                                        <span>{item.label}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setStep(3)} className="text-xs text-gray-500 hover:underline">← Previous Question</button>
                        </div>
                    )}

                    {/* Step 5 */}
                    {step === 5 && (
                        <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-5 animate-fade-in">
                            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">
                                5. Do you possess a formal Appointment Letter or signed Offer Letter?
                            </h2>
                            <div className="grid grid-cols-1 gap-2.5">
                                {[
                                    { id: 'yes', label: 'Yes, I have signed copies of my appointment / offer letter' },
                                    { id: 'email_only', label: 'Only confirmation over email / WhatsApp' },
                                    { id: 'no', label: 'No formal written document was provided' }
                                ].map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => { setHasOfferLetter(item.id); setStep(6); }}
                                        className="p-4 rounded-xl border text-left font-medium text-sm transition-all hover:border-primary hover:bg-primary/5 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 flex justify-between items-center"
                                    >
                                        <span>{item.label}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setStep(4)} className="text-xs text-gray-500 hover:underline">← Previous Question</button>
                        </div>
                    )}

                    {/* Step 6 */}
                    {step === 6 && (
                        <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-5 animate-fade-in">
                            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">
                                6. What is the current status of your salary and dues?
                            </h2>
                            <div className="grid grid-cols-1 gap-2.5">
                                {[
                                    { id: 'paid', label: 'Fully paid up to date' },
                                    { id: 'delayed', label: 'Delayed past the 7th/10th day of the month' },
                                    { id: 'unpaid_months', label: 'Completely unpaid for 1 or more full months' },
                                    { id: 'ff_pending', label: 'Final Settlement / Gratuity / Leave encashment withheld on exit' }
                                ].map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => { setSalaryPaid(item.id); setStep(7); }}
                                        className="p-4 rounded-xl border text-left font-medium text-sm transition-all hover:border-primary hover:bg-primary/5 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 flex justify-between items-center"
                                    >
                                        <span>{item.label}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setStep(5)} className="text-xs text-gray-500 hover:underline">← Previous Question</button>
                        </div>
                    )}

                    {/* Step 7 */}
                    {step === 7 && (
                        <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-5 animate-fade-in">
                            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">
                                7. How has the employer communicated regarding this dispute?
                            </h2>
                            <div className="grid grid-cols-1 gap-2.5">
                                {[
                                    { id: 'written_email', label: 'In writing via official email' },
                                    { id: 'verbal_only', label: 'Verbal threats or private conversations only' },
                                    { id: 'whatsapp_chats', label: 'Through WhatsApp / Slack / Teams chat messages' },
                                    { id: 'no_response', label: 'No response / Complete silence from HR & Management' }
                                ].map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => { setCommunication(item.id); setStep(8); }}
                                        className="p-4 rounded-xl border text-left font-medium text-sm transition-all hover:border-primary hover:bg-primary/5 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 flex justify-between items-center"
                                    >
                                        <span>{item.label}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setStep(6)} className="text-xs text-gray-500 hover:underline">← Previous Question</button>
                        </div>
                    )}

                    {/* Step 8: Actionable Guidance Output */}
                    {step === 8 && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-6">
                                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
                                    <div>
                                        <span className="text-xs font-bold text-primary uppercase">Case Assessment Summary</span>
                                        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">
                                            Recommended Next Steps & Analysis
                                        </h3>
                                    </div>
                                    <button onClick={handleReset} className="text-xs font-bold text-gray-500 hover:text-primary flex items-center gap-1 border border-gray-200 dark:border-gray-800 px-3 py-1.5 rounded-lg">
                                        <RefreshCw className="w-3.5 h-3.5" /> Start Over
                                    </button>
                                </div>

                                {/* Applicable Legal Parameters */}
                                <div className="bg-blue-50/60 dark:bg-blue-950/30 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/40 text-sm space-y-2 text-blue-950 dark:text-blue-200">
                                    <h4 className="font-bold flex items-center gap-2 text-base">
                                        <Scale className="w-5 h-5 text-primary" /> Key Statutory Observations:
                                    </h4>
                                    <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm">
                                        {hasOfferLetter === 'no' && <li>Even without a formal appointment letter, employment in India can be legally established using bank salary credits, EPFO logs, and work email records.</li>}
                                        {salaryPaid === 'unpaid_months' && <li>Withholding earned wages violates Section 5 of the Payment of Wages Act, 1936. Employers cannot hold salary for notice dispute or asset clearance.</li>}
                                        {(tenure === '4y_240d' || tenure === '5y_plus') && <li>Based on your tenure, you may have a statutory claim for Gratuity payout under the Payment of Gratuity Act, 1972.</li>}
                                        {communication === 'verbal_only' && <li><strong>Critical Warning:</strong> Verbal statements hold minimal weight in conciliation. Send a polite confirmation email to HR summarizing all verbal instructions.</li>}
                                    </ul>
                                </div>

                                {/* Mandatory Evidence Checklist */}
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-2">📁 Evidence You Should Immediately Preserve:</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
                                        <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                            <span>Bank Account Statements (Salary Credits)</span>
                                        </div>
                                        <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                            <span>UAN Passbook / Form 26AS TDS History</span>
                                        </div>
                                        <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                            <span>HR Emails / Resignation Timestamps</span>
                                        </div>
                                        <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                            <span>Handover Notes / Asset Delivery Receipts</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="border-t border-gray-100 dark:border-gray-800 pt-6 flex flex-col sm:flex-row gap-3">
                                    <Link 
                                        to="/tools/authority-finder" 
                                        className="flex-1 bg-primary text-white font-bold py-3.5 rounded-xl text-center hover:bg-primary/90 text-sm shadow-soft"
                                    >
                                        Find Specific Complaint Authority →
                                    </Link>
                                    <Link 
                                        to="/tools/case-timeline-builder" 
                                        className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 font-bold py-3.5 rounded-xl text-center text-gray-800 dark:text-gray-200 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
                                    >
                                        Build Case Timeline Tool
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
