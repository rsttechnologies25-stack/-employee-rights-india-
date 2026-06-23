import { ShieldAlert, FileText, Scale, ExternalLink, AlertTriangle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { ContentList, CalloutBox } from '../components/ContentSection';
import { wrongfulTerminationFaqs, terminationRelatedLinks } from '../data/terminationData';

export default function WrongfulTerminationPage() {
    const illegalExamples = [
        { title: 'Pregnancy Discrimination', desc: 'Terminating a pregnant employee or one on maternity leave. Prohibited under the Maternity Benefit Act.' },
        { title: 'No Due Process', desc: 'Dismissing for misconduct without a Show Cause Notice or Domestic Enquiry.' },
        { title: 'Whistleblower Retaliation', desc: 'Firing an employee for reporting legal violations or safety issues.' },
        { title: 'Discriminatory Grounds', desc: 'Termination based on religion, caste, gender, or disability.' },
        { title: 'No Notice / Notice Pay', desc: 'Terminating confirmed employees with zero notice or pay in lieu.' },
        { title: 'Constructive Dismissal', desc: 'Making conditions so unbearable the employee is forced to resign.' },
        { title: 'Retrenchment Without Compliance', desc: 'Large companies retrenching without government permission or proper compensation.' },
        { title: 'Gratuity Avoidance', desc: 'Terminating an employee just before they complete 5 years of service to deny gratuity.' },
    ];

    const complaintSteps = [
        { step: '1', title: 'Collect Evidence', desc: 'Gather all documents: appointment letter, termination letter, communications, payslips, witnesses.' },
        { step: '2', title: 'Written Dispute to HR', desc: 'Send a formal email to HR disputing the termination and requesting reasons in writing.' },
        { step: '3', title: 'Labour Commissioner Complaint', desc: 'File a complaint with the Assistant Labour Commissioner (ALC) in your district. This initiates conciliation.' },
        { step: '4', title: 'Legal Notice', desc: 'Engage a labour lawyer to send a formal legal notice to the employer demanding reinstatement or compensation.' },
        { step: '5', title: 'Labour Court / Industrial Tribunal', desc: 'If conciliation fails, the matter is referred to Labour Court (for individual workmen) or Industrial Tribunal for adjudication.' },
    ];

    return (
        <div>
            <SEOHead path="/termination/wrongful" />
            <PageHero
                title="Wrongful Termination Rights"
                subtitle="Examples of illegal termination in India, employee remedies, and how to file a complaint with labour authorities."
                icon={ShieldAlert}
                gradient="danger"
            />
            <div className="py-12 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Termination', path: '/termination/wrongful' },
                        { label: 'Wrongful Termination', path: '/termination/wrongful' }
                    ]} />

                    <ContentSection title="Examples of Illegal / Wrongful Termination" icon={ShieldAlert} variant="danger">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {illegalExamples.map((ex, idx) => (
                                <div key={idx} className="p-4 bg-white rounded-xl border border-danger/20 flex gap-3">
                                    <span className="text-danger font-bold text-xl shrink-0">✗</span>
                                    <div>
                                        <p className="font-bold text-sm text-gray-900">{ex.title}</p>
                                        <p className="text-xs text-gray-600 mt-1">{ex.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    <ContentSection title="Your Legal Remedies" icon={Scale} variant="success">
                        <ContentList items={[
                            'Reinstatement with full back wages (from termination date to reinstatement date)',
                            'Reinstatement with partial back wages (if both parties share some fault)',
                            'Compensation in lieu of reinstatement (lump sum if returning is not practical)',
                            'Retrenchment compensation + damages for wrongful retrenchment',
                            'Damages for mental harassment, defamation, or malicious termination',
                            'Recovery of all F&F dues including gratuity, leave encashment, and pending salary',
                        ]} ordered={false} variant="success" />
                        <CalloutBox type="info" title="Who is Protected">
                            "Workmen" (non-managerial, non-supervisory employees) under the Industrial Disputes Act have the strongest protections, including reinstatement rights. Managerial employees rely more on contract terms and civil court remedies.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="Step-by-Step: How to File a Labour Complaint" icon={FileText} variant="info">
                        <div className="space-y-4">
                            {complaintSteps.map(s => (
                                <div key={s.step} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100">
                                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{s.step}</span>
                                    <div>
                                        <p className="font-bold text-gray-900">{s.title}</p>
                                        <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    <ContentSection title="Documents to Collect Immediately" icon={FileText} variant="warning">
                        <ContentList items={[
                            'Appointment/Offer Letter — proof of terms agreed at joining',
                            'Termination Letter / Email — the employer\'s formal communication',
                            'Last 12 months\' Salary Slips — proves your employment and earnings',
                            'Show Cause Notice & Your Response — if any disciplinary action was initiated',
                            'Performance Appraisal Records — useful in PIP-based termination challenges',
                            'All HR/Manager Email Communications — especially any that show the real reason',
                            'Witness Contact Information — colleagues who observed the termination circumstances',
                            'F&F Statement — to verify dues are correctly calculated',
                        ]} ordered={false} variant="warning" />
                    </ContentSection>

                    <div className="bg-gray-900 text-white p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <p className="font-bold mb-1">File a complaint with Labour Ministry</p>
                            <p className="text-gray-400 text-sm">Shram Suvidha Portal — Official Online Labour Complaint System</p>
                        </div>
                        <a href="https://shramsuvidha.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-accent-dark transition-colors shrink-0">
                            File Complaint <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
                        <p className="text-sm text-yellow-800"><strong>Disclaimer:</strong> This content is for educational awareness only. For your specific situation, consult a qualified labour law professional.</p>
                    </div>

                    <FAQSection faqs={wrongfulTerminationFaqs} title="FAQs — Wrongful Termination" />
                    <InternalLinks currentPath="/termination/wrongful" links={terminationRelatedLinks} />
                </div>
            </div>
        </div>
    );
}
