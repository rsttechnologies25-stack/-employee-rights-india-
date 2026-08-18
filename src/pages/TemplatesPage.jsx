import React from 'react';
import { useState, useMemo } from 'react';
import { FileText, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import InternalLinks from '../components/InternalLinks';
import TemplateCard from '../components/TemplateCard';
import { templates } from '../data/templatesData';

const categories = [
    { id: 'all', label: 'All Templates' },
    { id: 'resignation', label: 'Resignation' },
    { id: 'request', label: 'Request' },
    { id: 'complaint', label: 'Complaint' },
    { id: 'legal', label: 'Legal' },
];

const relatedLinks = [
    { title: 'Experience Letter Rights', subtitle: 'Know your rights before requesting', path: '/experience-letter' },
    { title: 'Relieving Letter Rights', subtitle: 'Employer obligations', path: '/relieving-letter' },
    { title: 'Delayed Salary Recovery', subtitle: 'Step-by-step complaint guide', path: '/delayed-salary' },
    { title: 'Full & Final Settlement', subtitle: 'Your exit dues', path: '/full-final-settlement' },
];

export default function TemplatesPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [search, setSearch] = useState('');

    const filtered = useMemo(() => templates.filter(t => {
        const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
        const matchesSearch = !search || t.title.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    }), [activeCategory, search]);

    return (
        <div>
            <SEOHead path="/templates" />
            <PageHero
                title="Letter Templates"
                subtitle="Ready-to-use, legally informed letter templates for Indian employees. Copy to clipboard or download as .txt."
                icon={FileText}
                gradient="accent"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <Breadcrumb items={[{ label: 'Templates', path: '/templates' }]} />

                    {/* Search + Filter */}
                    <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft p-6 mb-8">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search templates..."
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-100 dark:border-gray-800 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none"
                                />
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${activeCategory === cat.id ? 'bg-primary text-white shadow-soft' : 'bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100'}`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {filtered.length === 0 ? (
                        <div className="text-center py-16">
                            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 dark:text-gray-400 font-medium">No templates found for your search.</p>
                        </div>
                    ) : (
                        <>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Showing {filtered.length} template{filtered.length !== 1 ? 's' : ''}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filtered.map(template => (
                                    <TemplateCard key={template.id} template={template} />
                                ))}
                            </div>
                        </>
                    )}

                    <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">How to Use These Templates</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                            {[
                                { step: '1', title: 'Preview', desc: 'Click Preview to read the full template before using it.' },
                                { step: '2', title: 'Customize', desc: 'Copy and replace all [ ] placeholders with your actual information.' },
                                { step: '3', title: 'Send', desc: 'Send via email with a professional subject line. Keep a copy for your records.' },
                            ].map(s => (
                                <div key={s.step} className="flex gap-3 p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800">
                                    <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{s.step}</span>
                                    <div><p className="font-bold text-sm">{s.title}</p><p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.desc}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-800">
                        <strong>Disclaimer:</strong> These templates are for educational purposes only. Customize them based on your specific situation. For complex legal disputes, consult a qualified labour law advocate.
                    </div>

                    <InternalLinks currentPath="/templates" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
