import React, { useState, useMemo } from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle, Info, Calculator, FileText, Scale, ArrowRight, HelpCircle, ExternalLink } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import InternalLinks from '../components/InternalLinks';
import ShareButtons from '../components/ShareButtons';
import PDFExportButton from '../components/PDFExportButton';

export default function CTCDeductionScannerPage() {
    const [monthlyGross, setMonthlyGross] = useState(60000);
    const [monthlyBasic, setMonthlyBasic] = useState(25000);
    const [employeePF, setEmployeePF] = useState(1800);
    const [employerPFListedInGross, setEmployerPFListedInGross] = useState(false); // Employer PF deducted from gross
    const [gratuityDeductedMonthly, setGratuityDeductedMonthly] = useState(false); // Gratuity deducted monthly from pay
    const [arbitraryFineDeduction, setArbitraryFineDeduction] = useState(0); // Fines or laptop penalty

    // Comprehensive Compliance Audit Calculation
    const auditResults = useMemo(() => {
        const issues = [];
        const basicRatio = (monthlyBasic / monthlyGross) * 100;
        const expectedPF = Math.min(monthlyBasic, 15000) * 0.12;

        // 1. Basic Salary Ratio Audit
        if (basicRatio < 50) {
            issues.push({
                severity: 'warning',
                title: 'Basic Salary is Below 50% of Gross Pay',
                finding: `Your Basic Salary (₹${monthlyBasic.toLocaleString('en-IN')}) is ${basicRatio.toFixed(1)}% of Gross Pay.`,
                legalBasis: 'Code on Wages, 2019 — Section 2(y) Wage Definition',
                explanation: 'Under the wage definition of the Code on Wages, basic salary plus DA should constitute at least 50% of total remuneration to prevent artificial allowance padding.',
                recommendation: 'Request HR for a compliant CTC restructuring. A lower Basic reduces your statutory PF accumulation and gratuity entitlement.'
            });
        }

        // 2. Employer PF Contribution Shifted to Employee Gross
        if (employerPFListedInGross) {
            issues.push({
                severity: 'danger',
                title: 'Potential Issue: Employer PF Contribution Subtracted from Gross Pay',
                finding: 'Employer EPF contribution (12%) appears to be deducted directly from your monthly gross take-home salary.',
                legalBasis: 'Employees Provident Funds & Misc. Provisions Act, 1952 — Section 6 / Supreme Court Precedent (Vivekananda Vidyamandir)',
                explanation: 'Statutory employer EPF contribution (12%) is an employer liability. While employers may include it in the annual CTC figure, deducting the employer share from gross wages to reduce net take-home is inconsistent with statutory wage recovery rules.',
                recommendation: 'Verify whether your appointment letter defines CTC vs Gross Salary. If employer PF is deducted from gross salary, seek written clarification from payroll.'
            });
        }

        // 3. Monthly Gratuity Deduction from Salary Slip
        if (gratuityDeductedMonthly) {
            issues.push({
                severity: 'danger',
                title: 'Potential Issue: Monthly Gratuity Deduction from In-Hand Salary',
                finding: 'Gratuity component is being deducted monthly from your net salary slip.',
                legalBasis: 'Payment of Gratuity Act, 1972 — Section 4 & Section 13',
                explanation: 'Gratuity is a statutory terminal benefit payable upon separation after 4 years 240 days of continuous service. It cannot be deducted monthly from an employee in-hand monthly wages.',
                recommendation: 'Request payroll to remove monthly gratuity deductions from gross in-hand wages. Gratuity should only reflect as a company CTC provision, not a monthly salary deduction.'
            });
        }

        // 4. Arbitrary Fines / Asset Penalties
        if (arbitraryFineDeduction > 0) {
            issues.push({
                severity: 'danger',
                title: 'Potential Issue: Arbitrary Penalty / Fine Deduction',
                finding: `Deduction of ₹${arbitraryFineDeduction.toLocaleString('en-IN')} for fines, performance penalties, or asset damage.`,
                legalBasis: 'Payment of Wages Act, 1936 — Section 7 & Section 8',
                explanation: 'Section 7 of the Payment of Wages Act explicitly lists permitted deductions. Employer cannot impose arbitrary performance fines or laptop damage deductions without prior notice, show cause, and formal enquiry.',
                recommendation: 'Issue a formal clarification request to HR citing Section 7 of Payment of Wages Act demanding refund of unauthorized deductions.'
            });
        }

        return {
            basicRatio,
            expectedPF,
            issueCount: issues.length,
            issues
        };
    }, [monthlyGross, monthlyBasic, employeePF, employerPFListedInGross, gratuityDeductedMonthly, arbitraryFineDeduction]);

    const generatePdfText = () => {
        return `SALARY SLIP & CTC HIDDEN DEDUCTION COMPLIANCE AUDIT REPORT\n` +
               `Generated via Employee Rights India (https://employee-rights.rexonsofttech.in)\n` +
               `Last Verified: August 2026 | Jurisdictional Framework: Central & State Labour Laws\n` +
               `============================================================\n\n` +
               `INPUT SUMMARY:\n` +
               `- Monthly Gross Salary: ₹${monthlyGross.toLocaleString('en-IN')}\n` +
               `- Monthly Basic Salary: ₹${monthlyBasic.toLocaleString('en-IN')} (${auditResults.basicRatio.toFixed(1)}% of Gross)\n` +
               `- Employee PF Contribution: ₹${employeePF.toLocaleString('en-IN')}\n` +
               `- Employer PF Deducted from Gross: ${employerPFListedInGross ? 'YES (Potential Issue)' : 'NO'}\n` +
               `- Monthly Gratuity Deducted from Pay: ${gratuityDeductedMonthly ? 'YES (Potential Issue)' : 'NO'}\n` +
               `- Penalty/Fine Deduction: ₹${arbitraryFineDeduction.toLocaleString('en-IN')}\n\n` +
               `AUDIT FINDINGS (${auditResults.issueCount} Potential Issues Identified):\n\n` +
               auditResults.issues.map((iss, i) => 
                   `[${i + 1}] ${iss.title.toUpperCase()}\n` +
                   `    Finding: ${iss.finding}\n` +
                   `    Legal Statute: ${iss.legalBasis}\n` +
                   `    Analysis: ${iss.explanation}\n` +
                   `    Action: ${iss.recommendation}\n`
               ).join('\n') +
               `\nLEGAL DISCLAIMER: This audit provides general legal guidance and statutory parameters. It does not constitute a formal judicial order. Consult a qualified labour law advocate for court proceedings.`;
    };

    const relatedLinks = [
        { title: 'Take-Home Salary Calculator', subtitle: 'Estimate CTC in-hand breakdown', path: '/salary-calculator' },
        { title: 'Grievance Letter Generator', subtitle: 'Draft a formal salary deduction complaint', path: '/tools/grievance-generator' },
        { title: 'Authority Finder Tool', subtitle: 'Find your Labour Commissioner office', path: '/tools/authority-finder' },
        { title: 'Delayed Salary Guide', subtitle: 'Payment of Wages Act rules', path: '/delayed-salary' }
    ];

    return (
        <div>
            <SEOHead path="/tools/ctc-deduction-scanner" />

            <PageHero
                title="Salary Slip & CTC Hidden Deduction Scanner"
                subtitle="Audit your monthly salary slip for illegal employer PF shifts, monthly gratuity deductions, and Basic < 50% CTC issues."
                icon={Calculator}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <Breadcrumb items={[
                            { label: 'Tools', path: '/tools' },
                            { label: 'CTC Deduction Scanner', path: '/tools/ctc-deduction-scanner' }
                        ]} />
                        <div className="flex items-center gap-2 flex-wrap">
                            <ShareButtons title="Salary Slip & CTC Hidden Deduction Scanner" />
                            <PDFExportButton
                                documentTitle="CTC & Salary Slip Compliance Audit"
                                documentContent={generatePdfText()}
                                buttonText="Export Audit PDF"
                            />
                        </div>
                    </div>

                    {/* ── Guidance Banner ── */}
                    <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-3xl p-6 flex items-start gap-4 shadow-soft">
                        <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                            <h2 className="font-extrabold text-blue-900 dark:text-blue-200 text-sm sm:text-base">
                                Understanding CTC vs. In-Hand Salary Components
                            </h2>
                            <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                                Under Indian labor statutes (EPF Act 1952, Payment of Gratuity Act 1972, Payment of Wages Act 1936), <strong>statutory employer contributions cannot be deducted from your monthly gross in-hand salary</strong> to artificially reduce take-home pay.
                            </p>
                        </div>
                    </div>

                    {/* ── Input Form Card ── */}
                    <div className="bg-white dark:bg-gray-950 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 sm:p-8 space-y-6">
                        <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-primary" />
                            Enter Salary Slip & CTC Line Items
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            {/* Monthly Gross */}
                            <div>
                                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide block mb-2">
                                    Monthly Gross Salary (₹)
                                </label>
                                <input
                                    type="number"
                                    value={monthlyGross}
                                    onChange={(e) => setMonthlyGross(Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            {/* Monthly Basic */}
                            <div>
                                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide block mb-2">
                                    Monthly Basic Salary + DA (₹)
                                </label>
                                <input
                                    type="number"
                                    value={monthlyBasic}
                                    onChange={(e) => setMonthlyBasic(Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            {/* Employee PF */}
                            <div>
                                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide block mb-2">
                                    Employee PF Deduction (12%) (₹)
                                </label>
                                <input
                                    type="number"
                                    value={employeePF}
                                    onChange={(e) => setEmployeePF(Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            {/* Arbitrary Fine */}
                            <div>
                                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide block mb-2">
                                    Arbitrary Fine / Laptop Penalty (₹)
                                </label>
                                <input
                                    type="number"
                                    value={arbitraryFineDeduction}
                                    onChange={(e) => setArbitraryFineDeduction(Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                        </div>

                        {/* Toggles */}
                        <div className="pt-4 border-t border-gray-100 dark:border-gray-850 space-y-4">
                            
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={employerPFListedInGross}
                                    onChange={(e) => setEmployerPFListedInGross(e.target.checked)}
                                    className="mt-1 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                                />
                                <div>
                                    <span className="font-bold text-sm text-gray-800 dark:text-gray-200 block">
                                        Employer EPF 12% share is deducted directly from monthly gross salary
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        Check if employer's 12% EPF contribution is subtracted from your gross take-home wages instead of being an external employer CTC provision.
                                    </span>
                                </div>
                            </label>

                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={gratuityDeductedMonthly}
                                    onChange={(e) => setGratuityDeductedMonthly(e.target.checked)}
                                    className="mt-1 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                                />
                                <div>
                                    <span className="font-bold text-sm text-gray-800 dark:text-gray-200 block">
                                        Gratuity is deducted monthly from your net salary slip
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        Check if a monthly amount is listed under deductions for Gratuity on your monthly payslip.
                                    </span>
                                </div>
                            </label>

                        </div>
                    </div>

                    {/* ── Audit Findings Section ── */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-extrabold text-gray-900 dark:text-white">
                                Compliance Audit Findings
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${
                                auditResults.issueCount > 0 
                                    ? 'bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-300' 
                                    : 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-300'
                            }`}>
                                {auditResults.issueCount > 0 ? `${auditResults.issueCount} Potential Issues` : 'Fully Compliant'}
                            </span>
                        </div>

                        {auditResults.issues.length === 0 ? (
                            <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-3xl p-6 text-center space-y-2">
                                <CheckCircle className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                                <h4 className="font-bold text-emerald-900 dark:text-emerald-200 text-sm">No Statutory Non-Compliance Issues Flagged</h4>
                                <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-lg mx-auto">
                                    Your salary slip parameters align with basic statutory rules under the EPF Act, Payment of Gratuity Act, and Wage Code guidance.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {auditResults.issues.map((iss, idx) => (
                                    <div key={idx} className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-soft p-6 space-y-3">
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className={`w-5 h-5 shrink-0 mt-0.5 ${
                                                iss.severity === 'danger' ? 'text-red-600' : 'text-amber-500'
                                            }`} />
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                                                    {iss.title}
                                                </h4>
                                                <p className="text-xs font-semibold text-primary mt-0.5">
                                                    {iss.finding}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 text-xs space-y-2 border border-gray-100 dark:border-gray-850">
                                            <div>
                                                <span className="font-extrabold uppercase text-[10px] text-gray-500 block">Statutory Legal Basis:</span>
                                                <span className="font-bold text-gray-800 dark:text-gray-200">{iss.legalBasis}</span>
                                            </div>
                                            <div>
                                                <span className="font-extrabold uppercase text-[10px] text-gray-500 block">Analysis:</span>
                                                <p className="text-gray-650 dark:text-gray-400 leading-relaxed">{iss.explanation}</p>
                                            </div>
                                            <div>
                                                <span className="font-extrabold uppercase text-[10px] text-gray-500 block">Recommended Action:</span>
                                                <p className="text-gray-800 dark:text-gray-200 font-semibold">{iss.recommendation}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* ── Statutory Governance Notice ── */}
                    <div className="p-4 rounded-2xl bg-gray-100 dark:bg-gray-850 text-xs text-gray-600 dark:text-gray-400 space-y-1">
                        <p className="font-bold text-gray-800 dark:text-gray-200">Legal Guidance Notice & Parameters:</p>
                        <p className="leading-relaxed">
                            This audit tool evaluates user-provided figures against central statutory guidelines (EPF Act 1952, Payment of Gratuity Act 1972, Code on Wages 2019). It provides educational analysis and does not constitute a formal judicial order or legal advice. Verify appointment letter terms with legal counsel before filing petitions.
                        </p>
                        <p className="text-[11px] text-gray-500 pt-1">Last Statutory Verification: August 2026 | Source: Ministry of Labour & Employment (labour.gov.in)</p>
                    </div>

                    <InternalLinks currentPath="/tools/ctc-deduction-scanner" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
