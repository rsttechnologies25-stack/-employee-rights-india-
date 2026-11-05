import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, Check, AlertCircle, Sparkles, X, ArrowRight, ShieldCheck } from 'lucide-react';

const languages = [
    { code: 'en', name: 'English', native: 'English', status: 'live', path: '/', badge: 'Universal' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்', status: 'live', path: '/tamil-nadu', badge: 'Live Hub' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी', status: 'review', badge: 'Translating' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు', status: 'review', badge: 'Translating' },
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', status: 'review', badge: 'Translating' },
    { code: 'ml', name: 'Malayalam', native: 'മലയാളം', status: 'review', badge: 'Translating' },
    { code: 'bn', name: 'Bengali', native: 'বাংলা', status: 'review', badge: 'Translating' },
    { code: 'mr', name: 'Marathi', native: 'मराठी', status: 'review', badge: 'Translating' },
    { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', status: 'review', badge: 'Translating' },
    { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', status: 'review', badge: 'Translating' },
    { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ', status: 'review', badge: 'Translating' },
    { code: 'ur', name: 'Urdu', native: 'اردو', status: 'review', badge: 'Translating' },
];

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [pendingLang, setPendingLang] = useState(null);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const isTamilActive = location.pathname.startsWith('/tamil-nadu');
    const currentCode = isTamilActive ? 'ta' : 'en';

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    // Close on ESC
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                setIsOpen(false);
                setPendingLang(null);
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleSelectLanguage = (lang) => {
        if (lang.status === 'live') {
            setIsOpen(false);
            setPendingLang(null);
            navigate(lang.path);
        } else {
            setPendingLang(lang);
        }
    };

    return (
        <div ref={dropdownRef} className="relative">
            {/* ── Navbar Language Pill Trigger ── */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] ${
                    isOpen 
                        ? 'bg-primary/10 text-primary border border-primary/30' 
                        : 'bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary/40 hover:text-primary'
                }`}
                aria-label="Select Language (மொழிகள்)"
                aria-expanded={isOpen}
                aria-haspopup="dialog"
            >
                <Globe className="w-4 h-4 text-primary" />
                <span>{isTamilActive ? 'தமிழ்' : 'English'}</span>
                <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-primary/10 text-primary">
                    12 IN
                </span>
            </button>

            {/* ── Dropdown Panel ── */}
            {isOpen && (
                <div 
                    role="dialog"
                    aria-modal="true"
                    aria-label="Language Selector"
                    className="absolute right-0 sm:right-auto sm:left-0 top-full mt-2 w-80 sm:w-96 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2"
                >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-primary" />
                            <h3 className="font-extrabold text-xs uppercase tracking-wider text-gray-900 dark:text-white">
                                Indian Languages • மொழிகள்
                            </h3>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-lg"
                            aria-label="Close language selector"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">
                        To maintain 100% legal precision, we publish only <strong>human-verified statutory translations</strong> without unreviewed machine translation.
                    </p>

                    {/* Language Grid */}
                    <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto p-1">
                        {languages.map((lang) => {
                            const isSelected = currentCode === lang.code;
                            return (
                                <button
                                    key={lang.code}
                                    type="button"
                                    onClick={() => handleSelectLanguage(lang)}
                                    className={`flex items-center justify-between p-2.5 rounded-xl text-left transition-all border text-xs ${
                                        isSelected
                                            ? 'bg-primary/10 border-primary text-primary font-bold'
                                            : lang.status === 'live'
                                            ? 'bg-gray-50 dark:bg-gray-900/60 border-gray-200 dark:border-gray-800 hover:border-primary/40 text-gray-800 dark:text-gray-200'
                                            : 'bg-white dark:bg-gray-950 border-gray-150 dark:border-gray-850 hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400 opacity-90'
                                    }`}
                                >
                                    <div>
                                        <div className="font-bold flex items-center gap-1">
                                            <span>{lang.native}</span>
                                            {isSelected && <Check className="w-3.5 h-3.5 text-primary shrink-0" />}
                                        </div>
                                        <div className="text-[10px] text-gray-400">{lang.name}</div>
                                    </div>
                                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                                        lang.status === 'live' 
                                            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300' 
                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                                    }`}>
                                        {lang.badge}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* ── Translation In Progress Modal Notice ── */}
                    {pendingLang && (
                        <div className="mt-3 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200 text-xs space-y-2 animate-in fade-in">
                            <div className="flex items-center gap-1.5 font-bold">
                                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                                <span>{pendingLang.native} ({pendingLang.name}) Translation in Progress</span>
                            </div>
                            <p className="text-[11px] leading-relaxed text-amber-800 dark:text-amber-300">
                                This regional hub is undergoing certified legal translation to ensure statutory clauses match state government gazettes.
                            </p>
                            <div className="flex items-center gap-2 pt-1">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setPendingLang(null);
                                        navigate('/');
                                    }}
                                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-3 py-1.5 rounded-lg text-[11px] transition-colors"
                                >
                                    Browse in English
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setPendingLang(null);
                                        navigate('/tamil-nadu');
                                    }}
                                    className="bg-white dark:bg-gray-900 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800 font-bold px-3 py-1.5 rounded-lg text-[11px] hover:bg-amber-100 transition-colors"
                                >
                                    View Tamil Hub (தமிழ்)
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
