import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Home, MapPin, Calculator, FileText, ArrowRight, HelpCircle } from 'lucide-react';
import SearchModal from '../components/SearchModal';

export default function NotFoundPage() {
    const [searchOpen, setSearchOpen] = useState(false);
    const navigate = useNavigate();

    const popularLinks = [
        { label: '🧭 Who Should I Complain To? (Authority Finder)', path: '/tools/authority-finder' },
        { label: '💰 Take-Home Salary Calculator', path: '/salary-calculator' },
        { label: '🏆 Gratuity Payout Calculator', path: '/tools/gratuity-calculator' },
        { label: '✍️ Labour Grievance Generator', path: '/tools/grievance-generator' },
        { label: '📍 State-Wise Labour Laws', path: '/state-labour-laws' },
        { label: '❓ Master FAQ (180+ Questions)', path: '/faq' },
    ];

    return (
        <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 bg-gray-50 dark:bg-gray-900">
            <Helmet>
                <title>404 — Page Not Found | Employee Rights India</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in">
                
                {/* 404 Badge */}
                <div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-3">
                        Error 404
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                        Page Not Found
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 max-w-md mx-auto leading-relaxed">
                        The requested page URL might have been renamed, moved, or updated. Search our site or explore top legal tools below.
                    </p>
                </div>

                {/* Search Box Trigger */}
                <div className="max-w-md mx-auto">
                    <button
                        type="button"
                        onClick={() => setSearchOpen(true)}
                        className="w-full p-4 rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-soft flex items-center gap-3 text-gray-500 hover:border-primary/50 transition-all text-sm font-semibold group"
                    >
                        <Search className="w-5 h-5 text-primary" />
                        <span className="flex-1 text-left">Search all 50+ tools, laws & guides...</span>
                        <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-xs text-gray-500">
                            ⌘K
                        </kbd>
                    </button>
                </div>

                {/* Popular Links */}
                <div className="bg-white dark:bg-gray-950 rounded-3xl border border-gray-150 dark:border-gray-800 p-6 sm:p-8 text-left space-y-4 shadow-soft">
                    <h3 className="font-extrabold text-xs uppercase tracking-wider text-gray-400">
                        Popular Recommended Tools & Guides
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {popularLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                to={link.path}
                                className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-xs font-bold text-gray-800 dark:text-gray-200 hover:border-primary/40 hover:text-primary transition-all flex items-center justify-between group"
                            >
                                <span className="truncate">{link.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Back to Home Button */}
                <div>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-primary text-white text-xs font-extrabold shadow-soft hover:bg-primary/90 transition-all"
                    >
                        <Home className="w-4 h-4" />
                        Return to Homepage
                    </Link>
                </div>

            </div>

            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        </div>
    );
}
