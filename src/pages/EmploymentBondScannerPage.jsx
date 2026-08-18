import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Scale, AlertTriangle, CheckCircle, FileText, ShieldAlert, BookOpen, HelpCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function EmploymentBondScannerPage() {
    const [bondAmount, setBondAmount] = useState('');
    const [bondTenure, setBondTenure] = useState('2');
    const [monthsServed, setMonthsServed] = useState('');
    const [actualTrainingProvided, setActualTrainingProvided] = useState('none'); // 'none', 'internal', 'external_certified'
    const [hasNonCompete, setHasNonCompete] = useState(true);
    const [nonCompeteDuration, setNonCompeteDuration] = useState('12');
    const [results, setResults] = useState(null);

    const analyzeBond = () => {
        const amount = parseFloat(bondAmount) || 0;
        const tenure = parseFloat(bondTenure) || 1;
        const served = parseFloat(monthsServed) || 0;
        const totalBondMonths = tenure * 12;

        let bondLegality = '';
        let bondRisk = 'low'; // 'low', 'moderate', 'high'
        let legalGrounds = [];
        let nonCompeteStatus = '';

        // 1. Bond validity check under Section 74 of Indian Contract Act
        if (actualTrainingProvided === 'none' || actualTrainingProvided === 'internal') {
            bondRisk = 'low';
            bondLegality = 'Unenforceable Penalty (Void under Section 74)';
            legalGrounds.push(
                'Indian Courts only permit recovery of **actual, verifiable, out-of-pocket expenses** spent on specialized external training. Routine on-the-job training or internal induction cannot be monetized into a bond penalty.'
            );
            legalGrounds.push(
                'Under Section 74 of the Indian Contract Act, an employer cannot collect a "penalty" amount. They must prove in court exact financial damages suffered due to your departure.'
            );
        } else {
            // External certified training
            if (served >= totalBondMonths) {
                bondRisk = 'low';
                bondLegality = 'Bond Period Fully Served (No liability)';
                legalGrounds.push('You have already completed the required tenure specified in the service agreement.');
            } else {
                bondRisk = 'moderate';
                const remainingRatio = (totalBondMonths - served) / totalBondMonths;
                const estimatedProrated = Math.round(amount * remainingRatio);
                bondLegality = `Pro-rated Compensation Only (Max Est: ₹${estimatedProrated.toLocaleString('en-IN')})`;
                legalGrounds.push(
                    `Even with specialized external training, courts do not award the full penalty. If challenged, the employer is only entitled to reasonable pro-rated compensation for the remaining ${(totalBondMonths - served).toFixed(0)} months of unserved tenure.`
                );
            }
        }

        // 2. Non-compete clause analysis under Section 27
        if (hasNonCompete) {
            nonCompeteStatus = '100% Void & Unenforceable Post-Employment (Section 27)';
            legalGrounds.push(
                'Under **Section 27 of the Indian Contract Act, 1872**, any agreement restraining an individual from exercising a lawful profession, trade, or business is void. Post-termination non-compete clauses cannot be enforced against an employee in India.'
            );
        } else {
            nonCompeteStatus = 'No non-compete restrictions found.';
        }

        setResults({
            bondLegality,
            bondRisk,
            nonCompeteStatus,
            legalGrounds,
            served,
            totalBondMonths,
            amount
        });
    };

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Employment Bond & Non-Compete Validity Scanner India"
                description="Audit whether your company's employment bond, training agreement penalty, or non-compete clause is legally enforceable under Section 27 of the Indian Contract Act."
                path="/tools/employment-bond-scanner"
            />

            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Employment Bond Scanner', path: '/tools/employment-bond-scanner' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <Scale className="w-10 h-10 text-primary" />
                        Employment Bond & Non-Compete Scanner
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Did your employer force you to sign a ₹1L–₹5L service bond or a 1-year non-compete clause? Audit whether their threats are legally valid or completely void under Indian law.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Parameters */}
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-primary" />
                            Bond & Contract Details
                        </h2>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Bond Penalty Amount Demanded (₹)
                                </label>
                                <input 
                                    type="number"
                                    placeholder="e.g. 150000"
                                    value={bondAmount}
                                    onChange={(e) => setBondAmount(e.target.value)}
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Total Bond Tenure
                                    </label>
                                    <select 
                                        value={bondTenure}
                                        onChange={(e) => setBondTenure(e.target.value)}
                                        className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl"
                                    >
                                        <option value="1">1 Year (12 months)</option>
                                        <option value="1.5">1.5 Years (18 months)</option>
                                        <option value="2">2 Years (24 months)</option>
                                        <option value="3">3 Years (36 months)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Months Completed
                                    </label>
                                    <input 
                                        type="number"
                                        placeholder="e.g. 8"
                                        value={monthsServed}
                                        onChange={(e) => setMonthsServed(e.target.value)}
                                        className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Nature of Training Provided by Company
                                </label>
                                <select 
                                    value={actualTrainingProvided}
                                    onChange={(e) => setActualTrainingProvided(e.target.value)}
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                >
                                    <option value="none">No formal training (Put straight on billable work)</option>
                                    <option value="internal">Internal company induction / Senior shadowing</option>
                                    <option value="external_certified">Paid 3rd-party certification / Dedicated overseas program</option>
                                </select>
                            </div>

                            <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input 
                                        type="checkbox"
                                        checked={hasNonCompete}
                                        onChange={(e) => setHasNonCompete(e.target.checked)}
                                        className="w-5 h-5 rounded text-primary focus:ring-primary"
                                    />
                                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                        Agreement includes a Post-Employment Non-Compete Clause
                                    </span>
                                </label>

                                {hasNonCompete && (
                                    <div className="mt-3 pl-8">
                                        <label className="block text-xs font-semibold text-gray-500 mb-1">
                                            Restricted Period After Leaving
                                        </label>
                                        <select 
                                            value={nonCompeteDuration}
                                            onChange={(e) => setNonCompeteDuration(e.target.value)}
                                            className="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                                        >
                                            <option value="6">6 Months</option>
                                            <option value="12">1 Year</option>
                                            <option value="24">2 Years</option>
                                        </select>
                                    </div>
                                )}
                            </div>

                            <button 
                                onClick={analyzeBond}
                                className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-4"
                            >
                                <Scale className="w-5 h-5" />
                                Audit Contract Enforceability
                            </button>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-6">
                        {!results ? (
                            <div className="h-full min-h-[350px] flex items-center justify-center bg-gray-100 dark:bg-gray-800/40 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 p-8 text-center">
                                <div>
                                    <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                    <p className="text-gray-600 dark:text-gray-400 font-medium">Enter your bond and clause details to see their legal enforceability in court.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className={`p-6 rounded-2xl border ${
                                    results.bondRisk === 'low' ? 'bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800' :
                                    results.bondRisk === 'moderate' ? 'bg-yellow-50 border-yellow-200 dark:bg-yellow-950/30 dark:border-yellow-800' :
                                    'bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800'
                                }`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        {results.bondRisk === 'low' ? <CheckCircle className="w-7 h-7 text-green-600" /> : <AlertTriangle className="w-7 h-7 text-yellow-600" />}
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            Bond Verdict: {results.bondLegality}
                                        </h3>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Non-Compete Status: <span className="text-primary font-bold">{results.nonCompeteStatus}</span>
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft">
                                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-primary" />
                                        Legal Reasoning & Supreme Court Precedents
                                    </h4>
                                    <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                                        {results.legalGrounds.map((ground, idx) => (
                                            <li key={idx} className="flex gap-2" dangerouslySetInnerHTML={{ __html: `• ${ground}` }}></li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 text-xs text-gray-800 dark:text-gray-200">
                                    💡 <strong>Key Precedent:</strong> In <em>Percept D'Mark (India) v. Zaheer Khan (2006)</em>, the Supreme Court ruled that under Section 27, any covenant operating after the termination of employment is void and unenforceable.
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Practical Survival Checklist */}
                <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <ShieldAlert className="w-7 h-7 text-primary" />
                        What if HR Threatens with Legal Action or Withholds Documents?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                            <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">1. Withholding Relieving Letter / Experience Certificate</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Withholding your service certificate over an unproven bond amount is an illegal trade practice. Under state Shops & Establishments Acts (e.g. Delhi, Maharashtra, Karnataka), employers must issue service certificates upon separation.
                            </p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                            <h4 className="font-bold text-yellow-600 dark:text-yellow-400 mb-2">2. Empty Legal Notices & Cheque Recovery</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Companies rarely file civil suits because the legal filing fee and advocate cost far exceed the recovery amount, and the burden of proving actual training bills lies on them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
