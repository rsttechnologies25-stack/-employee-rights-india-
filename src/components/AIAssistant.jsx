import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Search, ArrowRight, ExternalLink, HelpCircle, ShieldAlert, CheckCircle2, RefreshCw, FileText, Compass, Calculator } from 'lucide-react';
import { matchUserQuery } from '../data/legalAssistantKnowledge';

const samplePrompts = [
    "My employer hasn't paid my salary.",
    "Can my employer deduct PF from my salary?",
    "My company isn't giving me a relieving letter.",
    "What can I do if I am terminated?",
    "How do I claim gratuity after 5 years?"
];

export default function AIAssistant() {
    const [query, setQuery] = useState('');
    const [activeResult, setActiveResult] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = (searchTerm) => {
        const textToSearch = searchTerm || query;
        if (!textToSearch.trim()) return;
        
        setHasSearched(true);
        const match = matchUserQuery(textToSearch);
        setActiveResult(match);
    };

    const handleReset = () => {
        setQuery('');
        setActiveResult(null);
        setHasSearched(false);
    };

    return (
        <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/15 my-8 space-y-6">
            
            {/* Header Title */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/10 text-blue-300 border border-white/15 shrink-0">
                        <Bot className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                                Employee Rights Assistant
                            </h2>
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30">
                                Educational Guide
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-blue-100/90 mt-0.5">
                            Ask a workplace question in simple language to find relevant rights, tools, and official government portals.
                        </p>
                    </div>
                </div>

                {hasSearched && (
                    <button
                        type="button"
                        onClick={handleReset}
                        className="text-xs font-bold text-blue-200 hover:text-white flex items-center gap-1 border border-white/20 px-3 py-1.5 rounded-xl bg-white/5"
                    >
                        <RefreshCw className="w-3.5 h-3.5" /> Ask Another Question
                    </button>
                )}
            </div>

            {/* Input Form & Prompt Chips */}
            {!hasSearched ? (
                <div className="space-y-4">
                    <form 
                        onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
                        className="flex flex-col sm:flex-row items-stretch gap-2"
                    >
                        <div className="relative flex-1">
                            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="e.g. My employer is holding my salary after resignation..."
                                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-blue-200/60 text-sm outline-none focus:border-accent focus:bg-white/15 transition-all"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-accent hover:bg-accent-dark text-white px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 shrink-0 active:scale-[0.98]"
                        >
                            Ask Assistant <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    {/* Example Prompt Chips */}
                    <div className="space-y-2 pt-1">
                        <span className="text-[11px] font-bold text-blue-200 uppercase tracking-wider block">
                            Or Select an Example Question:
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {samplePrompts.map((promptText, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => { setQuery(promptText); handleSearch(promptText); }}
                                    className="text-xs bg-white/10 hover:bg-white/20 text-blue-100 border border-white/15 px-3 py-2 rounded-xl transition-all text-left active:scale-[0.98]"
                                >
                                    "{promptText}"
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                /* Structured Output Display */
                <div className="space-y-6 animate-in fade-in">
                    {activeResult ? (
                        <div className="bg-white/5 border border-white/15 p-6 sm:p-7 rounded-3xl space-y-6">
                            
                            {/* Topic Title */}
                            <div className="border-b border-white/10 pb-4">
                                <span className="text-[10px] font-black uppercase tracking-wider text-accent">
                                    Identified Topic
                                </span>
                                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                                    {activeResult.topic}
                                </h3>
                                <p className="text-xs text-blue-200 mt-1 font-semibold">
                                    📜 Primary Legal Citation: {activeResult.law}
                                </p>
                            </div>

                            {/* 1. SHORT ANSWER */}
                            <div className="space-y-1.5">
                                <h4 className="text-xs font-black uppercase tracking-wider text-blue-300">
                                    1. Short Answer:
                                </h4>
                                <p className="text-sm text-blue-50 leading-relaxed font-medium bg-white/5 p-4 rounded-2xl border border-white/10">
                                    {activeResult.shortAnswer}
                                </p>
                            </div>

                            {/* 2. WHAT MAY APPLY */}
                            <div className="space-y-2">
                                <h4 className="text-xs font-black uppercase tracking-wider text-blue-300">
                                    2. What May Apply:
                                </h4>
                                <ul className="space-y-1.5 text-xs sm:text-sm text-blue-100">
                                    {activeResult.whatMayApply.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-accent font-bold">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 3. WHAT YOU SHOULD CHECK */}
                            <div className="space-y-2">
                                <h4 className="text-xs font-black uppercase tracking-wider text-blue-300">
                                    3. What You Should Check:
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-blue-100">
                                    {activeResult.whatYouShouldCheck.map((doc, idx) => (
                                        <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                            <span>{doc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 4. POSSIBLE NEXT STEPS */}
                            <div className="space-y-2">
                                <h4 className="text-xs font-black uppercase tracking-wider text-blue-300">
                                    4. Your Possible Next Steps:
                                </h4>
                                <ol className="space-y-2 text-xs sm:text-sm text-blue-100 list-decimal list-inside bg-white/5 p-4 rounded-2xl border border-white/10">
                                    {activeResult.possibleNextSteps.map((stepText, idx) => (
                                        <li key={idx} className="leading-relaxed">{stepText}</li>
                                    ))}
                                </ol>
                            </div>

                            {/* 5. RELEVANT TOOLS */}
                            <div className="space-y-2">
                                <h4 className="text-xs font-black uppercase tracking-wider text-blue-300">
                                    5. Relevant Tools on Platform:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {activeResult.relevantTools.map((tool, idx) => (
                                        <Link
                                            key={idx}
                                            to={tool.path}
                                            className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-xs font-bold text-white flex items-center gap-1.5 transition-all"
                                        >
                                            <Calculator className="w-3.5 h-3.5 text-accent" />
                                            {tool.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* 6. OFFICIAL RESOURCES */}
                            <div className="space-y-2">
                                <h4 className="text-xs font-black uppercase tracking-wider text-blue-300">
                                    6. Official Government Resources (.gov.in):
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {activeResult.officialResources.map((res, idx) => (
                                        <a
                                            key={idx}
                                            href={res.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-xs font-bold text-emerald-200 hover:text-white flex items-center gap-1.5 transition-all"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" />
                                            {res.name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* 7. IMPORTANT NOTE DISCLAIMER */}
                            <div className="pt-3 border-t border-white/10 text-xs text-blue-200/80 flex items-start gap-2">
                                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                <p>
                                    <strong>7. Important Educational Note:</strong> This information is compiled from statutory acts and court precedents for educational awareness only. It does not constitute legal advice. Laws may apply differently depending on your state and facts.
                                </p>
                            </div>

                        </div>
                    ) : (
                        /* Fallback Output for Unmatched Questions */
                        <div className="bg-white/5 border border-white/15 p-6 rounded-3xl text-center space-y-4">
                            <HelpCircle className="w-10 h-10 text-amber-400 mx-auto" />
                            <h3 className="text-lg font-bold text-white">
                                We couldn't find an exact match for your question.
                            </h3>
                            <p className="text-xs sm:text-sm text-blue-200 max-w-md mx-auto leading-relaxed">
                                Please try asking about <strong>salary delays</strong>, <strong>notice period buyout</strong>, <strong>gratuity calculation</strong>, <strong>PF non-deposit</strong>, or <strong>wrongful termination</strong>.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3 pt-2">
                                <Link to="/tools/problem-wizard" className="px-5 py-2.5 rounded-xl bg-accent text-white font-bold text-xs shadow-soft">
                                    Launch Workplace Problem Wizard →
                                </Link>
                                <Link to="/rights" className="px-5 py-2.5 rounded-xl bg-white/15 text-white font-bold text-xs border border-white/20">
                                    Browse All Rights Index
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
}
