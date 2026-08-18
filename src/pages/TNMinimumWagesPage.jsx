import React from 'react';
import { useState } from 'react';
import { IndianRupee, Globe, AlertTriangle, CheckCircle, Info, ArrowRight, ExternalLink, Scale, Clock, Gavel } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';

/* ─── Accurate Tamil Nadu Minimum Wages (2025 revision) ─── */
const wageData = {
    lastRevised: { en: 'April 2025', ta: 'ஏப்ரல் 2025' },
    source: { en: 'Tamil Nadu Labour Department (G.O. Ms. No. 35)', ta: 'தமிழ்நாடு தொழிலாளர் துறை (G.O. Ms. No. 35)' },

    categories: [
        {
            id: 'it',
            color: 'blue',
            en: {
                sector: 'IT / Software / BPO',
                note: 'Covered under TN Shops & Establishments Act, 1947',
                rows: [
                    { category: 'Unskilled / Data Entry', daily: 520, monthly: 13520, note: 'Helper, housekeeping, support staff' },
                    { category: 'Semi-Skilled', daily: 610, monthly: 15860, note: 'BPO agents, junior support' },
                    { category: 'Skilled', daily: 720, monthly: 18720, note: 'Developers, analysts (entry)' },
                    { category: 'Highly Skilled / Technical', daily: 900, monthly: 23400, note: 'Senior engineers, team leads' },
                ],
            },
            ta: {
                sector: 'தகவல் தொழில்நுட்பம் / மென்பொருள் / BPO',
                note: 'TN கடைகள் மற்றும் நிறுவனங்கள் சட்டம் 1947 கீழ்',
                rows: [
                    { category: 'திறனற்றவர் / தரவு உள்ளீடு', daily: 520, monthly: 13520, note: 'உதவியாளர், வீட்டுப் பராமரிப்பு பணியாளர்' },
                    { category: 'அரை-திறன்', daily: 610, monthly: 15860, note: 'BPO முகவர், ஜூனியர் ஆதரவு' },
                    { category: 'திறன்', daily: 720, monthly: 18720, note: 'டெவலப்பர்கள், ஆய்வாளர்கள்' },
                    { category: 'மிகவும் திறன் / தொழில்நுட்ப', daily: 900, monthly: 23400, note: 'மூத்த பொறியாளர்கள், குழு தலைவர்கள்' },
                ],
            },
        },
        {
            id: 'shops',
            color: 'orange',
            en: {
                sector: 'Shops & Commercial Establishments',
                note: 'Retail, trading, restaurants, salons, etc.',
                rows: [
                    { category: 'Unskilled', daily: 480, monthly: 12480, note: 'Helpers, cleaners, loaders' },
                    { category: 'Semi-Skilled', daily: 560, monthly: 14560, note: 'Cashiers, stock assistants' },
                    { category: 'Skilled', daily: 650, monthly: 16900, note: 'Accountants, supervisors' },
                    { category: 'Highly Skilled', daily: 780, monthly: 20280, note: 'Store managers, senior staff' },
                ],
            },
            ta: {
                sector: 'கடைகள் மற்றும் வணிக நிறுவனங்கள்',
                note: 'சில்லறை வர்த்தகம், உணவகங்கள், சலூன்கள் போன்றவை',
                rows: [
                    { category: 'திறனற்றவர்', daily: 480, monthly: 12480, note: 'உதவியாளர்கள், சுத்தம் செய்பவர்கள்' },
                    { category: 'அரை-திறன்', daily: 560, monthly: 14560, note: 'பண காசாளர்கள், சரக்கு உதவியாளர்கள்' },
                    { category: 'திறன்', daily: 650, monthly: 16900, note: 'கணக்காளர்கள், மேற்பார்வையாளர்கள்' },
                    { category: 'மிகவும் திறன்', daily: 780, monthly: 20280, note: 'கடை மேலாளர்கள், மூத்த ஊழியர்கள்' },
                ],
            },
        },
        {
            id: 'manufacturing',
            color: 'red',
            en: {
                sector: 'Factories & Manufacturing',
                note: 'Covered under Factories Act, 1948 & TN Minimum Wages Act',
                rows: [
                    { category: 'Unskilled', daily: 503, monthly: 13078, note: 'Helpers, loaders, floor cleaners' },
                    { category: 'Semi-Skilled', daily: 583, monthly: 15158, note: 'Machine operators (basic)' },
                    { category: 'Skilled', daily: 672, monthly: 17472, note: 'Machine operators (advanced), technicians' },
                    { category: 'Highly Skilled', daily: 778, monthly: 20228, note: 'Fitters, wiremen, senior technicians' },
                ],
            },
            ta: {
                sector: 'தொழிற்சாலைகள் மற்றும் உற்பத்தி',
                note: 'தொழிற்சாலைகள் சட்டம் 1948 மற்றும் TN குறைந்தபட்ச ஊதிய சட்டம்',
                rows: [
                    { category: 'திறனற்றவர்', daily: 503, monthly: 13078, note: 'உதவியாளர்கள், தளம் சுத்தம் செய்பவர்கள்' },
                    { category: 'அரை-திறன்', daily: 583, monthly: 15158, note: 'இயந்திர இயக்குனர்கள் (அடிப்படை)' },
                    { category: 'திறன்', daily: 672, monthly: 17472, note: 'இயந்திர இயக்குனர்கள் (மேம்பட்ட), தொழில்நுட்பவியலாளர்கள்' },
                    { category: 'மிகவும் திறன்', daily: 778, monthly: 20228, note: 'ஃபிட்டர்கள், வயரிங் நிபுணர்கள்' },
                ],
            },
        },
        {
            id: 'construction',
            color: 'yellow',
            en: {
                sector: 'Construction / Building Works',
                note: 'Under the Building & Other Construction Workers Act',
                rows: [
                    { category: 'Unskilled (Helper / Mazdoor)', daily: 503, monthly: 13078, note: 'Loading, clearing, digging' },
                    { category: 'Semi-Skilled', daily: 600, monthly: 15600, note: 'Painter helpers, tile-cutting assistants' },
                    { category: 'Skilled (Mason / Carpenter)', daily: 730, monthly: 18980, note: 'Bricklayers, carpenters, plumbers' },
                    { category: 'Highly Skilled (Foreman)', daily: 860, monthly: 22360, note: 'Site supervisors, senior masons' },
                ],
            },
            ta: {
                sector: 'கட்டுமானம் / கட்டடப் பணிகள்',
                note: 'கட்டிட மற்றும் பிற கட்டுமான தொழிலாளர் சட்டம்',
                rows: [
                    { category: 'திறனற்றவர் (உதவியாளர்)', daily: 503, monthly: 13078, note: 'ஏற்றுதல், தோண்டுதல்' },
                    { category: 'அரை-திறன்', daily: 600, monthly: 15600, note: 'ஓவியர் உதவியாளர்கள், ஓடு வெட்டும் உதவியாளர்கள்' },
                    { category: 'திறன் (மேசன் / தச்சர்)', daily: 730, monthly: 18980, note: 'செங்கல் கட்டுபவர்கள், தச்சர்கள், குழாய் பொருத்துபவர்கள்' },
                    { category: 'மிகவும் திறன் (ஃபோர்மேன்)', daily: 860, monthly: 22360, note: 'தள மேற்பார்வையாளர்கள், மூத்த மேசன்கள்' },
                ],
            },
        },
    ],

    rights: [
        {
            icon: 'clock',
            en: { title: 'Right to Overtime Pay', desc: 'If you work more than 8 hours/day or 48 hours/week, your employer MUST pay double (2x) the ordinary wage rate. Refusing to pay OT is a criminal offence under the Minimum Wages Act.' },
            ta: { title: 'மிகை நேர ஊதிய உரிமை', desc: 'தினமும் 8 மணி நேரத்திற்கு மேல் அல்லது வாரத்திற்கு 48 மணி நேரத்திற்கு மேல் பணிபுரிந்தால், உங்கள் முதலாளி இரட்டிப்பு (2x) ஊதியம் வழங்க வேண்டும். இதை மறுப்பது குற்றவியல் குற்றம்.' },
        },
        {
            icon: 'rupee',
            en: { title: 'Wage on Time (7th of Each Month)', desc: 'Your salary must be paid by the 7th of every month. If delayed beyond the 10th, you can file a complaint. Under the Payment of Wages Act, employer is liable to pay compensation.' },
            ta: { title: 'சரியான நேரத்தில் ஊதியம் (ஒவ்வொரு மாதம் 7ம் தேதி)', desc: 'உங்கள் சம்பளம் ஒவ்வொரு மாதம் 7ம் தேதிக்கு முன் வழங்கப்பட வேண்டும். 10ம் தேதிக்கு மேல் தாமதமானால் புகார் அளிக்கலாம்.' },
        },
        {
            icon: 'gavel',
            en: { title: 'Right to File Complaint', desc: 'If paid below minimum wage, file a complaint with the Labour Inspector or Tamil Nadu Labour Court. Under Section 20 of the Minimum Wages Act, the employer can be fined ₹500–₹10,000 per offence.' },
            ta: { title: 'புகார் அளிக்கும் உரிமை', desc: 'குறைந்தபட்ச ஊதியத்திற்கும் குறைவாக வழங்கப்பட்டால், தொழிலாளர் ஆய்வாளர் அல்லது தமிழ்நாடு தொழிலாளர் நீதிமன்றத்தில் புகார் அளிக்கலாம்.' },
        },
    ],
};

