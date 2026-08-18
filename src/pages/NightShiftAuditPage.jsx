import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Moon, ShieldAlert, AlertTriangle, CheckCircle, Scale, ShieldCheck } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const checklistItems = [
    { id: 'consent', label: 'Did the employer obtain your express written consent to work the night shift (8:00 PM to 6:00 AM)?' },
    { id: 'cabs', label: 'Does the employer provide a free, GPS-enabled transport facility from your residence to the office and back?' },
    { id: 'security_cab', label: 'If you are the first to be picked up or the last to be dropped off, is a security guard present in the cab?' },
    { id: 'security_office', label: 'Is there a sufficient number of female security guards deployed at the workplace during the night shift?' },
    { id: 'washroom', label: 'Are there separate, secure washroom facilities for female employees with safe access?' },
    { id: 'medical', label: 'Is there a medical facility or tie-up with a nearby hospital/clinic available during the night shift for emergencies?' },
    { id: 'posh', label: 'Is the Internal Complaints Committee (ICC) under the POSH Act strictly constituted and its details prominently displayed?' }
];

export default function NightShiftAuditPage() {
    const [answers, setAnswers] = useState(
        checklistItems.reduce((acc, item) => ({ ...acc, [item.id]: null }), {})
    );

    const handleAnswer = (id, value) => {
        setAnswers(prev => ({ ...prev, [id]: value }));
    };

    const answeredCount = Object.values(answers).filter(v => v !== null).length;
    const isComplete = answeredCount === checklistItems.length;
    
    // Any 'false' means a safety/legal violation
    const violations = Object.entries(answers).filter(([_, value]) => value === false).map(([id]) => id);

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Night Shift Safety Audit (For Women) - Legal Compliance India"
                description="Audit your company's night shift safety protocols for women. Check compliance with mandatory cab, security, and consent rules under Indian labor laws."
                path="/tools/night-shift-audit"
            />
            
            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Night Shift Audit', path: '/tools/night-shift-audit' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <Moon className="w-10 h-10 text-primary" />
                        Night Shift Safety Audit (For Women)
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Under the various State Shops & Establishments Acts in India, it is generally illegal to ask female employees to work between 8:00 PM and 6:00 AM unless strict, non-negotiable safety exemptions are met. Run an audit on your employer below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Checklist Section */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                            Mandatory Safety Checklist
                        </h2>

                        <div className="space-y-6">
                            {checklistItems.map((item, index) => (
                                <div key={item.id} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">{index + 1}. {item.label}</p>
                                    <div className="flex gap-3">
                                        <button 
                                            onClick={() => handleAnswer(item.id, true)} 
                                            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers[item.id] === true ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                        >
                                            Yes
                                        </button>
                                        <button 
                                            onClick={() => handleAnswer(item.id, false)} 
                                            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers[item.id] === false ? 'bg-red-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                        >
                                            No
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-6">
                        {!isComplete ? (
                            <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 h-full flex flex-col items-center justify-center text-center sticky top-24">
                                <ShieldAlert className="w-12 h-12 text-gray-300 mb-4" />
                                <p className="text-gray-500 font-medium">Answer all {checklistItems.length} questions to generate your company's safety compliance report.</p>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-6">
                                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${(answeredCount / checklistItems.length) * 100}%` }}></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">{answeredCount} of {checklistItems.length} answered</p>
                            </div>
                        ) : (
                            <div className="sticky top-24 space-y-6">
                                {violations.length > 0 ? (
                                    <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 p-8 rounded-2xl shadow-sm animate-fade-in">
                                        <div className="flex items-center gap-3 mb-4">
                                            <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
                                            <h3 className="font-black text-2xl text-red-800 dark:text-red-300">Safety Violations Detected</h3>
                                        </div>
                                        <p className="font-medium text-red-700 dark:text-red-200 mb-4">
                                            Your employer is failing <span className="font-bold text-red-900 dark:text-red-100 text-xl">{violations.length}</span> critical safety requirements.
                                        </p>
                                        <p className="text-sm text-red-800 dark:text-red-200 mb-6">
                                            Under the State Shops & Establishments Act, these are non-negotiable prerequisites. If they fail to provide these, it is illegal for them to schedule you for a night shift.
                                        </p>
                                        
                                        <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-red-100 dark:border-red-900/50 mb-4">
                                            <p className="font-bold text-red-800 dark:text-red-300 mb-2">What you should do:</p>
                                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                                                <li>You have the legal right to refuse the night shift until these conditions are met.</li>
                                                <li>Send an email to HR pointing out the exact safety lapses (e.g., lack of cab security).</li>
                                                <li>If forced, you can file a complaint with the regional Labour Commissioner for violation of safety exemptions.</li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 p-8 rounded-2xl shadow-sm animate-fade-in">
                                        <div className="flex items-center gap-3 mb-4">
                                            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                                            <h3 className="font-black text-2xl text-green-800 dark:text-green-300">Fully Compliant</h3>
                                        </div>
                                        <p className="font-medium text-green-700 dark:text-green-200">
                                            Based on your answers, your employer is complying with all standard legal safety prerequisites for employing women during night shifts in India.
                                        </p>
                                        <p className="text-sm text-green-800 dark:text-green-200 mt-4">
                                            Remember: Your explicit written consent is still required, and you can revoke it if you feel unsafe or if these facilities are withdrawn.
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-primary" />
                        Key Legal Precedents
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Historically, Section 66(1)(b) of the Factories Act, 1948 strictly prohibited women from working between 7 PM and 6 AM. However, states like Karnataka, Maharashtra, and Tamil Nadu have amended their respective Shops & Establishments Acts (covering IT and BPO sectors) to allow night shifts for women—<span className="font-bold underline">but only if strict conditions are met.</span>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        If an employer fails to provide secure transport or female security, the exemption to employ women at night is immediately revoked, making the shift illegal.
                    </p>
                </div>
            </div>
        </div>
    );
}
