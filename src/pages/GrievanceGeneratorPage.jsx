import { useState, useMemo } from 'react';
import { FileText, Copy, Download, Check, AlertOctagon, Info, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import InternalLinks from '../components/InternalLinks';
import FAQSection from '../components/FAQSection';

const categories = [
    { id: 'salary', label: 'Unpaid/Delayed Salary' },
    { id: 'letters', label: 'Withheld Letters (Relieving/Experience)' },
    { id: 'pf', label: 'Un-deposited PF (Provident Fund)' },
    { id: 'termination', label: 'Wrongful Termination' },
];

export default function GrievanceGeneratorPage() {
    const [selectedCategory, setSelectedCategory] = useState('salary');
    const [copied, setCopied] = useState(false);

    // Form inputs
    const [empName, setEmpName] = useState('');
    const [empEmail, setEmpEmail] = useState('');
    const [empPhone, setEmpPhone] = useState('');
    const [compName, setCompName] = useState('');
    const [compAddress, setCompAddress] = useState('');
    const [designation, setDesignation] = useState('');
    
    // Category-specific inputs
    const [joinDate, setJoinDate] = useState('');
    const [exitDate, setExitDate] = useState('');
    const [outstandingAmount, setOutstandingAmount] = useState('');
    const [unpaidMonths, setUnpaidMonths] = useState('');
    const [uan, setUan] = useState('');
    const [pfMemberId, setPfMemberId] = useState('');
    const [noticeServed, setNoticeServed] = useState('yes');
    const [terminationDate, setTerminationDate] = useState('');
    const [terminationReason, setTerminationReason] = useState('');

    // Generate customized grievance draft
    const grievanceDraft = useMemo(() => {
        const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
        const name = empName || '[Your Name]';
        const email = empEmail || '[Your Email]';
        const phone = empPhone || '[Your Phone Number]';
        const company = compName || '[Company Name]';
        const address = compAddress || '[Company Address]';
        const role = designation || '[Your Designation]';

        let body = '';

        if (selectedCategory === 'salary') {
            body = `To,
The Assistant Labour Commissioner / Labour Inspector,
Office of the Labour Commissioner,
[District/Region Office]

Date: ${today}

Subject: Formal Complaint under Section 15 of the Payment of Wages Act, 1936 regarding non-payment/delayed payment of salary by ${company}.

Respected Sir/Madam,

I am writing to bring to your immediate notice a serious violation of my statutory labor rights by my employer, ${company}, located at ${address}.

I was employed with the company as a ${role} from ${joinDate || '[Join Date]'} until ${exitDate || 'present'}. My last drawn monthly basic salary (+ DA) was ₹${outstandingAmount || '[Monthly Salary]'}.

The employer has failed to pay my salary for the month(s) of ${unpaidMonths || '[Unpaid Month(s), e.g. May & June 2026]'}, amounting to a total outstanding sum of ₹${outstandingAmount ? (parseFloat(outstandingAmount) * (unpaidMonths.split(',').length || 1)).toLocaleString('en-IN') : '[Total Dues]'}.

This is a direct violation of Section 5 of the Payment of Wages Act, 1936, which mandates that wages must be paid before the 7th day (or 10th day for larger firms) of the succeeding month. Furthermore, holding salary is an illegal practice that has caused me severe financial distress and mental agony.

I request your office to intervene immediately, summon the employer, and direct them to release my outstanding salary of ₹${outstandingAmount ? (parseFloat(outstandingAmount) * (unpaidMonths.split(',').length || 1)).toLocaleString('en-IN') : '[Total Dues]'} along with 10x compensation as provided under Section 15(3) of the Payment of Wages Act.

I have attached my appointment letter, pay slips, and bank statements showing the unpaid period as evidence.

Yours faithfully,

__________________
Name: ${name}
Email: ${email}
Phone: ${phone}
UAN/PF ID: ${uan || '[UAN/PF ID, if applicable]'}`;

        } else if (selectedCategory === 'letters') {
            body = `To,
The Labour Inspector / Controlling Authority,
Shops & Establishments Act Department,
[District/Region Office]

Date: ${today}

Subject: Complaint regarding withholding of Relieving Letter, Experience Certificate, and service records by ${company}.

Respected Sir/Madam,

I am writing to file a formal complaint against my former employer, ${company}, located at ${address}, for unlawfully withholding my Relieving Letter, Experience Letter, and service records.

I worked with the company as a ${role} from ${joinDate || '[Join Date]'} to ${exitDate || '[Exit Date]'}. I resigned from my services on [Resignation Date] and served my notice period of ${noticeServed === 'yes' ? 'fully' : 'as required under contract'}.

Despite completing my handover and serving the notice period properly, the HR and management of the company have refused to issue my Relieving Letter and Experience Certificate.

Under the state Shops & Establishments Act, experience and service certificates are the statutory property of an employee and must be issued upon separation to facilitate future employment. Withholding these documents is an act of harassment and a restraint of my trade and livelihood under Section 27 of the Indian Contract Act, 1872.

I request your office to issue a directive to ${company} to immediately release my Relieving Letter, Experience Certificate, and clear my Full & Final settlement without further delay.

Attached are copies of my resignation email, notice period acknowledgement, and clearance email.

Yours faithfully,

__________________
Name: ${name}
Email: ${email}
Phone: ${phone}`;

        } else if (selectedCategory === 'pf') {
            body = `To,
The Regional Provident Fund Commissioner (RPFC),
Employees' Provident Fund Organisation (EPFO),
[Regional EPFO Office Address]

Date: ${today}

Subject: Complaint under Section 14 of the EPF & MP Act, 1952 for non-deposit of PF contributions by ${company}.

Respected Sir/Madam,

I am writing to report a statutory default and criminal breach of trust by my employer, ${company}, located at ${address}.

I have been employed as a ${role} with the company. My Universal Account Number (UAN) is ${uan || '[Your UAN]'} and PF Member ID is ${pfMemberId || '[PF Member ID]'}.

The company has deducted the employee share of Provident Fund (12% of basic salary) from my monthly salary for the month(s) of ${unpaidMonths || '[Month/Year list]'} but has failed to deposit both the employee share and the employer share (12%) into my EPFO account.

This constitutes a criminal offence under Section 14 of the Employees' Provident Funds and Miscellaneous Provisions Act, 1952, and is punishable under Section 406/409 of the Indian Penal Code (Criminal Breach of Trust).

I request your office to initiate a statutory inquiry under Section 7A of the Act, conduct an inspection of the company's wage logs, and recover my unpaid PF deposits with interest.

I have attached my payslips showing the PF deductions as proof.

Yours faithfully,

__________________
Name: ${name}
Email: ${email}
Phone: ${phone}
UAN: ${uan || '[UAN]'}`;

        } else if (selectedCategory === 'termination') {
            body = `To,
The Assistant Labour Commissioner,
Conciliation Officer under the Industrial Disputes Act, 1947,
[District/Region Office]

Date: ${today}

Subject: Complaint regarding wrongful, illegal, and unilateral termination of services by ${company}.

Respected Sir/Madam,

I am writing to register a formal grievance regarding the wrongful and illegal termination of my services by ${company}, located at ${address}.

I was employed as a confirmed ${role} at the company from ${joinDate || '[Join Date]'}. On ${terminationDate || '[Termination Date]'}, the management unilaterally terminated my employment without following due process of law.

The termination is in direct violation of the law because:
1. No show-cause notice or domestic inquiry was conducted prior to dismissal.
2. I was not paid retrenchment compensation equal to 15 days' average pay per year of service as mandated under Section 25F of the Industrial Disputes Act, 1947.
3. The reason cited by the company ("${terminationReason || 'N/A'}") is arbitrary, malafide, and without any backing of evidence.

This wrongful termination has deprived me of my livelihood and represents a violation of natural justice and statutory labor acts.

I request your office to initiate conciliation proceedings under Section 12 of the Industrial Disputes Act, summon the management, and direct them to reinstate me with full back wages, or pay adequate retrenchment compensation and damages for wrongful termination.

Attached are copies of my appointment letter, confirmation letter, and the illegal termination email/notice.

Yours faithfully,

__________________
Name: ${name}
Email: ${email}
Phone: ${phone}`;
        }

        return body;
    }, [selectedCategory, empName, empEmail, empPhone, compName, compAddress, designation, joinDate, exitDate, outstandingAmount, unpaidMonths, uan, pfMemberId, noticeServed, terminationDate, terminationReason]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(grievanceDraft);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const textArea = document.createElement('textarea');
            textArea.value = grievanceDraft;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleDownload = () => {
        const blob = new Blob([grievanceDraft], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `grievance_draft_${selectedCategory}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const relatedLinks = [
        { title: 'How to File Complaint', subtitle: 'Step-by-step portals list', path: '/complaint-guide' },
        { title: 'Regional Directory', subtitle: 'Find your local labour office', path: '/tools/labour-directory' },
        { title: 'Delayed Salary Guide', subtitle: 'Your rights on late pay', path: '/delayed-salary' },
        { title: 'Letter Templates', subtitle: 'Browse standard HR templates', path: '/templates' }
    ];

    return (
        <div>
            <SEOHead path="/tools/grievance-generator" />

            <PageHero
                title="Grievance Draft Generator"
                subtitle="Build legally structured, citation-backed complaint letters addressed to Labour Inspectors or EPFO authorities."
                icon={FileText}
                gradient="accent"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Tools & FAQ', path: '/tools' },
                        { label: 'Grievance Generator', path: '/tools/grievance-generator' }
                    ]} />

                    {/* ── PERJURY CAUTION ── */}
                    <div className="mt-8 mb-8 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-2xl p-6 flex gap-4 shadow-soft">
                        <AlertOctagon className="w-8 h-8 text-red-500 flex-shrink-0 mt-0.5 animate-pulse" />
                        <div>
                            <h2 className="font-extrabold text-red-800 dark:text-red-300 text-lg mb-1">
                                Critical Legal Caution
                            </h2>
                            <p className="text-red-750 dark:text-red-400 text-sm leading-relaxed">
                                Ensure all names, dates, notice durations, and outstanding monetary figures entered in this tool are <strong>100% accurate and verifiable</strong>. 
                                Submitting false allegations or fabricated amounts to government portals (like Shramik Suvidha, EPFO, or Labour Inspectors) is a crime. It can expose you to legal counter-action for defamation, fraud, or perjury.
                            </p>
                        </div>
                    </div>

                    {/* Category Selection Tabs */}
                    <div className="flex gap-2 border-b border-gray-200 dark:border-gray-800 pb-2 mb-8 overflow-x-auto">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-4 py-2.5 rounded-lg font-bold text-sm whitespace-nowrap transition-all ${
                                    selectedCategory === cat.id
                                        ? 'bg-primary text-white'
                                        : 'bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-650 dark:text-gray-400 hover:bg-gray-50'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* ── LEFT SIDE: DRAFT INPUTS ── */}
                        <div className="lg:col-span-5 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-5 flex items-center gap-2">
                                📝 Enter Complaint Info
                            </h3>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Your Full Name</label>
                                        <input type="text" value={empName} onChange={e => setEmpName(e.target.value)} placeholder="e.g. John Doe"
                                            className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none focus:ring-2 focus:ring-primary" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Designation</label>
                                        <input type="text" value={designation} onChange={e => setDesignation(e.target.value)} placeholder="e.g. QA Engineer"
                                            className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none focus:ring-2 focus:ring-primary" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Email Address</label>
                                        <input type="email" value={empEmail} onChange={e => setEmpEmail(e.target.value)} placeholder="e.g. email@domain.com"
                                            className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none focus:ring-2 focus:ring-primary" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Phone Number</label>
                                        <input type="tel" value={empPhone} onChange={e => setEmpPhone(e.target.value)} placeholder="e.g. 9876543210"
                                            className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none focus:ring-2 focus:ring-primary" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Employer/Company Name</label>
                                    <input type="text" value={compName} onChange={e => setCompName(e.target.value)} placeholder="e.g. Tech Services Pvt Ltd"
                                        className="px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none focus:ring-2 focus:ring-primary" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Company Work Address</label>
                                    <textarea value={compAddress} onChange={e => setCompAddress(e.target.value)} placeholder="e.g. Sector-62, Noida, UP" rows="2"
                                        className="px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none focus:ring-2 focus:ring-primary resize-none" />
                                </div>

                                {/* Category Specific Fields */}
                                {selectedCategory === 'salary' && (
                                    <>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Join Date</label>
                                                <input type="date" value={joinDate} onChange={e => setJoinDate(e.target.value)}
                                                    className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Last Working/Paid Date</label>
                                                <input type="date" value={exitDate} onChange={e => setExitDate(e.target.value)}
                                                    className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Monthly Salary (₹)</label>
                                                <input type="number" value={outstandingAmount} onChange={e => setOutstandingAmount(e.target.value)} placeholder="e.g. 25000"
                                                    className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xs font-bold text-gray-600 dark:text-gray-400">UAN / PF Account ID</label>
                                                <input type="text" value={uan} onChange={e => setUan(e.target.value)} placeholder="e.g. 101234567890"
                                                    className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Unpaid Month(s)</label>
                                            <input type="text" value={unpaidMonths} onChange={e => setUnpaidMonths(e.target.value)} placeholder="e.g. May & June 2026"
                                                className="px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none" />
                                        </div>
                                    </>
                                )}

                                {selectedCategory === 'letters' && (
                                    <>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Join Date</label>
                                                <input type="date" value={joinDate} onChange={e => setJoinDate(e.target.value)}
                                                    className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Exit Date</label>
                                                <input type="date" value={exitDate} onChange={e => setExitDate(e.target.value)}
                                                    className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Did you serve notice period?</label>
                                            <div className="flex gap-4">
                                                <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                                    <input type="radio" value="yes" checked={noticeServed === 'yes'} onChange={e => setNoticeServed(e.target.value)} /> Yes, served notice
                                                </label>
                                                <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                                    <input type="radio" value="no" checked={noticeServed === 'no'} onChange={e => setNoticeServed(e.target.value)} /> No / waived / buyout
                                                </label>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {selectedCategory === 'pf' && (
                                    <>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xs font-bold text-gray-600 dark:text-gray-400">UAN (12 Digit)</label>
                                                <input type="text" value={uan} onChange={e => setUan(e.target.value)} placeholder="101010101010"
                                                    className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xs font-bold text-gray-600 dark:text-gray-400">PF Member ID</label>
                                                <input type="text" value={pfMemberId} onChange={e => setPfMemberId(e.target.value)} placeholder="KN/BAN/0012345/000/0000789"
                                                    className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Defaulted Months</label>
                                            <input type="text" value={unpaidMonths} onChange={e => setUnpaidMonths(e.target.value)} placeholder="e.g. March & April 2026"
                                                className="px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none" />
                                        </div>
                                    </>
                                )}

                                {selectedCategory === 'termination' && (
                                    <>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Join Date</label>
                                                <input type="date" value={joinDate} onChange={e => setJoinDate(e.target.value)}
                                                    className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Termination Date</label>
                                                <input type="date" value={terminationDate} onChange={e => setTerminationDate(e.target.value)}
                                                    className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-xs font-bold text-gray-600 dark:text-gray-400">Reason Cited by Employer</label>
                                            <input type="text" value={terminationReason} onChange={e => setTerminationReason(e.target.value)} placeholder="e.g. Performance issues / Restructuring"
                                                className="px-3.5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none animate-in fade-in" />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* ── RIGHT SIDE: DRAFT PREVIEW ── */}
                        <div className="lg:col-span-7 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 flex flex-col justify-between min-h-[450px]">
                            
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-primary" /> Live Grievance Draft
                                </h3>

                                <div className="p-5 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-850 shadow-inner max-h-[400px] overflow-y-auto font-sans leading-relaxed text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap select-all">
                                    {grievanceDraft}
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={handleCopy}
                                    className="bg-primary text-white hover:bg-primary/95 flex items-center justify-center gap-2 flex-grow py-3 rounded-xl font-bold transition-all shadow-soft"
                                >
                                    {copied ? <><Check className="w-5 h-5" /> Copied!</> : <><Copy className="w-5 h-5" /> Copy Draft</>}
                                </button>
                                <button
                                    onClick={handleDownload}
                                    className="bg-accent text-white hover:bg-accent-dark flex items-center justify-center gap-2 flex-grow py-3 rounded-xl font-bold transition-all shadow-soft"
                                >
                                    <Download className="w-5 h-5" /> Download Draft (.txt)
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* FAQ */}
                    <FAQSection
                        faqs={[
                            { question: "Where do I submit this generated complaint draft?", answer: "You can copy and email this draft directly to the regional Labour Commissioner's official email id. You can also paste it into the online portal description fields on Shramik Suvidha (shramiksuvidhaportal.gov.in) or pgportal.gov.in." },
                            { question: "What supporting documents should I attach with the letter?", answer: "Always attach copies of: (a) Your appointment letter, (b) Pay slips for the contested period, (c) Bank statements showing receipt (or absence) of salary credit, (d) Written communications (emails/letters) showing you demanded the dues first from the company." }
                        ]}
                        title="FAQs — Submitting Grievance Drafts"
                    />

                    <InternalLinks currentPath="/tools/grievance-generator" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
