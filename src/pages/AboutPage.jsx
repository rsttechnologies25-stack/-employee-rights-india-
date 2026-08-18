import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { ShieldCheck, BookOpen, Users, Building, Scale, Heart, Lock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <div>
            <SEOHead 
                path="/about"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "About Employee Rights India",
                    "description": "Learn about the mission, research methodology, and team behind Employee Rights India — operated by RexonSoftTech.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "RexonSoftTech",
                        "url": "https://www.rexonsofttech.in"
                    }
                }}
            />

            <PageHero 
                title="About Employee Rights India"
                subtitle="Democratizing Indian labour law awareness. We help working professionals, factory employees, and gig workers understand their statutory rights in plain, accessible language."
                icon={Building}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-10">
                    <Breadcrumb items={[{ label: 'About Us', path: '/about' }]} />

                    {/* Mission Section */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                <Scale className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">Our Purpose & Mission</h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-base">
                            India has a comprehensive framework of labour legislation — from the <em>Payment of Wages Act (1936)</em> and <em>Industrial Disputes Act (1947)</em> to the <em>Payment of Gratuity Act (1972)</em> and the new <em>Labour Codes</em>. However, the vast majority of employees in startups, IT hubs, retail establishments, and factories remain unaware of their basic statutory protections.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                            <strong>Employee Rights India</strong> was established as a public-service educational initiative by <strong>RexonSoftTech (RST Technologies)</strong> to translate complex legal gazettes and court precedents into simple, step-by-step guidance, interactive calculation tools, and procedural filing resources.
                        </p>
                    </div>

                    {/* Core Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft">
                            <Lock className="w-10 h-10 text-primary mb-3" />
                            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">100% Privacy-First</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Zero logins, zero server databases for personal data. All calculations and letter generation happen in local browser memory.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft">
                            <BookOpen className="w-10 h-10 text-primary mb-3" />
                            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">Citation-Backed</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Every article links to authentic legislative sections, Supreme Court precedents, and official Central/State government portals.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft">
                            <Users className="w-10 h-10 text-primary mb-3" />
                            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">Empowering Action</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Beyond mere articles, we build actionable tools: Authority Finders, Grievance Drafters, and Overtime Trackers.
                            </p>
                        </div>
                    </div>

                    {/* Publisher & Governance */}
                    <div className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white p-8 rounded-3xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Building className="w-6 h-6 text-blue-300" />
                            Operated by RexonSoftTech
                        </h2>
                        <p className="text-blue-100 leading-relaxed text-sm mb-6">
                            RexonSoftTech is a software technology organization headquartered in Tamil Nadu, India, specializing in web architecture, digital platforms, and enterprise software solutions. We maintain Employee Rights India as a free public knowledge repository.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link 
                                to="/editorial-policy" 
                                className="bg-white text-indigo-900 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                            >
                                Read Editorial Policy
                            </Link>
                            <Link 
                                to="/disclaimer" 
                                className="bg-white/10 border border-white/20 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-white/20 transition-colors text-sm"
                            >
                                Legal Disclaimer
                            </Link>
                            <Link 
                                to="/contact" 
                                className="bg-white/10 border border-white/20 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-white/20 transition-colors text-sm"
                            >
                                Contact Editorial Team
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
