import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Search, X, ArrowRight, FileText, Calculator, ShieldAlert, Scale, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { searchIndex } from '../data/searchIndex';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (query.trim().length > 1) {
            const lowerQuery = query.toLowerCase().trim();
            const terms = lowerQuery.split(' ').filter(Boolean);

            const filtered = searchIndex.filter(item => {
                const titleLower = item.title.toLowerCase();
                const typeLower = item.type.toLowerCase();
                const tagsMatch = item.tags && item.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
                
                // Match if all search terms or full phrase match
                const termsMatch = terms.every(term => 
                    titleLower.includes(term) || 
                    typeLower.includes(term) || 
                    (item.tags && item.tags.some(t => t.toLowerCase().includes(term)))
                );

                return titleLower.includes(lowerQuery) || typeLower.includes(lowerQuery) || tagsMatch || termsMatch;
            }).slice(0, 8); // Show up to 8 rich results

            setResults(filtered);
            setIsOpen(true);
        } else {
            setResults([]);
            setIsOpen(false);
        }
    }, [query]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = () => {
        setIsOpen(false);
        setQuery('');
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'Diagnostic Tool': return 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300';
            case 'Calculator': return 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300';
            case 'Generator': return 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300';
            case 'Dispute Guide': return 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300';
            case 'State Law': return 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300';
            default: return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
        }
    };

    return (
        <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto z-30 text-left">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search e.g. 'salary not paid', 'authority finder', 'gratuity', 'absconding'..."
                    className="w-full pl-12 pr-10 py-3.5 sm:py-4 text-sm sm:text-base bg-white dark:bg-gray-950 border-2 border-white/20 shadow-2xl rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-400"
                />
                {query && (
                    <button 
                        onClick={() => setQuery('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-300"
                    >
                        <X className="w-5 h-5" />
                    </button>
                )}
            </div>

            {isOpen && results.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden z-50 animate-fade-in max-h-[400px] overflow-y-auto">
                    <div className="p-2 border-b border-gray-100 dark:border-gray-800 text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3">
                        Matching Guides & Tools ({results.length})
                    </div>
                    <ul className="divide-y divide-gray-100 dark:divide-gray-800/60">
                        {results.map((result, idx) => (
                            <li key={idx}>
                                <Link
                                    to={result.path}
                                    onClick={handleSelect}
                                    className="flex items-center justify-between p-3.5 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group"
                                >
                                    <div className="space-y-0.5">
                                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
                                            {result.title}
                                        </p>
                                        <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${getTypeColor(result.type)}`}>
                                            {result.type}
                                        </span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isOpen && query.trim().length > 1 && results.length === 0 && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-800 rounded-2xl shadow-2xl p-6 z-50 text-center animate-fade-in">
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        No direct matches found for "{query}".
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                        Try checking our <Link to="/tools/problem-wizard" onClick={handleSelect} className="text-primary font-bold hover:underline">Problem Wizard</Link> or <Link to="/rights" onClick={handleSelect} className="text-primary font-bold hover:underline">Rights Directory</Link>.
                    </p>
                </div>
            )}
        </div>
    );
}
