import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { Compass, ArrowRight, ShieldCheck, Building2, MapPin, FileText, ExternalLink, CheckCircle2, AlertTriangle, Scale, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const problems = [
    { id: 'unpaid_salary', label: '💰 Unpaid or Delayed Salary / Deductions' },
    { id: 'relieving_letter', label: '📄 Withheld Relieving / Experience Letter' },
    { id: 'illegal_termination', label: '🚪 Wrongful / Illegal Termination or Layoff' },
    { id: 'bond_penalty', label: '🎓 Employment Bond / Training Cost Dispute' },
    { id: 'pf_default', label: '🏦 PF Deducted but Not Deposited / UAN Dispute' },
    { id: 'gratuity_claim', label: '🏆 Unpaid Gratuity After 5 Years Service' },
    { id: 'posh_harassment', label: '⚠️ Workplace Harassment (POSH Issue)' },
    { id: 'absconding_claim', label: '🏃 Employer Falsely Alleges Absconding' },
    { id: 'gig_deactivation', label: '🚕 Gig / Platform Worker Deactivation' }
];

const employmentTypes = [
    { id: 'direct', label: 'Direct Permanent / Salaried Employee' },
    { id: 'contractor', label: 'Outsourced / Contract Staffing Agency Worker' },
    { id: 'trainee', label: 'Intern / Apprentice / Probationer' },
    { id: 'gig', label: 'Gig Worker / Delivery Partner / Driver' }
];

const establishmentTypes = [
    { id: 'private_it', label: 'Private IT / Tech / Corporate / Startup' },
    { id: 'factory', label: 'Factory / Manufacturing / Industrial Plant' },
    { id: 'retail_shop', label: 'Retail Shop / Commercial Establishment / Hotel' },
    { id: 'central_psu', label: 'Central Govt PSU / Nationalized Bank / Railway / Telecom' }
];

const states = [
    { id: 'tamil-nadu', name: 'Tamil Nadu', portal: 'https://labour.tn.gov.in', authority: 'Tamil Nadu Labour Department (Joint Commissioner / ALC)' },
    { id: 'karnataka', name: 'Karnataka', portal: 'https://labour.karnataka.gov.in', authority: 'Karnataka Labour Department (Senior Labour Inspector / ALC)' },
    { id: 'maharashtra', name: 'Maharashtra', portal: 'https://mahakamgar.maharashtra.gov.in', authority: 'Maharashtra Labour Commissionerate' },
    { id: 'delhi', name: 'Delhi NCR', portal: 'https://labour.delhi.gov.in', authority: 'Delhi Labour Department (District ALC Office)' },
    { id: 'telangana', name: 'Telangana', portal: 'https://labour.telangana.gov.in', authority: 'Telangana Labour Department' },
    { id: 'andhra-pradesh', name: 'Andhra Pradesh', portal: 'https://labour.ap.gov.in', authority: 'AP Labour Department' },
    { id: 'kerala', name: 'Kerala', portal: 'https://lc.kerala.gov.in', authority: 'Kerala Labour Commissionerate' },
    { id: 'west-bengal', name: 'West Bengal', portal: 'https://wblc.gov.in', authority: 'West Bengal Labour Directorate' },
    { id: 'gujarat', name: 'Gujarat', portal: 'https://labour.gujarat.gov.in', authority: 'Gujarat Labour Commissioner Office' },
    { id: 'uttar-pradesh', name: 'Uttar Pradesh', portal: 'https://uplabour.gov.in', authority: 'UP Labour Department' },
    { id: 'rajasthan', name: 'Rajasthan', portal: 'https://labour.rajasthan.gov.in', authority: 'Rajasthan Labour Department' },
    { id: 'madhya-pradesh', name: 'Madhya Pradesh', portal: 'https://labour.mp.gov.in', authority: 'MP Labour Department' },
    { id: 'haryana', name: 'Haryana', portal: 'https://hrylabour.gov.in', authority: 'Haryana Labour Department' }
];

export default function AuthorityFinderPage() {
    const [step, setStep] = useState(1);
    const [selectedProblem, setSelectedProblem] = useState('');
    const [selectedEmpType, setSelectedEmpType] = useState('');
    const [selectedEstType, setSelectedEstType] = useState('');
    const [selectedState, setSelectedState] = useState('');

    const handleReset = () => {
        setStep(1);
        setSelectedProblem('');
        setSelectedEmpType('');
        setSelectedEstType('');
        setSelectedState('');
    };

    const currentStateObj = states.find(s => s.id === selectedState) || states[0];

    // Determine jurisdiction result
    const getResult = () => {
        if (selectedProblem === 'pf_default') {
            return {
                authority: "Regional Provident Fund Commissioner (RPFC), EPFO",
                why: "Provident fund deductions are exclusively regulated by the Central EPF & MP Act, 1952. State Labour Officers do not have jurisdiction over EPFO deposits.",
                portal: "https://epfigms.gov.in/grievance/grievancemaster",
                portalName: "EPFiGMS Portal (EPFO)",
                law: "Section 14 & 7A of the EPF & MP Act, 1952 (along with IPC 406/409 for Criminal Breach of Trust)",
                documents: ["Monthly Payslips showing PF deductions", "UAN Number & Member ID", "EPFO Passbook screenshot showing missing credits", "Employment Offer Letter"],
                steps: [
                    "Download your monthly passbook from unifiedportal-mem.epfindia.gov.in.",
                    "Register a formal grievance on EPFiGMS (epfigms.gov.in) with payslips attached.",
                    "If unresolved within 30 days, submit a written complaint under Section 7A to the RPFC regional office."
                ],
                escalation: "CPGRAMS (pgportal.gov.in) or Regional Labour Court.",
                deepLink: "/tools/grievance-generator"
            };
        }

        if (selectedProblem === 'posh_harassment') {
            return {
                authority: "Internal Complaints Committee (ICC) of the Company / Local Complaints Committee (LCC) of the District Collector",
                why: "Under the POSH Act 2013, every organization with 10+ employees must maintain an ICC headed by a senior woman employee. If the employer has < 10 employees or the complaint is against the employer directly, file with the District LCC.",
                portal: "https://shebox.wcd.gov.in/",
                portalName: "SHe-Box (Ministry of Women & Child Development)",
                law: "Section 4, 9, and 12 of the Sexual Harassment of Women at Workplace Act, 2013",
                documents: ["Written statement of incidents with exact dates & times", "Screenshots of messages / emails / chats", "Names of any witnesses", "Copy of company's POSH policy"],
                steps: [
                    "Submit a written complaint to the Presiding Officer of the ICC within 3 months of the incident.",
                    "Request interim relief under Section 12 (transfer/paid leave) if you feel unsafe.",
                    "The ICC must complete the domestic inquiry within 90 days."
                ],
                escalation: "District LCC / Regional Magistrate / High Court writ.",
                deepLink: "/tools/posh-complaint-builder"
            };
        }

        if (selectedProblem === 'gratuity_claim') {
            return {
                authority: `Controlling Authority under the Payment of Gratuity Act (${currentStateObj.name})`,
                why: "Gratuity disputes are adjudicated by the statutory Controlling Authority appointed under Section 3 of the Gratuity Act (typically the Assistant Labour Commissioner).",
                portal: selectedEstType === 'central_psu' ? 'https://samadhan.labour.gov.in/' : currentStateObj.portal,
                portalName: selectedEstType === 'central_psu' ? 'SAMADHAN Portal (Central CLC)' : `${currentStateObj.name} Labour Portal`,
                law: "Payment of Gratuity Act, 1972, Section 4 & Section 7",
                documents: ["Form I (Application for Gratuity submitted to employer)", "Proof of service > 4 years 240 days", "Last drawn basic salary slip", "Resignation acceptance & exit date proof"],
                steps: [
                    "Submit Form I to the employer demanding gratuity within 30 days of exit.",
                    "If the employer fails to pay within 30 days, submit Form N to the Controlling Authority (Labour Commissioner).",
                    "The Authority will issue a summon to the employer to deposit the amount with 10% statutory interest."
                ],
                escalation: "Appellate Authority under Gratuity Act / High Court.",
                deepLink: "/tools/gratuity-calculator"
            };
        }

        if (selectedEstType === 'central_psu') {
            return {
                authority: "Chief Labour Commissioner (Central) / Regional Labour Commissioner (Central)",
                why: "Central PSUs, Nationalized Banks, Railways, Mines, and Telecom fall directly under the Central Sphere jurisdiction rather than the State Labour Department.",
                portal: "https://samadhan.labour.gov.in/",
                portalName: "SAMADHAN Portal (Ministry of Labour & Employment)",
                law: "Industrial Disputes Act 1947 & Payment of Wages Act 1936 (Central Sphere)",
                documents: ["Appointment Letter & Employee ID", "Unpaid Salary Payslips / Bank Statements", "Written communications with Management"],
                steps: [
                    "Register an industrial dispute on the SAMADHAN portal (samadhan.labour.gov.in).",
                    "Attend the conciliation proceedings scheduled by the Conciliation Officer.",
                    "If conciliation fails, the dispute is referred to the Central Government Industrial Tribunal (CGIT)."
                ],
                escalation: "Central Government Industrial Tribunal (CGIT) / High Court.",
                deepLink: "/tools/grievance-generator"
            };
        }

        // Standard State Level Private Sector Dispute (IT, Retail, Services)
        return {
            authority: `${currentStateObj.authority}`,
            why: `Private IT companies, tech startups, corporate offices, and retail businesses are regulated by the ${currentStateObj.name} Shops & Commercial Establishments Act. The State Labour Commissioner is the statutory conciliation authority.`,
            portal: currentStateObj.portal,
            portalName: `${currentStateObj.name} Labour Portal`,
            law: `State Shops & Establishments Act / Section 15 Payment of Wages Act, 1936`,
            documents: [
                "Appointment / Offer Letter",
                "Last 3 months Payslips",
                "Bank Account Statements showing unpaid months",
                "Resignation / Relieving correspondence with HR"
            ],
            steps: [
                "Send a formal written demand email to the HR Head (or generate a pre-litigation Legal Notice).",
                "File a petition on the State Labour Commissioner portal or physically submit Form 15 at your local district ALC office.",
                "The Labour Inspector will summon company representatives for conciliation."
            ],
            escalation: "Labour Court / Industrial Tribunal / District Magistrate.",
            deepLink: "/tools/legal-notice-generator"
        };
    };

    const result = getResult();

    return (
        <div>
            <SEOHead 
                path="/tools/authority-finder"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Workplace Problem Authority Finder — Employee Rights India",
                    "description": "Find out exactly where to complain for salary delays, illegal bonds, wrongful termination, PF default, and POSH harassment across India."
                }}
            />

            <PageHero 
                title="Authority Finder: Who Should I Complain To?"
                subtitle="Don't waste weeks filing complaints in the wrong department. Answer 4 simple questions to identify the exact government authority, verified portal, and mandatory evidence for your case."
                icon={Compass}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Breadcrumb items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Authority Finder', path: '/tools/authority-finder' }
                    ]} />

                    {/* Progress Indicator */}
                    <div className="bg-white dark:bg-gray-950 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-soft flex items-center justify-between text-xs font-bold text-gray-500">
                        <span className={step >= 1 ? "text-primary flex items-center gap-1" : ""}>1. Problem</span>
                        <span className="text-gray-300 dark:text-gray-700">→</span>
                        <span className={step >= 2 ? "text-primary flex items-center gap-1" : ""}>2. Role</span>
                        <span className="text-gray-300 dark:text-gray-700">→</span>
                        <span className={step >= 3 ? "text-primary flex items-center gap-1" : ""}>3. Company</span>
                        <span className="text-gray-300 dark:text-gray-700">→</span>
                        <span className={step >= 4 ? "text-primary flex items-center gap-1" : ""}>4. State</span>
                        <span className="text-gray-300 dark:text-gray-700">→</span>
                        <span className={step >= 5 ? "text-green-600 flex items-center gap-1" : ""}>5. Result</span>
                    </div>

                    {/* Step 1: Problem Selection */}
                    {step === 1 && (
                        <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft animate-fade-in space-y-6">
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <Scale className="w-6 h-6 text-primary" /> Step 1: What workplace problem are you facing?
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Select the primary issue affecting your employment or financial settlement:</p>
                            
                            <div className="grid grid-cols-1 gap-3">
                                {problems.map(prob => (
                                    <button
                                        key={prob.id}
                                        onClick={() => { setSelectedProblem(prob.id); setStep(2); }}
                                        className="p-4 rounded-2xl border text-left font-semibold text-sm transition-all flex items-center justify-between hover:border-primary hover:bg-primary/5 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200"
                                    >
                                        <span>{prob.label}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Employment Type */}
                    {step === 2 && (
                        <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft animate-fade-in space-y-6">
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <FileText className="w-6 h-6 text-primary" /> Step 2: What is your employment structure?
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Different laws govern direct permanent employees versus staffing agency/contract workers:</p>
                            
                            <div className="grid grid-cols-1 gap-3">
                                {employmentTypes.map(emp => (
                                    <button
                                        key={emp.id}
                                        onClick={() => { setSelectedEmpType(emp.id); setStep(3); }}
                                        className="p-4 rounded-2xl border text-left font-semibold text-sm transition-all flex items-center justify-between hover:border-primary hover:bg-primary/5 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200"
                                    >
                                        <span>{emp.label}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setStep(1)} className="text-xs text-gray-500 hover:underline">← Back to Step 1</button>
                        </div>
                    )}

                    {/* Step 3: Establishment Type */}
                    {step === 3 && (
                        <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft animate-fade-in space-y-6">
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <Building2 className="w-6 h-6 text-primary" /> Step 3: What type of company is it?
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Determines whether Central Sphere or State Labour Department has legal authority:</p>
                            
                            <div className="grid grid-cols-1 gap-3">
                                {establishmentTypes.map(est => (
                                    <button
                                        key={est.id}
                                        onClick={() => { setSelectedEstType(est.id); setStep(4); }}
                                        className="p-4 rounded-2xl border text-left font-semibold text-sm transition-all flex items-center justify-between hover:border-primary hover:bg-primary/5 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200"
                                    >
                                        <span>{est.label}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setStep(2)} className="text-xs text-gray-500 hover:underline">← Back to Step 2</button>
                        </div>
                    )}

                    {/* Step 4: State Selection */}
                    {step === 4 && (
                        <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft animate-fade-in space-y-6">
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-primary" /> Step 4: Where was your work location located?
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Jurisdiction lies with the Labour Commissioner where you physically worked or were registered:</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-1">
                                {states.map(st => (
                                    <button
                                        key={st.id}
                                        onClick={() => { setSelectedState(st.id); setStep(5); }}
                                        className="p-3.5 rounded-xl border text-left font-semibold text-sm transition-all hover:border-primary hover:bg-primary/5 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200"
                                    >
                                        {st.name}
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setStep(3)} className="text-xs text-gray-500 hover:underline">← Back to Step 3</button>
                        </div>
                    )}

                    {/* Step 5: Final Comprehensive Action Card */}
                    {step === 5 && (
                        <div className="space-y-6 animate-fade-in">
                            
                            {/* Primary Result Box */}
                            <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-6">
                                
                                <div className="flex items-start justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
                                    <div>
                                        <span className="text-xs font-extrabold text-primary uppercase tracking-wider block mb-1">
                                            Identified Competent Authority
                                        </span>
                                        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">
                                            {result.authority}
                                        </h3>
                                    </div>
                                    <button 
                                        onClick={handleReset} 
                                        className="text-xs font-bold text-gray-500 hover:text-primary flex items-center gap-1 border border-gray-200 dark:border-gray-800 px-3 py-1.5 rounded-lg"
                                    >
                                        <RefreshCw className="w-3.5 h-3.5" /> Start Over
                                    </button>
                                </div>

                                {/* Why this authority */}
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1.5">⚖️ Why This Authority Holds Legal Jurisdiction:</h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-150 dark:border-gray-800">
                                        {result.why}
                                    </p>
                                </div>

                                {/* Official Portal Box */}
                                <div className="p-5 bg-primary/10 border border-primary/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div>
                                        <span className="text-xs font-bold text-primary block">Official Verified Government Portal:</span>
                                        <p className="font-extrabold text-gray-900 dark:text-gray-100 text-base">{result.portalName}</p>
                                    </div>
                                    <a 
                                        href={result.portal} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-primary text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-primary/90 flex items-center gap-2 shrink-0 shadow-soft"
                                    >
                                        Open Official Portal <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>

                                {/* Governing Law */}
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">📜 Governing Legal Statute:</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{result.law}</p>
                                </div>

                                {/* Evidence Checklist */}
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-2">📁 Evidence to Attach with Complaint:</h4>
                                    <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                                        {result.documents.map((doc, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                                <span>{doc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Filing Procedure Steps */}
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-2">📋 Recommended Action Steps:</h4>
                                    <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-decimal list-inside bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                                        {result.steps.map((st, idx) => (
                                            <li key={idx} className="leading-relaxed">{st}</li>
                                        ))}
                                    </ol>
                                </div>

                                {/* Deep-Link to Draft Generator */}
                                <div className="border-t border-gray-100 dark:border-gray-800 pt-6 flex flex-col sm:flex-row gap-4">
                                    <Link 
                                        to={result.deepLink}
                                        className="flex-1 bg-accent text-white font-bold py-3.5 rounded-xl text-center hover:bg-accent-dark transition-colors flex items-center justify-center gap-2 shadow-soft"
                                    >
                                        <FileText className="w-4 h-4" /> Generate Pre-Drafted Complaint Letter
                                    </Link>
                                    <Link 
                                        to="/tools/evidence-checklist"
                                        className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 font-bold py-3.5 rounded-xl text-center text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        Open Evidence Checklist
                                    </Link>
                                </div>

                            </div>

                            {/* Caution Disclaimer */}
                            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 p-5 rounded-2xl text-xs text-amber-900 dark:text-amber-300 flex gap-3">
                                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                                <p>
                                    <strong>Procedural Guidance Only:</strong> Authority jurisdiction rules depend on establishment classifications under state notifications. Verify specific filing fees or jurisdictional boundaries with the local district labour office before filing.
                                </p>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
