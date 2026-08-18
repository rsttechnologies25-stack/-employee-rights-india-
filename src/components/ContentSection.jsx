import React from 'react';
import { CheckCircle2, AlertTriangle, Info, Ban, Scale } from 'lucide-react';

const iconMap = {
    check: CheckCircle2,
    warning: AlertTriangle,
    info: Info,
    ban: Ban,
    legal: Scale,
};

const styleMap = {
    default: 'bg-white dark:bg-gray-950 border-gray-100 dark:border-gray-800',
    success: 'bg-success/5 border-success/20',
    warning: 'bg-warning/5 border-warning/20',
    danger: 'bg-danger/5 border-danger/20',
    info: 'bg-primary/5 border-primary/20',
    accent: 'bg-accent/5 border-accent/20',
};

export default function ContentSection({ title, icon, variant = 'default', children, id }) {
    const IconComponent = typeof icon === 'string' ? iconMap[icon] : icon;

    const iconColors = {
        default: 'text-primary',
        success: 'text-success',
        warning: 'text-warning',
        danger: 'text-danger',
        info: 'text-primary',
        accent: 'text-accent',
    };

    return (
        <section id={id} className={`rounded-2xl p-6 md:p-8 border shadow-soft mb-8 ${styleMap[variant]}`}>
            {title && (
                <div className="flex items-center gap-3 mb-6">
                    {IconComponent && (
                        <IconComponent className={`w-6 h-6 ${iconColors[variant]} shrink-0`} />
                    )}
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
                </div>
            )}
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {children}
            </div>
        </section>
    );
}

export function ContentList({ items, ordered = false, variant = 'default' }) {
    const bulletColors = {
        default: 'bg-primary text-white',
        success: 'bg-success text-white',
        warning: 'bg-warning text-white',
        danger: 'bg-danger text-white',
    };

    return (
        <ul className="space-y-3">
            {items.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                    {ordered ? (
                        <span className={`w-6 h-6 ${bulletColors[variant] || bulletColors.default} rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5`}>
                            {idx + 1}
                        </span>
                    ) : (
                        <span className={`w-1.5 h-1.5 ${variant === 'danger' ? 'bg-danger' : 'bg-primary'} rounded-full shrink-0 mt-2.5`} />
                    )}
                    <div className="text-gray-700 dark:text-gray-300">
                        {typeof item === 'object' && item !== null ? (
                            <>
                                {item.title && <strong className="text-gray-900 dark:text-gray-100 block sm:inline">{item.title}: </strong>}
                                {item.description}
                            </>
                        ) : (
                            item
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export function CalloutBox({ type = 'info', title, children }) {
    const styles = {
        info: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200',
        warning: 'bg-yellow-50 dark:bg-yellow-950/40 border-yellow-200 dark:border-yellow-800 text-yellow-900 dark:text-yellow-200',
        danger: 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800 text-red-900 dark:text-red-200',
        success: 'bg-green-50 dark:bg-green-950/40 border-green-200 dark:border-green-800 text-green-900 dark:text-green-200',
        tip: 'bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-200',
    };

    const icons = {
        info: Info,
        warning: AlertTriangle,
        danger: Ban,
        success: CheckCircle2,
        tip: Info,
    };

    const CalloutIcon = icons[type];

    return (
        <div className={`p-4 rounded-xl border ${styles[type]} flex items-start gap-3`}>
            <CalloutIcon className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
                {title && <p className="font-bold mb-1">{title}</p>}
                <div className="text-sm leading-relaxed">{children}</div>
            </div>
        </div>
    );
}
