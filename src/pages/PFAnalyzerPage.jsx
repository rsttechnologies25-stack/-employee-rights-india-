import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Calculator, AlertTriangle, Info, CheckCircle, Scale, DollarSign, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function PFAnalyzerPage() {
    const [gross, setGross] = useState('');
    const [basic, setBasic] = useState('');

    const [results, setResults] = useState(null);
    const [scamAlert, setScamAlert] = useState(false);

    const calculatePF = () => {
        const grossAmt = parseFloat(gross) || 0;
        const basicAmt = parseFloat(basic) || 0;

        if (basicAmt <= 0) return;

        // Check for Vivekananda Vidyamandir Ruling violation (Basic < 50% of Gross without valid reasons)
        if (grossAmt > 0 && basicAmt < (grossAmt * 0.5)) {
            setScamAlert(true);
        } else {
            setScamAlert(false);
        }

        const employeePF = Math.round(basicAmt * 0.12);
        
        let pension = 0;
        let employerPF = 0;

        if (basicAmt > 15000) {
            // EPS is capped at 15,000
            pension = Math.round(15000 * 0.0833);
            employerPF = Math.round((basicAmt * 0.12) - pension);
        } else {
            pension = Math.round(basicAmt * 0.0833);
            employerPF = Math.round(basicAmt * 0.0367);
        }

        const totalMonthly = employeePF + employerPF + pension;

        setResults({
            employeePF,
            employerPF,
            pension,
            totalMonthly
        });
    };

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="PF & Pension Analyzer - Employee Rights India"
                description="Calculate your accurate Provident Fund (EPF) deductions, check your EPS pension split, and scan your CTC for illegal PF evasion by your employer."
                path="/tools/pf-analyzer"
            />
            
            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'PF Analyzer', path: '/tools/pf-analyzer' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <DollarSign className="w-10 h-10 text-primary" />
                        PF & Pension Analyzer
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Calculate your exact EPF contribution split, check your pension allocation, and instantly flag if your employer is illegally manipulating your Basic Salary to evade their PF obligations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
                    {/* Calculator Form */}
                    <div className="lg:col-span-2 bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 h-fit">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Calculator className="w-6 h-6 text-primary" />
                            Enter Salary Details
                        </h2>
                        
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                    Gross Monthly Salary (₹)
                                </label>
                                <input 
                                    type="number" 
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="e.g. 50000"
                                    value={gross}
                                    onChange={(e) => setGross(e.target.value)}
                                />
                                <p className="text-xs text-gray-500 mt-1">Total salary before any deductions.</p>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                    Basic Salary + DA (₹)
                                </label>
                                <input 
                                    type="number" 
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="e.g. 20000"
                                    value={basic}
                                    onChange={(e) => setBasic(e.target.value)}
                                />
                                <p className="text-xs text-gray-500 mt-1">Check your payslip for the "Basic" component.</p>
                            </div>

                            <button 
                                onClick={calculatePF}
                                disabled={!basic}
                                className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                Analyze PF Structure <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Results Area */}
                    <div className="lg:col-span-3 space-y-6">
                        {scamAlert && (
                            <div className="bg-red-50 dark:bg-red-950/40 border-l-4 border-red-500 p-5 rounded-r-xl shadow-sm">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-red-800 dark:text-red-300 text-lg">⚠️ Warning: Potential PF Evasion</h3>
                                        <p className="text-red-700 dark:text-red-200 text-sm mt-1">
                                            Your Basic Salary is less than 50% of your Gross Salary. 
                                        </p>
                                        <p className="text-red-700 dark:text-red-200 text-sm mt-2 font-medium">
                                            Under the landmark Supreme Court ruling (*Vivekananda Vidyamandir vs. RPFC, 2019*), employers cannot arbitrarily pack your salary with "special allowances" to keep your Basic Pay artificially low. This is a common tactic to evade paying their fair share of PF. Unless those allowances are tied to specific varying expenses (like overtime or actual travel), they must be included in your Basic for PF calculation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {results ? (
                            <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-gray-100">
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    Your Monthly EPF Breakdown
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                                        <div>
                                            <p className="font-semibold text-gray-800 dark:text-gray-200">Your Deduction (12%)</p>
                                            <p className="text-xs text-gray-500">Deducted from your salary</p>
                                        </div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">₹{results.employeePF.toLocaleString()}</p>
                                    </div>

                                    <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                                        <div>
                                            <p className="font-semibold text-gray-800 dark:text-gray-200">Employer EPF (3.67%*)</p>
                                            <p className="text-xs text-gray-500">Added to your EPF balance</p>
                                        </div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">₹{results.employerPF.toLocaleString()}</p>
                                    </div>

                                    <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                                        <div>
                                            <p className="font-semibold text-gray-800 dark:text-gray-200">Employer EPS (Pension 8.33%)</p>
                                            <p className="text-xs text-gray-500">Goes to govt pension scheme (Max ₹1,250)</p>
                                        </div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">₹{results.pension.toLocaleString()}</p>
                                    </div>

                                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                                        <div className="flex justify-between items-center bg-primary/10 p-4 rounded-xl">
                                            <p className="font-bold text-primary">Total Added to EPF Monthly</p>
                                            <p className="text-2xl font-black text-primary">₹{(results.employeePF + results.employerPF).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 p-8 text-center">
                                <div>
                                    <Info className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                    <p className="text-gray-500 dark:text-gray-400 font-medium">Enter your Gross and Basic salary to see your exact PF breakdown and check for legal compliance.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Important Rules Section */}
                <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-soft">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Scale className="w-7 h-7 text-primary" />
                        Crucial PF Rules You Should Know
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">1. The 12% Matching Rule</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                If you contribute 12% of your Basic, your employer <span className="font-bold">MUST</span> contribute 12% as well. However, the employer's 12% is split: 3.67% goes to your EPF, and 8.33% goes to the Employee Pension Scheme (EPS).
                            </p>
                        </div>
                        <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">2. The ₹15,000 Wage Ceiling</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                The government caps compulsory EPS contributions at a basic salary of ₹15,000. This means the maximum pension contribution your employer makes is ₹1,250/month (8.33% of 15,000). The rest of their 12% goes into your EPF.
                            </p>
                        </div>
                        <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">3. "Opting Out" is usually Illegal</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                If you work in a company with 20+ employees and your starting basic salary is under ₹15,000, PF enrollment is <span className="font-bold">mandatory by law</span>. You cannot "opt out" to get more in hand, nor can HR force you to.
                            </p>
                        </div>
                        <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">4. UAN is Yours, Not the Company's</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                Your Universal Account Number (UAN) is linked to you, not your employer. When you switch jobs, you simply give your new employer your existing UAN. They cannot create a new one to delay your transfers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
