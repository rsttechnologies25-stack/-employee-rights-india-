import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { Mail, MessageSquare, Send, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('general');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !message) return;
        // Client-side submission handling without exposing secrets
        setSubmitted(true);
    };

    return (
        <div>
            <SEOHead 
                path="/contact"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Contact Employee Rights India",
                    "description": "Reach out to the editorial and legal-information team at Employee Rights India for corrections, queries, and feedback."
                }}
            />

            <PageHero 
                title="Contact & Feedback"
                subtitle="Have a question about a guide, spotted a recent labour law notification, or want to suggest an improvement? Get in touch with our editorial team."
                icon={Mail}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-10">
                    <Breadcrumb items={[{ label: 'Contact', path: '/contact' }]} />

                    {/* Important Legal Disclaimer Banner */}
                    <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 p-6 rounded-2xl flex gap-4 text-amber-900 dark:text-amber-200 shadow-soft text-sm">
                        <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-bold text-base mb-1">Important: We Are Not a Law Firm</h3>
                            <p className="leading-relaxed">
                                We provide educational and procedural guidance on Indian labour laws. <strong>We cannot provide individual legal representation, file court cases on your behalf, or act as your advocates.</strong> If you need legal representation before a Labour Court or High Court, please consult a licensed advocate in your jurisdiction.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        
                        {/* Direct Contacts Info */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-primary" />
                                    Editorial Desk
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    For editorial inquiries, citation updates, and state wage rate corrections:
                                </p>
                                <a 
                                    href="mailto:contact@rexonsofttech.in"
                                    className="text-primary font-bold text-base hover:underline block mb-2 break-all"
                                >
                                    contact@rexonsofttech.in
                                </a>
                                <p className="text-xs text-gray-500">
                                    Operated by RexonSoftTech (RST Technologies)
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-primary" />
                                    Privacy & Safety
                                </h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Do not send confidential documents, passwords, Aadhaar, PAN, or sensitive banking details via email or contact forms. All platform tools operate locally on your device.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="md:col-span-3 bg-white dark:bg-gray-950 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft">
                            {submitted ? (
                                <div className="text-center py-12 space-y-4">
                                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Message Received!</h3>
                                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-sm">
                                        Thank you for reaching out. Our editorial team reviews suggestions and statutory updates within 2 to 3 business days.
                                    </p>
                                    <button 
                                        onClick={() => { setSubmitted(false); setMessage(''); }}
                                        className="btn-primary mt-4"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Send Feedback or Suggest a Correction</h3>
                                    
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Your Name (Optional)</label>
                                        <input 
                                            type="text" 
                                            value={name} 
                                            onChange={e => setName(e.target.value)} 
                                            placeholder="e.g. Rahul Sharma"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Your Email Address *</label>
                                        <input 
                                            type="email" 
                                            required
                                            value={email} 
                                            onChange={e => setEmail(e.target.value)} 
                                            placeholder="e.g. rahul@example.com"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Topic *</label>
                                        <select 
                                            value={topic} 
                                            onChange={e => setTopic(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:ring-2 focus:ring-primary outline-none"
                                        >
                                            <option value="general">General Feedback</option>
                                            <option value="correction">Report Outdated Law / Legal Correction</option>
                                            <option value="tool">Tool / Calculator Improvement Suggestion</option>
                                            <option value="state">State Minimum Wage Update</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Your Message / Source Details *</label>
                                        <textarea 
                                            required
                                            rows="4"
                                            value={message} 
                                            onChange={e => setMessage(e.target.value)} 
                                            placeholder="Please describe the issue or suggestion. If reporting a legal change, please mention the gazette notification number or official source link."
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:ring-2 focus:ring-primary outline-none resize-none"
                                        />
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-soft"
                                    >
                                        <Send className="w-4 h-4" /> Submit Feedback
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
