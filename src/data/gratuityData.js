export const gratuityEligibilityRules = [
    {
        id: 'five-year-rule',
        title: '5-Year Continuous Service',
        description: 'An employee must complete at least 5 years of continuous service with the same employer to be eligible for gratuity. This applies to resignation, retirement, and superannuation.',
        note: 'Per Supreme Court rulings, 4 years and 240 days (190 days for mines/seasonal) may qualify as 5 years of continuous service.',
        status: 'green',
    },
    {
        id: 'covered-establishment',
        title: 'Covered Establishments',
        description: 'The Payment of Gratuity Act, 1972 applies to every factory, mine, oilfield, plantation, port, railway, and every shop or establishment with 10 or more employees on any day in the preceding 12 months.',
        note: 'Once covered, the Act continues to apply even if the number of employees falls below 10.',
        status: 'green',
    },
    {
        id: 'death-disability',
        title: 'Death or Disability — No 5-Year Requirement',
        description: 'If an employee dies or becomes disabled (due to disease or accident) during service, gratuity is payable to the nominee or legal heir regardless of the length of service.',
        note: 'This is an important exception — the 5-year rule is completely waived.',
        status: 'yellow',
    },
    {
        id: 'resignation',
        title: 'Resignation After 5 Years',
        description: 'An employee who voluntarily resigns after completing 5 years of continuous service is fully entitled to gratuity. The employer cannot deny gratuity solely because the employee resigned.',
        note: 'Many employers wrongly claim gratuity is only for retirees — this is false.',
        status: 'green',
    },
    {
        id: 'termination',
        title: 'Termination — Still Eligible',
        description: 'An employee who is terminated (retrenchment, redundancy, or for any reason other than specified misconduct) after 5 years of service remains eligible for gratuity.',
        note: 'Only exception: dismissal for misconduct involving willful omission or negligence causing damage or loss to employer property.',
        status: 'yellow',
    },
    {
        id: 'misconduct-exception',
        title: 'Misconduct Forfeiture (Limited)',
        description: 'Gratuity can be forfeited ONLY if the employee is dismissed for (a) riotous or violent behavior, or (b) any act constituting an offence involving moral turpitude committed during employment. Partial forfeiture allowed to the extent of damage/loss.',
        note: 'Simple performance issues, policy violations, or "not a good fit" are NOT grounds for forfeiture.',
        status: 'red',
    },
    {
        id: 'max-cap',
        title: 'Maximum Gratuity Cap — ₹20 Lakhs',
        description: 'As per the 2018 amendment, the maximum gratuity payable under the Act is ₹20,00,000 (twenty lakh rupees). Any amount exceeding this is tax-exempt up to ₹20 lakhs.',
        note: 'Employers may voluntarily pay gratuity exceeding ₹20 lakhs — such excess is taxable.',
        status: 'green',
    },
    {
        id: 'formula',
        title: 'Gratuity Calculation Formula',
        description: 'For employees covered under the Act: (15 × Last Drawn Salary × Years of Service) ÷ 26. For employees not covered: (15 × Last Drawn Salary × Years of Service) ÷ 30. Last Drawn Salary = Basic Salary + Dearness Allowance.',
        note: '26 represents the number of working days in a month (excluding 4 Sundays). 15 days wages per year of service.',
        status: 'green',
    },
];

