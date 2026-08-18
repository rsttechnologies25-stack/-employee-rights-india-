import React from 'react';
import { LogOut, FileText, MessageSquare, AlertTriangle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { CalloutBox } from '../components/ContentSection';
import ChecklistCard from '../components/ChecklistCard';
import { exitDocuments, exitInterviewQuestions, exitProcessFaqs } from '../data/exitProcessData';

const relatedLinks = [
    { title: 'Full & Final Settlement', subtitle: 'All dues on exit', path: '/full-final-settlement' },
    { title: 'Relieving Letter Rights', subtitle: 'What to expect from your employer', path: '/relieving-letter' },
    { title: 'Experience Letter Rights', subtitle: 'Your right to a certificate', path: '/experience-letter' },
    { title: 'Notice Period Rights', subtitle: 'Resignation and notice', path: '/notice-period' },
];

const importanceBadge = {
    critical: { label: 'Critical', className: 'bg-danger/10 text-danger border border-danger/20' },
    high: { label: 'Important', className: 'bg-warning/10 text-warning border border-warning/20' },
    medium: { label: 'Helpful', className: 'bg-primary/10 text-primary border border-primary/20' },
};

const docChecklistItems = exitDocuments.map(d => d.title + ' — ' + d.description.substring(0, 60) + '...');

const hrChecklistItems = [
    'Clarify your last working day and get it confirmed in writing',
    'Ask about the F&F timeline — when will it be processed?',
    'Request relieving and experience letter issuance dates',
    'Verify your earned leave balance and encashment amount',
    'Confirm gratuity eligibility and calculation (if 5+ years served)',
    'Raise any pending reimbursement claims in writing',
    'Verify your UAN and PF account are updated and active',
    'Ask about Form 16 issuance date for the current financial year',
    'Confirm no-dues clearance process and what departments are involved',
    'Get written confirmation of notice period waiver if employer asks you to leave early',
];

export default function ExitProcessPage() {
    return (
        <div>
            <SEOHead path="/exit-process" />
            <PageHero
                title="Exit Process & Documents"
                subtitle="Complete guide to the exit process — documents to collect, exit interview tips, and HR checklist when leaving a company in India."
                icon={LogOut}
                gradient="teal"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Exit Process & Documents', path: '/exit-process' }]} />

                    <ContentSection title="Documents You Must Collect at Exit" icon={FileText} variant="info">
                        <p className="mb-4">Collect ALL these documents before or immediately after your last working day. Missing documents can cause problems with your next employer, tax filing, or PF withdrawal.</p>
                        <div className="space-y-4">
                            {exitDocuments.map((doc, idx) => {
                                const badge = importanceBadge[doc.importance];
                                return (
                                    <div key={idx} className="p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800 shadow-soft">
                                        <div className="flex items-start justify-between gap-3 mb-2">
                                            <h3 className="font-bold text-gray-900 dark:text-gray-100">{doc.title}</h3>
                                            <span className={`badge text-[10px] uppercase tracking-wider shrink-0 ${badge.className}`}>{badge.label}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{doc.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </ContentSection>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                        <ChecklistCard
                            title="Document Collection Tracker"
                            description="Check each document as you collect it"
                            items={docChecklistItems}
                        />
                        <ChecklistCard
                            title="HR Discussion Checklist"
                            description="Key points to raise with HR before exit"
                            items={hrChecklistItems}
                        />
                    </div>

                    <ContentSection title="Exit Interview Guide" icon={MessageSquare} variant="default">
                        <p className="mb-4">Exit interviews are voluntary but can be useful. Common questions your employer may ask:</p>
                        <ul className="space-y-2">
                            {exitInterviewQuestions.map((q, idx) => (
                                <li key={idx} className="flex gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                    <span className="text-primary font-bold text-sm shrink-0">Q{idx + 1}.</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">{q}</span>
                                </li>
                            ))}
                        </ul>
                        <CalloutBox type="tip" title="Exit Interview Tips">
                            Be honest but diplomatic. Focus on professional feedback rather than personal grievances. Avoid burning bridges — India's professional networks are small. You can raise real concerns (delayed salary, harassment) through proper channels rather than only in the exit interview.
                        </CalloutBox>
                    </ContentSection>

                    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
                        <p className="text-sm text-yellow-800"><strong>Disclaimer:</strong> This content is for educational awareness only and does not constitute legal advice.</p>
                    </div>

                    <FAQSection faqs={exitProcessFaqs} title="FAQs — Exit Process" />
                    <InternalLinks currentPath="/exit-process" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
