import React from 'react';
import { UserX, Scale, Gavel, AlertTriangle, CheckCircle2, Banknote, FileCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { ContentList, CalloutBox } from '../components/ContentSection';
import { confirmedTerminationFaqs, terminationRelatedLinks } from '../data/terminationData';

export default function TerminationConfirmedPage() {
    return (
        <div>
            <SEOHead path="/termination/after-confirmation" />
            <PageHero
                title="Termination After Confirmation"
                subtitle="Your rights and the legal process employers must follow before terminating a confirmed employee in India."
                icon={UserX}
                gradient="danger"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Termination', path: '/termination/after-confirmation' },
                        { label: 'After Confirmation', path: '/termination/after-confirmation' }
                    ]} />

                    <ContentSection title="Notice Period Rights" icon={FileCheck} variant="info">
                        <p>A confirmed employee has significantly stronger protections than a probationer. Before termination, the employer must follow specific steps dictated by the employment contract, Standing Orders, and the Industrial Disputes Act.</p>
                        <ContentList items={[
                            'Notice period as per appointment letter — typically 30 to 90 days',
                            'In the absence of a specific notice clause, reasonable notice (usually 30 days) is implied',
                            'Employer can pay salary in lieu of notice instead of requiring the employee to serve out notice',
                            'Workmen in companies with 100+ employees are entitled to 3 months\' notice under the IDA',
                            'No deduction from salary can be made during the notice period',
                        ]} ordered={false} />
                    </ContentSection>

                    <ContentSection title="Termination Procedure Employers Must Follow" icon={Gavel} variant="warning">
                        <p>For confirmed employees (especially workmen), employers must follow this process for misconduct-based termination:</p>
                        <div className="space-y-4 mt-2">
                            {[
                                { step: '1', title: 'Suspension (if necessary)', desc: 'Employee may be suspended pending enquiry. Subsistence allowance (50% of wages) must be paid during suspension.' },
                                { step: '2', title: 'Charge Sheet / Show Cause Notice', desc: 'A written document specifying the precise allegations. The employee must receive this formally and have time to respond.' },
                                { step: '3', title: 'Employee\'s Written Response', desc: 'The employee must be given at least 48–72 hours (or as per Standing Orders) to submit a written reply to the charges.' },
                                { step: '4', title: 'Domestic Enquiry', desc: 'A formal, quasi-judicial enquiry where both sides present evidence. The enquiry officer must be unbiased. This step is mandatory for dismissal in Standing Orders-covered establishments.' },
                                { step: '5', title: 'Enquiry Report', desc: 'The enquiry officer submits findings. The employee is given a copy and a chance to comment on the report.' },
                                { step: '6', title: 'Second Show Cause Notice (Final)', desc: 'After the enquiry, the employer issues a final show cause notice about the proposed punishment.' },
                                { step: '7', title: 'Order of Termination/Dismissal', desc: 'A reasoned written order specifying the grounds for dismissal. This cannot be vague or general.' },
                            ].map(s => (
                                <div key={s.step} className="flex gap-4">
                                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{s.step}</span>
                                    <div><p className="font-bold text-gray-900 dark:text-gray-100">{s.title}</p><p className="text-sm text-gray-600 dark:text-gray-400">{s.desc}</p></div>
                                </div>
                            ))}
                        </div>
                        <CalloutBox type="danger" title="Shortcuts = Illegal">
                            Skipping the Show Cause Notice or Domestic Enquiry makes the termination legally invalid. Courts routinely reinstate employees terminated without following due process.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="Retrenchment Rights" icon={Scale} variant="info">
                        <p>Retrenchment is employer-initiated termination due to business reasons (not misconduct). Specific statutory protections apply:</p>
                        <ContentList items={[
                            '1 month\'s notice OR notice pay (salary for 1 month) — for establishments with fewer than 100 workers',
                            '3 months\' notice OR notice pay PLUS prior Government permission — for 100+ worker establishments',
                            'Retrenchment compensation: 15 days\' average pay per completed year of continuous service',
                            '"Last in, First out" principle must be followed — junior employees retrenched first',
                            'Retrenched employees have re-employment priority if the company hires for similar positions within one year',
                        ]} ordered={false} />
                    </ContentSection>

                    <ContentSection title="Layoff Rights" icon={AlertTriangle} variant="warning">
                        <p>A layoff is a <em>temporary</em> inability to provide work due to reasons like power shortage, raw material shortage, or machine breakdown. Different rules apply:</p>
                        <ContentList items={[
                            'Laid-off workmen receive 50% of Basic + DA for each day of layoff',
                            'Layoffs can continue for up to 45 days with compensation; beyond 45 days, employer must either retrench or continue layoff compensation',
                            'For 100+ employee establishments, layoffs beyond 45 days require government permission',
                            'Employees working for less than one year are NOT entitled to layoff compensation',
                            'Employees must present themselves for work — if no work is available, compensation is paid',
                        ]} ordered={false} variant="warning" />
                    </ContentSection>

                    <ContentSection title="Compensation Rights Summary" icon={Banknote} variant="success">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="bg-primary/5">
                                        <th className="px-4 py-3 font-bold text-primary">Type of Exit</th>
                                        <th className="px-4 py-3 font-bold text-primary">Notice</th>
                                        <th className="px-4 py-3 font-bold text-primary">Compensation</th>
                                        <th className="px-4 py-3 font-bold text-primary">Gratuity</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 bg-white dark:bg-gray-950">
                                    <tr><td className="px-4 py-3 font-medium">Retrenchment</td><td className="px-4 py-3">1–3 months</td><td className="px-4 py-3">15 days/year of service</td><td className="px-4 py-3 text-success font-medium">Yes (if 5+ yrs)</td></tr>
                                    <tr><td className="px-4 py-3 font-medium">Dismissal (misconduct)</td><td className="px-4 py-3">None required</td><td className="px-4 py-3">None</td><td className="px-4 py-3 text-warning font-medium">May be forfeited</td></tr>
                                    <tr><td className="px-4 py-3 font-medium">Termination (no fault)</td><td className="px-4 py-3">As per contract</td><td className="px-4 py-3">None (unless negotiated)</td><td className="px-4 py-3 text-success font-medium">Yes (if 5+ yrs)</td></tr>
                                    <tr><td className="px-4 py-3 font-medium">Layoff</td><td className="px-4 py-3">N/A</td><td className="px-4 py-3">50% wages per day</td><td className="px-4 py-3">Continues to accrue</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </ContentSection>

                    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
                        <p className="text-sm text-yellow-800"><strong>Disclaimer:</strong> This content is for educational awareness only and does not constitute legal advice. Consult a qualified labour law professional for your specific situation.</p>
                    </div>

                    <FAQSection faqs={confirmedTerminationFaqs} title="FAQs — Termination After Confirmation" />
                    <InternalLinks currentPath="/termination/after-confirmation" links={terminationRelatedLinks} />
                </div>
            </div>
        </div>
    );
}
