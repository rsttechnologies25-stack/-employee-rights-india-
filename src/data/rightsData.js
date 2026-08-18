import { Banknote, Clock, Award, Baby, HardHat, Plane, Stethoscope, Scale, Users, Ban, FileCheck, ShieldAlert, Compass, Calculator, FileText } from 'lucide-react';

export const rightsCategories = [
    {
        id: 'wages',
        title: '💰 Wages & Salary Rights',
        icon: Banknote,
        summary: 'Your earned wages are protected by constitutional and statutory mandates. Delayed payment, arbitrary deductions, or wage withholding is strictly illegal in India.',
        acts: [
            { act: 'The Payment of Wages Act, 1936', sections: 'Section 5 (Time of Payment), Section 7 (Permissible Deductions), Section 15 (Claims & 10x Compensation)' },
            { act: 'The Code on Wages, 2019', sections: 'Section 17 (Time limit of 2 days post-termination), Section 18 (Deductions limit of 50%)' },
            { act: 'State Shops & Commercial Establishments Acts', sections: 'Section 34–42 (Monthly pay cycles, wage registers, and inspection rights)' }
        ],
        legalPrinciples: [
            {
                heading: 'Mandatory Payment Timelines (7th & 10th Day Rule)',
                detail: 'Under Section 5 of the Payment of Wages Act, establishments with fewer than 1,000 workers must disburse salaries on or before the 7th day of the following calendar month. Establishments with 1,000+ workers must pay on or before the 10th day. Holding wages until the 15th, 20th, or 30th is a statutory violation.'
            },
            {
                heading: 'Strict Prohibition on Arbitrary Deductions',
                detail: 'Under Section 7, employers CANNOT make deductions for arbitrary performance penalties, client disputes, short notice adjustments without agreement, or training bonds. Permissible deductions are strictly limited to: Statutory PF, ESI, Professional Tax, Income Tax (TDS), authorized advances, and proven willful damage after a domestic show-cause notice.'
            },
            {
                heading: 'Overtime Must Be Paid at 2x the Standard Rate',
                detail: 'Under Section 59 of the Factories Act and State S&E Acts, any work performed beyond 9 hours in a day or 48 hours in a week must be compensated at double (200%) the normal hourly wage rate (Basic + DA).'
            },
            {
                heading: 'Wages Cannot Be Withheld as Hostage on Resignation',
                detail: 'Employers cannot hold earned salary pending notice buyout disputes, handover clearances, or non-compete allegations. Earned salary is a statutory property right under Article 300A of the Constitution of India.'
            }
        ],
        entitlements: [
            'Salary must be disbursed on or before the 7th or 10th of every month without exception.',
            'Detailed itemized payslip must be issued showing Basic, HRA, allowances, PF, ESI, and tax deductions.',
            'Overtime pay calculated at 2× the standard hourly rate for extra hours worked.',
            'Minimum wages determined by the state government must be paid as a mandatory baseline floor.',
            'Wages must be paid directly into the employee\'s bank account or via cheque/cash with written acknowledgment.',
            'Mid-month joiners/exiters must be prorated accurately using standard 26 or 30-day divisor methods.'
        ],
        prohibitions: [
            '🚫 Withholding monthly salary as punishment, disciplinary leverage, or performance pressure.',
            '🚫 Deducting the employer\'s share of PF (12%) or ESI (3.25%) from the employee\'s gross wage.',
            '🚫 Imposing arbitrary monetary fines without maintaining a government-mandated Fine Register.',
            '🚫 Paying wages in vouchers, company tokens, or non-monetary credits.',
            '🚫 Delaying full and final wage settlement beyond 30–45 days of employee exit.'
        ],
        evidenceRequired: [
            'Last 3 to 6 months Payslips showing regular salary structure.',
            'Bank Account Statements highlighting monthly salary credit narration or missing credits.',
            'Appointment / Offer Letter specifying gross CTC, basic salary, and pay cycle dates.',
            'Attendance logs, biometric swipe logs, or timesheet approvals proving days worked.',
            'Written email communications with HR / Accounts regarding payment delays.'
        ],
        actionSteps: [
            'Step 1: Send a formal written email demand to HR and Payroll referencing Section 5 of the Payment of Wages Act, 1936.',
            'Step 2: If unpaid within 7 days, generate a Pre-Litigation Legal Demand Notice demanding payment with 18% p.a. interest.',
            'Step 3: File an online complaint on the SAMADHAN Portal (samadhan.labour.gov.in) or submit Form 15 to the local Assistant Labour Commissioner (ALC).',
            'Step 4: The Labour Officer will issue a summons to the employer to deposit arrears along with up to 10x statutory compensation.'
        ],
        relatedTools: [
            { title: 'Take-Home Salary Calculator', path: '/salary-calculator', desc: 'Compute gross-to-net CTC breakdown with PF, ESI, and PT' },
            { title: 'Salary Proration Calculator', path: '/tools/salary-proration-calculator', desc: 'Compare 26-day vs 30-day vs working-day wage calculations' },
            { title: 'Grievance Complaint Generator', path: '/tools/grievance-generator', desc: 'Generate Section 15 Payment of Wages petition letter' },
            { title: 'Authority Finder', path: '/tools/authority-finder', desc: 'Find exact Labour Commissioner office and filing portal' },
            { title: '2x Overtime Tracker', path: '/tools/overtime-tracker', desc: 'Calculate and export statutory 200% overtime pay dues' }
        ],
        whyItMatters: 'Timely and fair wages are fundamental to human dignity and financial livelihood. Indian courts consistently hold that non-payment of wages amounts to forced labour prohibited under Article 23 of the Constitution.'
    },
    {
        id: 'bonus',
        title: '🎁 Statutory Annual Bonus Rights',
        icon: Award,
        summary: 'Under the Payment of Bonus Act, 1965, eligible employees have a statutory right to an annual bonus between 8.33% and 20% of their salary.',
        acts: [
            { act: 'The Payment of Bonus Act, 1965', sections: 'Section 8 (Eligibility), Section 10 (Minimum 8.33%), Section 11 (Maximum 20%), Section 19 (8-Month Deadline)' }
        ],
        legalPrinciples: [
            {
                heading: 'Statutory Eligibility Thresholds',
                detail: 'Applies to every factory and every establishment employing 20 or more persons. Employees earning up to ₹21,000 per month (Basic + DA) who have worked for at least 30 working days in an accounting year are legally entitled to receive the statutory bonus.'
            },
            {
                heading: 'Mandatory Minimum Bonus of 8.33%',
                detail: 'Even if the establishment incurs a financial loss, the employer MUST pay a minimum statutory bonus of 8.33% of the salary earned during the accounting year (or ₹100, whichever is higher).'
            },
            {
                heading: 'Strict 8-Month Payment Deadline',
                detail: 'The statutory bonus must be paid in cash/bank transfer within 8 months from the close of the financial year (typically on or before 30th November for financial years ending 31st March).'
            }
        ],
        entitlements: [
            'Guaranteed minimum statutory bonus of 8.33% of annual Basic + DA salary.',
            'Higher bonus up to 20% based on company\'s allocable surplus profits.',
            'Payment must be disbursed within 8 months of the financial year end (usually Diwali/Puja season).',
            'Full eligibility applies after completing just 30 working days in the financial year.'
        ],
        prohibitions: [
            '🚫 Employer cannot refuse statutory bonus on grounds of company financial losses.',
            '🚫 Cannot adjust statutory bonus against contractual ex-gratia or festive gifts without consent.',
            '🚫 Forfeiting bonus is only legal if the employee was dismissed for proven fraud, riotous behavior, or theft.'
        ],
        evidenceRequired: [
            'Appointment letter stating salary structure and Basic wage component.',
            'Payslips showing monthly basic wage for all 12 months.',
            'Attendance register or Form D bonus calculation register from employer.'
        ],
        actionSteps: [
            'Step 1: Calculate your statutory bonus entitlement using the Bonus Analyzer tool.',
            'Step 2: Submit a formal written request to HR citing Section 10 of the Payment of Bonus Act, 1965.',
            'Step 3: If unpaid past 8 months, file a claim petition before the Controlling Authority / Labour Commissioner.'
        ],
        relatedTools: [
            { title: 'Statutory Bonus Analyzer', path: '/tools/bonus-analyzer', desc: 'Check eligibility and calculate 8.33% to 20% payout' },
            { title: 'Grievance Generator', path: '/tools/grievance-generator', desc: 'Draft a formal statutory bonus demand letter' }
        ],
        whyItMatters: 'Statutory bonus is a legally mandated share in employer profits designed to bridge the gap between actual wages and the living wage.'
    },
    {
        id: 'gratuity',
        title: '🏆 Gratuity Rights (5-Year Rule)',
        icon: Award,
        summary: 'Gratuity is a statutory retirement and exit benefit payable to employees after completing 5 continuous years of service under the Payment of Gratuity Act, 1972.',
        acts: [
            { act: 'The Payment of Gratuity Act, 1972', sections: 'Section 4 (Eligibility & Formula), Section 7 (30-Day Payment Timeline), Section 8 (Recovery with Interest)' }
        ],
        legalPrinciples: [
            {
                heading: 'Statutory Formula (15/26 Rule)',
                detail: 'Gratuity is computed as: (15 × Last Drawn Basic Salary + DA × Completed Years of Service) ÷ 26. Any period exceeding 6 months is rounded up to the next full year.'
            },
            {
                heading: 'The 4 Years and 240 Days Rule',
                detail: 'Under judicial precedents (including Madras High Court and Supreme Court rulings), employees who complete 4 years and 240 continuous working days in the 5th year in a 6-day week establishment qualify for full statutory gratuity.'
            },
            {
                heading: 'Maximum Cap & 30-Day Mandatory Disbursal',
                detail: 'The tax-free gratuity limit is ₹20,00,000. Employers must disburse gratuity within 30 days of exit. Delayed payment incurs mandatory statutory simple interest (typically 10% p.a.).'
            }
        ],
        entitlements: [
            'Lump-sum gratuity payout after 5 years (or 4y 240d) of continuous service upon resignation, retirement, or layoff.',
            'No 5-year requirement applies in case of death or permanent disability of the employee.',
            'Must be disbursed within 30 calendar days from the date of application (Form I).',
            'Completely tax-exempt up to ₹20 Lakhs under Section 10(10) of the Income Tax Act.'
        ],
        prohibitions: [
            '🚫 Employer cannot forfeit gratuity because the employee resigned or gave short notice.',
            '🚫 Forfeiture is permitted ONLY to the extent of proven financial loss in cases of termination for moral turpitude or violence.',
            '🚫 Delaying gratuity beyond 30 days without depositing 10% statutory interest.'
        ],
        evidenceRequired: [
            'Service proof showing continuous service (Appointment letter, Resignation acceptance, Relieving letter).',
            'Last drawn payslip showing Basic + Dearness Allowance (DA).',
            'Copy of Form I (Application for Gratuity) submitted to employer with postal/email receipt.'
        ],
        actionSteps: [
            'Step 1: Calculate your exact gratuity entitlement using our Gratuity Calculator.',
            'Step 2: Submit Form I to the employer within 30 days of leaving the organization.',
            'Step 3: If employer fails to pay within 30 days, file Form N before the Controlling Authority (Assistant Labour Commissioner).',
            'Step 4: The Controlling Authority will issue a recovery certificate to the District Collector to recover the amount as land revenue.'
        ],
        relatedTools: [
            { title: 'Gratuity Calculator', path: '/tools/gratuity-calculator', desc: 'Calculate exact gratuity dues with 4y 240d check' },
            { title: 'Full & Final Calculator', path: '/tools/ff-calculator', desc: 'Combine gratuity with unpaid salary and leaves' }
        ],
        whyItMatters: 'Gratuity is a statutory right earned through long-term service. Employers cannot treat it as discretionary ex-gratia or withhold it for commercial disputes.'
    },
    {
        id: 'maternity',
        title: '🤰 Maternity Benefit Rights',
        icon: Baby,
        summary: 'Female employees are entitled to 26 weeks of fully paid maternity leave, job protection, crèche facilities, and nursing breaks under the Maternity Benefit Act.',
        acts: [
            { act: 'The Maternity Benefit Act, 1961 (2017 Amendment)', sections: 'Section 5 (26 Weeks Paid Leave), Section 11A (Crèche Facility), Section 12 (Dismissal During Pregnancy Illegal)' }
        ],
        legalPrinciples: [
            {
                heading: '26 Weeks Paid Leave & 80-Day Rule',
                detail: 'Every woman employee who has worked for at least 80 days in the 12 months preceding her expected delivery date is entitled to 26 weeks of fully paid maternity leave (up to 8 weeks before delivery and remainder after).'
            },
            {
                heading: 'Absolute Protection Against Dismissal',
                detail: 'Under Section 12, it is strictly unlawful for an employer to terminate, retrench, or serve a notice of dismissal to a woman employee during her pregnancy or maternity leave.'
            },
            {
                heading: 'Mandatory Crèche & Nursing Breaks',
                detail: 'Every establishment employing 50 or more employees must provide a mandatory crèche facility within 500 meters, allowing the mother 4 visits per day including nursing intervals.'
            }
        ],
        entitlements: [
            '26 weeks of fully paid leave for the first two children (12 weeks for subsequent children).',
            'Full average daily wage disbursed during the maternity period without deductions.',
            'Medical bonus of ₹3,500 if pre-natal confinement and post-natal care are not provided free by employer.',
            'Right to work from home (WFH) after maternity leave if nature of work permits, on mutually agreed terms.',
            'Two daily nursing breaks until the child reaches 15 months of age.'
        ],
        prohibitions: [
            '🚫 Terminating, dismissing, or putting a pregnant employee on arbitrary PIP during pregnancy.',
            '🚫 Assigning arduous or hazardous work during the 10 weeks preceding delivery.',
            '🚫 Forfeiting earned salary, annual increments, or promotional seniority during maternity leave.'
        ],
        evidenceRequired: [
            'Medical practitioner certificate stating expected delivery date (Form B).',
            'Formal written notice of maternity leave submitted to HR (Form D).',
            'Attendance logs proving 80 working days completed in the preceding 12 months.'
        ],
        actionSteps: [
            'Step 1: Track your statutory leave timeline using the Maternity Benefit Tracker.',
            'Step 2: Submit a formal written notice under Section 6 with your doctor\'s medical certificate.',
            'Step 3: If employer threatens termination or denies pay, immediately file a petition with the Chief Inspector of Factories / Labour Commissioner.'
        ],
        relatedTools: [
            { title: 'Maternity Benefit Tracker', path: '/tools/maternity-tracker', desc: 'Calculate statutory 26-week calendar and eligibility' },
            { title: 'Authority Finder', path: '/tools/authority-finder', desc: 'Locate local Labour Inspector for maternity grievances' }
        ],
        whyItMatters: 'Maternity protection ensures reproductive autonomy and prevents gender discrimination, ensuring women can participate equally in the national economy.'
    },
    {
        id: 'contract-labour',
        title: '👷 Contract Labour & Outsourcing Rights',
        icon: HardHat,
        summary: 'Contract and outsourced staffing workers are protected against exploitation under the Contract Labour (Regulation and Abolition) Act, 1970.',
        acts: [
            { act: 'The Contract Labour (Regulation and Abolition) Act, 1970', sections: 'Section 10 (Prohibition in Core Jobs), Section 20 (Principal Employer Liability for Amenities), Section 21 (Wage Liability)' }
        ],
        legalPrinciples: [
            {
                heading: 'Principal Employer Liability for Unpaid Wages',
                detail: 'Under Section 21(4), if the contractor fails to pay wages within the statutory period, the Principal Employer (the company where you physically work) is legally bound to disburse wages directly to the contract worker.'
            },
            {
                heading: 'Sham Contracting & Regularization',
                detail: 'If the principal employer exercises direct day-to-day supervisory control, manages discipline, and conducts interviews while using a paper contractor purely to avoid PF/ESI, the contract is legally deemed a "Sham Contract", entitling workers to claim permanent regularization.'
            }
        ],
        entitlements: [
            'Equal minimum wages and weekly rest days matching statutory rates.',
            'Direct wage payment from Principal Employer if contractor absconds or defaults.',
            'Mandatory PF and ESI contributions from Day 1.',
            'Basic statutory amenities: clean drinking water, first-aid boxes, rest rooms, and canteen facilities.'
        ],
        prohibitions: [
            '🚫 Deploying contract workers in perennial, permanent core operations of the company.',
            '🚫 Contractors deducting commission, placement fees, or security deposits from workers.',
            '🚫 Denying statutory overtime rates or safety gear to contract personnel.'
        ],
        evidenceRequired: [
            'Contractor ID Card and Principal Employer Gate Pass.',
            'Monthly wage receipts / Bank account credit statements.',
            'Work allocation emails or supervisory instructions from Principal Employer managers.'
        ],
        actionSteps: [
            'Step 1: Audit your employment relationship using the Sham Contractor Scanner.',
            'Step 2: Submit a joint demand letter to both Contractor and Principal Employer under Section 21.',
            'Step 3: File an industrial dispute before the Conciliation Officer / Labour Commissioner.'
        ],
        relatedTools: [
            { title: 'Sham Contractor Scanner', path: '/tools/sham-contractor', desc: 'Evaluate supervisory control and regularization rights' },
            { title: 'Minimum Wage Checker', path: '/tools/minimum-wage-checker', desc: 'Verify contract wage compliance against state schedules' }
        ],
        whyItMatters: 'Contract workers are not second-class citizens. The law holds both the agency and the corporate host jointly accountable for statutory protections.'
    },
    {
        id: 'migrant-workers',
        title: '✈️ Inter-State Migrant Worker Rights',
        icon: Plane,
        summary: 'Workers migrating across states for employment have specialized rights to displacement allowances, journey fares, and medical protection.',
        acts: [
            { act: 'Inter-State Migrant Workmen Act, 1979 & OSHWC Code', sections: 'Section 14 (Displacement Allowance), Section 15 (Journey Allowance), Section 16 (Residential Accommodation)' }
        ],
        legalPrinciples: [
            {
                heading: 'Displacement & Travel Allowances',
                detail: 'Employers must pay a non-refundable displacement allowance equal to 50% of the monthly wage at the time of recruitment, plus journey allowances covering train/bus fares from home state to workplace.'
            },
            {
                heading: 'Equal Wage Protection',
                detail: 'Migrant workers cannot be paid less than local workers performing the same category of work in the host state.'
            }
        ],
        entitlements: [
            'Free or subsidized suitable residential accommodation near the workplace.',
            'Displacement allowance (50% monthly wage) and journey travel reimbursements.',
            'Full medical checkups, protective gear, and portable PDS ration benefits under One Nation One Ration Card.',
            'Access to government toll-free helpline numbers and state migrant welfare boards.'
        ],
        prohibitions: [
            '🚫 Paying migrant workers below the host state\'s notified minimum wage.',
            '🚫 Confiscating Aadhaar cards, passbooks, or train tickets as bondage leverage.',
            '🚫 Subcontracting migrant workers through unregistered labor middlemen (Thekedars).'
        ],
        evidenceRequired: [
            'Train/Bus travel tickets and recruitment agreements.',
            'Local gate passes, wage slips, and Aadhaar linkage cards.',
            'Host state registration card / e-Shram portal registration number.'
        ],
        actionSteps: [
            'Step 1: Register on the e-Shram portal (eshram.gov.in) to secure universal social security portability.',
            'Step 2: Report illegal wage cuts or accommodation violations to the Interstate Migrant Cell at the Labour Commissionerate.'
        ],
        relatedTools: [
            { title: 'Minimum Wage Checker', path: '/tools/minimum-wage-checker', desc: 'Check host state wage rates' },
            { title: 'Authority Finder', path: '/tools/authority-finder', desc: 'Locate regional Labour Commissioner' }
        ],
        whyItMatters: 'Migrant workers build critical national infrastructure and deserve complete statutory dignity, safe housing, and wage parity far from home.'
    },
    {
        id: 'employee-compensation',
        title: '🏥 Workplace Injury & Compensation Rights',
        icon: Stethoscope,
        summary: 'Employees injured or disabled during the course of employment are entitled to mandatory financial compensation under the Employee\'s Compensation Act, 1923.',
        acts: [
            { act: 'The Employee\'s Compensation Act, 1923', sections: 'Section 3 (Employer Liability), Section 4 (Compensation Amount), Section 4A (12% Interest on Delay)' }
        ],
        legalPrinciples: [
            {
                heading: 'No-Fault Statutory Liability',
                detail: 'If personal injury is caused to an employee by accident arising out of and in the course of employment, the employer is legally liable to pay compensation regardless of whose fault caused the incident.'
            },
            {
                heading: 'Statutory Compensation Formulas',
                detail: 'In fatal cases: 50% of monthly wages × Relevant Age Factor. In permanent total disablement: 60% of monthly wages × Relevant Age Factor, plus funeral expenses.'
            }
        ],
        entitlements: [
            'Immediate reimbursement of full hospital and medical treatment expenses.',
            'Lump-sum statutory compensation deposited directly before the Commissioner for Employee\'s Compensation.',
            'Half-monthly wage support during temporary medical disablement and recovery.',
            'Mandatory 12% p.a. simple interest if compensation is delayed beyond 30 days.'
        ],
        prohibitions: [
            '🚫 Forcing injured employees to sign waivers or settlement receipts forfeiting compensation.',
            '🚫 Dismissing or terminating an employee while recovering from a workplace injury.',
            '🚫 Delaying medical attention or refusing to report accidents to factory inspectors.'
        ],
        evidenceRequired: [
            'Hospital admission records, discharge summary, and disability certificate from Medical Board.',
            'First Information Report (FIR) or Factory Accident Register entry.',
            'Proof of employment, wage slips, and age certificate (Aadhaar / School Certificate).'
        ],
        actionSteps: [
            'Step 1: Ensure the accident is formally logged in the employer\'s Incident Register.',
            'Step 2: Submit a formal Notice of Accident under Section 10 to the employer.',
            'Step 3: If employer fails to deposit compensation within 30 days, file an application before the Commissioner for Employee\'s Compensation.'
        ],
        relatedTools: [
            { title: 'Authority Finder', path: '/tools/authority-finder', desc: 'Find local Workmen Compensation Commissioner' },
            { title: 'Evidence Checklist', path: '/tools/evidence-checklist', desc: 'Preserve hospital and accident logs' }
        ],
        whyItMatters: 'Workplace hazards should never destroy a family\'s financial stability. The law imposes strict financial responsibility on employers to protect injured workers.'
    },
    {
        id: 'minimum-wages',
        title: '📊 Statutory Minimum Wages Law',
        icon: Scale,
        summary: 'Every state in India notifies statutory Minimum Wages and Dearness Allowance (VDA). Paying below minimum wage is a non-bailable criminal offense.',
        acts: [
            { act: 'The Minimum Wages Act, 1948 & Code on Wages', sections: 'Section 12 (Payment of Minimum Rates), Section 20 (Claims & 10x Compensation), Section 22 (Penalties)' }
        ],
        legalPrinciples: [
            {
                heading: 'Supreme Court Doctrine: Below Minimum Wage is Forced Labour',
                detail: 'In the landmark *PUDR v. Union of India (Asiad Workers Case)*, the Supreme Court ruled that paying anything less than the state-notified minimum wage amounts to a violation of Fundamental Right Article 23 (Prohibition of Traffic in Human Beings and Forced Labour).'
            },
            {
                heading: 'Components of Minimum Wage',
                detail: 'Minimum wage consists of Basic Rate + Variable Dearness Allowance (VDA) linked to the Consumer Price Index. Employers cannot artificially restructure wage slips to reduce basic wages below statutory limits.'
            }
        ],
        entitlements: [
            'State-notified minimum wage based on skill level: Unskilled, Semi-Skilled, Skilled, and Highly Skilled.',
            'Automatic bi-annual cost-of-living increases via VDA revisions (April & October).',
            'Full 100% entitlement regardless of whether your contract claims you agreed to a lower wage.',
            'Right to recover wage deficits with up to 10 times penalty compensation from the Labour Court.'
        ],
        prohibitions: [
            '🚫 Paying cash salaries below the minimum wage threshold.',
            '🚫 Forcing workers to work 10–12 hours without separate overtime pay to meet minimum wage standards.',
            '🚫 Verbal waivers or private agreements to accept substandard wages (such contracts are void under Section 23 Contract Act).'
        ],
        evidenceRequired: [
            'Monthly Payslips showing breakdown of Basic + DA.',
            'State Minimum Wage Gazette Notification for your specific industry schedule.',
            'Bank credit statement showing actual deposited amounts.'
        ],
        actionSteps: [
            'Step 1: Check your state\'s current minimum wage schedule using the Minimum Wage Checker.',
            'Step 2: File a wage claim under Section 20 of the Minimum Wages Act before the Labour Commissioner.',
            'Step 3: The Authority will order the employer to pay the deficit balance plus up to 10x compensation.'
        ],
        relatedTools: [
            { title: 'Minimum Wage Compliance Checker', path: '/tools/minimum-wage-checker', desc: 'Compare your salary against state skill-level wages' },
            { title: 'Tamil Nadu Minimum Wages 2025', path: '/tamil-nadu-minimum-wages', desc: 'View complete TN sector schedule rates' }
        ],
        whyItMatters: 'Minimum wages represent the absolute statutory floor for subsistence and nutrition. No employer in India has a legal right to operate if they cannot pay minimum wages.'
    },
    {
        id: 'equal-pay',
        title: '⚖️ Equal Pay for Equal Work Rights',
        icon: Users,
        summary: 'Gender discrimination in wages, promotions, and working conditions is strictly prohibited under the Equal Remuneration Act, 1976 and Article 39(d).',
        acts: [
            { act: 'The Equal Remuneration Act, 1976 & Code on Wages', sections: 'Section 4 (Duty of Employer to Pay Equal Remuneration), Section 5 (No Discrimination in Recruitment)' }
        ],
        legalPrinciples: [
            {
                heading: 'Constitutional & Statutory Mandate',
                detail: 'Article 39(d) of the Constitution and Section 4 of the Equal Remuneration Act mandate that employers must pay equal remuneration to men and women workers performing the same work or work of a similar nature.'
            },
            {
                heading: 'Equal Work Definition',
                detail: '"Same work or work of similar nature" means work where the skill, effort, and responsibility required are comparable under similar working conditions.'
            }
        ],
        entitlements: [
            'Equal pay, incentives, bonuses, and allowances for female employees performing equivalent duties.',
            'Equal access to career growth, promotions, training programs, and transfers.',
            'Protection against salary reduction implemented to equalize disparities.'
        ],
        prohibitions: [
            '🚫 Offering lower starting salary packages to women candidates for the same role.',
            '🚫 Denying bonuses, stock options, or appraisal ratings due to maternity leave history.',
            '🚫 Segregating job designations purely to justify unequal pay scales.'
        ],
        evidenceRequired: [
            'Job description and list of daily responsibilities.',
            'Comparative salary slips or salary bands of peers in the same team.',
            'Performance ratings and appraisal feedback records.'
        ],
        actionSteps: [
            'Step 1: Request formal clarification from HR and Diversity Committee regarding compensation parity.',
            'Step 2: If systemic discrimination is detected, file a complaint before the Labour Commissioner appointed under the Equal Remuneration Act.'
        ],
        relatedTools: [
            { title: 'Take-Home Salary Calculator', path: '/salary-calculator', desc: 'Audit salary structure' },
            { title: 'Grievance Generator', path: '/tools/grievance-generator', desc: 'Draft internal wage disparity grievance' }
        ],
        whyItMatters: 'Pay parity is a non-negotiable human right. Fair workplace compensation creates an equitable economy where merit alone determines financial rewards.'
    },
    {
        id: 'child-labour',
        title: '🛑 Child & Adolescent Labour Prohibition',
        icon: Ban,
        summary: 'Complete statutory ban on employing children under 14 years in all occupations, with strict restrictions for adolescents (14–18 years).',
        acts: [
            { act: 'Child and Adolescent Labour (Prohibition and Regulation) Act, 1986', sections: 'Section 3 (Prohibition of Child Labour), Section 3A (Prohibition in Hazardous Jobs for Adolescents), Section 14 (Criminal Penalties)' }
        ],
        legalPrinciples: [
            {
                heading: 'Total Ban on Children (<14 Years)',
                detail: 'Under the 2016 Amendment, employing any child below 14 years of age in any commercial enterprise, hotel, factory, or domestic work is a cognizable criminal offense punishable with up to 2 years imprisonment and ₹50,000 fine.'
            },
            {
                heading: 'Adolescent Protections (14–18 Years)',
                detail: 'Adolescents cannot be employed in hazardous occupations (mines, inflammable substances, heavy machinery) and cannot work between 7:00 PM and 8:00 AM.'
            }
        ],
        entitlements: [
            'Fundamental Right to Free & Compulsory Education under Article 21A of the Constitution.',
            'Rescue, rehabilitation, and financial support from the Child & Adolescent Labour Rehabilitation Fund.',
            'Immediate registration of FIR against employers and contractors engaging child labor.'
        ],
        prohibitions: [
            '🚫 Employing children in tea stalls, brick kilns, garment units, fireworks, or offices.',
            '🚫 Forcing adolescents to work overtime or night shifts beyond 6 hours per day.',
            '🚫 Depriving rescued child workers of rehabilitation and educational sponsorship.'
        ],
        evidenceRequired: [
            'Photographic/Video proof of child employment at commercial premises.',
            'Premises location and business board details.',
            'Direct reporting to Childline (1098) or District Magistrate.'
        ],
        actionSteps: [
            'Step 1: Report child labor immediately to the National Emergency Helpline 1098 (Childline) or National Commission for Protection of Child Rights (PENCIL portal: pencil.gov.in).',
            'Step 2: Notify the District Labour Inspector and local police station for rescue operations.'
        ],
        relatedTools: [
            { title: 'Authority Finder', path: '/tools/authority-finder', desc: 'Find local District Labour Inspector' },
            { title: 'Labour Directory', path: '/tools/labour-directory', desc: 'Regional labour offices' }
        ],
        whyItMatters: 'Every child deserves books, play, and safety. Eradicating child labor ensures the fundamental rights and future prosperity of India\'s youth.'
    },
    {
        id: 'exit-benefits',
        title: '🚪 Full & Final (F&F) Settlement & Relieving Rights',
        icon: FileCheck,
        summary: 'Upon resignation, retirement, or termination, you are legally entitled to receive all pending salary, leave encashment, gratuity, and relieving documents within statutory timelines.',
        acts: [
            { act: 'The Payment of Wages Act, 1936 & Code on Wages', sections: 'Section 5(2) (Payment on Termination within 2 Working Days), Section 17 (Exit Settlement Mandate)' },
            { act: 'The Indian Contract Act, 1872', sections: 'Section 27 (Agreements in Restraint of Trade Void — Employer cannot block new job)' },
            { act: 'State Shops & Commercial Establishments Acts', sections: 'Section 36–41 (Mandatory Service Certificate Issuance on Demand)' }
        ],
        legalPrinciples: [
            {
                heading: 'Mandatory Components of Full & Final Settlement',
                detail: 'F&F settlement must include: 1. Unpaid salary for days worked, 2. Accumulated Earned Leave (EL) encashment, 3. Statutory Bonus / Variable dues, 4. Gratuity (if service exceeds 5 years or 4y 240d), 5. Reimbursements.'
            },
            {
                heading: 'Withholding Relieving Letters Violates Section 27',
                detail: 'Employers cannot hold relieving letters or service certificates as hostage to coerce payments or enforce post-employment non-compete clauses. Under Section 27 of the Contract Act, any restraint on your right to work in another company is void.'
            },
            {
                heading: 'Timelines for Settlement',
                detail: 'Under the Code on Wages, exit wages must be cleared within 2 working days of termination. Standard corporate practice across states requires complete F&F disbursement within 30 to 45 calendar days.'
            }
        ],
        entitlements: [
            'Clearance and payout of all earned salary dues and accumulated leave encashment.',
            'Unconditional issuance of Relieving Letter, Experience Certificate, and Form 16 Part A & B.',
            'Immediate PF exit marking (Date of Exit) in EPFO Unified Portal to enable pension transfer/withdrawal.',
            'Detailed F&F calculation breakdown sheet itemizing every earning and allowable deduction.'
        ],
        prohibitions: [
            '🚫 Withholding relieving letters or experience certificates over notice period disputes.',
            '🚫 Imposing arbitrary "damage" deductions or penalty fees from F&F without prior show-cause notice.',
            '🚫 Demanding cash payments or security bond payouts as a precondition for issuing service certificates.',
            '🚫 Blocking PF transfer or marking fraudulent exit reasons (e.g. "absconding") in EPFO.'
        ],
        evidenceRequired: [
            'Formal resignation email with timestamp and delivery confirmation.',
            'Employer\'s written acceptance of resignation / Last Working Day (LWD) confirmation.',
            'Signed Handover Document and Asset Return Receipts (Laptop, ID Card, Access Badges).',
            'Final approved attendance records and leave balance sheet.'
        ],
        actionSteps: [
            'Step 1: Calculate your total exit settlement dues using our F&F Settlement Calculator.',
            'Step 2: Offset unused Earned Leaves against notice shortfall using the Notice Adjustment Calculator.',
            'Step 3: Send a formal F&F demand email to HR citing Section 5(2) of the Payment of Wages Act.',
            'Step 4: If letters or dues are withheld past 45 days, generate a Pre-Litigation Legal Demand Notice or file a conciliation petition before the Labour Commissioner.'
        ],
        relatedTools: [
            { title: 'Full & Final (F&F) Calculator', path: '/tools/ff-calculator', desc: 'Calculate salary dues, leave encashment & gratuity' },
            { title: 'Notice & Leave Adjustment Calculator', path: '/tools/notice-adjustment-calculator', desc: 'Offset accrued EL against notice shortfall' },
            { title: 'Pre-Litigation Legal Notice Generator', path: '/tools/legal-notice-generator', desc: 'Generate formal legal notice for withheld settlement' },
            { title: 'Relieving Risk Diagnostic Scanner', path: '/tools/exit-scanner', desc: 'Audit clearance readiness and avoid disputes' }
        ],
        whyItMatters: 'A clean and respectful exit is your statutory right. No employer has the legal authority to hold your career, earned wages, or professional reputation hostage when moving to a new opportunity.'
    }
];
