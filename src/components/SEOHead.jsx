import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://employee-rights.rexonsofttech.in';
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = 'Employee Rights India';
const BRAND = 'EmployeeRightsIndia.in';

const seoData = {
    '/': {
        title: 'Employee Rights India — Know Your Labour Law Rights',
        description: 'Free guide to Indian labour laws. PF, ESI, minimum wages, notice period, gratuity, leave rules, salary rights and how to file complaints. Know your rights today!',
        keywords: 'employee rights india, indian labour law, worker rights, pf esi rules, notice period india, minimum wages india 2025',
    },
    '/whats-new': {
        title: 'New Labour Laws 2025-2026 India — What Changed for Employees',
        description: 'All latest Indian labour law updates — Budget 2025 ₹12L tax exemption, PF interest 8.25%, 4 Labour Codes status, gig worker rights, POSH digital updates, maternity rights.',
        keywords: 'new labour laws india 2025 2026, budget 2025 tax exemption, labour code updates india, gig worker rights india, pf interest rate 2025',
    },
    '/pf-esi': {
        title: 'PF & ESI Rules in India 2025 — Eligibility, Contribution & Rights',
        description: 'Complete guide to Provident Fund (PF) and ESI rules in India. Eligibility, contribution rates, UAN, EPFO grievance and your rights as an employee.',
        keywords: 'PF rules india 2025, ESI eligibility, EPF contribution, UAN portal, EPFO grievance, ESI benefits india',
    },
    '/contracts': {
        title: 'Employment Bonds & Contracts in India — Are They Legal?',
        description: 'Understanding employment bonds, service agreements, and training bonds in India. Which bonds are legally enforceable and how to protect yourself.',
        keywords: 'employment bond india, service agreement, bond validity india, training bond legal, employment contract india',
    },
    '/notice-period': {
        title: 'Notice Period Rules in India 2025 — Salary, Buyout & Rights',
        description: 'Complete guide to notice period rules in India. Salary during notice, buyout options, garden leave, and legal requirements for resignation.',
        keywords: 'notice period india, notice period salary, buyout notice period, notice period rules 2025',
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
        keywords: 'employee rights india complete, labour rights india, worker protection, all employment law india',
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
        title: 'Free Employee Rights Calculators India — Salary, Gratuity & More',
        description: 'Free online calculators for Indian employees — salary calculator, gratuity calculator, notice buyout, leave encashment, F&F settlement and income tax.',
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
};

export default function SEOHead({ path, schema }) {
    const data = seoData[path] || seoData['/'];
    const fullUrl = `${BASE_URL}${path}`;

    return (
        <Helmet>
            {/* ── Primary ── */}
            <title>{data.title} | {BRAND}</title>
            <meta name="description" content={data.description} />
            <meta name="keywords" content={data.keywords} />
            <meta name="author" content="RST Technologies" />
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

            {/* ── Schema.org JSON-LD ── */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
