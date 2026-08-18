import React from 'react';
import { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { Calculator, AlertTriangle, Info, CheckCircle, Scale, Home, ArrowRight, IndianRupee } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function HRACalculatorPage() {
    const [basic, setBasic] = useState('');
    const [hraReceived, setHraReceived] = useState('');
    const [rentPaid, setRentPaid] = useState('');
    const [isMetro, setIsMetro] = useState(true);

    const [results, setResults] = useState(null);

    const calculateHRA = () => {
        const basicAmt = parseFloat(basic) || 0;
        const hraAmt = parseFloat(hraReceived) || 0;
        const rentAmt = parseFloat(rentPaid) || 0;

        if (basicAmt <= 0) return;

        // Rule 1: Actual HRA Received
        const rule1 = hraAmt;
        
        // Rule 2: 50% (Metro) or 40% (Non-Metro) of Basic Salary
        const rule2 = isMetro ? (basicAmt * 0.5) : (basicAmt * 0.4);
        
        // Rule 3: Actual Rent Paid minus 10% of Basic Salary
        // If rent is less than 10% of basic, this becomes negative, so we floor it at 0
        const rule3 = Math.max(0, rentAmt - (basicAmt * 0.1));

        // Exempt HRA is the minimum of the three rules
        const exemptHRA = Math.min(rule1, rule2, rule3);
        
        // Taxable HRA is what remains
        const taxableHRA = Math.max(0, hraAmt - exemptHRA);

        setResults({
            rule1,
            rule2,
            rule3,
            exemptHRA,
            taxableHRA
        });
    };

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="HRA Tax Exemption Calculator - Income Tax Rule 2A India"
                description="Calculate your exact House Rent Allowance (HRA) tax exemption using the least of 3 rule for metro and non-metro cities under the Old Tax Regime."
                path="/tools/hra-calculator"
            />
            
            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'HRA Optimizer', path: '/tools/hra-calculator' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <Home className="w-10 h-10 text-primary" />
                        HRA Tax Exemption Optimizer
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Calculate the exact tax-free portion of your House Rent Allowance (HRA) using the Income Tax Department's strict "Least of 3" mathematical rule (Section 10(13A)).
                    </p>
                </div>

                {/* CRITICAL WARNING FOR NEW TAX REGIME */}
                <div className="bg-red-50 dark:bg-red-950/40 border-l-4 border-red-500 p-5 rounded-r-xl mb-8 shadow-sm">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-red-800 dark:text-red-300 text-lg">Important: The New Tax Regime (FY 2024-25 onwards)</h3>
                            <p className="text-red-700 dark:text-red-200 text-sm mt-1 font-medium">
                                If you have opted for the <span className="font-bold">New Tax Regime</span>, you CANNOT claim any HRA exemption. The entire HRA component you receive from your employer will be 100% taxable. This calculator is only applicable if you opt for the <span className="font-bold">Old Tax Regime</span>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
                    {/* Calculator Form */}
                    <div className="lg:col-span-2 bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 h-fit">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Calculator className="w-6 h-6 text-primary" />
                            Monthly Details
                        </h2>
                        
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                    Monthly Basic Salary + DA (₹)
                                </label>
                                <input 
                                    type="number" 
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="e.g. 40000"
                                    value={basic}
                                    onChange={(e) => setBasic(e.target.value)}
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                    Monthly HRA Received (₹)
                                </label>
                                <input 
                                    type="number" 
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="e.g. 15000"
                                    value={hraReceived}
                                    onChange={(e) => setHraReceived(e.target.value)}
                                />
                                <p className="text-xs text-gray-500 mt-1">Found on your payslip.</p>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                    Actual Monthly Rent Paid (₹)
                                </label>
                                <input 
                                    type="number" 
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="e.g. 18000"
                                    value={rentPaid}
                                    onChange={(e) => setRentPaid(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    City Type
                                </label>
                                <div className="flex gap-3">
                                    <button 
                                        onClick={() => setIsMetro(true)}
                                        className={`flex-1 py-2 rounded-lg font-medium transition-colors border ${isMetro ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >
                                        Metro (50%)
                                    </button>
                                    <button 
                                        onClick={() => setIsMetro(false)}
                                        className={`flex-1 py-2 rounded-lg font-medium transition-colors border ${!isMetro ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >
                                        Non-Metro (40%)
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Metros: Delhi, Mumbai, Kolkata, Chennai only (Bangalore & Hyderabad are Non-Metros for HRA).</p>
                            </div>

                            <button 
                                onClick={calculateHRA}
                                disabled={!basic || !hraReceived || !rentPaid}
                                className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                            >
                                Calculate Exemption <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Results Area */}
                    <div className="lg:col-span-3 space-y-6">
                        {!results ? (
                            <div className="h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 p-8 text-center">
                                <div>
                                    <Info className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                    <p className="text-gray-500 dark:text-gray-400 font-medium">Enter your salary and rent details to see exactly how much of your HRA is tax-free.</p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 animate-fade-in">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-gray-100">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                        Your Exemption Analysis
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                                            <p className="text-sm font-semibold text-green-800 dark:text-green-400 mb-1">Tax-Free (Exempt) HRA</p>
                                            <p className="text-2xl font-black text-green-700 dark:text-green-500">₹{results.exemptHRA.toLocaleString()}</p>
                                            <p className="text-xs text-green-700 mt-1">Deducted from taxable income</p>
                                        </div>
                                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                                            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-1">Taxable HRA</p>
                                            <p className="text-2xl font-black text-red-700 dark:text-red-500">₹{results.taxableHRA.toLocaleString()}</p>
                                            <p className="text-xs text-red-700 mt-1">Added to your taxable salary</p>
                                        </div>
                                    </div>

                                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">
                                        The "Least of 3" Rule Breakdown:
                                    </h4>
                                    
                                    <div className="space-y-3 text-sm">
                                        <div className={`p-3 rounded-lg flex justify-between items-center ${results.exemptHRA === results.rule1 ? 'bg-primary/10 border-l-4 border-primary font-medium' : 'bg-gray-50 dark:bg-gray-900'}`}>
                                            <span className="text-gray-700 dark:text-gray-300">1. Actual HRA Received from Employer</span>
                                            <span className="text-gray-900 dark:text-white">₹{results.rule1.toLocaleString()}</span>
                                        </div>
                                        
                                        <div className={`p-3 rounded-lg flex justify-between items-center ${results.exemptHRA === results.rule2 ? 'bg-primary/10 border-l-4 border-primary font-medium' : 'bg-gray-50 dark:bg-gray-900'}`}>
                                            <span className="text-gray-700 dark:text-gray-300">2. {isMetro ? '50%' : '40%'} of Basic Salary</span>
                                            <span className="text-gray-900 dark:text-white">₹{results.rule2.toLocaleString()}</span>
                                        </div>
                                        
                                        <div className={`p-3 rounded-lg flex justify-between items-center ${results.exemptHRA === results.rule3 ? 'bg-primary/10 border-l-4 border-primary font-medium' : 'bg-gray-50 dark:bg-gray-900'}`}>
                                            <span className="text-gray-700 dark:text-gray-300">3. Actual Rent Paid minus 10% of Basic</span>
                                            <span className="text-gray-900 dark:text-white">₹{results.rule3.toLocaleString()}</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-3 text-center">
                                        * The Income Tax Department grants exemption on the <span className="font-bold text-gray-700 dark:text-gray-300">lowest</span> of the three values above (highlighted).
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-primary" />
                        Crucial Rules for Claiming HRA
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">•</span>
                            <span><strong className="text-gray-900 dark:text-white">PAN Card of Landlord:</strong> If your annual rent exceeds ₹1,00,000 (i.e., more than ₹8,333 per month), it is mandatory to provide the PAN card of your landlord to your employer to claim the exemption.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">•</span>
                            <span><strong className="text-gray-900 dark:text-white">Paying Rent to Parents:</strong> You can legally pay rent to your parents and claim HRA, provided the house is owned by them, and they declare the rental income in their own Income Tax Returns. You cannot pay rent to your spouse.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">•</span>
                            <span><strong className="text-gray-900 dark:text-white">Bengaluru is NOT a Metro for HRA:</strong> Under Income Tax rules, only Delhi, Mumbai, Kolkata, and Chennai qualify for the 50% basic deduction. Major IT hubs like Bengaluru, Hyderabad, and Pune fall under the 40% rule.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
