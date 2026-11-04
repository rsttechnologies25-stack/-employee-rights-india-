import React, { useState, useMemo } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import { 
    Gift, Sparkles, Calculator, Scale, AlertTriangle, CheckCircle2, 
    HelpCircle, FileText, Building2, Calendar, Coins, ShieldCheck, 
    Copy, Check, Info, Train, Percent
} from 'lucide-react';

export default function DiwaliBonusPage() {
    // Calculator States
    const [calcTab, setCalcTab] = useState('statutory'); // statutory, central_adhoc, railway_plb, corporate
    const [basicPay, setBasicPay] = useState(18000);
    const [monthsWorked, setMonthsWorked] = useState(12);
    const [bonusRate, setBonusRate] = useState(8.33); // 8.33% to 20%
    const [stateMinWage, setStateMinWage] = useState(12000); // minimum wage ceiling benchmark
    const [corpBonusType, setCorpBonusType] = useState('fixed'); // fixed or percent
    const [corpAmount, setCorpAmount] = useState(25000);

    // Copy template state
    const [copied, setCopied] = useState(false);

    // Diagnostic Wizard States
    const [wizardSector, setWizardSector] = useState('private'); // private, central, railway, tech
    const [wizardBasic, setWizardBasic] = useState('below_21k'); // below_21k, above_21k
    const [wizardDays, setWizardDays] = useState('more_30'); // less_30, more_30
    const [wizardStatus, setWizardStatus] = useState('active'); // active, notice, resigned, terminated_fraud

    // ── Statutory Bonus Calculation ──
    const statutoryResult = useMemo(() => {
        const basic = Number(basicPay) || 0;
        const months = Math.min(12, Math.max(1, Number(monthsWorked) || 12));
        const rate = Number(bonusRate) || 8.33;

        const isEligible = basic <= 21000;
        
        // Calculation Ceiling under Section 12:
        // Bonus calculated on ₹7,000 or the minimum wage for scheduled employment, whichever is higher.
        const effectiveCalculationCeiling = Math.max(7000, Number(stateMinWage) || 7000);
        const calculationBaseMonthly = Math.min(basic, effectiveCalculationCeiling);
        
        const totalAnnualWageForBonus = calculationBaseMonthly * months;
        const totalBonus = (totalAnnualWageForBonus * rate) / 100;
        const minStatutoryPayable = Math.max(100, (calculationBaseMonthly * months * 8.33) / 100);
        const maxStatutoryPayable = (calculationBaseMonthly * months * 20) / 100;

        return {
            isEligible,
            effectiveCalculationCeiling,
            calculationBaseMonthly,
            totalAnnualWageForBonus,
            totalBonus: Math.round(totalBonus),
            minStatutoryPayable: Math.round(minStatutoryPayable),
            maxStatutoryPayable: Math.round(maxStatutoryPayable),
            prorataFactor: (months / 12).toFixed(2),
        };
    }, [basicPay, monthsWorked, bonusRate, stateMinWage]);

    // ── Central Govt Ad-hoc (Non-PLB) 30 Days Calculation ──
    const adhocResult = useMemo(() => {
        const months = Math.min(12, Math.max(1, Number(monthsWorked) || 12));
        const fullYearBonus = Math.round((7000 / 30.4) * 30); // ~₹6,908
        const prorataBonus = Math.round((fullYearBonus * months) / 12);
        return {
            fullYearBonus,
            prorataBonus,
            eligibleMonths: months >= 6,
        };
    }, [monthsWorked]);

    // ── Indian Railways PLB (78 Days) Calculation ──
    const railwayResult = useMemo(() => {
        const months = Math.min(12, Math.max(1, Number(monthsWorked) || 12));
        const fullYearBonus = 17951;
        const prorataBonus = Math.round((fullYearBonus * months) / 12);
        return {
            fullYearBonus,
            prorataBonus,
        };
    }, [monthsWorked]);

    // ── Diagnostic Result ──
    const diagnosticResult = useMemo(() => {
        if (wizardStatus === 'terminated_fraud') {
            return {
                status: 'disqualified',
                badge: 'Disqualified under Sec 9',
                title: 'No Statutory Right (Section 9 Disqualification)',
                desc: 'Under Section 9 of the Payment of Bonus Act, 1965, an employee dismissed for fraud, riotous/violent behaviour on premises, or theft/misappropriation/sabotage of employer property forfeits statutory bonus.',
                legalAction: 'Disqualification is valid ONLY if formal domestic enquiry proved theft, violence or fraud. Cannot be disqualified arbitrarily or for low performance.',
                severity: 'danger'
            };
        }

        if (wizardDays === 'less_30') {
            return {
                status: 'not_eligible_days',
                badge: 'Under 30 Days Service',
                title: 'Did Not Meet Minimum 30 Days Service Requirement',
                desc: 'Section 8 of the Payment of Bonus Act requires an employee to have worked at least 30 working days in the financial year to be eligible for statutory bonus.',
                legalAction: 'You must complete at least 30 working days in that financial year (April 1 to March 31) to claim pro-rata statutory bonus.',
                severity: 'warning'
            };
        }

        if (wizardSector === 'railway') {
            return {
                status: 'railway_plb',
                badge: 'Eligible for 78-Day PLB',
                title: 'Fully Eligible for 78 Days Railway PLB (₹17,951)',
                desc: 'Eligible non-gazetted railway staff (Loco Pilots, Track Maintainers, Station Masters, Train Managers, Technicians, etc.) receive 78 days wage bonus capped at ₹17,951 under Railway Board RBE No. 84/2026.',
                legalAction: 'Disbursed directly by Indian Railways ahead of Durga Puja / Diwali. RPF/RPSF receive separate 30-day ad-hoc bonus (~₹6,908).',
                severity: 'success'
            };
        }

        if (wizardSector === 'central') {
            return {
                status: 'central_adhoc',
                badge: 'Eligible for 30-Day Ad-hoc',
                title: 'Eligible for 30 Days Non-PLB Bonus (₹6,908)',
                desc: 'Central Government Group C and Non-Gazetted Group B employees not covered by any productivity-linked scheme are entitled to 30 days emoluments capped at ₹6,908.',
                legalAction: 'Requires at least 6 months continuous service during the financial year ending March 31.',
                severity: 'success'
            };
        }

        if (wizardBasic === 'below_21k') {
            if (wizardStatus === 'notice' || wizardStatus === 'resigned') {
                return {
                    status: 'mandatory_bonus_resigned',
                    badge: '100% Mandatory — HR Cannot Withhold!',
                    title: 'Statutory Right Intact: HR Cannot Withhold During Notice/Resignation',
                    desc: 'Under Section 8 & Section 10 of the Payment of Bonus Act, 1965, resigning or serving a notice period DOES NOT forfeit your statutory bonus. Any contractual "active employee on payout date" clause is VOID against statutory law.',
                    legalAction: 'The employer MUST pay your pro-rata statutory bonus (min 8.33% up to 20%) in your Full & Final (F&F) settlement. If unpaid by November 30, file a complaint before the Labour Commissioner under Section 21.',
                    severity: 'success'
                };
            }
            return {
                status: 'statutory_mandatory',
                badge: 'Mandatory Statutory Bonus (8.33% – 20%)',
                title: 'You Have an Absolute Legal Right to Statutory Diwali Bonus',
                desc: 'Because your Basic Salary + DA is ≤ ₹21,000 and you completed 30+ working days, your employer is legally obligated to pay between 8.33% and 20% bonus by November 30 (Section 19). Even if the company incurred financial losses, the 8.33% minimum is MANDATORY.',
                legalAction: 'Payment must be made in cash or bank transfer. The employer CANNOT substitute this with sweet hampers, gift vouchers, or dry fruits.',
                severity: 'success'
            };
        }

        // Basic > 21k
        if (wizardStatus === 'notice' || wizardStatus === 'resigned') {
            return {
                status: 'contractual_review',
                badge: 'Contractual / Policy Dependent',
                title: 'Governed by Employment Contract & Variable Pay Policy',
                desc: 'Because your Basic salary exceeds ₹21,000/month, you are not covered under the Payment of Bonus Act, 1965. Your Diwali / festive bonus is governed by your Appointment Letter, CTC Annexure, and Company Policy.',
                legalAction: 'If your contract states a guaranteed festive ex-gratia bonus or you completed the full appraisal cycle for performance bonus, withholding it solely due to notice period can be contested as an arbitrary wage deduction under the Indian Contract Act.',
                severity: 'warning'
            };
        }

        return {
            status: 'corporate_bonus',
            badge: 'Contractual / Ex-Gratia Bonus',
            title: 'Ex-Gratia or Performance Bonus (Private Sector)',
            desc: 'Employees earning > ₹21,000 Basic are paid Diwali bonus either as an ex-gratia festive payout or as part of annual variable pay / contractual CTC component.',
            legalAction: 'Check your CTC breakdown. If "Festive Bonus" or "Statutory Bonus" is explicitly listed as a monthly or annual CTC component, it is legally payable wages.',
            severity: 'info'
        };
    }, [wizardSector, wizardBasic, wizardDays, wizardStatus]);

    // Copy demand letter
    const copyTemplate = () => {
        const text = `To,
The Head of Human Resources / Payroll Department
[Company / Establishment Name]
[Company Address]

Subject: Formal Demand for Payment of Statutory Annual / Diwali Bonus under Payment of Bonus Act, 1965

Dear Sir/Madam,

I am writing to formally request the disbursement of my statutory annual bonus for the financial year [e.g., 2025–2026] in accordance with the provisions of the Payment of Bonus Act, 1965.

Details of my employment are as follows:
- Employee Name: [Your Full Name]
- Employee ID: [Your Employee ID]
- Designation: [Your Designation]
- Monthly Basic Salary + Dearness Allowance (DA): ₹[Your Basic + DA Amount]
- Total Days Worked in Accounting Financial Year: [e.g., 240 days / 12 months]

Legal Entitlement Summary:
1. Under Section 8 of the Payment of Bonus Act, 1965, any employee who has worked for not less than thirty (30) working days in an accounting year is entitled to an annual bonus.
2. Under Section 10 of the Act, every employer is legally bound to pay a minimum bonus of 8.33% of the wages earned, irrespective of whether the establishment has an allocable surplus or has incurred losses.
3. Under Section 19 of the Act, all bonus amounts must be disbursed within a statutory period of eight (8) months from the close of the accounting year (on or before 30th November).
4. As confirmed by numerous judicial precedents, statutory bonus cannot be withheld or forfeited on grounds of serving a notice period, resignation, or internal "active employee" clauses. Section 9 enumerates the only valid grounds of disqualification (fraud, violent behavior, or theft), none of which apply to me.

I request you to compute and credit my statutory bonus (calculated in accordance with Section 12) to my registered bank account within seven (7) days of receipt of this communication.

Failing timely disbursement by the statutory deadline of 30th November, I will be constrained to file a formal recovery application before the Controlling Authority / Labour Commissioner under Section 21 of the Payment of Bonus Act, 1965, and seek penal interest and damages.

Thanking you,

Yours sincerely,
[Your Name]
[Contact Number]
[Email Address]
Date: [Current Date]`;

        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    const diwaliFaqs = [
        {
            question: "Is Diwali Bonus mandatory for all private companies in India?",
            answer: "Under the Payment of Bonus Act, 1965, statutory bonus is MANDATORY for every factory and every establishment employing 20 or more persons (and 10+ in certain states like Maharashtra). Any employee drawing a Basic Salary + DA up to ₹21,000 per month who has worked for at least 30 working days in the financial year has an absolute statutory right to receive a minimum bonus of 8.33% of their salary, even if the employer incurs financial losses."
        },
        {
            question: "What is the statutory deadline for employers to pay the Diwali Bonus?",
            answer: "Under Section 19 of the Payment of Bonus Act, 1965, the annual statutory bonus must be paid within 8 months from the close of the accounting year. Since the Indian financial year closes on March 31, the statutory deadline is 30th November. Because Diwali falls in October or November, Indian employers traditionally pay this statutory bonus ahead of Diwali festivities."
        },
        {
            question: "Can my employer give sweets, crackers, or gift hampers instead of a cash Diwali bonus?",
            answer: "NO. Under Section 10 & 11 of the Payment of Bonus Act, statutory bonus MUST be paid in money (direct bank transfer or cheque). Gifting sweets, dry fruit hampers, smartphones, or electronics cannot be treated as a substitute or offset for your statutory bonus. Employers may offer gift boxes as an additional festive gesture, but cash statutory dues must still be paid in full."
        },
        {
            question: "Can HR withhold my Diwali bonus because I am serving my notice period or recently resigned?",
            answer: "ABSOLUTELY NOT. Under the Payment of Bonus Act, statutory bonus is an earned wage right based on the working days completed in the preceding financial year. Employers often cite internal 'active employee on payout date' policies, but Indian courts have consistently ruled that contractual employment clauses cannot override statutory enactments. Pro-rata bonus must be paid in your Full & Final (F&F) settlement."
        },
        {
            question: "What is the minimum and maximum statutory bonus percentage?",
            answer: "Under Section 10, the statutory minimum bonus is 8.33% of the basic wages (or ₹100, whichever is higher), which equates to approximately one month's basic wage. Under Section 11, the statutory maximum bonus is 20% of basic wages, payable if the establishment has sufficient 'allocable surplus' computed as per the Second and Third Schedules of the Act."
        },
        {
            question: "How is the statutory bonus calculated? What is the ₹7,000 ceiling?",
            answer: "Under Section 12 of the Payment of Bonus Act, for employees earning between ₹7,000 and ₹21,000 Basic + DA, the bonus is calculated on ₹7,000 per month OR the minimum wage for scheduled employment fixed by the appropriate government, whichever is HIGHER. For example, if your Basic is ₹18,000 and State Minimum Wage is ₹13,000, your bonus is calculated on ₹13,000, not on ₹7,000."
        },
        {
            question: "I earn more than ₹21,000 basic salary. Am I legally entitled to a Diwali bonus?",
            answer: "Employees earning a monthly Basic Salary + DA exceeding ₹21,000 fall outside the mandatory coverage of the Payment of Bonus Act, 1965. For such employees, bonus entitlement is strictly contractual — governed by your Appointment Letter, CTC structure (e.g., Performance Bonus, Variable Pay, Festive Ex-Gratia), or company custom. However, if 'Statutory / Annual Bonus' is deducted as part of your fixed CTC, the employer is legally obligated to disburse it."
        },
        {
            question: "What Diwali bonus do Central Government and Railway employees get in 2026?",
            answer: "For 2026: (1) Indian Railways non-gazetted employees receive a 78-day Productivity Linked Bonus (PLB) capped at ₹17,951 under Railway Board RBE No. 84/2026. (2) Other eligible Central Government Group C and Non-Gazetted Group B employees receive a 30-day Ad-hoc (Non-PLB) bonus capped at ₹6,908 based on a ₹7,000 monthly ceiling."
        },
        {
            question: "Is Diwali Bonus taxable under Income Tax?",
            answer: "Yes. Cash bonuses and direct bank credits received from your employer are treated as 'Profits in lieu of Salary' under Section 17(1) of the Income Tax Act, 1961, and are fully taxable at your applicable slab rate. Employers deduct TDS under Section 192. However, non-cash gifts/vouchers in kind are exempt up to an aggregate of ₹15,000 per financial year under updated perquisite valuation rules."
        },
        {
            question: "What are the only legal grounds on which an employer can disqualify an employee from bonus?",
            answer: "Under Section 9 of the Payment of Bonus Act, an employee can ONLY be disqualified if dismissed from service for: (a) Fraud, (b) Riotous or violent behaviour while on the premises of the establishment, or (c) Theft, misappropriation, or sabotage of any property of the establishment. Low appraisal ratings, serving notice period, or resigning voluntarily are NOT legal grounds for disqualification."
        },
        {
            question: "Are contract workers and temporary staff entitled to Diwali Bonus?",
            answer: "YES. Under the Contract Labour (Regulation and Abolition) Act, 1970 and Section 21 of the CLRA Act, contract workers who have worked for 30 or more days in an establishment and earn up to ₹21,000/month are fully entitled to statutory bonus. The primary contractor is liable to pay it; if the contractor defaults, the principal employer is legally bound to disburse it."
        },
        {
            question: "What is the difference between Diwali Bonus and Diwali Advance?",
            answer: "A Diwali Bonus is non-refundable earned remuneration/statutory benefit that belongs to the employee. A Diwali Advance, on the other hand, is an interest-free salary loan given by the company ahead of the festival which is subsequently recovered through monthly deductions from your future salary slips."
        },
        {
            question: "Can a newly established company refuse to pay Diwali bonus during its first 5 years?",
            answer: "Under Section 16 of the Payment of Bonus Act, newly set-up establishments are exempt from paying bonus for the first 5 accounting years ONLY IF they do not derive any profit. However, the moment the new establishment derives profit in any of those initial 5 years, statutory bonus becomes immediately payable for that year."
        },
        {
            question: "What legal action can I take if my employer refuses to pay my statutory Diwali bonus?",
            answer: "If your employer fails to pay by November 30: (1) Send a formal demand letter citing Section 10 & 19 of the Payment of Bonus Act. (2) File a claim application before the Controlling Authority / Assistant Labour Commissioner (ALC) under Section 21 for recovery of money due. (3) Lodge an online grievance on the Ministry of Labour's Samadhan portal or CPGRAMS. Under Section 28, non-compliant employers face imprisonment up to 6 months and statutory fines."
        }
    ];

    return (
        <div className="py-10 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Diwali Bonus Rules 2026: Eligibility, 8.33% to 20% Calculator & Legal Rights India"
                description="Comprehensive guide to Diwali & Statutory Bonus in India under Payment of Bonus Act 1965. Calculate your bonus, check notice period rules, 78-day Railway PLB, Central Govt 30-day ad-hoc bonus, and tax rules."
                path="/diwali-bonus"
                keywords="diwali bonus rules 2026, payment of bonus act 1965, diwali bonus calculator india, statutory bonus 8.33 percent, railway plb 78 days 2026, central govt adhoc bonus 30 days, can employer withhold diwali bonus notice period, diwali bonus tax exemption gift voucher 15000"
            />

            <div className="max-w-5xl mx-auto space-y-10">
                <Breadcrumb 
                    items={[
                        { label: 'Employee Rights', path: '/rights' },
                        { label: 'Diwali & Statutory Bonus', path: '/diwali-bonus' }
                    ]} 
                />

                {/* Hero Banner */}
                <div className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 rounded-3xl p-8 md:p-12 text-white shadow-xl">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-amber-100 text-xs md:text-sm font-semibold mb-4 border border-white/20">
                            <Sparkles className="w-4 h-4 text-yellow-300" />
                            Festive & Statutory Bonus Master Hub • Updated November 2026
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center gap-3">
                            <Gift className="w-9 h-9 md:w-12 h-12 text-yellow-300 flex-shrink-0" />
                            Diwali Bonus & Statutory Rights Guide (2026)
                        </h1>
                        <p className="text-amber-100 text-lg md:text-xl max-w-3xl leading-relaxed">
                            Everything you need to know about your annual festive bonus in India: <strong>Payment of Bonus Act 1965</strong>, 8.33% to 20% statutory calculations, 30-day Central Govt ad-hoc bonus, 78-day Railway PLB, and legal protections against HR withholding.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
                            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-yellow-300" />
                                <span>Statutory Deadline: <strong>30th November</strong> (Sec 19)</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 flex items-center gap-2">
                                <Scale className="w-4 h-4 text-yellow-300" />
                                <span>Wage Eligibility: <strong>Basic ≤ ₹21,000/mo</strong></span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 flex items-center gap-2">
                                <Percent className="w-4 h-4 text-yellow-300" />
                                <span>Mandatory Min: <strong>8.33%</strong> (Even in Loss)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4 Pillars Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                            <Scale className="w-5 h-5" />
                        </div>
                        <h2 className="font-bold text-gray-900 dark:text-white mb-1">Private Sector</h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            Min 8.33% to Max 20% under Payment of Bonus Act. Mandatory for ₹21k basic in 20+ worker units.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                            <Train className="w-5 h-5" />
                        </div>
                        <h2 className="font-bold text-gray-900 dark:text-white mb-1">Indian Railways</h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            78 days PLB authorized via RBE No. 84/2026. Max payout ₹17,951 for 11+ lakh staff.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                            <Building2 className="w-5 h-5" />
                        </div>
                        <h2 className="font-bold text-gray-900 dark:text-white mb-1">Central Government</h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            30 days Non-PLB (ad-hoc) bonus for Group C & Non-Gazetted Group B capped at ₹6,908.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <h2 className="font-bold text-gray-900 dark:text-white mb-1">Notice Period Safe</h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            Resigning or serving notice DOES NOT forfeit your statutory bonus. Active clauses are illegal.
                        </p>
                    </div>
                </div>

                {/* ── Interactive Multi-Mode Diwali Bonus Calculator ── */}
                <div id="calculator" className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm scroll-mt-20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                                <Calculator className="w-4 h-4" />
                                Interactive Estimation Tool
                            </div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                                All-India Diwali Bonus Calculator (2026)
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                Calculate statutory bonus under Payment of Bonus Act, Central Govt ad-hoc, or Railway 78-day PLB.
                            </p>
                        </div>

                        {/* Mode Selector Tabs */}
                        <div className="flex flex-wrap p-1 bg-gray-100 dark:bg-gray-900 rounded-2xl text-xs font-semibold">
                            <button
                                onClick={() => setCalcTab('statutory')}
                                className={`px-3 py-2 rounded-xl transition-all ${calcTab === 'statutory' ? 'bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                            >
                                🏭 Statutory (Private)
                            </button>
                            <button
                                onClick={() => setCalcTab('railway_plb')}
                                className={`px-3 py-2 rounded-xl transition-all ${calcTab === 'railway_plb' ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                            >
                                🚆 Railway (78 Days)
                            </button>
                            <button
                                onClick={() => setCalcTab('central_adhoc')}
                                className={`px-3 py-2 rounded-xl transition-all ${calcTab === 'central_adhoc' ? 'bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                            >
                                🏛️ Central Govt (30 Days)
                            </button>
                            <button
                                onClick={() => setCalcTab('corporate')}
                                className={`px-3 py-2 rounded-xl transition-all ${calcTab === 'corporate' ? 'bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                            >
                                💻 IT / Corporate Ex-Gratia
                            </button>
                        </div>
                    </div>

                    {/* Mode 1: Statutory Bonus */}
                    {calcTab === 'statutory' && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-6 space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                        Monthly Basic Salary + DA (₹)
                                    </label>
                                    <input 
                                        type="number"
                                        value={basicPay}
                                        onChange={(e) => setBasicPay(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-amber-500 font-medium"
                                        placeholder="e.g. 18000"
                                    />
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        Statutory eligibility cap is ₹21,000/month.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                            Months Worked in FY
                                        </label>
                                        <select 
                                            value={monthsWorked}
                                            onChange={(e) => setMonthsWorked(Number(e.target.value))}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-amber-500 font-medium"
                                        >
                                            {[...Array(12)].map((_, i) => (
                                                <option key={i + 1} value={i + 1}>{i + 1} Month{i > 0 ? 's' : ''}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                            Bonus Percentage (%)
                                        </label>
                                        <select 
                                            value={bonusRate}
                                            onChange={(e) => setBonusRate(Number(e.target.value))}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-amber-500 font-medium"
                                        >
                                            <option value={8.33}>8.33% (Statutory Minimum)</option>
                                            <option value={10}>10.00%</option>
                                            <option value={12}>12.00%</option>
                                            <option value={15}>15.00%</option>
                                            <option value={18}>18.00%</option>
                                            <option value={20}>20.00% (Statutory Maximum)</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                        State Scheduled Minimum Wage benchmark (₹)
                                    </label>
                                    <input 
                                        type="number"
                                        value={stateMinWage}
                                        onChange={(e) => setStateMinWage(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-amber-500 font-medium"
                                        placeholder="e.g. 12000"
                                    />
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        Under Sec 12, bonus is computed on higher of ₹7,000 OR State Minimum Wage.
                                    </p>
                                </div>
                            </div>

                            {/* Result display */}
                            <div className="lg:col-span-6 bg-amber-50 dark:bg-amber-950/30 p-6 rounded-2xl border border-amber-200 dark:border-amber-800 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                                            Estimated Statutory Bonus
                                        </span>
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${statutoryResult.isEligible ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300' : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'}`}>
                                            {statutoryResult.isEligible ? 'Eligible Under Act' : 'Basic > ₹21,000 (Contractual)'}
                                        </span>
                                    </div>

                                    <div className="text-4xl md:text-5xl font-black text-amber-900 dark:text-amber-100 mb-2">
                                        ₹{statutoryResult.totalBonus.toLocaleString('en-IN')}
                                    </div>
                                    <p className="text-xs text-amber-800/80 dark:text-amber-300/80 mb-6">
                                        Calculated for {monthsWorked} month{monthsWorked > 1 ? 's' : ''} at {bonusRate}% rate on monthly base ₹{statutoryResult.calculationBaseMonthly.toLocaleString('en-IN')}.
                                    </p>

                                    <div className="space-y-2.5 text-xs text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-900/70 p-4 rounded-xl border border-amber-100 dark:border-amber-900/50">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500 dark:text-gray-400">Calculation Ceiling Applied (Sec 12):</span>
                                            <span className="font-bold text-gray-900 dark:text-white">₹{statutoryResult.calculationBaseMonthly.toLocaleString('en-IN')}/mo</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500 dark:text-gray-400">Total Considered Wages for Year:</span>
                                            <span className="font-bold text-gray-900 dark:text-white">₹{statutoryResult.totalAnnualWageForBonus.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500 dark:text-gray-400">Statutory Min (8.33%):</span>
                                            <span className="font-bold text-emerald-600 dark:text-emerald-400">₹{statutoryResult.minStatutoryPayable.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500 dark:text-gray-400">Statutory Max (20%):</span>
                                            <span className="font-bold text-amber-600 dark:text-amber-400">₹{statutoryResult.maxStatutoryPayable.toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 pt-4 border-t border-amber-200/60 dark:border-amber-800/60 flex items-center gap-2 text-xs text-amber-900 dark:text-amber-200">
                                    <Info className="w-4 h-4 flex-shrink-0 text-amber-600" />
                                    <span>Must be disbursed in full by <strong>30th November 2026</strong>.</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mode 2: Railway PLB */}
                    {calcTab === 'railway_plb' && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-6 space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                        Indian Railways Employment Category
                                    </label>
                                    <div className="p-4 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs text-blue-900 dark:text-blue-200 space-y-1">
                                        <div className="font-bold text-sm text-blue-950 dark:text-blue-100 mb-1">
                                            Railway Board Order RBE No. 84/2026
                                        </div>
                                        <div>• Eligible: Track Maintainers, Loco Pilots, Train Managers (Guards), Station Masters, Technicians, Group C staff.</div>
                                        <div>• 78 days emoluments approved ahead of Durga Puja / Diwali.</div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                        Service Duration in FY (Months)
                                    </label>
                                    <select 
                                        value={monthsWorked}
                                        onChange={(e) => setMonthsWorked(Number(e.target.value))}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 font-medium"
                                    >
                                        {[...Array(12)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>{i + 1} Month{i > 0 ? 's' : ''} ({(i + 1) === 12 ? 'Full Payout' : 'Pro-rata'})</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="lg:col-span-6 bg-blue-50 dark:bg-blue-950/30 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
                                            78 Days Railway PLB Amount
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                                            Fixed PLB Formula
                                        </span>
                                    </div>

                                    <div className="text-4xl md:text-5xl font-black text-blue-900 dark:text-blue-100 mb-2">
                                        ₹{railwayResult.prorataBonus.toLocaleString('en-IN')}
                                    </div>
                                    <p className="text-xs text-blue-800/80 dark:text-blue-300/80 mb-6">
                                        Calculation: (₹7,000 ÷ 30.4 days) × 78 days = <strong>₹17,951 max</strong> for full-year service.
                                    </p>

                                    <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-900/70 p-4 rounded-xl border border-blue-100 dark:border-blue-900/50">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Full 12 Months Amount:</span>
                                            <span className="font-bold text-gray-900 dark:text-white">₹17,951</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Service Period:</span>
                                            <span className="font-bold text-gray-900 dark:text-white">{monthsWorked} of 12 Months</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Exclusions:</span>
                                            <span className="font-semibold text-gray-600 dark:text-gray-400">RPF/RPSF get 30-day Ad-hoc (~₹6,908)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 pt-4 border-t border-blue-200/60 dark:border-blue-800/60 flex items-center gap-2 text-xs text-blue-900 dark:text-blue-200">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                    <span>Directly credited to salary account ahead of Diwali.</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mode 3: Central Govt Adhoc */}
                    {calcTab === 'central_adhoc' && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-6 space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                        Central Civilian Staff Category
                                    </label>
                                    <div className="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs text-purple-900 dark:text-purple-200 space-y-1">
                                        <div className="font-bold text-sm text-purple-950 dark:text-purple-100 mb-1">
                                            Department of Expenditure (DoE) OM
                                        </div>
                                        <div>• Covers all Group C and Non-Gazetted Group B Central Govt employees.</div>
                                        <div>• Minimum eligibility: At least 6 continuous months of service in FY.</div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                        Service Duration in FY (Months)
                                    </label>
                                    <select 
                                        value={monthsWorked}
                                        onChange={(e) => setMonthsWorked(Number(e.target.value))}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 font-medium"
                                    >
                                        {[...Array(12)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1} Month{i > 0 ? 's' : ''} {i + 1 < 6 ? '(Under 6 mo threshold)' : ''}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="lg:col-span-6 bg-purple-50 dark:bg-purple-950/30 p-6 rounded-2xl border border-purple-200 dark:border-purple-800 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300">
                                            30 Days Non-PLB Bonus Payout
                                        </span>
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${adhocResult.eligibleMonths ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'}`}>
                                            {adhocResult.eligibleMonths ? 'Qualifies (6+ Months)' : 'Ineligible (< 6 Months)'}
                                        </span>
                                    </div>

                                    <div className="text-4xl md:text-5xl font-black text-purple-900 dark:text-purple-100 mb-2">
                                        ₹{adhocResult.eligibleMonths ? adhocResult.prorataBonus.toLocaleString('en-IN') : 0}
                                    </div>
                                    <p className="text-xs text-purple-800/80 dark:text-purple-300/80 mb-6">
                                        Formula: (₹7,000 ceiling ÷ 30.4) × 30 days = <strong>₹6,908</strong> maximum full-year bonus.
                                    </p>

                                    <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-900/70 p-4 rounded-xl border border-purple-100 dark:border-purple-900/50">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Calculation Ceiling:</span>
                                            <span className="font-bold text-gray-900 dark:text-white">₹7,000/month</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Days of Emoluments:</span>
                                            <span className="font-bold text-gray-900 dark:text-white">30 Days</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Full-Year Cap:</span>
                                            <span className="font-bold text-purple-600 dark:text-purple-400">₹6,908</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 pt-4 border-t border-purple-200/60 dark:border-purple-800/60 flex items-center gap-2 text-xs text-purple-900 dark:text-purple-200">
                                    <Info className="w-4 h-4 text-purple-600 flex-shrink-0" />
                                    <span>Must be in service as on 31st March of the preceding financial year.</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mode 4: Corporate / IT */}
                    {calcTab === 'corporate' && (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-6 space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                        Festive Bonus Arrangement in Offer Letter / CTC
                                    </label>
                                    <div className="flex gap-3">
                                        <button 
                                            onClick={() => setCorpBonusType('fixed')}
                                            className={`flex-1 py-2.5 rounded-xl font-semibold text-xs border transition-all ${corpBonusType === 'fixed' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'}`}
                                        >
                                            Fixed Festive Amount (₹)
                                        </button>
                                        <button 
                                            onClick={() => setCorpBonusType('percent')}
                                            className={`flex-1 py-2.5 rounded-xl font-semibold text-xs border transition-all ${corpBonusType === 'percent' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'}`}
                                        >
                                            % of Annual CTC / Basic
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                        {corpBonusType === 'fixed' ? 'Contracted Festive Amount (₹)' : 'Bonus Percentage (%)'}
                                    </label>
                                    <input 
                                        type="number"
                                        value={corpAmount}
                                        onChange={(e) => setCorpAmount(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 font-medium"
                                        placeholder={corpBonusType === 'fixed' ? "e.g. 25000" : "e.g. 10"}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                        Months Worked in Current Appraisal Year
                                    </label>
                                    <select 
                                        value={monthsWorked}
                                        onChange={(e) => setMonthsWorked(Number(e.target.value))}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 font-medium"
                                    >
                                        {[...Array(12)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>{i + 1} Month{i > 0 ? 's' : ''}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="lg:col-span-6 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                                            Contractual Pro-Rata Bonus
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                                            Private Contract Law
                                        </span>
                                    </div>

                                    <div className="text-4xl md:text-5xl font-black text-emerald-900 dark:text-emerald-100 mb-2">
                                        ₹{Math.round(((Number(corpAmount) || 0) * monthsWorked) / 12).toLocaleString('en-IN')}
                                    </div>
                                    <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80 mb-6">
                                        Pro-rata share for {monthsWorked} month{monthsWorked > 1 ? 's' : ''} service out of full 12 months.
                                    </p>

                                    <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-900/70 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Governing Statute:</span>
                                            <span className="font-bold text-gray-900 dark:text-white">Indian Contract Act, 1872</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Notice Period Withholding:</span>
                                            <span className="font-semibold text-amber-600 dark:text-amber-400">Contestable if cycle completed</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Tax Treatment:</span>
                                            <span className="font-bold text-gray-900 dark:text-white">TDS Sec 192 Applies</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 pt-4 border-t border-emerald-200/60 dark:border-emerald-800/60 flex items-center gap-2 text-xs text-emerald-900 dark:text-emerald-200">
                                    <Info className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                    <span>If "Bonus" is part of your CTC breakdown, withholding it is an illegal salary deduction.</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* ── "Am I Entitled to Diwali Bonus?" Diagnostic Wizard ── */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="mb-6">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-1">
                            <Scale className="w-4 h-4" />
                            Statute Assessment Wizard
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                            Am I Legally Entitled to a Diwali Bonus?
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Answer 4 quick questions to see your exact legal standing under Indian Labour Law.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {/* Q1: Sector */}
                        <div className="p-4 bg-gray-50 dark:bg-gray-900/60 rounded-2xl border border-gray-200 dark:border-gray-700">
                            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                1. Employment Sector
                            </label>
                            <select 
                                value={wizardSector}
                                onChange={(e) => setWizardSector(e.target.value)}
                                className="w-full p-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold"
                            >
                                <option value="private">Private Company / Factory</option>
                                <option value="railway">Indian Railways</option>
                                <option value="central">Central Govt Civilian</option>
                                <option value="tech">IT / Startup / Corporate</option>
                            </select>
                        </div>

                        {/* Q2: Basic Salary */}
                        <div className="p-4 bg-gray-50 dark:bg-gray-900/60 rounded-2xl border border-gray-200 dark:border-gray-700">
                            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                2. Monthly Basic + DA
                            </label>
                            <select 
                                value={wizardBasic}
                                onChange={(e) => setWizardBasic(e.target.value)}
                                className="w-full p-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold"
                            >
                                <option value="below_21k">₹21,000 or Less (Statutory)</option>
                                <option value="above_21k">Above ₹21,000 (Non-Statutory)</option>
                            </select>
                        </div>

                        {/* Q3: Days Worked */}
                        <div className="p-4 bg-gray-50 dark:bg-gray-900/60 rounded-2xl border border-gray-200 dark:border-gray-700">
                            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                3. Days Worked in FY
                            </label>
                            <select 
                                value={wizardDays}
                                onChange={(e) => setWizardDays(e.target.value)}
                                className="w-full p-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold"
                            >
                                <option value="more_30">30 Days or More</option>
                                <option value="less_30">Fewer than 30 Days</option>
                            </select>
                        </div>

                        {/* Q4: Employment Status */}
                        <div className="p-4 bg-gray-50 dark:bg-gray-900/60 rounded-2xl border border-gray-200 dark:border-gray-700">
                            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                4. Exit / Notice Status
                            </label>
                            <select 
                                value={wizardStatus}
                                onChange={(e) => setWizardStatus(e.target.value)}
                                className="w-full p-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold"
                            >
                                <option value="active">Active On Rolls</option>
                                <option value="notice">Serving Notice Period</option>
                                <option value="resigned">Already Resigned / Left</option>
                                <option value="terminated_fraud">Dismissed for Theft/Fraud</option>
                            </select>
                        </div>
                    </div>

                    {/* Diagnostic Output Card */}
                    <div className={`p-6 md:p-8 rounded-2xl border ${
                        diagnosticResult.severity === 'success' ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800' :
                        diagnosticResult.severity === 'warning' ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800' :
                        diagnosticResult.severity === 'danger' ? 'bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-800' :
                        'bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800'
                    }`}>
                        <div className="flex items-start gap-4">
                            <div className="mt-1">
                                {diagnosticResult.severity === 'success' ? (
                                    <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                                ) : diagnosticResult.severity === 'danger' ? (
                                    <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                                ) : (
                                    <Info className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                                )}
                            </div>
                            <div className="flex-1 space-y-2">
                                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/80 dark:bg-gray-900/80 shadow-xs">
                                    {diagnosticResult.badge}
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white">
                                    {diagnosticResult.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {diagnosticResult.desc}
                                </p>
                                <div className="mt-3 p-4 bg-white/90 dark:bg-gray-900/90 rounded-xl text-xs md:text-sm font-medium border border-black/5 dark:border-white/5 space-y-1">
                                    <div className="font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                                        <ShieldCheck className="w-4 h-4 text-primary" />
                                        Recommended Action & Legal Ground:
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {diagnosticResult.legalAction}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Key Statutory Framework (Payment of Bonus Act 1965) ── */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm space-y-6">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                            <FileText className="w-4 h-4" />
                            Statutory Legal Provisions
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                            Key Sections of the Payment of Bonus Act, 1965
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-gray-900 dark:text-white text-base">Section 8: Eligibility Criteria</span>
                                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">30 Working Days</span>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                Every employee is entitled to receive bonus from their employer in an accounting year, provided they have worked in the establishment for <strong>not less than 30 working days</strong> in that year.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-gray-900 dark:text-white text-base">Section 10: Minimum 8.33% Bonus</span>
                                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">Mandatory Even in Loss</span>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                Employers are bound to pay a <strong>minimum bonus of 8.33%</strong> of salary/wage earned or ₹100, whichever is higher, whether or not the employer has any allocable surplus or incurs financial loss.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-gray-900 dark:text-white text-base">Section 12: Calculation Ceiling</span>
                                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">₹7,000 or Min Wage</span>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                Where the salary of an employee exceeds ₹7,000/month, the bonus is calculated as if their salary were <strong>₹7,000 OR the minimum wage for the scheduled employment</strong> fixed by the govt, whichever is higher.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-gray-900 dark:text-white text-base">Section 19: 8-Month Deadline</span>
                                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">Nov 30th Cut-off</span>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                All bonus payable under this Act must be paid in cash/bank credit within <strong>8 months from the close of the accounting year</strong> (i.e. by November 30). Failure is punishable under Section 28 with up to 6 months jail.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── Tax Rules: Cash Bonus vs Diwali Gift Vouchers ── */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 flex items-center justify-center">
                            <Coins className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                                Income Tax on Diwali Bonus & Gifts (FY 2025–26 & 2026–27)
                            </h2>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Official taxability rules under Section 17(1) & 17(2) of the Income Tax Act
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900">
                            <div className="flex items-center gap-2 text-red-800 dark:text-red-300 font-bold mb-2">
                                <AlertTriangle className="w-5 h-5" />
                                Cash Diwali Bonus / Bank Transfer
                            </div>
                            <div className="text-2xl font-black text-red-900 dark:text-red-100 mb-2">
                                100% Fully Taxable
                            </div>
                            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Any cash bonus, festive allowance, or direct bank deposit given as Diwali bonus is classified as <strong>Salary (Profits in lieu of Salary under Sec 17(1))</strong>.
                            </p>
                            <ul className="text-xs space-y-1.5 text-gray-600 dark:text-gray-400 list-disc list-inside">
                                <li>Taxed at your applicable income tax slab rate (New or Old regime).</li>
                                <li>Employer mandatorily deducts TDS under Section 192.</li>
                                <li>No basic exemption applies to cash bonuses.</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900">
                            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                                <Gift className="w-5 h-5" />
                                Gift Vouchers / Hampers in Kind
                            </div>
                            <div className="text-2xl font-black text-emerald-900 dark:text-emerald-100 mb-2">
                                Exempt up to ₹15,000 / Year
                            </div>
                            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Non-cash gifts, shopping vouchers, gold coins, or hampers given by the employer are evaluated as perquisites under Section 17(2).
                            </p>
                            <ul className="text-xs space-y-1.5 text-gray-600 dark:text-gray-400 list-disc list-inside">
                                <li>Aggregate annual exemption of <strong>₹15,000 per financial year</strong> across all festive gifts.</li>
                                <li><strong>Cliff-Edge Rule:</strong> If total gifts cross ₹15,000, the full amount may become taxable as perquisite.</li>
                                <li>Vouchers directly convertible to cash do not qualify for exemption.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ── Copyable HR Demand Notice ── */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-1">
                                <FileText className="w-4 h-4" />
                                Legal Recourse
                            </div>
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                                Formal Demand Letter for Withheld Diwali Bonus
                            </h2>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Send this notice to HR/Payroll if your statutory bonus is withheld or delayed beyond November 30.
                            </p>
                        </div>

                        <button
                            onClick={copyTemplate}
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary/90 transition-all shadow-sm"
                        >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copied to Clipboard!' : 'Copy Demand Letter'}
                        </button>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 text-xs font-mono text-gray-700 dark:text-gray-300 overflow-x-auto whitespace-pre-wrap max-h-72">
{`To,
The Head of Human Resources / Payroll Department
[Company Name]

Subject: Formal Demand for Payment of Statutory Annual / Diwali Bonus under Payment of Bonus Act, 1965

Dear Sir/Madam,

I am writing to formally request the disbursement of my statutory annual bonus for the financial year [e.g. 2025-26] under the Payment of Bonus Act, 1965.

Details:
- Employee Name: [Your Name] | ID: [Employee ID]
- Monthly Basic Salary + DA: ₹[Your Basic + DA Amount]
- Total Days Worked in Accounting Financial Year: [e.g., 240 days / 12 months]

Legal Entitlement:
1. Under Section 8 of the Payment of Bonus Act, 1965, working 30+ days entitles an employee to annual bonus.
2. Under Section 10, a minimum 8.33% bonus is mandatory even during corporate losses.
3. Under Section 19, the statutory payment deadline is 30th November.
4. Resignation or serving a notice period does not forfeit statutory bonus under Section 9.

Kindly disburse my statutory bonus within 7 days, failing which I will file a recovery claim under Section 21 before the Controlling Authority / Labour Commissioner.

Yours sincerely,
[Your Name]`}
                    </div>
                </div>

                {/* ── FAQ Section ── */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="mb-6">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                            <HelpCircle className="w-4 h-4" />
                            Frequent Inquiries
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                            Diwali Bonus: Frequently Asked Questions
                        </h2>
                    </div>

                    <FAQSection faqs={diwaliFaqs} />
                </div>

                {/* ── Related Links & Tools ── */}
                <InternalLinks 
                    title="Related Salary, Exit & Statutory Tools"
                    links={[
                        { label: '💰 Take-Home Salary Calculator', path: '/salary-calculator' },
                        { label: '⚖️ Statutory Bonus Resignation Analyzer', path: '/tools/bonus-analyzer' },
                        { label: '💼 Full & Final Settlement (F&F) Guide', path: '/full-final-settlement' },
                        { label: '🏆 Gratuity Eligibility & Calculator', path: '/gratuity' },
                        { label: '📊 Professional Tax & TDS Slabs', path: '/professional-tax' },
                        { label: '📝 Notice Period & Buyout Calculator', path: '/notice-period' },
                        { label: '🆕 What\'s New in Labour Laws 2026', path: '/whats-new' }
                    ]}
                />
            </div>
        </div>
    );
}
