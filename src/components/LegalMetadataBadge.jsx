import React from 'react';
import { Calendar, ShieldCheck, Scale, ExternalLink } from 'lucide-react';

export default function LegalMetadataBadge({ 
    lastReviewed = "18 August 2026", 
    status = "Current Law (Pre-Labour Codes Enforcement)", 
    jurisdiction = "Central & State Applicable", 
    source = "Ministry of Labour & Employment / Official Gazette",
    sourceUrl = "https://labour.gov.in"
}) {
    return (
        <div className="bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/60 rounded-2xl p-4 my-6 text-xs text-gray-700 dark:text-gray-300">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blue-200/50 dark:border-blue-900/40 pb-3 mb-3">
                <div className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-300">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Statutory Verification & Governance</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Last Reviewed: <strong className="text-gray-900 dark:text-gray-100">{lastReviewed}</strong></span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                    <span className="text-gray-500 dark:text-gray-400 block text-[11px]">Legal Status:</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{status}</span>
                </div>
                <div>
                    <span className="text-gray-500 dark:text-gray-400 block text-[11px]">Jurisdiction:</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{jurisdiction}</span>
                </div>
                <div>
                    <span className="text-gray-500 dark:text-gray-400 block text-[11px]">Official Source:</span>
                    {sourceUrl ? (
                        <a 
                            href={sourceUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                        >
                            {source} <ExternalLink className="w-3 h-3" />
                        </a>
                    ) : (
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{source}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
