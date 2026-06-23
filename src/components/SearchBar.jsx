import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { searchIndex } from '../data/searchIndex';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (query.length > 1) {
            const lowerQuery = query.toLowerCase();
            const filtered = searchIndex.filter(item => 
                item.title.toLowerCase().includes(lowerQuery) || 
                item.type.toLowerCase().includes(lowerQuery)
            ).slice(0, 5); // Max 5 results
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

    return (
        <div ref={wrapperRef} className="relative w-full min-w-[150px] lg:min-w-[250px] max-w-xs ml-4 hidden md:block flex-shrink-0">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search rights, rules..."
                    className="w-full pl-9 pr-8 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-gray-100"
                />
                {query && (
                    <button 
                        onClick={() => setQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-400"
                    >
                        <X className="w-3 h-3" />
                    </button>
                )}
            </div>

            {isOpen && results.length > 0 && (
                <div className="absolute top-full left-0 w-[300px] lg:w-[400px] mt-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-lg overflow-hidden z-50">
                    <ul className="py-1">
                        {results.map((result, idx) => (
                            <li key={idx}>
                                <Link
                                    to={result.path}
                                    onClick={handleSelect}
                                    className="block px-4 py-2.5 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{result.title}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{result.type}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {isOpen && query.length > 1 && results.length === 0 && (
                <div className="absolute top-full left-0 w-[300px] lg:w-[400px] mt-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-lg p-4 z-50 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">No results found.</p>
                </div>
            )}
        </div>
    );
}
