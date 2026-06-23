import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection({ faqs, title = "Frequently Asked Questions", schemaEnabled = true }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="mt-12" id="faq">
            {schemaEnabled && (
                <Helmet>
                    <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
                </Helmet>
            )}
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-accent/10 rounded-xl">
                    <HelpCircle className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
                <span className="badge bg-accent/10 text-accent">{faqs.length} Questions</span>
            </div>
            <div className="space-y-3">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className={`bg-white dark:bg-gray-950 rounded-xl border overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-primary/30 shadow-md' : 'border-gray-100 dark:border-gray-800 shadow-soft'}`}
                    >
                        <button
                            onClick={() => toggle(idx)}
                            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:bg-gray-900/50 transition-colors gap-4"
                            aria-expanded={openIndex === idx}
                        >
                            <div className="flex items-start gap-3">
                                <span className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                    {idx + 1}
                                </span>
                                <span className="font-semibold text-gray-900 dark:text-gray-100 text-left">{faq.question}</span>
                            </div>
                            <ChevronDown
                                className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary' : ''}`}
                            />
                        </button>
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden">
                                <div className="px-5 pb-5 pl-[3.75rem] text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-gray-800 pt-4">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
