import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Calendar, Moon, AlertTriangle, ShieldCheck, FileText } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import ContentSection from '../components/ContentSection';
import LawCard from '../components/LawCard';
import InternalLinks from '../components/InternalLinks';
import { getStateBySlug, getAllStates } from '../data/stateLawsData';

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
        "headline": `${stateData.name} Shops and Establishments Act Rules`,
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
            {/* We must inject dynamic meta tags specifically for this page since it's dynamic */}
            <Helmet>
                <title>{stateData.name} Labour Laws & S&E Act Rules | RST Technologies</title>
                <meta name="description" content={stateData.description} />
                <meta property="og:title" content={`${stateData.name} Labour Laws & S&E Act Rules`} />
                <meta property="og:description" content={stateData.description} />
            </Helmet>

            <PageHero
                title={`${stateData.name} Labour Laws`}
                subtitle={`Employee rights under the ${stateData.actName}`}
                icon={MapPin}
                gradient="blue"
            />
            <div className="py-12 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'State Labour Laws', path: '/state-labour-laws' },
                        { label: stateData.name, path: `/state-labour-laws/${stateSlug}` }
                    ]} />

                    <ContentSection title="Key Regulations" icon={ShieldCheck}>
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

                        <div className="mt-8 bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-blue-600" />
                                Mandatory National & Festival Holidays
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {stateData.nationalHolidays}
                            </p>
                            <p className="text-sm text-gray-500 mt-4 italic">
                                Note: If an employee is required to work on a mandatory national holiday, the employer must provide compensatory time off or pay double wages (2x) for that day as per the Act.
                            </p>
                        </div>
                    </ContentSection>

                    <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-8 shadow-soft">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Does this apply to IT/Software Companies?</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
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
