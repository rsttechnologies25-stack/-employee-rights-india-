import React from 'react';
import LawCard from '../components/LawCard';
import SEOHead from '../components/SEOHead';
import ContentSection, { CalloutBox } from '../components/ContentSection';
import { Clock, Moon, ShieldAlert, PhoneOff, Zap, Coffee, RefreshCw } from 'lucide-react';

export default function WorkingHoursPage() {
    const hourCards = [
        {
            title: "Maximum Working Hours",
            description: "Indian law restricts working to 48 hours per week and 9 hours per day. Any work beyond this is considered overtime.",
            status: "green",
            icon: Clock
        },
        {
            title: "Overtime Pay",
            description: "Legally, overtime must be paid at TWICE the ordinary rate of wages (2x). Fixed 'Overtime Allowance' is often not compliant.",
            status: "green",
            icon: Zap
        },
        {
            title: "After-Hours Calls",
            description: "Constant calls/emails after 8 PM or on weekends interfere with 'Right to Rest'. While no specific law exists yet, it's an unfair labour practice.",
            status: "yellow",
            icon: PhoneOff
        },
        {
            title: "Forced Night Shifts",
            description: "No employee can be forced to work night shifts without proper consent and safety measures, especially for women (requires special compliance).",
            status: "yellow",
            icon: Moon
        }
    ];

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
            <SEOHead path="/working-hours" />
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Working Hours & Overtime</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl">Understanding your limits and entitlements. The law ensures you have a right to rest and fair compensation for extra effort.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {hourCards.map((card, idx) => (
                        <LawCard key={idx} {...card} />
                    ))}
                </div>

                <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-soft">
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="w-8 h-8 text-primary" />
                        <h2 className="text-2xl font-bold">Standard Work Rules</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500 dark:text-gray-400">Max Daily Hours</span>
                                <span className="font-bold">9 Hours</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500 dark:text-gray-400">Max Weekly Hours</span>
                                <span className="font-bold">48 Hours</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500 dark:text-gray-400">Spreadover (incl. breaks)</span>
                                <span className="font-bold">10.5 - 12 Hours</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500 dark:text-gray-400">Interval for Rest</span>
                                <span className="font-bold">At least 30 mins after 5h</span>
                            </div>
                        </div>

                        <div className="bg-primary/5 p-6 rounded-xl">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-primary" />
                                The Overtime Rule
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                Total working hours including overtime cannot exceed 60 hours in a week. Overtime total cannot exceed 50-125 hours per quarter depending on state laws.
                            </p>
                            <div className="bg-white dark:bg-gray-950 px-4 py-3 rounded-lg border border-primary/20 text-center font-black text-primary">
                                OVERTIME = 2 × NORMAL WAGE
                            </div>
                        </div>
                    </div>
                </div>

                <ContentSection title="Lunch & Rest Break Rules" icon={Coffee} variant="info">
                    <div className="space-y-4">
                        <p>Under Indian labour laws (including the Factories Act and State Shops & Establishments Acts), employers are legally mandated to provide rest intervals to employees. This is a statutory right to ensure worker health and prevent exhaustion.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="p-5 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm">
                                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">The 5-Hour Rule</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">No employee can be required to work for more than <strong>5 consecutive hours</strong> without a rest interval of at least <strong>30 minutes</strong>. This is typically designated as the lunch break.</p>
                            </div>
                            <div className="p-5 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm">
                                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Tea / Short Breaks</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">In addition to the mandatory 30-minute lunch break, it is standard industry practice to allow two short 10-15 minute tea/coffee breaks, though these are governed by company policy.</p>
                            </div>
                        </div>

                        <CalloutBox type="warning" title="Are lunch breaks paid?">
                            Statutory rest intervals (like the 30-minute lunch break) are generally <strong>unpaid</strong> and are not counted towards the 9 hours of actual working time. That is why a typical full-time shift is often 9.5 hours (9 hours of actual work + 30 mins unpaid lunch break). The total time from entry to exit is known as "Spreadover" and is capped at 10.5 to 12 hours depending on the state.
                        </CalloutBox>
                    </div>
                </ContentSection>

                <ContentSection title="Shift Timings & Rotational Shifts" icon={RefreshCw} variant="default">
                    <div className="space-y-4">
                        <p>Many industries (IT/ITES, healthcare, manufacturing) operate 24/7, requiring employees to work in rotational shifts. While employers have the right to dictate shift schedules, they must adhere to these legal protections:</p>
                        
                        <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm mt-4">
                            <ul className="space-y-5 text-sm text-gray-700 dark:text-gray-300">
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <strong className="text-gray-900 dark:text-gray-100 block mb-1">Minimum Rest Between Shifts:</strong>
                                        Legally, there must be a minimum continuous rest period (usually 10.5 to 12 hours) between the end of one shift and the beginning of the next. Forcing an employee to work "back-to-back" shifts (e.g., ending at 2 AM and returning at 9 AM) without adequate rest is a violation.
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <strong className="text-gray-900 dark:text-gray-100 block mb-1">Advance Notice for Roster Changes:</strong>
                                        Employers are required to provide the shift roster reasonably in advance. Abruptly changing your shift timing with zero notice period, causing severe personal disruption, is considered an unfair labor practice.
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <strong className="text-gray-900 dark:text-gray-100 block mb-1">Split Shifts & Spreadover:</strong>
                                        If your shift is split into two parts (e.g., 4 hours morning, break, 4 hours evening), the total "spreadover"—the time from the start of the first half to the end of the second half—cannot legally exceed the state's limit (typically 10.5 or 12 hours).
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">4</div>
                                    <div>
                                        <strong className="text-gray-900 dark:text-gray-100 block mb-1">Shift Allowances:</strong>
                                        While night shift allowances are standard practice in the IT/BPO sectors, they are <strong>not legally mandated</strong> by central labor laws. Shift allowances are governed entirely by your employment contract or company policy.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ContentSection>
            </div>
        </div>
    );
}
