import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Shield, Calculator, FileText, MapPin, Scale, HelpCircle, AlertTriangle, BookOpen, ExternalLink } from 'lucide-react';

// Comprehensive Site Index for Employee Rights India
const SITE_INDEX = [
    // ── CORE DISPUTE GUIDES ──
    {
        title: 'Delayed or Unpaid Salary Recovery',
        category: 'Dispute Guide',
        path: '/delayed-salary',
        description: 'Legal steps, 7th & 10th pay day laws, Payment of Wages Act, and recovery complaint options.',
        keywords: ['salary not paid', 'unpaid wages', 'delayed pay', 'payroll delay', 'salary recovery', '7th deadline'],
        icon: Scale
    },
    {
        title: 'Wrongful & Illegal Termination Defense',
        category: 'Dispute Guide',
        path: '/termination/wrongful',
        description: 'Illegal dismissal, Labour Court remedies, reinstatement rights, and back-wages claiming.',
        keywords: ['wrongful termination', 'illegal firing', 'labour court', 'reinstatement', 'unfair dismissal', 'fired without reason'],
        icon: Scale
    },
    {
        title: 'Termination During Probation Period',
        category: 'Dispute Guide',
        path: '/termination/probation',
        description: 'Notice period rules during probation, immediate termination clauses, and PF rights.',
        keywords: ['probation termination', 'fired in probation', 'probation notice', 'probation rights'],
        icon: Scale
    },
    {
        title: 'Termination After Confirmation',
        category: 'Dispute Guide',
        path: '/termination/after-confirmation',
        description: 'Retrenchment rules under Industrial Disputes Act Sec 25F, domestic enquiry, and notice pay.',
        keywords: ['confirmed termination', 'retrenchment compensation', 'show cause notice', 'domestic enquiry', 'sec 25f'],
        icon: Scale
    },
    {
        title: 'Forced Resignation & HR Pressure',
        category: 'Dispute Guide',
        path: '/forced-resignation',
        description: 'HR pressuring you to resign? Constructive dismissal rules and evidence collection protocol.',
        keywords: ['forced resignation', 'hr pressure to resign', 'constructive dismissal', 'coerced exit'],
        icon: AlertTriangle
    },
    {
        title: 'Unfair PIP (Performance Improvement Plan) Rights',
        category: 'Dispute Guide',
        path: '/pip-guide',
        description: 'Responding to biased PIPs, silent layoff setups, rebuttal drafting, and severance rights.',
        keywords: ['pip guide', 'performance improvement plan', 'pip rebuttal', 'silent layoff', 'unfair pip'],
        icon: AlertTriangle
    },
    {
        title: 'Absconding Allegation Defense',
        category: 'Dispute Guide',
        path: '/disputes/absconding-allegation',
        description: 'What to do if employer tags you as absconded after resignation or health leave.',
        keywords: ['absconding notice', 'job abandonment', 'falsely tagged absconded', 'absconding defense'],
        icon: Shield
    },
    {
        title: 'Employer Denies Employment Record',
        category: 'Dispute Guide',
        path: '/disputes/no-employment-record',
        description: 'Proving employment without an appointment letter using bank statements, Form 26AS, and EPFO.',
        keywords: ['no appointment letter', 'proving employment', 'form 26as proof', 'cash salary proof'],
        icon: Shield
    },
    {
        title: 'Laptop & Asset Return Disputes',
        category: 'Dispute Guide',
        path: '/disputes/handover-asset-dispute',
        description: 'Legal laptop return protocols, avoiding illegal asset damage deductions from F&F.',
        keywords: ['laptop return', 'asset deduction', 'clearance receipt', 'handover dispute'],
        icon: Shield
    },
    {
        title: 'Employer Alleges Data Misuse / IP Theft',
        category: 'Dispute Guide',
        path: '/disputes/data-misuse-allegation',
        description: 'Defense against IT Act threats, confidentiality breach allegations, and non-competes.',
        keywords: ['data misuse allegation', 'it act 66 threat', 'confidentiality breach', 'ip theft allegation'],
        icon: Shield
    },

    // ── GUIDED DECISION TOOLS ──
    {
        title: 'Authority Finder — "Who Should I Complain To?"',
        category: 'Decision Tool',
        path: '/tools/authority-finder',
        description: 'Find exact government authority (State ALC, Central RLC, EPFO, ESIC, ICC) for your issue.',
        keywords: ['authority finder', 'where to complain', 'labour commissioner jurisdiction', 'samadhan portal', 'epfo complaint'],
        icon: MapPin
    },
    {
        title: 'Workplace Problem Assessment Wizard',
        category: 'Decision Tool',
        path: '/tools/problem-wizard',
        description: '7-step wizard to diagnose your situation, check legal strength, and generate an action plan.',
        keywords: ['problem wizard', 'workplace dispute evaluation', 'check my case', 'problem assessment'],
        icon: Calculator
    },
    {
        title: 'Legal Evidence Preservation Checklist',
        category: 'Decision Tool',
        path: '/tools/evidence-checklist',
        description: '17-point legal evidence preservation checklist to prepare before filing labour complaints.',
        keywords: ['evidence checklist', 'preserving emails', 'labour court evidence', 'payslip proof'],
        icon: FileText
    },
    {
        title: 'Case Timeline & Incident Log Builder',
        category: 'Decision Tool',
        path: '/tools/case-timeline-builder',
        description: 'Build a printable chronological dossier of incidents for Labour Commissioner conciliation.',
        keywords: ['timeline builder', 'case chronology', 'incident log', 'annexure format'],
        icon: FileText
    },
    {
        title: 'Salary Slip & CTC Hidden Deduction Scanner',
        category: 'Decision Tool',
        path: '/tools/ctc-deduction-scanner',
        description: 'Audit illegal employer PF shifts, monthly gratuity deductions, and Basic < 50% CTC issues.',
        keywords: ['ctc deduction scanner', 'salary slip audit', 'employer pf deduction illegal', 'hidden salary deduction'],
        icon: Calculator
    },

    // ── CALCULATORS & AUDITORS ──
    {
        title: 'Take-Home Salary & CTC Breakup Calculator',
        category: 'Calculator',
        path: '/salary-calculator',
        description: 'Calculate net in-hand salary from CTC with PF, PT, HRA, and tax deductions.',
        keywords: ['salary calculator', 'take home salary', 'ctc to in hand', 'salary breakup'],
        icon: Calculator
    },
    {
        title: 'Gratuity Payout & Eligibility Calculator',
        category: 'Calculator',
        path: '/tools/gratuity-calculator',
        description: 'Calculate gratuity payout under Payment of Gratuity Act 1972 (4 yrs 240 days SC rule).',
        keywords: ['gratuity calculator', 'gratuity eligibility', '4 years 240 days rule', '15/26 formula'],
        icon: Calculator
    },
    {
        title: 'Full & Final (F&F) Settlement Calculator',
        category: 'Calculator',
        path: '/tools/ff-calculator',
        description: 'Estimate total exit dues including last salary, leave encashment, gratuity, and notice pay.',
        keywords: ['ff calculator', 'full final settlement', 'fnf calculation', 'exit dues'],
        icon: Calculator
    },
    {
        title: 'Notice Period Buyout Calculator',
        category: 'Calculator',
        path: '/tools/notice-buyout-calculator',
        description: 'Calculate exact buyout cost for unserved notice period days.',
        keywords: ['notice buyout calculator', 'notice period pay', 'unserved notice cost'],
        icon: Calculator
    },
    {
        title: 'Notice Offset & Leave Adjustment Calculator',
        category: 'Calculator',
        path: '/tools/notice-adjustment-calculator',
        description: 'Offset accumulated Earned Leaves against notice shortfall to reduce buyout recovery.',
        keywords: ['notice adjustment calculator', 'adjust leaves against notice', 'notice shortfall'],
        icon: Calculator
    },
    {
        title: 'Retrenchment Severance Pay Calculator',
        category: 'Calculator',
        path: '/tools/severance-calculator',
        description: 'Calculate statutory severance (15 days average pay per completed year) under IDA Sec 25F.',
        keywords: ['severance calculator', 'retrenchment compensation', 'layoff payout', 'sec 25f formula'],
        icon: Calculator
    },
    {
        title: 'Minimum Wage Compliance Checker',
        category: 'Calculator',
        path: '/tools/minimum-wage-checker',
        description: 'Verify if your basic salary meets legal state minimum wage rates for your skill level.',
        keywords: ['minimum wage checker', 'am i underpaid', 'state minimum salary check'],
        icon: Calculator
    },
    {
        title: 'Overtime & Shift Pay Tracker',
        category: 'Calculator',
        path: '/tools/overtime-tracker',
        description: 'Log daily hours and calculate double-rate (2x) overtime pay obligations.',
        keywords: ['overtime tracker', 'overtime calculator', 'double rate overtime', 'working hours tracker'],
        icon: Calculator
    },
    {
        title: 'PF & Pension Evasion Analyzer',
        category: 'Calculator',
        path: '/tools/pf-analyzer',
        description: 'Check EPF/EPS split accuracy and scan CTC for illegal PF evasion by employer.',
        keywords: ['pf analyzer', 'epf evasion', 'pf contribution check', 'eps pension split'],
        icon: Calculator
    },
    {
        title: 'Offer Letter Clause Legality Scanner',
        category: 'Calculator',
        path: '/tools/clause-analyzer',
        description: 'Audit service bonds, non-competes (Sec 27), 200% notice penalties, and moonlighting bans.',
        keywords: ['clause analyzer', 'non compete validity', 'service bond legal', 'contract scanner'],
        icon: Scale
    },
    {
        title: 'POSH ICC Complaint Builder',
        category: 'Calculator',
        path: '/tools/posh-complaint-builder',
        description: 'Draft confidential POSH sexual harassment complaint with 90-day ICC tracking.',
        keywords: ['posh complaint builder', 'icc harassment letter', 'posh format', 'posh act section 12'],
        icon: Shield
    },

    // ── COMPLAINT & LEGAL NOTICE GENERATORS ──
    {
        title: 'Labour Grievance Letter Generator',
        category: 'Generator',
        path: '/tools/grievance-generator',
        description: 'Generate statute-cited formal grievance letter for unpaid salary, withheld relieving, or PF.',
        keywords: ['grievance generator', 'labour complaint letter', 'formal complaint draft', 'hr grievance letter'],
        icon: FileText
    },
    {
        title: 'Advocate-Grade Legal Demand Notice Generator',
        category: 'Generator',
        path: '/tools/legal-notice-generator',
        description: 'Draft an official legal demand notice for unpaid dues under Payment of Wages Act.',
        keywords: ['legal notice generator', 'legal demand letter', 'lawyer notice format', 'formal legal demand'],
        icon: FileText
    },
    {
        title: 'Letter Templates Repository (9 Templates)',
        category: 'Generator',
        path: '/templates',
        description: 'Resignation letters, immediate notice waiver requests, experience letter requests, PF complaints.',
        keywords: ['resignation template', 'experience letter request', 'relieving letter format', 'letter templates'],
        icon: FileText
    },

    // ── STATE LABOUR LAWS & DIRECTORY ──
    {
        title: 'Regional Labour Commissioner Office Directory',
        category: 'Directory',
        path: '/tools/labour-directory',
        description: 'Addresses, phone contacts, official emails, and map links for State ALC & Central RLC offices.',
        keywords: ['labour directory', 'labour commissioner office address', 'alc phone number', 'district labour office'],
        icon: MapPin
    },
    {
        title: 'State-Wise Labour Laws Hub (15+ States)',
        category: 'State Laws',
        path: '/state-labour-laws',
        description: 'Shops & Establishments Act rules, notice period laws, leave policies, and minimum wages by state.',
        keywords: ['state labour laws', 'shops and establishments act', 'state minimum wages', 'karnataka labour law', 'delhi labour law'],
        icon: MapPin
    },
    {
        title: 'Tamil Nadu Labour Laws Mega Hub (EN + Tamil)',
        category: 'State Laws',
        path: '/tamil-nadu',
        description: 'Bilingual guide to Tamil Nadu S&E Act 1947, IT sector exemptions, minimum wages, and complaints.',
        keywords: ['tamil nadu labour law', 'tn minimum wages', 'chennai IT rights', 'tamil labour law'],
        icon: MapPin
    },
    {
        title: '4 New Labour Codes India 2025 Guide',
        category: 'State Laws',
        path: '/new-labour-codes',
        description: 'Impact of Wage Code, Social Security Code, OSH Code, and Industrial Relations Code on employees.',
        keywords: ['new labour codes 2025', 'wage code india', 'social security code', '4 labour codes'],
        icon: BookOpen
    },

    // ── FAQ & TRUST PAGES ──
    {
        title: 'Master FAQ — 180+ Labour Law Questions Answered',
        category: 'FAQ',
        path: '/faq',
        description: 'Clear answers on salary delay, gratuity, notice period, relieving letter, PF, and termination.',
        keywords: ['faq', 'frequently asked questions', 'labour law faq', 'employee rights questions'],
        icon: HelpCircle
    },
    {
        title: 'Step-by-Step Labour Complaint Guide',
        category: 'FAQ',
        path: '/complaint-guide',
        description: 'How to file online complaints on Shramik Suvidha, CPGRAMS, EPFO, and State Labour portals.',
        keywords: ['how to file labour complaint', 'shramik suvidha', 'epfo grievance portal', 'labour court steps'],
        icon: BookOpen
    },
    {
        title: 'About Employee Rights India & Methodology',
        category: 'Trust & Governance',
        path: '/about',
        description: 'Mission, legal research methodology, organization information, and editorial standards.',
        keywords: ['about employee rights india', 'rexonsofttech', 'rst technologies', 'legal standards'],
        icon: BookOpen
    },
    {
        title: 'Editorial & Statutory Verification Policy',
        category: 'Trust & Governance',
        path: '/editorial-policy',
        description: 'Primary legal sources, statutory verification cadence, and correction reporting standards.',
        keywords: ['editorial policy', 'statute verification methodology', 'sources', 'legal accuracy'],
        icon: BookOpen
    }
];

