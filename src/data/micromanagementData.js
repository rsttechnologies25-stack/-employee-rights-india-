/**
 * Micromanagement & Excessive Workplace Control Master Data
 * RexonSoftTech Employee Rights Portal
 * Last Verified: September 2026
 */

export const LAST_VERIFIED_DATE = "September 2026";

// 1. Management Spectrum Definitions (10 Categories)
export const managementSpectrum = [
    {
        id: 'normal',
        title: 'Normal Management',
        badge: 'Standard & Healthy',
        color: 'emerald',
        definition: 'Managers set goals, assign tasks, provide clear deadlines, and evaluate results while allowing employees reasonable autonomy to decide how to execute their daily responsibilities.',
        keyIndicators: [
            'Clear objectives and expectations set in advance',
            'Focus on outcomes rather than minute step-by-step methods',
            'Regular periodic check-ins (e.g. weekly 1-on-1s or sprint standups)',
            'Trust in employee expertise and decision-making'
        ],
        legalStatus: 'Fully lawful and standard workplace practice.'
    },
    {
        id: 'close_supervision',
        title: 'Close Supervision',
        badge: 'Legitimate Need',
        color: 'blue',
        definition: 'Temporary heightened oversight applied during critical project phases, tight deadlines, or high-risk deliverables where mistakes carry heavy financial or operational impact.',
        keyIndicators: [
            'Time-bound oversight tied to specific project milestones',
            'Reasonable explanation provided by management for increased updates',
            'Focus on risk mitigation and quality assurance',
            'Oversight scales back once milestone or deadline is completed'
        ],
        legalStatus: 'Lawful managerial discretion.'
    },
    {
        id: 'training',
        title: 'Training & Onboarding Support',
        badge: 'Developmental',
        color: 'cyan',
        definition: 'Intensive guidance provided to new hires, trainees, interns, or employees operating new software or processes to build competence and prevent initial errors.',
        keyIndicators: [
            'Step-by-step walkthroughs and constructive review of drafts',
            'Frequent constructive feedback with clear learning objectives',
            'Gradual reduction of supervision as employee proficiency grows',
            'Focus on skill building rather than fault-finding'
        ],
        legalStatus: 'Lawful and recommended employee development practice.'
    },
    {
        id: 'performance_mgmt',
        title: 'Performance Management / PIP',
        badge: 'Formal Review',
        color: 'indigo',
        definition: 'Structured monitoring governed by formal HR policies (e.g. Performance Improvement Plan) applied when an employee fails to meet documented KPIs.',
        keyIndicators: [
            'Written notification detailing specific performance gaps',
            'Measurable targets and clear review timeline (e.g. 30-90 days)',
            'Documented check-ins with HR involvement',
            'Clear criteria for PIP exit or termination consequences'
        ],
        legalStatus: 'Lawful if conducted in good faith according to company policy and employment contract.'
    },
    {
        id: 'monitoring',
        title: 'Reasonable Workplace Monitoring',
        badge: 'Operational Security',
        color: 'violet',
        definition: 'Automated or standard logging of company asset usage (email security filters, shift attendance punches, network firewalls) to protect company data.',
        keyIndicators: [
            'Transparent written IT and security policy disclosed in advance',
            'Applies across all employees using company-issued devices',
            'Occurs exclusively during official shift hours',
            'Focuses on cybersecurity, compliance, and asset protection'
        ],
        legalStatus: 'Lawful on company-owned assets when governed by prior written disclosure.'
    },
    {
        id: 'micromanagement',
        title: 'Micromanagement',
        badge: 'Excessive Control',
        color: 'amber',
        definition: 'Continuous, unnecessary, and intrusive control over minor decisions, methods, communications, or trivial activities that deprives experienced employees of autonomy.',
        keyIndicators: [
            'Requirement for manager approval on trivial emails or minor code changes',
            'Constant status updates demanded every 15-30 minutes',
            'Repeated over-riding of employee decisions without objective justification',
            'Reluctance to delegate responsibilities or trust experienced staff'
        ],
        legalStatus: 'Generally NOT an automatic legal violation by itself, but damages productivity and morale. May cross into legal issues if accompanied by wage/hour violations, discrimination, or harassment.'
    },
    {
        id: 'harassment',
        title: 'Workplace Harassment & Bullying',
        badge: 'Workplace Misconduct',
        color: 'orange',
        definition: 'Persistent, hostile, abusive, or humiliating behaviour directed at an employee that creates a intimidating or toxic work environment.',
        keyIndicators: [
            'Public shouting, insults, or demeaning personal comments',
            'Unreasonable workloads assigned with intent to cause failure',
            'Setting impossible deadlines followed by public reprimands',
            'Isolation, exclusion from meetings, or spreading malicious rumors'
        ],
        legalStatus: 'Violates internal company conduct codes, HR ethics, and standing orders. Actionable under internal grievance frameworks and civil tort laws.'
    },
    {
        id: 'discrimination',
        title: 'Illegal Discrimination',
        badge: 'Potential Law Violation',
        color: 'rose',
        definition: 'Adverse treatment, unequal scrutiny, or excessive control targeting an employee based on protected characteristics such as gender, religion, caste, age, disability, or pregnancy.',
        keyIndicators: [
            'Singling out specific individuals while peers are given autonomy',
            'Discriminatory comments or biased performance ratings',
            'Denial of promotions, bonuses, or leaves based on personal identity',
            'Maternity/pregnancy penalty or bias against protected groups'
        ],
        legalStatus: 'UNLAWFUL under constitutional provisions (Article 14/15/21 in India), Maternity Benefit Act, POSH Act, Rights of Persons with Disabilities Act, and international labor standards.'
    },
    {
        id: 'retaliation',
        title: 'Unlawful Retaliation',
        badge: 'Illegal Conduct',
        color: 'red',
        definition: 'Adverse actions taken by a manager against an employee because the employee exercised a protected legal right or reported workplace wrongdoing.',
        keyIndicators: [
            'Sudden micromanagement or PIP placement after raising a salary delay complaint',
            'Punitive shift transfers or demotion after filing a POSH / HR grievance',
            'Threatening bad background checks (BGV) after employee resigns',
            'Withholding relieving letters or salary as punishment'
        ],
        legalStatus: 'UNLAWFUL. Protection against victimization exists under Labour Codes, POSH Act Section 12, Industrial Disputes Act, and whistleblowing frameworks.'
    },
    {
        id: 'unlawful_conduct',
        title: 'Potentially Unlawful Statutory Violations',
        badge: 'Severe Violation',
        color: 'purple',
        definition: 'Management demands that directly break statutory labor statutes, wage laws, working hour limits, or data privacy acts.',
        keyIndicators: [
            'Forced unpaid weekend meetings without 2x Overtime pay or Comp-Off',
            'Unannounced keylogging or webcam streaming on personal devices (BYOD)',
            'Denial of statutory mandatory 24-hour weekly rest',
            'Forced resignations obtained under physical or psychological duress'
        ],
        legalStatus: 'ILLEGAL. Directly actionable before Labour Commissioners, EPFO, Data Protection Authorities, or Labour Courts.'
    }
];

