import { FileText, AlertTriangle, CheckCircle2, ExternalLink } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { ContentList, CalloutBox } from '../components/ContentSection';
import { experienceLetterFaqs } from '../data/lettersData';

const relatedLinks = [
    { title: 'Relieving Letter Rights', subtitle: 'Relieving letter employer obligations', path: '/relieving-letter' },
    { title: 'Service Certificate', subtitle: 'State law requirements', path: '/service-certificate' },
    { title: 'Exit Process & Documents', subtitle: 'Full document collection guide', path: '/exit-process' },
    { title: 'Full & Final Settlement', subtitle: 'All dues on exit', path: '/full-final-settlement' },
    { title: 'Letter Templates', subtitle: 'Request letter templates', path: '/templates' },
];

export default function ExperienceLetterPage() {
    return (
        <div>
            <SEOHead path="/experience-letter" />
            <PageHero
                title="Experience Letter Rights"
                subtitle="Is your employer legally required to give you an experience letter? What to do if they refuse — and what the letter must contain."
                icon={FileText}
                gradient="primary"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Letters & Documents', path: '/experience-letter' },
                        { label: 'Experience Letter', path: '/experience-letter' }
                    ]} />

                    <ContentSection title="What is an Experience Letter?" icon={FileText} variant="info">
                        <p>An experience letter (also called an "employment certificate" or "service letter") is an official document issued by an employer confirming:</p>
                        <ContentList items={[
                            'Employee\'s full name and employee ID',
                            'Joining date and last working date',
                            'Designation(s) held during employment',
                            'Brief description of roles and responsibilities',
                            'A statement of satisfactory performance or conduct (optional but common)',
                        ]} ordered={false} />
                        <CalloutBox type="info">
                            An experience letter is different from a relieving letter. A relieving letter confirms formal separation from the company. An experience letter certifies your tenure and role.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="Is the Employer Legally Required to Provide It?" icon={CheckCircle2} variant="success">
                        <p>There is no single central statute universally mandating experience letters for all private-sector employees. However:</p>
                        <ContentList items={[
                            'Several state Shops & Establishments Acts require employers to issue a service certificate upon separation (effectively an experience letter)',
                            'Karnataka S&E Act, Tamil Nadu S&E Act, Maharashtra S&E Act — all have provisions for service certificates',
                            'Courts have recognized the employee\'s right to receive employment proof documents',
                            'Withholding it to coerce or punish the employee has been held to be improper by various High Courts',
                            'Most HR professionals acknowledge it as a standard obligation',
                        ]} ordered={false} variant="success" />
                        <CalloutBox type="warning" title="Key States with Explicit Requirements">
                            Maharashtra, Karnataka, Tamil Nadu, Telangana, Andhra Pradesh, Kerala — all have state-level provisions requiring employers to provide service certificates. The specific wording and timelines vary.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="What to Do If Your Employer Refuses" icon={AlertTriangle} variant="warning">
                        <ContentList items={[
                            'Step 1: Send a formal written email request to HR specifically asking for the experience letter',
                            'Step 2: Wait 7–10 working days for a response',
                            'Step 3: If no response, escalate to the HR Head or a Director in writing',
                            'Step 4: Send a legal notice through an advocate demanding issuance within 15 days',
                            'Step 5: File a complaint with the Labour Commissioner / Inspector under your state\'s S&E Act',
                            'Step 6: For companies registered under the Factory Act, the Labour Inspector can take cognizance',
                        ]} ordered={true} variant="warning" />
                        <CalloutBox type="tip" title="Document Everything">
                            Keep copies of all email requests and responses. This paper trail is essential if you need to escalate the matter legally.
                        </CalloutBox>
                    </ContentSection>

                    <ContentSection title="What the Letter Should Contain" icon={FileText} variant="default">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: 'Employee Full Name', required: true },
                                { label: 'Employee ID', required: true },
                                { label: 'Date of Joining', required: true },
                                { label: 'Last Working Date', required: true },
                                { label: 'Designation(s) / Role(s)', required: true },
                                { label: 'Department / Function', required: false },
                                { label: 'Brief Role Description', required: false },
                                { label: 'Company Letterhead', required: true },
                                { label: 'Authorized Signatory', required: true },
                                { label: 'Company Seal / Stamp', required: false },
                            ].map((item, idx) => (
                                <div key={idx} className={`p-3 rounded-lg flex items-center gap-2 ${item.required ? 'bg-success/5 border border-success/20' : 'bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800'}`}>
                                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${item.required ? 'text-success' : 'text-gray-300'}`} />
                                    <div>
                                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.label}</span>
                                        {item.required && <span className="ml-2 text-[10px] text-success font-semibold">REQUIRED</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    <div className="bg-gray-900 text-white p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <p className="font-bold mb-1">Need a request letter template?</p>
                            <p className="text-gray-400 text-sm">Download a ready-to-use experience letter request template</p>
                        </div>
                        <a href="/templates" className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-accent-dark transition-colors shrink-0">
                            Get Template <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0" />
                        <p className="text-sm text-yellow-800"><strong>Disclaimer:</strong> This content is for educational awareness only. Laws vary by state. Consult a labour law professional for your specific situation.</p>
                    </div>

                    <FAQSection faqs={experienceLetterFaqs} title="FAQs — Experience Letter" />
                    <InternalLinks currentPath="/experience-letter" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
