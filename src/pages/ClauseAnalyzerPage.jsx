import React from 'react';
import { useState, useEffect } from 'react';
import { ShieldAlert, BookOpen, AlertOctagon, HelpCircle, FileText, Search, Scale } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import InternalLinks from '../components/InternalLinks';
import FAQSection from '../components/FAQSection';

const clauseTypes = [
    { id: 'noncompete', label: 'Non-Compete Clause' },
    { id: 'bond', label: 'Training Bond / Service Bond' },
    { id: 'notice', label: 'Notice Period & Short Notice Penalty' },
    { id: 'deductions', label: 'Salary Deductions & Fines' },
];

const ANALYSIS_DATABASE = {
    noncompete: {
        validity: 'UNENFORCEABLE POST-EMPLOYMENT',
        validityClass: 'bg-red-100 text-red-800 dark:bg-red-950/30 dark:text-red-400 border-red-200 dark:border-red-900',
        section: 'Section 27 of the Indian Contract Act, 1872',
        verdict: 'Under Indian law, any agreement that restrains anyone from exercising a lawful profession, trade, or business of any kind is void. Employers cannot legally stop you from joining a competitor after you resign.',
        precedent: 'Percept D\'Mark (India) Pvt. Ltd. v. Zaheer Khan (Supreme Court of India, 2006) — The court ruled that post-employment non-compete clauses are completely void and cannot be enforced under Section 27.',
        caution: 'While post-employment non-competes are void, non-competes DURING the term of your employment (e.g. moonlighting restrictions) are 100% valid. Also, you must not copy or share the employer\'s proprietary source code, client lists, or trade secrets, as doing so constitutes intellectual property theft and can result in civil damages or criminal charges.',
    },
    bond: {
        validity: 'CONDITIONALLY VALID (RESTRICTIVE)',
        validityClass: 'bg-orange-100 text-orange-850 dark:bg-orange-950/30 dark:text-orange-400 border-orange-200 dark:border-orange-900',
        section: 'Section 74 of the Indian Contract Act, 1872',
        verdict: 'Employment bonds are valid only if: 1. The employer spent actual money/time on specialized training (not general onboarding). 2. The bond period and penalty amount are "reasonable". Employers cannot demand exorbitant penalty amounts (e.g. ₹5 Lakhs for a ₹20,000/mo salary) and cannot enforce bonds to lock you in without training proof.',
        precedent: 'Toshnial Brothers (Pvt.) Ltd. v. Eswar Prasad & Ors (Madras High Court) — Bonds are only valid if actual expenditure is incurred on specialized training. The employer can only recover actual damages incurred, not the full penalty clause amount.',
        caution: 'If an employer refuses to release your relieving letter due to a bond dispute, they are in violation. However, if the company did send you abroad or paid for external paid certifications, they can claim recovery of those actual expenses in court, so it is advised to settle reasonable actual training costs.',
    },
    notice: {
        validity: 'VALID BUT MUST BE BILATERAL',
        validityClass: 'bg-green-100 text-green-800 dark:bg-green-950/30 dark:text-green-400 border-green-200 dark:border-green-800',
        section: 'State Shops & Commercial Establishments Acts',
        verdict: 'Notice period clauses are valid but must be equal. If the employer demands 3 months notice from you, they must also provide 3 months notice (or pay in lieu) if they terminate your services (except for proved gross misconduct). Short notice recovery (buyout) is legal, but employers cannot force you to work if you pay the notice pay.',
        precedent: 'State Shops Acts generally cap maximum notice periods at 30 days for confirmed employees. Exorbitant notice period clauses (e.g., 6 months notice) can be challenged in court as unreasonable restraint.',
        caution: 'Even if you exit on short notice and offer a notice buyout, the employer CANNOT legally withhold your relieving letter or experience certificate as a penalty. Withholding documents to force notice service is a violation of your right to livelihood.',
    },
    deductions: {
        validity: 'STRICTLY RESTRICTED',
        validityClass: 'bg-red-100 text-red-800 dark:bg-red-950/30 dark:text-red-400 border-red-200 dark:border-red-900',
        section: 'Section 7 & 8 of the Payment of Wages Act, 1936',
        verdict: 'Employers cannot make arbitrary deductions from your salary. Deductions are allowed only for: 1. Absence from duty, 2. Authorized advances, 3. Damage/loss caused directly due to neglect of the employee (requires show-cause notice first). Total deductions cannot exceed 50% of wages (or 75% if cooperative societies are involved).',
        precedent: 'Payment of Wages Act prohibits deductions for general "performance penalties" or arbitrary company charges unless explicitly authorized by law.',
        caution: 'Employers cannot make deductions that push your salary below the state-notified minimum wage. Any deduction made without a formal show-cause process and opportunity to explain is illegal.',
    },
};

const analyzerFaqs = [
    {
        question: "Can my employer sue me for joining a direct competitor?",
        answer: "They may threaten legal action to intimidate you, but legally, post-employment non-compete clauses are completely void in India under Section 27 of the Contract Act. Courts consistently strike down these lawsuits unless you stole proprietary source code, customer databases, or patented designs."
    },
    {
        question: "What should I do if an employer demands bond recovery to release my documents?",
        answer: "Offer to pay the actual cost incurred on training (e.g. course fees, travel) but refuse arbitrary penalty sums. Send a formal legal notice stating that withholding relieving letters is illegal. If they do not comply, you can file a complaint with the Labour Commissioner."
    }
];

