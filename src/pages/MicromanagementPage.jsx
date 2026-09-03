import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import ContentSection, { CalloutBox } from '../components/ContentSection';
import { PhoneOff, Eye, ShieldAlert, Clock, CheckCircle2, AlertTriangle, Scale, ExternalLink, Calendar, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MicromanagementPage() {
    const [weekendWorkHours, setWeekendWorkHours] = useState('');
    const [isPaidOvertime, setIsPaidOvertime] = useState(false);
    const [hasCompOff, setHasCompOff] = useState(false);
    const [hasKeylogger, setHasKeylogger] = useState(false);

    // Audit result evaluation
    const evaluateStatus = () => {
        const hours = parseFloat(weekendWorkHours) || 0;
        let issues = [];

        if (hours > 0 && !isPaidOvertime && !hasCompOff) {
            issues.push('⚠️ Unpaid Weekend Work: Requiring weekend work without 2x Overtime pay or a Compensatory Off (Comp-Off) violates the Shops & Establishments Act.');
        }
        if (hasKeylogger) {
            issues.push('⚠️ Unannounced Surveillance: Keylogging or tracking personal devices without prior written disclosure violates Privacy Rights under Article 21 and the DPDP Act 2023.');
        }

        return issues;
    };

    const auditIssues = evaluateStatus();

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead path="/micromanagement-weekend-work" />

            <PageHero
                title="Micromanagement & Weekend Work Rights India"
                subtitle="Are weekend meetings legal? Can an employer track your laptop or force Sunday calls? Know your statutory rights under Indian Labour Laws."
                icon={PhoneOff}
                gradient="indigo"
            />

            <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
                <Breadcrumb items={[
                    { label: 'Workplace Rules', path: '/working-hours' },
                    { label: 'Micromanagement & Weekend Work', path: '/micromanagement-weekend-work' }
                ]} />

                {/* Quick Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-950 p-5 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft">
                        <Calendar className="w-7 h-7 text-indigo-600 mb-2" />
                        <h3 className="font-extrabold text-sm text-gray-900 dark:text-white">1 Rest Day Mandatory</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                            Every employee is legally entitled to at least 1 full weekly off day under Section 52 of Factories Act & State Shops Acts.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-950 p-5 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft">
                        <Clock className="w-7 h-7 text-emerald-600 mb-2" />
                        <h3 className="font-extrabold text-sm text-gray-900 dark:text-white">2x Overtime or Comp-Off</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                            Mandatory weekend meetings count as working hours. Hours beyond 48/week require 2x wage rate or a Comp-Off within 30 days.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-950 p-5 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft">
                        <Eye className="w-7 h-7 text-purple-600 mb-2" />
                        <h3 className="font-extrabold text-sm text-gray-900 dark:text-white">Surveillance Limits</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                            Tracking personal devices or keylogging without written policy consent violates DPDP Act 2023 & Article 21 Privacy rights.
                        </p>
                    </div>
                </div>

                {/* ── SECTION 1: WEEKEND MEETINGS & WORK LAWS ── */}
                <ContentSection title="1. Weekend Meetings & Working on Off-Days" icon={Calendar} variant="default">
                    <div className="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                            In many Indian corporate and tech workplaces, managers schedule "quick weekend check-ins", Sunday strategy meetings, or demand immediate responses on messaging apps. Here is what Indian law dictates:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-800">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">📅 Mandatory Weekly Rest Rule</h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Under State Shops & Commercial Establishments Acts (e.g. TN, Karnataka, Maharashtra, Delhi), employers <strong>must provide at least 24 consecutive hours of rest</strong> every 7 days. Mandatory weekend calls violate this rest entitlement unless compensated.
                                </p>
                            </div>

                            <div className="p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-800">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">💰 2x Wage Overtime & Comp-Off</h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    If attending weekend meetings pushes your total weekly hours beyond 48 hours, the employer <strong>must pay double wages (2x hourly rate)</strong> or credit a <strong>Compensatory Off (Comp-Off)</strong> to be availed within 30 days.
                                </p>
                            </div>
                        </div>

                        <CalloutBox type="info" title="Can you legally refuse unpaid weekend calls?">
                            <strong>Yes.</strong> If an employer requires you to work or attend calls on a designated weekly off day without offering overtime pay or a Compensatory Off, you have the statutory right to decline. Deducting salary for refusing unpaid weekend calls is an <em>unlawful deduction</em> under Section 7 of the Payment of Wages Act.
                        </CalloutBox>
                    </div>
                </ContentSection>

                {/* ── SECTION 2: MICROMANAGEMENT & SURVEILLANCE LAWS ── */}
                <ContentSection title="2. Micromanagement, Keyloggers & Laptop Tracking" icon={Eye} variant="info">
                    <div className="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                            Micromanagement often manifests as invasive digital surveillance, hourly status sheets, webcam monitoring, or software tracking mouse movements.
                        </p>

                        <div className="space-y-3">
                            <div className="p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-800">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">💻 Company Laptops vs Personal Devices (BYOD)</h4>
                                <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-400 list-disc list-inside">
                                    <li><strong>Company-Issued Devices:</strong> Employers can monitor work activities during official shift hours, BUT only if explicitly disclosed in a written IT / Privacy Policy.</li>
                                    <li><strong>Personal Devices (BYOD):</strong> Installing tracking apps, monitoring personal WhatsApp, or keylogging personal laptops is strictly illegal under Section 43/66 of the Information Technology Act.</li>
                                </ul>
                            </div>

                            <div className="p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-800">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">📹 Active Webcam Streaming & Keyloggers</h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Mandating continuous webcam streaming inside your personal home during WFH or installing keystroke loggers without notice violates your <strong>Right to Privacy (Article 21 - Supreme Court Puttaswamy ruling)</strong> and provisions of the <strong>Digital Personal Data Protection (DPDP) Act 2023</strong>.
                                </p>
                            </div>
                        </div>

                        <CalloutBox type="warning" title="Off-Hours Messaging & Threats">
                            Bombarding employees with late-night WhatsApp messages after 8 PM or threatening salary hold / bad background checks (BGV) over minor response delays constitutes <strong>Workplace Mental Harassment</strong> and Criminal Intimidation (IPC 503/506).
                        </CalloutBox>
                    </div>
                </ContentSection>

                {/* ── SECTION 3: INTERACTIVE AUDIT WIDGET ── */}
                <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
                    <div className="border-b border-gray-100 dark:border-gray-850 pb-4">
                        <span className="text-[10px] font-black uppercase tracking-wider text-primary">Interactive Compliance Tool</span>
                        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-0.5">
                            Audit Your Weekend Work & Surveillance Status
                        </h3>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm">
                        <div>
                            <label className="block font-bold text-gray-800 dark:text-gray-200 mb-1">
                                Hours spent on weekend work / meetings per week:
                            </label>
                            <input
                                type="number"
                                value={weekendWorkHours}
                                onChange={(e) => setWeekendWorkHours(e.target.value)}
                                placeholder="e.g. 4 hours"
                                className="w-full max-w-xs p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:border-primary"
                            />
                        </div>

                        <div className="space-y-2 pt-2">
                            <label className="flex items-center gap-2 cursor-pointer text-gray-800 dark:text-gray-200 font-semibold">
                                <input
                                    type="checkbox"
                                    checked={isPaidOvertime}
                                    onChange={(e) => setIsPaidOvertime(e.target.checked)}
                                    className="w-4 h-4 rounded text-primary"
                                />
                                <span>Do you receive 2x Overtime pay for weekend work?</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer text-gray-800 dark:text-gray-200 font-semibold">
                                <input
                                    type="checkbox"
                                    checked={hasCompOff}
                                    onChange={(e) => setHasCompOff(e.target.checked)}
                                    className="w-4 h-4 rounded text-primary"
                                />
                                <span>Do you receive a Compensatory Off (Comp-Off) day?</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer text-gray-800 dark:text-gray-200 font-semibold">
                                <input
                                    type="checkbox"
                                    checked={hasKeylogger}
                                    onChange={(e) => setHasKeylogger(e.target.checked)}
                                    className="w-4 h-4 rounded text-primary"
                                />
                                <span>Does employer use unannounced keyloggers or personal phone tracking?</span>
                            </label>
                        </div>

                        {/* Audit Result Display */}
                        {weekendWorkHours !== '' && (
                            <div className="pt-4 border-t border-gray-100 dark:border-gray-850">
                                {auditIssues.length > 0 ? (
                                    <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-2xl space-y-2">
                                        <h4 className="font-extrabold text-amber-900 dark:text-amber-300 text-sm flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4 text-amber-600" /> Potential Legal Violations Detected:
                                        </h4>
                                        <ul className="space-y-1 text-xs text-amber-800 dark:text-amber-300">
                                            {auditIssues.map((iss, i) => (
                                                <li key={i}>{iss}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl text-emerald-900 dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        <span>Compliant Weekend Practice: Compensatory Off or 2x Overtime pay provided as mandated by law.</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* ── SECTION 4: STEP-BY-STEP ACTION PROTOCOL ── */}
                <ContentSection title="4. How to Handle Unreasonable Demands (Step-by-Step)" icon={Scale} variant="success">
                    <div className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <ol className="space-y-3 list-decimal list-inside bg-white dark:bg-gray-950 p-5 rounded-2xl border border-gray-150 dark:border-gray-800">
                            <li className="leading-relaxed">
                                <strong>Log All Timestamps:</strong> Save screenshots of weekend meeting invites, WhatsApp messages received after 8 PM, and time logs.
                            </li>
                            <li className="leading-relaxed">
                                <strong>Send Written Email Requesting Comp-Off / Overtime:</strong> Politely request HR in writing: <em>"As per the weekly rest rules under the Shops & Establishments Act, please confirm my Compensatory Off (Comp-Off) or 2x Overtime credit for working on Sunday."</em>
                            </li>
                            <li className="leading-relaxed">
                                <strong>File HR Grievance for Mental Harassment:</strong> If your manager threatens bad performance reviews or termination over off-hour calls, escalate to HR citing workplace mental harassment policies.
                            </li>
                            <li className="leading-relaxed">
                                <strong>Approach Labour Commissioner:</strong> If pay is illegally deducted for refusing unpaid weekend calls, file a wage claim petition under Section 15 of the Payment of Wages Act.
                            </li>
                        </ol>

                        <div className="pt-4 flex flex-col sm:flex-row gap-3">
                            <Link to="/tools/overtime-tracker" className="flex-1 px-5 py-3 rounded-xl bg-primary text-white font-bold text-xs shadow-soft text-center flex items-center justify-center gap-2">
                                <Clock className="w-4 h-4" /> Open 2x Overtime Calculator
                            </Link>
                            <Link to="/tools/grievance-generator" className="flex-1 px-5 py-3 rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 font-bold text-xs text-center flex items-center justify-center gap-2">
                                <FileText className="w-4 h-4" /> Generate Complaint Letter
                            </Link>
                        </div>
                    </div>
                </ContentSection>

            </div>
        </div>
    );
}
