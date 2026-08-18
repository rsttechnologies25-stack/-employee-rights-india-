import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, ChevronDown, Moon, Sun, Compass, HelpCircle, FileText, Scale } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const navGroups = [
    {
        label: "Dispute Guides",
        items: [
            { to: '/tools/authority-finder', label: '🧭 Who Should I Complain To? (Authority Finder)' },
            { to: '/tools/problem-wizard', label: '❓ Workplace Problem Wizard' },
            { to: '/disputes/absconding-allegation', label: '🏃 Absconding Allegation Guide' },
            { to: '/disputes/no-employment-record', label: '📁 No Appointment / Offer Letter Guide' },
            { to: '/disputes/handover-asset-dispute', label: '💻 Laptop & Asset Return Dispute' },
            { to: '/disputes/data-misuse-allegation', label: '🔒 Data Misuse / IP Threat Defense' },
            { to: '/trainee-apprentice-rights', label: '🎓 Trainee & Apprentice Rights' },
            { to: '/complaint-guide', label: '📋 Official Government Portals Guide' },
        ]
    },
    {
        label: "Tools & Kits",
        items: [
            { to: '/tools', label: '🛠️ Master Calculators & Tools Hub' },
            { to: '/tools/authority-finder', label: '🧭 Authority Finder Tool' },
            { to: '/tools/evidence-checklist', label: '📁 Evidence Preservation Checklist' },
            { to: '/tools/case-timeline-builder', label: '⏱️ Case Timeline Builder' },
            { to: '/tools/grievance-generator', label: '✍️ Grievance Complaint Generator' },
            { to: '/tools/legal-notice-generator', label: '📜 Legal Notice Generator' },
            { to: '/tools/posh-complaint-builder', label: '⚠️ POSH Complaint Builder' },
            { to: '/salary-calculator', label: '💰 Take-Home Salary Calculator' },
            { to: '/tools/gratuity-calculator', label: '🏆 Gratuity Calculator' },
            { to: '/tools/notice-buyout-calculator', label: '📝 Notice Buyout Calculator' },
            { to: '/tools/notice-adjustment-calculator', label: '🏖️ Leave vs Notice Offsetter' },
            { to: '/tools/ff-calculator', label: '💼 Full & Final Settlement Calculator' },
            { to: '/tools/employment-bond-scanner', label: '⚖️ Bond Legality Scanner' },
            { to: '/tools/pip-defense', label: '🛡️ PIP Defense Kit' },
            { to: '/tools/bgv-shield', label: '🛡️ BGV Defamation Shield' },
            { to: '/tools/overtime-tracker', label: '⏰ 2x Overtime Tracker' },
            { to: '/tools/minimum-wage-checker', label: '📊 Minimum Wage Checker' },
            { to: '/templates', label: '📄 Letter Templates (Resignations/Requests)' },
        ]
    },
    {
        label: "Salary & Exit",
        items: [
            { to: '/delayed-salary', label: 'Unpaid / Delayed Salary' },
            { to: '/salary-calculation', label: 'Salary Calculation Rules' },
            { to: '/full-final-settlement', label: 'Full & Final (F&F) Settlement' },
            { to: '/notice-period', label: 'Notice Period Rules' },
            { to: '/termination/probation', label: 'Termination in Probation' },
            { to: '/termination/after-confirmation', label: 'Termination / Retrenchment' },
            { to: '/termination/wrongful', label: 'Wrongful Termination' },
            { to: '/relieving-letter', label: 'Relieving Letter Rights' },
            { to: '/experience-letter', label: 'Experience Certificate Rights' },
            { to: '/gratuity', label: 'Gratuity Payout Rights' },
            { to: '/form-16-rights', label: 'Form 16 & TDS Rights' },
        ]
    },
    {
        label: "Statutes & States",
        items: [
            { to: '/state-labour-laws', label: 'State-Wise Labour Laws (28 States)' },
            { to: '/tamil-nadu', label: 'Tamil Nadu Mega-Hub (தமிழ்)' },
            { to: '/tamil-nadu-minimum-wages', label: 'TN Minimum Wages 2025' },
            { to: '/minimum-wages', label: 'All-India Minimum Wages' },
            { to: '/whats-new', label: '🆕 What\'s New 2025–2026' },
            { to: '/new-labour-codes', label: '4 New Labour Codes' },
            { to: '/maternity-rights', label: 'Maternity Benefits (26 Weeks)' },
            { to: '/posh-act', label: 'POSH Act (Harassment)' },
            { to: '/working-hours', label: 'Working Hours & Overtime' },
            { to: '/leave-holidays', label: 'Leave & Holidays' },
            { to: '/contracts', label: 'Employment Contracts & Bonds' },
            { to: '/data-privacy', label: 'Workplace Data Privacy' },
            { to: '/moonlighting', label: 'Moonlighting & Dual Jobs' },
        ]
    },
    {
        label: "Trust & FAQ",
        items: [
            { to: '/about', label: 'About RexonSoftTech' },
            { to: '/editorial-policy', label: 'Editorial & Verification Policy' },
            { to: '/disclaimer', label: 'Legal Disclaimer' },
            { to: '/privacy-policy', label: 'Privacy Policy' },
            { to: '/terms', label: 'Terms of Use' },
            { to: '/contact', label: 'Contact Editorial Desk' },
            { to: '/faq', label: 'Master FAQ (180+ Questions)' },
        ]
    }
];

