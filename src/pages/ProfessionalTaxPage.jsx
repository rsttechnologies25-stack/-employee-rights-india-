import React, { useState, useMemo } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import ContentSection, { CalloutBox } from '../components/ContentSection';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import { Scale, Calculator, ShieldCheck, AlertCircle, Building2, HelpCircle, FileText, CheckCircle2, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProfessionalTaxPage() {
    const [selectedState, setSelectedState] = useState('TN');
    const [grossSalary, setGrossSalary] = useState(60000);
    const [basicSalary, setBasicSalary] = useState(30000);

    // State-wise PT calculation logic
    const ptCalculation = useMemo(() => {
        let ptMonthly = 0;
        let schedule = 'Monthly';
        let note = '';

        switch (selectedState) {
            case 'TN':
                schedule = 'Half-Yearly (Sept & March)';
                // Tamil Nadu half-yearly slabs based on half-yearly salary (Gross * 6)
                const hySalary = grossSalary * 6;
                if (hySalary <= 21000) ptMonthly = 0;
                else if (hySalary <= 30000) ptMonthly = 135 / 6;
                else if (hySalary <= 45000) ptMonthly = 315 / 6;
                else if (hySalary <= 60000) ptMonthly = 690 / 6;
                else if (hySalary <= 75000) ptMonthly = 1025 / 6;
                else ptMonthly = 1250 / 6; // Max ₹1,250 per half-year = ₹2,500/year
                note = 'Deducted twice a year in September and March. Max ₹2,500/year under Art. 276.';
                break;

            case 'KA':
                schedule = 'Monthly';
                if (grossSalary < 25000) ptMonthly = 0;
                else ptMonthly = 200; // ₹200/month (Feb ₹300)
                note = 'Salary ₹25,000+ pays ₹200/mo (February deduction is ₹300, total ₹2,500/yr).';
                break;

            case 'MH':
                schedule = 'Monthly';
                if (grossSalary <= 7500) ptMonthly = 0;
                else if (grossSalary <= 10000) ptMonthly = 175;
                else ptMonthly = 200; // ₹200/mo (Feb ₹300)
                note = 'Women earning up to ₹25,000/mo are exempt in Maharashtra.';
                break;

            case 'TS':
            case 'AP':
                schedule = 'Monthly';
                if (grossSalary <= 15000) ptMonthly = 0;
                else if (grossSalary <= 20000) ptMonthly = 150;
                else ptMonthly = 200;
                note = 'Max PT is ₹200/month for salary above ₹20,000.';
                break;

            case 'WB':
                schedule = 'Monthly';
                if (grossSalary <= 10000) ptMonthly = 0;
                else if (grossSalary <= 15000) ptMonthly = 110;
                else if (grossSalary <= 25000) ptMonthly = 130;
                else if (grossSalary <= 40000) ptMonthly = 150;
                else ptMonthly = 200;
                note = 'Slab rate varies from ₹110 to ₹200 per month.';
                break;

            case 'DL':
            case 'HR':
            case 'UP':
            case 'RJ':
            case 'PB':
            case 'HP':
                schedule = 'No PT';
                ptMonthly = 0;
                note = 'No Professional Tax is levied in this state/UT (0% PT).';
                break;

            default:
                ptMonthly = 200;
                note = 'Standard state slab applied.';
        }

        const epfMonthly = Math.min(basicSalary, 15000) * 0.12;
        const esiMonthly = grossSalary <= 21000 ? grossSalary * 0.0075 : 0;
        const totalStatutoryDeductions = ptMonthly + epfMonthly + esiMonthly;
        const maxPermissibleDeductions = grossSalary * 0.5; // Sec 7 Payment of Wages Act 50% limit

        return {
            ptMonthly: Math.round(ptMonthly),
            ptAnnual: Math.round(ptMonthly * 12),
            schedule,
            note,
            epfMonthly: Math.round(epfMonthly),
            esiMonthly: Math.round(esiMonthly),
            totalStatutoryDeductions: Math.round(totalStatutoryDeductions),
            maxPermissibleDeductions: Math.round(maxPermissibleDeductions)
        };
    }, [selectedState, grossSalary, basicSalary]);

    const ptFaqs = [
        {
            question: "What is the maximum Professional Tax an employer can deduct per year?",
            answer: "Under Article 276(2) of the Constitution of India, the maximum Professional Tax that can be levied on any employee by any State Government is strictly capped at ₹2,500 per year."
        },
        {
            question: "Is Professional Tax tax-deductible under Income Tax?",
            answer: "Yes. Professional Tax paid during the financial year is 100% deductible from your gross taxable salary under Section 16(iii) of the Income Tax Act (under the Old Tax Regime)."
        },
        {
            question: "Do all states in India collect Professional Tax?",
            answer: "No. States like Delhi, Haryana, Uttar Pradesh, Rajasthan, Punjab, Himachal Pradesh, and Chandigarh do NOT collect Professional Tax (0% PT)."
        },
        {
            question: "What happens if my employer deducts TDS but does not deposit it with the Income Tax Dept?",
            answer: "Under CBDT Office Memorandum O.M. 275/29/2014, the Income Tax Department CANNOT demand tax from the employee if tax was already deducted by the employer. The legal recovery and criminal prosecution under Section 276B lie solely against the employer."
        },
        {
            question: "What is the maximum total deduction allowed from my monthly salary?",
            answer: "Under Section 7 of the Payment of Wages Act, 1936, the total sum of all statutory and non-statutory deductions (PF, PT, TDS, ESI, loans) CANNOT exceed 50% of your gross monthly wages."
        }
    ];

    const relatedLinks = [
        { title: 'Take-Home Salary Calculator', subtitle: 'Calculate net in-hand salary', path: '/salary-calculator' },
        { title: 'Form 16 & TDS Rights', subtitle: 'Non-deposited TDS protection', path: '/form-16-rights' },
        { title: 'CTC Hidden Deduction Scanner', subtitle: 'Scan salary slip for illegal shifts', path: '/tools/ctc-deduction-scanner' },
        { title: 'Income Tax Calculator', subtitle: 'Old vs New Regime audit', path: '/tools/income-tax-calculator' }
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead path="/professional-tax" />

            <PageHero
                title="Professional Tax, TDS & Statutory Deductions Guide"
                subtitle="Complete statutory breakdown of Professional Tax (PT) state slabs, Article 276 caps, Income Tax TDS Section 192 rules, Form 16 rights, and Section 7 salary deduction limits."
                icon={Scale}
                gradient="primary"
            />

            <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
                <Breadcrumb items={[
                    { label: 'Salary & Pay', path: '/salary-calculation' },
                    { label: 'Professional Tax & TDS Guide', path: '/professional-tax' }
                ]} />

                {/* Quick Interactive PT & Deduction Audit Calculator Widget */}
                <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6">
                    <div className="border-b border-gray-100 dark:border-gray-850 pb-4 flex items-center justify-between">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-primary">Interactive Payroll Auditor</span>
                            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-0.5 flex items-center gap-2">
                                <Calculator className="w-5 h-5 text-primary" /> State PT & Statutory Deduction Calculator
                            </h3>
                        </div>
                        <span className="badge bg-primary/10 text-primary font-bold">Article 276 Compliant</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Select Work State:</label>
                            <select
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                                className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs font-bold outline-none focus:border-primary"
                            >
                                <option value="TN">🌴 Tamil Nadu</option>
                                <option value="KA">🏙️ Karnataka (Bangalore)</option>
                                <option value="MH">🌊 Maharashtra (Mumbai/Pune)</option>
                                <option value="TS">🚀 Telangana (Hyderabad)</option>
                                <option value="AP">🏛️ Andhra Pradesh</option>
                                <option value="WB">🌉 West Bengal</option>
                                <option value="DL">🏛️ Delhi (0% PT)</option>
                                <option value="HR">🌾 Haryana (Gurgaon - 0% PT)</option>
                                <option value="UP">🏰 Uttar Pradesh (Noida - 0% PT)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Monthly Gross Pay (₹):</label>
                            <input
                                type="number"
                                value={grossSalary}
                                onChange={(e) => setGrossSalary(Number(e.target.value))}
                                className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs font-bold outline-none focus:border-primary"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Monthly Basic Pay (₹):</label>
                            <input
                                type="number"
                                value={basicSalary}
                                onChange={(e) => setBasicSalary(Number(e.target.value))}
                                className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs font-bold outline-none focus:border-primary"
                            />
                        </div>
                    </div>

                    {/* Calculation Results Card */}
                    <div className="p-6 rounded-2xl border bg-gray-50/70 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
                            <div className="p-3 bg-white dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-800">
                                <span className="text-[10px] font-bold uppercase text-gray-500">Est. Monthly PT</span>
                                <p className="text-lg font-black text-primary">₹{ptCalculation.ptMonthly.toLocaleString('en-IN')}</p>
                                <span className="text-[10px] text-gray-400">{ptCalculation.schedule}</span>
                            </div>

                            <div className="p-3 bg-white dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-800">
                                <span className="text-[10px] font-bold uppercase text-gray-500">Employee EPF (12%)</span>
                                <p className="text-lg font-black text-blue-600">₹{ptCalculation.epfMonthly.toLocaleString('en-IN')}</p>
                                <span className="text-[10px] text-gray-400">Section 80C Eligible</span>
                            </div>

                            <div className="p-3 bg-white dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-800">
                                <span className="text-[10px] font-bold uppercase text-gray-500">Est. ESI (0.75%)</span>
                                <p className="text-lg font-black text-purple-600">₹{ptCalculation.esiMonthly.toLocaleString('en-IN')}</p>
                                <span className="text-[10px] text-gray-400">{grossSalary <= 21000 ? 'Eligible' : 'Exempt (>21k)'}</span>
                            </div>

                            <div className="p-3 bg-white dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-800">
                                <span className="text-[10px] font-bold uppercase text-gray-500">Sec 7 Max Deduction Cap</span>
                                <p className="text-lg font-black text-emerald-600">₹{ptCalculation.maxPermissibleDeductions.toLocaleString('en-IN')}</p>
                                <span className="text-[10px] text-gray-400">50% Gross Limit</span>
                            </div>
                        </div>

                        <p className="text-xs text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-3">
                            💡 <strong>State Rule Note:</strong> {ptCalculation.note}
                        </p>
                    </div>
                </div>

                {/* ═══ SECTION 1: PROFESSIONAL TAX LAWS ═══ */}
                <ContentSection title="1. Professional Tax (PT) Statutory Rules" icon={Scale} variant="info">
                    <div className="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                            <strong>Professional Tax (PT)</strong> is a state-level tax levied by State Governments on salaried employees and professionals under <strong>Article 276(2)</strong> of the Constitution of India.
                        </p>

                        <CalloutBox type="info" title="Constitutional Protection (Article 276)">
                            Article 276(2) of the Indian Constitution strictly caps Professional Tax at a <strong>maximum of ₹2,500 per year</strong> per individual across all states in India. No employer or state authority can deduct more than ₹2,500 annually.
                        </CalloutBox>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            <div className="p-4 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 space-y-2">
                                <h4 className="font-extrabold text-gray-900 dark:text-white text-sm">Key Professional Tax Rules:</h4>
                                <ul className="space-y-1.5 list-disc list-inside text-xs text-gray-600 dark:text-gray-400">
                                    <li><strong>Tax Deduction Benefit:</strong> PT paid is 100% deductible from gross salary under Section 16(iii) of the Income Tax Act (Old Regime).</li>
                                    <li><strong>Employer Collection Responsibility:</strong> Employers deduct PT from your monthly/half-yearly pay and deposit it with the State Commercial Tax Department.</li>
                                    <li><strong>Exempted States:</strong> Delhi, Haryana, Uttar Pradesh, Rajasthan, Punjab, and Himachal Pradesh do NOT levy Professional Tax.</li>
                                </ul>
                            </div>

                            <div className="p-4 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 space-y-2">
                                <h4 className="font-extrabold text-gray-900 dark:text-white text-sm">Employer Default & Non-Deposit:</h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    If your employer deducts PT from your salary but fails to deposit it with the State Government, the state tax department recovers the tax plus monthly interest (1% to 2%) directly from the employer, not the employee.
                                </p>
                            </div>
                        </div>
                    </div>
                </ContentSection>

                {/* ═══ SECTION 2: TDS & FORM 16 RIGHTS ═══ */}
                <ContentSection title="2. Tax Deducted at Source (TDS Sec 192) & Form 16 Rights" icon={FileText} variant="default">
                    <div className="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                            Under <strong>Section 192 of the Income Tax Act</strong>, employers must deduct advance Income Tax (TDS) from your monthly salary if your total estimated annual income exceeds the basic exemption limit.
                        </p>

                        <div className="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-2xl border border-rose-200 dark:border-rose-900/40 text-xs space-y-2">
                            <h4 className="font-extrabold text-rose-900 dark:text-rose-300 text-sm flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 text-rose-600" /> CBDT Directive on Non-Deposited TDS (O.M. 275/29/2014)
                            </h4>
                            <p className="text-rose-800 dark:text-rose-300 leading-relaxed">
                                If your payslip shows TDS deductions but your employer failed to deposit it with the IT Department (showing mismatch in Form 26AS), <strong>Assessing Officers CANNOT demand tax from the employee</strong>. File your ITR claiming TDS based on monthly payslips and cite CBDT Office Memorandum 275/29/2014.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Link to="/form-16-rights" className="flex-1 p-3 rounded-xl bg-primary text-white font-bold text-xs shadow-soft text-center flex items-center justify-center gap-2">
                                <FileText className="w-4 h-4" /> Read Full Form 16 & TDS Rights Guide
                            </Link>
                            <Link to="/tools/income-tax-calculator" className="flex-1 p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-bold text-xs text-center flex items-center justify-center gap-2">
                                <Calculator className="w-4 h-4 text-primary" /> Open Income Tax Calculator (Old vs New)
                            </Link>
                        </div>
                    </div>
                </ContentSection>

                {/* ═══ SECTION 3: PAYMENT OF WAGES ACT 50% CAP ═══ */}
                <ContentSection title="3. Statutory 50% Salary Deduction Cap (Section 7)" icon={ShieldCheck} variant="warning">
                    <div className="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                            Under <strong>Section 7 of the Payment of Wages Act, 1936</strong>, statutory deductions from an employee's salary are strictly regulated to prevent worker exploitation.
                        </p>

                        <CalloutBox type="danger" title="Statutory 50% Maximum Deduction Cap">
                            The total combined amount of ALL monthly salary deductions (PF, PT, TDS, ESI, LWF, loan repayments) <strong>CANNOT exceed 50%</strong> of the employee's gross monthly pay in any given wage period.
                        </CalloutBox>

                        <div className="p-4 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 space-y-2 text-xs">
                            <h4 className="font-extrabold text-gray-900 dark:text-white text-sm">Examples of Unlawful Salary Deductions:</h4>
                            <ul className="space-y-1.5 list-disc list-inside text-gray-600 dark:text-gray-400">
                                <li><strong>Performance Fines:</strong> Deducting salary for missing sales targets or performance bugs without show-cause notice.</li>
                                <li><strong>Laptop / Asset Penalties:</strong> Arbitrarily deducting laptop damage costs from monthly salary or F&F settlement.</li>
                                <li><strong>Employer PF Shift:</strong> Deducting the employer's 12% EPF share directly out of the employee's gross take-home pay.</li>
                            </ul>
                        </div>
                    </div>
                </ContentSection>

                <FAQSection faqs={ptFaqs} title="Professional Tax & TDS FAQs" />

                <InternalLinks currentPath="/professional-tax" links={relatedLinks} />
            </div>
        </div>
    );
}
