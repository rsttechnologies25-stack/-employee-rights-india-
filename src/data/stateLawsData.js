export const stateLawsData = {
    'karnataka': {
        name: 'Karnataka',
        slug: 'karnataka',
        actName: 'Karnataka Shops and Commercial Establishments Act, 1961',
        description: 'Complete guide to working hours, leave policies, and employment rules under the Karnataka S&E Act, applicable to all IT companies in Bangalore.',
        maxWorkingHours: '9 hours per day and 48 hours per week.',
        overtime: 'Double the normal rate of wages (2x). Total working hours including overtime cannot exceed 10 hours a day.',
        earnedLeave: '1 day of Earned Leave for every 20 days worked in the previous year.',
        casualSickLeave: '12 days of Casual/Sick Leave per year (can be split).',
        womenNightShift: 'Women can work night shifts (8 PM to 6 AM) only if the employer provides mandatory transport (door-to-door) and adequate security.',
        nationalHolidays: 'Mandatory holidays on Jan 26, Aug 15, Oct 2, Nov 1 (Rajyotsava), and May 1 (Labour Day), plus other festival holidays.',
        noticePeriod: '1 month notice or pay in lieu is statutorily required for termination after 6 months of continuous service.'
    },
    'maharashtra': {
        name: 'Maharashtra',
        slug: 'maharashtra',
        actName: 'Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017',
        description: 'Labour law compliance for companies in Mumbai, Pune, and rest of Maharashtra including maximum working hours and 24x7 operational rules.',
        maxWorkingHours: '9 hours per day and 48 hours per week. A 30-minute break is mandatory after 5 hours of continuous work.',
        overtime: 'Overtime is paid at double the ordinary wage rate. Total hours cannot exceed 10.5 hours/day.',
        earnedLeave: '1 day of Earned Leave for every 20 days worked. Maximum accumulation allowed is 45 days.',
        casualSickLeave: '8 days of Casual Leave. Earned leaves can be encashed as per company policy.',
        womenNightShift: 'Women can work between 9:30 PM and 7:00 AM only with their consent and if safe transportation and security are provided.',
        nationalHolidays: '4 mandatory national holidays (Jan 26, May 1 - Maharashtra Day, Aug 15, Oct 2) plus 4 festival holidays.',
        noticePeriod: '1 month notice or salary in lieu for employees who have completed at least 1 year of continuous service.'
    },
    'tamil-nadu': {
        name: 'Tamil Nadu',
        slug: 'tamil-nadu',
        actName: 'Tamil Nadu Shops and Establishments Act, 1947',
        description: 'Rules and regulations governing employment in Chennai and across Tamil Nadu, including special provisions for women employees.',
        maxWorkingHours: '8 hours per day and 48 hours per week. Can be extended to 10 hours/day and 54 hours/week with overtime.',
        overtime: 'Overtime must be paid at double the standard wage rate.',
        earnedLeave: '1 day for every 20 days of work performed in the preceding year.',
        casualSickLeave: '12 days of Casual Leave and 12 days of Sick Leave annually.',
        womenNightShift: 'Women are generally not permitted to work between 8:00 PM and 6:00 AM unless specific exemptions and transport facilities are strictly provided.',
        nationalHolidays: 'Jan 26, Aug 15, Oct 2, and May 1, plus local festival holidays (usually 5 additional days).',
        noticePeriod: '1 month notice is required before dismissing an employee who has worked for at least 6 months.'
    },
    'telangana': {
        name: 'Telangana',
        slug: 'telangana',
        actName: 'Telangana Shops and Establishments Act, 1988',
        description: 'Comprehensive guide to employee rights under the Telangana S&E Act, vital for IT and commercial employees in Hyderabad.',
        maxWorkingHours: '8 hours a day and 48 hours a week.',
        overtime: 'Double the ordinary rate of wages for any work beyond 8 hours a day or 48 hours a week.',
        earnedLeave: '15 days of Privilege Leave (Earned Leave) for every 12 months of continuous service.',
        casualSickLeave: '12 days of Casual Leave and 12 days of Sick Leave per calendar year.',
        womenNightShift: 'Women can be employed during night shifts in IT/ITES establishments subject to safety, security, and transport regulations.',
        nationalHolidays: '5 mandatory holidays including Jan 26, May 1, Aug 15, Oct 2, and Telangana Formation Day (June 2).',
        noticePeriod: '1 month notice or pay in lieu is mandatory for termination of an employee with at least 6 months of service.'
    },
    'delhi': {
        name: 'Delhi',
        slug: 'delhi',
        actName: 'Delhi Shops and Establishments Act, 1954',
        description: 'Labour compliance rules for commercial establishments in the National Capital Territory of Delhi, covering leaves, hours, and termination.',
        maxWorkingHours: '9 hours per day and 48 hours per week. A 30-minute rest interval is required after 5 hours of work.',
        overtime: 'Overtime is payable at double the normal wage rate. Maximum limit of 150 hours of overtime in a year.',
        earnedLeave: '15 days of Privilege Leave after 11 months of continuous employment.',
        casualSickLeave: '12 days of Casual/Sick Leave per year.',
        womenNightShift: 'Women are prohibited from working between 9:00 PM and 7:00 AM during the summer, and 8:00 PM to 8:00 AM in the winter (unless specific ITES exemptions apply).',
        nationalHolidays: '3 mandatory national holidays (Jan 26, Aug 15, Oct 2) plus specific local festival days.',
        noticePeriod: '1 month notice or 1 month pay in lieu is required for an employee who has been in continuous employment for 3 months.'
    }
};

export const getAllStates = () => Object.values(stateLawsData);
export const getStateBySlug = (slug) => stateLawsData[slug];
