import React, { useState } from 'react';
import { UserCheck, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight, RotateCcw, ShieldCheck } from 'lucide-react';
import { simulatorScenarios } from '../data/micromanagementData';

export default function ScenarioSimulator() {
    const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    const scenario = simulatorScenarios[activeScenarioIdx];

    const handleSelect = (opt) => {
        setSelectedOption(opt);
    };

    const nextScenario = () => {
        setSelectedOption(null);
        setActiveScenarioIdx((prev) => (prev + 1) % simulatorScenarios.length);
    };

    return (
        <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-850 pb-4">
                <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">Requirement 8 — Interactive Decision Game</span>
                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-0.5 flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-purple-600" /> "What Would You Do?" Scenario Simulator
                    </h3>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-500">Scenario {activeScenarioIdx + 1} of {simulatorScenarios.length}</span>
                    <button
                        onClick={nextScenario}
                        className="px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-100"
                    >
                        Next Scenario →
                    </button>
                </div>
            </div>

            {/* Scenario Card */}
            <div className="space-y-5">
                <div className="p-5 bg-purple-50/50 dark:bg-purple-950/20 rounded-2xl border border-purple-100 dark:border-purple-900/40 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 dark:text-purple-300">{scenario.title}</span>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">
                        "{scenario.situation}"
                    </p>
                </div>

                {/* 4 Choices */}
                <div className="space-y-3">
                    <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Choose your response:</h4>
                    {scenario.options.map((opt) => (
                        <button
                            key={opt.id}
                            onClick={() => handleSelect(opt)}
                            className={`w-full p-4 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${selectedOption?.id === opt.id
                                    ? 'border-purple-600 bg-purple-50 dark:bg-purple-950/40 text-purple-950 dark:text-purple-200 ring-2 ring-purple-500/20'
                                    : 'border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 text-gray-800 dark:text-gray-200 hover:border-purple-300'
                                }`}
                        >
                            <span>{opt.label}</span>
                            {selectedOption?.id === opt.id && (
                                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Decision Evaluation Feedback */}
                {selectedOption && (
                    <div className="p-6 rounded-2xl border bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 space-y-3 animate-in fade-in duration-300">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                                Decision Feedback & Strategy Analysis
                            </span>
                            <span className={`text-xs font-extrabold ${selectedOption.color === 'emerald' ? 'text-emerald-600' : selectedOption.color === 'amber' ? 'text-amber-600' : 'text-rose-600'}`}>
                                Evaluation: {selectedOption.recommendation}
                            </span>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                            {selectedOption.analysis}
                        </p>

                        <div className="pt-2 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                            <span className="text-[11px] text-gray-500">Selected Option: {selectedOption.id}</span>
                            <button
                                onClick={nextScenario}
                                className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold shadow-soft flex items-center gap-1.5 hover:bg-purple-700"
                            >
                                Try Next Scenario <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
