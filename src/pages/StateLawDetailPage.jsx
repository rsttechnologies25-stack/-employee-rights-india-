import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Calendar, Moon, AlertTriangle, ShieldCheck, FileText, IndianRupee, ExternalLink, Info } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import ContentSection from '../components/ContentSection';
import LawCard from '../components/LawCard';
import InternalLinks from '../components/InternalLinks';
import { getStateBySlug, getAllStates } from '../data/stateLawsData';

/* ─── Colour cycling for sector table headers ─── */
const sectorColors = [
    { header: 'bg-blue-600',  badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800', bg: 'bg-blue-50 dark:bg-blue-950/20' },
    { header: 'bg-orange-500', badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800', bg: 'bg-orange-50 dark:bg-orange-950/20' },
    { header: 'bg-red-600',   badge: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300', border: 'border-red-200 dark:border-red-800', bg: 'bg-red-50 dark:bg-red-950/20' },
    { header: 'bg-yellow-500', badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300', border: 'border-yellow-200 dark:border-yellow-800', bg: 'bg-yellow-50 dark:bg-yellow-950/20' },
];

export default function StateLawDetailPage() {
    const { stateSlug } = useParams();
    const stateData = getStateBySlug(stateSlug);

    if (!stateData) {
        return <Navigate to="/state-labour-laws" replace />;
    }

    const relatedLinks = getAllStates()
        .filter(s => s.slug !== stateSlug)
        .slice(0, 3)
        .map(s => ({
            title: `${s.name} Labour Laws`,
            subtitle: `Shops & Establishments Act`,
            path: `/state-labour-laws/${s.slug}`
        }));

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${stateData.name} Minimum Wages 2025 & Shops and Establishments Act`,
        "description": stateData.description,
        "author": {
            "@type": "Organization",
            "name": "RST Technologies"
        }
    };

    return (
        <div>
            <SEOHead 
                path={`/state-labour-laws/${stateSlug}`} 
                schema={schemaData} 
            />
            <Helmet>
                <title>{stateData.name} Minimum Wages 2025 & Labour Laws | Employee Rights India</title>
                <meta name="description" content={`Official ${stateData.name} minimum wages 2025 for IT, shops, and factories. ${stateData.description}`} />
                <meta property="og:title" content={`${stateData.name} Minimum Wages 2025 & Labour Laws`} />
                <meta property="og:description" content={stateData.description} />
            </Helmet>

            <PageHero
                title={`${stateData.name} Labour Laws`}
                subtitle={`Employee rights & minimum wages under the ${stateData.actName}`}
                icon={MapPin}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'State Labour Laws', path: '/state-labour-laws' },
                        { label: stateData.name, path: `/state-labour-laws/${stateSlug}` }
                    ]} />

                    {/* ── MINIMUM WAGES SECTION ── */}
                    {stateData.wages && stateData.wages.length > 0 && (
                        <div className="mt-10 mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-xl">
                                    <IndianRupee className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                        {stateData.name} Minimum Wages 2025
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Revised: {stateData.wageRevision} · Source: {stateData.wageSource}
                                    </p>
                                </div>
                            </div>

                            {/* Delhi special callout */}
                            {stateData.slug === 'delhi' && (
                                <div className="mb-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 flex gap-3">
                                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-blue-700 dark:text-blue-300">
                                        <strong>Note:</strong> Delhi has the highest minimum wages in India. 
                                        Viral social media posts showing ₹783–₹1,035/day are Delhi-specific and 
                                        do NOT apply to other states like Tamil Nadu, Karnataka, or UP.
                                    </p>
                                </div>
                            )}

                            {/* Wage disclaimer for non-Delhi states */}
                            {stateData.slug !== 'delhi' && (
                                <div className="mb-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700 rounded-xl p-4 flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-amber-700 dark:text-amber-400">
                                        <strong>Reminder:</strong> Minimum wages vary by state. The figures circulated on social media 
                                        (₹783–₹1,035/day) are Delhi's rates and do not apply here in {stateData.name}.
                                    </p>
                                </div>
                            )}

                            <div className="space-y-6">
                                {stateData.wages.map((sector, idx) => {
                                    const c = sectorColors[idx % sectorColors.length];
                                    return (
                                        <div key={idx} className={`rounded-2xl border ${c.border} overflow-hidden shadow-soft`}>
                                            <div className={`${c.header} text-white px-5 py-3`}>
                                                <h3 className="font-bold text-lg">{sector.sector}</h3>
                                                <p className="text-sm opacity-80">{sector.note}</p>
                                            </div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead className={`${c.bg}`}>
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

                            {/* Your Rights box */}
                            <div className="mt-6 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
                                <h4 className="font-bold text-green-800 dark:text-green-300 mb-3">⚖️ Your Minimum Wage Rights</h4>
                                <ul className="space-y-2 text-sm text-green-700 dark:text-green-400">
                                    <li>• <strong>Overtime at 2x:</strong> Any work beyond 8–9 hrs/day must be paid at double the rate.</li>
                                    <li>• <strong>No deductions below MW:</strong> Even with fines/advances, your take-home cannot fall below the minimum wage.</li>
                                    <li>• <strong>File a complaint:</strong> If underpaid, file under Section 20 of the Minimum Wages Act at the nearest Labour Office.</li>
                                </ul>
                                <a
                                    href="https://labour.gov.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 mt-3 text-sm text-green-700 dark:text-green-400 font-medium hover:underline"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    Ministry of Labour — Official MW Notifications
                                </a>
                            </div>
                        </div>
                    )}

                    {/* ── KEY REGULATIONS (existing section) ── */}
                    <ContentSection title="Key Regulations under Shops & Establishments Act" icon={ShieldCheck}>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <LawCard
                                icon={Clock}
                                title="Maximum Working Hours"
                                description={stateData.maxWorkingHours}
                            />
                            <LawCard
                                icon={AlertTriangle}
                                title="Overtime Rules"
                                description={stateData.overtime}
                            />
                            <LawCard
                                icon={Calendar}
                                title="Earned Leave Policy"
                                description={stateData.earnedLeave}
                            />
                            <LawCard
                                icon={Calendar}
                                title="Casual & Sick Leave"
                                description={stateData.casualSickLeave}
                            />
                            <LawCard
                                icon={Moon}
                                title="Women Night Shift"
                                description={stateData.womenNightShift}
                            />
                            <LawCard
                                icon={FileText}
                                title="Termination Notice Period"
                                description={stateData.noticePeriod}
                            />
                        </div>

                        <div className="mt-8 bg-blue-50/50 dark:bg-blue-950/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
                            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-blue-600" />
                                Mandatory National & Festival Holidays
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {stateData.nationalHolidays}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
                                Note: If an employee is required to work on a mandatory national holiday, the employer must provide compensatory time off or pay double wages (2x) for that day as per the Act.
                            </p>
                        </div>
                    </ContentSection>

                    <div className="mt-12 bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 shadow-soft">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Does this apply to IT/Software Companies?</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            Yes. IT and software companies, BPOs, and KPOs are classified as "Commercial Establishments" under the <strong>{stateData.actName}</strong>. 
                            While some states grant IT companies exemptions from specific clauses (like keeping the office open 24x7 or 365 days), the fundamental rights regarding maximum working hours, overtime pay, and statutory leaves still strictly apply.
                        </p>
                    </div>

                    <InternalLinks 
                        currentPath={`/state-labour-laws/${stateSlug}`} 
                        links={relatedLinks} 
                    />
                </div>
            </div>
        </div>
    );
}
