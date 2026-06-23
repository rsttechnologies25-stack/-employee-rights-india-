import { FileCheck, Banknote, AlertTriangle, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { ContentList, CalloutBox } from '../components/ContentSection';
import ChecklistCard from '../components/ChecklistCard';
import { ffSettlementFaqs, ffChecklist, employeeRightsChecklist } from '../data/ffSettlementData';

const relatedLinks = [
    { title: 'Exit Process & Documents', subtitle: 'Documents to collect on exit', path: '/exit-process' },
    { title: 'Gratuity Calculator', subtitle: 'Calculate your gratuity', path: '/gratuity' },
    { title: 'Delayed Salary Recovery', subtitle: 'If F&F is not paid on time', path: '/delayed-salary' },
    { title: 'Termination After Confirmation', subtitle: 'Termination rights & process', path: '/termination/after-confirmation' },
    { title: 'Notice Period', subtitle: 'Notice period buyout rules', path: '/notice-period' },
    { title: 'F&F Calculator', subtitle: 'Estimate your F&F amount', path: '/tools/ff-calculator' },
];

const ffComponents = [
    { icon: '💰', title: 'Unpaid Salary', desc: 'Salary for all days worked in the last month, calculated at your daily rate.' },
    { icon: '🌴', title: 'Leave Encashment', desc: 'Payment for all unused earned leave balance at the time of exit.' },
    { icon: '🎁', title: 'Pro-rata Bonus', desc: 'Statutory bonus (if eligible) from the start of the accounting year to last working day.' },
    { icon: '🏆', title: 'Gratuity', desc: 'Payable if you have completed 5 years of continuous service. Formula: (15 × Salary × Years) / 26.' },
    { icon: '🧾', title: 'Pending Reimbursements', desc: 'Medical, travel, LTA, or other approved but unpaid reimbursement claims.' },
    { icon: '📋', title: 'Notice Pay', desc: 'Either receivable (if employer terminates without notice) or recoverable (if you leave short notice).' },
];

const violations = [
    'Delaying F&F beyond 45 days without a valid reason or communication',
    'Making arbitrary deductions without written justification (e.g., "project damages")',
    'Withholding relieving or experience letters until F&F is settled',
    'Blocking PF transfer or claiming to "stop" PF',
    'Demanding employees sign pre-filled clearance forms without allowing them to raise objections',
    'Not including gratuity in F&F for employees with 5+ years of service',
    'Refusing to pay leave encashment for accumulated earned leaves',
    'Deducting notice pay in excess of the actual unserved notice period',
];

export default function FFSettlementPage() {
    return (
        <div>
            <SEOHead path="/full-final-settlement" />
            <PageHero
                title="Full & Final Settlement (F&F)"
                subtitle="A comprehensive guide to all dues you are entitled to when leaving a company — and what employers cannot do."
                icon={FileCheck}
                gradient="primary"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Full & Final Settlement', path: '/full-final-settlement' }]} />

                    <ContentSection title="What is F&F Settlement?" icon={FileCheck} variant="info">
                        <p>Full and Final Settlement is the process of settling <strong>all pending dues</strong> between an employer and employee when employment ends — whether through resignation, termination, retirement, or contract expiry. It is not a favour; it is a legal obligation.</p>
                        <CalloutBox type="info" title="New Labour Code Timeline">
                            Under the Code on Wages 2019 (to be implemented), F&F must be settled within 2 working days of the last working day. Current practice: 30–45 days is common, but beyond 60 days without reason is challengeable.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="Components of F&F Settlement" icon={Banknote} variant="default">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {ffComponents.map((c, idx) => (
                                <div key={idx} className="p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800 flex gap-3">
                                    <span className="text-2xl shrink-0">{c.icon}</span>
                                    <div>
                                        <p className="font-bold text-sm text-gray-900 dark:text-gray-100">{c.title}</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{c.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    <ContentSection title="F&F Timeline — What to Expect" icon={Clock} variant="warning">
                        <div className="space-y-3">
                            {[
                                { day: 'Last Working Day', desc: 'Complete handover, return assets, get asset return acknowledgement.' },
                                { day: 'Within 2 Days (New Code)', desc: 'Ideal timeline for F&F under upcoming Labour Codes.' },
                                { day: 'Within 30–45 Days', desc: 'Common timeline in current practice for most companies.' },
                                { day: 'Beyond 60 Days', desc: 'If no F&F without communication, send formal written demand to HR.' },
                                { day: 'Beyond 90 Days', desc: 'File complaint with Labour Commissioner and send legal notice.' },
                            ].map((t, idx) => (
                                <div key={idx} className="flex gap-4 items-start p-3 bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800">
                                    <div className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-bold whitespace-nowrap">{t.day}</div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{t.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    <ContentSection title="Common Employer Violations" icon={AlertTriangle} variant="danger">
                        <ContentList items={violations} ordered={false} variant="danger" />
                        <CalloutBox type="danger" title="Your Remedy">
                            Send a written demand email → Legal Notice → Labour Commissioner Complaint → Labour Court if needed.
                        </CalloutBox>
                    </ContentSection>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                        <ChecklistCard title="F&F Settlement Checklist" description="Track all items before accepting F&F payment" items={ffChecklist} />
                        <ChecklistCard title="Employee Rights on Exit" description="Know your rights during the exit process" items={employeeRightsChecklist} />
                    </div>

                    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
                        <p className="text-sm text-yellow-800"><strong>Disclaimer:</strong> This content is for educational awareness only and does not constitute legal advice.</p>
                    </div>

                    <FAQSection faqs={ffSettlementFaqs} title="FAQs — Full & Final Settlement" />
                    <InternalLinks currentPath="/full-final-settlement" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