const directLinks = [
    { to: '/tools/authority-finder', label: '🧭 Authority Finder', highlight: true },
    { to: '/rights', label: 'All Rights Index' },
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
                className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors ${
                    isOpen
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
                {group.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-72 bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-800 rounded-2xl shadow-xl py-2 z-50 animate-fade-in max-h-[420px] overflow-y-auto">
                    {group.items.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={onClose}
                            className="block px-4 py-2 text-xs text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 font-medium transition-colors"
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
    const location = useLocation();
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
    }, [location]);

    const handleDropdownToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <nav className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-150 dark:border-gray-800 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    
                    {/* Brand Logo */}
                    <Link to="/" className="flex items-center gap-2 text-primary font-black text-lg tracking-tight shrink-0">
                        <ShieldCheck className="w-7 h-7 text-primary fill-primary/10" />
                        <span className="text-gray-900 dark:text-gray-100">Employee Rights</span>
                        <span className="text-primary text-xs font-bold px-1.5 py-0.5 bg-primary/10 rounded">India</span>
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

                    {/* Direct Highlight Links & Dark Mode */}
                    <div className="hidden lg:flex items-center gap-3">
                        {directLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all ${
                                    link.highlight
                                        ? 'bg-primary text-white hover:bg-primary/90 shadow-soft'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle Dark Mode"
                            className="p-2 rounded-xl text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-600" />}
                        </button>
                    </div>

                    {/* Mobile Hamburger Menu Toggle */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle Dark Mode"
                            className="p-2 rounded-xl text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-600" />}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Open Navigation Menu"
                            className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto animate-fade-in">
                    <Link
                        to="/tools/authority-finder"
                        className="block w-full py-3 px-4 bg-primary text-white text-center rounded-xl font-bold text-xs shadow-soft"
                    >
                        🧭 Launch Authority Finder
                    </Link>

                    {navGroups.map((group, idx) => {
                        const isExpanded = mobileExpandedGroup === idx;
                        return (
                            <div key={group.label} className="border border-gray-150 dark:border-gray-800 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setMobileExpandedGroup(isExpanded ? null : idx)}
                                    className="w-full flex items-center justify-between p-3 text-xs font-bold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900"
                                >
                                    <span>{group.label}</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                </button>
                                {isExpanded && (
                                    <div className="p-2 space-y-1 bg-white dark:bg-gray-950">
                                        {group.items.map((item) => (
                                            <Link
                                                key={item.to}
                                                to={item.to}
                                                className="block px-3 py-2 text-xs text-gray-600 dark:text-gray-400 hover:text-primary"
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
