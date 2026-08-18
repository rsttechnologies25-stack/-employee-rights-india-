import React from 'react';
import { UserX, AlertTriangle, ShieldAlert, FileText, Clock, Banknote, CheckCircle2, XCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { ContentList, CalloutBox } from '../components/ContentSection';
import { probationTerminationFaqs, terminationRelatedLinks } from '../data/terminationData';

export default function TerminationProbationPage() {
    return (
        <div>
            <SEOHead path="/termination/probation" />
            <PageHero
                title="Termination During Probation"
                subtitle="Understand your rights if you are terminated during the probation period — what is legal, what is not, and what you can do."
                icon={Clock}
                gradient="danger"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Termination', path: '/termination/probation' },
                        { label: 'During Probation', path: '/termination/probation' }
                    ]} />

                    {/* Quick Answer */}
                    <div className="bg-white dark:bg-gray-950 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-soft mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-success/5 rounded-xl border border-success/20 text-center">
                                <CheckCircle2 className="w-8 h-8 text-success mx-auto mb-2" />
                                <p className="font-bold text-sm">PF applies from Day 1</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Even during probation</p>
                            </div>
                            <div className="p-4 bg-warning/5 rounded-xl border border-warning/20 text-center">
                                <Clock className="w-8 h-8 text-warning mx-auto mb-2" />
                                <p className="font-bold text-sm">1–30 days notice</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Per appointment letter</p>
                            </div>
                            <div className="p-4 bg-danger/5 rounded-xl border border-danger/20 text-center">
                                <XCircle className="w-8 h-8 text-danger mx-auto mb-2" />
                                <p className="font-bold text-sm">Discrimination = Illegal</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Even during probation</p>
                            </div>
                        </div>
                    </div>

                    <ContentSection title="Can Employer Terminate During Probation?" icon={UserX} variant="info">
                        <p>Yes — employers generally have <strong>broader discretion</strong> to terminate during probation compared to confirmed employment. The probation period is explicitly a trial period where the employer assesses suitability. However, this discretion is not unlimited.</p>
                        <ContentList items={[
                            'Termination must comply with the notice period stated in the appointment letter',
                            'Cannot be discriminatory (gender, religion, caste, pregnancy)',
                            'Cannot be retaliatory for reporting a legal violation',
                            'Maternity Benefit Act protection applies even during probation',
                            'PF and ESI entitlements apply from Day 1 regardless of probation status',
                        ]} ordered={false} />
                    </ContentSection>

                    <ContentSection title="Notice Period During Probation" icon={Clock} variant="default">
                        <p>The notice period during probation is typically much shorter than for confirmed employees. It must be clearly stated in your appointment letter.</p>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full text-sm text-left border-separate border-spacing-0">
                                <thead>
                                    <tr className="bg-primary/5">
                                        <th className="px-4 py-3 font-bold text-primary rounded-tl-lg">Phase</th>
                                        <th className="px-4 py-3 font-bold text-primary">Typical Notice</th>
                                        <th className="px-4 py-3 font-bold text-primary rounded-tr-lg">Legal Requirement</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="bg-white dark:bg-gray-950"><td className="px-4 py-3 font-medium">During Probation</td><td className="px-4 py-3">7 to 30 days</td><td className="px-4 py-3 text-gray-600 dark:text-gray-400">As per appointment letter</td></tr>
                                    <tr className="bg-white dark:bg-gray-950"><td className="px-4 py-3 font-medium">After Confirmation</td><td className="px-4 py-3">30 to 90 days</td><td className="px-4 py-3 text-gray-600 dark:text-gray-400">As per appointment letter</td></tr>
                                    <tr className="bg-white dark:bg-gray-950"><td className="px-4 py-3 font-medium">Immediate Termination</td><td className="px-4 py-3">Salary in lieu</td><td className="px-4 py-3 text-gray-600 dark:text-gray-400">Pay equivalent salary for notice days</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </ContentSection>

                    <ContentSection title="Salary in Lieu of Notice" icon={Banknote} variant="success">
                        <p>If the employer wants to terminate immediately without having the employee serve notice, they must pay <strong>salary in lieu of notice</strong> — the equivalent pay for the notice period days.</p>
                        <ContentList items={[
                            'Payment = (Monthly Salary ÷ 30) × Notice Period Days',
                            'This amount must be paid along with the final F&F settlement',
                            'The employer cannot simply terminate and pay nothing — it must be salary or notice',
                            'Employee can also choose to pay buyout to leave before notice period ends',
                        ]} ordered={false} variant="success" />
                    </ContentSection>

                    <ContentSection title="Key Appointment Letter Clauses to Watch" icon={FileText} variant="warning">
                        <p>Before joining, carefully verify these clauses in your appointment letter:</p>
                        <ContentList items={[
                            'Probation period duration — usually 3 to 6 months; note if it can be extended',
                            'Notice period during probation — should be explicitly stated (e.g., "7 days notice or pay in lieu")',
                            'Confirmation criteria — what metrics/reviews trigger automatic confirmation',
                            'Termination grounds — what can get you terminated during probation',
                            'PF/ESI start date — should say "from date of joining," not "from date of confirmation"',
                            'Bond/training clause applicability — does a bond apply even if terminated during probation?',
                        ]} ordered={false} variant="warning" />
                        <CalloutBox type="warning" title="Red Flag">
                            If your appointment letter says "PF/ESI will start only after probation confirmation," this is illegal. PF is mandatory from Day 1.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="Illegal Termination Scenarios During Probation" icon={ShieldAlert} variant="danger">
                        <p>Even during probation, these terminations are illegal and can be challenged:</p>
                        <ContentList items={[
                            'Terminating a pregnant employee — prohibited by Maternity Benefit Act',
                            'Termination based on religion, caste, gender, or disability',
                            'Retaliating against an employee who reported a safety violation or illegal practice',
                            'Terminating without any documentation when appointment letter requires written notice',
                            'Terminating to avoid paying salary for work already done',
                            'Terminating an SC/ST employee with discriminatory intent',
                        ]} ordered={false} variant="danger" />
                        <CalloutBox type="danger" title="If you face illegal termination">
                            Collect all documents (appointment letter, communications, termination notice), file a complaint with the Labour Commissioner, and consult a labour lawyer.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="Your Rights During Probation Termination" icon={CheckCircle2} variant="success">
                        <ContentList items={[
                            'Right to receive salary for all days worked, including in the final month',
                            'Right to receive salary in lieu of notice if employer does not give notice',
                            'Right to PF accumulation for all contributions made during probation',
                            'Right to a termination letter or written communication about last working day',
                            'Right to challenge discriminatory or retaliatory termination before Labour Commissioner',
                            'Right to receive service certificate / experience letter upon request',
                        ]} ordered={false} variant="success" />
                    </ContentSection>

                    <div className="mt-4 p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
                        <p className="text-sm text-yellow-800 leading-relaxed">
                            <strong>Disclaimer:</strong> This content is for educational awareness only and does not constitute legal advice. Labour laws vary by state. For specific situations, consult a qualified labour law professional.
                        </p>
                    </div>

                    <FAQSection faqs={probationTerminationFaqs} title="FAQs — Termination During Probation" />
                    <InternalLinks currentPath="/termination/probation" links={terminationRelatedLinks} />
                </div>
            </div>
        </div>
    );
}
