import { ShieldAlert, Users, Scale, AlertTriangle, FileText } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { CalloutBox } from '../components/ContentSection';
import { poshFaqs } from '../data/womensRightsData';

const relatedLinks = [
    { title: 'Maternity Benefits', subtitle: 'Leave & protections', path: '/maternity-rights' },
    { title: 'Illegal Practices', subtitle: 'Reporting employer violations', path: '/illegal-practices' },
    { title: 'Letter Templates', subtitle: 'Formal complaint formats', path: '/templates' },
];

export default function POSHActPage() {
    return (
        <div>
            <SEOHead path="/posh-act" />
            <PageHero
                title="POSH Act (Prevention of Sexual Harassment)"
                subtitle="Understanding your rights, the Internal Complaints Committee (ICC), and the legal process for filing a complaint."
                icon={ShieldAlert}
                gradient="danger"
            />
            <div className="py-12 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Women\'s Rights', path: '/maternity-rights' }, { label: 'POSH Act', path: '/posh-act' }]} />

                    <ContentSection title="What Constitutes Harassment?" icon={AlertTriangle} variant="danger">
                        <div className="space-y-4">
                            <p className="text-gray-700">Under the POSH Act, 2013, sexual harassment includes any one or more of the following unwelcome acts or behavior (whether directly or by implication):</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                {[
                                    'Physical contact and advances',
                                    'A demand or request for sexual favors',
                                    'Making sexually colored remarks',
                                    'Showing pornography or inappropriate imagery',
                                    'Any other unwelcome physical, verbal or non-verbal conduct of sexual nature'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-3 rounded-lg border border-gray-100 flex gap-2 items-start shadow-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-danger mt-2 shrink-0" />
                                        <span className="text-sm text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <CalloutBox type="warning" title="Hostile Work Environment">
                                If harassment creates an intimidating, offensive, or hostile work environment, or if there is an implied promise of preferential treatment or threat of detrimental treatment, it is fully covered under the Act.
                            </CalloutBox>
                        </div>
                    </ContentSection>

                    <ContentSection title="The Internal Complaints Committee (ICC)" icon={Users} variant="info">
                        <div className="space-y-4">
                            <p className="text-gray-700">Every organization with <strong>10 or more employees</strong> is legally required to constitute an Internal Complaints Committee (ICC). If your company does not have one, they are liable for a ₹50,000 fine and cancellation of their business license.</p>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-4">Mandatory ICC Composition:</h3>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-center gap-2"><span className="w-5 h-5 rounded bg-primary/10 text-primary flex items-center justify-center font-bold">1</span> <strong>Presiding Officer:</strong> Must be a senior-level woman employee at the workplace.</li>
                                    <li className="flex items-center gap-2"><span className="w-5 h-5 rounded bg-primary/10 text-primary flex items-center justify-center font-bold">2</span> <strong>Internal Members:</strong> At least two employees committed to the cause of women or with legal knowledge.</li>
                                    <li className="flex items-center gap-2"><span className="w-5 h-5 rounded bg-primary/10 text-primary flex items-center justify-center font-bold">3</span> <strong>External Member:</strong> One member from an NGO or an expert familiar with issues of sexual harassment.</li>
                                </ul>
                                <p className="mt-4 text-sm font-bold text-primary bg-primary/5 p-2 rounded">Note: At least 50% of the total ICC members must be women.</p>
                            </div>
                        </div>
                    </ContentSection>

                    <ContentSection title="Complaint & Inquiry Process" icon={Scale} variant="default">
                        <div className="space-y-6">
                            <div className="relative border-l-2 border-primary/30 pl-6 pb-6">
                                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                                <h4 className="font-bold text-gray-900">1. Filing the Complaint</h4>
                                <p className="text-sm text-gray-600 mt-1">Submit a written complaint to the ICC within 3 months of the incident. You can request assistance from the ICC if you cannot write it yourself.</p>
                            </div>
                            <div className="relative border-l-2 border-primary/30 pl-6 pb-6">
                                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                                <h4 className="font-bold text-gray-900">2. Conciliation (Optional)</h4>
                                <p className="text-sm text-gray-600 mt-1">Before initiating an inquiry, the ICC may attempt to settle the matter through conciliation, BUT ONLY if you explicitly request it. No monetary settlement can be made the basis of conciliation.</p>
                            </div>
                            <div className="relative border-l-2 border-primary/30 pl-6 pb-6">
                                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                                <h4 className="font-bold text-gray-900">3. Inquiry & Interim Relief</h4>
                                <p className="text-sm text-gray-600 mt-1">The ICC must complete the inquiry within 90 days. During this time, you can request interim relief such as a transfer for yourself or the respondent, or up to 3 months of paid leave.</p>
                            </div>
                            <div className="relative border-l-2 border-transparent pl-6">
                                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                                <h4 className="font-bold text-gray-900">4. Action & Report</h4>
                                <p className="text-sm text-gray-600 mt-1">The ICC submits its report within 10 days of completion. If proven guilty, the employer must act upon the ICC's recommendations (termination, deduction of compensation from salary, written apology, etc.) within 60 days.</p>
                            </div>
                        </div>
                    </ContentSection>

                    <FAQSection faqs={poshFaqs} title="POSH Act FAQs" />
                    <InternalLinks currentPath="/posh-act" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
