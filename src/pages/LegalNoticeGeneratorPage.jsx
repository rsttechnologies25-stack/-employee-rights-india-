import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Scale, FileText, CheckCircle, AlertTriangle, Copy, Check, Printer, Shield, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function LegalNoticeGeneratorPage() {
    const [noticeType, setNoticeType] = useState('ff_dues'); // 'ff_dues', 'relieving_letter', 'pf_delay', 'illegal_deduction'
    const [employeeName, setEmployeeName] = useState('');
    const [employeeAddress, setEmployeeAddress] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [designation, setDesignation] = useState('');
    const [joiningDate, setJoiningDate] = useState('');
    const [lwd, setLwd] = useState('');
    const [duesAmount, setDuesAmount] = useState('75000');
    const [cureDays, setCureDays] = useState('15');
    const [copied, setCopied] = useState(false);

    const generateLegalNotice = () => {
        const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

        let specificDemands = '';
        let statutorySections = '';

        if (noticeType === 'ff_dues') {
            statutorySections = 'Section 15 of the Payment of Wages Act, 1936, Section 33C(2) of the Industrial Disputes Act, 1947, and the applicable State Shops and Commercial Establishments Act';
            specificDemands = `1. That my Full and Final (F&F) settlement amount of ₹${parseFloat(duesAmount || 0).toLocaleString('en-IN')} (Rupees ${duesAmount || 'Pending'} only), comprising unpaid salary, encashment of accumulated earned leaves, and statutory dues, has been willfully and unlawfully withheld beyond the statutory timeline.
2. That the aforesaid withholding of earned wages constitutes an illegal deduction and unfair labour practice under Indian law.
3. You are hereby called upon to disburse the entire outstanding sum of ₹${parseFloat(duesAmount || 0).toLocaleString('en-IN')} along with interest @ 18% per annum from the date it fell due until the date of actual realization.`;
        } else if (noticeType === 'relieving_letter') {
            statutorySections = 'the applicable State Shops and Establishments Act, the Industrial Disputes Act, 1947, and Fundamental Rights under Article 19(1)(g) of the Constitution of India';
            specificDemands = `1. That having tendered my formal resignation and completed all handover formalities on ${lwd || '[Last Working Day]'}, you have unlawfully withheld my official Relieving Letter, Experience Certificate, and Service Certificate.
2. That withholding service certificates over arbitrary civil disputes or unproven bond claims is a direct infringement of my fundamental right to livelihood and lawful occupation.
3. You are hereby called upon to immediately issue an unblemished Relieving Letter and Experience Certificate to my registered email address.`;
        } else if (noticeType === 'pf_delay') {
            statutorySections = 'Section 6 and Section 14 of the Employees\' Provident Funds and Miscellaneous Provisions Act, 1952 read with Section 406 & 420 of the Indian Penal Code / BNS';
            specificDemands = `1. That statutory Employee Provident Fund (PF) contributions deducted from my monthly salary have either not been deposited with the EPFO or have been significantly delayed.
2. That deducting employee shares of PF without depositing them with the EPFO constitutes Criminal Breach of Trust and a cognizable statutory offense.
3. You are hereby called upon to immediately deposit all pending EPF and EPS contributions with the EPFO along with statutory damages and penal interest under Section 14B.`;
        } else {
            statutorySections = 'Section 7 of the Payment of Wages Act, 1936 and relevant State Shops and Commercial Establishments Act';
            specificDemands = `1. That you have made arbitrary, unilateral, and unauthorized salary deductions amounting to ₹${parseFloat(duesAmount || 0).toLocaleString('en-IN')} from my compensation under the garb of unapproved penalties / gross notice recovery.
2. That notice recovery cannot exceed basic salary components and no GST is chargeable as per CBIC circulars.
3. You are called upon to immediately refund the illegal deductions of ₹${parseFloat(duesAmount || 0).toLocaleString('en-IN')} into my designated bank account.`;
        }

        return `FORMAL LEGAL DEMAND NOTICE
(UNDER SPEED POST / REGISTERED A.D. & OFFICIAL EMAIL)

Date: ${today}

To,
The Managing Director / Board of Directors & Head of HR
${companyName || '[Company Name]'}
${companyAddress || '[Company Registered Address]'}

FROM:
${employeeName || '[Your Full Name]'}
${employeeAddress || '[Your Residential Address]'}
Designation: ${designation || '[Your Designation]'}
Email: [Your Personal Email] | Mobile: [Your Phone Number]

SUBJECT: LEGAL DEMAND NOTICE UNDER ${statutorySections.toUpperCase()} FOR ${noticeType === 'ff_dues' ? 'IMMEDIATE CLEARANCE OF UNPAID FULL & FINAL SETTLEMENT DUES' : noticeType === 'relieving_letter' ? 'MANDATORY ISSUANCE OF RELIEVING & EXPERIENCE CERTIFICATES' : noticeType === 'pf_delay' ? 'NON-DEPOSIT OF STATUTORY PROVIDENT FUND CONTRIBUTIONS' : 'REFUND OF ILLEGAL SALARY DEDUCTIONS'}

Dear Sir / Madam,

Under instructions and in exercise of my statutory rights as an employee, I hereby serve upon you this formal Legal Demand Notice:

1. APPOINTMENT & TENURE:
I was appointed as "${designation || '[Designation]'}" in your establishment on ${joiningDate || '[Joining Date]'} and discharged my professional duties diligently until my separation on ${lwd || '[Last Working Day]'}.

2. FACTUAL GRIEVANCE & LEGAL INFRACTIONS:
${specificDemands}

3. FINAL NOTICE TO COMPLY:
You are hereby called upon to comply with the above demands within a period of ${cureDays} DAYS from the receipt of this notice.

4. NOTICE OF LEGAL PROCEEDINGS:
Please take note that if you fail to comply with this notice within the stipulated ${cureDays} days, I shall be constrained to initiate formal proceedings against you and your Directors before:
a) The Controlling Authority / Regional Labour Commissioner under the Payment of Wages Act / IDA.
b) The Competent Regional EPF Commissioner (EPFO) for coercive attachment under Section 8B of the EPF Act.
c) The Jurisdictional Labour Court / Civil Court for recovery of dues along with exemplary damages and legal costs.

A copy of this notice is retained for production in appropriate judicial forums.

Yours faithfully,

_______________________
${employeeName || '[Your Full Name]'}
Former Employee, ${companyName || '[Company Name]'}`;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generateLegalNotice());
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Formal Legal Demand Notice Generator for Employees India"
                description="Draft an official, advocate-grade legal demand notice for unpaid salary, withheld relieving letters, illegal notice pay deductions, and delayed PF contributions."
                path="/tools/legal-notice-generator"
            />

            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Legal Notice Generator', path: '/tools/legal-notice-generator' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <Scale className="w-10 h-10 text-primary" />
                        Formal Legal Demand Notice Suite
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Send a statutory pre-litigation Legal Notice to HR & Company Directors before approaching the Labour Court for unpaid dues, withheld letters, or illegal deductions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Form Controls */}
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-primary" />
                            Notice Particulars
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                    Subject of Legal Notice
                                </label>
                                <select 
                                    value={noticeType}
                                    onChange={(e) => setNoticeType(e.target.value)}
                                    className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                >
                                    <option value="ff_dues">Unpaid Full & Final (F&F) Dues / Salary</option>
                                    <option value="relieving_letter">Withheld Relieving & Experience Letter</option>
                                    <option value="pf_delay">Uncredited / Delayed EPF Contributions</option>
                                    <option value="illegal_deduction">Illegal Salary Deductions / Gross Buyout Recovery</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                        Your Full Name
                                    </label>
                                    <input 
                                        type="text"
                                        placeholder="Employee Name"
                                        value={employeeName}
                                        onChange={(e) => setEmployeeName(e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                        Your Designation
                                    </label>
                                    <input 
                                        type="text"
                                        placeholder="e.g. Software Engineer"
                                        value={designation}
                                        onChange={(e) => setDesignation(e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                        Company Name
                                    </label>
                                    <input 
                                        type="text"
                                        placeholder="Employer Legal Entity"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                        Claim Amount (₹)
                                    </label>
                                    <input 
                                        type="number"
                                        placeholder="e.g. 75000"
                                        value={duesAmount}
                                        onChange={(e) => setDuesAmount(e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                        Joining Date
                                    </label>
                                    <input 
                                        type="date"
                                        value={joiningDate}
                                        onChange={(e) => setJoiningDate(e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                        Last Working Day (LWD)
                                    </label>
                                    <input 
                                        type="date"
                                        value={lwd}
                                        onChange={(e) => setLwd(e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                    Cure Period to Comply
                                </label>
                                <select 
                                    value={cureDays}
                                    onChange={(e) => setCureDays(e.target.value)}
                                    className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                >
                                    <option value="7">7 Days (Urgent)</option>
                                    <option value="15">15 Days (Standard Legal Practice)</option>
                                    <option value="30">30 Days</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* How to Send Notice Guide */}
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                            <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                                <Shield className="w-5 h-5" />
                                How to Legally Serve this Notice
                            </h3>
                            <ol className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 list-decimal list-inside">
                                <li><strong>Via Official Email:</strong> Send directly to HR Head, CEO, and official company support with Read Receipts.</li>
                                <li><strong>Via Speed Post / Registered Post AD:</strong> Dispatch a physical signed printout to the company's registered Ministry of Corporate Affairs (MCA) office address.</li>
                                <li><strong>Preserve Proof:</strong> Keep postal receipts and tracking numbers safe for presentation before the Labour Commissioner.</li>
                            </ol>
                        </div>

                        <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl text-xs text-amber-900 dark:text-amber-200">
                            ⚖️ <strong>Legal Weight:</strong> A formal legal notice puts the employer on official record. In over 70% of cases, HR departments settle pending payments to avoid corporate litigation.
                        </div>
                    </div>
                </div>

                {/* Notice Output */}
                <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <FileText className="w-5 h-5 text-primary" />
                            Drafted Legal Notice
                        </h3>
                        <button 
                            onClick={handleCopy}
                            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold flex items-center gap-1.5 hover:bg-primary/90 transition-all"
                        >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copied Notice' : 'Copy Notice Text'}
                        </button>
                    </div>

                    <pre className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-xs sm:text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-sans max-h-[500px] overflow-y-auto">
                        {generateLegalNotice()}
                    </pre>
                </div>
            </div>
        </div>
    );
}
