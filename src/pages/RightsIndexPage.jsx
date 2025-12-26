import { Link } from 'react-router-dom';
import { rightsCategories } from '../data/rightsData';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function RightsIndexPage() {
    return (
        <div className="py-12 px-4 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center gap-3 mb-4">
                        <ShieldCheck className="w-10 h-10 text-primary" />
                        <h1 className="text-3xl md:text-4xl font-extrabold">Your Statutory Rights</h1>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A comprehensive guide to employee rights under Indian labour law. Click on any category to learn what you're entitled to—and what is illegal.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rightsCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <Link
                                key={category.id}
                                to={`/rights/${category.id}`}
                                className="card card-hover p-6 group"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold mb-1 text-gray-900 group-hover:text-primary transition-colors">
                                            {category.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                    {category.summary}
                                </p>
                                <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 shadow-soft text-center">
                    <h2 className="text-2xl font-bold mb-4">One-Line Summary</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Indian labour law guarantees <strong>minimum wages</strong>, <strong>timely payment</strong>, <strong>statutory bonuses</strong>, <strong>maternity protection</strong>, <strong>workplace safety</strong>, and <strong>fair exit settlements</strong>—violations can be reported to the Labour Commissioner.
                    </p>
                </div>

                <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl text-center">
                    <p className="text-sm text-yellow-800">
                        <strong>Disclaimer:</strong> This content is for educational awareness only and does not constitute legal advice.
                        Laws may vary by state and are subject to change. For specific situations, consult a qualified labour law professional.
                    </p>
                </div>
            </div>
        </div>
    );
}