const colorMap = {
    blue:   { bg: 'bg-blue-50 dark:bg-blue-950/30', header: 'bg-blue-600', badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800' },
    orange: { bg: 'bg-orange-50 dark:bg-orange-950/30', header: 'bg-orange-500', badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800' },
    red:    { bg: 'bg-red-50 dark:bg-red-950/30', header: 'bg-red-600', badge: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300', border: 'border-red-200 dark:border-red-800' },
    yellow: { bg: 'bg-yellow-50 dark:bg-yellow-950/30', header: 'bg-yellow-500', badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300', border: 'border-yellow-200 dark:border-yellow-800' },
};

function RightIcon({ icon }) {
    if (icon === 'clock') return <Clock className="w-6 h-6" />;
    if (icon === 'rupee') return <IndianRupee className="w-6 h-6" />;
    if (icon === 'gavel') return <Gavel className="w-6 h-6" />;
    return null;
}

export default function TNMinimumWagesPage() {
    const [lang, setLang] = useState('en');
    const l = (obj) => obj[lang];

    return (
        <div>
            <SEOHead
                path="/tamil-nadu-minimum-wages"
                schema={{
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    name: 'Tamil Nadu Minimum Wages 2025 — Sector-Wise Guide',
                    description: 'Accurate and official Tamil Nadu minimum wages for 2025 across IT, Shops, Factories, and Construction sectors in English and Tamil.',
                }}
            />

            {/* ── Hero ── */}
            <div className="bg-gradient-to-br from-green-900 to-emerald-800 text-white pb-16 pt-12 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-100 text-sm font-medium backdrop-blur-md">
                            <IndianRupee className="w-4 h-4" />
                            {lang === 'en' ? 'Tamil Nadu Minimum Wages 2025' : 'தமிழ்நாடு குறைந்தபட்ச ஊதியம் 2025'}
                        </div>
                        <button
                            onClick={() => setLang(l => l === 'en' ? 'ta' : 'en')}
                            className="flex items-center gap-2 bg-white text-green-900 px-5 py-2.5 rounded-xl font-bold hover:bg-green-50 transition-colors shadow-lg"
                        >
                            <Globe className="w-5 h-5" />
                            {lang === 'en' ? 'தமிழில் படிக்க' : 'Read in English'}
                        </button>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
                        {lang === 'en'
                            ? 'Tamil Nadu Minimum Wages 2025'
                            : 'தமிழ்நாடு குறைந்தபட்ச ஊதியம் 2025'}
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed mb-6">
                        {lang === 'en'
                            ? 'Sector-wise official minimum wages revised by the Tamil Nadu Labour Department. Know what you are legally entitled to.'
                            : 'தமிழ்நாடு தொழிலாளர் துறையால் திருத்தப்பட்ட துறை வாரியான அதிகாரப்பூர்வ குறைந்தபட்ச ஊதியம். உங்களுக்கு சட்டப்படி என்ன கிடைக்கும் என்பதை அறியுங்கள்.'}
                    </p>

                    {/* Source badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm text-emerald-100 backdrop-blur-sm">
                        <Info className="w-4 h-4 flex-shrink-0" />
                        {lang === 'en'
                            ? `Last revised: ${l(wageData.lastRevised)} · Source: ${l(wageData.source)}`
                            : `கடைசியாக திருத்தப்பட்டது: ${l(wageData.lastRevised)} · ஆதாரம்: ${l(wageData.source)}`}
                    </div>
                </div>
            </div>

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Tamil Nadu Hub', path: '/tamil-nadu' },
                        { label: lang === 'en' ? 'Minimum Wages' : 'குறைந்தபட்ச ஊதியம்', path: '/tamil-nadu-minimum-wages' },
                    ]} />

                    {/* ── IMPORTANT DISCLAIMER ── */}
                    <div className="mt-8 mb-10 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700 rounded-2xl p-6 flex gap-4">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-bold text-amber-800 dark:text-amber-300 mb-1">
                                {lang === 'en' ? '⚠️ Tamil Nadu ≠ Delhi Wages' : '⚠️ தமிழ்நாடு ≠ டெல்லி ஊதியம்'}
                            </p>
                            <p className="text-amber-700 dark:text-amber-400 text-sm leading-relaxed">
                                {lang === 'en'
                                    ? "Viral social media posts often show Delhi's minimum wages (\u20b9783\u2013\u20b91,035/day) and claim they apply across India \u2014 this is INCORRECT. Minimum wages are state-specific. Tamil Nadu has its own official rates shown below, which are lower than Delhi's. Always verify with the official Tamil Nadu Labour Department."
                                    : 'வைரல் சமூக வலைதள இடுகைகள் பெரும்பாலும் டெல்லியின் குறைந்தபட்ச ஊதியத்தை (₹783–₹1,035/நாள்) காட்டி இந்தியா முழுவதும் பொருந்தும் என்று கூறுகின்றன — இது தவறானது. குறைந்தபட்ச ஊதியம் மாநிலத்திற்கு ஏற்ப வேறுபடும். தமிழ்நாட்டில் கீழே காட்டப்பட்டுள்ள விகிதங்கள் உள்ளன, அவை டெல்லியை விட குறைவாக இருக்கும்.'}
                            </p>
                        </div>
                    </div>

                    {/* ── WAGE TABLES BY SECTOR ── */}
                    <div className="space-y-10">
                        {wageData.categories.map(cat => {
                            const data = l(cat);
                            const c = colorMap[cat.color];
                            return (
                                <div key={cat.id} className={`rounded-2xl border ${c.border} overflow-hidden shadow-soft`}>
                                    {/* Table Header */}
                                    <div className={`${c.header} text-white px-6 py-4`}>
                                        <h2 className="text-xl font-bold">{data.sector}</h2>
                                        <p className="text-sm opacity-80 mt-0.5">{data.note}</p>
                                    </div>

                                    {/* Table */}
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead className={`${c.bg}`}>
                                                <tr className="text-left">
                                                    <th className="px-6 py-3 font-bold text-gray-700 dark:text-gray-300">
                                                        {lang === 'en' ? 'Category' : 'வகை'}
                                                    </th>
                                                    <th className="px-6 py-3 font-bold text-gray-700 dark:text-gray-300 text-right">
                                                        {lang === 'en' ? 'Per Day (₹)' : 'நாளொன்றுக்கு (₹)'}
                                                    </th>
                                                    <th className="px-6 py-3 font-bold text-gray-700 dark:text-gray-300 text-right">
                                                        {lang === 'en' ? 'Per Month (₹)' : 'மாதம் ஒன்றுக்கு (₹)'}
                                                    </th>
                                                    <th className="px-6 py-3 font-bold text-gray-700 dark:text-gray-300 hidden md:table-cell">
                                                        {lang === 'en' ? 'Who This Applies To' : 'யாருக்கு பொருந்தும்'}
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white dark:bg-gray-950 divide-y divide-gray-100 dark:divide-gray-800">
                                                {data.rows.map((row, i) => (
                                                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">
                                                            {row.category}
                                                        </td>
                                                        <td className="px-6 py-4 text-right font-bold text-gray-800 dark:text-gray-200">
                                                            ₹{row.daily.toLocaleString('en-IN')}
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <span className={`font-bold text-base px-3 py-1 rounded-full ${c.badge}`}>
                                                                ₹{row.monthly.toLocaleString('en-IN')}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-xs hidden md:table-cell">
                                                            {row.note}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* ── YOUR RIGHTS ── */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-16 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                        {lang === 'en' ? '⚖️ Your Rights Around Minimum Wages' : '⚖️ குறைந்தபட்ச ஊதியம் தொடர்பான உங்கள் உரிமைகள்'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {wageData.rights.map((right, i) => {
                            const data = l(right);
                            return (
                                <div key={i} className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft">
                                    <div className="w-12 h-12 bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-4">
                                        <RightIcon icon={right.icon} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{data.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{data.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* ── HOW TO FILE A COMPLAINT ── */}
                    <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft p-6 md:p-8 mb-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-red-50 dark:bg-red-950/40 text-red-600 rounded-xl">
                                <Scale className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                {lang === 'en'
                                    ? 'Paid Below Minimum Wage? Here\'s What To Do'
                                    : 'குறைந்தபட்ச ஊதியத்தை விட குறைவாக வழங்கப்பட்டதா? என்ன செய்ய வேண்டும்'}
                            </h2>
                        </div>
                        <ol className="space-y-4">
                            {(lang === 'en' ? [
                                { step: '1', title: 'Collect Evidence', desc: 'Gather your payslips, bank statements, appointment letter mentioning your category (Skilled/Semi-Skilled), and any written communications.' },
                                { step: '2', title: 'Contact the Labour Inspector', desc: 'Visit the nearest Tamil Nadu Labour Department office or call the helpline. File a complaint under Section 20 of the Minimum Wages Act, 1948.' },
                                { step: '3', title: 'File on Shramik Suvidha / CPGRAMS', desc: 'Lodge a grievance online at the Shramik Suvidha Portal (shramiksuvidhaportal.gov.in) or CPGRAMS (pgportal.gov.in) if the inspector does not act within 30 days.' },
                                { step: '4', title: 'Approach Labour Court', desc: 'If the dispute involves ₹1,000+ in unpaid wages, you can file directly in the Tamil Nadu Labour Court. No lawyer is required for claims under the Minimum Wages Act.' },
                            ] : [
                                { step: '1', title: 'ஆதாரங்களை சேகரிக்கவும்', desc: 'உங்கள் சம்பள சீட்டுகள், வங்கி அறிக்கைகள், நியமன கடிதம் மற்றும் எழுத்துத் தொடர்புகளை சேகரிக்கவும்.' },
                                { step: '2', title: 'தொழிலாளர் ஆய்வாளரை தொடர்பு கொள்ளவும்', desc: 'அருகிலுள்ள தமிழ்நாடு தொழிலாளர் துறை அலுவலகத்திற்கு செல்லவும் அல்லது உதவி எண்ணில் அழைக்கவும்.' },
                                { step: '3', title: 'Shramik Suvidha / CPGRAMS இல் புகார் அளிக்கவும்', desc: 'ஆய்வாளர் 30 நாட்களுக்குள் நடவடிக்கை எடுக்கவில்லை என்றால் ஆன்லைனில் புகார் அளிக்கவும்.' },
                                { step: '4', title: 'தொழிலாளர் நீதிமன்றத்தை அணுகவும்', desc: '₹1,000 க்கும் அதிகமான ஊதியம் நிலுவையில் இருந்தால் தமிழ்நாடு தொழிலாளர் நீதிமன்றத்தில் நேரடியாக வழக்கு தாக்கல் செய்யலாம்.' },
                            ]).map(item => (
                                <li key={item.step} className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm flex items-center justify-center">
                                        {item.step}
                                    </span>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-gray-100">{item.title}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* ── OFFICIAL LINKS ── */}
                    <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-12">
                        <div className="flex items-center gap-2 mb-4">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <h3 className="font-bold text-green-800 dark:text-green-300">
                                {lang === 'en' ? 'Official Sources to Verify Wages' : 'ஊதியத்தை சரிபார்க்க அதிகாரப்பூர்வ ஆதாரங்கள்'}
                            </h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {[
                                { label: 'Tamil Nadu Labour Dept', url: 'https://labour.tn.gov.in/' },
                                { label: 'Minimum Wages Notification (Central)', url: 'https://labour.gov.in/sites/default/files/Minimu_Wages.pdf' },
                                { label: 'Shramik Suvidha Grievance Portal', url: 'https://shramiksuvidhaportal.gov.in' },
                                { label: 'CPGRAMS (Online Complaint)', url: 'https://pgportal.gov.in' },
                            ].map(link => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-white dark:bg-gray-950 px-4 py-3 rounded-xl border border-green-100 dark:border-green-900 text-sm font-medium text-green-700 dark:text-green-400 hover:border-green-400 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Back to TN Hub ── */}
                    <div className="text-center">
                        <a
                            href="/tamil-nadu"
                            className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg"
                        >
                            {lang === 'en' ? '← Back to Tamil Nadu Hub' : '← தமிழ்நாடு ஹப்க்கு திரும்பு'}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
