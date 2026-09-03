import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, AlertTriangle, ShieldAlert, ArrowRight, RotateCcw, FileText, Scale, ExternalLink, UserCheck, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MicromanagementDiagnosticWizard({ onNavigateTab }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({
        whatHappened: '',
        country: 'IN',
        state: 'TN',
        workplaceType: 'IT/Software',
        hasPolicy: 'unsure',
        frequency: 'daily',
        isSingledOut: 'no',
        hasThreatsOrDiscrimination: 'no',
        financialImpact: 'none',
        reportedInternally: 'no',
        protectedRight: 'none',
        hasEvidence: 'no',
        hasWitnesses: 'no'
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const questions = [
        {
            id: 'whatHappened',
            title: '1. What specific behaviour or incident occurred?',
            subtitle: 'Select the primary action taking place at your workplace',
            options: [
                { value: 'trivial_approvals', label: 'Required to get manager approval for trivial minor details or routine emails' },
                { value: 'constant_pings', label: 'Constant status update requests every 15-30 minutes throughout the shift' },
                { value: 'surveillance', label: 'Unannounced keylogger, screen capture, or continuous webcam monitoring on personal device' },
                { value: 'sunday_work', label: 'Mandatory unpaid weekend calls or Sunday meetings without Comp-Off' },
                { value: 'insults_shouting', label: 'Public shouting, insults, or demeaning personal comments in front of peers' },
                { value: 'retaliation', label: 'Sudden intense scrutiny or bad rating after raising a salary/leave complaint' },
                { value: 'normal_review', label: 'Periodic project review or weekly status meeting set in advance' }
            ]
        },
        {
            id: 'country',
            title: '2. Which country and state/province do you work in?',
            subtitle: 'Employment laws and complaint procedures vary by jurisdiction',
            type: 'jurisdiction'
        },
        {
            id: 'workplaceType',
            title: '3. What type of workplace or industry is this?',
            subtitle: 'Different sectors have specific statutory rules (Shops Act, Factories Act, etc.)',
            options: [
                { value: 'IT/Software', label: 'IT & Software Development' },
                { value: 'Office/Admin', label: 'Office & Corporate Administration' },
                { value: 'Remote/WFH', label: 'Remote / Work-From-Home' },
                { value: 'Retail', label: 'Retail & Commercial Store' },
                { value: 'Restaurant/Hotel', label: 'Hospitality & Restaurant' },
                { value: 'Factory', label: 'Factory & Manufacturing' },
                { value: 'Healthcare', label: 'Healthcare & Nursing' },
                { value: 'Sales', label: 'Corporate or Field Sales' },
                { value: 'Internship', label: 'Internship / Trainee' },
                { value: 'Construction', label: 'Construction & Civil Engineering' }
            ]
        },
        {
            id: 'hasPolicy',
            title: '4. Is there an employment contract or company policy governing this?',
            subtitle: 'Company policies define shift hours, IT usage, and grievance mechanisms',
            options: [
                { value: 'yes_policy', label: 'Yes, written policy or contract exists' },
                { value: 'no_policy', label: 'No written policy or contract was provided' },
                { value: 'unsure', label: 'Unsure or policy is unclear' }
            ]
        },
        {
            id: 'frequency',
            title: '5. How often does this behaviour occur?',
            subtitle: 'Frequency helps distinguish temporary crunch periods from systemic control',
            options: [
                { value: 'daily', label: 'Daily or multiple times a day continuously' },
                { value: 'weekly', label: 'Weekly or recurring on specific days' },
                { value: 'crunch_only', label: 'Occasional / Only during critical project deadlines' }
            ]
        },
        {
            id: 'isSingledOut',
            title: '6. Are you being singled out compared to your peers?',
            subtitle: 'Targeted scrutiny vs general team management style',
            options: [
                { value: 'yes', label: 'Yes, I am specifically targeted while peers have autonomy' },
                { value: 'no', label: 'No, the manager treats all team members the same way' },
                { value: 'unsure', label: 'Unsure' }
            ]
        },
        {
            id: 'hasThreatsOrDiscrimination',
            title: '7. Are threats, insults, humiliation, discrimination, or retaliation involved?',
            subtitle: 'Select if verbal abuse, personal identity bias, or threats are present',
            options: [
                { value: 'yes_threats', label: 'Yes, threats of firing, bad BGV, salary hold, or public insults' },
                { value: 'yes_bias', label: 'Yes, discriminatory comments based on gender, religion, caste, or pregnancy' },
                { value: 'no', label: 'No threats or personal abuse involved' }
            ]
        },
        {
            id: 'financialImpact',
            title: '8. Has your pay, working hours, leave, promotion, or employment been affected?',
            subtitle: 'Tangible statutory or financial impact on your job',
            options: [
                { value: 'wage_deduction', label: 'Salary withheld, delayed, or deducted illegally' },
                { value: 'unpaid_overtime', label: 'Forced to work beyond 48 hrs/week without 2x Overtime or Comp-Off' },
                { value: 'forced_resignation', label: 'Pressured to resign or put on unfair PIP' },
                { value: 'none', label: 'No financial or salary impact yet' }
            ]
        },
        {
            id: 'reportedInternally',
            title: '9. Have you reported this issue internally to HR or senior management?',
            subtitle: 'Internal grievance escalation history',
            options: [
                { value: 'yes_reported', label: 'Yes, reported in writing to HR or higher management' },
                { value: 'no_not_yet', label: 'No, I have not reported it yet' },
                { value: 'feared_retaliation', label: 'No, because I fear manager retaliation or job loss' }
            ]
        },
        {
            id: 'protectedRight',
            title: '10. Does the behaviour involve a protected statutory legal right?',
            subtitle: 'Statutory rules governed by labor laws',
            options: [
                { value: 'weekly_off', label: 'Right to mandatory 24-hr weekly rest day (Section 52 Factories / Shops Act)' },
                { value: 'privacy', label: 'Right to privacy on personal devices / home WFH (Article 21 & DPDP Act 2023)' },
                { value: 'posh', label: 'Protection against sexual harassment or hostile environment (POSH Act 2013)' },
                { value: 'overtime_pay', label: 'Statutory 2x Overtime pay entitlement' },
                { value: 'none', label: 'None of the above / Unsure' }
            ]
        },
        {
            id: 'hasEvidence',
            title: '11. Do you have documentary or digital evidence?',
            subtitle: 'Screenshots, emails, call logs, time records',
            options: [
                { value: 'yes_strong', label: 'Yes, saved emails, Slack chats, WhatsApp screenshots, or call logs' },
                { value: 'yes_partial', label: 'Yes, partial emails or attendance entries' },
                { value: 'no', label: 'No written evidence currently saved' }
            ]
        },
        {
            id: 'hasWitnesses',
            title: '12. Were there colleagues who witnessed the incidents?',
            subtitle: 'Peer verification availability',
            options: [
                { value: 'yes', label: 'Yes, colleagues or teammates witnessed the behaviour' },
                { value: 'no', label: 'No, incidents occurred in 1-on-1 private settings' }
            ]
        }
    ];

    const handleSelectOption = (field, val) => {
        setAnswers(prev => ({ ...prev, [field]: val }));
    };

    const nextStep = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            setIsSubmitted(true);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const resetWizard = () => {
        setCurrentStep(0);
        setIsSubmitted(false);
    };

    // Calculate Diagnostic Classification (A, B, C, D, E)
    const evaluateDiagnostic = () => {
        const { whatHappened, hasThreatsOrDiscrimination, financialImpact, protectedRight, isSingledOut, frequency } = answers;

        if (hasThreatsOrDiscrimination === 'yes_bias' || protectedRight === 'posh' || financialImpact === 'forced_resignation') {
            return {
                code: 'E',
                title: 'E. Urgent Situation Requiring Professional / Legal Assistance',
                badge: 'Urgent High-Risk',
                color: 'red',
                why: [
                    'Discriminatory remarks, severe workplace hostility, or forced resignation pressure detect potential violations of statutory protective acts (POSH Act 2013, Constitutional non-discrimination rules, or Industrial Disputes Act).',
                    'High risk of career harm or constructive dismissal if unaddressed.'
                ],
                actions: [
                    'Preserve all digital evidence and email timestamps immediately.',
                    'Do NOT sign forced resignation documents under coercion.',
                    'Submit a confidential complaint to HR / Presiding Officer of ICC (for POSH cases).',
                    'Consult a qualified employment advocate or legal aid office.'
                ]
            };
        }

        if (whatHappened === 'surveillance' || whatHappened === 'sunday_work' || financialImpact === 'wage_deduction' || financialImpact === 'unpaid_overtime' || protectedRight === 'weekly_off' || protectedRight === 'privacy') {
            return {
                code: 'D',
                title: 'D. Potential Employee-Rights / Legal Issue',
                badge: 'Statutory Issue',
                color: 'purple',
                why: [
                    'The situation involves potential statutory violations such as unpaid 2x Overtime pay, denial of mandatory 24-hr weekly rest (Section 52 Factories / Shops Act), or unannounced keylogging on personal devices (IT Act / DPDP Act 2023).',
                    'Employers cannot override state labour statutes through manager discretion.'
                ],
                actions: [
                    'Log exact hours worked and screenshot meeting invites.',
                    'Send a formal email to HR requesting 2x Overtime pay or Compensatory Off (Comp-Off).',
                    'Prepare a statute-cited grievance demand letter.',
                    'Escalate to the District Assistant Labour Commissioner if wages remain unpaid.'
                ]
            };
        }

        if (hasThreatsOrDiscrimination === 'yes_threats' || whatHappened === 'insults_shouting' || isSingledOut === 'yes') {
            return {
                code: 'C',
                title: 'C. Possible Workplace Misconduct / Harassment',
                badge: 'Workplace Misconduct',
                color: 'orange',
                why: [
                    'Public reprimands, shouting, or singling out an employee creates a hostile work environment and violates standard corporate Code of Conduct policies.',
                    'While not an immediate court litigation matter, it represents actionable HR misconduct.'
                ],
                actions: [
                    'Keep a detailed written incident log with dates, times, exact words used, and witnesses.',
                    'Request a private 1-on-1 meeting to establish professional boundaries.',
                    'If behaviour continues, file a formal grievance under your company\'s Workplace Harassment Policy.'
                ]
            };
        }

        if (whatHappened === 'trivial_approvals' || whatHappened === 'constant_pings' || frequency === 'daily') {
            return {
                code: 'B',
                title: 'B. Possible Micromanagement',
                badge: 'Excessive Control',
                color: 'amber',
                why: [
                    'The manager exhibits excessive, unnecessary control over minor decisions and methods rather than outcomes.',
                    'While frustrating and counter-productive, micromanagement alone is generally NOT an automatic legal violation unless accompanied by wage, hour, or privacy breaches.'
                ],
                actions: [
                    'Document how 30-minute status logs reduce your overall output velocity.',
                    'Propose a structured daily or weekly status report instead of constant pings.',
                    'Focus communication strictly on project outcomes and milestones.'
                ]
            };
        }

        return {
            code: 'A',
            title: 'A. Normal Management / Legitimate Oversight',
            badge: 'Standard Supervision',
            color: 'emerald',
            why: [
                'The reported oversight appears to align with standard project reviews, onboarding guidance, or temporary milestone monitoring.',
                'Managers have legitimate discretion to monitor deliverables and set deadlines.'
            ],
            actions: [
                'Maintain open communication with your manager regarding expectations.',
                'Provide proactive progress updates before being asked.',
                'Clarify goals and review timelines during regular 1-on-1s.'
            ]
        };
    };

    const currentQ = questions[currentStep];
    const result = evaluateDiagnostic();

    return (
        <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-850 pb-4">
                <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">Interactive Diagnostic System</span>
                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-0.5 flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-primary" /> "Is This Legal?" Decision System
                    </h3>
                </div>
                {!isSubmitted && (
                    <span className="text-xs font-bold text-gray-400">
                        Step {currentStep + 1} of {questions.length}
                    </span>
                )}
            </div>

            {!isSubmitted ? (
                <div className="space-y-6">
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-100 dark:bg-gray-900 h-2 rounded-full overflow-hidden">
                        <div
                            className="bg-primary h-full transition-all duration-300"
                            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-extrabold text-base text-gray-900 dark:text-white">{currentQ.title}</h4>
                        {currentQ.subtitle && (
                            <p className="text-xs text-gray-500 dark:text-gray-400">{currentQ.subtitle}</p>
                        )}
                    </div>

                    {/* Question Content */}
                    {currentQ.type === 'jurisdiction' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Country:</label>
                                <select
                                    value={answers.country}
                                    onChange={(e) => handleSelectOption('country', e.target.value)}
                                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs font-semibold outline-none focus:border-primary"
                                >
                                    <option value="IN">🇮🇳 India</option>
                                    <option value="US">🇺🇸 United States</option>
                                    <option value="UK">🇬🇧 United Kingdom</option>
                                    <option value="AE">🇦🇪 United Arab Emirates</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">State / Province:</label>
                                <select
                                    value={answers.state}
                                    onChange={(e) => handleSelectOption('state', e.target.value)}
                                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs font-semibold outline-none focus:border-primary"
                                >
                                    <option value="TN">Tamil Nadu</option>
                                    <option value="KA">Karnataka (Bangalore)</option>
                                    <option value="MH">Maharashtra (Mumbai/Pune)</option>
                                    <option value="DL">Delhi (NCR)</option>
                                    <option value="TS">Telangana (Hyderabad)</option>
                                </select>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-2.5">
                            {currentQ.options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSelectOption(currentQ.id, opt.value)}
                                    className={`w-full p-4 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${answers[currentQ.id] === opt.value
                                            ? 'border-primary bg-primary/5 text-primary dark:text-blue-400 shadow-sm'
                                            : 'border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 text-gray-800 dark:text-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <span>{opt.label}</span>
                                    {answers[currentQ.id] === opt.value && (
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-850">
                        <button
                            onClick={prevStep}
                            disabled={currentStep === 0}
                            className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-400 disabled:opacity-40"
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextStep}
                            className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold shadow-soft flex items-center gap-1.5 hover:bg-primary-dark"
                        >
                            {currentStep === questions.length - 1 ? 'View Assessment Result' : 'Next Question'}
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ) : (
                /* Assessment Result View (Requirement #10) */
                <div className="space-y-6 animate-in fade-in duration-500">
                    <div className="p-6 rounded-2xl border bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">
                                Classification Output
                            </span>
                            <span className="text-xs font-bold text-gray-500">Jurisdiction: {answers.country} - {answers.state}</span>
                        </div>

                        <div>
                            <h4 className="text-lg font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-amber-500" />
                                {result.title}
                            </h4>
                        </div>

                        <div className="space-y-2 pt-2">
                            <h5 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Why:</h5>
                            <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400 list-disc list-inside">
                                {result.why.map((w, i) => (
                                    <li key={i}>{w}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-gray-200 dark:border-gray-800">
                            <h5 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">What You Can Do Now:</h5>
                            <ol className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300 list-decimal list-inside">
                                {result.actions.map((act, i) => (
                                    <li key={i} className="font-medium">{act}</li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* Disclaimer Banner */}
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <p className="leading-relaxed">
                            <strong>Important Notice:</strong> This assessment provides general educational information and does not determine whether your employer or manager has committed a legal violation. Employment rights depend on your specific jurisdiction ({answers.country}-{answers.state}) and employment contract.
                        </p>
                    </div>

                    {/* Requirement #10 Quick Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                        <button
                            onClick={() => onNavigateTab && onNavigateTab('incident_recorder')}
                            className="p-3 rounded-xl bg-primary text-white font-bold text-xs shadow-soft flex items-center justify-center gap-2 hover:bg-primary-dark"
                        >
                            <FileText className="w-4 h-4" /> [Document Incident]
                        </button>
                        <button
                            onClick={() => onNavigateTab && onNavigateTab('location_rights')}
                            className="p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-bold text-xs flex items-center justify-center gap-2 hover:bg-gray-100"
                        >
                            <Scale className="w-4 h-4 text-primary" /> [Check My Rights]
                        </button>
                        <button
                            onClick={() => onNavigateTab && onNavigateTab('location_rights')}
                            className="p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-bold text-xs flex items-center justify-center gap-2 hover:bg-gray-100"
                        >
                            <ExternalLink className="w-4 h-4 text-emerald-600" /> [Find Relevant Authority]
                        </button>
                        <button
                            onClick={() => onNavigateTab && onNavigateTab('scenarios')}
                            className="p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-bold text-xs flex items-center justify-center gap-2 hover:bg-gray-100"
                        >
                            <UserCheck className="w-4 h-4 text-purple-600" /> [View Similar Scenarios]
                        </button>
                        <Link
                            to="/tools/legal-notice-generator"
                            className="p-3 rounded-xl bg-accent text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-accent-dark sm:col-span-2 md:col-span-2 text-center"
                        >
                            <Scale className="w-4 h-4" /> [Talk to a Legal Professional / Draft Notice]
                        </Link>
                    </div>

                    <div className="text-center pt-2">
                        <button
                            onClick={resetWizard}
                            className="text-xs font-bold text-gray-500 hover:text-gray-800 dark:hover:text-white inline-flex items-center gap-1.5"
                        >
                            <RotateCcw className="w-3.5 h-3.5" /> Retake Diagnostic Assessment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
