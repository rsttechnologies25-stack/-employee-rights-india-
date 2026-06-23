import { Helmet } from 'react-helmet-async';

const seoData = {
    '/': {
        title: 'Employee Rights India - Know Your Labour Law Rights',
        description: 'Free guide to Indian labour laws for employees. Learn about PF, ESI, notice period, working hours, leave rules, employment bonds, and illegal practices.',
        keywords: 'employee rights india, indian labour law, worker rights, employee protection'
    },
    '/pf-esi': {
        title: 'PF & ESI Rules in India - Employee Rights Guide',
        description: 'Complete guide to Provident Fund (PF) and Employee State Insurance (ESI) rules in India. Learn eligibility, contribution rates, and your rights.',
        keywords: 'PF rules india, ESI eligibility, provident fund employee, EPF contribution, ESI benefits'
    },
    '/contracts': {
        title: 'Employment Bonds & Contracts in India - Know Your Rights',
        description: 'Understanding employment bonds, service agreements, and contract terms in India. Learn which bonds are legally enforceable and your rights.',
        keywords: 'employment bond india, service agreement, job contract, bond validity, training bond'
    },
    '/notice-period': {
        title: 'Notice Period Rules in India - Employee Rights',
        description: 'Complete guide to notice period rules in India. Learn about salary during notice, buyout options, and legal requirements for resignation.',
        keywords: 'notice period india, resignation rules, notice period salary, buyout notice period'
    },
    '/working-hours': {
        title: 'Working Hours & Overtime Rules in India - Labour Law',
        description: 'Know the legal working hours in India. Learn about overtime pay (2x wages), maximum weekly hours, and your right to rest.',
        keywords: 'working hours india, overtime pay, labour law working hours, maximum working hours'
    },
    '/leave-holidays': {
        title: 'Leave & Holiday Rules in India - Employee Entitlements',
        description: 'Complete guide to leave entitlements in India. Casual leave, sick leave, earned leave, festival holidays, and weekly off rights.',
        keywords: 'leave rules india, casual leave, sick leave, earned leave, holiday laws, weekly off'
    },
    '/illegal-practices': {
        title: 'Illegal Employer Practices in India - Report Violations',
        description: 'Know what employer practices are illegal in India. Job scams, money demands, unpaid overtime, and how to report violations.',
        keywords: 'illegal employer practices, job scam india, labour law violation, employee exploitation'
    },
    '/rights': {
        title: 'All Employee Rights in India - Complete Guide',
        description: 'Comprehensive index of all employee rights under Indian labour law. Browse by category and understand your legal protections.',
        keywords: 'employee rights, labour rights india, worker protection, employment law'
    },
    '/termination/probation': {
        title: 'Termination During Probation - Employee Rights India',
        description: 'Can an employer terminate during probation? Notice period rules, illegal termination scenarios, and your rights during probation in India.',
        keywords: 'termination during probation india, probation notice period, illegal termination probation'
    },
    '/termination/after-confirmation': {
        title: 'Termination After Confirmation - Notice Period & Compensation Rights',
        description: 'Rights of confirmed employees when terminated. Notice period, show cause notice, domestic enquiry, retrenchment, and compensation under Indian law.',
        keywords: 'termination after confirmation, retrenchment india, domestic enquiry, show cause notice'
    },
    '/termination/wrongful': {
        title: 'Wrongful Termination in India - Illegal Dismissal & Remedies',
        description: 'Examples of illegal termination in India, employee remedies, and how to file a labour complaint for wrongful dismissal.',
        keywords: 'wrongful termination india, illegal dismissal, labour complaint, reinstatement'
    },
    '/full-final-settlement': {
        title: 'Full & Final Settlement (F&F) in India - Complete Guide',
        description: 'Guide to Full & Final settlement in India — salary dues, gratuity, leave encashment, notice pay, and what your employer cannot withhold.',
        keywords: 'full final settlement india, FF settlement, gratuity, leave encashment, exit dues'
    },
    '/exit-process': {
        title: 'Exit Process & Documents to Collect When Leaving a Company',
        description: 'Complete exit process guide — documents to collect, exit interview tips, and HR checklist when leaving a job in India.',
        keywords: 'exit process india, documents to collect, relieving letter, experience letter, exit interview'
    },
    '/experience-letter': {
        title: 'Experience Letter Rights in India - Can Employer Refuse?',
        description: 'Is your employer legally required to give an experience letter? What to do if denied and what the letter must contain under Indian law.',
        keywords: 'experience letter india, employer refuses experience letter, service certificate'
    },
    '/relieving-letter': {
        title: 'Relieving Letter Rights India - Employer Obligations & Disputes',
        description: 'Your right to a relieving letter, employer obligations, common disputes, and what to do if your employer withholds it in India.',
        keywords: 'relieving letter india, employer refuses relieving letter, relieving letter dispute'
    },
    '/service-certificate': {
        title: 'Service Certificate - State Labour Law Requirements India',
        description: 'Which states mandate service certificates? How it differs from an experience letter and employee remedies when denied.',
        keywords: 'service certificate india, shops establishments act, experience certificate'
    },
    '/salary-calculation': {
        title: 'Salary Calculation Methods in India - ÷26 vs ÷30 vs ÷31',
        description: 'How is salary calculated in India? Compare ÷26, ÷30, ÷31, and working-day methods with live examples and LOP rules.',
        keywords: 'salary calculation india, LOP calculation, per day salary, salary proration'
    },
    '/pay-cycle': {
        title: 'Pay Cycle & Salary Date Rules in India - Payment of Wages Act',
        description: 'When must your employer pay salary? 7th and 10th deadline rules under the Payment of Wages Act and what to do if salary is delayed.',
        keywords: 'pay cycle india, salary date, payment of wages act, salary delay india'
    },
    '/delayed-salary': {
        title: 'Salary Not Paid in India - Recovery Options & Labour Complaint',
        description: 'What to do when your employer does not pay salary. Step-by-step recovery options including Labour Commissioner complaint and legal notice.',
        keywords: 'salary not paid india, delayed salary, salary recovery, labour complaint salary'
    },
    '/gratuity': {
        title: 'Gratuity Rights India - Eligibility, Calculation & Claim',
        description: 'Gratuity eligibility, formula (15/26 × salary × years), 4-year 240-day rule, forfeiture rules and complaint process under Indian law.',
        keywords: 'gratuity india, gratuity calculation, gratuity eligibility, payment of gratuity act'
    },
    '/tools': {
        title: 'Employee Rights Calculators - Salary, Gratuity, F&F & More',
        description: 'Free online calculators for Indian employees — salary, gratuity, notice period buyout, leave encashment, and full & final settlement.',
        keywords: 'salary calculator india, gratuity calculator, FF settlement calculator, employee tools'
    },
    '/templates': {
        title: 'Employee Letter Templates India - Resignation, Complaint & Legal',
        description: 'Ready-to-use letter templates for Indian employees — resignation, experience letter request, salary complaint, gratuity claim, and more.',
        keywords: 'employee letter templates india, resignation letter, labour complaint letter, gratuity claim'
    },
    '/faq': {
        title: 'Employee Rights FAQ India - 180+ Questions Answered',
        description: '180+ answered questions on termination, salary, gratuity, F&F settlement, notice period, experience letters, and more under Indian labour law.',
        keywords: 'employee rights faq india, labour law questions, salary rights, termination faq'
    },
    '/tools/ff-calculator': {
        title: 'F&F Settlement Calculator India - Estimate Your Exit Dues',
        description: 'Estimate your Full & Final settlement — salary, leave encashment, gratuity, bonus, and notice pay recovery in one calculator.',
        keywords: 'ff calculator india, full final settlement calculator, exit dues calculator'
    },
    '/tools/notice-buyout-calculator': {
        title: 'Notice Period Buyout Calculator - How Much to Pay?',
        description: 'Calculate the amount you need to pay to exit before your notice period ends. Based on your salary and remaining notice days.',
        keywords: 'notice period buyout, notice period pay calculator, notice waiver amount'
    },
    '/tools/leave-encashment-calculator': {
        title: 'Leave Encashment Calculator India - Calculate Your Leave Pay',
        description: 'Estimate your earned leave encashment at exit using ÷30 or ÷26 method with tax exemption guidance.',
        keywords: 'leave encashment calculator, earned leave encashment india, leave encashment tax'
    },
    '/tools/salary-proration-calculator': {
        title: 'Salary Proration Calculator - Compare ÷26 ÷30 ÷31 Methods',
        description: 'Compare all 4 salary calculation methods side-by-side — ÷26, ÷30, ÷31, and working-day method with your actual numbers.',
        keywords: 'salary proration calculator, salary calculation method, per day salary calculator india'
    },
    '/tools/income-tax-calculator': {
        title: 'Income Tax Calculator India - Old vs New Regime Comparison',
        description: 'Compare the Old and New tax regimes for salaried employees to find out which saves you more money.',
        keywords: 'income tax calculator india, old vs new tax regime, salary tax calculator'
    },
    '/maternity-rights': {
        title: 'Maternity Leave Rights India - 26 Weeks Leave Rules',
        description: 'Understand your rights to 26 weeks of paid maternity leave, protection against termination, and crèche facilities in India.',
        keywords: 'maternity leave india, maternity benefit act, termination during pregnancy'
    },
    '/posh-act': {
        title: 'POSH Act Rules - Protection Against Sexual Harassment',
        description: 'Learn what constitutes sexual harassment at the workplace and how to file a complaint with the Internal Complaints Committee (ICC).',
        keywords: 'posh act india, sexual harassment workplace, icc posh complaint'
    },
    '/pip-guide': {
        title: 'PIP Rules India - Performance Improvement Plan Rights',
        description: 'Are you on a PIP? Learn your legal rights, how to respond to an unfair appraisal, and if you get severance pay upon termination.',
        keywords: 'pip notice india, performance improvement plan rights, fired after pip'
    },
    '/forced-resignation': {
        title: 'Forced Resignation & Constructive Dismissal India',
        description: 'Is your HR pressuring you to resign? Learn why forced resignation is illegal (constructive dismissal) and how to protect yourself.',
        keywords: 'forced resignation legal india, constructive dismissal, hr forcing to resign'
    },
    '/moonlighting': {
        title: 'Moonlighting Laws India - Dual Employment Risks',
        description: 'Is moonlighting illegal in India? Learn about exclusive employment clauses and how employers track dual employment via UAN.',
        keywords: 'moonlighting in india, dual employment legal, uan moonlighting tracking'
    },
    '/data-privacy': {
        title: 'Data Privacy at Work - Can Employers Track You?',
        description: 'Can your employer legally monitor your laptop, read your emails, or track your physical location? Know your digital rights.',
        keywords: 'employee monitoring laws india, data privacy workplace, tracking company laptop'
    },
    '/form-16-rights': {
        title: 'Form 16 & TDS Rights - What if Tax is Deducted but Not Paid?',
        description: 'Understand your employer\'s legal obligation to issue Form 16 and what to do if TDS is deducted but not deposited with the government.',
        keywords: 'form 16 rights, tds deducted but not deposited, filing itr without form 16'
    }
};

export default function SEOHead({ path }) {
    const data = seoData[path] || seoData['/'];
    const fullUrl = `https://employee-rights.rexonsofttech.in${path}`;

    return (
        <Helmet>
            <title>{data.title} | RST Technologies</title>
            <meta name="description" content={data.description} />
            <meta name="keywords" content={data.keywords} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:url" content={fullUrl} />

            {/* Twitter */}
            <meta name="twitter:title" content={data.title} />
            <meta name="twitter:description" content={data.description} />
            <meta name="twitter:url" content={fullUrl} />
        </Helmet>
    );
}
