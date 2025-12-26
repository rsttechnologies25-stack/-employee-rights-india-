import LawCard from '../components/LawCard';
import SEOHead from '../components/SEOHead';
import { Send, FileCheck, ShieldAlert, TimerOff, Handshake } from 'lucide-react';

export default function NoticePage() {
    const noticeCards = [
        {
            title: "Notice Period Buyout",
            description: "If you want to leave early, you can 'buy out' the notice period by paying salary for the unserved days. Employers cannot force you to work if you pay.",
            status: "green",
            icon: Handshake
        },
        {
            title: "Relieving Letters",
            description: "Employers cannot legally withhold your experience or relieving letter for minor disputes or for wanting to join a competitor.",
            status: "red",
            icon: ShieldAlert
        },
        {
            title: "Full & Final Settlement",
            description: "F&F must include earned leaves, bonus, unpaid salary, and gratuity (if eligible). It should ideally be cleared within 48 hours of your last day (under new Labour Codes).",
            status: "green",
            icon: FileCheck
        },
        {
            title: "Notice Period Deductions",
            description: "Companies cannot deduct PF, Gratuity, or previous bonuses in the name of 'Liquidated Damages' for short notice.",
            status: "red",
            icon: ShieldAlert
        }
    ];

    return (
        <div className="py-12 px-4 bg-gray-50">
            <SEOHead path="/notice-period" />
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Notice Period & Resignation</h1>
                    <p className="text-gray-600 max-w-2xl">Exiting a company gracefully and legally. Understanding your obligations and rights during the transition.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {noticeCards.map((card, idx) => (
                        <LawCard key={idx} {...card} />
                    ))}
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft">
                    <div className="flex items-center gap-3 mb-6">
                        <Send className="w-8 h-8 text-primary" />
                        <h2 className="text-2xl font-bold">Standard Resignation Process</h2>
                    </div>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                            <div>
                                <h4 className="font-bold">Formal Resignation</h4>
                                <p className="text-sm text-gray-500">Send an email clearly stating your last working day as per your contract's notice period.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                            <div>
                                <h4 className="font-bold">Knowledge Transfer (KT)</h4>
                                <p className="text-sm text-gray-500">Actively participate in the handover process. This is your primary legal obligation during notice.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                            <div>
                                <h4 className="font-bold">Exit Interview & F&F</h4>
                                <p className="text-sm text-gray-500">Complete the exit formalities and ensure you receive a signed copy of your relieving letter.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-warning/5 border border-warning/20 p-4 rounded-xl flex items-start gap-4">
                        <TimerOff className="w-6 h-6 text-warning shrink-0" />
                        <p className="text-xs text-gray-600 leading-relaxed uppercase tracking-wide font-bold">
                            Warning: If an employer threatens to "blackmark" your profile on BGV portals, this is an illegal intimidation tactic.
                            BGV agencies only verify facts (tenure, role, salary).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
