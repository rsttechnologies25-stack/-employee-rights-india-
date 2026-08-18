import React from 'react';
import { Clock, AlertTriangle, Calendar, ExternalLink } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { ContentList, CalloutBox } from '../components/ContentSection';
import { payCycleFaqs } from '../data/salaryData';

const relatedLinks = [
    { title: 'Salary Calculation Methods', subtitle: 'How salary is calculated in India', path: '/salary-calculation' },
    { title: 'Delayed Salary Recovery', subtitle: 'If your salary is withheld', path: '/delayed-salary' },
    { title: 'Full & Final Settlement', subtitle: 'Exit dues timeline', path: '/full-final-settlement' },
];

export default function PayCyclePage() {
    return (
        <div>
            <SEOHead path="/pay-cycle" />
            <PageHero
                title="Pay Cycle & Salary Date Rights"
                subtitle="When must your employer pay salary? Understanding pay cycles, salary credit deadlines, and what to do if your pay date is consistently delayed."
                icon={Calendar}
                gradient="primary"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Salary & Pay', path: '/pay-cycle' },
                        { label: 'Pay Cycle', path: '/pay-cycle' }
                    ]} />

                    <ContentSection title="Legal Salary Payment Deadlines" icon={Clock} variant="success">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div className="p-5 bg-success/5 rounded-xl border border-success/20 text-center">
                                <p className="text-4xl font-black text-success mb-2">7th</p>
                                <p className="font-bold text-gray-800 dark:text-gray-200">Small Establishments</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Less than 1,000 employees</p>
                            </div>
                            <div className="p-5 bg-primary/5 rounded-xl border border-primary/20 text-center">
                                <p className="text-4xl font-black text-primary mb-2">10th</p>
                                <p className="font-bold text-gray-800 dark:text-gray-200">Large Establishments</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">1,000 or more employees</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">These deadlines are under <strong>Section 5 of the Payment of Wages Act, 1936</strong>. Consistently paying after the 7th or 10th is a legal violation.</p>
                    </ContentSection>

                    <ContentSection title="How the Monthly Pay Cycle Works" icon={Calendar} variant="default">
                        <div className="space-y-3">
                            {[
                                { phase: 'Month (1st–Last)', desc: 'Employee works. Attendance and leaves are tracked.' },
                                { phase: '1st–5th of Next Month', desc: 'Payroll team calculates salary, applies deductions (PF, TDS, LOP), runs payroll software.' },
                                { phase: '7th or 10th (latest)', desc: 'Net salary credited to employee bank account.' },
                                { phase: '15th–30th', desc: 'Employer files monthly PF/ESI challans and remits contributions to EPFO/ESIC.' },
                            ].map((p, idx) => (
                                <div key={idx} className="flex gap-4 p-4 bg-white dark:bg-gray-950 rounded-xl border border-gray-100 dark:border-gray-800">
                                    <div className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-bold whitespace-nowrap">{p.phase}</div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    <ContentSection title="Payment of Wages Act — Key Provisions" icon={AlertTriangle} variant="info">
                        <ContentList items={[
                            'Section 3: Employer is responsible for payment of all wages on time',
                            'Section 5: Wages must be paid by 7th or 10th of following month',
                            'Section 7: Only authorized deductions (PF, ESI, TDS, LOP, approved loans) are permitted',
                            'Section 9: Fines from wages must follow a specific procedure and are capped',
                            'Section 15: Employee can apply to the Authority (Labour Inspector) for recovery of withheld/unauthorized deductions',
                            'Section 20: Employer is liable to pay compensation (up to 10x the deducted amount) for unauthorized deductions',
                        ]} ordered={false} />
                        <CalloutBox type="tip" title="Who is Covered?">
                            The Payment of Wages Act applies to employees earning up to a wage ceiling (₹24,000/month as of recent amendments). Employees above this ceiling are governed by their employment contract and general civil law for wage recovery.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="Is Salary Hold Legal?" icon={AlertTriangle} variant="danger">
                        <p>No. Holding back salary as leverage is illegal. Common employer excuses vs. the legal reality:</p>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full text-sm">
                                <thead><tr className="bg-gray-50 dark:bg-gray-900"><th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300 font-bold">Employer's Claim</th><th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300 font-bold">Legal Reality</th></tr></thead>
                                <tbody className="divide-y divide-gray-100 bg-white dark:bg-gray-950">
                                    <tr><td className="px-4 py-3">"Salary on hold until handover is complete"</td><td className="px-4 py-3 text-danger font-medium">Illegal — salary must be paid, handover is separate</td></tr>
                                    <tr><td className="px-4 py-3">"Hold until you sign the NDAs and clearance"</td><td className="px-4 py-3 text-danger font-medium">Illegal — coercion through salary hold</td></tr>
                                    <tr><td className="px-4 py-3">"Cash flow problem, will pay next month"</td><td className="px-4 py-3 text-danger font-medium">Not a legal excuse — employer is liable regardless</td></tr>
                                    <tr><td className="px-4 py-3">"Holding salary to recover training costs"</td><td className="px-4 py-3 text-danger font-medium">Illegal without a valid signed training bond agreement</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </ContentSection>

                    <ContentSection title="Salary Slip Requirements" icon={Clock} variant="success">
                        <ContentList items={[
                            'Must include employee name, designation, month/year',
                            'Gross earnings breakdown: Basic, HRA, DA, all allowances',
                            'All deductions: PF, ESI, TDS, LOP, loan recovery (with amounts)',
                            'Net pay (take-home)',
                            'Days worked and days absent',
                            'Employer must issue salary slips — failure to do so is a violation',
                            'Digital payslips (email/portal) are legally valid',
                        ]} ordered={false} variant="success" />
                    </ContentSection>

                    <div className="bg-gray-900 text-white p-6 rounded-xl flex items-center justify-between gap-4 mb-8">
                        <div>
                            <p className="font-bold mb-1">Report Salary Delay — Shram Suvidha Portal</p>
                            <p className="text-gray-400 text-sm">Official Labour Ministry complaint system</p>
                        </div>
                        <a href="https://shramsuvidha.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-accent-dark transition-colors shrink-0">
                            File Complaint <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
                        <p className="text-sm text-yellow-800"><strong>Disclaimer:</strong> Educational content only. For specific advice, consult a labour law professional.</p>
                    </div>

                    <FAQSection faqs={payCycleFaqs} title="FAQs — Pay Cycle & Salary Dates" />
                    <InternalLinks currentPath="/pay-cycle" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
