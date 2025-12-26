import { ArrowRight, CheckCircle2, ShieldAlert, ShieldCheck, Database, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function Home() {
    return (
        <div>
            <SEOHead path="/" />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary to-[#1e3a8a] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Is Your Job Legal & Fair?
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 mb-10 font-medium">
                        Know your employee rights. Clarify doubts in minutes.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link to="/pf-esi" className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all group">
                            PF & ESI Rules <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/notice-period" className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all group">
                            Notice Period & Salary <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/working-hours" className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all group">
                            Overtime & Working Hours <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/illegal-practices" className="bg-accent text-white hover:bg-accent-dark px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all group">
                            Employer Asking Money <ShieldAlert className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">A Trusted Resource for Employees</h2>
                        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm md:text-base">
                        <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 shadow-soft">
                            <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">No Login Required</h3>
                            <p className="text-gray-600">Access all information instantly without creating any account or profile.</p>
                        </div>
                        <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 shadow-soft">
                            <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">No Personal Data</h3>
                            <p className="text-gray-600">We do not collect names, emails, phone numbers, or company details.</p>
                        </div>
                        <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 shadow-soft">
                            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Educational Only</h3>
                            <p className="text-gray-600">Pure awareness platform to help you understand Indian Labour Laws.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Quick Tips */}
            <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8">Quick Reality Check</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-soft flex items-start gap-4">
                            <div className="bg-success/10 p-2 rounded-lg">
                                <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">PF is Mandatory from Day 1</h4>
                                <p className="text-gray-600">Even during training or probation. Your employer cannot say "No PF until 6 months".</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-soft flex items-start gap-4">
                            <div className="bg-danger/10 p-2 rounded-lg">
                                <ShieldAlert className="w-6 h-6 text-danger shrink-0" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Asking for Money is Illegal</h4>
                                <p className="text-gray-600">If any company asks you for a "security deposit" or "processing fee" for a job, it is a scam.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-soft flex items-start gap-4">
                            <div className="bg-warning/10 p-2 rounded-lg">
                                <ShieldAlert className="w-6 h-6 text-warning shrink-0" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Salary-based Bond Penalties</h4>
                                <p className="text-gray-600">Bonds are only valid if the company spent actual money on your specialized training.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-20 px-4 bg-white text-center">
                <h2 className="text-3xl font-bold mb-6">Need to check your Eligibility?</h2>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">Use our interactive tool to find out if you are eligible for PF and ESI based on your salary.</p>
                <Link to="/pf-esi" className="btn-primary inline-flex items-center gap-2">
                    Calculate PF Eligibility <ArrowRight className="w-5 h-5" />
                </Link>
            </section>
        </div>
    );
}
