import { FileText, AlertCircle, Building2, HelpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { CalloutBox } from '../components/ContentSection';
import { taxFaqs } from '../data/taxData';

const relatedLinks = [
    { title: 'Salary Calculation Rules', subtitle: 'How pay is structured', path: '/salary-calculation' },
    { title: 'Delayed Salary Rights', subtitle: 'Recover unpaid dues', path: '/delayed-salary' },
];

export default function Form16RightsPage() {
    return (
        <div>
            <SEOHead path="/form-16-rights" />
            <PageHero
                title="Form 16 & TDS Rights"
                subtitle="Your employer's legal obligation to issue Form 16, what happens when TDS is deducted but not deposited, and your tax rights."
                icon={FileText}
                gradient="primary"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Salary & Pay', path: '/salary-calculation' }, { label: 'Form 16 Rights', path: '/form-16-rights' }]} />

                    <ContentSection title="Employer's Legal Obligation" icon={Building2} variant="info">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">Under the Income Tax Act, Form 16 is a certificate of deduction of tax at source (TDS) issued on your salary. It is a vital document for filing your Income Tax Return (ITR).</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                <div className="bg-white dark:bg-gray-950 p-5 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100">Deadline for Issuance</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Your employer is legally mandated to issue Form 16 by <strong>June 15th</strong> of the financial year immediately following the financial year in which the tax was deducted.</p>
                                </div>
                                <div className="bg-white dark:bg-gray-950 p-5 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100">Penalty for Non-Compliance</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">If your employer fails to issue Form 16, they are liable for a penalty of <strong>₹100 per day</strong> for every day the default continues, under Section 272A(2)(g).</p>
                                </div>
                            </div>
                        </div>
                    </ContentSection>

                    <ContentSection title="What to do if TDS is deducted but NOT deposited?" icon={AlertCircle} variant="danger">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">One of the most severe frauds an employer can commit is deducting tax from your salary but failing to deposit it with the Income Tax Department. You will know this has happened if the TDS shown on your payslips does not reflect in your <strong>Form 26AS</strong>.</p>
                            
                            <div className="bg-danger/5 p-6 rounded-xl border border-danger/20">
                                <h3 className="font-bold text-danger mb-3">CBDT Directive (O.M. 275/29/2014)</h3>
                                <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                                    The Central Board of Direct Taxes (CBDT) has clarified that assessing officers <strong>cannot demand the tax from the employee</strong> if the employer has failed to deposit the deducted tax. The legal action for recovery and prosecution lies solely against the employer.
                                </p>
                            </div>

                            <h4 className="font-bold text-gray-900 dark:text-gray-100 mt-6">Steps to Protect Yourself:</h4>
                            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">1</div>
                                    <p>Retain all your monthly payslips showing the TDS deductions.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">2</div>
                                    <p>File your ITR claiming the TDS based on your payslips.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">3</div>
                                    <p>When you receive an automated demand notice from the IT department due to the mismatch, reply to it by attaching your payslips and citing CBDT O.M. 275/29/2014.</p>
                                </li>
                            </ul>
                        </div>
                    </ContentSection>

                    <ContentSection title="Filing ITR without Form 16" icon={HelpCircle} variant="default">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">If your employer has shut down, refuses to issue Form 16, or you simply lost it, you <strong>can</strong> still file your income tax returns legally.</p>
                            
                            <CalloutBox type="success" title="Required Documents for filing without Form 16">
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                                    <li>All monthly payslips for the financial year.</li>
                                    <li><strong>Form 26AS</strong> (downloaded from the IT portal).</li>
                                    <li><strong>Annual Information Statement (AIS)</strong>.</li>
                                    <li>Bank statements showing credited salary.</li>
                                    <li>Rent receipts and investment proofs (80C, 80D, etc.) to claim deductions manually.</li>
                                </ul>
                            </CalloutBox>
                        </div>
                    </ContentSection>

                    <FAQSection faqs={taxFaqs} title="TDS & Form 16 FAQs" />
                    <InternalLinks currentPath="/form-16-rights" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
