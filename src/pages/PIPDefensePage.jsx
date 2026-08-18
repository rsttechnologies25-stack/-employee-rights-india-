import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { ShieldAlert, AlertTriangle, CheckCircle, Scale, Copy, FileText, Activity } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function PIPDefensePage() {
    const [answers, setAnswers] = useState({
        measurable: null,
        timeframe: null,
        training: null,
        hostility: null
    });

    const [copied, setCopied] = useState(false);

    const handleAnswer = (question, value) => {
        setAnswers(prev => ({ ...prev, [question]: value }));
    };

    const isComplete = Object.values(answers).every(v => v !== null);

    // Calculate severity: higher score = more likely an illegal setup
    let score = 0;
    if (answers.measurable === false) score += 1;
    if (answers.timeframe === false) score += 1;
    if (answers.training === false) score += 1;
    if (answers.hostility === true) score += 1;

    let verdict = { title: "", text: "", color: "" };
    if (isComplete) {
        if (score >= 3) {
            verdict = {
                title: "⚠️ High Alert: Hostile Termination Setup",
                text: "Your PIP lacks measurable goals, sufficient time, and support, and exhibits signs of hostility. This strongly indicates the company is using the PIP as a legal shield to terminate you without paying severance (claiming 'underperformance'). You must create a paper trail immediately.",
                color: "red"
            };
        } else if (score === 2) {
            verdict = {
                title: "⚠️ Warning: Flawed PIP Process",
                text: "Your PIP process has significant legal flaws. While it may not be entirely malicious, the lack of proper metrics or support makes it unfair. You should formally request clarification on the missing elements.",
                color: "yellow"
            };
        } else {
            verdict = {
                title: "✅ Standard PIP Process",
                text: "Your PIP appears to follow standard HR protocols. You have measurable goals, time, and support. Focus on documenting your daily progress and meeting the metrics exactly as outlined.",
                color: "green"
            };
        }
    }

    const rebuttalTemplate = `Subject: Clarification Required Regarding Performance Improvement Plan (PIP)

Dear [HR Name] and [Manager Name],

I am writing to acknowledge receipt of the Performance Improvement Plan (PIP) dated [Date]. I am fully committed to the company's success and am eager to improve my performance.

However, to ensure I can successfully meet the expectations, I am officially requesting written clarification on the following points:

1. The targets set in the PIP (e.g., "[Insert impossible target]") are currently subjective and lack clear, mathematical measurability. Could you please provide the exact numerical metrics I will be evaluated against?
2. No specific training or support resources have been assigned to help me bridge the alleged performance gap. I kindly request that [specific training/resource] be provided.
3. The timeframe of [Number] days is unusually short for the scope of the new targets requested.

I request that this email be added to my official HR file. I look forward to your support in making this a fair and constructive process.

Sincerely,
[Your Name]
[Employee ID]`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(rebuttalTemplate);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="PIP Defense Kit & Rebuttal Generator - Employee Rights India"
                description="Analyze your Performance Improvement Plan (PIP) to check if it's an illegal silent layoff setup. Generate a formal HR rebuttal to protect your rights."
                path="/tools/pip-defense"
            />
            
            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'PIP Defense Kit', path: '/tools/pip-defense' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <ShieldAlert className="w-10 h-10 text-primary" />
                        PIP Defense Kit & Analyzer
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        In India, many companies use fake Performance Improvement Plans (PIPs) to illegally force employees to resign without severance. Use this tool to analyze if your PIP is a genuine development plan or a hostile setup.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Quiz Section */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Activity className="w-6 h-6 text-primary" />
                            Analyze Your PIP
                        </h2>

                        <div className="space-y-6">
                            {/* Q1 */}
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">1. Are the targets in the PIP exact, mathematically measurable numbers?</p>
                                <div className="flex gap-3">
                                    <button onClick={() => handleAnswer('measurable', true)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.measurable === true ? 'bg-green-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>Yes</button>
                                    <button onClick={() => handleAnswer('measurable', false)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.measurable === false ? 'bg-red-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>No (Subjective)</button>
                                </div>
                            </div>

                            {/* Q2 */}
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">2. Were you given a reasonable timeframe (at least 30-45 days) to improve?</p>
                                <div className="flex gap-3">
                                    <button onClick={() => handleAnswer('timeframe', true)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.timeframe === true ? 'bg-green-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>Yes</button>
                                    <button onClick={() => handleAnswer('timeframe', false)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.timeframe === false ? 'bg-red-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>No (Less than 30)</button>
                                </div>
                            </div>

                            {/* Q3 */}
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">3. Has the company officially assigned training or a mentor to help you?</p>
                                <div className="flex gap-3">
                                    <button onClick={() => handleAnswer('training', true)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.training === true ? 'bg-green-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>Yes</button>
                                    <button onClick={() => handleAnswer('training', false)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.training === false ? 'bg-red-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>No</button>
                                </div>
                            </div>

                            {/* Q4 */}
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">4. Is your manager exclusively documenting your failures while ignoring successes?</p>
                                <div className="flex gap-3">
                                    <button onClick={() => handleAnswer('hostility', false)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.hostility === false ? 'bg-green-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>No (Fair review)</button>
                                    <button onClick={() => handleAnswer('hostility', true)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.hostility === true ? 'bg-red-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>Yes (Hostile)</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results & Rebuttal Section */}
                    <div className="space-y-6">
                        {!isComplete ? (
                            <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 h-full flex flex-col items-center justify-center text-center">
                                <AlertTriangle className="w-12 h-12 text-gray-300 mb-4" />
                                <p className="text-gray-500 font-medium">Complete all 4 questions on the left to receive your legal analysis and rebuttal draft.</p>
                            </div>
                        ) : (
                            <>
                                <div className={`p-6 rounded-2xl shadow-sm border ${
                                    verdict.color === 'red' ? 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800' : 
                                    verdict.color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-950/40 border-yellow-200 dark:border-yellow-800' : 
                                    'bg-green-50 dark:bg-green-950/40 border-green-200 dark:border-green-800'
                                }`}>
                                    <h3 className={`font-bold text-lg mb-2 ${
                                        verdict.color === 'red' ? 'text-red-800 dark:text-red-300' : 
                                        verdict.color === 'yellow' ? 'text-yellow-800 dark:text-yellow-300' : 
                                        'text-green-800 dark:text-green-300'
                                    }`}>
                                        {verdict.title}
                                    </h3>
                                    <p className={
                                        verdict.color === 'red' ? 'text-red-700 dark:text-red-200' : 
                                        verdict.color === 'yellow' ? 'text-yellow-700 dark:text-yellow-200' : 
                                        'text-green-700 dark:text-green-200'
                                    }>
                                        {verdict.text}
                                    </p>
                                </div>

                                {score >= 2 && (
                                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-lg font-bold flex items-center gap-2">
                                                <FileText className="w-5 h-5 text-primary" />
                                                Defensive Rebuttal Draft
                                            </h3>
                                            <button 
                                                onClick={copyToClipboard}
                                                className="text-sm flex items-center gap-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-1.5 rounded-lg font-medium transition-colors"
                                            >
                                                {copied ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                                                {copied ? 'Copied!' : 'Copy Text'}
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-4">
                                            Do not refuse to sign the PIP (that constitutes insubordination). Instead, sign it with the note "Signed for acknowledgement only, rebuttal to follow via email", and immediately send this email to HR and your manager:
                                        </p>
                                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-sm whitespace-pre-wrap font-mono text-gray-800 dark:text-gray-200">
                                            {rebuttalTemplate}
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>

                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-primary" />
                        Legal Truths About PIPs in India
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">•</span>
                            <span><strong className="text-gray-900 dark:text-white">PIP is NOT Termination:</strong> Placing you on a PIP does not legally give the company the right to bypass your statutory notice period. If they fire you after a PIP, they must still pay your notice pay and retrenchment severance (if applicable).</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">•</span>
                            <span><strong className="text-gray-900 dark:text-white">Refusing to sign:</strong> Refusing to sign a PIP can be legally classified as "insubordination", giving HR valid grounds to terminate you for misconduct. Always sign, but email a written rebuttal highlighting the unfair targets.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">•</span>
                            <span><strong className="text-gray-900 dark:text-white">Forced Resignation:</strong> HR often uses a PIP to say "Resign now and we will give you a good experience letter, otherwise you fail the PIP and get terminated." This is coercion. You have the right to demand a formal termination letter instead of resigning.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
