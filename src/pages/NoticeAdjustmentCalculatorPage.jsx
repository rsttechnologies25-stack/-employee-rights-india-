import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Calendar, Calculator, CheckCircle, AlertTriangle, Copy, Check, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function NoticeAdjustmentCalculatorPage() {
    const [noticeDaysRequired, setNoticeDaysRequired] = useState('90');
    const [noticeDaysServing, setNoticeDaysServing] = useState('30');
    const [earnedLeaveBalance, setEarnedLeaveBalance] = useState('18');
    const [monthlyBasic, setMonthlyBasic] = useState('40000');
    const [monthlyGross, setMonthlyGross] = useState('80000');
    const [copied, setCopied] = useState(false);

    const req = parseFloat(noticeDaysRequired) || 0;
    const serving = parseFloat(noticeDaysServing) || 0;
    const leaves = parseFloat(earnedLeaveBalance) || 0;
    const basic = parseFloat(monthlyBasic) || 0;
    const gross = parseFloat(monthlyGross) || 0;

    // Calculations
    const rawShortfall = Math.max(0, req - serving);
    const adjustedShortfall = Math.max(0, rawShortfall - leaves);
    const leavesAdjusted = Math.min(rawShortfall, leaves);
    const remainingUnadjustedLeaves = Math.max(0, leaves - rawShortfall);

    const perDayBasic = basic / 30;
    const perDayGross = gross / 30;

    const buyoutAtBasic = Math.round(adjustedShortfall * perDayBasic);
    const buyoutAtGross = Math.round(adjustedShortfall * perDayGross);
    const leaveEncashmentDues = Math.round(remainingUnadjustedLeaves * perDayBasic);
    const savingsFromLeaveAdjustment = Math.round(leavesAdjusted * perDayBasic);

    const emailTemplate = `Subject: Formal Request for Notice Period Adjustment against Accrued Earned Leaves - [Your Employee ID]

Dear HR Team / [Manager Name],

I have formally tendered my resignation on [Resignation Date], with an agreed last working day of [Last Working Date], completing ${serving} days of active notice period against the stipulated ${req} days.

As per company records and my official leave balance:
- Total Notice Required: ${req} days
- Notice Served: ${serving} days
- Notice Shortfall: ${rawShortfall} days
- Accumulated Earned / Privilege Leave (EL/PL) Balance: ${leaves} days
- Net Shortfall after Statutory Leave Offset: ${adjustedShortfall} days

Under the applicable State Shops and Establishments Act and prevailing standard labour practices, accrued Earned Leaves are statutory earned rights and ought to be adjusted against the notice period shortfall. 

Therefore, I request the company to adjust ${leavesAdjusted} days of my earned leave against the notice shortfall, reducing my payable notice buyout to exactly ${adjustedShortfall} days, computed on the basic wage component (₹${buyoutAtBasic.toLocaleString('en-IN')}).

Please adjust this in my Full & Final (F&F) settlement statement accordingly.

Warm regards,
[Your Full Name]
[Your Employee ID]
[Your Contact Number]`;

    const handleCopy = () => {
        navigator.clipboard.writeText(emailTemplate);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Notice Period Shortfall & Earned Leave Adjustment Calculator India"
                description="Calculate net notice buyout recovery by offsetting accumulated Earned Leaves against your notice shortfall. Avoid illegal gross salary deductions."
                path="/tools/notice-adjustment-calculator"
            />

            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Notice Adjustment Calculator', path: '/tools/notice-adjustment-calculator' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <Calendar className="w-10 h-10 text-primary" />
                        Notice Period & Leave Adjustment Calculator
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Leaving before your full 60–90 days notice? Calculate your exact net notice shortfall by adjusting accumulated Earned Leaves and avoid paying illegal Gross salary deductions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Inputs */}
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Calculator className="w-6 h-6 text-primary" />
                            Notice & Salary Inputs
                        </h2>

                        <div className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Required Notice (Days)
                                    </label>
                                    <select 
                                        value={noticeDaysRequired} 
                                        onChange={(e) => setNoticeDaysRequired(e.target.value)}
                                        className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl"
                                    >
                                        <option value="30">30 Days (1 Month)</option>
                                        <option value="60">60 Days (2 Months)</option>
                                        <option value="90">90 Days (3 Months)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Days Serving
                                    </label>
                                    <input 
                                        type="number"
                                        value={noticeDaysServing}
                                        onChange={(e) => setNoticeDaysServing(e.target.value)}
                                        className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Accrued Earned/Privilege Leaves (EL/PL Balance)
                                </label>
                                <input 
                                    type="number"
                                    value={earnedLeaveBalance}
                                    onChange={(e) => setEarnedLeaveBalance(e.target.value)}
                                    className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary"
                                    placeholder="e.g. 15"
                                />
                                <p className="text-xs text-gray-500 mt-1">Check your HR portal leave balance.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Monthly Basic Salary (₹)
                                    </label>
                                    <input 
                                        type="number"
                                        value={monthlyBasic}
                                        onChange={(e) => setMonthlyBasic(e.target.value)}
                                        className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Monthly Gross CTC (₹)
                                    </label>
                                    <input 
                                        type="number"
                                        value={monthlyGross}
                                        onChange={(e) => setMonthlyGross(e.target.value)}
                                        className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary Result Card */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 rounded-2xl border border-primary/20 shadow-soft">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                                Settlement Breakdown
                            </h3>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="p-3 bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
                                    <p className="text-xs text-gray-500 uppercase font-bold">Gross Shortfall</p>
                                    <p className="text-2xl font-extrabold text-red-600">{rawShortfall} Days</p>
                                </div>
                                <div className="p-3 bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
                                    <p className="text-xs text-gray-500 uppercase font-bold">Net Shortfall to Pay</p>
                                    <p className="text-2xl font-extrabold text-green-600">{adjustedShortfall} Days</p>
                                </div>
                            </div>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-800">
                                    <span className="text-gray-600 dark:text-gray-400">Leaves Adjusted:</span>
                                    <span className="font-bold text-gray-900 dark:text-white">{leavesAdjusted} Days</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-800">
                                    <span className="text-gray-600 dark:text-gray-400">Money Saved via Leave Offset:</span>
                                    <span className="font-bold text-green-600">₹{savingsFromLeaveAdjustment.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-800">
                                    <span className="text-gray-600 dark:text-gray-400">Buyout on Basic Salary (Legal Standard):</span>
                                    <span className="font-extrabold text-primary text-base">₹{buyoutAtBasic.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-gray-600 dark:text-gray-400">If HR Demands Gross CTC (Aggressive):</span>
                                    <span className="font-semibold text-gray-500">₹{buyoutAtGross.toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                        </div>

                        {/* GST Warning */}
                        <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-900 dark:text-amber-200 flex gap-3 items-start">
                            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                                <strong>GST Notice:</strong> Under CBIC Circular No. 178/10/2022-GST, notice pay recovery is a toll/compensation and <strong>NOT subject to 18% GST</strong>. If HR adds 18% GST to your buyout amount, it is an illegal recovery.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Email Draft Box */}
                <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <Mail className="w-5 h-5 text-primary" />
                            Generated HR Adjustment Request Email
                        </h3>
                        <button 
                            onClick={handleCopy}
                            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold flex items-center gap-1.5 hover:bg-primary/90 transition-all"
                        >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copied!' : 'Copy Template'}
                        </button>
                    </div>

                    <pre className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-xs sm:text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-sans">
                        {emailTemplate}
                    </pre>
                </div>
            </div>
        </div>
    );
}
