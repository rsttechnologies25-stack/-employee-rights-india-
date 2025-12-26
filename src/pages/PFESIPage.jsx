import LawCard from '../components/LawCard';
import PFChecker from '../components/PFChecker';
import SalaryCalculator from '../components/SalaryCalculator';
import SEOHead from '../components/SEOHead';
import { Landmark, Heart, ShieldAlert, History } from 'lucide-react';

export default function PFESIPage() {
    const cards = [
        {
            title: "Mandatory from Day 1",
            description: "EPF is mandatory from the first day of joining. Employers cannot exempt you during probation, training, or internship if the company has 20+ employees.",
            status: "green",
            icon: Landmark
        },
        {
            title: "Employer Contribution",
            description: "Employer contribution (12%) is in addition to your salary. Deducting the employer's share from your promised gross/net salary is an illegal practice.",
            status: "red",
            icon: ShieldAlert
        },
        {
            title: "PF Blocking",
            description: "Companies cannot block your PF transfer or withdrawal for not serving notice period or breaking a bond. PF is your personal legal entitlement.",
            status: "red",
            icon: ShieldAlert
        },
        {
            title: "ESI Benefits",
            description: "If your salary is ≤ ₹21,000, you are legally entitled to ESI medical benefits for yourself and family. Employers must register you immediately.",
            status: "green",
            icon: Heart
        }
    ];

    return (
        <div className="py-12 px-4 bg-gray-50">
            <SEOHead path="/pf-esi" />
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">PF & ESI Rules</h1>
                    <p className="text-gray-600 max-w-2xl">Understanding your social security benefits and mandatory contributions under Indian Law.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {cards.map((card, idx) => (
                        <LawCard key={idx} {...card} />
                    ))}
                </div>

                <div className="mb-16">
                    <PFChecker />
                </div>

                <div className="mb-16">
                    <SalaryCalculator />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft">
                        <div className="flex items-center gap-3 mb-6">
                            <History className="w-8 h-8 text-primary" />
                            <h2 className="text-2xl font-bold">Compliance Checklist</h2>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-gray-600 text-sm p-3 bg-red-50 rounded-lg border border-red-100">
                                <ShieldAlert className="w-5 h-5 text-danger shrink-0" />
                                <span><strong>Red Flag:</strong> Employer asking money to "close" or "transfer" your PF account. This is illegal; PF is automated.</span>
                            </li>
                            <li className="flex gap-3 text-gray-600 text-sm p-3 bg-red-50 rounded-lg border border-red-100">
                                <ShieldAlert className="w-5 h-5 text-danger shrink-0" />
                                <span><strong>Red Flag:</strong> Both employer (12%) and employee (12%) PF shares being deducted from your Net salary.</span>
                            </li>
                            <li className="flex gap-3 text-gray-600 text-sm p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                                <ShieldAlert className="w-5 h-5 text-warning shrink-0" />
                                <span><strong>Warning:</strong> PF/ESI contributions must show on your monthly slip. Check UAN portal monthly for deposits.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft">
                        <div className="flex items-center gap-3 mb-6">
                            <Landmark className="w-8 h-8 text-primary" />
                            <h2 className="text-2xl font-bold">Important Reminders</h2>
                        </div>
                        <ul className="grid grid-cols-1 gap-4">
                            <li className="flex gap-3 text-gray-600 text-sm">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                                Salary should be deposited by the 7th or 10th of every month depending on company size. Delays are illegal.
                            </li>
                            <li className="flex gap-3 text-gray-600 text-sm">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                                Inoperative PF accounts still earn interest up to 58 years of age.
                            </li>
                            <li className="flex gap-3 text-gray-600 text-sm">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                                Universal Account Number (UAN) stays same for life. Link all previous IDs to one UAN.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
