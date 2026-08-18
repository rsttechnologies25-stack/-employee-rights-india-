import React from 'react';
import { Info, AlertTriangle } from 'lucide-react';

export default function CalculatorCard({ title, description, icon: Icon, children, assumptions }) {
    return (
        <div className="card max-w-4xl mx-auto shadow-lg overflow-hidden">
            <div className="bg-accent p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    {Icon && <Icon className="w-8 h-8" />}
                    <h2 className="text-2xl font-bold">{title}</h2>
                </div>
                {description && <p className="text-orange-100 text-sm">{description}</p>}
            </div>
            <div className="p-6 md:p-8">
                {children}
                {assumptions && (
                    <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
                        <div className="flex items-center gap-2 mb-2 text-accent">
                            <Info className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">Assumptions & Notes</span>
                        </div>
                        <p className="text-[11px] text-orange-800/70 leading-relaxed">{assumptions}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export function CalcInput({ label, value, onChange, placeholder, type = 'number', suffix, prefix, helpText }) {
    return (
        <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{label}</label>
            <div className="relative">
                {prefix && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">{prefix}</span>
                )}
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={`w-full py-3 rounded-xl border-2 border-gray-100 dark:border-gray-800 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all text-lg font-bold ${prefix ? 'pl-8 pr-4' : 'px-4'} ${suffix ? 'pr-16' : ''}`}
                    placeholder={placeholder}
                />
                {suffix && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">{suffix}</span>
                )}
            </div>
            {helpText && <p className="mt-1 text-xs text-gray-400">{helpText}</p>}
        </div>
    );
}

export function CalcResult({ label, value, variant = 'default', sublabel }) {
    const styles = {
        default: 'bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-800',
        success: 'bg-success/10 border-success/20',
        danger: 'bg-danger/10 border-danger/20',
        primary: 'bg-primary/5 border-primary/10',
        accent: 'bg-accent/5 border-accent/10',
    };

    const textColors = {
        default: 'text-gray-900 dark:text-gray-100',
        success: 'text-success',
        danger: 'text-danger',
        primary: 'text-primary',
        accent: 'text-accent',
    };

    return (
        <div className={`flex justify-between items-center p-4 rounded-xl border ${styles[variant]}`}>
            <div>
                <p className={`font-bold ${textColors[variant]}`}>{label}</p>
                {sublabel && <p className={`text-[10px] ${textColors[variant]} opacity-70`}>{sublabel}</p>}
            </div>
            <p className={`font-black text-xl font-mono ${textColors[variant]}`}>{value}</p>
        </div>
    );
}

export function CalcDisclaimer({ children }) {
    return (
        <div className="mt-6 flex items-start gap-3 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
            <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0" />
            <p className="text-xs text-yellow-800 leading-relaxed">{children}</p>
        </div>
    );
}
