import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Calendar, AlertTriangle, CheckCircle, Scale, Baby, CalendarHeart, XCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function MaternityTrackerPage() {
    const [edd, setEdd] = useState('');
    const [daysWorked, setDaysWorked] = useState(true);
    const [childCount, setChildCount] = useState('first_second'); // 'first_second' or 'third_plus'

    const [results, setResults] = useState(null);

    const calculateMaternity = () => {
        if (!edd) return;
        
        const eddDate = new Date(edd);
        
        let isEligible = daysWorked;
        let totalWeeks = childCount === 'first_second' ? 26 : 12;
        let preNatalMax = childCount === 'first_second' ? 8 : 6;
        let postNatal = totalWeeks - preNatalMax;

        // Calculate earliest leave start date (preNatalMax weeks before EDD)
        const earliestStartDate = new Date(eddDate);
        earliestStartDate.setDate(earliestStartDate.getDate() - (preNatalMax * 7));

        // Calculate maximum end date (totalWeeks from earliest start date)
        const maxEndDate = new Date(earliestStartDate);
        maxEndDate.setDate(maxEndDate.getDate() + (totalWeeks * 7));

        setResults({
            isEligible,
            totalWeeks,
            preNatalMax,
            postNatal,
            earliestStartDate: earliestStartDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
            maxEndDate: maxEndDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
        });
    };

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Maternity Benefit (26-Week) Legal Tracker - Employee Rights India"
                description="Calculate your exact 26-week maternity leave timeline in India and verify your rights under the Maternity Benefit (Amendment) Act, 2017."
                path="/tools/maternity-tracker"
            />
            
            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Maternity Tracker', path: '/tools/maternity-tracker' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <Baby className="w-10 h-10 text-primary" />
                        Maternity Benefit Legal Tracker
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Verify your eligibility and calculate your exact paid leave timeline under the Maternity Benefit (Amendment) Act, 2017. Ensure your employer isn't shortchanging your statutory time off.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Calculator Form */}
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 h-fit">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <CalendarHeart className="w-6 h-6 text-primary" />
                            Leave Details
                        </h2>
                        
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Expected Date of Delivery (EDD)
                                </label>
                                <input 
                                    type="date" 
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    value={edd}
                                    onChange={(e) => setEdd(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Is this for your first or second child?
                                </label>
                                <select 
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    value={childCount}
                                    onChange={(e) => setChildCount(e.target.value)}
                                >
                                    <option value="first_second">Yes, this is my 1st or 2nd child</option>
                                    <option value="third_plus">No, this is my 3rd child (or beyond)</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                    Have you actually worked in this company for at least <span className="text-primary font-bold">80 days</span> in the 12 months immediately preceding your expected delivery date?
                                </label>
                                <div className="flex gap-3">
                                    <button 
                                        onClick={() => setDaysWorked(true)}
                                        className={`flex-1 py-2 rounded-lg font-medium transition-colors border ${daysWorked ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >
                                        Yes
                                    </button>
                                    <button 
                                        onClick={() => setDaysWorked(false)}
                                        className={`flex-1 py-2 rounded-lg font-medium transition-colors border ${!daysWorked ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>

                            <button 
                                onClick={calculateMaternity}
                                disabled={!edd}
                                className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                            >
                                Calculate Timeline
                            </button>
                        </div>
                    </div>

                    {/* Results Area */}
                    <div className="space-y-6">
                        {!results ? (
                            <div className="h-full min-h-[300px] flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 p-8 text-center">
                                <div>
                                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                    <p className="text-gray-500 dark:text-gray-400 font-medium">Enter your dates and details to generate your exact maternity timeline and rights.</p>
                                </div>
                            </div>
                        ) : !results.isEligible ? (
                            <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 p-6 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                                    <h3 className="text-2xl font-bold text-red-800 dark:text-red-300">Not Eligible for Statutory Pay</h3>
                                </div>
                                <p className="text-red-700 dark:text-red-200 text-sm mb-4">
                                    Under Section 5(2) of the Maternity Benefit Act, an employee must have worked in the establishment for a period of not less than <span className="font-bold">80 days</span> in the twelve months immediately preceding the expected delivery date to claim statutory paid maternity leave.
                                </p>
                                <p className="text-red-700 dark:text-red-300 text-sm font-bold">
                                    However, you still cannot be legally terminated for being pregnant.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 animate-fade-in">
                                    <div className="flex items-center gap-2 mb-4">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                            Fully Eligible ({results.totalWeeks} Weeks)
                                        </h3>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
                                            <p className="text-sm font-semibold text-primary mb-1">Max Pre-Natal</p>
                                            <p className="text-2xl font-black text-primary">{results.preNatalMax} Weeks</p>
                                        </div>
                                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-400 mb-1">Post-Natal</p>
                                            <p className="text-2xl font-black text-blue-700 dark:text-blue-500">{results.postNatal} Weeks</p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm">
                                        <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Estimated Timeline Constraints:</p>
                                        <div className="space-y-2">
                                            <p className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Earliest Allowed Start Date:</span>
                                                <span className="font-bold">{results.earliestStartDate}</span>
                                            </p>
                                            <p className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-2">
                                                <span className="text-gray-600 dark:text-gray-400">Leave End Date:</span>
                                                <span className="font-bold">{results.maxEndDate}</span>
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-3 italic">
                                            * Note: You do not have to start leave on the earliest date. Any unused pre-natal weeks simply carry over to your post-natal period, ensuring you get the full {results.totalWeeks} weeks total.
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Important Rights Section */}
                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-primary" />
                        Crucial Legal Protections
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">•</span>
                            <span><strong className="text-gray-900 dark:text-white">Protection from Firing:</strong> It is illegal for an employer to terminate you, issue notice of termination, or alter the conditions of your service to your disadvantage while you are on maternity leave (Section 12).</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">•</span>
                            <span><strong className="text-gray-900 dark:text-white">Mandatory Crèche Facility:</strong> If your company has 50 or more employees, they are legally required to provide a crèche facility. You are entitled to 4 visits a day to the crèche.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">•</span>
                            <span><strong className="text-gray-900 dark:text-white">Work From Home Right:</strong> Under Section 5(5), after your 26-week leave expires, you have the legal right to request "Work from Home" if the nature of your work permits it, subject to mutual agreement with the employer.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-primary">•</span>
                            <span><strong className="text-gray-900 dark:text-white">Medical Bonus:</strong> You are entitled to receive a medical bonus of ₹3,500 from your employer if no pre-natal confinement and post-natal care is provided by the employer free of charge.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
