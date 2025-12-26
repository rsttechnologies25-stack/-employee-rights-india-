import { ShieldCheck, ShieldAlert, XCircle, HelpCircle } from 'lucide-react';

export default function LawCard({ title, description, status, icon: Icon = HelpCircle }) {
    const statusClasses = {
        green: 'status-green',
        yellow: 'status-yellow',
        red: 'status-red'
    };

    const badgeClasses = {
        green: 'bg-success/10 text-success',
        yellow: 'bg-warning/10 text-warning',
        red: 'bg-danger/10 text-danger'
    };

    const statusIcons = {
        green: ShieldCheck,
        yellow: HelpCircle,
        red: ShieldAlert
    };

    const StatusIcon = statusIcons[status];

    return (
        <div className={`card card-hover p-6 ${statusClasses[status]}`}>
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${badgeClasses[status]}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div className={`badge ${badgeClasses[status]} uppercase tracking-wider`}>
                    {status === 'green' ? 'Legal' : status === 'yellow' ? 'Risky' : 'Illegal'}
                </div>
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {description}
            </p>
            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-50 text-xs font-semibold uppercase tracking-widest text-gray-400">
                <StatusIcon className={`w-4 h-4 ${status === 'green' ? 'text-success' : status === 'yellow' ? 'text-warning' : 'text-danger'}`} />
                <span>Requirement Status</span>
            </div>
        </div>
    );
}
