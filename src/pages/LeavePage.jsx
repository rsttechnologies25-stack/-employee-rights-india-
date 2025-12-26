import LawCard from '../components/LawCard';
import SEOHead from '../components/SEOHead';
import { Calendar, Thermometer, Palmtree, PartyPopper, CalendarOff, AlertTriangle, CheckCircle, XCircle, Scale } from 'lucide-react';

export default function LeavePage() {
    const leaveCards = [
        {
            title: "Casual Leave (CL)",
            description: "6-12 days per year for personal or urgent needs. Usually 1-3 days at a time. Employer cannot unreasonably deny CL.",
            status: "green",
            icon: Calendar
        },
        {
            title: "Sick Leave (SL)",
            description: "6-12 days per year for illness. Medical certificate may be required. Cannot force sick employees to work.",
            status: "green",
            icon: Thermometer
        },
        {
            title: "Earned Leave (EL/PL)",
            description: "Earned over time (e.g., 1 day per 20 working days). Can be carried forward. Encashable at exit.",
            status: "green",
            icon: Palmtree
        },
        {
            title: "Festival Holidays",
            description: "State-notified festival holidays are mandatory. Republic Day, Independence Day & Gandhi Jayanthi compulsory.",
            status: "green",
            icon: PartyPopper
        }
    ];

    const holidayWorkRules = [
        {
            allowed: true,
            text: "Employer CAN keep office open on holidays for essential services or business necessity"
        },
        {
            allowed: true,
            text: "Working on holidays is allowed IF employer provides double wages OR compensatory off"
        },
        {
            allowed: false,
            text: "Working on holidays WITHOUT extra pay or comp-off is ILLEGAL"
        },
        {
            allowed: false,
            text: "Threatening termination for refusing holiday work is ILLEGAL"
        },
        {
            allowed: false,
            text: "Denying all declared holidays without compensation is ILLEGAL"
        }
    ];

    return (
        <div className="py-12 px-4 bg-gray-50">
            <SEOHead path="/leave-holidays" />
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">🏛️ Holidays & Leave Rights</h1>
                    <p className="text-gray-600 max-w-3xl">
                        Understanding your statutory leave entitlements under Indian labor law.
                        <span className="font-semibold text-primary"> Leave is a legal right, not a privilege.</span>
                    </p>
                </div>

                {/* Leave Type Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {leaveCards.map((card, idx) => (
                        <LawCard key={idx} {...card} />
                    ))}
                </div>

                {/* Can Employer Make You Work on Holidays? */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Scale className="w-8 h-8 text-primary" />
                        <h2 className="text-2xl font-bold">Can Employers Make You Work on Holidays?</h2>
                    </div>

                    <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mb-6">
                        <p className="text-gray-800 font-medium">
                            ✅ <span className="font-bold">Short Answer: YES, but with conditions.</span> Employers may operate on holidays,
                            but employees must be compensated with extra pay or a compensatory off.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {holidayWorkRules.map((rule, idx) => (
                            <div
                                key={idx}
                                className={`flex items-start gap-3 p-4 rounded-xl ${rule.allowed
                                        ? 'bg-green-50 border border-green-200'
                                        : 'bg-red-50 border border-red-200'
                                    }`}
                            >
                                {rule.allowed ? (
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                ) : (
                                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                )}
                                <span className={`text-sm ${rule.allowed ? 'text-green-800' : 'text-red-800'}`}>
                                    {rule.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Holiday Work Compensation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            Your Rights When Working on Holidays
                        </h3>
                        <p className="text-gray-600 mb-4">
                            If you work on a government or declared holiday, you are entitled to <span className="font-bold">ONE</span> of the following:
                        </p>
                        <div className="space-y-3">
                            <div className="bg-primary/5 p-4 rounded-xl border border-primary/20">
                                <p className="font-bold text-primary text-lg">Option 1: Double Wages (2×)</p>
                                <p className="text-sm text-gray-600">Receive twice your normal daily wage for the holiday worked.</p>
                            </div>
                            <div className="bg-primary/5 p-4 rounded-xl border border-primary/20">
                                <p className="font-bold text-primary text-lg">Option 2: Compensatory Off</p>
                                <p className="text-sm text-gray-600">Receive a paid day off on another day as substitute (Comp-off).</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <CalendarOff className="w-6 h-6 text-primary" />
                            Weekly Off Rights
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700">You must receive <span className="font-bold">at least 1 weekly off</span> (usually Sunday)</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700">Employer <span className="font-bold text-red-700">CANNOT</span> make you work 7 days continuously</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700">No weekly off replacement = <span className="font-bold text-red-700">VIOLATION</span></p>
                            </div>
                        </div>
                        <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
                            <p className="text-yellow-800 text-sm">
                                <span className="font-bold">⚠️ Important:</span> Asking sick employees to "come for attendance" is workplace harassment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Leave Summary Table */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft mb-8">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        📊 Leave Summary Table
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-primary/5">
                                    <th className="px-4 py-3 font-bold text-primary rounded-tl-lg">Leave Type</th>
                                    <th className="px-4 py-3 font-bold text-primary">Typical Days</th>
                                    <th className="px-4 py-3 font-bold text-primary rounded-tr-lg">Key Rule</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 font-medium">Casual Leave</td>
                                    <td className="px-4 py-4">6-12 days/year</td>
                                    <td className="px-4 py-4 text-gray-600">Short personal use</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 font-medium">Sick Leave</td>
                                    <td className="px-4 py-4">6-12 days/year</td>
                                    <td className="px-4 py-4 text-gray-600">Medical protection</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 font-medium">Earned Leave</td>
                                    <td className="px-4 py-4">Accrues over time</td>
                                    <td className="px-4 py-4 text-gray-600">Encashable at exit</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 font-medium">Festival Holidays</td>
                                    <td className="px-4 py-4">State-notified</td>
                                    <td className="px-4 py-4 text-gray-600">Mandatory observance</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 font-medium">Weekly Off</td>
                                    <td className="px-4 py-4">1 per week</td>
                                    <td className="px-4 py-4 text-gray-600">Mandatory rest day</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Important Legal Points */}
                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 mb-8">
                    <h3 className="text-xl font-bold mb-4">🧾 Important Legal Points</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                            <p className="font-medium text-gray-800">Leave is a statutory right, not a favour</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                            <p className="font-medium text-gray-800">Employer policy cannot reduce statutory minimums</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                            <p className="font-medium text-gray-800">Leave rules must be documented & communicated</p>
                        </div>
                    </div>
                </div>

                {/* Key Takeaway */}
                <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white mb-8">
                    <h3 className="text-xl font-bold mb-2">📌 Key Takeaway</h3>
                    <p className="text-lg">
                        Employers may operate on holidays, but <span className="font-bold underline">employees must be compensated</span> with extra pay or a compensatory off.
                        Leave is a <span className="font-bold">legal right, not a privilege</span>.
                    </p>
                </div>

                {/* Disclaimer */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                        <div>
                            <p className="font-bold text-yellow-800 mb-1">⚠️ Disclaimer</p>
                            <p className="text-yellow-700 text-sm">
                                Leave rules may vary slightly by state and establishment type. This information is for general awareness purposes.
                                For specific cases, consult your state's Shops & Establishments Act or a qualified labor law professional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
