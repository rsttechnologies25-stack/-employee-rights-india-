import { Mail, AlertTriangle, ShieldAlert, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { ContentList, CalloutBox } from '../components/ContentSection';
import { relievingLetterFaqs } from '../data/lettersData';

const relatedLinks = [
    { title: 'Experience Letter Rights', subtitle: 'Employment certificate guide', path: '/experience-letter' },
    { title: 'Service Certificate', subtitle: 'State law requirements', path: '/service-certificate' },
    { title: 'Exit Process & Documents', subtitle: 'Full exit document guide', path: '/exit-process' },
    { title: 'Full & Final Settlement', subtitle: 'Your dues on exit', path: '/full-final-settlement' },
    { title: 'Letter Templates', subtitle: 'Relieving letter request template', path: '/templates' },
];

export default function RelievingLetterPage() {
    const scenarios = [
        { title: 'Short Notice Period', desc: 'Employer holds relieving letter because you left before the full notice period. This is used as coercion — it is not a valid legal remedy. The employer\'s proper recourse is notice pay recovery from F&F, not document withholding.', resolution: 'File for the letter and recover damages via Labour Commissioner.' },
        { title: 'Pending F&F Disputes', desc: 'Employer refuses to issue relieving letter until you sign a disputed F&F settlement or waive claims.', resolution: 'You are entitled to a relieving letter independent of F&F disputes. File complaint with Labour Commissioner.' },
        { title: 'Pending Project Handover', desc: 'Employer insists on full project handover before issuing the letter.', resolution: 'Reasonable handover is expected, but cannot be used to indefinitely delay your relieving letter beyond your last working day.' },
        { title: 'Company Assets Not Returned', desc: 'Employer holds the letter until assets are returned.', resolution: 'Return assets promptly with signed acknowledgement. If assets were returned and letter is still withheld, escalate legally.' },
    ];

    return (
        <div>
            <SEOHead path="/relieving-letter" />
            <PageHero
                title="Relieving Letter Rights"
                subtitle="Your right to a relieving letter, employer obligations, common disputes and how to get your letter if it is being withheld."
                icon={Mail}
                gradient="primary"
            />
            <div className="py-12 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Letters & Documents', path: '/relieving-letter' },
                        { label: 'Relieving Letter', path: '/relieving-letter' }
                    ]} />

                    <ContentSection title="What is a Relieving Letter?" icon={Mail} variant="info">
                        <p>A relieving letter is an official document issued by an employer when an employee formally leaves the organization. It confirms:</p>
                        <ContentList items={[
                            'That the employee has been formally relieved from all duties',
                            'The employee\'s last working day',
                            'That all dues have been settled (or are in process)',
                            'That the employee is free to join another organization',
                        ]} ordered={false} />
                        <CalloutBox type="info">
                            Most new employers require a relieving letter as proof that you have formally separated from your previous organization before allowing you to join. Without it, your background verification (BGV) may fail.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="Employer Obligations" icon={CheckCircle2} variant="success">
                        <ContentList items={[
                            'Issue the relieving letter on or immediately after the last working day',
                            'The letter must be on company letterhead and signed by an authorized person',
                            'Cannot unreasonably delay issuance without a specific, documented reason',
                            'Cannot permanently withhold as a punitive measure or leverage for disputes',
                            'Must issue even if the employee left on short notice (notice pay can be recovered from F&F separately)',
                            'Must issue even during pending F&F disputes (F&F is a separate process)',
                        ]} ordered={false} variant="success" />
                    </ContentSection>

                    <ContentSection title="Common Disputes & Resolutions" icon={ShieldAlert} variant="warning">
                        <div className="space-y-4">
                            {scenarios.map((s, idx) => (
                                <div key={idx} className="p-5 bg-white rounded-xl border border-gray-100">
                                    <p className="font-bold text-gray-900 mb-2">{s.title}</p>
                                    <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                                    <div className="p-3 bg-success/5 rounded-lg border border-success/20">
                                        <span className="text-xs font-bold text-success uppercase">Resolution: </span>
                                        <span className="text-xs text-gray-700">{s.resolution}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    <ContentSection title="If Your Employer Refuses to Issue It" icon={AlertTriangle} variant="danger">
                        <ContentList items={[
                            'Send a formal written email request to HR requesting the letter within a specific deadline (7 days)',
                            'Send a reminder/escalation to the HR Head if no response',
                            'Have a lawyer send a legal notice demanding issuance within 15 days',
                            'File a complaint with the Labour Commissioner under your state\'s Shops & Establishments Act',
                            'Approach the Labour Court citing the withheld letter as an unfair labour practice',
                            'Include a claim for damages caused by the delay (e.g., inability to join new employer)',
                        ]} ordered={true} variant="danger" />
                    </ContentSection>

                    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
                        <p className="text-sm text-yellow-800"><strong>Disclaimer:</strong> This is educational content only. Consult a qualified labour law professional for your specific situation.</p>
                    </div>

                    <FAQSection faqs={relievingLetterFaqs} title="FAQs — Relieving Letter" />
                    <InternalLinks currentPath="/relieving-letter" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
