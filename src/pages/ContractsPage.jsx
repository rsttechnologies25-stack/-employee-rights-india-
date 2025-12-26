import LawCard from '../components/LawCard';
import { FileText, Briefcase, Zap, ShieldAlert, BadgeCheck } from 'lucide-react';

export default function ContractsPage() {
    const contractCards = [
        {
            title: "Offer Letter vs Contract",
            description: "An offer letter is an intent to hire; a signed employment contract is a binding legal document. Always ensure both match in terms of salary and notice period.",
            status: "green",
            icon: FileText
        },
        {
            title: "Training Bonds",
            description: "Bonds are valid ONLY if the employer has spent significant money on 'specialized' training with proof of expense. Salary-based fixed penalties are often unenforceable.",
            status: "yellow",
            icon: Zap
        },
        {
            title: "Asset Deposits",
            description: "Employers asking for money as 'security deposit' for laptops or ID cards is an illegal practice in most certified standing orders.",
            status: "red",
            icon: ShieldAlert
        },
        {
            title: "Probation Rights",
            description: "Even on probation, you are an employee. You are entitled to PF, a safe working environment, and the salary agreed upon in the offer letter.",
            status: "green",
            icon: BadgeCheck
        }
    ];

    return (
        <div className="py-12 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Contracts & Training Bonds</h1>
                    <p className="text-gray-600 max-w-2xl">Know what you are signing. Understanding the legal validity of employment agreements and bonds.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contractCards.map((card, idx) => (
                        <LawCard key={idx} {...card} />
                    ))}
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft">
                    <div className="flex items-center gap-3 mb-6">
                        <Briefcase className="w-8 h-8 text-primary" />
                        <h2 className="text-2xl font-bold">Bond Validity Checklist</h2>
                    </div>
                    <p className="text-gray-600 mb-6 italic">A bond is usually only legally enforceable if it satisfies three conditions:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-xl border border-gray-100 bg-gray-50">
                            <span className="text-primary font-black text-2xl mb-2 block">01</span>
                            <h4 className="font-bold mb-2">Specific Training</h4>
                            <p className="text-sm text-gray-500">The company must have sent you for a specific training (not just 'on-the-job' training).</p>
                        </div>
                        <div className="p-6 rounded-xl border border-gray-100 bg-gray-50">
                            <span className="text-primary font-black text-2xl mb-2 block">02</span>
                            <h4 className="font-bold mb-2">Proof of Expense</h4>
                            <p className="text-sm text-gray-500">The employer must have proof of actual financial expenditure for that specific training.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-gray-100 bg-gray-50">
                            <span className="text-primary font-black text-2xl mb-2 block">03</span>
                            <h4 className="font-bold mb-2">Reasonable Period</h4>
                            <p className="text-sm text-gray-500">The bond duration must be reasonable relative to the training cost (usually not exceeding 1-2 years).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
