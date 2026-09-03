import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import ContentSection, { CalloutBox } from '../components/ContentSection';
import MicromanagementDiagnosticWizard from '../components/MicromanagementDiagnosticWizard';
import IncidentRecorder from '../components/IncidentRecorder';
import ScenarioSimulator from '../components/ScenarioSimulator';
import {
    managementSpectrum,
    scenarioLibrary,
    jurisdictionData,
    LAST_VERIFIED_DATE
} from '../data/micromanagementData';
import {
    ShieldAlert, Eye, Calendar, Clock, Scale, HelpCircle, FileText,
    UserCheck, Globe, CheckCircle2, AlertTriangle, ExternalLink,
    ArrowRight, Info, Layers, BookOpen, Building2, MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MicromanagementPage() {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedSectorId, setSelectedSectorId] = useState('it_software');
    const [selectedCountry, setSelectedCountry] = useState('IN');
    const [selectedState, setSelectedState] = useState('TN');

    const activeSector = scenarioLibrary.find(s => s.id === selectedSectorId) || scenarioLibrary[0];
    const countryObj = jurisdictionData[selectedCountry] || jurisdictionData['IN'];
    const stateObj = countryObj.states[selectedState] || Object.values(countryObj.states)[0];

    const tabs = [
        { id: 'overview', label: '1. Explanation & Framework', icon: BookOpen },
        { id: 'diagnostic', label: '2. "Is This Legal?" Wizard', icon: HelpCircle },
        { id: 'library', label: '3. Scenario Library (13 Sectors)', icon: Layers },
        { id: 'simulator', label: '4. "What Would You Do?" Game', icon: UserCheck },
        { id: 'evidence', label: '5. Incident Log & Evidence', icon: FileText },
        { id: 'location_rights', label: '6. Location Rights & Action Guide', icon: MapPin },
        { id: 'legal_threshold', label: '7. Legal Action Thresholds', icon: Scale }
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead path="/micromanagement-weekend-work" />

            <PageHero
                title="Micromanagement & Excessive Workplace Control"
                subtitle="Distinguish strict management from micromanagement, workplace misconduct, and illegal labor violations. Interactive diagnostic tools, scenario library, and evidence logger."
                icon={ShieldAlert}
                gradient="indigo"
            />

            <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
                <Breadcrumb items={[
                    { label: 'Workplace Rules', path: '/working-hours' },
                    { label: 'Micromanagement & Workplace Control', path: '/micromanagement-weekend-work' }
                ]} />

                {/* Last Verified Date Badge & Safety Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft text-xs">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span><strong>Legal Accuracy Status:</strong> Updated and verified against labor statutes ({LAST_VERIFIED_DATE})</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-900/50 font-medium">
                        <Info className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                        <span>Informational Guidance • Not Legal Representation</span>
                    </div>
                </div>

                {/* ═══ TAB NAVIGATION BAR ═══ */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-gray-200 dark:border-gray-800">
                    {tabs.map((tab) => {
                        const IconComponent = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${isActive
                                        ? 'bg-primary text-white shadow-soft'
                                        : 'bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900'
                                    }`}
                            >
                                <IconComponent className="w-4 h-4" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* ════════════════════════════════════════════════════════ */}
                {/* TAB 1: EXPLANATION & COMPARISON FRAMEWORK (REQUIREMENT 1) */}
                {/* ════════════════════════════════════════════════════════ */}
                {activeTab === 'overview' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                        {/* Definition Card */}
                        <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-wider text-primary">Requirement 1 — Core Concept</span>
                            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">What is Micromanagement?</h3>
                            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                <strong>Micromanagement</strong> means excessive and unnecessary control over an employee's work, particularly when a manager continuously controls minor decisions, methods, communications, or daily activities instead of giving the employee reasonable professional autonomy.
                            </p>

                            <CalloutBox type="info" title="Important Distinction: Strict Management vs Illegal Violation">
                                Strict management or high performance expectations do <strong>NOT automatically constitute a legal violation</strong>. A manager has the legal right to assign tasks, set deadlines, and evaluate quality. Micromanagement becomes a legal or formal issue when it is accompanied by wage withholding, unpaid overtime, privacy breaches (keyloggers/webcams), discrimination, or workplace harassment.
                            </CalloutBox>
                        </div>

                        {/* 10-Way Comparison Grid */}
                        <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
                            <div className="border-b border-gray-100 dark:border-gray-850 pb-4">
                                <span className="text-[10px] font-black uppercase tracking-wider text-primary">Management Spectrum</span>
                                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-0.5">
                                    Distinguishing 10 Types of Workplace Management
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    Compare normal supervision against micromanagement, misconduct, and illegal violations.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {managementSpectrum.map((item) => (
                                    <div key={item.id} className="p-5 rounded-2xl border bg-gray-50/60 dark:bg-gray-900/60 border-gray-200 dark:border-gray-800 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-extrabold text-sm text-gray-900 dark:text-white">{item.title}</h4>
                                            <span className={`badge ${item.color === 'emerald' ? 'bg-emerald-100 text-emerald-800' :
                                                    item.color === 'amber' ? 'bg-amber-100 text-amber-800' :
                                                        item.color === 'rose' || item.color === 'red' || item.color === 'purple' ? 'bg-rose-100 text-rose-800' :
                                                            'bg-blue-100 text-blue-800'
                                                }`}>
                                                {item.badge}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {item.definition}
                                        </p>
                                        <div className="space-y-1">
                                            <span className="text-[11px] font-bold text-gray-900 dark:text-gray-200">Key Indicators:</span>
                                            <ul className="space-y-1 text-[11px] text-gray-500 dark:text-gray-400 list-disc list-inside">
                                                {item.keyIndicators.map((ind, i) => (
                                                    <li key={i}>{ind}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pt-2 border-t border-gray-200/60 dark:border-gray-800 text-[11px] font-semibold text-gray-700 dark:text-gray-300">
                                            <strong>Legal Standing:</strong> {item.legalStatus}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ════════════════════════════════════════════════════════ */}
                {/* TAB 2: "IS THIS LEGAL?" DIAGNOSTIC WIZARD (REQUIREMENT 3 & 10) */}
                {/* ════════════════════════════════════════════════════════ */}
                {activeTab === 'diagnostic' && (
                    <div className="animate-in fade-in duration-300">
                        <MicromanagementDiagnosticWizard onNavigateTab={(tabId) => setActiveTab(tabId)} />
                    </div>
                )}

                {/* ════════════════════════════════════════════════════════ */}
                {/* TAB 3: REAL-WORLD SCENARIO LIBRARY (REQUIREMENT 2) */}
                {/* ════════════════════════════════════════════════════════ */}
                {activeTab === 'library' && (
                    <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6 animate-in fade-in duration-300">
                        <div className="border-b border-gray-100 dark:border-gray-850 pb-4">
                            <span className="text-[10px] font-black uppercase tracking-wider text-primary">Requirement 2 — Real-World Scenarios</span>
                            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-0.5">
                                Real-World Scenario Library (13 Industry Sectors)
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Select your sector to see how micromanagement presents in real work situations.
                            </p>
                        </div>

                        {/* Sector Filter Buttons */}
                        <div className="flex flex-wrap gap-2">
                            {scenarioLibrary.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setSelectedSectorId(item.id)}
                                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${selectedSectorId === item.id
                                            ? 'bg-primary text-white shadow-soft'
                                            : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                                        }`}
                                >
                                    {item.sector}
                                </button>
                            ))}
                        </div>

                        {/* Active Scenario Card (Full 6-Step Flow) */}
                        <div className="p-6 rounded-2xl border bg-gray-50/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 space-y-4">
                            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
                                <h4 className="font-extrabold text-base text-gray-900 dark:text-white flex items-center gap-2">
                                    <Building2 className="w-5 h-5 text-primary" /> Sector: {activeSector.sector}
                                </h4>
                                <span className="badge bg-primary/10 text-primary">Interactive Case Study</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                                <div className="p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-800">
                                    <span className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-[10px] text-primary">1. Situation:</span>
                                    <p className="text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">{activeSector.situation}</p>
                                </div>

                                <div className="p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-800">
                                    <span className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-[10px] text-amber-600">2. Manager's Behaviour:</span>
                                    <p className="text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">{activeSector.managerBehaviour}</p>
                                </div>

                                <div className="p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-800">
                                    <span className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-[10px] text-blue-600">3. Employee's Response:</span>
                                    <p className="text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">{activeSector.employeeResponse}</p>
                                </div>

                                <div className="p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-800">
                                    <span className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-[10px] text-purple-600">4. Why It May Be Micromanagement:</span>
                                    <p className="text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">{activeSector.whyMicromanagement}</p>
                                </div>
                            </div>

                            <div className="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-150 dark:border-rose-900/40 text-xs space-y-1">
                                <span className="font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wider text-[10px]">5. When It Becomes More Serious (Legal Threshold):</span>
                                <p className="text-rose-800 dark:text-rose-300 leading-relaxed">{activeSector.whenSerious}</p>
                            </div>

                            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-150 dark:border-emerald-900/40 text-xs space-y-1">
                                <span className="font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider text-[10px]">6. Recommended Action Path:</span>
                                <p className="text-emerald-800 dark:text-emerald-300 leading-relaxed font-semibold">{activeSector.possibleAction}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* ════════════════════════════════════════════════════════ */}
                {/* TAB 4: SCENARIO SIMULATOR ("WHAT WOULD YOU DO?") (REQUIREMENT 8) */}
                {/* ════════════════════════════════════════════════════════ */}
                {activeTab === 'simulator' && (
                    <div className="animate-in fade-in duration-300">
                        <ScenarioSimulator />
                    </div>
                )}

                {/* ════════════════════════════════════════════════════════ */}
                {/* TAB 5: INCIDENT RECORDER & EVIDENCE LOG (REQUIREMENT 4) */}
                {/* ════════════════════════════════════════════════════════ */}
                {activeTab === 'evidence' && (
                    <div className="animate-in fade-in duration-300">
                        <IncidentRecorder />
                    </div>
                )}

                {/* ════════════════════════════════════════════════════════ */}
                {/* TAB 6: LOCATION RIGHTS & ACTION GUIDE (REQUIREMENT 5 & 7) */}
                {/* ════════════════════════════════════════════════════════ */}
                {activeTab === 'location_rights' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                        {/* Requirement 5 — Step-by-Step Action Guide */}
                        <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
                            <div className="border-b border-gray-100 dark:border-gray-850 pb-4">
                                <span className="text-[10px] font-black uppercase tracking-wider text-primary">Requirement 5 — Standard Action Path</span>
                                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-0.5">
                                    6-Step Workplace Resolution Protocol
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-1">
                                    <span className="font-extrabold text-primary text-sm">Step 1 — Document the Incident</span>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Log dates, times, exact manager words, Slack screenshots, and impact using our client-side Incident Logger.
                                    </p>
                                </div>

                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-1">
                                    <span className="font-extrabold text-primary text-sm">Step 2 — Review Contract & Policy</span>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Check your employment agreement, IT disclosure policies, shift hours, and internal grievance escalation steps.
                                    </p>
                                </div>

                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-1">
                                    <span className="font-extrabold text-primary text-sm">Step 3 — Professional Alignment Meeting</span>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Request a 1-on-1 with your manager. Present objective data showing that 30-minute logs reduce output velocity.
                                    </p>
                                </div>

                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-1">
                                    <span className="font-extrabold text-primary text-sm">Step 4 — Report via HR Grievance</span>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        If micromanagement crosses into shouting, threats, or singling out, file a written HR complaint under company misconduct rules.
                                    </p>
                                </div>

                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-1">
                                    <span className="font-extrabold text-primary text-sm">Step 5 — Escalate to Labour Authority</span>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        If wages are withheld or 2x Overtime / weekly rest is denied, file a petition with your State Assistant Labour Commissioner (ALC).
                                    </p>
                                </div>

                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-1">
                                    <span className="font-extrabold text-primary text-sm">Step 6 — Consult Employment Advocate</span>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        For forced resignation, severe POSH harassment, or background check threats, seek formal legal counsel.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Requirement 7 — Jurisdiction Selector & Authority Directory */}
                        <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
                            <div className="border-b border-gray-100 dark:border-gray-850 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">Requirement 7 — Jurisdiction Rights</span>
                                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-0.5">
                                        Employee Rights & Authorities by Location
                                    </h3>
                                </div>
                                <span className="text-xs font-bold text-gray-500">Verified: {LAST_VERIFIED_DATE}</span>
                            </div>

                            {/* Dropdowns */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Select Country:</label>
                                    <select
                                        value={selectedCountry}
                                        onChange={(e) => {
                                            setSelectedCountry(e.target.value);
                                            const defaultSt = Object.keys(jurisdictionData[e.target.value].states)[0];
                                            setSelectedState(defaultSt);
                                        }}
                                        className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs font-bold outline-none focus:border-primary"
                                    >
                                        <option value="IN">🇮🇳 India</option>
                                        <option value="US">🇺🇸 United States</option>
                                        <option value="UK">🇬🇧 United Kingdom</option>
                                        <option value="AE">🇦🇪 United Arab Emirates</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Select State / Region:</label>
                                    <select
                                        value={selectedState}
                                        onChange={(e) => setSelectedState(e.target.value)}
                                        className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs font-bold outline-none focus:border-primary"
                                    >
                                        {Object.entries(countryObj.states).map(([code, st]) => (
                                            <option key={code} value={code}>{st.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Jurisdiction Details Card */}
                            <div className="p-6 rounded-2xl border bg-gray-50/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 space-y-4 text-xs">
                                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3">
                                    <h4 className="font-extrabold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-primary" /> {stateObj.name} ({countryObj.countryName})
                                    </h4>
                                    <span className="badge bg-emerald-100 text-emerald-800 font-bold">Official Statutory Authority</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <span className="font-bold text-gray-900 dark:text-white text-[11px] uppercase tracking-wider">Designated Authority:</span>
                                        <p className="text-gray-700 dark:text-gray-300 font-medium">{stateObj.authority}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="font-bold text-gray-900 dark:text-white text-[11px] uppercase tracking-wider">Governing Act:</span>
                                        <p className="text-gray-700 dark:text-gray-300 font-medium">{stateObj.act}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="font-bold text-gray-900 dark:text-white text-[11px] uppercase tracking-wider">Mandatory Weekly Off Rule:</span>
                                        <p className="text-gray-700 dark:text-gray-300">{stateObj.weeklyOffRule}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <span className="font-bold text-gray-900 dark:text-white text-[11px] uppercase tracking-wider">Filing Deadline / Limit:</span>
                                        <p className="text-gray-700 dark:text-gray-300">{stateObj.filingDeadline}</p>
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-3">
                                    <a
                                        href={stateObj.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline font-bold flex items-center gap-1"
                                    >
                                        Official Portal ({stateObj.name}) <ExternalLink className="w-3.5 h-3.5" />
                                    </a>

                                    <a
                                        href={stateObj.grievancePortal}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-xl bg-primary text-white font-bold flex items-center gap-1.5 shadow-soft hover:bg-primary-dark"
                                    >
                                        File Online Complaint <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ════════════════════════════════════════════════════════ */}
                {/* TAB 7: "WHEN SHOULD I TAKE LEGAL ACTION?" (REQUIREMENT 6 & 9) */}
                {/* ════════════════════════════════════════════════════════ */}
                {activeTab === 'legal_threshold' && (
                    <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6 animate-in fade-in duration-300">
                        <div className="border-b border-gray-100 dark:border-gray-850 pb-4">
                            <span className="text-[10px] font-black uppercase tracking-wider text-primary">Requirement 6 — Legal Threshold Rules</span>
                            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-0.5">
                                When Does Micromanagement Become Legally Actionable?
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Micromanagement alone is generally not automatically a court violation. Formal legal action becomes applicable when accompanied by these specific statutory breaches:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div className="p-4 bg-rose-50/60 dark:bg-rose-950/30 rounded-2xl border border-rose-150 dark:border-rose-900/40 space-y-1">
                                <h4 className="font-extrabold text-rose-900 dark:text-rose-300 text-sm">1. Illegal Discrimination & Bias</h4>
                                <p className="text-rose-800 dark:text-rose-300 leading-relaxed">
                                    Micromanagement used to single out an employee based on gender, caste, religion, age, disability, or pregnancy violates Article 14/15/21 and Maternity Benefit Act provisions.
                                </p>
                            </div>

                            <div className="p-4 bg-rose-50/60 dark:bg-rose-950/30 rounded-2xl border border-rose-150 dark:border-rose-900/40 space-y-1">
                                <h4 className="font-extrabold text-rose-900 dark:text-rose-300 text-sm">2. Workplace Sexual Harassment (POSH)</h4>
                                <p className="text-rose-800 dark:text-rose-300 leading-relaxed">
                                    Intrusive scrutiny combined with unwelcome sexual remarks or hostile work environments triggers mandatory 90-day ICC inquiry under the POSH Act 2013.
                                </p>
                            </div>

                            <div className="p-4 bg-rose-50/60 dark:bg-rose-950/30 rounded-2xl border border-rose-150 dark:border-rose-900/40 space-y-1">
                                <h4 className="font-extrabold text-rose-900 dark:text-rose-300 text-sm">3. Unlawful Retaliation (Victimization)</h4>
                                <p className="text-rose-800 dark:text-rose-300 leading-relaxed">
                                    Sudden micromanagement or unfair PIP placement imposed because you filed a salary complaint or POSH grievance violates statutory anti-retaliation protections.
                                </p>
                            </div>

                            <div className="p-4 bg-rose-50/60 dark:bg-rose-950/30 rounded-2xl border border-rose-150 dark:border-rose-900/40 space-y-1">
                                <h4 className="font-extrabold text-rose-900 dark:text-rose-300 text-sm">4. Unpaid Wages & 2x Overtime Denials</h4>
                                <p className="text-rose-800 dark:text-rose-300 leading-relaxed">
                                    Requiring mandatory weekend work or hours over 48/week without 2x Overtime pay or Comp-Off violates the Payment of Wages Act & Shops Acts.
                                </p>
                            </div>

                            <div className="p-4 bg-rose-50/60 dark:bg-rose-950/30 rounded-2xl border border-rose-150 dark:border-rose-900/40 space-y-1">
                                <h4 className="font-extrabold text-rose-900 dark:text-rose-300 text-sm">5. Keyloggers & Personal Device Surveillance</h4>
                                <p className="text-rose-800 dark:text-rose-300 leading-relaxed">
                                    Unannounced keyloggers or webcam tracking on personal laptops (BYOD) violates Section 43/66 of the IT Act and the DPDP Act 2023.
                                </p>
                            </div>

                            <div className="p-4 bg-rose-50/60 dark:bg-rose-950/30 rounded-2xl border border-rose-150 dark:border-rose-900/40 space-y-1">
                                <h4 className="font-extrabold text-rose-900 dark:text-rose-300 text-sm">6. Forced Resignation / Constructive Dismissal</h4>
                                <p className="text-rose-800 dark:text-rose-300 leading-relaxed">
                                    Coercing an employee to resign under threat of bad BGV tags constitutes constructive dismissal, actionable in Labour Court under Industrial Disputes Act.
                                </p>
                            </div>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-3">
                            <Link to="/tools/legal-notice-generator" className="flex-1 px-5 py-3 rounded-xl bg-accent text-white font-bold text-xs shadow-soft text-center flex items-center justify-center gap-2">
                                <Scale className="w-4 h-4" /> Draft Advocate Legal Demand Notice
                            </Link>
                            <Link to="/tools/authority-finder" className="flex-1 px-5 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-bold text-xs text-center flex items-center justify-center gap-2">
                                <ExternalLink className="w-4 h-4 text-emerald-600" /> Open Authority Directory
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
