import React from 'react';
import { useState } from 'react';
import { CheckSquare, Square, ClipboardCheck } from 'lucide-react';

export default function ChecklistCard({ title, items, description }) {
    const [checked, setChecked] = useState(new Set());

    const toggle = (idx) => {
        setChecked(prev => {
            const next = new Set(prev);
            if (next.has(idx)) next.delete(idx);
            else next.add(idx);
            return next;
        });
    };

    const progress = items.length > 0 ? Math.round((checked.size / items.length) * 100) : 0;

    return (
        <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft overflow-hidden">
            <div className="bg-primary p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <ClipboardCheck className="w-7 h-7" />
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
                {description && <p className="text-blue-100 text-sm">{description}</p>}
                <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-blue-200">Progress</span>
                        <span className="font-bold">{checked.size}/{items.length} ({progress}%)</span>
                    </div>
                    <div className="w-full bg-white/20 dark:bg-white/20 rounded-full h-2.5">
                        <div
                            className="bg-white rounded-full h-2.5 transition-all duration-500 ease-out shadow-sm"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
            <div className="p-6">
                <ul className="space-y-2">
                    {items.map((item, idx) => (
                        <li key={idx}>
                            <button
                                onClick={() => toggle(idx)}
                                className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all duration-200 ${
                                    checked.has(idx)
                                        ? 'bg-success/5 border border-success/20 text-gray-500 dark:text-gray-400'
                                        : 'bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-850'
                                }`}
                            >
                                {checked.has(idx) ? (
                                    <CheckSquare className="w-5 h-5 text-success shrink-0 mt-0.5" />
                                ) : (
                                    <Square className="w-5 h-5 text-gray-400 dark:text-gray-500 shrink-0 mt-0.5" />
                                )}
                                <span className={`text-sm ${checked.has(idx) ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-200'}`}>
                                    {item}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
                {progress === 100 && (
                    <div className="mt-4 p-4 bg-success/10 rounded-xl border border-success/20 text-center">
                        <p className="text-success font-bold">✅ All items checked!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
