import React, { useState } from 'react';
import { Clock, CheckCircle2, ShieldAlert, ExternalLink, ArrowRight, FileText, Scale, Landmark, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const portalTimelines = [
    {
        portal: 'EPFiGMS Portal (EPFO)',
        authority: 'Regional Provident Fund Commissioner',
        timeline: '7 to 15 Working Days',
        maxLimit: 'Max 30 Days under EPFO Charter',
        badge: 'Fastest',
        badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
        url: 'https://epfigms.gov.in',
        dispute: 'Undeposited PF, UAN transfer disputes, or delayed withdrawals.'
    },
    {
        portal: 'CPGRAMS Public Grievance',
        authority: 'Department of Administrative Reforms (DARPG)',
        timeline: '21 to 30 Days',
        maxLimit: 'Mandatory 30-Day Resolution Policy',
        badge: 'Escalation',
        badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300',
        url: 'https://pgportal.gov.in',
        dispute: 'Escalation against unresponsive officers or government default.'
    },
    {
        portal: 'SAMADHAN Portal (Central Labour)',
        authority: 'Chief Labour Commissioner (Central)',
        timeline: '15 Days (Notice) / 45 Days (Conciliation)',
        maxLimit: 'Target 45 Days for Central Sphere',
        badge: 'Central Sphere',
        badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300',
        url: 'https://samadhan.labour.gov.in',
        dispute: 'Banks, Railways, Telecom, PSUs, and Central establishments.'
    },
    {
        portal: 'SHe-Box / ICC (POSH Act)',
        authority: 'Internal Complaints Committee / District LCC',
        timeline: 'Inquiry within 90 Days',
        maxLimit: '60 Days for Employer Action Report',
        badge: 'Confidential',
        badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300',
        url: 'https://shebox.wcd.gov.in',
        dispute: 'Workplace Sexual Harassment complaints under POSH Act 2013.'
    },
    {
        portal: 'State Labour Commissioner (ALC)',
        authority: 'District Assistant Labour Commissioner (ALC)',
        timeline: '7–14 Days (Notice) / 30–90 Days (Conciliation)',
        maxLimit: '90 Days Conciliation Period',
        badge: 'State Sphere',
        badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
        url: '/labour-directory',
        dispute: 'Unpaid salary, notice period disputes, relieving letters, IT/private sector.'
    },
    {
        portal: 'Controlling Authority (Gratuity / Wages)',
        authority: 'Labour Court / Controlling Authority',
        timeline: '3 to 6 Months',
        maxLimit: 'Includes Statutory Recovery Certificate (RC)',
        badge: 'Statutory Recovery',
        badgeColor: 'bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300',
        url: '/gratuity',
        dispute: 'Form N Gratuity claims or Payment of Wages Section 15 formal recovery.'
    }
];

const postComplaintSteps = [
    {
        step: 1,
        title: 'Registration & Grievance ID Generation',
        duration: 'Day 1 (Instant)',
        desc: 'You receive an official Service Request / Grievance Reference Number (e.g., EPFOG/E/2026/00123) along with an instant SMS and email confirmation.',
        icon: FileText
    },
    {
        step: 2,
        title: 'Scrutiny & Assignment to Controlling Officer',
        duration: 'Days 2 – 5',
        desc: 'The portal evaluates your complaint documents and assigns the file to the designated officer (Assistant Labour Commissioner, RPFC, or ICC Presiding Officer).',
        icon: Scale
    },
    {
        step: 3,
        title: 'Official Show-Cause Notice / Summons Issued to Employer',
        duration: 'Days 7 – 14',
        desc: 'The authority issues a formal summons to your employer’s HR/Director, directing them to submit a written reply and salary registers within 7–14 days.',
        icon: ShieldAlert
    },
    {
        step: 4,
        title: 'Joint Conciliation Hearing Session',
        duration: 'Days 15 – 45',
        desc: 'Both you and the employer are called to attend a joint hearing. You present your evidence (payslips, appointment letter, emails) against the employer’s response.',
        icon: Landmark
    },
    {
        step: 5,
        title: 'Resolution, Recovery Certificate (RC), or FOC Report',
        duration: 'Days 30 – 90',
        desc: 'If settled, dues are paid immediately. If employer defaults, a Recovery Certificate (RC) is issued to the District Collector to attach the employer’s bank accounts.',
        icon: CheckCircle2
    }
];

export default function ComplaintTimelineGuide() {
    const [activeTab, setActiveTab] = useState('timelines'); // 'timelines' | 'process'

    return (
        <div className="bg-white dark:bg-gray-950 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 sm:p-8 space-y-8 my-8">
            
            {/* Header Title */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-850 pb-5">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            Statutory Timelines & Procedure
                        </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
                        Resolution Timelines & What Happens After Filing
                    </h3>
                </div>

                {/* Tab Switcher Buttons */}
                <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-900 p-1 rounded-2xl border border-gray-200 dark:border-gray-800 shrink-0">
                    <button
                        type="button"
                        onClick={() => setActiveTab('timelines')}
                        className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                            activeTab === 'timelines'
                                ? 'bg-white dark:bg-gray-800 text-primary shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                        ⏱️ Expected Days
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('process')}
                        className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                            activeTab === 'process'
                                ? 'bg-white dark:bg-gray-800 text-primary shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                        📋 5-Step Process
                    </button>
                </div>
            </div>

            {/* TAB 1: RESOLUTION TIMELINES TABLE / CARDS */}
            {activeTab === 'timelines' && (
                <div className="space-y-6 animate-in fade-in">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Official resolution timelines vary depending on whether your dispute falls under EPFO, POSH Act, State Labour Commissioner, or Central Sphere:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {portalTimelines.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-5 rounded-2xl border border-gray-150 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 space-y-3 flex flex-col justify-between hover:border-primary/40 transition-all"
                            >
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                                            {item.badge}
                                        </span>
                                        <span className="text-[11px] font-bold text-gray-400">
                                            {item.maxLimit}
                                        </span>
                                    </div>
                                    <h4 className="font-extrabold text-sm text-gray-900 dark:text-white">
                                        {item.portal}
                                    </h4>
                                    <p className="text-[11px] font-semibold text-gray-500">
                                        {item.authority}
                                    </p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.dispute}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-gray-200/60 dark:border-gray-800 space-y-2">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-500 font-bold">Resolution Days:</span>
                                        <span className="font-black text-primary flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" /> {item.timeline}
                                        </span>
                                    </div>
                                    {item.url.startsWith('http') ? (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center justify-between pt-1"
                                        >
                                            <span>Open Official Portal</span>
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    ) : (
                                        <Link
                                            to={item.url}
                                            className="text-[11px] font-bold text-primary hover:underline flex items-center justify-between pt-1"
                                        >
                                            <span>View Details</span>
                                            <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* TAB 2: STEP-BY-STEP PROCEDURE */}
            {activeTab === 'process' && (
                <div className="space-y-6 animate-in fade-in">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Here is the exact step-by-step procedure that happens after you file an official complaint:
                    </p>

                    <div className="space-y-4">
                        {postComplaintSteps.map((stepItem) => {
                            const IconComponent = stepItem.icon;
                            return (
                                <div
                                    key={stepItem.step}
                                    className="p-5 rounded-2xl border border-gray-150 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 flex flex-col sm:flex-row items-start gap-4 hover:border-primary/40 transition-all"
                                >
                                    <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-sm shrink-0 shadow-soft">
                                        Step {stepItem.step}
                                    </div>
                                    <div className="space-y-1 flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                            <h4 className="font-extrabold text-sm sm:text-base text-gray-900 dark:text-white flex items-center gap-2">
                                                <IconComponent className="w-4 h-4 text-primary" />
                                                {stepItem.title}
                                            </h4>
                                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 w-max">
                                                {stepItem.duration}
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed pt-1">
                                            {stepItem.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Pro-Tips Banner */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-150 dark:border-blue-900/40 p-5 rounded-2xl text-xs sm:text-sm text-blue-950 dark:text-blue-200 space-y-2">
                <h4 className="font-extrabold flex items-center gap-2 text-primary">
                    💡 Pro-Tips to Fast-Track Your Complaint Resolution:
                </h4>
                <ul className="space-y-1 text-xs list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li><strong>Attach Solid Proof:</strong> Upload appointment letter, last 3 months payslips, bank statements, and HR email correspondence.</li>
                    <li><strong>Cite Statutory Acts:</strong> Mention exact sections (e.g., <em>Payment of Wages Act Section 5, EPF Act Section 14, Gratuity Act Section 7</em>).</li>
                    <li><strong>Escalate if Delayed:</strong> If unresolved past 30 days, file a CPGRAMS grievance citing your original Reference Number.</li>
                </ul>
            </div>

        </div>
    );
}