// 2. Real-World Scenario Library (13 Industries)
export const scenarioLibrary = [
    {
        id: 'it_software',
        sector: 'IT & Software Development',
        icon: 'Code',
        situation: 'A senior developer with 6 years of experience is required to send Slack updates every 30 minutes, get manager approval for every minor variable rename or git commit, and attend mandatory 8 PM status calls every evening.',
        managerBehaviour: 'Constant micro-tracking, overriding technical decisions without review, demanding instant replies on personal WhatsApp after shift hours.',
        employeeResponse: 'Complied initially out of fear, but velocity dropped by 40% and stress caused severe burnout.',
        whyMicromanagement: 'The developer has proven competence. Requiring approvals for trivial code commits and 30-minute logs indicates unnecessary control over methods rather than outcomes.',
        whenSerious: 'If the manager threatens bad BGV ratings, withhold salary for missing an 8 PM call, or mandates unpaid Sunday work without Comp-Off.',
        possibleAction: 'Log timestamps of late-night messages, review company WFH/overtime policies, and request a structured weekly alignment meeting instead of 30-minute pings.'
    },
    {
        id: 'restaurant_hotel',
        sector: 'Hospitality & Restaurant',
        icon: 'Utensils',
        situation: 'A head chef with 5 years experience is instructed by the hotel manager on exact sequence of vegetable chopping, monitored via kitchen CCTV during every minute of the shift, and publicly berated in front of kitchen staff for minor plating variations.',
        managerBehaviour: 'Invasive CCTV micromanagement, public humiliation, changing established recipes mid-service.',
        employeeResponse: 'Chef felt humiliated and kitchen service slowed down drastically.',
        whyMicromanagement: 'Over-controlling skilled culinary execution and monitoring camera feeds to nitpick techniques rather than food quality and timing.',
        whenSerious: 'Public berating crosses into verbal harassment; deducting wages for minor ingredient wastage without notice violates Payment of Wages Act.',
        possibleAction: 'Document instances of public reprimands, request a private meeting with the General Manager, and review kitchen health & safety guidelines.'
    },
    {
        id: 'retail_shop',
        sector: 'Retail & Commercial Store',
        icon: 'ShoppingBag',
        situation: 'A store sales associate is required to log every bathroom break duration to the exact second on a clipboard, stand continuously without seating during 10-hour shifts, and receive manager calls during off-days demanding customer follow-ups.',
        managerBehaviour: 'Restricting basic bodily needs, enforcing illegal continuous standing, contacting associate on mandatory weekly rest days.',
        employeeResponse: 'Associate developed foot injury and severe exhaustion.',
        whyMicromanagement: 'Tracking bathroom minutes and off-day calls reflects excessive personal control and lack of boundaries.',
        whenSerious: 'Denying seating rights violates State Shops & Establishments mandatory seating provisions (e.g. TN Right to Sit Act); unpaid off-day calls violate Section 52 weekly off rules.',
        possibleAction: 'Note down break logs and shift schedules, raise grievance with HR citing Shops & Establishments seating & rest rules, and contact Labour Inspector if health is compromised.'
    },
    {
        id: 'factory_manufacturing',
        sector: 'Factory & Manufacturing',
        icon: 'Factory',
        situation: 'A machine operator with 10 years experience is forced to follow a newly introduced, unsafe manual speed protocol dictated by a supervisor who stands behind them for 8 hours taking notes on every arm movement.',
        managerBehaviour: 'Physical hovering, enforcing protocols that bypass safety interlocks to meet arbitrary quotas.',
        employeeResponse: 'Operator voiced safety concerns but was threatened with a show-cause notice.',
        whyMicromanagement: 'Hovering and dictating precise physical motions ignores worker expertise and operational reality.',
        whenSerious: 'Bypassing machine safety interlocks directly violates Section 21 of the Factories Act 1948 (Fencing of Machinery) and poses immediate threat to life.',
        possibleAction: 'Refuse dangerous unsafe work, immediately file a written safety objection to the Factory Manager and Inspector of Factories.'
    },
    {
        id: 'construction',
        sector: 'Construction & Civil Works',
        icon: 'HardHat',
        situation: 'A site engineer is required to send site photos every 15 minutes, re-explain concrete mixing ratios every morning despite holding a civil engineering degree, and work 14 hours daily without overtime pay.',
        managerBehaviour: 'Repetitive questioning of basic engineering standards, demanding constant photo proof, withholding overtime compensation.',
        employeeResponse: 'Engineer struggled to manage site safety due to constant phone reporting.',
        whyMicromanagement: 'Demanding 15-minute photo updates distracts from site safety oversight and demonstrates zero trust in professional qualifications.',
        whenSerious: 'Working 14 hours daily without 2x Overtime pay violates Building & Other Construction Workers (BOCW) Act & Factories Act hour limits.',
        possibleAction: 'Maintain an daily site logbook of hours worked, request weekly milestone reviews, and demand statutory overtime compensation in writing.'
    },
    {
        id: 'office_admin',
        sector: 'Office & Administration',
        icon: 'Briefcase',
        situation: 'An executive assistant is required to CC the manager on every internal email, get pre-approval for routine stationery orders under ₹500, and submit daily end-of-day reports listing every phone call made.',
        managerBehaviour: 'Email CC enforcement, micro-budget approvals, tedious daily call logs.',
        employeeResponse: 'Admin staff spent 2 hours daily writing reports instead of completing core tasks.',
        whyMicromanagement: 'Requiring CCs on routine internal messages and micro-approvals creates administrative bottlenecks.',
        whenSerious: 'If the manager uses log reviews to selectively target the assistant while ignoring peer logs, it may indicate targeted harassment or singling out.',
        possibleAction: 'Propose a weekly consolidated summary report and request clear financial approval thresholds (e.g. auto-approve orders under ₹2,000).'
    },
    {
        id: 'sales',
        sector: 'Field & Corporate Sales',
        icon: 'TrendingUp',
        situation: 'A sales executive meeting quarterly targets is required to share continuous live GPS location tracking on WhatsApp from 8 AM to 9 PM, log every client conversation word-for-word, and face daily 7 AM interrogation calls.',
        managerBehaviour: '24/7 GPS tracking on personal phone, aggressive morning interrogation calls, unreasonable reporting burdens.',
        employeeResponse: 'Executive felt constantly spied upon and client relationship quality suffered.',
        whyMicromanagement: 'Tracking live location beyond work hours and demanding word-for-word logs ignores overall sales performance achievements.',
        whenSerious: 'Mandating GPS tracking on personal phones during non-work hours violates Article 21 Privacy Rights and DPDP Act 2023.',
        possibleAction: 'Turn off location tracking outside shift hours, request company-provided device if tracking is mandatory, and log off-hour calls for HR feedback.'
    },
    {
        id: 'healthcare',
        sector: 'Healthcare & Nursing',
        icon: 'Stethoscope',
        situation: 'A staff nurse is constantly interrupted during patient medication distribution by a supervisor demanding immediate verbal updates on bed sheets, causing distraction during high-risk dosage calculations.',
        managerBehaviour: 'Inopportune interruptions during critical clinical care, prioritizing trivial cosmetic tasks over patient safety.',
        employeeResponse: 'Nurse expressed concern over potential medication error risks.',
        whyMicromanagement: 'Interrupting medical tasks for non-critical admin checks compromises clinical safety standards.',
        whenSerious: 'Creating distractions during drug administration risks patient safety and violates clinical protocol regulations.',
        possibleAction: 'Formally document the incident in the hospital incident management system, citing patient safety protocols and nursing guidelines.'
    },
    {
        id: 'education',
        sector: 'Education & Teaching',
        icon: 'GraduationCap',
        situation: 'A high school teacher with 12 years of tenure is forced to submit daily line-by-line script plans for every 45-minute lecture, submit to random unannounced classroom video recordings, and obtain principal sign-off on board drawings.',
        managerBehaviour: 'Requiring rigid script compliance, intrusive classroom recording without academic justification.',
        employeeResponse: 'Teacher felt demoralized and teaching spontaneity was destroyed.',
        whyMicromanagement: 'Dictating word-for-word lesson scripts strips qualified educators of pedagogical autonomy.',
        whenSerious: 'If recordings are shared publicly or used to unfairly alter employment terms without consent.',
        possibleAction: 'Raise the issue through the teachers\' association or staff committee, proposing monthly syllabus benchmarks instead of daily script approvals.'
    },
    {
        id: 'remote_work',
        sector: 'Remote & Distributed Teams',
        icon: 'Laptop',
        situation: 'A remote graphic designer is required to keep their webcam continuously ON during 9-hour shifts, install screen auto-capture software that takes screenshots every 3 minutes, and log off-screen bathroom breaks.',
        managerBehaviour: 'Continuous webcam monitoring, 3-minute screen captures, bathroom break logging.',
        employeeResponse: 'Designer felt severe anxiety and invasion of personal home space.',
        whyMicromanagement: 'Continuous webcam streaming inside home environments is an intrusive surveillance mechanism that treats remote workers with suspicion.',
        whenSerious: 'Webcam streaming of private home premises violates Article 21 Right to Privacy and DPDP Act 2023 data minimization mandates.',
        possibleAction: 'Politely inform management that continuous video violates home privacy, disable webcam outside video meetings, and reference company data privacy policies.'
    },
    {
        id: 'work_from_home',
        sector: 'Hybrid / WFH Environment',
        icon: 'Home',
        situation: 'An analyst working from home is called on personal mobile at 9:30 PM, 10:15 PM, and 6:45 AM by a manager demanding immediate data tweaks, threatening to mark them "absent" for the day if not answered within 10 minutes.',
        managerBehaviour: 'Off-hours calling, setting unrealistic 10-minute response windows outside shift hours, threatening attendance tampering.',
        employeeResponse: 'Analyst suffered sleep deprivation and constant dread.',
        whyMicromanagement: 'Blurring work-life boundaries and expecting instant off-hour responses displays excessive control over employee personal time.',
        whenSerious: 'Threatening to mark an employee "absent" for work already performed on shift constitutes illegal wage deduction and attendance record falsification.',
        possibleAction: 'Keep screenshots of call logs and attendance records, send an email clarifying official shift hours, and escalate attendance threats to HR.'
    },
    {
        id: 'internship',
        sector: 'Internships & Trainees',
        icon: 'UserCheck',
        situation: 'A college intern is assigned no meaningful project work but is forced to sit next to the supervisor for 8 hours daily, reporting every 20 minutes on manual data copy-pasting, while receiving zero stipend or guidance.',
        managerBehaviour: 'Using intern for menial surveillance-heavy tasks, no structured learning, zero stipend.',
        employeeResponse: 'Intern felt exploited and learned no industry skills.',
        whyMicromanagement: 'Micromanaging repetitive menial tasks while failing to provide mentorship violates the core educational objective of internships.',
        whenSerious: 'Under the Apprentices Act 1961 and Ministry guidelines, using interns as full-time labor without statutory stipend or training structure is illegal.',
        possibleAction: 'Request a formal internship training plan from HR/College Placement Cell, document tasks assigned, and report stipend/training violations.'
    },
    {
        id: 'logistics',
        sector: 'Delivery & Logistics',
        icon: 'Truck',
        situation: 'A delivery driver is penalized by a supervisor for taking a 5-minute water break on a 42°C summer day because the vehicle GPS detected an "unauthorized 300-second stop".',
        managerBehaviour: 'Automated telemetry penalties, zero allowance for basic human physiological needs in extreme weather.',
        employeeResponse: 'Driver suffered heat exhaustion.',
        whyMicromanagement: 'Using GPS telemetry blindly to penalize necessary health breaks demonstrates dehumanizing micro-control.',
        whenSerious: 'Denying hydration or rest during extreme heat conditions violates Occupational Safety, Health and Working Conditions (OSH) Code and basic human rights.',
        possibleAction: 'Report the health hazard to the logistics safety officer, document weather conditions and medical symptoms, and file a safety grievance.'
    }
];

