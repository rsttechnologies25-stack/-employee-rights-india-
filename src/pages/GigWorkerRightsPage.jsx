import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Bike, ShieldAlert, Award, FileText, Check, Copy, HelpCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function GigWorkerRightsPage() {
    const [platformName, setPlatformName] = useState('Blinkit');
    const [partnerId, setPartnerId] = useState('');
    const [workerName, setWorkerName] = useState('');
    const [city, setCity] = useState('');
    const [deactivationReason, setDeactivationReason] = useState('algorithmic');
    const [copied, setCopied] = useState(false);

    const generateAppeal = () => {
        return `FORMAL GRIEVANCE: UNFAIR ACCOUNT DEACTIVATION & RESTORATION REQUEST

Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}

To,
The Grievance Officer / Partner Support Team
${platformName} Technologies India Pvt. Ltd.

Subject: Formal Grievance regarding Arbitrary Account Deactivation / ID Block - Partner ID: ${partnerId || '[Your Partner ID]'}

Dear Grievance Officer,

I, ${workerName || '[Your Full Name]'}, registered as a delivery/driver partner with ${platformName} in ${city || '[Your City]'} under Partner ID: ${partnerId || '[Your Partner ID]'}, am submitting this formal appeal against the sudden and arbitrary deactivation/suspension of my delivery account.

1. GROUNDS FOR DISPUTE:
My partner account was blocked on [Date of Deactivation] citing: ${
    deactivationReason === 'algorithmic' 
        ? 'Algorithmic/automated system flags without prior notice, human review, or specific order evidence.'
        : deactivationReason === 'false_customer'
        ? 'Unverified customer complaint regarding delivery/behavior, without granting me an opportunity to explain or submit proof.'
        : 'Alleged low acceptance rate / order cancellation, which violates the foundational definition of independent gig engagement.'
}

2. VIOLATION OF NATURAL JUSTICE & STATUTORY WELFARE PRINCIPLES:
- The principle of *Audi Alteram Partem* (right to be heard) mandates that no livelihood can be terminated without furnishing specific transaction evidence and providing a 14-day formal show-cause opportunity.
- Under emerging state legislations (including the Rajasthan Platform Based Gig Workers Act, 2023 and Karnataka Gig Workers Welfare Bill), platform aggregators are statutorily prohibited from arbitrary, automated terminations of active workers.

3. PRAYER / RELIEF SOUGHT:
- Provide the exact timestamp, order ID, and specific allegations leading to this deactivation.
- Immediately conduct a human review of my historical performance and ratings.
- Restore my active partner account status to prevent continued loss of daily livelihood.

Kindly provide a formal written resolution within 7 working days, failing which I reserve the right to escalate this matter to the District Labour Commissioner and the Platform Gig Workers Welfare Board.

Yours sincerely,

${workerName || '[Your Full Name]'}
Partner ID: ${partnerId || '[Your Partner ID]'}
Contact: [Your Mobile Number]
City: ${city || '[Your City]'}`;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generateAppeal());
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Gig & Platform Worker Rights Hub India — Blinkit, Swiggy, Zomato, Uber"
                description="Know your legal protections under the Gig Workers Welfare Acts in India. Generate formal appeal letters for unfair ID block and account deactivation."
                path="/tools/gig-worker-rights"
            />

            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Gig Worker Rights', path: '/tools/gig-worker-rights' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <Bike className="w-10 h-10 text-primary" />
                        Gig & Platform Worker Rights Hub
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Legal protections, social security welfare laws, and an automated deactivation appeal generator for delivery partners and cab drivers across India.
                    </p>
                </div>

                {/* Key Legal Protections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <div className="bg-white dark:bg-gray-950 p-5 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <Award className="w-6 h-6 text-primary mb-2" />
                        <h3 className="font-bold text-base mb-1">State Welfare Boards</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            States like Rajasthan and Karnataka mandate dedicated Gig Worker Welfare Boards funded by a 1–2% transaction fee on every customer order.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-950 p-5 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <ShieldAlert className="w-6 h-6 text-primary mb-2" />
                        <h3 className="font-bold text-base mb-1">Deactivation Notice</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            Aggregators cannot permanently ban an ID without giving 14 days prior notice and a human hearing to present your defense.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-950 p-5 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <FileText className="w-6 h-6 text-primary mb-2" />
                        <h3 className="font-bold text-base mb-1">Social Security Code</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            Sections 112–114 of the Code on Social Security, 2020 require platforms to contribute to health, disability, and accident insurance.
                        </p>
                    </div>
                </div>

                {/* Grievance Generator */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <FileText className="w-6 h-6 text-primary" />
                            ID Deactivation Appeal Generator
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                    Platform / App Name
                                </label>
                                <select 
                                    value={platformName}
                                    onChange={(e) => setPlatformName(e.target.value)}
                                    className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                >
                                    <option value="Blinkit">Blinkit</option>
                                    <option value="Swiggy">Swiggy (Food/Instamart)</option>
                                    <option value="Zomato">Zomato</option>
                                    <option value="Zepto">Zepto</option>
                                    <option value="Uber">Uber India</option>
                                    <option value="Ola">Ola Cabs</option>
                                    <option value="Urban Company">Urban Company</option>
                                    <option value="Rapido">Rapido</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                        Your Full Name
                                    </label>
                                    <input 
                                        type="text"
                                        placeholder="Worker Name"
                                        value={workerName}
                                        onChange={(e) => setWorkerName(e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                        Partner ID / Rider ID
                                    </label>
                                    <input 
                                        type="text"
                                        placeholder="e.g. ZOM-102934"
                                        value={partnerId}
                                        onChange={(e) => setPartnerId(e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                    Operating City
                                </label>
                                <input 
                                    type="text"
                                    placeholder="e.g. Bengaluru, Hyderabad, Delhi NCR, Mumbai"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase mb-1">
                                    Reason for ID Block / Deactivation
                                </label>
                                <select 
                                    value={deactivationReason}
                                    onChange={(e) => setDeactivationReason(e.target.value)}
                                    className="w-full p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                                >
                                    <option value="algorithmic">Automated System Flag / Face Verification Fail</option>
                                    <option value="false_customer">False Customer Complaint / Food Spoilage Allegation</option>
                                    <option value="order_cancellation">Low Acceptance Rate / Refusal of Far Deliveries</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Output */}
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold">Formal Restoration Appeal</h3>
                                <button 
                                    onClick={handleCopy}
                                    className="px-3.5 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold flex items-center gap-1 hover:bg-primary/90 transition-all"
                                >
                                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                    {copied ? 'Copied' : 'Copy Appeal'}
                                </button>
                            </div>

                            <pre className="p-3.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-sans max-h-[360px] overflow-y-auto">
                                {generateAppeal()}
                            </pre>
                        </div>

                        <p className="text-xs text-gray-500 mt-4">
                            Send this email directly to your platform's Grievance Officer and partner support email.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
