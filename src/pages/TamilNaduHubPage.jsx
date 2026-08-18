import { useState } from 'react';
import { MapPin, Globe, ArrowRight, Laptop, Factory, Store, HardHat, Baby, CalendarDays, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { tnHubData } from '../data/tamilNaduMegaData';

const iconMap = {
    Laptop, Factory, Store, HardHat, Baby, CalendarDays, Banknote
};

export default function TamilNaduHubPage() {
    const [lang, setLang] = useState('en');

    const toggleLanguage = () => {
        setLang(prev => prev === 'en' ? 'ta' : 'en');
    };

    const t = (item) => item[lang];

    return (
        <div>
            <SEOHead 
                path="/tamil-nadu" 
                schema={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Tamil Nadu Labour Laws & Employee Rights",
                    "description": "The ultimate bilingual guide to Employee Rights and Labour Laws in Tamil Nadu across all sectors (IT, Manufacturing, Shops)."
                }}
            />
            
            <div className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white pb-16 pt-12 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white dark:bg-gray-950/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-950/10 border border-white/20 text-blue-100 text-sm font-medium backdrop-blur-md">
                            <MapPin className="w-4 h-4" />
                            Tamil Nadu Mega-Hub
                        </div>
                        
                        <button 
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 bg-white dark:bg-gray-950 text-indigo-900 px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
                        >
                            <Globe className="w-5 h-5" />
                            {tnHubData.hero[lang === 'en' ? 'ta' : 'en'].toggleLabel}
                        </button>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
                        {t(tnHubData.hero).title}
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                        {t(tnHubData.hero).subtitle}
                    </p>
                </div>
            </div>

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumb items={[{ label: 'Tamil Nadu Hub', path: '/tamil-nadu' }]} />

                    {/* ── Minimum Wages Highlight Banner ── */}
                    <Link
                        to="/tamil-nadu-minimum-wages"
                        className="mt-10 flex items-center gap-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-5 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all group block"
                    >
                        <div className="p-3 bg-white/20 rounded-xl flex-shrink-0">
                            <Banknote className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-lg leading-snug">
                                {lang === 'en' ? '📊 Tamil Nadu Minimum Wages 2025 — Sector-Wise Table' : '📊 தமிழ்நாடு குறைந்தபட்ச ஊதியம் 2025 — துறை வாரிய அட்டவணை'}
                            </p>
                            <p className="text-green-100 text-sm mt-0.5">
                                {lang === 'en'
                                    ? 'IT, Shops, Factories, Construction — official rates with your complaint rights'
                                    : 'IT, கடைகள், தொழிற்சாலைகள், கட்டுமானம் — அதிகாரப்பூர்வ விகிதங்கள் மற்றும் புகார் உரிமைகள்'}
                            </p>
                        </div>
                        <ArrowRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-8 border-b pb-4">
                        {lang === 'en' ? 'Sector-Specific Rules' : 'துறை சார்ந்த விதிகள்'}
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {tnHubData.sectors.map(sector => {
                            const Icon = iconMap[sector.icon];
                            const content = t(sector);
                            
                            const colorStyles = {
                                blue: { bg: 'bg-blue-50 dark:bg-blue-950/40', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-100 dark:border-blue-900/40' },
                                gray: { bg: 'bg-gray-50 dark:bg-gray-900', text: 'text-gray-700 dark:text-gray-300', border: 'border-gray-200 dark:border-gray-700' },
                                orange: { bg: 'bg-orange-50 dark:bg-orange-950/40', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-100 dark:border-orange-900/40' },
                                yellow: { bg: 'bg-yellow-50 dark:bg-yellow-950/40', text: 'text-yellow-700 dark:text-yellow-300', border: 'border-yellow-100 dark:border-yellow-900/40' },
                            };
                            const style = colorStyles[sector.color] || colorStyles.gray;

                            return (
                                <Link 
                                    key={sector.id}
                                    to={`/tamil-nadu/${sector.id}`}
                                    className={`bg-white dark:bg-gray-950 rounded-2xl p-6 md:p-8 border ${style.border} shadow-soft hover:shadow-lg transition-all group block`}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`p-4 rounded-xl ${style.bg} ${style.text}`}>
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {content.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">{content.description}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                            <span className="text-xs font-bold uppercase text-gray-600 dark:text-gray-400 block mb-1">
                                                {lang === 'en' ? 'Working Hours' : 'வேலை நேரம்'}
                                            </span>
                                            <p className="text-gray-900 dark:text-gray-100 text-sm font-medium">{content.content.workingHours}</p>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                            <span className="text-xs font-bold uppercase text-gray-600 dark:text-gray-400 block mb-1">
                                                {lang === 'en' ? 'Leave Policy' : 'விடுமுறை விதிகள்'}
                                            </span>
                                            <p className="text-gray-900 dark:text-gray-100 text-sm font-medium">{content.content.leaves}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex items-center justify-end text-blue-600 font-bold text-sm">
                                        {lang === 'en' ? 'Read Full Details' : 'முழு விவரங்களைப் படிக்க'} 
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-16 mb-8 border-b pb-4">
                        {lang === 'en' ? 'Key Benefits & Rights' : 'முக்கிய சலுகைகள் மற்றும் உரிமைகள்'}
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {tnHubData.benefits.map(benefit => {
                            const Icon = iconMap[benefit.icon];
                            const content = t(benefit);
                            return (
                                <div key={benefit.id} className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft">
                                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">{content.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{content.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