// 3. Scenario Simulator Games ("What Would You Do?")
export const simulatorScenarios = [
    {
        id: 'sim_1',
        title: 'Scenario 1: The 15-Minute Ping Requirement',
        situation: 'Your manager demands that you send a Slack update every 15 minutes detailing your exact tasks. You have consistently hit all your project deadlines for 2 years.',
        options: [
            {
                id: 'A',
                label: 'A. Ignore the request completely and continue working normally.',
                analysis: 'High Risk. Ignoring direct manager instructions can be framed as insubordination in HR records, even if the request is unreasonable.',
                recommendation: 'Not Recommended',
                color: 'red'
            },
            {
                id: 'B',
                label: 'B. Argue emotionally in the team group chat about how toxic this is.',
                analysis: 'High Risk. Public confrontation damages your professional standing and allows management to focus on your tone rather than their micromanagement.',
                recommendation: 'Not Recommended',
                color: 'amber'
            },
            {
                id: 'C',
                label: 'C. Comply temporarily, log the time wasted, and request a 1-on-1 to propose a daily summary.',
                analysis: 'Optimal Strategy. Demonstrates professional compliance while gathering empirical evidence showing that 15-minute pings waste 1.5 hours of productive time daily.',
                recommendation: 'Highly Recommended',
                color: 'emerald'
            },
            {
                id: 'D',
                label: 'D. Immediately submit your resignation in frustration without another job offer.',
                analysis: 'High Personal Risk. Resigning impulsively leaves you without income or leverage. Better to document and resolve internally first.',
                recommendation: 'Use Caution',
                color: 'orange'
            }
        ]
    },
    {
        id: 'sim_2',
        title: 'Scenario 2: The Sunday Evening "Urgent" Meeting',
        situation: 'Your manager schedules a compulsory 2-hour video call on Sunday at 7 PM for a non-emergency project status update. No overtime pay or Comp-Off is offered.',
        options: [
            {
                id: 'A',
                label: 'A. Attend silently and say nothing, but feel resentful.',
                analysis: 'Sub-optimal. Establishes a precedent that your Sunday rest days can be infringed upon without compensation.',
                recommendation: 'Not Recommended',
                color: 'amber'
            },
            {
                id: 'B',
                label: 'B. Send a polite written email requesting confirmation of Compensatory Off (Comp-Off) for Sunday hours.',
                analysis: 'Optimal Strategy. Cites your legal right to weekly rest under Shops & Establishments Act professionally, putting the onus on HR/Manager.',
                recommendation: 'Highly Recommended',
                color: 'emerald'
            },
            {
                id: 'C',
                label: 'C. Block the manager on WhatsApp and turn off your phone without notice.',
                analysis: 'Risky. While you have a right to disconnect, uncommunicated absence from a scheduled call can be weaponized in performance reviews.',
                recommendation: 'Use Caution',
                color: 'orange'
            },
            {
                id: 'D',
                label: 'D. File a police complaint immediately for Sunday calling.',
                analysis: 'Inappropriate Forum. Sunday work is a civil labor law / Shops Act matter, not a criminal police matter unless threats/violence occur.',
                recommendation: 'Incorrect Action',
                color: 'red'
            }
        ]
    },
    {
        id: 'sim_3',
        title: 'Scenario 3: Unannounced Laptop Keylogger Discovery',
        situation: 'You discover that your manager secretly installed keylogging software on your personal laptop (used for WFH) without your prior knowledge or consent.',
        options: [
            {
                id: 'A',
                label: 'A. Immediately format your laptop and say nothing.',
                analysis: 'Partial fix. Removes the spyware but leaves the breach unaddressed and undocumented.',
                recommendation: 'Neutral',
                color: 'amber'
            },
            {
                id: 'B',
                label: 'B. Take screenshot evidence of the keylogger, document the installation date, and send a formal privacy objection to HR & Data Protection Officer.',
                analysis: 'Optimal Strategy. Leverages IT Act Section 43 & DPDP Act 2023 rules against unannounced personal device surveillance.',
                recommendation: 'Highly Recommended',
                color: 'emerald'
            },
            {
                id: 'C',
                label: 'C. Install counter-spyware to hack the manager back.',
                analysis: 'Illegal. Hacking back violates Section 66 of the IT Act and exposes you to criminal liability.',
                recommendation: 'Strictly Prohibited',
                color: 'red'
            },
            {
                id: 'D',
                label: 'D. Post about the manager on social media naming the company.',
                analysis: 'High Risk. May trigger corporate defamation lawsuits or breach of confidentiality claims under employment contracts.',
                recommendation: 'Not Recommended',
                color: 'orange'
            }
        ]
    }
];

