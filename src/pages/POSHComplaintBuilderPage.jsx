import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { ShieldCheck, Lock, FileText, CheckCircle, Copy, Check, AlertCircle, Clock, HeartHandshake } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function POSHComplaintBuilderPage() {
    const [complainantName, setComplainantName] = useState('');
    const [respondentName, setRespondentName] = useState('');
    const [respondentRole, setRespondentRole] = useState('');
    const [incidentDate, setIncidentDate] = useState('');
    const [incidentLocation, setIncidentLocation] = useState('Office premises / Video calls');
    const [harassmentType, setHarassmentType] = useState('unwelcome_advances');
    const [incidentDetails, setIncidentDetails] = useState('');
    const [witnessDetails, setWitnessDetails] = useState('');
    const [interimRelief, setInterimRelief] = useState('transfer_respondent');
    const [copied, setCopied] = useState(false);

    const generateLetter = () => {
        return `CONFIDENTIAL & PRIVILEGED COMPLAINT UNDER THE POSH ACT, 2013

Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}

To,
The Presiding Officer & Members of the Internal Complaints Committee (ICC) / Local Committee (LC)
[Company Name / Establishment Name]
[Company Address]

SUBJECT: Formal Complaint of Sexual Harassment at Workplace under Section 9 of the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act)

Dear Presiding Officer and Committee Members,

I, ${complainantName || '[Your Full Name]'}, hereby submit a formal written complaint against ${respondentName || '[Respondent Name]'} (${respondentRole || '[Respondent Designation/Department]'}) for acts amounting to sexual harassment at the workplace.

1. DETAILS OF THE INCIDENT(S):
- Date & Time: ${incidentDate || '[Date & Approximate Time]'}
- Location: ${incidentLocation}
- Type of Conduct: ${harassmentType === 'unwelcome_advances' ? 'Unwelcome physical/verbal advances or sexually colored remarks' : harassmentType === 'quid_pro_quo' ? 'Quid Pro Quo (threats/promises tied to employment or performance appraisal)' : 'Creating a hostile, intimidating, or offensive work environment'}

2. FACTUAL NARRATIVE:
${incidentDetails || '[Provide a clear, factual chronological sequence of events. Detail what was said, done, and your explicit non-consent/objection.]'}

3. EVIDENCE & WITNESSES (Section 11):
- Documented Evidence: [Attached WhatsApp chats / emails / call records / CCTV footage requests]
- Witnesses (if any): ${witnessDetails || '[Name/Department of any colleagues who witnessed or were briefed immediately after the incident]'}

4. PRAYER FOR INTERIM RELIEF (Section 12):
Under Section 12 of the POSH Act, 2013, during the pendency of the inquiry, I formally request the Committee to grant the following interim protection:
${interimRelief === 'transfer_respondent' ? '- Transfer the Respondent to another department/team or ensure zero reporting/work interaction.' : interimRelief === 'paid_leave' ? '- Grant me up to 3 months of paid leave (in addition to statutory leave entitlement) as provided under Section 12(1)(b).' : '- Restrain the Respondent from reporting on or evaluating my work appraisal.'}

5. REQUEST FOR CONFIDENTIALITY (Section 16):
I request strict adherence to Section 16 of the Act to maintain absolute confidentiality regarding the identity of the complainant, respondent, and witnesses.

I request the Committee to initiate the statutory inquiry expeditiously within the mandatory 90-day timeline under Section 11(4) and share a copy of the formal notice served to the Respondent.

Yours sincerely,

______________________
${complainantName || '[Signature / Full Name]'}
[Employee ID]
[Contact Email / Phone Number]`;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generateLetter());
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Confidential POSH Complaint Builder & ICC Inquiry Tracker India"
                description="Draft a formal, legally structured sexual harassment complaint under the POSH Act, 2013 with interim relief requests and 90-day inquiry timeline tracking."
                path="/tools/posh-complaint-builder"
            />

            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'POSH Complaint Builder', path: '/tools/posh-complaint-builder' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-300 rounded-full text-xs font-bold mb-3">
                        <Lock className="w-3.5 h-3.5" /> 100% Client-Side & Confidential
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <ShieldCheck className="w-10 h-10 text-primary" />
                        Confidential POSH Complaint Builder
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Structure a formal, legally enforceable workplace harassment complaint to your company's Internal Complaints Committee (ICC) under the <strong>POSH Act, 2013</strong>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Input Form */}
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-primary" />
                            Incident Particulars
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                    Your Name (Complainant)
                                </label>
                                <input 
                                    type="text"
                                    placeholder="Your Full Name"
                                    value={complainantName}
                                    onChange={(e) => setComplainantName(e.target.value)}
                                    className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                        Respondent Name
                                    </label>
                                    <input 
                                        type="text"
                                        placeholder="Accused Person"
                                        value={respondentName}
                                        onChange={(e) => setRespondentName(e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                        Respondent Role
                                    </label>
                                    <input 
                                        type="text"
                                        placeholder="e.g. Senior Manager"
                                        value={respondentRole}
                                        onChange={(e) => setRespondentRole(e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                        Incident Date
                                    </label>
                                    <input 
                                        type="date"
                                        value={incidentDate}
                                        onChange={(e) => setIncidentDate(e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                        Nature of Conduct
                                    </label>
                                    <select 
                                        value={harassmentType}
                                        onChange={(e) => setHarassmentType(e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                    >
                                        <option value="unwelcome_advances">Unwelcome Remarks / Physical Gestures</option>
                                        <option value="quid_pro_quo">Quid Pro Quo (Career Threats)</option>
                                        <option value="hostile_environment">Hostile & Offensive Work Environment</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                    Brief Narrative of Incident
                                </label>
                                <textarea 
                                    rows="3"
                                    placeholder="Describe what happened chronologically..."
                                    value={incidentDetails}
                                    onChange={(e) => setIncidentDetails(e.target.value)}
                                    className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                    Witnesses / Evidence
                                </label>
                                <input 
                                    type="text"
                                    placeholder="e.g. Attached WhatsApp screenshots, named colleague"
                                    value={witnessDetails}
                                    onChange={(e) => setWitnessDetails(e.target.value)}
                                    className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                    Interim Relief Requested (Section 12)
                                </label>
                                <select 
                                    value={interimRelief}
                                    onChange={(e) => setInterimRelief(e.target.value)}
                                    className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                >
                                    <option value="transfer_respondent">Transfer Respondent / Stop Reporting Lines</option>
                                    <option value="paid_leave">Grant up to 3 Months Paid Leave for Complainant</option>
                                    <option value="restrain_appraisal">Restrain Respondent from Evaluating Performance</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Rights & Statutory Timelines */}
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-primary">
                                <Clock className="w-5 h-5" />
                                Mandatory POSH Statutory Timelines
                            </h3>
                            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                                    <strong>90 Days Maximum:</strong> ICC inquiry MUST be completed within 90 days of receiving the written complaint.
                                </div>
                                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                                    <strong>10 Days Report Submission:</strong> ICC has 10 days post-inquiry to submit their final findings to employer and parties.
                                </div>
                                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                                    <strong>Section 16 Confidentiality:</strong> Publishing the complainant's identity or inquiry details is punishable with statutory penalties.
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl flex gap-3 items-center text-sm text-gray-800 dark:text-gray-200">
                            <HeartHandshake className="w-8 h-8 text-primary shrink-0" />
                            <div>
                                <strong>Protection against Retaliation:</strong> Any victimization, forced PIP, or sudden termination after filing a POSH complaint is strictly illegal.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Complaint Output */}
                <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <FileText className="w-5 h-5 text-primary" />
                            Drafted Legal Complaint
                        </h3>
                        <button 
                            onClick={handleCopy}
                            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold flex items-center gap-1.5 hover:bg-primary/90 transition-all"
                        >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copied to Clipboard' : 'Copy Full Draft'}
                        </button>
                    </div>

                    <pre className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-xs sm:text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-sans">
                        {generateLetter()}
                    </pre>
                </div>
            </div>
        </div>
    );
}
