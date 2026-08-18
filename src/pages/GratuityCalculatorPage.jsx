import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Calculator, AlertTriangle, Info, CheckCircle, Scale, Coins, ArrowRight, XCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function GratuityCalculatorPage() {
    const [basic, setBasic] = useState('');
    const [years, setYears] = useState('');
    const [months, setMonths] = useState('');

    const [results, setResults] = useState(null);

    const calculateGratuity = () => {
        const basicAmt = parseFloat(basic) || 0;
        const yrs = parseInt(years) || 0;
        const mths = parseInt(months) || 0;

        if (basicAmt <= 0) return;

        // Eligibility Logic: 4 years and 240 days (approx 8 months) is eligible
        let isEligible = false;
        if (yrs >= 5) {
            isEligible = true;
        } else if (yrs === 4 && mths >= 8) {
            isEligible = true;
        }

        // Calculation Logic: Service > 6 months rounds up to a full year
        let multiplierYears = yrs;
        if (mths > 6) {
            multiplierYears += 1;
        }

        // Gratuity Formula: (Basic + DA) * 15/26 * Years of Service
        const payout = isEligible ? Math.round(basicAmt * (15 / 26) * multiplierYears) : 0;

        setResults({
            isEligible,
            payout,
            multiplierYears,
            yrs,
            mths
        });
    };

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Gratuity Eligibility & Payout Calculator - Employee Rights India"
                description="Calculate your exact Gratuity payout in India. Check if you qualify under the 4 years and 240 days Supreme Court rule."
                path="/tools/gratuity-calculator"
            />
            
            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Gratuity Calculator', path: '/tools/gratuity-calculator' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <Coins className="w-10 h-10 text-primary" />
                        Gratuity Payout Calculator
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Find out if you are legally eligible for gratuity (even if you resigned before exactly 5 years) and calculate your exact statutory payout under the Payment of Gratuity Act, 1972.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
                    {/* Calculator Form */}
                    <div className="lg:col-span-2 bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 h-fit">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Calculator className="w-6 h-6 text-primary" />
                            Employment Details
                        </h2>
                        
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                    Last Drawn Basic + DA (₹)
                                </label>
                                <input 
                                    type="number" 
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="e.g. 35000"
                                    value={basic}
                                    onChange={(e) => setBasic(e.target.value)}
                                />
                                <p className="text-xs text-gray-500 mt-1">Do not include HRA, PF, or Special Allowances.</p>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                        Completed Years
                                    </label>
                                    <input 
                                        type="number" 
                                        className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="e.g. 4"
                                        value={years}
                                        onChange={(e) => setYears(e.target.value)}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                        Months
                                    </label>
                                    <input 
                                        type="number" 
                                        className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="e.g. 10"
                                        max="11"
                                        value={months}
                                        onChange={(e) => setMonths(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button 
                                onClick={calculateGratuity}
                                disabled={!basic || years === ''}
                                className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                Calculate Gratuity <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Results Area */}
                    <div className="lg:col-span-3 space-y-6">
                        {!results ? (
                            <div className="h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 p-8 text-center">
                                <div>
                                    <Info className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                    <p className="text-gray-500 dark:text-gray-400 font-medium">Enter your Basic Salary and tenure to check your Gratuity eligibility and payout amount.</p>
                                </div>
                            </div>
                        ) : results.isEligible ? (
                            <>
                                <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 p-6 rounded-2xl shadow-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                                        <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">You Are Eligible!</h3>
                                    </div>
                                    <p className="text-green-700 dark:text-green-200 text-sm ml-11">
                                        Because your tenure of {results.yrs} years and {results.mths} months legally qualifies for statutory gratuity payout.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                                        Estimated Gratuity Amount
                                    </h3>
                                    
                                    <div className="flex justify-between items-center bg-primary/10 dark:bg-primary/20 p-5 rounded-xl mb-4 border border-primary/20">
                                        <p className="font-bold text-primary dark:text-blue-400 text-lg">Total Payout</p>
                                        <p className="text-3xl font-black text-primary dark:text-blue-400">₹{results.payout.toLocaleString()}</p>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl text-sm text-gray-600 dark:text-gray-400">
                                        <p><span className="font-semibold text-gray-800 dark:text-gray-200">Formula Used:</span> Basic Salary × (15/26) × Years of Service</p>
                                        <p className="mt-2"><span className="font-semibold text-gray-800 dark:text-gray-200">Multiplier Used:</span> {results.multiplierYears} Years 
                                            {results.mths > 6 ? ' (Rounded up because months > 6)' : ' (Months <= 6 are ignored for the multiplier)'}
                                        </p>
                                    </div>
                                </div>
                                
                                {results.payout > 2000000 && (
                                    <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500 p-4 rounded-r-xl">
                                        <p className="text-yellow-800 dark:text-yellow-200 text-sm font-medium flex gap-2">
                                            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-yellow-600 dark:text-yellow-400" />
                                            Gratuity is tax-free only up to ₹20,00,000 (20 Lakhs). Any amount exceeding this limit will be subject to income tax under the "Salary" head.
                                        </p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 p-6 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                                    <h3 className="text-2xl font-bold text-red-800 dark:text-red-300">Not Eligible</h3>
                                </div>
                                <p className="text-red-700 dark:text-red-200 text-sm ml-11 mb-4">
                                    You have only completed {results.yrs} years and {results.mths} months. To qualify for gratuity, you must complete at least 4 years and 240 days (approx. 8 months) of continuous service with the same employer.
                                </p>
                                <div className="bg-white/60 dark:bg-gray-900/60 p-4 rounded-xl border border-red-100 dark:border-red-900/40">
                                    <p className="text-sm font-bold text-red-900 dark:text-red-300 mb-1">Are you being terminated?</p>
                                    <p className="text-sm text-red-800 dark:text-red-200">If the company is firing/laying you off before you reach the 5-year mark, you may not get Gratuity, but you are legally entitled to <a href="/tools/severance-calculator" className="underline font-bold">Retrenchment Severance Pay</a>.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Important Rules Section */}
                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-primary" />
                        Gratuity Legal Truths
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">1.</span>
                            <span><strong className="text-gray-900 dark:text-white">The "4 Years, 240 Days" Rule:</strong> HR departments often falsely claim you need exactly 5 full years to qualify. Under the Madras High Court ruling and Section 4 of the Gratuity Act, continuous service of 4 years and 240 days (approx. 4 years and 8 months) constitutes "5 years" for legal eligibility.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">2.</span>
                            <span><strong className="text-gray-900 dark:text-white">Rounding Up Multipliers:</strong> If you are eligible (e.g. 5 years service) and your months of service in the final year exceed 6 months (e.g. 5 years, 7 months), your payout multiplier is rounded up to the next full year (6 years).</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">3.</span>
                            <span><strong className="text-gray-900 dark:text-white">Payment Timeline:</strong> The employer is legally required to pay Gratuity within 30 days of your last working day. If delayed, they are legally liable to pay simple interest on the amount.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
