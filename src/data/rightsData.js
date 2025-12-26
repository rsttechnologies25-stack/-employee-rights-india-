import { Banknote, Clock, Award, Baby, HardHat, Plane, Stethoscope, Scale, Users, Ban, FileCheck } from 'lucide-react';

export const rightsCategories = [
    {
        id: 'wages',
        title: '💰 Wages & Salary',
        icon: Banknote,
        summary: 'Your salary is protected by law; delayed or withheld payment is illegal.',
        entitlements: [
            'Salary must be paid by the 7th or 10th of the following month (depending on company size).',
            'All deductions must be clearly itemized on the salary slip.',
            'Overtime must be paid at 2× the normal rate for hours beyond 48/week.',
            'No unauthorized deductions from wages (except for PF, ESI, Tax).'
        ],
        prohibitions: [
            '🚫 Withholding salary as punishment or leverage.',
            '🚫 Paying less than the state-notified Minimum Wage.',
            '🚫 Deducting employer\'s PF share from employee salary.'
        ],
        whyItMatters: 'Timely and fair wages are fundamental to worker dignity and financial stability.'
    },
    {
        id: 'bonus',
        title: '🎁 Statutory Bonus',
        icon: Award,
        summary: 'You may be entitled to an annual bonus of 8.33% to 20% of your salary.',
        entitlements: [
            'Applicable to employees earning up to ₹21,000/month in establishments with 20+ workers.',
            'Minimum bonus is 8.33% of salary; maximum is 20%.',
            'Bonus must be paid within 8 months of the close of the accounting year.',
            'Applies after 30 days of continuous service in the year.'
        ],
        prohibitions: [
            '🚫 Employer cannot deny bonus if legally applicable.',
            '🚫 Bonus cannot be adjusted against other dues without consent.'
        ],
        whyItMatters: 'Bonuses reward your contribution to the company\'s success and are a legal right, not a favor.'
    },
    {
        id: 'gratuity',
        title: '🏆 Gratuity',
        icon: Award,
        summary: 'After 5 years of service, you are entitled to a lump-sum gratuity payment.',
        entitlements: [
            'Payable after 5 years of continuous service (4 years 240 days may qualify in some cases).',
            'Calculation: (15 × Last Drawn Salary × Years of Service) / 26.',
            'Must be paid within 30 days of it becoming payable.',
            'Maximum limit is ₹20 lakhs (as of recent amendments).'
        ],
        prohibitions: [
            '🚫 Gratuity cannot be forfeited for resignation.',
            '🚫 Employer cannot delay payment beyond 30 days without penalty.'
        ],
        whyItMatters: 'Gratuity is your reward for long-term loyalty and service to an organization.'
    },
    {
        id: 'maternity',
        title: '🤰 Maternity Benefits',
        icon: Baby,
        summary: 'Pregnant employees are entitled to 26 weeks of paid leave and job protection.',
        entitlements: [
            '26 weeks of paid maternity leave for first two children (12 weeks for third child onwards).',
            'Leave can start up to 8 weeks before the expected delivery date.',
            'Entitled to full average daily wage during leave period.',
            'Employer cannot terminate or reduce conditions during pregnancy.'
        ],
        prohibitions: [
            '🚫 Dismissing or discriminating against a pregnant employee.',
            '🚫 Assigning strenuous work during pregnancy or immediately after.',
            '🚫 Denying maternity leave to eligible employees.'
        ],
        whyItMatters: 'Maternity protection ensures women can work and raise families without facing job loss.'
    },
    {
        id: 'contract-labour',
        title: '👷 Contract Labour Rights',
        icon: HardHat,
        summary: 'Contract workers have the same basic protections as regular employees.',
        entitlements: [
            'Entitled to minimum wages, working hour limits, and safety provisions.',
            'Principal employer is responsible if contractor fails to pay wages.',
            'Must receive wages on time, directly if contractor defaults.',
            'Entitled to basic amenities: drinking water, restrooms, first-aid.'
        ],
        prohibitions: [
            '🚫 Using contract labour in core/perennial activities to avoid regularization.',
            '🚫 Denying minimum wages or safety to contract workers.',
            '🚫 Contractor fleeing without paying dues (principal employer liable).'
        ],
        whyItMatters: 'Contract workers are not second-class citizens; they deserve the same protections.'
    },
    {
        id: 'migrant-workers',
        title: '✈️ Migrant Worker Rights',
        icon: Plane,
        summary: 'Inter-state migrant workers have special protections under Indian law.',
        entitlements: [
            'Entitled to displacement allowance and journey allowance.',
            'Wages cannot be less than what is paid in the state of origin.',
            'Employer must provide suitable accommodation.',
            'Entitled to medical facilities and protective equipment.'
        ],
        prohibitions: [
            '🚫 Paying migrant workers less than local minimum wage.',
            '🚫 Withholding travel allowances or accommodation.',
            '🚫 Traffickers or agents charging illegal fees.'
        ],
        whyItMatters: 'Migrant workers are the backbone of many industries and deserve fair treatment far from home.'
    },
    {
        id: 'employee-compensation',
        title: '🏥 Employee Compensation (Workmen)',
        icon: Stethoscope,
        summary: 'If injured at work, you are entitled to compensation—even for accidents.',
        entitlements: [
            'Compensation for injury, disability, or death arising out of and in the course of employment.',
            'Covers occupational diseases listed in the Act.',
            'Dependents receive compensation in case of death.',
            'Employer must pay half-monthly installments for temporary disablement.'
        ],
        prohibitions: [
            '🚫 Employer cannot deny claim for workplace injuries.',
            '🚫 Cannot force employee to sign waiver of compensation rights.',
            '🚫 Delays in compensation payments beyond prescribed limits.'
        ],
        whyItMatters: 'Workplace safety is paramount; if you\'re injured on the job, the law protects you.'
    },
    {
        id: 'minimum-wages',
        title: '📊 Minimum Wages',
        icon: Scale,
        summary: 'Every state notifies minimum wages; no employer can pay less.',
        entitlements: [
            'Minimum wage is set by the state government and varies by industry/skill level.',
            'Wages include basic + DA (Dearness Allowance).',
            'Revised periodically to account for cost of living.',
            'Applies to all scheduled employments (listed industries/jobs).'
        ],
        prohibitions: [
            '🚫 Paying below the notified minimum wage is a criminal offense.',
            '🚫 Splitting wage components to show "Basic" below minimum.',
            '🚫 Verbal agreements to pay less than minimum wage are void.'
        ],
        whyItMatters: 'Minimum wages ensure a basic standard of living for all workers.'
    },
    {
        id: 'equal-pay',
        title: '⚖️ Equal Pay for Equal Work',
        icon: Users,
        summary: 'Men and women must receive equal pay for the same or similar work.',
        entitlements: [
            'No discrimination in wages based on gender.',
            'Equal conditions of service for same or similar work.',
            'Applies to recruitment, promotions, and transfers as well.'
        ],
        prohibitions: [
            '🚫 Paying women less than men for the same job.',
            '🚫 Denying promotions or benefits based on gender.',
            '🚫 Discriminatory job advertisements.'
        ],
        whyItMatters: 'Gender should never determine your paycheck—equal work deserves equal pay.'
    },
    {
        id: 'child-labour',
        title: '🛑 Child Labour Prohibition',
        icon: Ban,
        summary: 'Children below 14 cannot be employed; adolescents (14-18) have restrictions.',
        entitlements: [
            'Complete prohibition of employment of children below 14 in any occupation.',
            'Adolescents (14-18) cannot work in hazardous processes/occupations.',
            'Right to education and protection from exploitation.',
            'Rescued child workers must be rehabilitated.'
        ],
        prohibitions: [
            '🚫 Employing children in any form of labor.',
            '🚫 Employing adolescents in mines, factories with hazardous processes.',
            '🚫 Denying education to child workers.'
        ],
        whyItMatters: 'Children belong in schools, not workplaces. Their future depends on our vigilance.'
    },
    {
        id: 'exit-benefits',
        title: '🚪 Final Settlement & Exit',
        icon: FileCheck,
        summary: 'Upon resignation or termination, you are entitled to full and final settlement.',
        entitlements: [
            'F&F includes: unpaid salary, earned leave encashment, bonus (if applicable), gratuity (if eligible).',
            'Settlement should ideally be completed within 2 working days of last day (under new Labour Codes).',
            'Experience letter and relieving letter are your legal right.',
            'PF accumulations can be transferred or withdrawn after exit.'
        ],
        prohibitions: [
            '🚫 Withholding relieving letter for disputes or short notice.',
            '🚫 Blocking PF for unserved notice or training bonds.',
            '🚫 Deducting arbitrary "damages" from F&F without proof.',
            '🚫 Asking for money to release PF or experience letters.'
        ],
        whyItMatters: 'A clean exit is your right. No employer should hold your career hostage.'
    }
];
