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
    }
};

export default function SEOHead({ path }) {
    const data = seoData[path] || seoData['/'];
    const fullUrl = `https://employee-rights-india.pages.dev${path}`;

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
