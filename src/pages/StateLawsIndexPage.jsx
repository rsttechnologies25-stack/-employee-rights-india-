import React, { useState, useMemo } from 'react';
import { MapPin, ArrowRight, BookOpen, Search, ExternalLink, ShieldCheck, Building2, Globe, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { getAllStates } from '../data/stateLawsData';
import { ALL_INDIAN_JURISDICTIONS, ZONES } from '../data/allIndianStatesDirectory';

export default function StateLawsIndexPage() {
    const states = getAllStates();
    const [selectedZone, setSelectedZone] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredDeepGuides = useMemo(() => {
        return states.filter((state) => {
            const jur = ALL_INDIAN_JURISDICTIONS.find((j) => j.slug === state.slug);
            const matchesZone = selectedZone === 'All' || jur?.zone === selectedZone;
            const q = searchQuery.toLowerCase().trim();
            const matchesQuery = !q ||
                state.name.toLowerCase().includes(q) ||
                state.description.toLowerCase().includes(q) ||
                jur?.capitalHub.toLowerCase().includes(q);
            return matchesZone && matchesQuery;
        });
    }, [states, selectedZone, searchQuery]);

    const filteredAllJurisdictions = useMemo(() => {
        return ALL_INDIAN_JURISDICTIONS.filter((jur) => {
            const matchesZone = selectedZone === 'All' || jur.zone === selectedZone;
            const q = searchQuery.toLowerCase().trim();
            const matchesQuery = !q ||
                jur.name.toLowerCase().includes(q) ||
                jur.capitalHub.toLowerCase().includes(q) ||
                jur.actName.toLowerCase().includes(q) ||
                jur.zone.toLowerCase().includes(q);
            return matchesZone && matchesQuery;
        });
    }, [selectedZone, searchQuery]);

    return (
        <div>
            <SEOHead 
                path="/state-labour-laws" 
                title="State-Wise Labour Laws in India (28 States & 8 Union Territories)"
                description="Comprehensive guide to Shops and Establishments Acts across all 28 Indian States and 8 Union Territories. Working hours, overtime, leave entitlements, notice period, and official labour commissioner portals."
                schema={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "State-Wise Labour Laws in India (28 States & 8 Union Territories)",
                    "description": "Comprehensive guide to Shops and Establishments Acts for Indian states including working hours, leaves, and termination rules.",
                    "hasPart": ALL_INDIAN_JURISDICTIONS.map((j) => ({
                        "@type": "GovernmentService",
                        "name": `${j.name} Shops & Establishments Act`,
                        "serviceType": "Labour Law Guidance",
                        "provider": {
                            "@type": "GovernmentOrganization",
                            "name": `${j.name} Labour Department`
                        },
                        "areaServed": {
                            "@type": "AdministrativeArea",
                            "name": j.name
                        }
                    }))
                }}
            />
            <PageHero
                title="State-Wise Labour Laws & Shops Acts"
                subtitle="Know your rights under the specific Shops and Establishments Act of your state. Comprehensive coverage across all 28 States and 8 Union Territories."
                icon={MapPin}
                gradient="blue"
            />
            
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-6xl mx-auto space-y-8">
                    <Breadcrumb items={[{ label: 'State Labour Laws', path: '/state-labour-laws' }]} />

                    {/* ── EDUCATIONAL CALLOUT ── */}
                    <div className="bg-white dark:bg-gray-950 p-6 md:p-8 rounded-3xl border border-blue-100 dark:border-blue-900/40 shadow-soft">
                        <div className="flex flex-col sm:flex-row gap-5">
                            <div className="p-3.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl shrink-0 h-fit">
                                <BookOpen className="w-7 h-7" />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-xl font-black text-gray-900 dark:text-gray-100">
                                    Why Do State Labour Laws Matter for Employees?
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    While Central Labour Laws (such as EPF, ESI, Gratuity, and the Maternity Benefit Act) apply uniformly across India, daily employment conditions—including <strong>maximum working hours, overtime multiples, earned leave encashment, women night-shift transport, and statutory termination notice</strong>—are governed by state-specific <em>Shops and Commercial Establishments Acts</em>.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    For example, an IT/corporate employee in <strong>Karnataka (Bangalore)</strong> is protected by Section 39 of the Karnataka Shops Act (mandatory 1-month notice after 6 months), whereas in <strong>Maharashtra (Mumbai/Pune)</strong> the 2017 Act governs establishment exemptions, and <strong>Tamil Nadu (Chennai)</strong> grants statutory appeal rights before the Deputy Commissioner of Labour under Section 41.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── SEARCH & ZONAL FILTERING CONTROLS ── */}
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-4">
                        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
                            
                            {/* Search Bar */}
                            <div className="relative flex-1 max-w-md">
                                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search state, UT, or economic hub (e.g. Bengaluru, Noida, Pune)..."
                                    className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                    aria-label="Filter state laws by state name or hub"
                                />
                            </div>

                            {/* Zonal Filter Pills */}
                            <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Filter by geographic zone">
                                {ZONES.map((zone) => (
                                    <button
                                        key={zone}
                                        type="button"
                                        onClick={() => setSelectedZone(zone)}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all min-h-[38px] ${
                                            selectedZone === zone
                                                ? 'bg-blue-600 text-white shadow-soft'
                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                    >
                                        {zone}
                                    </button>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* ── SECTION 1: DETAILED STATE GUIDES (15 PRIMARY STATES) ── */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                    <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    Detailed State Labour Law Guides ({filteredDeepGuides.length})
                                </h2>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    Includes verified 2024–2026 minimum wage schedules, 2026 gazetted public holidays, overtime rules, and termination provisions.
                                </p>
                            </div>
                        </div>

                        {filteredDeepGuides.length === 0 ? (
                            <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 text-center text-gray-500 dark:text-gray-400 border border-gray-150 dark:border-gray-800">
                                No detailed guides match your current filter. Check the complete 28 States & 8 UTs directory table below.
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredDeepGuides.map((state) => (
                                    <Link 
                                        key={state.slug} 
                                        to={state.slug === 'tamil-nadu' ? '/tamil-nadu' : `/state-labour-laws/${state.slug}`}
                                        className="group bg-white dark:bg-gray-950 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-soft hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all block relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 dark:bg-blue-900/10 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                        <MapPin className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{state.name}</h3>
                                                        <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                                            {ALL_INDIAN_JURISDICTIONS.find(j => j.slug === state.slug)?.zone || 'India'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-400 text-xs mb-5 line-clamp-3 leading-relaxed">
                                                {state.description}
                                            </p>

                                            <div className="pt-3 border-t border-gray-100 dark:border-gray-850 flex items-center justify-between text-blue-600 dark:text-blue-400 font-bold text-xs group-hover:text-blue-700 dark:group-hover:text-blue-300">
                                                <span>Read {state.name} Laws</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* ── SECTION 2: ALL 28 STATES & 8 UNION TERRITORIES STATUTORY DIRECTORY ── */}
                    <div className="pt-6">
                        <div className="mb-6">
                            <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                All India Statutory Directory (28 States & 8 Union Territories)
                            </h2>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Complete statutory mapping of governing Shops & Establishments legislation, economic hubs, dispute filing authorities, and direct links to official state labour portals.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-950 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs">
                                    <thead className="bg-gray-50 dark:bg-gray-900/80 border-b border-gray-150 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-extrabold uppercase tracking-wider text-[11px]">
                                        <tr>
                                            <th className="py-4 px-4 sm:px-6">Jurisdiction</th>
                                            <th className="py-4 px-4">Zone & Economic Hub</th>
                                            <th className="py-4 px-4">Governing Shops & Est. Act</th>
                                            <th className="py-4 px-4">Conciliation / Dispute Body</th>
                                            <th className="py-4 px-4 sm:px-6 text-right">Official Portal / Guide</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-850">
                                        {filteredAllJurisdictions.map((jur) => (
                                            <tr key={jur.name} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/40 transition-colors">
                                                <td className="py-3.5 px-4 sm:px-6">
                                                    <div className="font-bold text-gray-900 dark:text-gray-100">
                                                        {jur.name}
                                                    </div>
                                                    <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-bold mt-0.5 ${
                                                        jur.type === 'UT' 
                                                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' 
                                                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                                                    }`}>
                                                        {jur.type === 'UT' ? 'Union Territory' : 'State'}
                                                    </span>
                                                </td>
                                                <td className="py-3.5 px-4 text-gray-600 dark:text-gray-300">
                                                    <div className="font-semibold text-gray-900 dark:text-gray-200">{jur.zone}</div>
                                                    <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{jur.capitalHub}</div>
                                                </td>
                                                <td className="py-3.5 px-4 text-gray-700 dark:text-gray-300 font-medium">
                                                    {jur.actName}
                                                </td>
                                                <td className="py-3.5 px-4 text-gray-600 dark:text-gray-400 text-[11px]">
                                                    {jur.disputeAuthority}
                                                </td>
                                                <td className="py-3.5 px-4 sm:px-6 text-right">
                                                    <div className="flex flex-col sm:flex-row items-end sm:items-center justify-end gap-2">
                                                        {jur.hasDetailedGuide && (
                                                            <Link
                                                                to={jur.customPath || `/state-labour-laws/${jur.slug}`}
                                                                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
                                                            >
                                                                Detailed Guide <ArrowRight className="w-3 h-3" />
                                                            </Link>
                                                        )}
                                                        <a
                                                            href={jur.portalUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors"
                                                            title={`Visit official ${jur.name} Labour Portal`}
                                                        >
                                                            <span>Govt Portal</span>
                                                            <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* ── REGIONAL HUBS CALLOUT ── */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-5 items-start">
                        <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                        <div className="space-y-2">
                            <h3 className="font-black text-emerald-900 dark:text-emerald-200 text-base">
                                Indian Employment Hubs Covered
                            </h3>
                            <p className="text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm leading-relaxed">
                                Our statutory guides specifically cover the regulatory practices of major metropolitan employment zones including:
                                <strong> Bengaluru</strong> (Whitefield, Bellandur, Electronic City), <strong>Hyderabad</strong> (HITEC City, Gachibowli), <strong>Chennai</strong> (OMR, Guindy), <strong>Mumbai & Navi Mumbai</strong> (BKC, Thane), <strong>Pune</strong> (Hinjawadi, Magarpatta), <strong>NCR</strong> (Delhi, Gurugram Cyber City, Noida Expressway), <strong>Kolkata</strong> (Salt Lake Sector V), <strong>Ahmedabad & GIFT City</strong>, <strong>Kochi</strong> (Infopark), <strong>Chandigarh & Mohali</strong>, <strong>Indore</strong> (Super Corridor), and <strong>Jaipur</strong> (Sitapura).
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
