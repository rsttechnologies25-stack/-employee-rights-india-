import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, ChevronDown, Moon, Sun, Search, Compass, Scale, HelpCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SearchModal from './SearchModal';

const navGroups = [
    {
        label: "Employee Rights",
        items: [
            { to: '/rights', label: '⚖️ All Rights Index (Master Overview)' },
            { to: '/delayed-salary', label: '💰 Unpaid & Delayed Salary Rights' },
            { to: '/notice-period', label: '📝 Notice Period & Buyout Rules' },
            { to: '/termination/after-confirmation', label: '🚪 Termination & Severance Pay' },
            { to: '/relieving-letter', label: '📄 Relieving & Experience Letter Rights' },
            { to: '/gratuity', label: '🏆 Gratuity Payout Rights (4y 240d Rule)' },
            { to: '/pf-esi', label: '🏦 PF & ESI Statutory Rights' },
            { to: '/posh-act', label: '⚠️ Workplace Harassment (POSH Act)' },
            { to: '/maternity-rights', label: '👩 Maternity Benefit Rights (26 Weeks)' },
            { to: '/working-hours', label: '⏰ Working Hours & Overtime Rules' },
            { to: '/leave-holidays', label: '🏖️ Earned Leave & Encashment' },
            { to: '/professional-tax', label: '📊 Professional Tax & TDS Rights' }
        ]
    },
    {
        label: "Workplace Problems",
        items: [
            { to: '/tools/problem-wizard', label: '❓ Workplace Problem Assessment Wizard' },
            { to: '/tools/authority-finder', label: '🧭 Authority Finder (Who Should I Complain To?)' },
            { to: '/disputes/absconding-allegation', label: '🏃 Falsely Tagged Absconder Guide' },
            { to: '/disputes/no-employment-record', label: '📁 Working Without Appointment Letter' },
            { to: '/disputes/handover-asset-dispute', label: '💻 Laptop & Asset Return Dispute' },
            { to: '/disputes/data-misuse-allegation', label: '🔒 Data Misuse & IP Threat Defense' },
            { to: '/tools/employment-bond-scanner', label: '⚖️ Bond Legality & Penalty Audit' },
            { to: '/tools/pip-defense', label: '🛡️ Biased PIP Defense Kit' },
            { to: '/micromanagement-weekend-work', label: '🔍 Micromanagement & Workplace Control' }
        ]
    },
    {
        label: "Tools & Calculators",
        items: [
            { to: '/tools', label: '🛠️ Master Tools & Calculators Hub' },
            { to: '/salary-calculator', label: '💰 Take-Home Salary Calculator' },
            { to: '/tools/ctc-deduction-scanner', label: '📊 CTC & Salary Slip Hidden Deduction Scanner' },
            { to: '/tools/gratuity-calculator', label: '🏆 Gratuity Eligibility Calculator' },
            { to: '/tools/notice-buyout-calculator', label: '📝 Notice Buyout & Leave Offset Calculator' },
            { to: '/tools/ff-calculator', label: '💼 Full & Final (F&F) Settlement Calculator' },
            { to: '/tools/grievance-generator', label: '✍️ Grievance Complaint Letter Generator' },
            { to: '/tools/legal-notice-generator', label: '📜 Advocate-Grade Legal Demand Notice' },
            { to: '/tools/evidence-checklist', label: '📁 Evidence Preservation Checklist' },
            { to: '/templates', label: '📄 Letter Templates (Resignation/Requests)' }
        ]
    },
    {
        label: "States & Laws",
        items: [
            { to: '/state-labour-laws', label: '🗺️ State Labour Laws (28 States)' },
            { to: '/tamil-nadu', label: '🌴 Tamil Nadu Labour Law Hub (தமிழ்)' },
            { to: '/tamil-nadu-minimum-wages', label: '📊 TN Minimum Wages 2025' },
            { to: '/minimum-wages', label: '🇮🇳 All-India Minimum Wages' },
            { to: '/new-labour-codes', label: '📜 4 New Labour Codes Status' },
            { to: '/whats-new', label: '🆕 Statutory Updates 2025–2026' }
        ]
    },
    {
        label: "Trust & Legal",
        items: [
            { to: '/about', label: '🏢 About Employee Rights India' },
            { to: '/editorial-policy', label: '✍️ Editorial & Verification Policy' },
            { to: '/disclaimer', label: '📜 Legal Disclaimer' },
            { to: '/privacy-policy', label: '🔒 Privacy Policy' },
            { to: '/faq', label: '❓ Master FAQ (180+ Questions)' }
        ]
    }
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
                type="button"
                onClick={onToggle}
                className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl transition-all min-h-[44px] ${
                    isOpen
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
                {group.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-800 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in max-h-[420px] overflow-y-auto">
                    {group.items.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={onClose}
                            className="block px-4 py-2.5 text-xs text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 font-semibold transition-colors min-h-[40px] flex items-center"
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileExpandedGroup, setMobileExpandedGroup] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const location = useLocation();
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
    }, [location]);

    useEffect(() => {
        const handleOpenEvent = () => setSearchOpen(true);
        window.addEventListener('open-search-modal', handleOpenEvent);
        return () => window.removeEventListener('open-search-modal', handleOpenEvent);
    }, []);

    const handleDropdownToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <nav className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-150 dark:border-gray-800 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    
                    {/* Brand Logo */}
                    <Link to="/" className="flex items-center gap-2 text-primary font-black text-lg tracking-tight shrink-0 min-h-[44px]">
                        <ShieldCheck className="w-7 h-7 text-primary fill-primary/10" />
                        <span className="text-gray-900 dark:text-gray-100 font-black">Employee Rights</span>
                        <span className="text-primary text-[11px] font-extrabold px-1.5 py-0.5 bg-primary/10 rounded-md">India</span>
                    </Link>

                    {/* Desktop Navigation Groups */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navGroups.map((group, index) => (
                            <DropdownMenu
                                key={group.label}
                                group={group}
                                isOpen={openDropdown === index}
                                onToggle={() => handleDropdownToggle(index)}
                                onClose={() => setOpenDropdown(null)}
                            />
                        ))}
                    </div>

                    {/* Search & Theme Controls */}
                    <div className="hidden lg:flex items-center gap-2.5">
                        
                        {/* Search Button */}
                        <button
                            type="button"
                            onClick={() => setSearchOpen(true)}
                            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-primary/40 hover:text-primary transition-all min-h-[44px]"
                            aria-label="Open Search Modal"
                        >
                            <Search className="w-4 h-4 text-primary" />
                            <span>Search...</span>
                            <kbd className="px-1.5 py-0.5 text-[10px] font-bold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-gray-500">
                                ⌘K
                            </kbd>
                        </button>

                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label="Toggle Dark Mode"
                            className="p-2.5 rounded-xl text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        >
                            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
                        </button>
                    </div>

                    {/* Mobile Hamburger Menu & Search Toggle */}
                    <div className="flex items-center gap-1.5 lg:hidden">
                        <button
                            type="button"
                            onClick={() => setSearchOpen(true)}
                            aria-label="Open Search"
                            className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                        >
                            <Search className="w-5 h-5 text-primary" />
                        </button>

                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label="Toggle Dark Mode"
                            className="p-2.5 rounded-xl text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                        >
                            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
                        </button>

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Open Navigation Menu"
                            className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Global Search Overlay Modal */}
            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-4 py-4 space-y-3 max-h-[85vh] overflow-y-auto animate-in fade-in">
                    
                    {/* Primary Mobile Action Buttons */}
                    <button
                        type="button"
                        onClick={() => { setMobileMenuOpen(false); setSearchOpen(true); }}
                        className="w-full min-h-[44px] px-4 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 text-center rounded-xl font-bold text-xs flex items-center justify-center gap-2"
                    >
                        <Search className="w-4 h-4 text-primary" />
                        Search All Tools, Laws & Guides (⌘K)
                    </button>

                    <Link
                        to="/tools/problem-wizard"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full min-h-[44px] px-4 bg-accent text-white text-center rounded-xl font-bold text-xs shadow-soft flex items-center justify-center gap-2"
                    >
                        <HelpCircle className="w-4 h-4" /> Tell Us Your Problem
                    </Link>

                    <Link
                        to="/tools/authority-finder"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full min-h-[44px] px-4 bg-primary text-white text-center rounded-xl font-bold text-xs shadow-soft flex items-center justify-center gap-2"
                    >
                        <Compass className="w-4 h-4" /> Launch Authority Finder
                    </Link>

                    {/* Nav Groups Accordions */}
                    {navGroups.map((group, idx) => {
                        const isExpanded = mobileExpandedGroup === idx;
                        return (
                            <div key={group.label} className="border border-gray-150 dark:border-gray-800 rounded-xl overflow-hidden">
                                <button
                                    type="button"
                                    onClick={() => setMobileExpandedGroup(isExpanded ? null : idx)}
                                    className="w-full min-h-[44px] flex items-center justify-between px-4 text-xs font-bold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900"
                                >
                                    <span>{group.label}</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                </button>
                                {isExpanded && (
                                    <div className="p-2 space-y-1 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-850">
                                        {group.items.map((item) => (
                                            <Link
                                                key={item.to}
                                                to={item.to}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="block px-3 py-2.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-primary min-h-[40px] flex items-center"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                </div>
            )}
        </nav>
    );
}
