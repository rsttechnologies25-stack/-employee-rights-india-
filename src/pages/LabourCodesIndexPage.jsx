import { BookOpen, AlertCircle, ArrowRight, HandCoins, ShieldPlus, Users, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';

export default function LabourCodesIndexPage() {
    const codes = [
        {
            title: "Code on Wages",
            slug: "wage-code",
            icon: HandCoins,
            description: "The new 50% Basic Salary rule, impacts on take-home pay, and the national floor wage.",
            color: "blue"
        },
        {
            title: "Code on Social Security",
            slug: "social-security-code",
            icon: ShieldPlus,
            description: "EPF and ESI benefits extended to gig workers, freelancers, and unorganized sector.",
            color: "indigo"
        },
        {
            title: "Occupational Safety (OSH) Code",
            slug: "osh-code",
            icon: Stethoscope,
            description: "The highly-debated 4-day workweek rule, mandatory free health checkups, and women's night shift regulations.",
            color: "green"
        },
        {
            title: "Industrial Relations Code",
            slug: "ir-code",
            icon: Users,
            description: "New rules for firing and layoffs. Companies up to 300 employees won't need government permission to fire.",
            color: "red"
        }
    ];

    return (
        <div>
            <SEOHead 
                path="/new-labour-codes" 
                schema={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "The 4 New Labour Codes in India (2025/2026)",
                    "description": "Comprehensive guide to the 4 New Labour Codes in India: Wage Code, Social Security, OSH Code, and Industrial Relations Code."
                }}
            />
            <PageHero
                title="The 4 New Labour Codes"
                subtitle="India is replacing 29 old labour laws with 4 new, modernized codes. Understand how this massive change impacts your salary, leaves, and job security."
                icon={BookOpen}
                gradient="blue"
            />
            <div className="py-12 px-4 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumb items={[{ label: 'New Labour Codes', path: '/new-labour-codes' }]} />

                    <div className="mt-8 mb-12 bg-white p-6 md:p-8 rounded-2xl border border-blue-100 shadow-soft">
                        <div className="flex gap-4">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0 h-fit">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2">When will the New Labour Codes be implemented?</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    The codes have been passed by the Parliament and received the President's assent. However, labour is a concurrent subject in India, meaning both the Central and State governments must frame rules. Most major states have already finalized their draft rules, and implementation is widely expected in the near future. <strong>All companies and HR departments are actively restructuring salaries to prepare for this.</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {codes.map((code) => {
                            const Icon = code.icon;
                            
                            const colorStyles = {
                                blue: { bg: 'bg-blue-50', text: 'text-blue-700', iconBg: 'bg-blue-100', hoverBg: 'group-hover:bg-blue-600', link: 'text-blue-600 group-hover:text-blue-700' },
                                indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', iconBg: 'bg-indigo-100', hoverBg: 'group-hover:bg-indigo-600', link: 'text-indigo-600 group-hover:text-indigo-700' },
                                green: { bg: 'bg-green-50', text: 'text-green-700', iconBg: 'bg-green-100', hoverBg: 'group-hover:bg-green-600', link: 'text-green-600 group-hover:text-green-700' },
                                red: { bg: 'bg-red-50', text: 'text-red-700', iconBg: 'bg-red-100', hoverBg: 'group-hover:bg-red-600', link: 'text-red-600 group-hover:text-red-700' },
                            };
                            const style = colorStyles[code.color];

                            return (
                                <Link 
                                    key={code.slug} 
                                    to={`/new-labour-codes/${code.slug}`}
                                    className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-soft hover:shadow-md hover:border-blue-200 transition-all block relative overflow-hidden"
                                >
                                    <div className={`absolute top-0 right-0 w-24 h-24 ${style.bg} rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform`}></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`p-2.5 ${style.iconBg} ${style.text} rounded-lg ${style.hoverBg} group-hover:text-white transition-colors`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">{code.title}</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                            {code.description}
                                        </p>
                                        <div className={`flex items-center font-medium text-sm ${style.link}`}>
                                            Read the Code Rules 
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
