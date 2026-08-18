import React from 'react';
import { Link } from 'react-router-dom';
import * as HelmetModule from 'react-helmet-async';
import { ChevronRight, Home } from 'lucide-react';

const Helmet = HelmetModule.Helmet || (HelmetModule.default && HelmetModule.default.Helmet) || HelmetModule.default;

export default function Breadcrumb({ items }) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://employee-rights.rexonsofttech.in/"
            },
            ...items.map((item, idx) => ({
                "@type": "ListItem",
                "position": idx + 2,
                "name": item.label,
                "item": `https://employee-rights.rexonsofttech.in${item.path}`
            }))
        ]
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary dark:hover:text-blue-400 transition-colors flex items-center gap-1">
                    <Home className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="hidden sm:inline">Home</span>
                </Link>
                {items.map((item, idx) => (
                    <span key={idx} className="flex items-center gap-1.5">
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 dark:text-gray-600" />
                        {idx === items.length - 1 ? (
                            <span className="text-gray-900 dark:text-gray-100 font-semibold truncate max-w-[200px] sm:max-w-none">{item.label}</span>
                        ) : (
                            <Link to={item.path} className="hover:text-primary dark:hover:text-blue-400 transition-colors truncate max-w-[150px] sm:max-w-none text-gray-600 dark:text-gray-400">
                                {item.label}
                            </Link>
                        )}
                    </span>
                ))}
            </nav>
        </>
    );
}
