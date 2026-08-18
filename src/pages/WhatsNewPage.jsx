import React from 'react';
import { useState } from 'react';
import * as HelmetModule from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Helmet = HelmetModule.Helmet || (HelmetModule.default && HelmetModule.default.Helmet) || HelmetModule.default;
import { Zap, ArrowRight, ExternalLink, Filter, Calendar, TrendingUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { latestUpdates, updateCategories } from '../data/whatsNewData';

export default function WhatsNewPage() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filtered = activeCategory === 'all'
        ? latestUpdates
        : latestUpdates.filter(u => u.category === activeCategory);

    return (
        <div>
            <SEOHead path="/whats-new" />
            <Helmet>
                <title>New Labour Laws 2025-2026 India — What Changed | EmployeeRightsIndia.in</title>
                <meta name="description" content="All latest Indian labour law updates 2025-2026 — Budget 2025 tax exemption ₹12L, PF interest 8.25%, 4 Labour Codes status, gig worker rights, POSH digital updates, maternity rights and more." />
            </Helmet>

            <PageHero
                title="New & Updated Laws 2025–2026"
                subtitle="Stay informed on every labour law change that affects your salary, benefits, and rights"
                icon={Zap}
                gradient="indigo"
            />

            <div className="py-10 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: "What's New 2025–2026", path: '/whats-new' }]} />

                    {/* Summary banner */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { emoji: '🔥', count: '12', label: 'Updates Tracked' },
                            { emoji: '⏳', count: '4', label: 'Labour Codes Pending' },
                            { emoji: '💰', count: '₹12L', label: 'New Tax Exemption' },
                            { emoji: '📈', count: '8.25%', label: 'PF Interest Rate' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 p-4 text-center shadow-soft">
                                <div className="text-2xl mb-1">{s.emoji}</div>
                                <div className="text-xl font-black text-gray-900 dark:text-gray-100">{s.count}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Category filter */}
                    <div className="mt-8 flex gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mr-1">
                            <Filter className="w-4 h-4" /> Filter:
                        </div>
                        {updateCategories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all ${
                                    activeCategory === cat.id
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Updates list */}
                    <div className="mt-6 space-y-5">
                        {filtered.map((update) => (
                            <div key={update.id}
                                className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft overflow-hidden hover:shadow-md transition-shadow">

                                {/* Card header */}
                                <div className="p-5 pb-0">
                                    <div className="flex items-start gap-3 flex-wrap">
                                        <span className="text-2xl flex-shrink-0 mt-0.5">{update.icon}</span>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${update.badgeColor}`}>
                                                    {update.badge}
                                                </span>
                                                <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                                                    {update.category}
                                                </span>
                                                <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" /> {update.effectiveDate}
                                                </span>
                                            </div>
                                            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 leading-snug">
                                                {update.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {update.summary}
                                    </p>
                                </div>

                                {/* Detail bullets */}
                                <div className="px-5 pt-3 pb-4">
                                    <ul className="space-y-1.5">
                                        {update.details.map((d, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                <span className="text-indigo-400 flex-shrink-0 mt-0.5">•</span>
                                                <span>{d}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                {update.link && (
                                    <div className="border-t border-gray-50 dark:border-gray-800 px-5 py-3 bg-gray-50/50 dark:bg-gray-900/50">
                                        <Link
                                            to={update.link}
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-2.5 transition-all"
                                        >
                                            {update.linkLabel}
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-8 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700 rounded-xl p-4">
                        <p className="text-sm text-amber-700 dark:text-amber-400">
                            <strong>⚠️ Disclaimer:</strong> This page provides general awareness about labour law changes. For state-specific implementation dates, visit your state's official Labour Department website. Consult a qualified labour lawyer for advice on your specific situation.
                        </p>
                    </div>

                    {/* Official resources */}
                    <div className="mt-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 shadow-soft">
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-green-600" />
                            Official Sources to Track Updates
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            {[
                                { name: 'Ministry of Labour & Employment', url: 'https://labour.gov.in' },
                                { name: 'EPFO Official Portal', url: 'https://www.epfindia.gov.in' },
                                { name: 'ESIC Official Portal', url: 'https://www.esic.gov.in' },
                                { name: 'e-Shram Portal', url: 'https://eshram.gov.in' },
                                { name: 'Shramik Suvidha (Complaint Portal)', url: 'https://shramiksuvidhaportal.gov.in' },
                                { name: 'Income Tax India', url: 'https://incometax.gov.in' },
                            ].map((r, i) => (
                                <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                                    {r.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
