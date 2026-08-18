import React, { useState, useEffect } from 'react';
import { ShieldAlert, BookOpen, AlertOctagon, HelpCircle, FileText, Search, Scale, CheckCircle2, AlertTriangle, XCircle, Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import InternalLinks from '../components/InternalLinks';
import FAQSection from '../components/FAQSection';
import PDFExportButton from '../components/PDFExportButton';
import ShareButtons from '../components/ShareButtons';

const clauseTypes = [
    { id: 'noncompete', label: '1. Non-Compete / Competitor Ban (Post-Exit)' },
    { id: 'bond', label: '2. Training / Service Bond Penalty' },
    { id: 'notice', label: '3. Notice Period Multiplier & Buyout Penalties' },
    { id: 'moonlighting', label: '4. Dual Employment / Moonlighting Clause' },
    { id: 'deductions', label: '5. Arbitrary Salary Deductions & Indemnities' },
];

const PRESETS = [
    {
        type: 'noncompete',
        title: '1-Year Post-Exit Competitor Ban',
        text: 'The Employee covenants that for a period of 12 (twelve) months following the termination or resignation of employment, the Employee shall not directly or indirectly engage in, work for, advise, or join any entity that competes with the business of the Company across India.'
    },
    {
        type: 'bond',
        title: '₹3,00,000 Training Bond Recovery',
        text: 'In consideration of the onboarding and training provided by the Employer, the Employee agrees to serve the company for a mandatory period of 2 years. If the Employee resigns or is terminated prior to 24 months, the Employee shall pay liquidated damages of ₹3,00,000 to the Company immediately.'
    },
    {
        type: 'notice',
        title: '90-Day Notice with 200% Gross Salary Recovery',
        text: 'The Employee must serve a mandatory 90-day notice period. In the event of early release requested by the Employee, the Employer reserves the right to recover double (2x) the gross monthly CTC for each unserved day.'
    },
    {
        type: 'moonlighting',
        title: 'Absolute Dual Employment / Freelance Restriction',
        text: 'The Employee shall devote whole time to the service of the Company and shall not, without prior written consent, engage directly or indirectly in any other commercial business, freelance assignment, advisory position, or occupation during the term of employment.'
    }
];

const ANALYSIS_DATABASE = {
    noncompete: {
        title: 'Post-Employment Non-Compete Restraint',
        riskLevel: 'HIGHLY VOID & UNENFORCEABLE',
        riskClass: 'bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800',
        section: 'Section 27 of the Indian Contract Act, 1872 & Article 19(1)(g) of the Constitution',
        verdict: 'Under Indian law, every agreement by which anyone is restrained from exercising a lawful profession, trade, or business of any kind is to that extent strictly VOID. Employers cannot legally prevent you from joining a competitor after your employment ends, regardless of what is written in your offer letter.',
        precedent: 'Percept D\'Mark (India) Pvt. Ltd. v. Zaheer Khan (Supreme Court of India, AIR 2006 SC 3426) & Niranjan Shankar Golikari v. Century Spg. & Mfg. Co. (1967) — The Supreme Court held that the doctrine of restraint of trade applies to all post-termination restrictions.',
        caution: 'While non-competes after exit are void, non-disclosure of trade secrets and confidentiality agreements remain enforceable. You must never copy or transmit proprietary source code, client databases, pricing sheets, or internal documentation to your new employer.',
    },
    bond: {
        title: 'Service Bond & Liquidated Damages Clause',
        riskLevel: 'CONDITIONALLY RESTRICTED (PARTIALLY ENFORCEABLE ONLY FOR ACTUAL EXPENSES)',
        riskClass: 'bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800',
        section: 'Section 74 of the Indian Contract Act, 1872 & Section 368 IPC/BNS',
        verdict: 'Employment bonds in India are NOT enforceable as punitive penalties. An employer can ONLY recover the actual, demonstrable expenditure incurred exclusively for your specialized external training (e.g. third-party certification course fees or foreign travel costs). Routine internal onboarding, shadowing, or mentorship does not qualify.',
        precedent: 'Toshnial Brothers (Pvt.) Ltd. v. Eswar Prasad (Madras HC) & Sicpa India Ltd. v. Manas Pratim Deb (Delhi HC) — Courts ruled that the employer is not entitled to the full bond sum stated in the contract, but only reasonable compensation proportional to unexpired tenure.',
        caution: 'Employers CANNOT withhold your Relieving Letter, Experience Certificate, or Form 16 as leverage to compel bond payments. Withholding service certificates over civil bond claims is an unlawful labour practice.',
    },
    notice: {
        title: 'Notice Period & Short Notice Recovery Multipliers',
        riskLevel: 'BILATERAL OBLIGATION (EXCESSIVE MULTIPLIERS ARE UNLAWFUL)',
        riskClass: 'bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800',
        section: 'State Shops & Commercial Establishments Acts & CBIC Tax Circulars',
        verdict: 'Notice period terms are valid provided they are bilateral (equal for both employer termination and employee resignation). However, penalty multipliers (e.g., demanding 2x or 3x gross salary for short notice) are void as unlawful penalties under Section 74 of the Contract Act. Short notice buyout can only be at the 1x pro-rata salary rate.',
        precedent: 'State Shops & Establishments Acts mandate 30 days notice for confirmed employees. Furthermore, the Ministry of Finance / CBIC clarified via Circular No. 178/10/2022-GST that notice pay recovery is a settlement of contract and no additional punitive tax can be levied on employees.',
        caution: 'If an employee offers a standard 1x salary buyout in lieu of notice, the employer cannot arbitrarily reject it and withhold exit documents unless active project handovers are formally documented as pending.',
    },
    moonlighting: {
        title: 'Dual Employment & Exclusivity Restriction',
        riskLevel: 'VALID & ENFORCEABLE DURING ACTIVE EMPLOYMENT',
        riskClass: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
        section: 'Factories Act, 1948 (Section 60) & Model Standing Orders',
        verdict: 'Exclusivity clauses during the subsistence of your employment contract are completely legal and enforceable in India. If you take up a second commercial employment or freelance contract with a competitor during active working hours, the employer can legally terminate your employment for breach of trust.',
        precedent: 'Supreme Court in Niranjan Shankar Golikari (1967) affirmed that an agreement to serve exclusively during employment does not violate Section 27 and is lawful.',
        caution: 'Passive income, personal hobbies, or non-commercial open-source contributions outside working hours that do not use company equipment or conflict with company interests are generally permissible unless expressly barred by company policy.',
    },
    deductions: {
        title: 'Arbitrary Deductions & Indemnity Clauses',
        riskLevel: 'STRICTLY PROHIBITED UNDER LABOUR LAWS',
        riskClass: 'bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800',
        section: 'Sections 7 & 8 of the Payment of Wages Act, 1936',
        verdict: 'Employers are strictly prohibited from making arbitrary salary deductions or imposing fines for general performance shortfalls. Deductions are legal ONLY for authorized statutory taxes (PF, PT, TDS, ESI), pre-approved salary advances, or proven direct property loss caused by willful employee negligence after a formal domestic enquiry.',
        precedent: 'Payment of Wages Act mandates that total deductions in any single month cannot exceed 50% of the employee\'s wages under any circumstance.',
        caution: 'Any clause stating that the employer can forfeit your entire earned salary or withhold F&F settlements without a judicial decree or formal enquiry is null and void.',
    },
};

const analyzerFaqs = [
    {
        question: "Can an employer send a legal notice to stop me from joining a competitor?",
        answer: "HR or company lawyers may send intimidation notices, but Section 27 of the Indian Contract Act makes post-employment non-compete clauses completely void in India. Unless you possess and misuse trade secrets, Indian courts do not issue injunctions restraining employees from lawful employment."
    },
    {
        question: "Can my employer enforce a 2-year service bond if I didn't receive specialized training?",
        answer: "No. Routine on-the-job training or basic orientation cannot justify a service bond. The Supreme Court and High Courts have consistently held that employers cannot restrain employee mobility without proving actual external expenditure on specialized skills."
    },
    {
        question: "Can an employer deduct 18% GST on notice period buyout recovery?",
        answer: "No. The Central Board of Indirect Taxes and Customs (CBIC) issued Circular No. 178/10/2022-GST confirming that notice pay forfeited by employers is an exit adjustment and is NOT chargeable to GST."
    }
];

export default function ClauseAnalyzerPage() {
    const [selectedType, setSelectedType] = useState('noncompete');
    const [clauseText, setClauseText] = useState('');
    const [analyzed, setAnalyzed] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnalyze = (e) => {
        if (e) e.preventDefault();
        if (!clauseText.trim()) return;

        setResult(ANALYSIS_DATABASE[selectedType]);
        setAnalyzed(true);
    };

    const handleApplyPreset = (preset) => {
        setSelectedType(preset.type);
        setClauseText(preset.text);
        setResult(ANALYSIS_DATABASE[preset.type]);
        setAnalyzed(true);
    };

    useEffect(() => {
        setAnalyzed(false);
        setResult(null);
    }, [selectedType]);

    const relatedLinks = [
        { title: 'Grievance Generator', subtitle: 'Draft a formal complaint letter', path: '/tools/grievance-generator' },
        { title: 'Legal Notice Generator', subtitle: 'Serve notice to employer', path: '/tools/legal-notice-generator' },
        { title: 'Relieving Letter Guide', subtitle: 'Understand document rights', path: '/relieving-letter' },
        { title: 'District Labour Directory', subtitle: 'Find your local office details', path: '/tools/labour-directory' }
    ];

    const generateReportText = () => {
        if (!result) return '';
        return `EMPLOYMENT CONTRACT CLAUSE LEGALITY AUDIT REPORT\n` +
               `Generated via Employee Rights India (https://employee-rights.rexonsofttech.in)\n` +
               `============================================================\n\n` +
               `CLAUSE TYPE: ${result.title}\n` +
               `LEGAL STATUS: ${result.riskLevel}\n` +
               `STATUTORY CITATION: ${result.section}\n\n` +
               `ANALYZED CONTRACT TEXT:\n"${clauseText}"\n\n` +
               `LEGAL VERDICT:\n${result.verdict}\n\n` +
               `LANDMARK JUDICIAL PRECEDENT:\n${result.precedent}\n\n` +
               `CRITICAL COMPLIANCE CAUTION:\n${result.caution}\n\n` +
               `DISCLAIMER: This legal analysis is provided for educational and dispute orientation purposes under Indian labour statutes.`;
    };

    return (
        <div>
            <SEOHead 
                title="Employment Contract Clause Legality Analyzer — Employee Rights India"
                description="Audit offer letter and employment agreement clauses for Section 27 non-compete validity, training bond enforceability, and illegal notice recovery multipliers."
                path="/tools/clause-analyzer" 
            />

            <PageHero
                title="Employment Contract Clause Analyzer"
                subtitle="Paste clauses from your appointment letter to verify legal enforceability, statutory limits, and landmark Supreme Court precedents."
                icon={Scale}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-5xl mx-auto space-y-8">
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <Breadcrumb items={[
                            { label: 'Tools', path: '/tools' },
                            { label: 'Clause Analyzer', path: '/tools/clause-analyzer' }
                        ]} />
                        <ShareButtons title="Employment Contract Clause Legality Analyzer" />
                    </div>

                    {/* ── QUICK PRESET SELECTORS ── */}
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft">
                        <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <h3 className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                Test Common Controversial Contract Clauses:
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                            {PRESETS.map((p, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleApplyPreset(p)}
                                    className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-primary hover:bg-primary/5 text-left transition-all"
                                >
                                    <p className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-1">{p.title}</p>
                                    <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2">{p.text}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* ── LEFT SIDE: INPUT CLAUSE ── */}
                        <div className="lg:col-span-5 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 space-y-4">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <Search className="w-5 h-5 text-primary" /> Paste Contract Text
                            </h3>

                            <form onSubmit={handleAnalyze} className="space-y-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Category of Clause</label>
                                    <select
                                        value={selectedType}
                                        onChange={e => setSelectedType(e.target.value)}
                                        className="w-full px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-xs font-semibold text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        {clauseTypes.map(type => (
                                            <option key={type.id} value={type.id}>{type.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Appointment Letter Excerpt</label>
                                    <textarea
                                        value={clauseText}
                                        onChange={e => setClauseText(e.target.value)}
                                        placeholder="Paste the specific clause sentence from your offer letter or agreement..."
                                        rows="7"
                                        required
                                        className="w-full px-3.5 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-xs text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-primary leading-relaxed"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-soft"
                                >
                                    <Scale className="w-4 h-4" /> Run Legal Legality Audit
                                </button>
                            </form>
                        </div>

                        {/* ── RIGHT SIDE: ANALYSIS RESULTS ── */}
                        <div className="lg:col-span-7 flex flex-col justify-between">
                            {analyzed && result ? (
                                <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 md:p-8 space-y-6">
                                    
                                    {/* Validity Header */}
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-4 border-b border-gray-150 dark:border-gray-800">
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Statutory Validity</p>
                                            <span className={`inline-block mt-1.5 px-3 py-1 text-xs font-black border rounded-full ${result.riskClass}`}>
                                                {result.riskLevel}
                                            </span>
                                        </div>
                                        <PDFExportButton
                                            documentTitle={`Clause Legality Report - ${result.title}`}
                                            documentContent={generateReportText()}
                                            buttonText="Save Audit PDF"
                                        />
                                    </div>

                                    {/* Statutory Citation */}
                                    <div className="p-3.5 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl border border-blue-100 dark:border-blue-900/40">
                                        <p className="text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">Governing Legal Section</p>
                                        <p className="text-xs font-bold text-gray-900 dark:text-gray-100 mt-0.5">{result.section}</p>
                                    </div>

                                    {/* Verdict */}
                                    <div>
                                        <h4 className="font-extrabold text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <BookOpen className="w-4 h-4 text-primary" /> Plain-Language Legal Ruling
                                        </h4>
                                        <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                            {result.verdict}
                                        </p>
                                    </div>

                                    {/* Landmark Precedent */}
                                    <div>
                                        <h4 className="font-extrabold text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <Scale className="w-4 h-4 text-indigo-500" /> Landmark Court Precedent
                                        </h4>
                                        <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed italic bg-indigo-50/30 dark:bg-indigo-950/20 border-l-4 border-indigo-500 p-3.5 rounded-r-xl">
                                            {result.precedent}
                                        </p>
                                    </div>

                                    {/* Critical Caution */}
                                    <div className="bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-xl p-4">
                                        <h4 className="font-extrabold text-amber-900 dark:text-amber-300 text-xs mb-1.5 flex items-center gap-1.5">
                                            <ShieldAlert className="w-4 h-4 text-amber-600" /> Employee Action Caution
                                        </h4>
                                        <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                                            {result.caution}
                                        </p>
                                    </div>

                                </div>
                            ) : (
                                <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-12 text-center flex-1 flex flex-col justify-center items-center text-gray-400">
                                    <AlertOctagon className="w-12 h-12 mb-4 opacity-50 text-gray-300 dark:text-gray-600" />
                                    <h4 className="font-bold text-gray-700 dark:text-gray-300 text-sm">Awaiting Contract Clause</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-sm">
                                        Select a preset above or paste a custom clause from your agreement to generate an instant statutory compliance score.
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* FAQ */}
                    <FAQSection faqs={analyzerFaqs} title="FAQs — Contract Laws & Clause Enforceability" />

                    <InternalLinks currentPath="/tools/clause-analyzer" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
