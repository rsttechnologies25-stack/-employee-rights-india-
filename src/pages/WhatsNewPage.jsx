import React, { useState } from 'react';
import * as HelmetModule from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, ExternalLink, Filter, Calendar, TrendingUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { latestUpdates } from '../data/whatsNewData';

const Helmet = HelmetModule.Helmet || (HelmetModule.default && HelmetModule.default.Helmet) || HelmetModule.default;

const filterCategories = [
    { id: 'all', label: 'All Updates' },
    { id: 'Labour Laws', label: '⚖️ Labour Laws' },
    { id: 'Salary', label: '💰 Salary & Tax' },
    { id: 'PF/ESI', label: '🏦 PF / ESI' },
    { id: 'Minimum Wages', label: '💵 Minimum Wages' },
    { id: 'State Updates', label: '🗺️ State Updates' },
    { id: 'Government', label: '🏢 Government' },
    { id: 'Court Decisions', label: '🏛️ Court Decisions' }
];

export default function WhatsNewPage() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filtered = activeCategory === 'all'
        ? latestUpdates
        : latestUpdates.filter(u => {
            if (activeCategory === 'Labour Laws') return u.category === 'New Labour Codes' || u.category === 'Workplace Rights';
            if (activeCategory === 'Salary') return u.category === 'Tax & Salary';
            if (activeCategory === 'PF/ESI') return u.category === 'PF & ESI';
            if (activeCategory === 'Minimum Wages') return u.category === 'Minimum Wages';
            if (activeCategory === 'State Updates') return u.category === 'Gig & Unorganised';
            if (activeCategory === 'Court Decisions') return u.category === 'Benefits';
            return u.category === activeCategory;
        });

    return (
        <div>
            <SEOHead path="/whats-new" />
            <Helmet>
                <title>Latest Employee Rights Updates 2025-2026 India — What Changed</title>
                <meta name="description" content="All verified Indian labour law updates 2025-2026 — Budget ₹12L tax exemption, PF interest 8.25%, 4 Labour Codes status, gig worker rights, POSH digital updates, and Supreme Court gratuity rulings." />
            </Helmet>

            <PageHero
                title="Latest Employee Rights Updates 2025–2026"
                subtitle="Stay informed on every verified statutory change, EPFO notification, and Supreme Court ruling affecting your salary and workplace rights."
                icon={Zap}
                gradient="indigo"
            />

            <div className="py-10 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: "What's New 2025–2026", path: '/whats-new' }]} />

                    {/* Summary metrics */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { emoji: '🔥', count: '12', label: 'Updates Verified' },
                            { emoji: '⏳', count: '4', label: 'Labour Codes Transition' },
                            { emoji: '💰', count: '₹12L', label: 'Tax Exemption' },
                            { emoji: '📈', count: '8.25%', label: 'PF Interest Rate' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 p-4 text-center shadow-soft">
                                <div className="text-2xl mb-1">{s.emoji}</div>
                                <div className="text-xl font-black text-gray-900 dark:text-gray-100">{s.count}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Category filter tabs */}
                    <div className="mt-8 flex gap-2 flex-wrap items-center">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400 mr-1">
                            <Filter className="w-3.5 h-3.5" /> Filter by Category:
                        </div>
                        {filterCategories.map(cat => (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setActiveCategory(cat.id)}
                                className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all ${
                                    activeCategory === cat.id
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary/40'
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
                                className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft overflow-hidden hover:shadow-md transition-shadow">

                                {/* Card header */}
                                <div className="p-5 pb-0">
                                    <div className="flex items-start gap-3 flex-wrap">
                                        <span className="text-2xl flex-shrink-0 mt-0.5">{update.icon}</span>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${update.badgeColor}`}>
                                                    {update.badge}
                                                </span>
                                                <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full font-medium">
                                                    {update.category}
                                                </span>
                                                <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" /> Verified: {update.effectiveDate}
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
                                            <li key={i} className="flex gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                                <span className="text-primary font-bold flex-shrink-0 mt-0.5">•</span>
                                                <span>{d}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Link */}
                                {update.link && (
                                    <div className="border-t border-gray-100 dark:border-gray-850 px-5 py-3 bg-gray-50/50 dark:bg-gray-900/50 flex items-center justify-between">
                                        <Link
                                            to={update.link}
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:gap-2.5 transition-all"
                                        >
                                            {update.linkLabel}
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                        <span className="text-[10px] text-gray-400">Verified Citation</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Educational Disclaimer */}
                    <div className="mt-8 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700 rounded-2xl p-4 text-xs text-amber-800 dark:text-amber-300">
                        <p>
                            <strong>⚠️ Educational Awareness Only:</strong> This update hub summarizes verified Central and State notifications. State implementation dates and gazette notifications vary by jurisdiction.
                        </p>
                    </div>

                    {/* Official resources */}
                    <div className="mt-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 p-5 shadow-soft">
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2 text-sm">
                            <TrendingUp className="w-4 h-4 text-emerald-600" />
                            Official Government Sources (.gov.in)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            {[
                                { name: 'Ministry of Labour & Employment', url: 'https://labour.gov.in' },
                                { name: 'EPFO Official Portal', url: 'https://www.epfindia.gov.in' },
                                { name: 'ESIC Official Portal', url: 'https://www.esic.gov.in' },
                                { name: 'Shram Suvidha Portal', url: 'https://shramsuvidha.gov.in' },
                                { name: 'Income Tax India', url: 'https://incometax.gov.in' },
                            ].map((r, i) => (
                                <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs font-semibold text-primary hover:underline">
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
