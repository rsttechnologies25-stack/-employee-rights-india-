import React from 'react';
import { Baby, Shield, CheckCircle2, AlertTriangle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { CalloutBox } from '../components/ContentSection';
import { maternityFaqs } from '../data/womensRightsData';

const relatedLinks = [
    { title: 'POSH Act Rights', subtitle: 'Protection against sexual harassment', path: '/posh-act' },
    { title: 'Working Hours & Shifts', subtitle: 'Night shift safety rules', path: '/working-hours' },
    { title: 'Wrongful Termination', subtitle: 'If fired during pregnancy', path: '/termination/wrongful' },
];

export default function MaternityRightsPage() {
    return (
        <div>
            <SEOHead path="/maternity-rights" />
            <PageHero
                title="Maternity Benefit Act, 1961"
                subtitle="Your right to 26 weeks of paid leave, protection from termination, and crèche facilities under Indian Law."
                icon={Baby}
                gradient="purple"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Women\'s Rights', path: '/maternity-rights' }, { label: 'Maternity Benefits', path: '/maternity-rights' }]} />

                    <ContentSection title="Key Entitlements" icon={Shield} variant="success">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: '26 Weeks Paid Leave', desc: 'For first two children. Can take up to 8 weeks before delivery.' },
                                { title: '12 Weeks for Adoption', desc: 'For mothers legally adopting a child below 3 months of age.' },
                                { title: 'No Termination', desc: 'Illegal to dismiss or discharge a woman during maternity leave.' },
                                { title: 'Crèche Facility', desc: 'Mandatory if the company has 50+ employees (4 visits/day allowed).' },
                                { title: 'Medical Bonus', desc: '₹3,500 if pre-natal/post-natal care is not provided by employer.' },
                                { title: '1 Month Extra', desc: 'Paid leave for illnesses arising out of pregnancy or delivery.' }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white dark:bg-gray-950 p-4 rounded-xl border border-success/20 flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">{item.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    <ContentSection title="Eligibility Criteria" icon={CheckCircle2} variant="default">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">To be eligible for maternity benefits, you must meet the following criteria:</p>
                            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                                <h3 className="font-bold text-primary mb-2 text-lg">The 80-Day Rule</h3>
                                <p className="text-gray-700 dark:text-gray-300">You must have worked for the employer for at least <strong>80 days</strong> in the 12 months immediately preceding the date of your expected delivery.</p>
                            </div>
                            <CalloutBox type="info" title="Applies to All Employment Types">
                                The act applies universally. You are eligible whether you are on probation, a contract worker, a consultant, or a confirmed employee, as long as you meet the 80-day requirement.
                            </CalloutBox>
                        </div>
                    </ContentSection>

                    <ContentSection title="Protection from Termination" icon={AlertTriangle} variant="danger">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">The Maternity Benefit Act offers strong job security protections for pregnant women:</p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                                <li><strong>Section 12:</strong> It is unlawful for your employer to discharge or dismiss you during or on account of your maternity leave.</li>
                                <li>It is illegal to issue a notice of discharge that would expire during your maternity leave.</li>
                                <li>Taking maternity leave cannot be used as a reason to alter the conditions of your service to your disadvantage (e.g., demotion, salary reduction).</li>
                                <li>Your time on maternity leave is counted as continuous service for the purpose of Gratuity, PF, and appraisals.</li>
                            </ul>
                            <CalloutBox type="warning" title="What to do if fired?">
                                If you are terminated because of pregnancy, it is a clear violation of the Act. You can file a complaint with the Labour Inspector or Labour Court, and the employer is liable for severe penalties, including reinstatement with back wages.
                            </CalloutBox>
                        </div>
                    </ContentSection>

                    <FAQSection faqs={maternityFaqs} title="Maternity Rights FAQs" />
                    <InternalLinks currentPath="/maternity-rights" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
