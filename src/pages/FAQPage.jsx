import { useState, useMemo } from 'react';
import { HelpCircle, Search, Clock, UserX, Bell, Calculator, AlertCircle, FileCheck, FileText, Mail, Award } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import { allFaqs, faqCategories } from '../data/faqData';

const iconMap = { Clock, UserX, Bell, Calculator, AlertCircle, FileCheck, FileText, Mail, Award };

const relatedLinks = [
    { title: 'Letter Templates', subtitle: 'Ready-to-use letter templates', path: '/templates' },
    { title: 'Termination Rights', subtitle: 'Termination and notice period', path: '/termination/after-confirmation' },
    { title: 'Full & Final Settlement', subtitle: 'F&F dues guide', path: '/full-final-settlement' },
    { title: 'Gratuity Rights', subtitle: 'Eligibility and calculation', path: '/gratuity' },
];

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [search, setSearch] = useState('');

    const searchResults = useMemo(() => {
        if (!search) return null;
        const q = search.toLowerCase();
        const results = [];
        Object.entries(allFaqs).forEach(([catId, faqs]) => {
            faqs.forEach(faq => {
                if (faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q)) {
                    results.push({ ...faq, catId });
                }
            });
        });
        return results;
    }, [search]);

    const activeFaqs = activeCategory === 'all' ? null : allFaqs[activeCategory];

    const totalCount = Object.values(allFaqs).reduce((sum, arr) => sum + arr.length, 0);

    // Generate Schema for top 20 FAQs
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": Object.values(allFaqs)
            .flat()
            .slice(0, 20)
            .map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
    };

    return (
        <div>
            <SEOHead path="/faq" schema={schemaData} />
            <PageHero
                title="Employee Rights FAQ"
                subtitle={`${totalCount}+ answered questions on termination, salary, gratuity, F&F, notice period, and more.`}
                icon={HelpCircle}
                gradient="purple"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'FAQ', path: '/faq' }]} />

                    {/* Search */}
                    <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft p-6 mb-8">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search all FAQ questions..."
                                value={search}
                                onChange={e => { setSearch(e.target.value); setActiveCategory('all'); }}
                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 dark:border-gray-800 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none text-lg"
                            />
                        </div>
                        {search && searchResults && (
                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found for "{search}"</p>
                        )}
                    </div>

                    {/* Search Results */}
                    {search && searchResults && (
                        <FAQSection faqs={searchResults} title={`Search Results (${searchResults.length})`} schemaEnabled={false} />
                    )}

                    {/* Category Tabs */}
                    {!search && (
                        <>
                            <div className="flex gap-2 flex-wrap mb-8">
                                <button
                                    onClick={() => setActiveCategory('all')}
                                    className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${activeCategory === 'all' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:bg-gray-900'}`}
                                >
                                    All Topics
                                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === 'all' ? 'bg-white dark:bg-gray-950/20 text-white' : 'bg-gray-100 text-gray-500 dark:text-gray-400'}`}>{totalCount}</span>
                                </button>
                                {faqCategories.map(cat => {
                                    const IconComp = iconMap[cat.iconName];
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => setActiveCategory(cat.id)}
                                            className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${activeCategory === cat.id ? 'bg-primary text-white' : 'bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:bg-gray-900'}`}
                                        >
                                            {IconComp && <IconComp className="w-4 h-4" />}
                                            {cat.label}
                                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === cat.id ? 'bg-white dark:bg-gray-950/20 text-white' : 'bg-gray-100 text-gray-500 dark:text-gray-400'}`}>{allFaqs[cat.id]?.length || 0}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* All Categories View */}
                            {activeCategory === 'all' && (
                                <div className="space-y-12">
                                    {faqCategories.map(cat => (
                                        <div key={cat.id}>
                                            <FAQSection faqs={allFaqs[cat.id] || []} title={cat.label} schemaEnabled={false} />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Single Category View */}
                            {activeCategory !== 'all' && activeFaqs && (
                                <FAQSection faqs={activeFaqs} title={faqCategories.find(c => c.id === activeCategory)?.label} schemaEnabled={true} />
                            )}
                        </>
                    )}

                    <InternalLinks currentPath="/faq" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
