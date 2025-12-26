import { Link, useParams } from 'react-router-dom';
import { rightsCategories } from '../data/rightsData';
import { ArrowLeft, CheckCircle2, Ban, Info, ExternalLink } from 'lucide-react';

export default function RightsDetailPage() {
    const { categoryId } = useParams();
    const category = rightsCategories.find(c => c.id === categoryId);

    if (!category) {
        return (
            <div className="py-20 px-4 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
                <Link to="/rights" className="text-primary hover:underline">← Back to All Rights</Link>
            </div>
        );
    }

    const Icon = category.icon;

    return (
        <div className="py-12 px-4 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <Link to="/rights" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm font-medium">
                    <ArrowLeft className="w-4 h-4" /> Back to All Rights
                </Link>

                <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-8">
                    <div className="bg-primary p-8 text-white">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white/10 rounded-xl">
                                <Icon className="w-8 h-8" />
                            </div>
                            <h1 className="text-3xl font-extrabold">{category.title}</h1>
                        </div>
                        <p className="text-blue-100 text-lg">{category.summary}</p>
                    </div>

                    <div className="p-8 space-y-10">
                        {/* Entitlements */}
                        <section>
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                                <CheckCircle2 className="w-6 h-6 text-success" />
                                Your Entitlements
                            </h2>
                            <ul className="space-y-4">
                                {category.entitlements.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 p-4 bg-success/5 rounded-xl border border-success/10">
                                        <span className="w-6 h-6 bg-success text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">{idx + 1}</span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Prohibitions */}
                        <section>
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-danger">
                                <Ban className="w-6 h-6" />
                                What is Illegal
                            </h2>
                            <ul className="space-y-4">
                                {category.prohibitions.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 p-4 bg-danger/5 rounded-xl border border-danger/10 text-gray-700">
                                        <span className="text-danger shrink-0">{item.slice(0, 2)}</span>
                                        <span>{item.slice(3)}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Why It Matters */}
                        <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                            <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-primary">
                                <Info className="w-5 h-5" />
                                Why This Matters
                            </h2>
                            <p className="text-gray-600 leading-relaxed">{category.whyItMatters}</p>
                        </section>
                    </div>
                </div>

                <div className="bg-gray-900 text-white p-6 rounded-xl text-center text-sm">
                    <p className="mb-2 font-bold">Need to file a complaint?</p>
                    <a href="https://labour.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
                        Visit Ministry of Labour Portal <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </div>
    );
}
