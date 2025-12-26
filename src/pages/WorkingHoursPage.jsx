import LawCard from '../components/LawCard';
import { Clock, Moon, ShieldAlert, PhoneOff, Zap } from 'lucide-react';

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
        <div className="py-12 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Working Hours & Overtime</h1>
                    <p className="text-gray-600 max-w-2xl">Understanding your limits and entitlements. The law ensures you have a right to rest and fair compensation for extra effort.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {hourCards.map((card, idx) => (
                        <LawCard key={idx} {...card} />
                    ))}
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft">
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="w-8 h-8 text-primary" />
                        <h2 className="text-2xl font-bold">Standard Work Rules</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500">Max Daily Hours</span>
                                <span className="font-bold">9 Hours</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500">Max Weekly Hours</span>
                                <span className="font-bold">48 Hours</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500">Spreadover (incl. breaks)</span>
                                <span className="font-bold">10.5 - 12 Hours</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-500">Interval for Rest</span>
                                <span className="font-bold">At least 30 mins after 5h</span>
                            </div>
                        </div>

                        <div className="bg-primary/5 p-6 rounded-xl">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-primary" />
                                The Overtime Rule
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Total working hours including overtime cannot exceed 60 hours in a week. Overtime total cannot exceed 50-125 hours per quarter depending on state laws.
                            </p>
                            <div className="bg-white px-4 py-3 rounded-lg border border-primary/20 text-center font-black text-primary">
                                OVERTIME = 2 × NORMAL WAGE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
