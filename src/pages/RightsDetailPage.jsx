import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { rightsCategories } from '../data/rightsData';
import { ArrowLeft, CheckCircle2, Ban, Info, ExternalLink, Scale, ShieldCheck, FileText, ArrowRight, Compass, Calculator, AlertTriangle, Building2, BookOpen } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import LegalMetadataBadge from '../components/LegalMetadataBadge';

export default function RightsDetailPage() {
    const { categoryId } = useParams();
    const category = rightsCategories.find(c => c.id === categoryId);

    if (!category) {
        return (
            <div className="py-20 px-4 text-center min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <h1 className="text-2xl font-bold mb-4">Rights Category Not Found</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">The category "{categoryId}" does not exist or has moved.</p>
                <Link to="/rights" className="btn-primary text-xs">← Back to All Employee Rights</Link>
            </div>
        );
    }

    const Icon = category.icon || Scale;
    const cleanLabel = category.title ? category.title.replace(/^[^\w\s]+/, '').trim() : 'Rights Guide';

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                path={`/rights/${category.id}`}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": `${cleanLabel} — Complete Statutory Guide in India`,
                    "description": category.summary || "Comprehensive guide to statutory employee rights in India.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Employee Rights India",
                        "url": "https://employee-rights.rexonsofttech.in"
                    }
                }}
            />

            <div className="max-w-5xl mx-auto space-y-8">
                
                {/* Navigation Breadcrumb */}
                <Breadcrumb items={[
                    { label: 'All Rights', path: '/rights' },
                    { label: cleanLabel, path: `/rights/${category.id}` }
                ]} />

                {/* Hero Card */}
                <div className="bg-gradient-to-br from-primary via-indigo-900 to-blue-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                        <div className="p-4 bg-white/10 rounded-2xl border border-white/20 shrink-0 w-fit">
                            <Icon className="w-10 h-10 text-blue-200" />
                        </div>
                        <div>
                            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-300 block mb-1">
                                Statutory Labour Law Guide
                            </span>
                            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">{category.title}</h1>
                        </div>
                    </div>
                    <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-3xl">
                        {category.summary}
                    </p>
                </div>

                {/* Statutory Governance Badge */}
                <LegalMetadataBadge 
                    lastReviewed="18 August 2026"
                    status="Current Law (Enacted Central & State Statutes)"
                    jurisdiction="All India (Central & State Level Sphere)"
                    source="Ministry of Labour & Employment / Official Gazette"
                    sourceUrl="https://labour.gov.in"
                />

                {/* ── SECTION 1: GOVERNING ACTS & STATUTORY CITATIONS ── */}
                {category.acts && category.acts.length > 0 && (
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-4">
                        <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary" /> Governing Legislative Acts & Sections
                        </h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            These statutory provisions empower employees with legally enforceable rights across India:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            {category.acts.map((actItem, idx) => (
                                <div key={idx} className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 space-y-1">
                                    <h3 className="font-bold text-sm text-primary dark:text-blue-300">{actItem.act}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">{actItem.sections}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── SECTION 2: IN-DEPTH LEGAL PRINCIPLES & RULES ── */}
                {category.legalPrinciples && category.legalPrinciples.length > 0 && (
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
                        <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <Scale className="w-5 h-5 text-primary" /> In-Depth Legal Rules & Judicial Doctrines
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.legalPrinciples.map((principle, idx) => (
                                <div key={idx} className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 space-y-2">
                                    <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100">{principle.heading}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{principle.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── SECTION 3: YOUR STATUTORY ENTITLEMENTS ── */}
                {category.entitlements && category.entitlements.length > 0 && (
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
                        <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" /> Your Lawful Entitlements as an Employee
                        </h2>
                        <div className="space-y-3">
                            {category.entitlements.map((item, idx) => (
                                <div key={idx} className="p-4 bg-green-50/40 dark:bg-green-950/20 rounded-2xl border border-green-200/60 dark:border-green-900/40 flex items-start gap-3 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                                    <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                                        {idx + 1}
                                    </span>
                                    <span className="leading-relaxed font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── SECTION 4: WHAT IS STRICTLY ILLEGAL ── */}
                {category.prohibitions && category.prohibitions.length > 0 && (
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
                        <h2 className="text-xl font-black text-red-600 dark:text-red-400 flex items-center gap-2">
                            <Ban className="w-5 h-5 text-red-600" /> What Your Employer CANNOT Legally Do
                        </h2>
                        <div className="space-y-3">
                            {category.prohibitions.map((item, idx) => (
                                <div key={idx} className="p-4 bg-red-50/40 dark:bg-red-950/20 rounded-2xl border border-red-200/60 dark:border-red-900/40 flex items-start gap-3 text-xs sm:text-sm text-red-950 dark:text-red-200">
                                    <span className="text-red-500 font-bold shrink-0 text-base">⚠️</span>
                                    <span className="leading-relaxed font-medium">{typeof item === 'string' ? item.replace(/^🚫\s*/, '') : item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── SECTION 5: STEP-BY-STEP ACTION ROADMAP ── */}
                {category.actionSteps && category.actionSteps.length > 0 && (
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
                        <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <Compass className="w-5 h-5 text-primary" /> Step-by-Step Resolution Roadmap
                        </h2>
                        <ol className="space-y-3 list-none">
                            {category.actionSteps.map((step, idx) => (
                                <li key={idx} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-150 dark:border-gray-800 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>
                )}

                {/* ── SECTION 6: MANDATORY EVIDENCE CHECKLIST ── */}
                {category.evidenceRequired && category.evidenceRequired.length > 0 && (
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-4">
                        <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-primary" /> Documents & Evidence to Preserve
                        </h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            Gather these documents before submitting your petition or legal notice:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {category.evidenceRequired.map((doc, idx) => (
                                <div key={idx} className="p-3.5 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-150 dark:border-gray-800 flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                    <span>{doc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── SECTION 7: INTERACTIVE TOOLS & CALCULATORS ── */}
                {category.relatedTools && category.relatedTools.length > 0 && (
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
                        <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-primary" /> Interactive Calculators & Action Tools
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {category.relatedTools.map((tool, idx) => (
                                <Link 
                                    key={idx}
                                    to={tool.path}
                                    className="p-5 rounded-2xl border border-gray-150 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-primary hover:bg-primary/5 transition-all flex flex-col justify-between group"
                                >
                                    <div>
                                        <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors mb-1">
                                            {tool.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                                            {tool.desc}
                                        </p>
                                    </div>
                                    <div className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Launch Tool <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── SECTION 8: OFFICIAL FILING CHANNELS ── */}
                <div className="bg-gradient-to-br from-indigo-900 to-blue-950 text-white p-8 rounded-3xl shadow-lg space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-blue-300" /> Where to File an Official Complaint?
                    </h2>
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                        If direct communication with HR fails to resolve the dispute, you can file a conciliation petition or statutory claim before these authorized government bodies:
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <a 
                            href="https://samadhan.labour.gov.in" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white text-indigo-950 font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-blue-50 flex items-center gap-1.5 transition-colors shadow-soft"
                        >
                            SAMADHAN Portal <ExternalLink className="w-3 h-3" />
                        </a>
                        <Link 
                            to="/tools/authority-finder" 
                            className="bg-white/15 border border-white/20 text-white font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-white/25 flex items-center gap-1.5 transition-colors"
                        >
                            Authority Finder Tool →
                        </Link>
                        <Link 
                            to="/tools/grievance-generator" 
                            className="bg-white/15 border border-white/20 text-white font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-white/25 flex items-center gap-1.5 transition-colors"
                        >
                            Draft Complaint Letter →
                        </Link>
                    </div>
                </div>

                {/* ── SECTION 9: WHY THIS MATTERS ── */}
                {category.whyItMatters && (
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-2">
                            <Info className="w-4 h-4 text-primary" /> Constitutional & Human Significance
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                            {category.whyItMatters}
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}
