import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home } from 'lucide-react';

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
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mb-8 flex-wrap">
                <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    <span className="hidden sm:inline">Home</span>
                </Link>
                {items.map((item, idx) => (
                    <span key={idx} className="flex items-center gap-1.5">
                        <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                        {idx === items.length - 1 ? (
                            <span className="text-gray-900 dark:text-gray-100 font-medium truncate max-w-[200px] sm:max-w-none">{item.label}</span>
                        ) : (
                            <Link to={item.path} className="hover:text-primary transition-colors truncate max-w-[150px] sm:max-w-none">
                                {item.label}
                            </Link>
                        )}
                    </span>
                ))}
            </nav>
        </>
    );
}
