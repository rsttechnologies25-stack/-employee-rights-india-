import React from 'react';
import * as HelmetModule from 'react-helmet-async';

const Helmet = HelmetModule.Helmet || (HelmetModule.default && HelmetModule.default.Helmet) || HelmetModule.default;

const BASE_URL = 'https://employee-rights.rexonsofttech.in';
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = 'Employee Rights India — RexonSoftTech';
const BRAND = 'RexonSoftTech';

const seoData = {
    '/': {
        title: 'Employee Rights India — RexonSoftTech | Know Your Labour Law Rights',
        description: 'Free Indian labour law guide by RexonSoftTech (RST Technologies). Salary delay rules, PF, ESI, minimum wages 2025-2026, notice period, gratuity, POSH act, and labour complaint portals.',
        keywords: 'employee rights rexonsofttech, rexonsofttech employee rights, employee rights india, RST Technologies, indian labour law, worker rights, pf esi rules, notice period india, minimum wages india 2025',
    },
    '/whats-new': {
        title: 'New Labour Laws 2025-2026 India — What Changed for Employees',
        description: 'All latest Indian labour law updates — Budget 2025 ₹12L tax exemption, PF interest 8.25%, 4 Labour Codes status, gig worker rights, POSH digital updates, maternity rights.',
        keywords: 'new labour laws india 2025 2026, budget 2025 tax exemption, labour code updates india, gig worker rights india, pf interest rate 2025, rexonsofttech',
    },
    '/pf-esi': {
        title: 'PF & ESI Rules in India 2025 — Eligibility, Contribution & Rights',
        description: 'Complete guide to Provident Fund (PF) and ESI rules in India. Eligibility, contribution rates, UAN, EPFO grievance and your rights as an employee.',
        keywords: 'PF rules india 2025, ESI eligibility, EPF contribution, UAN portal, EPFO grievance, ESI benefits india, rexonsofttech',
    },
    '/contracts': {
        title: 'Employment Bonds & Contracts in India — Are They Legal?',
        description: 'Understanding employment bonds, service agreements, and training bonds in India. Which bonds are legally enforceable and how to protect yourself.',
        keywords: 'employment bond india, service agreement, bond validity india, training bond legal, employment contract india, section 27 contract act',
    },
    '/notice-period': {
        title: 'Notice Period Rules in India 2025 — Salary, Buyout & Rights',
        description: 'Complete guide to notice period rules in India. Salary during notice, buyout options, garden leave, and legal requirements for resignation.',
        keywords: 'notice period india, notice period salary, buyout notice period, notice period rules 2025, rexonsofttech',
    },
    '/working-hours': {
        title: 'Working Hours & Overtime Rules India 2025 — Know Your Limit',
        description: 'Legal working hours in India — 8 hrs/day, 48 hrs/week. Overtime must be paid at 2x rate. Learn about maximum hours under Factories Act & S&E Acts.',
        keywords: 'working hours india, overtime pay india, maximum working hours, overtime rules 2025, 12 hour work day legal india',
    },
    '/leave-holidays': {
        title: 'Leave Entitlements India 2025 — Earned, Casual, Sick & Festival',
        description: 'Complete guide to leave entitlements in India. Casual leave, sick leave, earned leave, maternity leave, festival holidays, and weekly off rights.',
        keywords: 'leave rules india 2025, casual leave, sick leave, earned leave, holiday laws india, leave encashment',
    },
    '/illegal-practices': {
        title: 'Illegal Employer Practices India — What Your Boss Cannot Do',
        description: 'Know what employer practices are illegal in India. Unpaid overtime, salary deductions, forced resignation, job scams, and how to report violations.',
        keywords: 'illegal employer practices india, labour law violation, unpaid overtime india, employee exploitation, illegal deductions',
    },
    '/rights': {
        title: 'All Employee Rights India — Complete Labour Law Index',
        description: 'Comprehensive index of all employee rights under Indian labour law. Salary, termination, leave, PF, ESI, gratuity — browse by category.',
        keywords: 'employee rights india complete, labour rights india, worker protection, all employment law india, rexonsofttech',
    },
    '/termination/probation': {
        title: 'Termination During Probation India — Rights & Notice Period',
        description: 'Can employer terminate during probation? Notice period rules, illegal termination scenarios, salary dues, and PF rights during probation in India.',
        keywords: 'termination during probation india, probation notice period, fired during probation, illegal termination probation',
    },
    '/termination/after-confirmation': {
        title: 'Termination After Confirmation India — Notice, Compensation & Rights',
        description: 'Rights of confirmed employees when terminated. Notice period, show cause notice, domestic enquiry, retrenchment rules and compensation under Indian law.',
        keywords: 'termination after confirmation india, retrenchment india, show cause notice, domestic enquiry, confirmed employee fired',
    },
    '/termination/wrongful': {
        title: 'Wrongful Termination India — Illegal Dismissal & Legal Remedies',
        description: 'Examples of illegal termination in India, employee remedies, reinstatement rights, and how to file a labour court complaint for wrongful dismissal.',
        keywords: 'wrongful termination india, illegal dismissal, labour court complaint, reinstatement india, unfair termination',
    },
    '/full-final-settlement': {
        title: 'Full & Final Settlement (F&F) India 2025 — Complete Checklist',
        description: 'What your employer must pay on exit — last salary, gratuity, leave encashment, notice pay, PF and what they CANNOT withhold. Timeline: 45 days.',
        keywords: 'full final settlement india, FF settlement, gratuity, leave encashment, exit dues india, FnF settlement checklist',
    },
    '/exit-process': {
        title: 'Exit Process India — Documents to Collect When Leaving a Job',
        description: 'Complete exit checklist — relieving letter, experience letter, Form 16, PF transfer, F&F statement and exit interview tips for Indian employees.',
        keywords: 'exit process india, documents to collect leaving job, relieving letter, experience letter, exit checklist india',
    },
    '/experience-letter': {
        title: 'Experience Letter Rights India — Can Employer Refuse?',
        description: 'Is your employer legally required to give you an experience letter? What to do if they refuse, and what the letter must contain under Indian law.',
        keywords: 'experience letter india, employer refuses experience letter, experience certificate rights india',
    },
    '/relieving-letter': {
        title: 'Relieving Letter Rights India — Employer Must Issue After Notice',
        description: 'Your right to a relieving letter, employer obligations, common disputes and what to do if your employer withholds it in India.',
        keywords: 'relieving letter india, employer refuses relieving letter, relieving letter dispute india, relieving letter rights',
    },
    '/service-certificate': {
        title: 'Service Certificate India — State Law Requirements',
        description: 'Which states mandate service certificates under their Shops & Establishments Act? How it differs from an experience letter and what to do if denied.',
        keywords: 'service certificate india, shops establishments act certificate, service certificate vs experience letter',
    },
    '/salary-calculation': {
        title: 'Salary Calculation Methods India 2025 — ÷26 vs ÷30 vs ÷31',
        description: 'How is your salary calculated in India? Compare ÷26, ÷30, ÷31, and working-day methods with real examples, LOP rules and per-day salary.',
        keywords: 'salary calculation india, LOP calculation india, per day salary india, salary proration, salary calculation method 26 30',
    },
    '/pay-cycle': {
        title: 'Salary Payment Rules India — 7th & 10th Deadline Law',
        description: 'When must your employer pay your salary? 7th and 10th deadline rules under Payment of Wages Act, 1936. Rights when salary is delayed.',
        keywords: 'pay cycle india, salary payment date india, payment of wages act 7th, delayed salary rules',
    },
    '/delayed-salary': {
        title: 'Salary Not Paid India — How to Recover & File Complaint',
        description: 'Step-by-step guide when employer does not pay salary. Labour Commissioner complaint, legal notice, Shramik Suvidha portal and court options.',
        keywords: 'salary not paid india, delayed salary complaint india, how to recover unpaid salary, salary recovery india',
    },
    '/gratuity': {
        title: 'Gratuity India 2025 — Eligibility, Calculation & Claim Rights',
        description: 'Gratuity eligibility (5 years rule), formula (15/26 × salary × years), forfeiture rules, tax exemption up to ₹20 lakhs and complaint process.',
        keywords: 'gratuity india 2025, gratuity calculation, gratuity eligibility 5 years, payment of gratuity act, gratuity formula',
    },
    '/tools': {
        title: 'Free Employee Rights Calculators India — Salary, Gratuity & Dues',
        description: 'Free online statutory calculators for Indian employees — take-home salary, gratuity, notice buyout, leave encashment, F&F settlement and income tax.',
        keywords: 'salary calculator india, gratuity calculator india, notice period buyout calculator, FF calculator india, employee tools',
    },
    '/salary-calculator': {
        title: 'Take-Home Salary Calculator India — CTC Breakup 2025',
        description: 'Calculate your take-home salary from CTC. Includes PF deduction, professional tax, income tax, and HRA exemption for Indian employees.',
        keywords: 'salary calculator india 2025, take home salary calculator, CTC to in-hand salary, salary breakup india',
    },
    '/tools/ff-calculator': {
        title: 'F&F Settlement Calculator India — Estimate Your Exit Dues',
        description: 'Estimate your Full & Final settlement — last salary, leave encashment, gratuity, bonus and notice pay recovery in one comprehensive calculator.',
        keywords: 'ff calculator india, full final settlement calculator, exit dues calculator india, FnF amount calculator',
    },
    '/tools/notice-buyout-calculator': {
        title: 'Notice Period Buyout Calculator India — How Much to Pay?',
        description: 'Calculate exactly how much you need to pay to exit before your notice period ends. Based on your salary and remaining notice days.',
        keywords: 'notice period buyout calculator, notice period pay calculator india, notice waiver amount calculator',
    },
    '/tools/leave-encashment-calculator': {
        title: 'Leave Encashment Calculator India — Calculate Your Leave Pay',
        description: 'Estimate your earned leave encashment at exit using ÷30 or ÷26 method with tax exemption guidance under Income Tax Act.',
        keywords: 'leave encashment calculator india, earned leave encashment, leave encashment tax exemption',
    },
    '/tools/salary-proration-calculator': {
        title: 'Salary Proration Calculator India — Compare ÷26 ÷30 ÷31',
        description: 'Compare all 4 salary calculation methods side-by-side — ÷26, ÷30, ÷31, and working-day method — with your actual salary and days worked.',
        keywords: 'salary proration calculator india, salary per day calculator, salary calculation method comparison',
    },
    '/tools/income-tax-calculator': {
        title: 'Income Tax Calculator India 2025 — Old vs New Tax Regime',
        description: 'Compare the Old and New tax regimes for salaried employees in India to find which saves you more money in FY 2025-26.',
        keywords: 'income tax calculator india 2025, old vs new tax regime, salary tax calculator india, FY 2025-26 tax',
    },
    '/tools/minimum-wage-checker': {
        title: 'Minimum Wage Compliance Checker India — Verify Your Pay',
        description: 'Verify if your monthly basic salary meets the legal minimum wage limit in your state, industry sector, and skill level in India.',
        keywords: 'minimum wage compliance checker, salary check minimum wage, are you underpaid india, salary compliance calculator',
    },
    '/tools/overtime-tracker': {
        title: 'Overtime & Shift Hours Tracker — Calculate 2x Overtime Earnings',
        description: 'Track daily shift times, breaks, and calculate total regular & overtime hours. Estimate double-rate (2x) overtime pay based on state rules.',
        keywords: 'overtime tracker india, work hours log, shift tracker, overtime pay calculator, double wages overtime',
    },
    '/tools/grievance-generator': {
        title: 'Labour Grievance Complaint Letter Generator — Legal Drafts',
        description: 'Generate legally structured, statute-cited formal grievance letters for unpaid salary, withheld relieving certificates, PF issues, and wrongful termination in India.',
        keywords: 'labour complaint draft, delayed salary letter, relieving letter withheld complaint, PF non-deposit grievance letter, conciliation officer draft',
    },
    '/tools/clause-analyzer': {
        title: 'Employment Agreement Clause Validity Checker India',
        description: 'Instantly check if your employment contract contains illegal clauses (void non-competes, illegal bonds, unfair notice periods) under the Indian Contract Act.',
        keywords: 'employment contract checker, non compete validity india, illegal training bond checker, employment agreement review',
    },
    '/tools/pf-analyzer': {
        title: 'PF & Pension Analyzer - Check EPF Evasion India',
        description: 'Calculate your accurate Provident Fund (EPF) deductions, check your EPS pension split, and scan your CTC for illegal PF evasion by your employer.',
        keywords: 'pf calculator india, epf eps split, pf evasion checker, vivekananda vidyamandir pf ruling',
    },
    '/tools/pip-defense': {
        title: 'PIP Defense Kit & Rebuttal Generator India',
        description: 'Analyze your Performance Improvement Plan (PIP) to check if it\'s an illegal silent layoff setup. Generate a formal HR rebuttal to protect your rights.',
        keywords: 'pip defense india, performance improvement plan rebuttal, unfair pip template, silent layoff india',
    },
    '/tools/gratuity-calculator': {
        title: 'Gratuity Eligibility & Payout Calculator India',
        description: 'Calculate your exact Gratuity payout in India. Check if you qualify under the 4 years and 240 days Supreme Court rule.',
        keywords: 'gratuity calculator india, 4 years 240 days gratuity rule, gratuity eligibility checker',
    },
    '/tools/exit-scanner': {
        title: 'Exit Interview Red Flag Scanner India',
        description: 'Scan your exit interview or resignation process for illegal HR demands like non-competes, training bonds, or withheld settlements.',
        keywords: 'exit interview red flags, illegal non compete india, illegal training bond, fnf withheld',
    },
    '/legal-map': {
        title: 'Interactive State Legal Hub - Labor Laws India',
        description: 'Find your state\'s specific labor laws, minimum wages, and regional labour commissioner directory in one place.',
        keywords: 'state labor laws india, shops and establishments act, minimum wage by state, labour commissioner directory',
    },
    '/tools/sham-contractor': {
        title: 'Sham Contractor Scanner - Employee vs Contractor Test India',
        description: 'Take the legal control test to see if your employer is illegally classifying you as a contractor under Section 194J to avoid paying PF, Gratuity, and leaves.',
        keywords: 'sham contractor india, employee vs contractor test, 194j vs 192, independent contractor labor law',
    },
    '/tools/hra-calculator': {
        title: 'HRA Tax Exemption Optimizer - Least of 3 Rule Calculator',
        description: 'Calculate your exact House Rent Allowance (HRA) tax exemption using the Income Tax Least of 3 rule for Metro and Non-Metro cities.',
        keywords: 'hra calculator india, hra exemption calculator, hra least of 3 rule, house rent allowance tax free',
    },
    '/tools/maternity-tracker': {
        title: 'Maternity Benefit Legal Tracker - 26 Weeks Calculator India',
        description: 'Calculate your exact 26-week maternity leave timeline and verify your statutory rights under the Maternity Benefit (Amendment) Act, 2017.',
        keywords: 'maternity leave calculator india, 26 weeks maternity leave, maternity benefit act rights, pregnancy termination protection',
    },
    '/tools/night-shift-audit': {
        title: 'Night Shift Safety Audit for Women - Compliance India',
        description: 'Audit your company\'s safety compliance for women working night shifts. Check mandatory rules like GPS cabs, female security, and written consent.',
        keywords: 'night shift rules for women india, female employee night shift, shops and establishments act night shift, bpo women safety rules',
    },
    '/tools/bonus-analyzer': {
        title: 'Bonus & Variable Pay Resignation Analyzer India',
        description: 'Find out if your employer is illegally withholding your statutory bonus or variable pay during your notice period. Know your rights under the Payment of Bonus Act.',
        keywords: 'statutory bonus resignation india, variable pay notice period, payment of bonus act 1965, active employee clause illegal',
    },
    '/tools/offer-revocation': {
        title: 'Offer Letter Revoked? Promissory Estoppel Rights India',
        description: 'What to do if a company revokes your job offer after you resigned. Learn about Promissory Estoppel and how to claim compensation for lost wages in India.',
        keywords: 'offer letter revoked india, promissory estoppel employment, job offer cancelled after resignation, compensation for revoked offer',
    },
    '/tools/bgv-shield': {
        title: 'BGV Defamation Shield - Background Verification Rights India',
        description: 'Is your manager threatening to ruin your background verification (BGV)? Learn your rights against corporate defamation and illegal \'absconding\' tags.',
        keywords: 'bgv defamation india, manager threatening bad reference, failed background check india, absconding tag illegal, section 499 ipc',
    },
    '/tools/layoff-survival': {
        title: 'Mass Layoff Survival Kit - Severance Rights India',
        description: 'Fired in a mass layoff? Audit your severance package to ensure you aren\'t being cheated out of your legal rights under Chapter VB of the Industrial Disputes Act.',
        keywords: 'mass layoff rights india, chapter vb industrial disputes act, 15 days severance pay, tech layoff india rights',
    },
    '/tools/employment-bond-scanner': {
        title: 'Employment Bond & Non-Compete Validity Scanner India — Section 27',
        description: 'Check whether your company\'s service bond, training penalty, or post-employment non-compete clause is legally enforceable in Indian courts.',
        keywords: 'employment bond legal in india, section 27 contract act non compete, service agreement bond penalty, resign before bond period',
    },
    '/tools/notice-adjustment-calculator': {
        title: 'Notice Period Shortfall & Leave Adjustment Calculator India',
        description: 'Calculate net notice buyout recovery by offsetting accumulated Earned Leaves against your notice shortfall. Avoid illegal gross salary deductions.',
        keywords: 'notice period buyout calculator, adjust leaves against notice period, notice period shortfall formula, basic vs gross notice buyout',
    },
    '/tools/posh-complaint-builder': {
        title: 'Confidential POSH Complaint Builder & ICC Inquiry Tracker India',
        description: 'Draft a formal, legally structured sexual harassment complaint under the POSH Act, 2013 with interim relief requests and 90-day inquiry timeline tracking.',
        keywords: 'posh complaint format india, how to file posh complaint, internal complaints committee sample letter, posh act section 12 interim relief',
    },
    '/tools/gig-worker-rights': {
        title: 'Gig & Platform Worker Rights Hub India — Blinkit, Swiggy, Zomato, Uber',
        description: 'Know your legal protections under the Gig Workers Welfare Acts in India. Generate formal appeal letters for unfair ID block and account deactivation.',
        keywords: 'gig worker rights india, swiggy zomato id block appeal, blinkit partner deactivation, rajasthan gig workers act, karnataka gig workers bill',
    },
    '/tools/legal-notice-generator': {
        title: 'Formal Legal Demand Notice Generator for Employees India',
        description: 'Draft an official, advocate-grade legal demand notice for unpaid salary, withheld relieving letters, illegal notice pay deductions, and delayed PF contributions.',
        keywords: 'legal notice format for unpaid salary, legal notice for relieving letter, legal demand letter to employer india, section 15 payment of wages legal notice',
    },
    '/tools/ctc-deduction-scanner': {
        title: 'Salary Slip & CTC Hidden Deduction Scanner India — Audit Payslip',
        description: 'Audit your monthly salary slip for illegal employer PF shifts, monthly gratuity deductions, and Basic < 50% CTC issues under Indian labour laws.',
        keywords: 'ctc deduction scanner india, salary slip audit, hidden pf deduction illegal, employer pf deducted from gross, basic salary under 50 percent',
    },
    '/tools/labour-directory': {
        title: 'Regional Labour Commissioner Office Directory — Contacts',
        description: 'Find contact phone numbers, official email addresses, physical office addresses, and official websites of local and district labour departments across India.',
        keywords: 'labour office address, district labour commissioner contact, file labour complaint office, state labour commissioner email, AP, Karnataka, Maharashtra labour offices',
    },
    '/tools/severance-calculator': {
        title: 'Retrenchment Severance Pay Calculator India — Section 25F',
        description: 'Estimate legal retrenchment severance pay (15 days average wage per completed year of service) and contractual notice pay under the Industrial Disputes Act.',
        keywords: 'severance pay calculator india, retrenchment compensation calculator, section 25F severance, layoff compensation, industrial disputes act calculation',
    },
    '/maternity-rights': {
        title: 'Maternity Leave Rights India — 26 Weeks Paid Leave Law',
        description: '26 weeks of paid maternity leave for first 2 children, protection against termination, crèche facility rights and ESI maternity benefits in India.',
        keywords: 'maternity leave india, maternity benefit act, 26 weeks maternity leave, pregnancy termination protection, crèche india',
    },
    '/posh-act': {
        title: 'POSH Act India — Protection Against Workplace Sexual Harassment',
        description: 'What constitutes sexual harassment at work, how to file a complaint with ICC, 60-day inquiry timeline and employer obligations under POSH Act 2013.',
        keywords: 'posh act india, sexual harassment workplace, ICC POSH complaint, workplace harassment india, POSH Act 2013',
    },
    '/pip-guide': {
        title: 'PIP Rights India — Performance Improvement Plan & Termination',
        description: 'On a PIP? Know your legal rights, how to respond to unfair targets, severance pay rights and whether you must resign during a PIP in India.',
        keywords: 'pip india, performance improvement plan rights, fired after pip india, pip notice period, pip resignation',
    },
    '/forced-resignation': {
        title: 'Forced Resignation India — Constructive Dismissal & Your Rights',
        description: 'HR pressuring you to resign? Forced resignation is constructive dismissal — illegal under Indian law. Know your rights and what evidence to collect.',
        keywords: 'forced resignation india, constructive dismissal india, hr forcing to resign, resignation under pressure india',
    },
    '/moonlighting': {
        title: 'Moonlighting India 2025 — Is Dual Employment Legal?',
        description: 'Is moonlighting illegal in India? Understand exclusive employment clauses, how employers track dual employment via UAN and the legal risks.',
        keywords: 'moonlighting india, dual employment legal india, moonlighting it companies, freelance while employed india',
    },
    '/data-privacy': {
        title: 'Employee Data Privacy India — Can Employer Monitor You?',
        description: 'Can your employer monitor your laptop, read emails or track your location in India? Know your digital privacy rights at the workplace.',
        keywords: 'employee monitoring laws india, data privacy workplace india, company laptop tracking, employer surveillance india',
    },
    '/form-16-rights': {
        title: 'Form 16 Rights India — TDS Certificate & Employer Obligations',
        description: 'Understand your right to Form 16, employer\'s June 15 deadline, what to do if TDS is deducted but not deposited, and how to file ITR without it.',
        keywords: 'form 16 rights india, tds certificate india, employer form 16 deadline, itr without form 16',
    },
    '/faq': {
        title: 'Employee Rights FAQ India — 180+ Labour Law Questions Answered',
        description: '180+ answered questions on termination, salary, gratuity, F&F settlement, notice period, experience letters, PF, ESI and more under Indian labour law.',
        keywords: 'employee rights faq india, labour law questions india, salary rights faq, termination faq india',
    },
    '/complaint-guide': {
        title: 'How to File a Labour Complaint India — Step-by-Step Guide',
        description: 'Step-by-step guide to file labour complaints in India — Labour Commissioner, Shramik Suvidha, EPFO grievance, ESIC portal and Labour Court.',
        keywords: 'file labour complaint india, labour commissioner complaint, shramik suvidha portal, EPFO grievance, labour court india',
    },
    '/new-labour-codes': {
        title: 'New Labour Codes India 2025 — 4 Codes That Change Everything',
        description: 'India\'s 4 new Labour Codes explained — Wage Code, Social Security Code, OSH Code, IR Code. How they affect your salary, PF, leave and job security.',
        keywords: 'new labour codes india 2025, wage code india, social security code india, labour codes employee rights',
    },
    '/minimum-wages': {
        title: 'Minimum Wages in India 2025-2026 — Official State-Wise Rates',
        description: 'Complete guide to minimum wages in India for 2025-2026. Official state-wise daily and monthly rates for unskilled, skilled, IT and commercial sectors.',
        keywords: 'minimum wages india 2025, state-wise minimum wages, minimum wage act 1948, salary rights india, minimum wage per day',
    },
    '/state-labour-laws': {
        title: 'State-Wise Labour Laws India 2025 — Minimum Wages & SE Acts',
        description: 'State-wise minimum wages 2025 and Shops & Establishments Act rules for 15 Indian states — Tamil Nadu, Karnataka, Delhi, Maharashtra, Kerala and more.',
        keywords: 'state labour laws india, minimum wages by state india 2025, shops establishments act state, karnataka labour law, tamil nadu labour law',
    },
    '/state-labour-laws/tamil-nadu': {
        title: 'Tamil Nadu Minimum Wages 2025 & Labour Laws — IT, Shops, Factories',
        description: 'Official Tamil Nadu minimum wages 2025 for IT, shops, factories and construction. Working hours, leave policy and complaint rights under TN S&E Act 1947.',
        keywords: 'tamil nadu minimum wages 2025, TN labour law, tamil nadu IT salary minimum, TN shops establishments act',
    },
    '/state-labour-laws/karnataka': {
        title: 'Karnataka Minimum Wages 2025 & Labour Laws — Bangalore IT Rules',
        description: 'Karnataka minimum wages 2025 for IT, shops and factories. Bangalore IT sector rules, working hours, leave and overtime under Karnataka S&E Act 1961.',
        keywords: 'karnataka minimum wages 2025, bangalore IT minimum wage, karnataka labour law, karnataka shops establishments act',
    },
    '/state-labour-laws/maharashtra': {
        title: 'Maharashtra Minimum Wages 2025 & Labour Laws — Mumbai Pune',
        description: 'Maharashtra minimum wages 2025 for IT, shops, factories. Mumbai and Pune labour rules, working hours and overtime under Maharashtra S&E Act 2017.',
        keywords: 'maharashtra minimum wages 2025, mumbai minimum wage, pune labour law, maharashtra shops establishments act 2017',
    },
    '/state-labour-laws/telangana': {
        title: 'Telangana Minimum Wages 2025 & Labour Laws — Hyderabad IT',
        description: 'Telangana minimum wages 2025 for IT, shops and factories. Hyderabad IT sector rules under Telangana S&E Act 1988 with overtime and leave rights.',
        keywords: 'telangana minimum wages 2025, hyderabad IT minimum wage, telangana labour law, hyderabad salary rules',
    },
    '/state-labour-laws/delhi': {
        title: 'Delhi Minimum Wages 2025 — Highest in India ₹783–₹1,035/Day',
        description: 'Delhi minimum wages 2025 — ₹783 to ₹1,035 per day (highest in India). IT, factories and construction sector rates. Delhi S&E Act 1954 rules.',
        keywords: 'delhi minimum wages 2025, delhi labour law, delhi IT minimum salary, NCR minimum wages, delhi wages per day',
    },
    '/state-labour-laws/haryana': {
        title: 'Haryana Minimum Wages 2025 & Labour Laws — Gurugram Faridabad',
        description: 'Haryana minimum wages 2025 for IT, shops and factories in Gurugram and Faridabad. Working hours, leave and overtime under Haryana labour law.',
        keywords: 'haryana minimum wages 2025, gurugram minimum wage, faridabad labour law, haryana IT sector wages',
    },
    '/state-labour-laws/kerala': {
        title: 'Kerala Minimum Wages 2025 & Labour Laws — Kochi Thiruvananthapuram',
        description: 'Kerala minimum wages 2025 for IT, shops and factories. Kochi and Thiruvananthapuram labour rules under Kerala Shops & Establishments Act 1960.',
        keywords: 'kerala minimum wages 2025, kochi minimum wage, kerala labour law, kerala shops establishments act 1960',
    },
    '/state-labour-laws/uttar-pradesh': {
        title: 'UP Minimum Wages 2025 & Labour Laws — Noida Greater Noida',
        description: 'Uttar Pradesh minimum wages 2025 for IT, shops and factories in Noida, Greater Noida and Lucknow. UP labour laws under UP S&E Act 1962.',
        keywords: 'uttar pradesh minimum wages 2025, noida minimum wage, lucknow labour law, UP shops establishments act',
    },
    '/state-labour-laws/west-bengal': {
        title: 'West Bengal Minimum Wages 2025 & Labour Laws — Kolkata',
        description: 'West Bengal minimum wages 2025 for IT, shops and factories in Kolkata. Leave rules, overtime and employment rights under WB S&E Act 1963.',
        keywords: 'west bengal minimum wages 2025, kolkata minimum wage, west bengal labour law, WB shops establishments act',
    },
    '/state-labour-laws/gujarat': {
        title: 'Gujarat Minimum Wages 2025 & Labour Laws — Ahmedabad Surat',
        description: 'Gujarat minimum wages 2025 for IT, shops and factories in Ahmedabad and Surat. Gujarat S&E Act 2019 rules for working hours and overtime.',
        keywords: 'gujarat minimum wages 2025, ahmedabad minimum wage, gujarat labour law, gujarat shops establishments act 2019',
    },
    '/state-labour-laws/punjab': {
        title: 'Punjab Minimum Wages 2025 & Labour Laws',
        description: 'Punjab minimum wages 2025 for IT, shops and factories. Leave rules, working hours and overtime rights under Punjab Shops & Establishments Act 1958.',
        keywords: 'punjab minimum wages 2025, punjab labour law, chandigarh minimum wage, punjab shops establishments act',
    },
    '/state-labour-laws/andhra-pradesh': {
        title: 'Andhra Pradesh Minimum Wages 2025 & Labour Laws — Vizag Amaravati',
        description: 'Andhra Pradesh minimum wages 2025 for IT, shops and factories. Visakhapatnam and Amaravati labour rules under AP Shops & Establishments Act 1988.',
        keywords: 'andhra pradesh minimum wages 2025, AP labour law, vizag minimum wage, andhra pradesh IT salary',
    },
    '/state-labour-laws/madhya-pradesh': {
        title: 'Madhya Pradesh Minimum Wages 2025 & Labour Laws — Indore Bhopal',
        description: 'MP minimum wages 2025 for IT, shops and factories in Indore and Bhopal. Working hours and employment rules under MP S&E Act 1958.',
        keywords: 'madhya pradesh minimum wages 2025, indore minimum wage, bhopal labour law, MP shops establishments act',
    },
    '/state-labour-laws/rajasthan': {
        title: 'Rajasthan Minimum Wages 2025 & Labour Laws — Jaipur',
        description: 'Rajasthan minimum wages 2025 for IT, shops and factories in Jaipur. Working hours, leave and overtime rights under Rajasthan S&E Act 1958.',
        keywords: 'rajasthan minimum wages 2025, jaipur minimum wage, rajasthan labour law, Rajasthan shops establishments act',
    },
    '/state-labour-laws/odisha': {
        title: 'Odisha Minimum Wages 2025 & Labour Laws — Bhubaneswar',
        description: 'Odisha minimum wages 2025 for IT, shops and factories in Bhubaneswar. Working hours, leave and employment rights under Odisha S&E Act 1956.',
        keywords: 'odisha minimum wages 2025, bhubaneswar minimum wage, odisha labour law, Odisha shops establishments act',
    },
    '/tamil-nadu': {
        title: 'Tamil Nadu Labour Laws — Complete Bilingual Hub (EN + தமிழ்)',
        description: 'The ultimate bilingual guide to employee rights in Tamil Nadu — IT, manufacturing, shops, and construction. Available in English and Tamil.',
        keywords: 'tamil nadu labour law, TN employee rights, tamil labour law, tamilnadu wage rules, tamilnadu IT rights',
    },
    '/tamil-nadu-minimum-wages': {
        title: 'Tamil Nadu Minimum Wages 2025 — Sector-Wise Official Rates',
        description: 'Official Tamil Nadu minimum wages 2025 for IT/BPO, shops, factories and construction. Bilingual (EN+Tamil) guide with complaint rights and official sources.',
        keywords: 'tamil nadu minimum wages 2025, TN minimum wage IT sector, tamilnadu factory wages, minimum salary tamilnadu',
    },
    '/tools/authority-finder': {
        title: 'Authority Finder — Where to File Labour Complaints in India',
        description: 'Find out whether to complain to Central ALC, State Labour Commissioner, EPFO, or ICC. Verified government portals, laws, and evidence requirements.',
        keywords: 'where to file labour complaint, who should i complain to, labour commissioner jurisdiction, samadhan portal, epfigms complaint',
    },
    '/tools/problem-wizard': {
        title: 'Workplace Problem Assessment Wizard — Case Evaluation',
        description: 'Answer 7 quick questions to receive tailored procedural guidance, evidence preservation steps, and warning signs for workplace disputes.',
        keywords: 'employee problem wizard, workplace dispute evaluation, labour law guidance tool, employment assessment india',
    },
    '/tools/evidence-checklist': {
        title: 'Evidence Preservation Checklist — 17 Crucial Documents',
        description: 'Interactive 17-point legal evidence preservation checklist to prepare before filing labour complaints or demanding unpaid salary in India.',
        keywords: 'evidence checklist employment dispute, labour court evidence, proving salary not paid, preserving emails payslips',
    },
    '/tools/case-timeline-builder': {
        title: 'Employment Case Timeline Builder — Incident Chronology Tool',
        description: 'Build and print an organized chronological incident timeline with evidence links for Labour Commissioner conciliation and legal notices.',
        keywords: 'case timeline builder, dispute chronology tool, employment incident log, labour petition annexure format',
    },
    '/disputes/absconding-allegation': {
        title: 'Employer Says I Am Absconding — Legal Rights & Defense Protocol',
        description: 'What to do if your employer falsely tags you as an absconder after you resigned, took medical leave, or faced a toxic workplace in India.',
        keywords: 'employer says absconding, job abandonment india, absconding notice reply, relieving letter after absconding threat',
    },
    '/disputes/no-employment-record': {
        title: 'Employer Denies Employment Record — How to Legally Prove Service',
        description: 'Worked without an appointment letter? Learn how Indian courts establish employment through bank statements, EPFO, and tax records.',
        keywords: 'proving employment without appointment letter, employer denying work record, 26as proof of employment, master servant test',
    },
    '/disputes/handover-asset-dispute': {
        title: 'Laptop Return & Handover Disputes — Asset Deductions Law',
        description: 'How to legally return company laptops, avoid false property damage deductions, and obtain formal clearance acknowledgements on resignation.',
        keywords: 'laptop return dispute, company asset damage deduction, payment of wages section 7, clearance receipt resignation',
    },
    '/disputes/data-misuse-allegation': {
        title: 'Employer Alleges Data Misuse / IP Theft — Rights & Defense Protocol',
        description: 'What to do if an employer in India threatens IT Act Section 66 or confidentiality breach allegations to block your resignation.',
        keywords: 'data misuse allegation employee, it act threats resignation, confidentiality breach defense, section 27 non compete',
    },
    '/trainee-apprentice-rights': {
        title: 'Trainee & Apprentice Rights in India — Stipend Rules & Bonds',
        description: 'Complete statutory guide for interns, trainees, and apprentices under the Apprentices Act 1961. Minimum stipend rules, bond enforceability, and hours.',
        keywords: 'apprentice rights india, trainee stipend rules, unpaid internship legal india, apprentices act 1961, trainee bond',
    },
    '/about': {
        title: 'About Employee Rights India — Mission & Editorial Standards',
        description: 'Learn about the mission, research methodology, and team behind Employee Rights India — operated by RexonSoftTech (RST Technologies).',
        keywords: 'about employee rights india, rexonsofttech, rst technologies, labour law research india',
    },
    '/contact': {
        title: 'Contact & Feedback Desk — Employee Rights India',
        description: 'Reach out to the editorial and legal-information team at Employee Rights India for corrections, queries, and feedback.',
        keywords: 'contact employee rights india, suggest labour law correction, editorial desk rexonsofttech',
    },
    '/privacy-policy': {
        title: 'Privacy Policy — DPDP Act 2023 Compliant',
        description: 'Privacy policy compliant with India DPDP Act 2023. Learn how Employee Rights India operates with zero server-side personal data collection.',
        keywords: 'privacy policy employee rights india, dpdp act compliance, zero pii storage, client side privacy',
    },
    '/terms': {
        title: 'Terms of Use — Employee Rights India',
        description: 'Terms of use and conditions for accessing educational labour law tools and guides on Employee Rights India.',
        keywords: 'terms of use, terms and conditions employee rights india, educational usage disclaimer',
    },
    '/disclaimer': {
        title: 'Legal Disclaimer — Educational Guidance Notice',
        description: 'Important legal disclaimer regarding procedural information, non-advocate relationship, and legal accuracy parameters.',
        keywords: 'legal disclaimer, non advocate notice, educational labour law guidance, no legal advice guarantee',
    },
    '/editorial-policy': {
        title: 'Editorial & Legal Verification Policy — Sources & Cadence',
        description: 'Learn about our rigorous legal research methodology, statute verification process, and correction guidelines.',
        keywords: 'editorial policy, statute verification methodology, primary legal sources india, labour law update cadence',
    },
};

