import React, { useState, useMemo } from 'react';
import { MapPin, Phone, Mail, Globe, Search, Info, AlertTriangle, Building2, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import InternalLinks from '../components/InternalLinks';
import ShareButtons from '../components/ShareButtons';
import PDFExportButton from '../components/PDFExportButton';
import { LABOUR_DIRECTORY, DIRECTORY_STATES } from '../data/labourOfficesData';

export default function LabourDirectoryPage() {
    const [selectedState, setSelectedState] = useState('karnataka');
    const [selectedSphere, setSelectedSphere] = useState('all');
    const [search, setSearch] = useState('');

    const currentStateName = DIRECTORY_STATES.find(s => s.slug === selectedState)?.name || 'Karnataka';

    const filteredOffices = useMemo(() => {
        const offices = LABOUR_DIRECTORY[selectedState] || [];
        return offices.filter(o => {
            const matchesSphere = selectedSphere === 'all' || 
                (selectedSphere === 'state' && o.sphere.includes('State')) ||
                (selectedSphere === 'central' && o.sphere.includes('Central'));

            const q = search.toLowerCase();
            const matchesSearch = !search || 
                o.district.toLowerCase().includes(q) || 
                o.office.toLowerCase().includes(q) ||
                o.jurisdiction.toLowerCase().includes(q) ||
                o.address.toLowerCase().includes(q);

            return matchesSphere && matchesSearch;
        });
    }, [selectedState, selectedSphere, search]);

    const relatedLinks = [
        { title: 'How to File Complaint', subtitle: 'Step-by-step complaint guide', path: '/complaint-guide' },
        { title: 'Grievance Generator', subtitle: 'Draft a formal complaint letter', path: '/tools/grievance-generator' },
        { title: 'State-Wise Labour Laws', subtitle: 'Verify local state rules', path: '/state-labour-laws' },
        { title: 'Authority Finder Tool', subtitle: 'Know where your case belongs', path: '/tools/authority-finder' }
    ];

    const generateDirectoryPdfText = () => {
        return `OFFICIAL LABOUR COMMISSIONER & REGIONAL LABOUR DIRECTORY\n` +
               `State: ${currentStateName} | Sphere: ${selectedSphere.toUpperCase()}\n` +
               `Generated via Employee Rights India (https://employee-rights.rexonsofttech.in)\n` +
               `============================================================\n\n` +
               filteredOffices.map((o, idx) => 
                   `[${idx + 1}] ${o.office.toUpperCase()}\n` +
                   `    Category: ${o.sphere} | District: ${o.district}\n` +
                   `    Jurisdiction Area: ${o.jurisdiction}\n` +
                   `    Physical Address: ${o.address}\n` +
                   `    Phone Contact: ${o.phone || 'N/A'}\n` +
                   `    Official Email: ${o.mail || 'N/A'}\n` +
                   `    Website Portal: ${o.web || 'N/A'}\n`
               ).join('\n') +
               `\nIMPORTANT JURISDICTION NOTE: Under the Industrial Disputes Act & State Shops Acts, you must submit your petition to the office with territorial jurisdiction over your physical employer workplace.`;
    };

    return (
        <div>
            <SEOHead 
                title="District-Wise Labour Commissioner & ALC Office Directory India"
                description="Find physical addresses, official email IDs, phone numbers, and map locations for State Labour Commissioners and Central Sphere RLC offices across Bengaluru, Chennai, Mumbai, Hyderabad, Pune, Delhi NCR, and Noida."
                path="/tools/labour-directory" 
            />

            <PageHero
                title="District-Wise Labour Office Directory"
                subtitle="Official addresses, conciliation officer emails, and telephone numbers to submit petitions before the Labour Commissioner."
                icon={MapPin}
                gradient="teal"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-5xl mx-auto space-y-8">
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <Breadcrumb items={[
                            { label: 'Tools', path: '/tools' },
                            { label: 'Labour Directory', path: '/tools/labour-directory' }
                        ]} />
                        <div className="flex items-center gap-2 flex-wrap">
                            <ShareButtons title="District-Wise Labour Office Directory" />
                            <PDFExportButton
                                documentTitle={`Labour Department Directory - ${currentStateName}`}
                                documentContent={generateDirectoryPdfText()}
                                buttonText="Export Office List PDF"
                            />
                        </div>
                    </div>

                    {/* ── JURISDICTION CAUTION ── */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-3xl p-6 flex flex-col md:flex-row gap-4 shadow-soft">
                        <AlertTriangle className="w-8 h-8 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <div className="space-y-1.5">
                            <h2 className="font-extrabold text-blue-900 dark:text-blue-200 text-base">
                                Mandatory Territorial Jurisdiction Rule
                            </h2>
                            <p className="text-blue-800 dark:text-blue-300 text-xs sm:text-sm leading-relaxed">
                                Statutory Labour Conciliation Petitions under Section 2A/10 of the IDA and Section 15 of the Payment of Wages Act <strong>must be filed before the Assistant/Deputy Labour Commissioner (ALC/DLC) holding physical jurisdiction over your workplace location</strong> (not your residential address or remote home).
                            </p>
                        </div>
                    </div>

                    {/* Filters: State Dropdown + Sphere Selector + Search */}
                    <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 space-y-5">
                        
                        {/* State Pills */}
                        <div>
                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2">Select State / Region</label>
                            <div className="flex gap-2 flex-wrap">
                                {DIRECTORY_STATES.map(st => (
                                    <button
                                        key={st.slug}
                                        type="button"
                                        onClick={() => setSelectedState(st.slug)}
                                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                                            selectedState === st.slug
                                                ? 'bg-primary text-white shadow-soft'
                                                : 'bg-gray-100 dark:bg-gray-850 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                                        }`}
                                    >
                                        {st.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Search & Sphere Filter */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pt-2 border-t border-gray-100 dark:border-gray-850">
                            <div className="sm:col-span-8 relative">
                                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search by district, locality (e.g. Whitefield, Hinjewadi, OMR, Okhla)..."
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-xs text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div className="sm:col-span-4">
                                <select
                                    value={selectedSphere}
                                    onChange={e => setSelectedSphere(e.target.value)}
                                    className="w-full px-3.5 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-xs font-bold text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="all">All Spheres (State + Central)</option>
                                    <option value="state">State Labour Dept (ALC / DLC)</option>
                                    <option value="central">Central Sphere (RLC Central / Banks / SEZ)</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    {/* Offices Card Grid */}
                    {filteredOffices.length === 0 ? (
                        <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 p-12 text-center text-gray-400">
                            <Info className="w-10 h-10 mx-auto mb-3 opacity-40" />
                            <p className="font-bold text-gray-700 dark:text-gray-300 text-sm">No regional offices found matching your criteria</p>
                            <p className="text-xs text-gray-500 mt-1">Try clearing your search term or selecting 'All Spheres'.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredOffices.map((office, idx) => (
                                <div key={idx} className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 flex flex-col justify-between hover:border-primary/40 transition-all space-y-5">
                                    
                                    <div>
                                        <div className="flex justify-between items-start gap-2 mb-2">
                                            <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                                                office.sphere.includes('Central')
                                                    ? 'bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                                                    : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                                            }`}>
                                                {office.sphere}
                                            </span>
                                            <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400">
                                                {office.district}
                                            </span>
                                        </div>

                                        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base leading-snug">
                                            {office.office}
                                        </h3>

                                        <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 text-xs">
                                            <p className="text-[10px] font-extrabold uppercase text-primary tracking-wide mb-0.5">Jurisdiction Coverage:</p>
                                            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{office.jurisdiction}</p>
                                        </div>

                                        <div className="flex items-start gap-2.5 mt-3.5 text-xs text-gray-600 dark:text-gray-400">
                                            <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                                            <span className="leading-relaxed">{office.address}</span>
                                        </div>
                                    </div>

                                    {/* Action Links */}
                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2.5">
                                        {office.phone && (
                                            <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                                <Phone className="w-3.5 h-3.5 text-primary" />
                                                <a href={`tel:${office.phone.split('/')[0].trim()}`} className="hover:text-primary transition-colors">
                                                    {office.phone}
                                                </a>
                                            </div>
                                        )}
                                        {office.mail && (
                                            <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                                <Mail className="w-3.5 h-3.5 text-primary" />
                                                <a href={`mailto:${office.mail}`} className="hover:underline text-primary truncate max-w-[280px]">
                                                    {office.mail}
                                                </a>
                                            </div>
                                        )}
                                        <div className="flex items-center justify-between gap-2 pt-2">
                                            {office.web && (
                                                <a 
                                                    href={`https://${office.web}`} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="text-xs font-bold text-gray-600 dark:text-gray-400 hover:text-primary flex items-center gap-1 transition-colors"
                                                >
                                                    <Globe className="w-3.5 h-3.5" /> Official Portal
                                                </a>
                                            )}
                                            {office.mapsQuery && (
                                                <a 
                                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapsQuery)}`} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold flex items-center gap-1 transition-colors"
                                                >
                                                    <Navigation className="w-3 h-3" /> Map Direction
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    )}

                    <InternalLinks currentPath="/tools/labour-directory" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
