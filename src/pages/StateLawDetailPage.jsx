import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Calendar, Moon, AlertTriangle, ShieldCheck, FileText, IndianRupee, ExternalLink, Info } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import LawCard from '../components/LawCard';
import InternalLinks from '../components/InternalLinks';
import { getStateBySlug, getAllStates } from '../data/stateLawsData';

const sectorColors = [
    { header: 'bg-blue-600',   badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',     border: 'border-blue-200 dark:border-blue-800',   bg: 'bg-blue-50 dark:bg-blue-950/20'   },
    { header: 'bg-orange-500', badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800', bg: 'bg-orange-50 dark:bg-orange-950/20' },
    { header: 'bg-red-600',    badge: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',          border: 'border-red-200 dark:border-red-800',     bg: 'bg-red-50 dark:bg-red-950/20'     },
    { header: 'bg-yellow-500', badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300', border: 'border-yellow-200 dark:border-yellow-800', bg: 'bg-yellow-50 dark:bg-yellow-950/20' },
];

const TABS = [
    { id: 'wages',    label: '💰 Minimum Wages', icon: IndianRupee },
    { id: 'laws',     label: '⚖️ Labour Laws',   icon: ShieldCheck  },
    { id: 'holidays', label: '📅 Holidays',      icon: Calendar     },
];

export default function StateLawDetailPage() {
    const { stateSlug } = useParams();
    const stateData = getStateBySlug(stateSlug);
    const [activeTab, setActiveTab] = useState('wages');

    if (!stateData) return <Navigate to="/state-labour-laws" replace />;

    const relatedLinks = getAllStates()
        .filter(s => s.slug !== stateSlug)
        .slice(0, 3)
        .map(s => ({ title: `${s.name} Labour Laws`, subtitle: 'Shops & Establishments Act', path: `/state-labour-laws/${s.slug}` }));

    return (
        <div>
            <SEOHead path={`/state-labour-laws/${stateSlug}`} schema={{
                '@context': 'https://schema.org', '@type': 'Article',
                headline: `${stateData.name} Minimum Wages 2025 & Labour Laws`,
                description: stateData.description,
            }} />
            <Helmet>
                <title>{stateData.name} Minimum Wages 2025 & Labour Laws | Employee Rights India</title>
                <meta name="description" content={`Official ${stateData.name} minimum wages 2025 for IT, shops, factories. ${stateData.description}`} />
            </Helmet>

            <PageHero
                title={`${stateData.name} Labour Laws`}
                subtitle={`Minimum wages 2025 & employee rights under the ${stateData.actName}`}
                icon={MapPin}
                gradient="blue"
            />

            <div className="py-10 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'State Labour Laws', path: '/state-labour-laws' },
                        { label: stateData.name, path: `/state-labour-laws/${stateSlug}` },
                    ]} />

                    {/* ── TAB BAR ── */}
                    <div className="mt-8 flex gap-2 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 p-1.5 rounded-2xl shadow-soft w-full overflow-x-auto">
                        {TABS.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all ${
                                    activeTab === tab.id
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* ══════════════════════════════
                        TAB 1 — MINIMUM WAGES
                    ══════════════════════════════ */}
                    {activeTab === 'wages' && (
                        <div className="mt-8">
                            <div className="flex items-start gap-3 mb-6">
                                <div className="p-2.5 bg-green-100 dark:bg-green-900/40 text-green-600 rounded-xl flex-shrink-0">
                                    <IndianRupee className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                        {stateData.name} Minimum Wages 2025
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                                        Revised: {stateData.wageRevision} · Source: {stateData.wageSource}
                                    </p>
                                </div>
                            </div>

                            {stateData.slug === 'delhi' ? (
                                <div className="mb-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 flex gap-3">
                                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-blue-700 dark:text-blue-300">
                                        <strong>Note:</strong> Delhi has the highest minimum wages in India. The ₹783–₹1,035/day rates circulating on social media are <em>Delhi-specific</em> and do <strong>not</strong> apply to other states.
                                    </p>
                                </div>
                            ) : (
                                <div className="mb-5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700 rounded-xl p-4 flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-amber-700 dark:text-amber-400">
                                        <strong>Reminder:</strong> The ₹783–₹1,035/day wages shown on social media are Delhi's rates and do <strong>not</strong> apply in {stateData.name}.
                                    </p>
                                </div>
                            )}

                            <div className="space-y-6">
                                {stateData.wages?.map((sector, idx) => {
                                    const c = sectorColors[idx % sectorColors.length];
                                    return (
                                        <div key={idx} className={`rounded-2xl border ${c.border} overflow-hidden shadow-soft`}>
                                            <div className={`${c.header} text-white px-5 py-3`}>
                                                <h3 className="font-bold text-lg">{sector.sector}</h3>
                                                <p className="text-sm opacity-80">{sector.note}</p>
                                            </div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead className={c.bg}>
                                                        <tr className="text-left">
                                                            <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300">Category</th>
                                                            <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300 text-right">Per Day (₹)</th>
                                                            <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300 text-right">Per Month (₹)</th>
                                                            <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300 hidden md:table-cell">Applies To</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white dark:bg-gray-950 divide-y divide-gray-100 dark:divide-gray-800">
                                                        {sector.rows.map((row, i) => (
                                                            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                                                                <td className="px-5 py-3 font-semibold text-gray-900 dark:text-gray-100">{row.category}</td>
                                                                <td className="px-5 py-3 text-right font-bold text-gray-800 dark:text-gray-200">₹{row.daily.toLocaleString('en-IN')}</td>
                                                                <td className="px-5 py-3 text-right">
                                                                    <span className={`font-bold text-sm px-3 py-1 rounded-full ${c.badge}`}>
                                                                        ₹{row.monthly.toLocaleString('en-IN')}
                                                                    </span>
                                                                </td>
                                                                <td className="px-5 py-3 text-gray-500 dark:text-gray-400 text-xs hidden md:table-cell">{row.note}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Rights summary */}
                            <div className="mt-6 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
                                <h4 className="font-bold text-green-800 dark:text-green-300 mb-3">⚖️ Your Minimum Wage Rights</h4>
                                <ul className="space-y-2 text-sm text-green-700 dark:text-green-400">
                                    <li>• <strong>Overtime at 2x:</strong> Work beyond 8–9 hrs/day must be paid at double rate.</li>
                                    <li>• <strong>No deductions below MW:</strong> Even with fines/advances, take-home cannot fall below the minimum wage.</li>
                                    <li>• <strong>File a complaint:</strong> If underpaid, file under Section 20 of the Minimum Wages Act at the nearest Labour Office.</li>
                                </ul>
                                <a href="https://labour.gov.in" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 mt-3 text-sm text-green-700 dark:text-green-400 font-medium hover:underline">
                                    <ExternalLink className="w-3.5 h-3.5" /> Ministry of Labour — Official MW Notifications
                                </a>
                            </div>
                        </div>
                    )}

                    {/* ══════════════════════════════
                        TAB 2 — LABOUR LAWS
                    ══════════════════════════════ */}
                    {activeTab === 'laws' && (
                        <div className="mt-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 rounded-xl">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                    Key Regulations — {stateData.actName}
                                </h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <LawCard icon={Clock}         title="Maximum Working Hours"   description={stateData.maxWorkingHours} />
                                <LawCard icon={AlertTriangle} title="Overtime Rules"          description={stateData.overtime} />
                                <LawCard icon={Calendar}      title="Earned Leave Policy"     description={stateData.earnedLeave} />
                                <LawCard icon={Calendar}      title="Casual & Sick Leave"     description={stateData.casualSickLeave} />
                                <LawCard icon={Moon}          title="Women Night Shift"       description={stateData.womenNightShift} />
                                <LawCard icon={FileText}      title="Termination Notice"      description={stateData.noticePeriod} />
                            </div>

                            <div className="mt-8 bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-soft">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Does this apply to IT/Software companies?</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                    Yes. IT companies, BPOs, and KPOs are classified as "Commercial Establishments" under the <strong>{stateData.actName}</strong>. 
                                    While some states grant IT companies 24×7 operation exemptions, the fundamental rights on working hours, overtime pay, and statutory leave still strictly apply.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* ══════════════════════════════
                        TAB 3 — HOLIDAYS
                    ══════════════════════════════ */}
                    {activeTab === 'holidays' && (
                        <div className="mt-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-purple-100 dark:bg-purple-900/40 text-purple-600 rounded-xl">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                    Mandatory Holidays — {stateData.name}
                                </h2>
                            </div>

                            <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-soft mb-6">
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">National & Festival Holidays</h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{stateData.nationalHolidays}</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { date: 'Jan 26', name: 'Republic Day', emoji: '🇮🇳', mandatory: true },
                                    { date: 'May 1',  name: 'Labour Day',   emoji: '🛠️', mandatory: true },
                                    { date: 'Aug 15', name: 'Independence Day', emoji: '🇮🇳', mandatory: true },
                                    { date: 'Oct 2',  name: 'Gandhi Jayanti', emoji: '✌️', mandatory: true },
                                    { date: 'Varies', name: 'State Holiday', emoji: '🎉', mandatory: false },
                                    { date: 'Varies', name: 'Festival Holidays', emoji: '🪔', mandatory: false },
                                ].map((h, i) => (
                                    <div key={i} className="bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800 p-4 shadow-soft flex items-center gap-3">
                                        <span className="text-2xl">{h.emoji}</span>
                                        <div>
                                            <p className="font-bold text-gray-900 dark:text-gray-100 text-sm">{h.name}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{h.date}</p>
                                            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full mt-1 inline-block ${h.mandatory ? 'bg-red-100 text-red-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'}`}>
                                                {h.mandatory ? 'Mandatory' : 'Optional'}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700 rounded-xl p-5">
                                <p className="text-sm text-amber-700 dark:text-amber-400">
                                    <strong>⚠️ Important:</strong> If your employer asks you to work on a mandatory national holiday (Jan 26, Aug 15, Oct 2), 
                                    they <strong>must</strong> either give you compensatory off on another day OR pay you <strong>double wages (2x)</strong> for that day. 
                                    Refusing both is a labour law violation.
                                </p>
                            </div>
                        </div>
                    )}

                    <InternalLinks currentPath={`/state-labour-laws/${stateSlug}`} links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
