import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function InternalLinks({ title = "Related Topics", links, currentPath }) {
    const filteredLinks = links.filter(link => link.path !== currentPath);

    if (filteredLinks.length === 0) return null;

    return (
        <section className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredLinks.map((link, idx) => (
                    <Link
                        key={idx}
                        to={link.path}
                        className="flex items-center justify-between p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
                    >
                        <div className="flex items-center gap-3 min-w-0">
                            {link.icon && <link.icon className="w-5 h-5 text-primary shrink-0" />}
                            <div className="min-w-0">
                                <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors text-sm truncate">
                                    {link.title}
                                </p>
                                {link.subtitle && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{link.subtitle}</p>
                                )}
                            </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                    </Link>
                ))}
            </div>
        </section>
    );
}