// 4. Jurisdiction Database (Countries & States)
export const jurisdictionData = {
    'IN': {
        countryName: 'India',
        flag: '🇮🇳',
        primaryLaws: [
            'State Shops & Commercial Establishments Acts (State-Specific)',
            'Factories Act, 1948 (Section 51 & 52)',
            'Payment of Wages Act, 1936 (Section 5 & 7)',
            'Digital Personal Data Protection (DPDP) Act, 2023',
            'Industrial Disputes Act, 1947 (Section 25F & Schedule V)',
            'POSH Act, 2013 (Sexual Harassment Protection)',
            'Article 21 Indian Constitution (Right to Privacy - Puttaswamy SC Ruling)'
        ],
        states: {
            'TN': {
                name: 'Tamil Nadu',
                authority: 'Tamil Nadu Labour Department / Assistant Commissioner of Labour (ACL)',
                act: 'Tamil Nadu Shops & Establishments Act, 1947',
                weeklyOffRule: 'Section 11: 1 full day weekly rest mandatory. Mandatory work on rest day requires 2x Overtime pay or Comp-Off within 30 days.',
                seatingRule: 'Section 22A (Right to Sit): Suitable seating must be provided for all employees in shops/establishments.',
                website: 'https://labour.tn.gov.in/',
                grievancePortal: 'https://labour.tn.gov.in/services',
                filingDeadline: '1 year from cause of action for wage claims under Payment of Wages Act.'
            },
            'KA': {
                name: 'Karnataka (Bangalore)',
                authority: 'Department of Labour Karnataka / Senior Labour Inspector',
                act: 'Karnataka Shops & Commercial Establishments Act, 1961',
                weeklyOffRule: 'Section 12: Every employee allowed 1 whole day holiday per week. Overtime limited to max 50 hours per quarter at 2x rate.',
                seatingRule: 'Mandatory rest intervals every 5 hours of continuous work.',
                website: 'https://labour.karnataka.gov.in/',
                grievancePortal: 'https://ekarmika.karnataka.gov.in/',
                filingDeadline: '6 months for Shops Act claims; 1 year for wage claims.'
            },
            'MH': {
                name: 'Maharashtra (Mumbai / Pune)',
                authority: 'Maharashtra Labour Commissionerate / Facilitation Officer',
                act: 'Maharashtra Shops & Establishments (Regulation of Employment and Conditions of Service) Act, 2017',
                weeklyOffRule: 'Section 16: 24 consecutive hours of weekly off mandatory. Overtime paid at double normal rate of wages.',
                seatingRule: 'Section 23: First-aid and seating requirements mandatory.',
                website: 'https://mahakamgar.maharashtra.gov.in/',
                grievancePortal: 'https://samadhan.labour.gov.in/',
                filingDeadline: '1 year from date of wage deduction or non-payment.'
            },
            'DL': {
                name: 'Delhi (NCR)',
                authority: 'Department of Labour, Govt. of NCT of Delhi',
                act: 'Delhi Shops & Establishments Act, 1954',
                weeklyOffRule: 'Section 17: Close day and weekly off mandatory. Overtime paid at 2x wage rate for hours exceeding 48/week.',
                seatingRule: 'Mandatory spreadover limit of 10.5 hours maximum per day.',
                website: 'https://labour.delhi.gov.in/',
                grievancePortal: 'https://pgportal.delhi.gov.in/',
                filingDeadline: '1 year for wage claims before Authority under Payment of Wages Act.'
            },
            'TS': {
                name: 'Telangana (Hyderabad)',
                authority: 'Telangana Labour Department / District Labour Officer',
                act: 'Telangana Shops & Establishments Act, 1988',
                weeklyOffRule: 'Section 20: Mandatory weekly holiday. Overtime rate is 2x normal wages.',
                seatingRule: 'Compulsory rest intervals and employee safety provisions.',
                website: 'https://labour.telangana.gov.in/',
                grievancePortal: 'https://labour.telangana.gov.in/',
                filingDeadline: '1 year from date of violation.'
            }
        }
    },
    'US': {
        countryName: 'United States',
        flag: '🇺🇸',
        primaryLaws: [
            'Fair Labor Standards Act (FLSA) - Overtime & Hours',
            'Title VII Civil Rights Act 1964 - Anti-Discrimination',
            'Americans with Disabilities Act (ADA)',
            'Occupational Safety and Health Act (OSHA)',
            'State-Level Labor Codes (e.g. California Labor Code)'
        ],
        states: {
            'CA': {
                name: 'California',
                authority: 'California Labor Commissioner\'s Office (DIR / DLSE)',
                act: 'California Labor Code & IWC Wage Orders',
                weeklyOffRule: 'Labor Code Section 551: Entitled to 1 day\'s rest in 7. Overtime: 1.5x after 8 hrs/day, 2x after 12 hrs/day.',
                seatingRule: 'IWC Suitable Seating Requirement.',
                website: 'https://www.dir.ca.gov/dlse/',
                grievancePortal: 'https://www.dir.ca.gov/dlse/howtofilecomplaint.htm',
                filingDeadline: 3
            },
            'NY': {
                name: 'New York',
                authority: 'New York State Department of Labor (NYSDOL)',
                act: 'New York Labor Law',
                weeklyOffRule: 'One Day Rest in Seven Law (Labor Law Sec. 161). Overtime 1.5x after 40 hours/week.',
                seatingRule: 'NYS Rest Period and Meal Period requirements.',
                website: 'https://dol.ny.gov/',
                grievancePortal: 'https://dol.ny.gov/wage-complaint-process',
                filingDeadline: 6
            }
        }
    },
    'UK': {
        countryName: 'United Kingdom',
        flag: '🇬🇧',
        primaryLaws: [
            'Employment Rights Act 1996',
            'Working Time Regulations 1998 (48-hour week cap, rest breaks)',
            'Equality Act 2010 (Protection against harassment & discrimination)',
            'UK General Data Protection Regulation (UK GDPR) & Data Protection Act 2018'
        ],
        states: {
            'ENG': {
                name: 'England & Wales',
                authority: 'ACAS (Advisory, Conciliation and Arbitration Service) / Employment Tribunal',
                act: 'Employment Rights Act 1996 & Equality Act 2010',
                weeklyOffRule: '24 hours uninterrupted rest per week (or 48 hours per fortnight). 11 hours daily rest between shifts.',
                seatingRule: 'Health and Safety at Work Act 1974.',
                website: 'https://www.gov.uk/browse/employing-people',
                grievancePortal: 'https://www.acas.org.uk/making-a-claim-to-an-employment-tribunal',
                filingDeadline: '3 months minus 1 day from incident date for Employment Tribunal claims.'
            }
        }
    },
    'AE': {
        countryName: 'United Arab Emirates',
        flag: '🇦🇪',
        primaryLaws: [
            'Federal Decree-Law No. 33 of 2021 on Regulation of Labour Relations (UAE Labour Law)',
            'Cabinet Resolution No. 1 of 2022'
        ],
        states: {
            'DXB': {
                name: 'Dubai & Northern Emirates',
                authority: 'Ministry of Human Resources & Emiratisation (MOHRE)',
                act: 'Federal Decree-Law No. 33 of 2021',
                weeklyOffRule: 'Article 21: Mandatory weekly paid rest day (minimum 1 day). Overtime capped with +25% or +50% pay.',
                seatingRule: 'Article 13: Employer obligations on safe environment.',
                website: 'https://www.mohre.gov.ae/',
                grievancePortal: 'https://www.mohre.gov.ae/en/services/labour-complaint.aspx',
                filingDeadline: '1 year from date of entitlement.'
            }
        }
    }
};
