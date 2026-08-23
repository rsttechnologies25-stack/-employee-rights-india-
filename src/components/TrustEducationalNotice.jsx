import React from 'react';
import { Info, Shield } from 'lucide-react';

/**
 * TrustEducationalNotice Component
 * Prominent, clean educational disclaimer banner displayed near the top of the homepage
 */
export default function TrustEducationalNotice() {
    return (
        <div className="bg-amber-500/10 dark:bg-amber-950/40 border-b border-amber-500/20 py-2.5 px-4 text-gray-800 dark:text-amber-200">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 text-xs">
                <div className="flex items-start sm:items-center gap-2">
                    <span className="bg-amber-500/20 text-amber-800 dark:text-amber-300 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 mt-0.5 sm:mt-0">
                        Educational Only
                    </span>
                    <p className="leading-snug font-medium text-gray-700 dark:text-amber-200/90 text-[11px] sm:text-xs">
                        <strong>General Legal Awareness:</strong> This platform provides general information on Indian labour laws for awareness only. It does not constitute legal advice. Applicability depends on your state, establishment type, and individual circumstances.
                    </p>
                </div>
            </div>
        </div>
    );
}
