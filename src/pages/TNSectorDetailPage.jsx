import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Globe, MapPin, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { tnHubData } from '../data/tamilNaduMegaData';

export default function TNSectorDetailPage() {
    const { sectorId } = useParams();
    const [lang, setLang] = useState('en');

    const sectorData = tnHubData.sectors.find(s => s.id === sectorId);

    if (!sectorData) {
        return <Navigate to="/tamil-nadu" replace />;
    }

    const t = (item) => item[lang];
    const content = t(sectorData);

    const toggleLanguage = () => {
        setLang(prev => prev === 'en' ? 'ta' : 'en');
    };

    return (
        <div>
            <SEOHead 
                path={`/tamil-nadu/${sectorId}`} 
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": content.title,
                    "description": content.description
                }}
            />
            
            <div className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white pb-16 pt-12 px-4 relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <Breadcrumb 
                            items={[
                                { label: lang === 'en' ? 'Tamil Nadu Hub' : 'தமிழ்நாடு மையம்', path: '/tamil-nadu' },
                                { label: content.title, path: `/tamil-nadu/${sectorId}` }
                            ]} 
                            darkMode={true}
                        />
                        
                        <button 
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-xl font-bold hover:bg-white/20 transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            {tnHubData.hero[lang === 'en' ? 'ta' : 'en'].toggleLabel}
                        </button>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{content.title}</h1>
                    <p className="text-xl text-blue-100">{content.description}</p>
                </div>
            </div>

            <div className="py-12 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto space-y-8">
                    
                    {/* Working Hours Card */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-soft">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">
                                {lang === 'en' ? 'Working Hours & Overtime' : 'வேலை நேரம் மற்றும் கூடுதல் நேரம்'}
                            </h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {content.content.workingHours}
                        </p>
                    </div>

                    {/* Leave Policy Card */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-soft">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">
                                {lang === 'en' ? 'Leave Policy & Holidays' : 'விடுமுறை விதிகள்'}
                            </h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {content.content.leaves}
                        </p>
                    </div>

                    {/* Safety / Night Shift / Special Rules Card */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-soft">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">
                                {content.content.nightShift ? 
                                    (lang === 'en' ? 'Women Night Shift Rules' : 'பெண்கள் இரவு பணி விதிகள்') : 
                                 content.content.safety ? 
                                    (lang === 'en' ? 'Workplace Safety Rules' : 'பணியிட பாதுகாப்பு விதிகள்') : 
                                 content.content.rightToSit ? 
                                    (lang === 'en' ? 'Right to Sit Act' : 'அமரும் உரிமை சட்டம்') : 
                                 content.content.wages ? 
                                    (lang === 'en' ? 'Minimum Wages' : 'குறைந்தபட்ச ஊதியம்') : 'Special Rules'}
                            </h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {content.content.nightShift || content.content.safety || content.content.rightToSit || content.content.wages}
                        </p>
                    </div>

                    {/* Termination / Welfare Card */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-soft">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">
                                {content.content.termination ? 
                                    (lang === 'en' ? 'Termination & Layoffs' : 'பணிநீக்கம் விதிகள்') : 
                                 content.content.welfareBoard ? 
                                    (lang === 'en' ? 'Welfare Board Registration' : 'நல வாரிய பதிவு') : 
                                 content.content.accommodation ? 
                                    (lang === 'en' ? 'Migrant Accommodation' : 'புலம்பெயர்ந்தோர் தங்குமிடம்') : 'Rules'}
                            </h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {content.content.termination || content.content.welfareBoard || content.content.accommodation}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
