import { Target, AlertTriangle, ShieldCheck, FileSignature, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { CalloutBox } from '../components/ContentSection';
import { pipFaqs } from '../data/performanceData';

const relatedLinks = [
    { title: 'Forced Resignation', subtitle: 'Are you being pressured to quit?', path: '/forced-resignation' },
    { title: 'Wrongful Termination', subtitle: 'What makes a firing illegal?', path: '/termination/wrongful' },
    { title: 'Notice Period Rules', subtitle: 'Your rights during exit', path: '/notice-period' },
];

export default function PIPGuidePage() {
    return (
        <div>
            <SEOHead path="/pip-guide" />
            <PageHero
                title="Performance Improvement Plans (PIP)"
                subtitle="Understanding your rights when placed on a PIP, how to respond, and what to do if it leads to termination."
                icon={Target}
                gradient="warning"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Workplace Rules', path: '/working-hours' }, { label: 'PIP Guide', path: '/pip-guide' }]} />

                    <ContentSection title="What is a PIP Legally?" icon={Target} variant="warning">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">A Performance Improvement Plan (PIP) is an internal HR tool used to formally notify an employee that their work is not meeting company standards. Legally speaking:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-white dark:bg-gray-950 p-4 rounded-xl border border-warning/20 shadow-sm">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4 text-warning" /> Not a Termination
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">A PIP is <strong>not</strong> a termination notice. You are still an active employee with all standard rights, salary, and benefits during the PIP duration.</p>
                                </div>
                                <div className="bg-white dark:bg-gray-950 p-4 rounded-xl border border-danger/20 shadow-sm">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                                        <FileSignature className="w-4 h-4 text-danger" /> The "Paper Trail"
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">In the corporate/IT sector, employers often use PIPs to create a legally defensible "paper trail" to justify firing you later for underperformance rather than illegal retrenchment.</p>
                                </div>
                            </div>
                        </div>
                    </ContentSection>

                    <ContentSection title="Your Rights During a PIP" icon={ShieldCheck} variant="success">
                        <div className="space-y-4">
                            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                                    <span><strong>Right to Object:</strong> If the goals in the PIP are factually incorrect or unachievable, you have the right to document your objections via email.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                                    <span><strong>Full Salary:</strong> Your employer cannot legally deduct your fixed basic salary or standard allowances just because you are on a PIP.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                                    <span><strong>Standard Benefits:</strong> Your access to PF, ESI, health insurance, and earned leaves remains unaffected.</span>
                                </li>
                            </ul>
                            
                            <CalloutBox type="info" title="Should you sign the PIP document?">
                                Refusing to sign can be seen as insubordination. A safer legal strategy is to sign it but add a handwritten note (or reply via email) stating: <em>"Signed to acknowledge receipt, but I do not agree with the performance assessment."</em>
                            </CalloutBox>
                        </div>
                    </ContentSection>

                    <ContentSection title="Termination After a PIP" icon={AlertTriangle} variant="danger">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">If you fail the PIP and the company decides to terminate your employment, they must still follow the law:</p>
                            
                            <div className="bg-danger/5 p-6 rounded-xl border border-danger/20">
                                <h3 className="font-bold text-danger mb-3">Your Severance Rights</h3>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                                    <li><strong>Notice Period:</strong> They must allow you to serve your notice period OR pay you your full salary in lieu of notice.</li>
                                    <li><strong>Leave Encashment:</strong> All accrued earned leaves must be encashed in your Full & Final settlement.</li>
                                    <li><strong>Gratuity:</strong> If you have completed 5 years (or 4 years 240 days), you are fully eligible for gratuity. Poor performance does not forfeit gratuity.</li>
                                    <li><strong>Retrenchment Compensation:</strong> If you qualify as a "workman" under the IDA, you are entitled to 15 days of wages for every completed year of service.</li>
                                </ul>
                            </div>

                            <CalloutBox type="warning" title="Constructive Dismissal">
                                If the PIP was specifically designed with impossible goals just to force you to resign, this is known as "Constructive Dismissal" and can be challenged in a labour court as wrongful termination.
                            </CalloutBox>
                        </div>
                    </ContentSection>

                    <FAQSection faqs={pipFaqs} title="PIP & Performance FAQs" />
                    <InternalLinks currentPath="/pip-guide" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
