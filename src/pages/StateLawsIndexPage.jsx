import React from 'react';
import { MapPin, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { getAllStates } from '../data/stateLawsData';

export default function StateLawsIndexPage() {
    const states = getAllStates();

    return (
        <div>
            <SEOHead 
                path="/state-labour-laws" 
                schema={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "State-Wise Labour Laws in India",
                    "description": "Comprehensive guide to Shops and Establishments Acts for Indian states including working hours, leaves, and termination rules."
                }}
            />
            <PageHero
                title="State-Wise Labour Laws"
                subtitle="Know your rights under the specific Shops and Establishments Act of your state. Choose your location below."
                icon={MapPin}
                gradient="blue"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumb items={[{ label: 'State Labour Laws', path: '/state-labour-laws' }]} />

                    <div className="mt-8 mb-12 bg-white dark:bg-gray-950 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-soft">
                        <div className="flex gap-4">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0 h-fit">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">What is the Shops and Establishments Act?</h2>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Unlike Central Labour Laws (like PF or Gratuity) which apply uniformly across India, rules regarding <strong>working hours, leaves, night shifts, and notice periods</strong> are governed by state-specific "Shops and Commercial Establishments Acts". This means an IT employee in Karnataka has slightly different statutory leave and working hour rights compared to an employee in Maharashtra.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {states.map((state) => (
                            <Link 
                                key={state.slug} 
                                to={`/state-labour-laws/${state.slug}`}
                                className="group bg-white dark:bg-gray-950 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-soft hover:shadow-md hover:border-blue-200 transition-all block relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2.5 bg-blue-100 text-blue-700 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{state.name}</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                                        {state.description}
                                    </p>
                                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                                        Read {state.name} Laws 
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
