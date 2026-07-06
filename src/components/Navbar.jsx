import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const navGroups = [
    {
        label: "Tamil Nadu Hub",
        items: [
            { to: '/tamil-nadu', label: 'TN Mega-Hub (தமிழ்)' },
            { to: '/tamil-nadu-minimum-wages', label: 'TN Minimum Wages 2025' },
        ]
    },
    {
        label: "Women's Rights",
        items: [
            { to: '/maternity-rights', label: 'Maternity Benefits' },
            { to: '/posh-act', label: 'POSH Act (Harassment)' },
        ]
    },
    {
        label: 'Workplace Rules',
        items: [
            { to: '/new-labour-codes', label: 'New Labour Codes (2025)' },
            { to: '/state-labour-laws', label: 'State-Wise Labour Laws' },
            { to: '/working-hours', label: 'Working Hours & Overtime' },
            { to: '/leave-holidays', label: 'Leave & Holidays' },
            { to: '/contracts', label: 'Contracts & Bonds' },
            { to: '/illegal-practices', label: 'Illegal Employer Practices' },
            { to: '/moonlighting', label: 'Moonlighting & Dual Jobs' },
            { to: '/data-privacy', label: 'Data Privacy & Tracking' },
        ]
    },
    {
        label: 'Termination & Exit',
        items: [
            { to: '/notice-period', label: 'Notice Period Rules' },
            { to: '/pip-guide', label: 'PIP (Performance Plan) Rights' },
            { to: '/forced-resignation', label: 'Forced Resignation' },
            { to: '/termination/probation', label: 'Termination During Probation' },
            { to: '/termination/after-confirmation', label: 'Termination After Confirmation' },
            { to: '/termination/wrongful', label: 'Wrongful Termination' },
            { to: '/full-final-settlement', label: 'Full & Final Settlement' },
            { to: '/exit-process', label: 'Exit Process' },
        ]
    },
    {
        label: 'Salary & Tax',
        items: [
            { to: '/salary-calculation', label: 'Salary Calculation Rules' },
            { to: '/pay-cycle', label: 'Pay Cycle Guide' },
            { to: '/delayed-salary', label: 'Delayed Salary' },
            { to: '/form-16-rights', label: 'Form 16 & TDS Rights' },
        ]
    },
    {
        label: 'Benefits & Docs',
        items: [
            { to: '/gratuity', label: 'Gratuity Rights' },
            { to: '/pf-esi', label: 'PF & ESI Rules' },
            { to: '/experience-letter', label: 'Experience Letter' },
            { to: '/relieving-letter', label: 'Relieving Letter' },
            { to: '/service-certificate', label: 'Service Certificate' },
        ]
    },
    {
        label: 'Tools & FAQ',
        items: [
            { to: '/tools', label: 'Calculators' },
            { to: '/templates', label: 'Letter Templates' },
            { to: '/complaint-guide', label: 'How to File Complaint' },
            { to: '/faq', label: 'Master FAQ' },
        ]
    },
];

const directLinks = [
    { to: '/rights', label: 'All Rights Index', highlight: true },
];

function DropdownMenu({ group, isOpen, onToggle, onClose }) {
    const ref = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) onClose();
        };
        if (isOpen) document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [isOpen, onClose]);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={onToggle}
                className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary font-medium transition-colors text-sm"
            >
                {group.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-950 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 py-2 min-w-[220px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {group.items.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={onClose}
                            className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-primary/5 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileExpanded, setMobileExpanded] = useState(null);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setMobileExpanded(null);
    }, [location.pathname]);

    return (
        <nav className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 shadow-sm transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center flex-1">
                        <Link to="/" className="flex items-center gap-2 group">
                            <ShieldCheck className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                            <div className="hidden sm:flex flex-col">
                                <span className="font-bold text-xl leading-none tracking-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors">Employee Rights</span>
                                <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">India Guide</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-5">
                        <button 
                            onClick={toggleTheme}
                            className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <Link to="/rights" className="text-accent hover:text-accent-dark font-bold transition-colors text-sm">All Rights</Link>
                        {navGroups.map((group, idx) => (
                            <DropdownMenu
                                key={idx}
                                group={group}
                                isOpen={openDropdown === idx}
                                onToggle={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                                onClose={() => setOpenDropdown(null)}
                            />
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-400 focus:outline-none p-2">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 shadow-lg max-h-[80vh] overflow-y-auto">
                    <div className="p-4 space-y-1">
                        {/* Direct links */}
                        {directLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${link.highlight ? 'text-accent hover:bg-accent/5 font-bold' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-900 hover:text-primary'}`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Grouped sections */}
                        {navGroups.map((group, idx) => (
                            <div key={idx} className="border-t border-gray-50 dark:border-gray-800 pt-1 mt-1">
                                <button
                                    onClick={() => setMobileExpanded(mobileExpanded === idx ? null : idx)}
                                    className="w-full flex items-center justify-between px-4 py-3 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:bg-gray-900 rounded-lg transition-colors"
                                >
                                    <span>{group.label}</span>
                                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${mobileExpanded === idx ? 'rotate-180' : ''}`} />
                                </button>
                                {mobileExpanded === idx && (
                                    <div className="pl-4 space-y-0.5 pb-2">
                                        {group.items.map((item) => (
                                            <Link
                                                key={item.to}
                                                to={item.to}
                                                className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
