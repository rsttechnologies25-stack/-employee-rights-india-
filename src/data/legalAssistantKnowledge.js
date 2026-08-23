/**
 * Unified Knowledge Base for Employee Rights Assistant
 * Single source of truth mapping employee intents to verified legal statutory rules,
 * document verification checklists, next steps, site tools, and official government resources.
 */

export const intentKnowledgeBase = [
    {
        id: 'unpaid_salary',
        keywords: ['salary', 'unpaid', 'delayed', 'not paid', 'wage', 'paycheck', 'holding salary', 'late salary', 'stipend'],
        topic: 'Unpaid or Delayed Salary Recovery',
        law: 'Payment of Wages Act, 1936 — Section 5 & 15',
        jurisdiction: 'State Labour Commissioner / Assistant Labour Commissioner (ALC)',
        shortAnswer: 'Employers in India are required by law to disburse monthly salary by the 7th day (for establishments with under 1,000 employees) or the 10th day of the following month. Withholding salary due to resignation disputes or asset returns is generally unlawful.',
        whatMayApply: [
            'Payment of Wages Act 1936 mandates timely salary payment.',
            'Employers cannot hold earned monthly salary as ransom for notice period buyout or asset clearance disputes.',
            'Section 15 allows filing wage claims before the Labour Authority with potential 10x penalty compensation.'
        ],
        whatYouShouldCheck: [
            'Bank account statements showing credit history',
            'Monthly pay slips and appointment/offer letter',
            'HR emails demanding salary payment',
            'Work attendance logs or email timestamps'
        ],
        possibleNextSteps: [
            'Send a formal written demand email to HR and Management giving a 7-day deadline.',
            'Use our pre-drafted Grievance Generator to create a statute-cited demand letter.',
            'File an online complaint on Shram Suvidha portal or approach your local district Assistant Labour Commissioner (ALC).'
        ],
        relevantTools: [
            { label: 'Take-Home Salary Calculator', path: '/salary-calculator' },
            { label: 'Grievance Complaint Generator', path: '/tools/grievance-generator' },
            { label: 'Authority Finder', path: '/tools/authority-finder' }
        ],
        officialResources: [
            { name: 'Shram Suvidha Central Portal', url: 'https://shramsuvidha.gov.in' },
            { name: 'Ministry of Labour & Employment', url: 'https://labour.gov.in' }
        ]
    },
    {
        id: 'pf_deduction',
        keywords: ['pf', 'provident fund', 'epfo', 'uan', 'passbook', 'pf not deposited', 'epf', 'pf deduction'],
        topic: 'Provident Fund (EPF) Non-Deposit & Passbook Issues',
        law: 'Employees\' Provident Funds and Miscellaneous Provisions Act, 1952 — Section 6 & 14',
        jurisdiction: 'Regional Provident Fund Commissioner (RPFC), EPFO',
        shortAnswer: 'If an employer deducts EPF (12%) from your monthly salary, they are legally required to deposit both employee and employer shares with the EPFO within 15 days of the following month. Deducting PF and failing to deposit it is a criminal offence under IPC 406/409.',
        whatMayApply: [
            'EPF Act applies to all establishments with 20 or more employees.',
            'Deducting PF from salary without depositing it into your UAN account is illegal.',
            'EPFO can initiate Section 7A recovery proceedings and arrest warrants against defaulting employers.'
        ],
        whatYouShouldCheck: [
            'Download monthly passbook from unifiedportal-mem.epfindia.gov.in',
            'Check monthly salary slips showing PF deduction line items',
            'Verify Form 26AS / AIS tax statements for TDS credits'
        ],
        possibleNextSteps: [
            'Register a formal complaint on the official EPFiGMS grievance portal (epfigms.gov.in).',
            'Send a written notice to company Directors pointing out criminal liability under EPF Act Section 14.',
            'File a complaint with the Regional PF Commissioner (RPFC) in your jurisdiction.'
        ],
        relevantTools: [
            { label: 'PF & ESI Rights Guide', path: '/pf-esi' },
            { label: 'Grievance Complaint Generator', path: '/tools/grievance-generator' },
            { label: 'Authority Finder', path: '/tools/authority-finder' }
        ],
        officialResources: [
            { name: 'EPFiGMS EPFO Grievance Portal', url: 'https://epfigms.gov.in' },
            { name: 'EPFO Member Unified Portal', url: 'https://unifiedportal-mem.epfindia.gov.in' }
        ]
    },
    {
        id: 'relieving_letter',
        keywords: ['relieving', 'experience letter', 'service certificate', 'clearance', 'noc', 'withholding letter', 'hr refusing'],
        topic: 'Relieving & Experience Certificate Rights',
        law: 'State Shops & Commercial Establishments Acts (e.g. TN Sec 41, KA Sec 25) & Industrial Disputes Act',
        jurisdiction: 'Inspector of Shops & Establishments / Labour Officer',
        shortAnswer: 'Employers cannot permanently refuse to issue a Relieving Letter or Experience Certificate if you have completed service and served your agreed notice period or agreed buyout. Under State Shops & Establishments Acts, issuing a Service Certificate is a statutory duty.',
        whatMayApply: [
            'Service certificates must be issued detailing designation, tenure, and salary.',
            'Employers cannot withhold exit documents due to arbitrary financial disputes or non-compete clauses.',
            'If notice period was served or waived, relieving letter must be issued upon exit.'
        ],
        whatYouShouldCheck: [
            'Copy of initial resignation email with date timestamp',
            'Resignation acceptance email from HR/Manager',
            'Asset clearance acknowledgment slips',
            'No Dues Certificate (NDC) signature copy'
        ],
        possibleNextSteps: [
            'Send a formal letter to HR referencing your completed handover and requesting clearance within 7 days.',
            'Generate a pre-litigation Legal Demand Notice citing state Shops & Establishments rules.',
            'File a complaint before the Labour Officer / Inspector of Shops in your city.'
        ],
        relevantTools: [
            { label: 'Relieving Letter Guide', path: '/relieving-letter' },
            { label: 'Resignation & Request Templates', path: '/templates' },
            { label: 'Legal Notice Generator', path: '/tools/legal-notice-generator' }
        ],
        officialResources: [
            { name: 'Ministry of Labour & Employment', url: 'https://labour.gov.in' }
        ]
    },
    {
        id: 'termination',
        keywords: ['termination', 'fired', 'retrenchment', 'layoff', 'severance', 'pip', 'forced resignation', 'wrongful dismissal'],
        topic: 'Termination, Layoff & Retrenchment Compensation',
        law: 'Industrial Disputes Act, 1947 — Section 25F & State Shops Acts',
        jurisdiction: 'Labour Commissioner / Industrial Tribunal / Labour Court',
        shortAnswer: 'Under Indian labour law, terminating a confirmed workman without 1 month written notice (or notice pay in lieu) and statutory retrenchment compensation (15 days average pay per year of service) is illegal under Section 25F of the Industrial Disputes Act.',
        whatMayApply: [
            'Section 25F mandates 15 days severance pay for every completed year of service.',
            'Forced resignations obtained under duress can be challenged in Labour Court as wrongful termination.',
            'Domestic inquiry and show-cause notice are mandatory before termination for alleged misconduct.'
        ],
        whatYouShouldCheck: [
            'Termination letter or PIP email trail',
            'Proof of completed years of service',
            'Last drawn basic salary slip',
            'Proof of forced resignation pressure (emails, chats)'
        ],
        possibleNextSteps: [
            'Do not sign a forced resignation letter under coercion; demand written termination reasons.',
            'Calculate your statutory severance pay using our Severance Calculator.',
            'File an conciliation petition for wrongful dismissal before the Assistant Labour Commissioner.'
        ],
        relevantTools: [
            { label: 'Severance Pay Calculator', path: '/tools/severance-calculator' },
            { label: 'Wrongful Termination Guide', path: '/termination/wrongful' },
            { label: 'Authority Finder', path: '/tools/authority-finder' }
        ],
        officialResources: [
            { name: 'SAMADHAN Portal (Central Labour)', url: 'https://samadhan.labour.gov.in' }
        ]
    },
    {
        id: 'gratuity',
        keywords: ['gratuity', '5 years', '4 years 240 days', 'form i', 'gratuity payout', 'gratuity eligibility'],
        topic: 'Gratuity Payout Rights & 5-Year Rule',
        law: 'Payment of Gratuity Act, 1972 — Section 4 & 7',
        jurisdiction: 'Controlling Authority under Payment of Gratuity Act',
        shortAnswer: 'Gratuity is a statutory payout earned after 5 continuous years of service. Under Supreme Court precedents, completing 4 years and 240 days (or 190 days in 5-day week companies) in the 5th year qualifies an employee for full gratuity.',
        whatMayApply: [
            'Formula: (15 × Last Drawn Basic Salary + DA × Service Years) ÷ 26.',
            'Statutory gratuity is capped at ₹20 Lakhs.',
            'Gratuity cannot be forfeited except for proven misconduct causing financial loss to the employer.'
        ],
        whatYouShouldCheck: [
            'Total continuous service dates (D.O.J. and L.W.D.)',
            'Last drawn Basic Salary + Dearness Allowance (DA)',
            'Form I application submission receipt'
        ],
        possibleNextSteps: [
            'Calculate exact gratuity using our Gratuity Eligibility Calculator.',
            'Submit Form I application to your employer within 30 days of exit.',
            'If unpaid within 30 days, submit Form N claim to the statutory Controlling Authority (Labour Commissioner).'
        ],
        relevantTools: [
            { label: 'Gratuity Eligibility Calculator', path: '/tools/gratuity-calculator' },
            { label: 'Gratuity Payout Guide', path: '/gratuity' },
            { label: 'Authority Finder', path: '/tools/authority-finder' }
        ],
        officialResources: [
            { name: 'Ministry of Labour & Employment', url: 'https://labour.gov.in' }
        ]
    },
    {
        id: 'posh_harassment',
        keywords: ['posh', 'harassment', 'sexual harassment', 'icc', 'local committee', 'shebox', 'workplace harassment'],
        topic: 'Workplace Sexual Harassment (POSH Act Rights)',
        law: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
        jurisdiction: 'Internal Complaints Committee (ICC) / District Local Committee (LCC)',
        shortAnswer: 'Under the POSH Act 2013, every workplace with 10+ employees must maintain an Internal Complaints Committee (ICC) headed by a senior woman. Complaints must be inquired within 90 days. If the employer has <10 staff or the complaint is against the employer, approach the District LCC.',
        whatMayApply: [
            'Right to file a written complaint within 3 months of the incident.',
            'Right to request interim relief (90 days paid leave or transfer) during inquiry under Section 12.',
            'Complete confidentiality mandated by law under Section 16.'
        ],
        whatYouShouldCheck: [
            'Written log of incidents with exact dates, times, and locations',
            'Screenshots of electronic chats, messages, or emails',
            'Names of any colleagues who witnessed the incidents'
        ],
        possibleNextSteps: [
            'Submit a confidential written complaint to the Presiding Officer of the ICC.',
            'Use SHe-Box portal if working in central/state government or private sector.',
            'Approach District LCC if company lacks an operational ICC.'
        ],
        relevantTools: [
            { label: 'POSH Act Rights Guide', path: '/posh-act' },
            { label: 'POSH Complaint Builder', path: '/tools/posh-complaint-builder' }
        ],
        officialResources: [
            { name: 'SHe-Box Portal (WCD)', url: 'https://shebox.wcd.gov.in' }
        ]
    }
];

/**
 * Match user query against unified legal knowledge base
 */
export function matchUserQuery(query) {
    if (!query || typeof query !== 'string') return null;
    const lowerQuery = query.toLowerCase().trim();

    for (const item of intentKnowledgeBase) {
        if (item.keywords.some(kw => lowerQuery.includes(kw))) {
            return item;
        }
    }

    return null;
}