export const gratuityFaqs = [
    {
        question: 'What is gratuity and which law governs it in India?',
        answer: 'Gratuity is a monetary benefit paid by the employer to an employee as a token of gratitude for long and meritorious service. It is governed by the Payment of Gratuity Act, 1972, which applies to factories, mines, oilfields, plantations, ports, railways, and shops/establishments with 10 or more employees. It is a statutory right, not a discretionary bonus.'
    },
    {
        question: 'How many years of service are needed to be eligible for gratuity?',
        answer: 'Generally, an employee must complete 5 years of continuous service with the same employer. However, the Supreme Court of India has clarified that 4 years and 240 days (or 190 days for mines/seasonal establishments) of continuous service can be treated as 5 years for gratuity eligibility purposes. The only exception to the 5-year rule is death or disability during service.'
    },
    {
        question: 'Am I eligible for gratuity if I resign voluntarily?',
        answer: 'Yes, absolutely. If you have completed 5 years of continuous service and you voluntarily resign, you are fully entitled to gratuity under the Payment of Gratuity Act. The employer cannot refuse to pay gratuity simply because you resigned. This is one of the most common misconceptions — gratuity is not limited to retirement or retrenchment.'
    },
    {
        question: 'What is the formula for calculating gratuity?',
        answer: 'For employees covered under the Act: Gratuity = (15 × Last Drawn Salary × Years of Service) ÷ 26. For employees not covered under the Act: Gratuity = (15 × Last Drawn Salary × Years of Service) ÷ 30. "Last Drawn Salary" means Basic Salary + Dearness Allowance (DA). The number 26 represents working days in a month (30 minus 4 Sundays), and 15 represents 15 days\' wages per year of service.'
    },
    {
        question: 'What is the maximum amount of gratuity payable?',
        answer: 'The maximum gratuity payable under the Payment of Gratuity Act is ₹20,00,000 (twenty lakh rupees) as per the 2018 amendment. If your calculated gratuity exceeds this amount, you will receive ₹20 lakhs under the Act. However, employers can voluntarily pay more — the excess amount above ₹20 lakhs is taxable as income.'
    },
    {
        question: 'What does "Last Drawn Salary" include for gratuity calculation?',
        answer: 'Last Drawn Salary for gratuity calculation includes Basic Salary plus Dearness Allowance (DA). It does NOT include House Rent Allowance (HRA), conveyance allowance, special allowance, bonuses, or any other components. If your company does not have a separate DA component, only the Basic Salary is used. Some companies structure salary with a higher Basic to increase the gratuity amount.'
    },
    {
        question: 'Is gratuity payable if an employee dies during service?',
        answer: 'Yes. In case of death during service, gratuity is payable to the employee\'s nominee or legal heir regardless of how long the employee has worked. The 5-year continuous service requirement is completely waived in cases of death. The amount is calculated based on the actual years of service completed. This is a critical protection for the employee\'s family.'
    },
    {
        question: 'Is gratuity payable if an employee becomes disabled?',
        answer: 'Yes. If an employee becomes disabled due to disease or accident during service, gratuity is payable regardless of the length of service. The 5-year rule is waived for disability cases just as it is for death. "Disability" here means the employee is unable to continue performing their duties due to bodily or mental infirmity.'
    },
    {
        question: 'Can an employer deny gratuity if I am terminated?',
        answer: 'Generally, no. If you have completed 5 years of service and are terminated (whether due to retrenchment, redundancy, or any reason), you are entitled to gratuity. The only exception is if you are dismissed for specific misconduct: (1) riotous or violent behavior during employment, or (2) an act constituting an offence involving moral turpitude committed during employment. Even then, the forfeiture is limited to the extent of damage/loss caused.'
    },
    {
        question: 'What is the 4 years 240 days rule for gratuity?',
        answer: 'The Supreme Court of India has ruled that if an employee has served for 4 years and 240 days, it should be treated as 5 years of continuous service for gratuity eligibility. For mines and establishments operating seasonally, the threshold is 4 years and 190 days. This interpretation was established in the Surendra Kumar Verma case and has been consistently upheld. So if you resign or are terminated after 4 years and 240 days, you can claim gratuity.'
    },
    {
        question: 'How do I file a gratuity complaint if my employer refuses to pay?',
        answer: 'Step 1: Submit a written application (Form I) to your employer within 30 days of gratuity becoming payable. Step 2: If the employer does not pay within 30 days of receiving your application, file a complaint with the Controlling Authority (usually the Labour Commissioner or Assistant Labour Commissioner) in your area. Step 3: The Controlling Authority will issue a notice to the employer and conduct an inquiry. Step 4: If the employer is found liable, the authority can order payment with interest (up to 10% per annum for delays).'
    },
    {
        question: 'What is Form I for gratuity?',
        answer: 'Form I is the prescribed application form under the Payment of Gratuity (Central) Rules, 1972, used by an employee (or their nominee/legal heir) to claim gratuity from the employer. It should include: employee name, address, department, date of appointment, date of termination/resignation/retirement, total years of service, last drawn salary, and the amount of gratuity claimed. You must submit this within 30 days of the gratuity becoming payable.'
    },
    {
        question: 'Is gratuity taxable in India?',
        answer: 'For government employees, gratuity received is fully exempt from income tax. For private sector employees covered under the Act, the least of the following is exempt: (a) actual gratuity received, (b) ₹20 lakhs, or (c) 15 days salary for each completed year of service based on last drawn salary. For employees not covered under the Act, the least of: (a) actual gratuity, (b) ₹20 lakhs, or (c) half month\'s salary for each completed year based on average salary of last 10 months. Any amount exceeding the exemption limit is taxable.'
    },
    {
        question: 'Does gratuity apply to contract workers and temporary employees?',
        answer: 'Contract workers employed through a contractor may not be directly eligible for gratuity from the principal employer. However, the contractor (if the establishment has 10+ employees) must pay gratuity. Fixed-term employees are eligible for gratuity on a pro-rata basis even if the contract term is less than 5 years, as clarified under the Industrial Relations Code. Temporary employees who complete 5 years of continuous service are eligible for gratuity.'
    },
    {
        question: 'Can my employer forfeit my gratuity for not serving notice period?',
        answer: 'No. Not serving the notice period is NOT a valid ground for forfeiting gratuity under the Payment of Gratuity Act. The Act very specifically limits forfeiture to only two grounds: (1) riotous/violent behavior, and (2) moral turpitude offence. The employer may recover notice period dues separately from your Full & Final settlement, but cannot withhold the gratuity component. If your employer threatens this, remind them of Section 4(6) of the Act.'
    },
    {
        question: 'What happens if my employer delays gratuity payment?',
        answer: 'Under Section 7(3A) of the Payment of Gratuity Act, if the employer does not pay gratuity within 30 days from the date it becomes payable, the employer must pay simple interest at a rate notified by the government (currently up to 10% per annum) from the date the gratuity becomes payable until it is actually paid. If the delay is willful, the Controlling Authority can impose a penalty of up to 6 months\' imprisonment and/or a fine.'
    },
    {
        question: 'How is "continuous service" defined for gratuity purposes?',
        answer: 'An employee is said to be in continuous service for a period if they have worked for at least 240 days in a period of 12 months (190 days for below-ground mine workers or seasonal establishments). Days of authorized absence (leave, lockout, strike that is legal, etc.) are included in computing continuous service. Breaks in service due to sickness, accident, authorized leave, lockout, or legal strike do not break continuity.'
    },
    {
        question: 'Can I nominate someone to receive my gratuity in case of my death?',
        answer: 'Yes, and you should. Every employee must make a nomination in Form F within 30 days of completing one year of service. If you have a family, the nomination must be in favour of a family member(s). You can nominate multiple persons with specified shares. If there is no nomination, gratuity is paid to the legal heirs. You can modify your nomination at any time using Form G (modification) or Form H (fresh nomination).'
    },
    {
        question: 'Does gratuity apply to employees in startups and small companies?',
        answer: 'The Payment of Gratuity Act applies to establishments with 10 or more employees. If your startup or company has fewer than 10 employees, the Act does not technically apply. However, many companies voluntarily pay gratuity as part of their compensation policy. Additionally, once a company is covered (reaches 10 employees), it remains covered even if employee count later drops below 10.'
    },
    {
        question: 'What is the difference in gratuity calculation for covered vs. not covered employees?',
        answer: 'For employees covered under the Payment of Gratuity Act, the formula uses a divisor of 26 (working days in a month): (15 × Last Drawn Salary × Years) ÷ 26. For employees not covered under the Act (e.g., in establishments with fewer than 10 employees), the divisor is 30 (calendar days): (15 × Last Drawn Salary × Years) ÷ 30. This means covered employees get a slightly higher gratuity amount for the same salary and years of service.'
    },
    {
        question: 'Can a fixed-term employee claim gratuity?',
        answer: 'Yes. Under the Industrial Relations Code, 2020 (and as per various High Court rulings), fixed-term employees are entitled to gratuity on a pro-rata basis proportional to the period of service rendered, even if the total contract duration is less than 5 years. This is a significant change that ensures fixed-term workers are not denied this benefit. The gratuity should be paid at the end of each contract term.'
    },
    {
        question: 'How are years of service calculated — is it rounded up?',
        answer: 'For gratuity calculation, years of service exceeding 6 months are rounded up to the next full year. For example, if you have served for 7 years and 8 months, it is counted as 8 years. If you have served for 7 years and 4 months, it is counted as 7 years. This rounding applies only to the calculation — the 5-year eligibility requirement is separate (where the 4 years 240 days rule applies).'
    },
];