export default function SearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const listRef = useRef(null);

    // Focus input on open
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
            setQuery('');
            setSelectedIndex(0);
        }
    }, [isOpen]);

    // Handle global keyboard shortcuts (Cmd+K / Ctrl+K)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                if (isOpen) {
                    onClose();
                } else {
                    window.dispatchEvent(new CustomEvent('open-search-modal'));
                }
            }
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    // Filter results with fuzzy & alias matching
    const results = useMemo(() => {
        if (!query.trim()) return SITE_INDEX.slice(0, 8); // Top default tools

        const q = query.toLowerCase().trim();
        return SITE_INDEX.filter(item => {
            const matchTitle = item.title.toLowerCase().includes(q);
            const matchDesc = item.description.toLowerCase().includes(q);
            const matchCategory = item.category.toLowerCase().includes(q);
            const matchKeyword = item.keywords.some(k => k.toLowerCase().includes(q));

            return matchTitle || matchDesc || matchCategory || matchKeyword;
        });
    }, [query]);

    // Reset selected index when results change
    useEffect(() => {
        setSelectedIndex(0);
    }, [results]);

    // Keyboard navigation within search dialog
    const handleDialogKeyDown = (e) => {
        if (results.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex((prev) => (prev + 1) % results.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (results[selectedIndex]) {
                handleSelect(results[selectedIndex].path);
            }
        }
    };

    const handleSelect = (path) => {
        onClose();
        navigate(path);
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-gray-950/70 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Global Site Search"
        >
            <div 
                className="w-full max-w-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={handleDialogKeyDown}
            >
                {/* ── Search Input Header ── */}
                <div className="relative border-b border-gray-150 dark:border-gray-850 p-4 flex items-center gap-3 bg-gray-50/50 dark:bg-gray-900/50">
                    <Search className="w-5 h-5 text-primary shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search rights, tools, calculators, state laws, FAQs... (e.g. 'salary not paid')"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-transparent text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 outline-none"
                    />
                    {query && (
                        <button 
                            type="button" 
                            onClick={() => setQuery('')}
                            className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                            aria-label="Clear search query"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                    <button 
                        type="button" 
                        onClick={onClose}
                        className="px-2 py-1 rounded-lg text-[11px] font-bold bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 shrink-0"
                    >
                        ESC
                    </button>
                </div>

                {/* ── Results List ── */}
                <div ref={listRef} className="overflow-y-auto p-3 space-y-1.5 flex-1">
                    {results.length === 0 ? (
                        <div className="py-12 text-center text-gray-400">
                            <HelpCircle className="w-10 h-10 mx-auto mb-2 opacity-30" />
                            <p className="font-bold text-sm text-gray-600 dark:text-gray-400">No results found for "{query}"</p>
                            <p className="text-xs text-gray-500 mt-1">Try searching for keywords like <span className="text-primary font-semibold">salary, notice, gratuity, pf, or complaint</span></p>
                        </div>
                    ) : (
                        results.map((item, idx) => {
                            const IconComponent = item.icon || FileText;
                            const isSelected = idx === selectedIndex;

                            return (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleSelect(item.path)}
                                    onMouseEnter={() => setSelectedIndex(idx)}
                                    className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-start gap-3.5 group border ${
                                        isSelected 
                                            ? 'bg-primary/10 border-primary/30 shadow-soft' 
                                            : 'bg-transparent border-transparent hover:bg-gray-100 dark:hover:bg-gray-900'
                                    }`}
                                >
                                    <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${
                                        isSelected ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-850 text-gray-600 dark:text-gray-300'
                                    }`}>
                                        <IconComponent className="w-4 h-4" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                                                {item.category}
                                            </span>
                                            <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 dark:text-white truncate">
                                                {item.title}
                                            </h4>
                                        </div>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <ArrowRight className={`w-4 h-4 shrink-0 self-center transition-transform ${
                                        isSelected ? 'text-primary translate-x-1' : 'text-gray-300 dark:text-gray-700 opacity-0 group-hover:opacity-100'
                                    }`} />
                                </button>
                            );
                        })
                    )}
                </div>

                {/* ── Keyboard Shortcuts Footer ── */}
                <div className="border-t border-gray-150 dark:border-gray-850 px-4 py-2.5 bg-gray-50 dark:bg-gray-900/60 flex items-center justify-between text-[11px] font-semibold text-gray-500">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-xs text-[10px]">↑</kbd>
                            <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-xs text-[10px]">↓</kbd>
                            to navigate
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-xs text-[10px]">↵</kbd>
                            to select
                        </span>
                    </div>
                    <span className="text-[10px] text-gray-400">Press Esc to close</span>
                </div>
            </div>
        </div>
    );
}
