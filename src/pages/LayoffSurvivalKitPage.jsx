import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Briefcase, ShieldAlert, CheckCircle, AlertTriangle, Calculator, FileText } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const checklistItems = [
    { id: 'permission', label: 'Did the company get explicit government permission for this mass layoff? (Mandatory if they have > 300 employees)' },
    { id: 'notice', label: 'Did they provide you with 1-3 months of written notice, or pay you your full salary in lieu of that notice period?' },
    { id: 'severance', label: 'Did they pay you Statutory Severance? (15 days of average pay for every completed year of continuous service)' },
    { id: 'gratuity', label: 'If you worked there for 4 years and 240 days or more, did they include your full Gratuity payout in the F&F?' },
    { id: 'leave', label: 'Did they encash all your accumulated Earned/Privilege Leaves in your final settlement?' }
];

export default function LayoffSurvivalKitPage() {
    const [answers, setAnswers] = useState(
        checklistItems.reduce((acc, item) => ({ ...acc, [item.id]: null }), {})
    );

    const handleAnswer = (id, value) => {
        setAnswers(prev => ({ ...prev, [id]: value }));
    };

    const answeredCount = Object.values(answers).filter(v => v !== null).length;
    const isComplete = answeredCount === checklistItems.length;
    
    // Any 'false' means the employer is breaking the Industrial Disputes Act
    const violations = Object.entries(answers).filter(([_, value]) => value === false).map(([id]) => id);

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Mass Layoff Survival Kit - Severance Rights India"
                description="Fired in a mass layoff? Audit your severance package to ensure you aren't being cheated out of your legal rights under Chapter VB of the Industrial Disputes Act."
                path="/tools/layoff-survival"
            />
            
            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Layoff Survival Kit', path: '/tools/layoff-survival' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <Briefcase className="w-10 h-10 text-primary" />
                        Mass Layoff Survival Kit
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Companies cannot simply fire hundreds of people via a Zoom call without paying heavy statutory compensation. Use this audit to check if your employer is illegally dodging Chapter VB of the Industrial Disputes Act.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Checklist Section */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-primary" />
                            Severance Audit Checklist
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
                                <p className="text-gray-500 font-medium">Answer all {checklistItems.length} questions to audit your severance package.</p>
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
                                            <h3 className="font-black text-2xl text-red-800 dark:text-red-300">Illegal Severance Detected</h3>
                                        </div>
                                        <p className="font-medium text-red-700 dark:text-red-200 mb-4">
                                            Your employer is illegally withholding <span className="font-bold text-red-900 dark:text-red-100 text-xl">{violations.length}</span> statutory payout components.
                                        </p>
                                        <p className="text-sm text-red-800 dark:text-red-200 mb-6">
                                            Mass layoffs (Retrenchment) in India are highly regulated. If they fail to pay you 15 days per year of service + notice pay, the layoff is legally void.
                                        </p>
                                        
                                        <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-red-100 dark:border-red-900/50 mb-4">
                                            <p className="font-bold text-red-800 dark:text-red-300 mb-2">Immediate Action Steps:</p>
                                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                                                <li>Do NOT sign the "Full & Final Settlement" or "No Dues Certificate" if they force you.</li>
                                                <li>If forced to sign, write <i>"Signed Under Protest for pending statutory dues"</i> next to your signature.</li>
                                                <li>File a grievance with the Regional Labour Commissioner for violation of Section 25F of the IDA.</li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 p-8 rounded-2xl shadow-sm animate-fade-in">
                                        <div className="flex items-center gap-3 mb-4">
                                            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                                            <h3 className="font-black text-2xl text-green-800 dark:text-green-300">Severance Compliant</h3>
                                        </div>
                                        <p className="font-medium text-green-700 dark:text-green-200">
                                            Your employer appears to be complying with the mandatory statutory payouts required during a mass layoff in India.
                                        </p>
                                        <p className="text-sm text-green-800 dark:text-green-200 mt-4">
                                            Always double-check the exact math on your F&F statement to ensure they calculated your basic salary properly and didn't make illegal deductions.
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Important Legal Notes */}
                <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-lg mt-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Calculator className="w-6 h-6 text-blue-400" />
                        The Chapter VB Rule (The "300 Employee" Law)
                    </h3>
                    <p className="text-gray-300 mb-4">
                        Under Chapter VB of the Industrial Disputes Act, if a factory, mine, or plantation has <span className="font-bold text-white">300 or more employees</span> (many states like Maharashtra have lowered this to 100), the company <span className="underline">cannot</span> lay off workers without prior permission from the government.
                    </p>
                    <p className="text-gray-300">
                        While IT/Software companies often try to classify themselves outside this rule, Labour Courts have increasingly dragged them into this ambit when mass firings happen. Even if Chapter VB doesn't apply, Section 25F (the 15-day severance rule) applies to almost every employee in India.
                    </p>
                </div>
            </div>
        </div>
    );
}
