import { useState } from 'react';
import { Award, AlertTriangle, Calculator } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { CalloutBox } from '../components/ContentSection';
import { gratuityEligibilityRules, gratuityFaqs } from '../data/gratuityData';

const relatedLinks = [
    { title: 'Full & Final Settlement', subtitle: 'Gratuity in F&F', path: '/full-final-settlement' },
    { title: 'Termination Rights', subtitle: 'Termination and gratuity', path: '/termination/after-confirmation' },
    { title: 'Delayed Salary Recovery', subtitle: 'If gratuity is not paid on time', path: '/delayed-salary' },
    { title: 'Salary Calculation', subtitle: 'How basic salary affects gratuity', path: '/salary-calculation' },
];

const statusColors = {
    green: 'bg-success/5 border-success/20',
    yellow: 'bg-warning/5 border-warning/20',
    red: 'bg-danger/5 border-danger/20',
};

const badgeColors = {
    green: 'bg-success/10 text-success',
    yellow: 'bg-warning/10 text-warning',
    red: 'bg-danger/10 text-danger',
};

const badgeLabels = { green: 'Eligible', yellow: 'Conditional', red: 'Exception' };

function GratuityCalculatorInline() {
    const [basicDa, setBasicDa] = useState(30000);
    const [years, setYears] = useState(5);
    const [covered, setCovered] = useState(true);

    const divisor = covered ? 26 : 30;
    const gratuity = (15 * basicDa * years) / divisor;
    const capped = Math.min(gratuity, 2000000);
    const isExceeding = gratuity > 2000000;
    const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN');

    return (
        <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft overflow-hidden mb-8">
            <div className="bg-accent p-6 text-white">
                <div className="flex items-center gap-3">
                    <Calculator className="w-7 h-7" />
                    <div>
                        <h2 className="text-xl font-bold">Gratuity Calculator</h2>
                        <p className="text-orange-100 text-sm">Real-time calculation as you type</p>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {[
                        { label: 'Basic + DA (Monthly ₹)', value: basicDa, setter: setBasicDa },
                        { label: 'Years of Service', value: years, setter: setYears },
                    ].map((inp, idx) => (
                        <div key={idx}>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{inp.label}</label>
                            <input type="number" value={inp.value} onChange={e => inp.setter(Number(e.target.value))}
                                className="w-full px-4 py-3 border-2 border-gray-100 dark:border-gray-800 rounded-xl focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none font-bold text-lg" />
                        </div>
                    ))}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Covered Under Act?</label>
                        <div className="flex gap-2">
                            <button onClick={() => setCovered(true)} className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${covered ? 'bg-accent text-white' : 'bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700'}`}>Yes (÷26)</button>
                            <button onClick={() => setCovered(false)} className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${!covered ? 'bg-accent text-white' : 'bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700'}`}>No (÷30)</button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 space-y-3 mb-4">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Formula</span>
                        <span className="font-mono text-gray-700 dark:text-gray-300">(15 × {fmt(basicDa)} × {years}) ÷ {divisor}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Calculated Gratuity</span>
                        <span className="font-mono font-bold text-gray-900 dark:text-gray-100">{fmt(gratuity)}</span>
                    </div>
                    {isExceeding && (
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-warning">Exceeds ₹20 Lakh Cap</span>
                            <span className="font-mono font-bold text-warning">Capped at {fmt(capped)}</span>
                        </div>
                    )}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between items-center">
                        <span className="font-bold text-gray-800 dark:text-gray-200">Gratuity Payable</span>
                        <span className="font-black text-2xl text-accent font-mono">{fmt(capped)}</span>
                    </div>
                </div>
                {isExceeding && (
                    <div className="p-4 bg-warning/10 rounded-xl border border-warning/20 text-sm text-warning-800 font-medium">
                        ⚠️ Your calculated gratuity ({fmt(gratuity)}) exceeds the statutory cap of ₹20 lakhs. You will receive ₹20 lakhs under the Act. Any voluntary payment above this by the employer is taxable.
                    </div>
                )}
                <div className="mt-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <p className="text-xs text-orange-700 leading-relaxed">This is an estimate based on entered values. Actual gratuity depends on confirmed employment dates, exact basic+DA at exit, and whether partial years are rounded up. For amounts exceeding 6 months, fractional years round up to the next full year.</p>
                </div>
            </div>
        </div>
    );
}

export default function GratuityPage() {
    return (
        <div>
            <SEOHead path="/gratuity" />
            <PageHero
                title="Gratuity Rights in India"
                subtitle="Who is eligible, how to calculate gratuity, forfeiture rules, and what to do if your employer refuses to pay."
                icon={Award}
                gradient="success"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Gratuity', path: '/gratuity' }]} />

                    <ContentSection title="Eligibility Rules at a Glance" icon={Award} variant="info">
                        <div className="space-y-4">
                            {gratuityEligibilityRules.map((rule, idx) => (
                                <div key={idx} className={`p-5 rounded-xl border ${statusColors[rule.status]}`}>
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <h3 className="font-bold text-gray-900 dark:text-gray-100">{rule.title}</h3>
                                        <span className={`badge text-[10px] uppercase ${badgeColors[rule.status]}`}>{badgeLabels[rule.status]}</span>
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{rule.description}</p>
                                    {rule.note && <p className="text-xs text-gray-500 dark:text-gray-400 italic border-l-2 border-gray-200 dark:border-gray-700 pl-2">{rule.note}</p>}
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    <GratuityCalculatorInline />

                    <ContentSection title="Gratuity Timeline & Process" icon={Award} variant="default">
                        <div className="space-y-3">
                            {[
                                { phase: 'Exit Date', desc: 'Employment ends (resignation, termination, retirement, death/disability).' },
                                { phase: 'Within 30 Days', desc: 'Employee/nominee submits Form I (gratuity application) to employer.' },
                                { phase: 'Employer Acknowledges (Form L)', desc: 'Employer must acknowledge the claim. If amount is not in dispute, employer can directly pay.' },
                                { phase: 'Within 30 Days of Claim', desc: 'Employer must pay the gratuity. Payment within 30 days avoids interest liability.' },
                                { phase: 'Beyond 30 Days', desc: 'Interest at up to 10% per annum starts accruing on delayed gratuity.' },
                                { phase: 'If Disputed/Refused', desc: 'File complaint with Controlling Authority (usually Labour Commissioner). They issue notice and conduct inquiry.' },
                            ].map((p, idx) => (
                                <div key={idx} className="flex gap-4 p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800">
                                    <div className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-bold whitespace-nowrap">{p.phase}</div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                        <CalloutBox type="warning" title="Forfeiture is Rare">
                            Employers routinely threaten to forfeit gratuity for short notice, poor performance, or contract violations. This is WRONG. Gratuity forfeiture under the Act is only for riotous/violent behavior or moral turpitude offences. Challenge any wrongful forfeiture.
                        </CalloutBox>
                    </ContentSection>

                    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
                        <p className="text-sm text-yellow-800"><strong>Disclaimer:</strong> Educational content only. Gratuity calculations may vary based on exact dates and pay structure. Consult a professional for specific advice.</p>
                    </div>

                    <FAQSection faqs={gratuityFaqs} title="FAQs — Gratuity" />
                    <InternalLinks currentPath="/gratuity" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
