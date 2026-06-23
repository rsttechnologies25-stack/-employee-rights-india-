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
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-medium backdrop-blur-md">
                            <MapPin className="w-4 h-4" />
                            Tamil Nadu Mega-Hub
                        </div>
                        
                        <button 
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 bg-white text-indigo-900 px-5 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
                        >
                            <Globe className="w-5 h-5" />
                            {tnHubData.hero[lang === 'en' ? 'ta' : 'en'].toggleLabel}
                        </button>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        {t(tnHubData.hero).title}
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                        {t(tnHubData.hero).subtitle}
                    </p>
                </div>
            </div>

            <div className="py-12 px-4 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumb items={[{ label: 'Tamil Nadu Hub', path: '/tamil-nadu' }]} />

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-8 border-b pb-4">
                        {lang === 'en' ? 'Sector-Specific Rules' : 'துறை சார்ந்த விதிகள்'}
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {tnHubData.sectors.map(sector => {
                            const Icon = iconMap[sector.icon];
                            const content = t(sector);
                            
                            const colorStyles = {
                                blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100' },
                                gray: { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' },
                                orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-100' },
                                yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-100' },
                            };
                            const style = colorStyles[sector.color];

                            return (
                                <Link 
                                    key={sector.id}
                                    to={`/tamil-nadu/${sector.id}`}
                                    className={`bg-white rounded-2xl p-6 md:p-8 border ${style.border} shadow-soft hover:shadow-lg transition-all group block`}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`p-4 rounded-xl ${style.bg} ${style.text}`}>
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                                {content.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm">{content.description}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                            <span className="text-xs font-bold uppercase text-gray-400 block mb-1">
                                                {lang === 'en' ? 'Working Hours' : 'வேலை நேரம்'}
                                            </span>
                                            <p className="text-gray-800 text-sm">{content.content.workingHours}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                            <span className="text-xs font-bold uppercase text-gray-400 block mb-1">
                                                {lang === 'en' ? 'Leave Policy' : 'விடுமுறை விதிகள்'}
                                            </span>
                                            <p className="text-gray-800 text-sm">{content.content.leaves}</p>
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

                    <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8 border-b pb-4">
                        {lang === 'en' ? 'Key Benefits & Rights' : 'முக்கிய சலுகைகள் மற்றும் உரிமைகள்'}
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {tnHubData.benefits.map(benefit => {
                            const Icon = iconMap[benefit.icon];
                            const content = t(benefit);
                            return (
                                <div key={benefit.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft">
                                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{content.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{content.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
