import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Gift, AlertTriangle, CheckCircle, Scale, Coins, Briefcase } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function BonusAnalyzerPage() {
    const [bonusType, setBonusType] = useState('statutory'); // statutory or variable
    const [basicSalary, setBasicSalary] = useState('');
    const [daysWorked, setDaysWorked] = useState('');
    const [performancePeriodCompleted, setPerformancePeriodCompleted] = useState(true);
    const [resignationDate, setResignationDate] = useState('after'); // after or before payout

    const [results, setResults] = useState(null);

    const analyzeBonus = () => {
        let isEligible = false;
        let rightsMessage = '';
        let legalBacking = '';
        let severity = 'success'; // success, warning, error

        if (bonusType === 'statutory') {
            const basic = parseInt(basicSalary) || 0;
            const days = parseInt(daysWorked) || 0;

            if (basic > 21000) {
                isEligible = false;
                severity = 'error';
                rightsMessage = 'You are not covered under the Payment of Bonus Act, 1965.';
                legalBacking = 'The Act only covers employees earning a Basic Salary + DA of ₹21,000 or less per month. Your bonus (if any) is purely contractual based on your employment agreement.';
            } else if (days < 30) {
                isEligible = false;
                severity = 'error';
                rightsMessage = 'You do not meet the minimum working days criteria.';
                legalBacking = 'Section 8 of the Payment of Bonus Act mandates that an employee must work for at least 30 working days in an accounting year to be eligible for a statutory bonus.';
            } else {
                isEligible = true;
                severity = 'success';
                rightsMessage = 'You are legally entitled to your Statutory Bonus!';
                legalBacking = 'Under the Payment of Bonus Act, 1965, if you worked for at least 30 days in the accounting year and your basic salary is ≤ ₹21,000, the employer MUST pay your pro-rated bonus (minimum 8.33%). Resigning does NOT forfeit this right, even if HR says otherwise.';
            }
        } else {
            // Variable Pay / Performance Bonus
            if (!performancePeriodCompleted) {
                isEligible = false;
                severity = 'error';
                rightsMessage = 'You likely forfeit the variable pay.';
                legalBacking = 'Since you did not complete the performance appraisal period (e.g., Q1, or the financial year), you have not legally "earned" the variable component yet. Employers are generally allowed to withhold it.';
            } else if (resignationDate === 'before') {
                isEligible = false;
                severity = 'warning';
                rightsMessage = 'Your employer will likely use the "Active Employee" clause to deny payout.';
                legalBacking = 'Many contracts state you must be on the rolls on the payout date. While Indian courts have sometimes ruled that earned performance pay cannot be withheld, fighting an "active employee" clause for non-statutory bonuses requires formal legal notice and is heavily dependent on your specific contract wording.';
            } else {
                isEligible = true;
                severity = 'success';
                rightsMessage = 'You have a strong legal claim to your Variable Pay.';
                legalBacking = 'You completed the performance period AND were employed on the payout date (or resigned after). If they withhold it because you are in your notice period, this is illegal. You have fulfilled the criteria and earned those wages.';
            }
        }

        setResults({ isEligible, rightsMessage, legalBacking, severity });
    };

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Bonus & Variable Pay Resignation Analyzer India"
                description="Find out if your employer is illegally withholding your statutory bonus or variable pay during your notice period. Know your rights under the Payment of Bonus Act."
                path="/tools/bonus-analyzer"
            />
            
            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Bonus Analyzer', path: '/tools/bonus-analyzer' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <Gift className="w-10 h-10 text-primary" />
                        Bonus & Variable Pay Analyzer
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        HR often claims you forfeit your annual bonus or variable pay if you resign. Use this tool to instantly check if their claim is legally enforceable or an illegal wage deduction.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Input Form */}
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 h-fit">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Coins className="w-6 h-6 text-primary" />
                            Bonus Parameters
                        </h2>
                        
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Type of Bonus
                                </label>
                                <select 
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    value={bonusType}
                                    onChange={(e) => {
                                        setBonusType(e.target.value);
                                        setResults(null);
                                    }}
                                >
                                    <option value="statutory">Statutory Bonus (Mandatory by Gov)</option>
                                    <option value="variable">Performance Bonus / Variable Pay (Contractual)</option>
                                </select>
                            </div>

                            {bonusType === 'statutory' ? (
                                <>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            Your Basic Salary + DA (Monthly)
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-3.5 text-gray-500">₹</span>
                                            <input 
                                                type="number" 
                                                className="w-full p-3 pl-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                value={basicSalary}
                                                onChange={(e) => setBasicSalary(e.target.value)}
                                                placeholder="e.g., 18000"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            Days Worked in Accounting Year
                                        </label>
                                        <input 
                                            type="number" 
                                            className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            value={daysWorked}
                                            onChange={(e) => setDaysWorked(e.target.value)}
                                            placeholder="e.g., 120"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                            Did you fully complete the performance period (e.g., FY23-24)?
                                        </label>
                                        <div className="flex gap-3">
                                            <button 
                                                onClick={() => setPerformancePeriodCompleted(true)}
                                                className={`flex-1 py-2 rounded-lg font-medium transition-colors border ${performancePeriodCompleted ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'}`}
                                            >
                                                Yes
                                            </button>
                                            <button 
                                                onClick={() => setPerformancePeriodCompleted(false)}
                                                className={`flex-1 py-2 rounded-lg font-medium transition-colors border ${!performancePeriodCompleted ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'}`}
                                            >
                                                No
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                            When did you resign relative to the company's official bonus payout date?
                                        </label>
                                        <div className="flex gap-3">
                                            <button 
                                                onClick={() => setResignationDate('after')}
                                                className={`flex-1 py-2 rounded-lg font-medium transition-colors border ${resignationDate === 'after' ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'}`}
                                            >
                                                Resigned AFTER Payout Date
                                            </button>
                                            <button 
                                                onClick={() => setResignationDate('before')}
                                                className={`flex-1 py-2 rounded-lg font-medium transition-colors border ${resignationDate === 'before' ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'}`}
                                            >
                                                Resigned BEFORE Payout Date
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}

                            <button 
                                onClick={analyzeBonus}
                                className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-2"
                            >
                                Analyze My Rights
                            </button>
                        </div>
                    </div>

                    {/* Results Area */}
                    <div className="space-y-6">
                        {!results ? (
                            <div className="h-full min-h-[300px] flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 p-8 text-center">
                                <div>
                                    <Scale className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                    <p className="text-gray-500 dark:text-gray-400 font-medium">Configure your bonus parameters to check if HR's denial is legally valid.</p>
                                </div>
                            </div>
                        ) : (
                            <div className={`p-6 rounded-2xl shadow-sm border animate-fade-in ${
                                results.severity === 'success' ? 'bg-green-50 border-green-200' : 
                                results.severity === 'warning' ? 'bg-yellow-50 border-yellow-200' : 
                                'bg-red-50 border-red-200'
                            }`}>
                                <div className="flex items-center gap-3 mb-4">
                                    {results.severity === 'success' ? <CheckCircle className="w-8 h-8 text-green-600" /> : 
                                     results.severity === 'warning' ? <AlertTriangle className="w-8 h-8 text-yellow-600" /> : 
                                     <AlertTriangle className="w-8 h-8 text-red-600" />}
                                    <h3 className={`text-2xl font-bold ${
                                        results.severity === 'success' ? 'text-green-800' : 
                                        results.severity === 'warning' ? 'text-yellow-800' : 
                                        'text-red-800'
                                    }`}>
                                        {results.rightsMessage}
                                    </h3>
                                </div>
                                <div className="bg-white/80 dark:bg-gray-900/50 p-5 rounded-xl border border-black/5 mt-4">
                                    <p className={`font-medium ${
                                        results.severity === 'success' ? 'text-green-900 dark:text-green-100' : 
                                        results.severity === 'warning' ? 'text-yellow-900 dark:text-yellow-100' : 
                                        'text-red-900 dark:text-red-100'
                                    }`}>
                                        {results.legalBacking}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Important Legal Notes */}
                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-primary" />
                        The "Active Employee" Trap
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Many private companies insert a clause stating: <span className="font-bold italic">"You must be an active employee and not serving a notice period on the date of bonus disbursement."</span>
                    </p>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
                        <li><strong className="text-gray-900 dark:text-white">For Statutory Bonuses:</strong> This clause is <span className="text-red-600 font-bold">100% ILLEGAL</span> and void. You cannot contract out of a statutory right. If you worked 30 days and earn under ₹21k basic, you get paid. Period.</li>
                        <li><strong className="text-gray-900 dark:text-white">For Variable/Performance Pay:</strong> Courts are divided. However, if you completed the performance period (e.g., you worked all 12 months of the year) and achieved the targets, withholding earned wages simply because you resigned later is often viewed as an unfair labor practice.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
