import LawCard from '../components/LawCard';
import SEOHead from '../components/SEOHead';
import { ShieldAlert, Banknote, FileWarning, Scale, Ban } from 'lucide-react';

export default function IllegalPracticesPage() {
    const practiceCards = [
        {
            title: "Asking Money to Join",
            description: "Any company asking for 'security deposits', 'laptop fees', or 'training fees' before or at the time of joining is illegal and likely a scam.",
            status: "red",
            icon: Banknote
        },
        {
            title: "Double PF Deduction",
            description: "It is illegal for an employer to deduct both the employer share (12%) and employee share (12%) from your promised CTC or basic salary.",
            status: "red",
            icon: ShieldAlert
        },
        {
            title: "Money for PF Closure",
            description: "Demanding money to process PF withdrawals, transfers, or to 'close' an account is a criminal offense. PF is automated and free.",
            status: "red",
            icon: Banknote
        },
        {
            title: "Salary Delays",
            description: "Consistent delays in salary beyond the 10th of the following month (without prior valid notice) is a violation of the Payment of Wages Act.",
            status: "yellow",
            icon: FileWarning
        },
        {
            title: "Withholding Passport/Docs",
            description: "Keeping an employee's original educational certificates or passport is strictly prohibited and a violation of human rights.",
            status: "red",
            icon: FileWarning
        },
        {
            title: "Notice Period Threats",
            description: "Threatening to damage an employee's career for resigning as per contract or for asking for lawful PF is an illegal intimidation practice.",
            status: "red",
            icon: ShieldAlert
        },
        {
            title: "Salary Deduction as Fine",
            description: "Deducting salary as 'fines' for performance or small errors is illegal. Only specific, verified damage to property deductions are allowed.",
            status: "red",
            icon: Ban
        }
    ];

    return (
        <div className="py-12 px-4 bg-gray-50">
            <SEOHead path="/illegal-practices" />
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-danger">Illegal Employer Practices</h1>
                    <p className="text-gray-600 max-w-2xl">Identify red flags and illegal demands. Protect yourself from workplace exploitation and fraudulent hiring practices.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {practiceCards.map((card, idx) => (
                        <LawCard key={idx} {...card} />
                    ))}
                </div>

                <div className="bg-white rounded-2xl p-8 border border-danger/10 shadow-soft">
                    <div className="flex items-center gap-3 mb-6">
                        <Scale className="w-8 h-8 text-danger" />
                        <h2 className="text-2xl font-bold">How to Take Action?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <h4 className="font-bold">Step 1: Document Everything</h4>
                            <p className="text-sm text-gray-500">Keep copies of your offer letter, salary slips, and record illegal demands via email or recorded calls.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold">Step 2: Written Protest</h4>
                            <p className="text-sm text-gray-500">Send a formal email to HR/Management citing the illegal practice. Often, pointing out the law stops them.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold">Step 3: External Complaints</h4>
                            <p className="text-sm text-gray-500">File a complaint on the Samadhan portal of Ministry of Labour or approach the local Labour Commissioner.</p>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-gray-900 text-white rounded-xl text-center">
                        <p className="text-lg font-bold mb-2">Remember: No Reputable Company Asks for Money</p>
                        <p className="text-sm text-gray-400">If they ask for ₹1 to give you a job, it's NOT a job. It's an extortion.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
