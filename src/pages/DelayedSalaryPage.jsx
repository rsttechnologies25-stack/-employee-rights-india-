import { AlertTriangle, ExternalLink, Scale, Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { ContentList, CalloutBox } from '../components/ContentSection';
import { delayedSalaryFaqs } from '../data/salaryData';

const relatedLinks = [
    { title: 'Pay Cycle Guide', subtitle: 'When salary must be paid by law', path: '/pay-cycle' },
    { title: 'Salary Calculation Methods', subtitle: 'How salary is calculated', path: '/salary-calculation' },
    { title: 'Wrongful Termination', subtitle: 'If salary delay follows termination', path: '/termination/wrongful' },
    { title: 'Full & Final Settlement', subtitle: 'F&F delay remedies', path: '/full-final-settlement' },
    { title: 'Letter Templates', subtitle: 'Salary delay complaint template', path: '/templates' },
];

export default function DelayedSalaryPage() {
    const complaintSteps = [
        { step: '1', title: 'Written Demand to HR/Management', desc: 'Send a formal email to HR, Finance head, and management specifying: exact months of delay, amounts due, and a 7-day deadline to pay. Keep proof of delivery (read receipts).' },
        { step: '2', title: 'Escalation Email', desc: 'If not resolved in 7 days, escalate to the highest authority (CEO, Managing Director, board members if accessible) with a copy to HR. State that you will be approaching authorities if not resolved.' },
        { step: '3', title: 'Labour Commissioner Complaint', desc: 'File a written complaint with the Assistant Labour Commissioner (ALC) in your district. The ALC will summon the employer for conciliation. For specific legal violations, the Labour Inspector can also be approached.' },
        { step: '4', title: 'Payment of Wages Act Claim', desc: 'File an application under Section 15 of the Payment of Wages Act before the Payment of Wages Authority. This is faster than civil court and specifically designed for wage recovery. No court fee is usually payable.' },
        { step: '5', title: 'Legal Notice', desc: 'Have a lawyer send a formal legal notice to the employer under the Payment of Wages Act and Contract Law, demanding payment within 15 days. This is often the most effective and fast trigger for payment.' },
    ];

    const illegalScenarios = [
        'Salary not paid for more than 10 working days after the 7th/10th of the month',
        'Salary withheld after resignation or notice period',
        'Salary not paid after termination for all days worked',
        'Partial salary paid but the rest withheld without written justification',
        'Salary held pending signing of an NDA, clearance, or asset return',
        'Salary deducted for reasons not specified in your appointment letter',
        'Variable pay withheld despite achieving agreed targets without documented reason',
    ];

    return (
        <div>
            <SEOHead path="/delayed-salary" />
            <PageHero
                title="Delayed & Withheld Salary Recovery"
                subtitle="Your employer is required to pay salary on time. Here is what to do when they don't — step by step complaint options and legal remedies."
                icon={AlertTriangle}
                gradient="danger"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Salary & Pay', path: '/delayed-salary' },
                        { label: 'Delayed Salary', path: '/delayed-salary' }
                    ]} />

                    {/* Quick summary */}
                    <div className="bg-white dark:bg-gray-950 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-soft mb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                            <div className="p-4 bg-danger/5 rounded-xl">
                                <p className="text-3xl font-black text-danger mb-1">7th</p>
                                <p className="text-sm font-bold">Legal Deadline</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">For {'<'}1,000 employee companies</p>
                            </div>
                            <div className="p-4 bg-warning/5 rounded-xl">
                                <p className="text-3xl font-black text-warning mb-1">10x</p>
                                <p className="text-sm font-bold">Penalty Available</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Compensation for unauthorized deductions</p>
                            </div>
                            <div className="p-4 bg-success/5 rounded-xl">
                                <p className="text-3xl font-black text-success mb-1">Free</p>
                                <p className="text-sm font-bold">Labour Commissioner</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">No filing fee for wage complaints</p>
                            </div>
                        </div>
                    </div>

                    <ContentSection title="Illegal Salary Withholding Scenarios" icon={AlertTriangle} variant="danger">
                        <ContentList items={illegalScenarios} ordered={false} variant="danger" />
                    </ContentSection>

                    <ContentSection title="Step-by-Step: How to Recover Your Salary" icon={Scale} variant="info">
                        <div className="space-y-4">
                            {complaintSteps.map(s => (
                                <div key={s.step} className="flex gap-4 p-5 bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800">
                                    <span className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-black text-sm shrink-0">{s.step}</span>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-gray-100">{s.title}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    <ContentSection title="Salary After Resignation / Termination" icon={Shield} variant="warning">
                        <ContentList items={[
                            'Salary for all days worked during the notice period must be paid on the regular pay date',
                            'Employer cannot stop salary mid-notice period — notice pay recovery applies only in F&F',
                            'If terminated, all salary up to the last working day must be paid in F&F',
                            'Retrenchment: notice pay or notice pay in lieu must also be paid',
                            'Dismissal for misconduct: salary until last working day must still be paid (even if gratuity is forfeited)',
                            'If employer becomes insolvent: employee wages are a priority claim under the Insolvency & Bankruptcy Code',
                        ]} ordered={false} variant="warning" />
                        <CalloutBox type="danger" title="Constructive Resignation">
                            If you resign because your employer has not paid salary for multiple months (after written demands), courts may treat this as constructive dismissal, making you eligible for additional remedies.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="Official Complaint Portals" icon={ExternalLink} variant="success">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: 'Shram Suvidha Portal', desc: 'Central government labour complaint portal', url: 'https://shramsuvidha.gov.in', badge: 'Central' },
                                { name: 'PF/EPFO Grievance Portal', desc: 'For PF-related disputes and non-deposit', url: 'https://epfigms.gov.in', badge: 'EPFO' },
                                { name: 'ESIC Grievance Portal', desc: 'For ESI contribution disputes', url: 'https://esic.gov.in', badge: 'ESIC' },
                                { name: 'National Labour Helpline', desc: 'Dial 1800-11-2526 (Toll Free)', url: 'tel:18001112526', badge: 'Helpline' },
                            ].map((portal, idx) => (
                                <a key={idx} href={portal.url} target="_blank" rel="noopener noreferrer"
                                    className="p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-md transition-all flex items-start justify-between gap-3 group">
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">{portal.name}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{portal.desc}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1 shrink-0">
                                        <span className="badge bg-primary/10 text-primary text-[10px]">{portal.badge}</span>
                                        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-primary" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </ContentSection>

                    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
                        <p className="text-sm text-yellow-800"><strong>Disclaimer:</strong> Educational content only. For specific legal advice, consult a qualified labour law professional.</p>
                    </div>

                    <FAQSection faqs={delayedSalaryFaqs} title="FAQs — Delayed & Withheld Salary" />
                    <InternalLinks currentPath="/delayed-salary" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
