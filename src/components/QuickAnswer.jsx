import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, HelpCircle, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

/**
 * QuickAnswer Component
 * Provides an instant 3-second plain-language verdict for legal detail pages
 * Verdict options: 'YES' | 'NO' | 'IT DEPENDS' | 'POTENTIAL ISSUE'
 */
export default function QuickAnswer({
    verdict = 'IT DEPENDS',
    headline = '',
    shortAnswer = '',
    keyFactors = [],
    legalCitation = '',
    primaryActionPath = '',
    primaryActionLabel = ''
}) {
    const verdictConfig = {
        'YES': {
            bg: 'bg-emerald-50 dark:bg-emerald-950/30',
            border: 'border-emerald-200 dark:border-emerald-800',
            text: 'text-emerald-700 dark:text-emerald-300',
            badgeBg: 'bg-emerald-600 text-white',
            icon: CheckCircle2,
            title: 'GENERALLY PERMISSIBLE / LAWFUL'
        },
        'NO': {
            bg: 'bg-red-50 dark:bg-red-950/30',
            border: 'border-red-200 dark:border-red-800',
            text: 'text-red-700 dark:text-red-300',
            badgeBg: 'bg-red-600 text-white',
            icon: XCircle,
            title: 'GENERALLY UNLAWFUL / PROHIBITED'
        },
        'IT DEPENDS': {
            bg: 'bg-amber-50 dark:bg-amber-950/30',
            border: 'border-amber-200 dark:border-amber-800',
            text: 'text-amber-800 dark:text-amber-300',
            badgeBg: 'bg-amber-600 text-white',
            icon: HelpCircle,
            title: 'FACT-DEPENDENT / CONDITIONAL'
        },
        'POTENTIAL ISSUE': {
            bg: 'bg-purple-50 dark:bg-purple-950/30',
            border: 'border-purple-200 dark:border-purple-800',
            text: 'text-purple-700 dark:text-purple-300',
            badgeBg: 'bg-purple-600 text-white',
            icon: AlertTriangle,
            title: 'REQUIRES COMPLIANCE VERIFICATION'
        }
    };

    const config = verdictConfig[verdict] || verdictConfig['IT DEPENDS'];
    const IconComponent = config.icon;

    return (
        <div className={`rounded-3xl border ${config.border} ${config.bg} p-6 sm:p-7 shadow-soft space-y-4 my-6 transition-all`}>
            {/* Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                    <span className={`px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase shadow-xs ${config.badgeBg}`}>
                        {verdict}
                    </span>
                    <span className={`text-xs font-bold ${config.text}`}>
                        {config.title}
                    </span>
                </div>
                {legalCitation && (
                    <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 bg-white/60 dark:bg-gray-900/60 px-2.5 py-0.5 rounded-lg border border-gray-200/50 dark:border-gray-800/50">
                        📜 {legalCitation}
                    </span>
                )}
            </div>

            {/* Headline & Short Answer */}
            <div className="space-y-1.5">
                {headline && (
                    <h3 className="font-extrabold text-base sm:text-lg text-gray-900 dark:text-white leading-snug">
                        {headline}
                    </h3>
                )}
                <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                    {shortAnswer}
                </p>
            </div>

            {/* Key Decision Factors */}
            {keyFactors && keyFactors.length > 0 && (
                <div className="pt-3 border-t border-gray-200/40 dark:border-gray-800/40 space-y-2">
                    <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider block">
                        Key Statutory Factors:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
                        {keyFactors.map((factor, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="leading-snug">{factor}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Primary Action Button */}
            {primaryActionPath && primaryActionLabel && (
                <div className="pt-2 flex justify-start">
                    <Link
                        to={primaryActionPath}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold shadow-soft hover:bg-primary-dark transition-all active:scale-[0.98]"
                    >
                        {primaryActionLabel}
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            )}
        </div>
    );
}