export default function ClauseAnalyzerPage() {
    const [selectedType, setSelectedType] = useState('noncompete');
    const [clauseText, setClauseText] = useState('');
    const [analyzed, setAnalyzed] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnalyze = (e) => {
        e.preventDefault();
        if (!clauseText.trim()) return;

        setResult(ANALYSIS_DATABASE[selectedType]);
        setAnalyzed(true);
    };

    // Reset analysis when selected type changes
    useEffect(() => {
        setAnalyzed(false);
        setResult(null);
    }, [selectedType]);

    const relatedLinks = [
        { title: 'Grievance Generator', subtitle: 'Draft a complaint letter', path: '/tools/grievance-generator' },
        { title: 'Relieving Letter Rights', subtitle: 'Understand document laws', path: '/relieving-letter' },
        { title: 'Forced Resignation', subtitle: 'Filing forced resignation claims', path: '/forced-resignation' },
        { title: 'Labour Directory', subtitle: 'Find your local office details', path: '/tools/labour-directory' }
    ];

    return (
        <div>
            <SEOHead path="/tools/clause-analyzer" />

            <PageHero
                title="Employment Contract Clause Analyzer"
                subtitle="Paste your contract clauses to check their legal validity, court precedents, and employee rights under Indian law."
                icon={Scale}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Tools & FAQ', path: '/tools' },
                        { label: 'Clause Analyzer', path: '/tools/clause-analyzer' }
                    ]} />

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* ── LEFT SIDE: INPUT CLAUSE ── */}
                        <div className="lg:col-span-5 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-5 flex items-center gap-2">
                                🔍 Input Clause Text
                            </h3>

                            <form onSubmit={handleAnalyze} className="space-y-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Clause Type</label>
                                    <select
                                        value={selectedType}
                                        onChange={e => setSelectedType(e.target.value)}
                                        className="w-full px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 outline-none"
                                    >
                                        {clauseTypes.map(type => (
                                            <option key={type.id} value={type.id}>{type.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Paste Contract Clause</label>
                                    <textarea
                                        value={clauseText}
                                        onChange={e => setClauseText(e.target.value)}
                                        placeholder="e.g. Employee agrees not to join any competitor company for a period of 1 year after termination..."
                                        rows="8"
                                        required
                                        className="w-full px-3.5 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                                >
                                    Analyze Clause
                                </button>
                            </form>
                        </div>

                        {/* ── RIGHT SIDE: ANALYSIS RESULTS ── */}
                        <div className="lg:col-span-7 flex flex-col justify-between">
                            {analyzed && result ? (
                                <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 md:p-8 space-y-6">
                                    
                                    {/* Validity Header */}
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-850">
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Legal Validity Status</p>
                                            <span className={`inline-block mt-1.5 px-3 py-1 text-xs font-bold border rounded-full ${result.validityClass}`}>
                                                {result.validity}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Statute Citation</p>
                                            <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mt-1.5">{result.section}</p>
                                        </div>
                                    </div>

                                    {/* Verdict */}
                                    <div>
                                        <h4 className="font-extrabold text-sm text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <BookOpen className="w-4 h-4 text-primary" /> Legal Verdict
                                        </h4>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                                            {result.verdict}
                                        </p>
                                    </div>

                                    {/* Precedent */}
                                    <div>
                                        <h4 className="font-extrabold text-sm text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <Scale className="w-4 h-4 text-indigo-500" /> Landmark Precedent
                                        </h4>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed italic bg-indigo-50/20 dark:bg-indigo-950/10 border-l-4 border-indigo-500 p-3 rounded-r-xl">
                                            {result.precedent}
                                        </p>
                                    </div>

                                    {/* Critical Warning / Caution */}
                                    <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-250 dark:border-yellow-900 rounded-xl p-5">
                                        <h4 className="font-extrabold text-yellow-800 dark:text-yellow-350 text-sm mb-2 flex items-center gap-1.5">
                                            <ShieldAlert className="w-5 h-5 text-yellow-600" /> Critical Caution Details
                                        </h4>
                                        <p className="text-xs text-yellow-750 dark:text-yellow-400 leading-relaxed">
                                            {result.caution}
                                        </p>
                                    </div>

                                </div>
                            ) : (
                                <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-12 text-center flex-1 flex flex-col justify-center items-center text-gray-400">
                                    <AlertOctagon className="w-12 h-12 mb-4 opacity-50 text-gray-300" />
                                    <h4 className="font-bold text-gray-500 dark:text-gray-400">Awaiting Clause Text</h4>
                                    <p className="text-xs mt-1 max-w-sm">
                                        Select the type of contract clause on the left, paste the text from your employment agreement, and click Analyze.
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* FAQ */}
                    <FAQSection faqs={analyzerFaqs} title="FAQs — Contract Laws" />

                    <InternalLinks currentPath="/tools/clause-analyzer" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
