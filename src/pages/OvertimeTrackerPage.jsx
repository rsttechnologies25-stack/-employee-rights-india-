import { useState, useEffect } from 'react';
import { Clock, Plus, Trash2, Printer, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import { getAllStates } from '../data/stateLawsData';

const trackerFaqs = [
    {
        question: "Is overtime pay mandatory for IT sector/white-collar employees?",
        answer: "Yes, under most state Shops & Establishments Acts, IT and commercial establishment employees are entitled to overtime pay if they work beyond 48 hours in a week or 8-9 hours in a day. Although IT companies often try to bypass this, the legal right still exists unless you are in a high-level managerial role with firing authority."
    },
    {
        question: "How is the hourly overtime rate calculated in India?",
        answer: "Overtime must be paid at double (2x) the ordinary rate of wages. The ordinary hourly rate is computed as: (Monthly Basic Salary + DA) / (26 days * 8 hours). For example, if your ordinary hourly rate is ₹100, your overtime hourly rate must be ₹200."
    },
    {
        question: "Can an employer replace overtime pay with compensatory offs?",
        answer: "Legally, compensatory off (comp-off) is not a direct substitute for overtime cash pay under the law. You are entitled to 2x wages. However, if company policies provide comp-offs and you choose to accept them instead of cash, it is generally accepted in practice, but they cannot force you to work overtime without any compensation."
    }
];

export default function OvertimeTrackerPage() {
    const states = getAllStates();
    const [selectedStateSlug, setSelectedStateSlug] = useState('karnataka');
    const [logs, setLogs] = useState([]);
    
    // Form States
    const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
    const [clockIn, setClockIn] = useState('09:00');
    const [clockOut, setClockOut] = useState('18:00');
    const [breakMin, setBreakMin] = useState('60');
    const [hourlyWage, setHourlyWage] = useState('150');

    const stateData = states.find(s => s.slug === selectedStateSlug) || states[0];
    // Find daily limit: default to 9 hours for karnataka/etc, or 8 for Delhi/TN
    const standardLimit = stateData.maxWorkingHours.includes('8') ? 8 : 9;

    // Load logs on mount
    useEffect(() => {
        const stored = localStorage.getItem('overtime_tracker_logs');
        if (stored) {
            try {
                setLogs(JSON.parse(stored));
            } catch {
                setLogs([]);
            }
        }
    }, []);

    // Save logs on change
    const saveLogs = (newLogs) => {
        setLogs(newLogs);
        localStorage.setItem('overtime_tracker_logs', JSON.stringify(newLogs));
    };

    // Calculate hours for a shift
    const calculateHours = (inStr, outStr, breakMins) => {
        const [inH, inM] = inStr.split(':').map(Number);
        const [outH, outM] = outStr.split(':').map(Number);
        
        let diffMs = (outH * 60 + outM) - (inH * 60 + inM);
        if (diffMs < 0) diffMs += 24 * 60; // Handle overnight shifts
        
        const totalWorkMin = diffMs - parseInt(breakMins || 0);
        return Math.max(0, parseFloat((totalWorkMin / 60).toFixed(2)));
    };

    const handleAddLog = (e) => {
        e.preventDefault();
        
        const hoursWorked = calculateHours(clockIn, clockOut, breakMin);
        const otHours = Math.max(0, parseFloat((hoursWorked - standardLimit).toFixed(2)));
        const rate = parseFloat(hourlyWage || 150);
        const otEarnings = Math.round(otHours * (rate * 2)); // 2x double rate

        const newLog = {
            id: Date.now(),
            date,
            clockIn,
            clockOut,
            breakMin: parseInt(breakMin || 0),
            hoursWorked,
            otHours,
            otEarnings,
            hourlyWage: rate,
            stateName: stateData.name
        };

        const updated = [newLog, ...logs].sort((a, b) => new Date(b.date) - new Date(a.date));
        saveLogs(updated);
    };

    const handleDeleteLog = (id) => {
        const updated = logs.filter(l => l.id !== id);
        saveLogs(updated);
    };

    const handleClearLogs = () => {
        if (window.confirm('Are you sure you want to clear all logged shifts? This cannot be undone.')) {
            saveLogs([]);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    // Computations for summaries
    const totalRegularHours = logs.reduce((sum, l) => sum + (l.hoursWorked - l.otHours), 0).toFixed(1);
    const totalOtHours = logs.reduce((sum, l) => sum + l.otHours, 0).toFixed(1);
    const totalOtEarnings = logs.reduce((sum, l) => sum + l.otEarnings, 0);

    const relatedLinks = [
        { title: 'Working Hours & OT', subtitle: 'Browse maximum working hour acts', path: '/working-hours' },
        { title: 'Minimum Wage Checker', subtitle: 'Check compliance for your sector', path: '/tools/minimum-wage-checker' },
        { title: 'Salary Calculator', subtitle: 'Run detailed calculations', path: '/salary-calculator' },
        { title: 'How to File Complaint', subtitle: 'Report unpaid overtime', path: '/complaint-guide' }
    ];

    return (
        <div>
            <SEOHead path="/tools/overtime-tracker" />

            <PageHero
                title="Overtime & Shift Hours Tracker"
                subtitle="Track daily work logs, calculate shift lengths, determine overtime hours, and estimate double-rate earnings."
                icon={Clock}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen print:bg-white print:p-0">
                <div className="max-w-6xl mx-auto print:max-w-full">
                    <Breadcrumb items={[
                        { label: 'Tools & Calculators', path: '/tools' },
                        { label: 'Overtime Tracker', path: '/tools/overtime-tracker' }
                    ]} />

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 print:grid-cols-1">
                        
                        {/* ── LEFT: ADD LOG FORM ── */}
                        <div className="lg:col-span-4 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 print:hidden">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-5 flex items-center gap-2">
                                📅 Log Daily Shift
                            </h2>

                            <form onSubmit={handleAddLog} className="space-y-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Date</label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                        className="px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Clock In</label>
                                        <input
                                            type="time"
                                            value={clockIn}
                                            onChange={(e) => setClockIn(e.target.value)}
                                            required
                                            className="px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Clock Out</label>
                                        <input
                                            type="time"
                                            value={clockOut}
                                            onChange={(e) => setClockOut(e.target.value)}
                                            required
                                            className="px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Break (Minutes)</label>
                                        <input
                                            type="number"
                                            value={breakMin}
                                            onChange={(e) => setBreakMin(e.target.value)}
                                            placeholder="e.g. 60"
                                            className="px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Hourly Wage (₹)</label>
                                        <input
                                            type="number"
                                            value={hourlyWage}
                                            onChange={(e) => setHourlyWage(e.target.value)}
                                            placeholder="e.g. 150"
                                            className="px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Work State (for Shift Limit)</label>
                                    <select
                                        value={selectedStateSlug}
                                        onChange={(e) => setSelectedStateSlug(e.target.value)}
                                        className="w-full px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        {states.map(s => (
                                            <option key={s.slug} value={s.slug}>{s.name} ({s.maxWorkingHours.includes('8') ? '8h' : '9h'} limit)</option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-soft"
                                >
                                    <Plus className="w-5 h-5" /> Log Shift Hours
                                </button>
                            </form>

                            {/* Informational Callout */}
                            <div className="mt-5 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900 rounded-xl text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                                <ShieldCheck className="w-4 h-4 text-blue-600 inline mr-1 mb-0.5" />
                                <strong>Privacy Notice:</strong> All logged work logs are saved locally in your browser's memory (`localStorage`). No personal shift data is ever uploaded to any servers.
                            </div>
                        </div>

                        {/* ── RIGHT: SUMMARY & LOGS TABLE ── */}
                        <div className="lg:col-span-8 flex flex-col gap-6">
                            
                            {/* Monthly Summary Cards */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-white dark:bg-gray-950 p-5 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft text-center">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Regular Hours</p>
                                    <p className="text-xl md:text-3xl font-black text-gray-850 dark:text-gray-105 mt-1">{totalRegularHours} hrs</p>
                                </div>
                                <div className="bg-white dark:bg-gray-950 p-5 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft text-center">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Overtime Hours</p>
                                    <p className="text-xl md:text-3xl font-black text-orange-600 mt-1">{totalOtHours} hrs</p>
                                </div>
                                <div className="bg-white dark:bg-gray-950 p-5 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft text-center">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">OT Earnings (2x)</p>
                                    <p className="text-xl md:text-3xl font-black text-green-600 mt-1">₹{totalOtEarnings.toLocaleString('en-IN')}</p>
                                </div>
                            </div>

                            {/* Logs List Container */}
                            <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft overflow-hidden">
                                
                                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-850 flex items-center justify-between">
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100">Logged Shifts Log</h3>
                                    {logs.length > 0 && (
                                        <div className="flex gap-2 print:hidden">
                                            <button
                                                onClick={handlePrint}
                                                className="p-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-650 dark:text-gray-400 transition-colors"
                                                title="Print Log Statement"
                                            >
                                                <Printer className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={handleClearLogs}
                                                className="p-2 border border-red-200 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-650 dark:text-red-400 rounded-lg transition-colors"
                                                title="Clear History"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="overflow-x-auto max-h-[450px]">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-150 dark:border-gray-800">
                                            <tr>
                                                <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300">Date & State</th>
                                                <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300">Shift Times</th>
                                                <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300 text-right">Work / OT</th>
                                                <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300 text-right">Est. OT Pay</th>
                                                <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300 text-center print:hidden">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-150 dark:divide-gray-800">
                                            {logs.map((log) => (
                                                <tr key={log.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors">
                                                    <td className="px-5 py-4">
                                                        <div className="font-bold text-gray-900 dark:text-white">{log.date}</div>
                                                        <div className="text-xs text-gray-400">{log.stateName}</div>
                                                    </td>
                                                    <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                                                        <div className="font-semibold">{log.clockIn} - {log.clockOut}</div>
                                                        <div className="text-xs text-gray-400">Break: {log.breakMin}m</div>
                                                    </td>
                                                    <td className="px-5 py-4 text-right font-medium">
                                                        <div>{log.hoursWorked} hrs</div>
                                                        {log.otHours > 0 ? (
                                                            <div className="text-xs text-orange-600 font-bold">+{log.otHours} OT</div>
                                                        ) : (
                                                            <div className="text-xs text-gray-400">No OT</div>
                                                        )}
                                                    </td>
                                                    <td className="px-5 py-4 text-right font-bold text-green-600">
                                                        ₹{log.otEarnings.toLocaleString('en-IN')}
                                                    </td>
                                                    <td className="px-5 py-4 text-center print:hidden">
                                                        <button
                                                            onClick={() => handleDeleteLog(log.id)}
                                                            className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-all"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            {logs.length === 0 && (
                                                <tr>
                                                    <td colSpan="5" className="px-5 py-16 text-center text-gray-400">
                                                        <HelpCircle className="w-10 h-10 mx-auto mb-3 opacity-40" />
                                                        <p className="font-bold text-gray-500 dark:text-gray-400">No shifts logged yet</p>
                                                        <p className="text-xs mt-1 print:hidden">Use the form on the left to log your daily shift details.</p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ── MANDATORY RULES FOR OT ── */}
                    <div className="mt-12 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 md:p-8">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
                            <AlertTriangle className="w-6 h-6 text-orange-600" /> Overtime Legal Rules in India
                        </h2>
                        <ul className="space-y-4 text-sm text-gray-650 dark:text-gray-400">
                            <li className="flex items-start gap-2.5">
                                <span className="text-orange-500 font-bold shrink-0 mt-0.5">•</span>
                                <p><strong>Maximum Working Limits:</strong> Under most Shops & Establishments Acts, total daily shift hours (including overtime) cannot exceed 10 to 10.5 hours, and total weekly hours cannot exceed 54 to 60 hours.</p>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-orange-500 font-bold shrink-0 mt-0.5">•</span>
                                <p><strong>Wage Divisor:</strong> The hourly rate for overtime is calculated on the basis of a 26-day working month: <code>(Basic + DA) ÷ 26 ÷ 8</code>. Working overtime on holidays must be paid at double rate (2x) as well.</p>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-orange-500 font-bold shrink-0 mt-0.5">•</span>
                                <p><strong>Maintain Logs:</strong> Under the Acts, employers are legally required to maintain an Overtime Register (Form I or Form II). Employee trackers like this are useful personal records if you need to submit evidence to the Labour Commissioner.</p>
                            </li>
                        </ul>
                    </div>

                    {/* FAQ */}
                    <FAQSection faqs={trackerFaqs} title="FAQs — Overtime Laws" />

                    <InternalLinks currentPath="/tools/overtime-tracker" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
