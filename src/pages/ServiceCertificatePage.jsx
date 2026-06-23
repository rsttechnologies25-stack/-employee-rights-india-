import { Award, AlertTriangle, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { ContentList, CalloutBox } from '../components/ContentSection';
import { serviceCertificateFaqs } from '../data/lettersData';

const relatedLinks = [
    { title: 'Experience Letter Rights', subtitle: 'Employment certificate guide', path: '/experience-letter' },
    { title: 'Relieving Letter Rights', subtitle: 'Relieving letter obligations', path: '/relieving-letter' },
    { title: 'Exit Process & Documents', subtitle: 'Full exit document guide', path: '/exit-process' },
];

const stateRules = [
    { state: 'Maharashtra', rule: 'Maharashtra Shops & Establishments Act requires service certificate on separation' },
    { state: 'Karnataka', rule: 'Karnataka S&E Act mandates service certificate at termination' },
    { state: 'Tamil Nadu', rule: 'Tamil Nadu S&E Act — service certificate required within a specified period' },
    { state: 'Telangana', rule: 'Telangana S&E Act — mandatory service certificate provision' },
    { state: 'Andhra Pradesh', rule: 'AP S&E Act — service certificate upon exit' },
    { state: 'Kerala', rule: 'Kerala S&E Act — service certificate required for all commercial establishments' },
    { state: 'Gujarat', rule: 'Gujarat S&E Act contains provisions for service certificate issuance' },
    { state: 'Delhi', rule: 'Delhi Shops & Establishments Act provisions include service certificate rights' },
];

export default function ServiceCertificatePage() {
    return (
        <div>
            <SEOHead path="/service-certificate" />
            <PageHero
                title="Service Certificate Rights"
                subtitle="State labour law requirements for service certificates — what states mandate it, how it differs from an experience letter, and remedies when denied."
                icon={Award}
                gradient="primary"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Letters & Documents', path: '/service-certificate' },
                        { label: 'Service Certificate', path: '/service-certificate' }
                    ]} />

                    <ContentSection title="What is a Service Certificate?" icon={Award} variant="info">
                        <p>A service certificate is an official document issued under state Shops & Establishments Acts when an employee separates from an organization. It is a <strong>statutory document</strong> (legally mandated in applicable states) unlike an experience letter, which is a common practice but not always explicitly mandated.</p>
                        <ContentList items={[
                            'Confirms the period of employment (joining to last working date)',
                            'States the nature of work or designation',
                            'Records the employee\'s conduct (in some state formats)',
                            'Serves as official proof of employment under state labour law',
                            'Can be used for provident fund claims, ESI, and future employment',
                        ]} ordered={false} />
                    </ContentSection>

                    <ContentSection title="Service Certificate vs Experience Letter" icon={Award} variant="default">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="bg-primary/5">
                                        <th className="px-4 py-3 font-bold text-primary">Aspect</th>
                                        <th className="px-4 py-3 font-bold text-primary">Service Certificate</th>
                                        <th className="px-4 py-3 font-bold text-primary">Experience Letter</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 bg-white dark:bg-gray-950">
                                    <tr><td className="px-4 py-3">Legal Basis</td><td className="px-4 py-3">State S&E Acts (statutory)</td><td className="px-4 py-3">Common practice / company policy</td></tr>
                                    <tr><td className="px-4 py-3">Mandatory?</td><td className="px-4 py-3 text-success font-medium">Yes (in applicable states)</td><td className="px-4 py-3 text-gray-500 dark:text-gray-400">Generally expected, not always mandated</td></tr>
                                    <tr><td className="px-4 py-3">Content</td><td className="px-4 py-3">Tenure, nature of work, conduct</td><td className="px-4 py-3">Tenure, designation, role highlights</td></tr>
                                    <tr><td className="px-4 py-3">Format</td><td className="px-4 py-3">Often prescribed by state authority</td><td className="px-4 py-3">Company's own format</td></tr>
                                    <tr><td className="px-4 py-3">Enforcement</td><td className="px-4 py-3">Labour Inspector can compel issuance</td><td className="px-4 py-3">Via Labour Commissioner/court</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <CalloutBox type="info" title="Practical Tip">
                            In practice, most employers issue an experience letter that covers what a service certificate would contain. If your state mandates a service certificate, you can specifically ask for one — especially if you need to claim ESI or PF benefits.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="States with Explicit Statutory Requirements" icon={MapPin} variant="success">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {stateRules.map((s, idx) => (
                                <div key={idx} className="p-4 bg-white dark:bg-gray-950 rounded-xl border border-success/20">
                                    <p className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-1">{s.state}</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{s.rule}</p>
                                </div>
                            ))}
                        </div>
                        <CalloutBox type="warning" title="Note">
                            Labour laws are subject to frequent amendments. Verify with your state labour department or a labour lawyer for the most current requirements in your state.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="What to Do if Denied a Service Certificate" icon={AlertTriangle} variant="warning">
                        <ContentList items={[
                            'Send a formal written request citing your state\'s Shops & Establishments Act provision',
                            'Give the employer 7–10 working days to comply',
                            'File a complaint with the local Labour Inspector — they have authority to enforce S&E Act compliance',
                            'Simultaneously send a legal notice through an advocate',
                            'Approach the Labour Commissioner for conciliation if the Inspector\'s intervention does not resolve the matter',
                        ]} ordered={true} variant="warning" />
                    </ContentSection>

                    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
                        <p className="text-sm text-yellow-800"><strong>Disclaimer:</strong> This content is for educational awareness only. State laws vary. Consult a labour law professional for advice specific to your state and situation.</p>
                    </div>

                    <FAQSection faqs={serviceCertificateFaqs} title="FAQs — Service Certificate" />
                    <InternalLinks currentPath="/service-certificate" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