export default function SEOHead({ path, schema }) {
    const data = seoData[path] || seoData['/'];
    const fullUrl = `${BASE_URL}${path}`;

    // Automatic BreadcrumbList Schema for Rich Search Results
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": BASE_URL
            },
            ...(path !== '/' ? [{
                "@type": "ListItem",
                "position": 2,
                "name": data.title.split('—')[0].trim(),
                "item": fullUrl
            }] : [])
        ]
    };

    return (
        <Helmet>
            {/* ── Primary ── */}
            <title>{data.title} | {BRAND}</title>
            <meta name="description" content={data.description} />
            <meta name="keywords" content={data.keywords} />
            <meta name="author" content="RexonSoftTech / RST Technologies" />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <link rel="canonical" href={fullUrl} />

            {/* ── Open Graph ── */}
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={OG_IMAGE} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={data.title} />
            <meta property="og:locale" content="en_IN" />

            {/* ── Twitter Card ── */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@rexonsofttech" />
            <meta name="twitter:creator" content="@rexonsofttech" />
            <meta name="twitter:title" content={data.title} />
            <meta name="twitter:description" content={data.description} />
            <meta name="twitter:image" content={OG_IMAGE} />
            <meta name="twitter:url" content={fullUrl} />

            {/* ── Geo (India) ── */}
            <meta name="geo.region" content="IN" />
            <meta name="geo.country" content="India" />

            {/* ── Automatic Breadcrumb Schema ── */}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>

            {/* ── Custom Schema.org JSON-LD ── */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
