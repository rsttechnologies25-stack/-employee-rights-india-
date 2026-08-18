import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import * as HelmetModule from 'react-helmet-async';
import { MapPin, Clock, Calendar, Moon, AlertTriangle, ShieldCheck, FileText, IndianRupee, ExternalLink, Info, Globe } from 'lucide-react';

const Helmet = HelmetModule.Helmet || (HelmetModule.default && HelmetModule.default.Helmet) || HelmetModule.default;
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import LawCard from '../components/LawCard';
import InternalLinks from '../components/InternalLinks';
import { getStateBySlug, getAllStates } from '../data/stateLawsData';

const sectorColors = [
    { header: 'bg-blue-600',   badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',     border: 'border-blue-200 dark:border-blue-800',   bg: 'bg-blue-50 dark:bg-blue-950/20'   },
    { header: 'bg-orange-500', badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800', bg: 'bg-orange-50 dark:bg-orange-950/20' },
    { header: 'bg-red-600',    badge: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',          border: 'border-red-200 dark:border-red-800',     bg: 'bg-red-50 dark:bg-red-950/20'     },
    { header: 'bg-yellow-500', badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300', border: 'border-yellow-200 dark:border-yellow-800', bg: 'bg-yellow-50 dark:bg-yellow-950/20' },
];

const TRANSLATIONS = {
    'hi': {
        // UI elements
        '💰 Minimum Wages': '💰 न्यूनतम वेतन',
        '⚖️ Labour Laws': '⚖️ श्रम कानून',
        '📅 Holidays': '📅 छुट्टियां',
        'Key Regulations — ': 'मुख्य नियम — ',
        'Maximum Working Hours': 'अधिकतम कार्य समय',
        'Overtime Rules': 'ओवरटाइम नियम',
        'Earned Leave Policy': 'अर्जित अवकाश (Earned Leave) नीति',
        'Casual & Sick Leave': 'आकस्मिक और बीमारी अवकाश',
        'Women Night Shift': 'महिला नाइट शिफ्ट नियम',
        'Termination Notice': 'नौकरी से बर्खास्तगी का नोटिस',
        'Does this apply to IT/Software companies?': 'क्या यह आईटी/सॉफ्टवेयर कंपनियों पर लागू होता है?',
        'Yes. IT companies, BPOs, and KPOs are classified as "Commercial Establishments". While some states grant IT companies 24×7 operation exemptions, the fundamental rights on working hours, overtime pay, and statutory leave still strictly apply.': 'हाँ। आईटी कंपनियों, बीपीओ और केपीओ को संबंधित राज्य दुकान और प्रतिष्ठान अधिनियम के तहत "वाणिज्यिक प्रतिष्ठानों" के रूप में वर्गीकृत किया गया है। हालांकि कुछ राज्य आईटी कंपनियों को 24x7 संचालन की छूट देते हैं, लेकिन कार्य समय, ओवरटाइम भुगतान और वैधानिक अवकाश के मौलिक अधिकार अभी भी सख्ती से लागू होते हैं।',
        'Mandatory Holidays — ': 'अनिवार्य अवकाश — ',
        'National & Festival Holidays': 'राष्ट्रीय और त्योहारों के अवकाश',
        '2026 Holiday Calendar — ': '2026 अवकाश कैलेंडर — ',
        'Statutory national, state, and festival holidays.': 'वैधानिक राष्ट्रीय, राज्य और त्योहार अवकाश।',
        'Date & Day': 'दिनांक और दिन',
        'Holiday Name': 'अवकाश का नाम',
        'Type': 'प्रकार',
        'National': 'राष्ट्रीय',
        'State': 'राज्य',
        'Optional': 'वैकल्पिक',
        'Your Minimum Wage Rights': 'आपके न्यूनतम वेतन अधिकार',
        'Overtime at 2x:': 'दोगुनी दर (2x) पर ओवरटाइम',
        'No deductions below MW:': 'न्यूनतम वेतन से कम कटौती नहीं',
        'File a complaint:': 'शिकायत दर्ज करें',
        'Category': 'श्रेणी',
        'Per Day (₹)': 'प्रति दिन (₹)',
        'Per Month (₹)': 'प्रति माह (₹)',
        'Applies To': 'लागू होता है',
        'Source:': 'स्रोत:',
        'Revised:': 'संशोधित:',
        'Reminder:': 'अनुस्मारक:',
        'Note:': 'नोट:',

        // Karnataka Texts in Hindi
        'Karnataka': 'कर्नाटक',
        'Karnataka Shops and Commercial Establishments Act, 1961': 'कर्नाटक दुकान और वाणिज्यिक प्रतिष्ठान अधिनियम, 1961',
        '9 hours per day and 48 hours per week.': 'प्रतिदिन 9 घंटे और प्रति सप्ताह 48 घंटे।',
        'Double the normal rate of wages (2x). Total working hours including overtime cannot exceed 10 hours a day.': 'सामान्य वेतन दर से दोगुना (2x)। ओवरटाइम सहित कुल कार्य घंटे दिन में 10 घंटे से अधिक नहीं हो सकते।',
        '1 day of Earned Leave for every 20 days worked in the previous year.': 'पिछले वर्ष में काम किए गए प्रत्येक 20 दिनों के लिए 1 दिन का अर्जित अवकाश।',
        '12 days of Casual/Sick Leave per year (can be split).': 'प्रति वर्ष 12 दिन का आकस्मिक/बीमारी अवकाश (विभाजित किया जा सकता है)।',
        'Women can work night shifts (8 PM to 6 AM) only if the employer provides mandatory transport (door-to-door) and adequate security.': 'महिलाएं केवल तभी नाइट शिफ्ट (रात 8 बजे से सुबह 6 बजे तक) में काम कर सकती हैं जब नियोक्ता अनिवार्य परिवहन (घर-से-घर) और पर्याप्त सुरक्षा प्रदान करे।',
        '1 month notice or pay in lieu is statutorily required for termination after 6 months of continuous service.': '6 महीने की निरंतर सेवा के बाद सेवा समाप्त करने के लिए 1 महीने का नोटिस या उसके बदले वेतन कानूनी रूप से आवश्यक है।',
        'Mandatory holidays on Jan 26, Aug 15, Oct 2, Nov 1 (Rajyotsava), and May 1 (Labour Day), plus other festival holidays.': 'जनवरी 26, अगस्त 15, अक्टूबर 2, नवंबर 1 (राज्योत्सव) और मई 1 (मजदूर दिवस) पर अनिवार्य छुट्टियां, साथ ही अन्य त्योहार की छुट्टियां।',

        // Maharashtra Texts
        'Maharashtra': 'महाराष्ट्र',
        'Maharashtra Shops and Establishments Act, 2017': 'महाराष्ट्र दुकान और प्रतिष्ठान अधिनियम, 2017',
        '9 hours per day and 48 hours per week. A 30-minute break is mandatory after 5 hours of continuous work.': 'प्रतिदिन 9 घंटे और प्रति सप्ताह 48 घंटे। 5 घंटे के निरंतर काम के बाद 30 मिनट का विश्राम अनिवार्य है।',
        'Overtime is paid at double the ordinary wage rate. Total hours cannot exceed 10.5 hours/day.': 'ओवरटाइम का भुगतान सामान्य वेतन दर के दोगुने पर किया जाता है। कुल घंटे 10.5 घंटे/दिन से अधिक नहीं हो सकते।',
        '1 day of Earned Leave for every 20 days worked. Maximum accumulation allowed is 45 days.': 'प्रत्येक 20 दिनों के काम के लिए 1 दिन का अर्जित अवकाश। अधिकतम 45 दिनों तक जमा करने की अनुमति है।',
        '8 days of Casual Leave. Earned leaves can be encashed as per company policy.': '8 दिनों का आकस्मिक अवकाश। कंपनी नीति के अनुसार अर्जित छुट्टियों का नकद भुगतान किया जा सकता है।',
        'Women can work between 9:30 PM and 7:00 AM only with their consent and if safe transportation and security are provided.': 'महिलाएं केवल अपनी सहमति से और सुरक्षित परिवहन एवं सुरक्षा प्रदान किए जाने पर ही रात 9:30 बजे से सुबह 7:00 बजे के बीच काम कर सकती हैं।',
        '1 month notice or salary in lieu for employees who have completed at least 1 year of continuous service.': 'कम से कम 1 वर्ष की निरंतर सेवा पूरी करने वाले कर्मचारियों के लिए 1 महीने का नोटिस या उसके बदले वेतन।',
        '4 mandatory national holidays (Jan 26, May 1 - Maharashtra Day, Aug 15, Oct 2) plus 4 festival holidays.': '4 अनिवार्य राष्ट्रीय अवकाश (26 जनवरी, 1 मई - महाराष्ट्र दिवस, 15 अगस्त, 2 अक्टूबर) और 4 त्योहार अवकाश।',

        // Delhi Texts
        'Delhi': 'दिल्ली',
        'Delhi Shops and Establishments Act, 1954': 'दिल्ली दुकान और प्रतिष्ठान अधिनियम, 1954',
        '9 hours per day and 48 hours per week. A 30-minute rest interval is required after 5 hours of work.': 'प्रतिदिन 9 घंटे और प्रति सप्ताह 48 घंटे। 5 घंटे काम के बाद 30 मिनट का विश्राम अंतराल आवश्यक है।',
        'Overtime is payable at double the normal wage rate. Maximum limit of 150 hours of overtime in a year.': 'ओवरटाइम सामान्य वेतन दर के दोगुने पर देय है। एक वर्ष में अधिकतम 150 घंटे ओवरटाइम की सीमा है।',
        '15 days of Privilege Leave after 11 months of continuous employment.': '11 महीने के निरंतर रोजगार के बाद 15 दिनों का विशेषाधिकार अवकाश (Privilege Leave)।',
        '12 days of Casual/Sick Leave per year.': 'प्रति वर्ष 12 दिन का आकस्मिक/बीमारी अवकाश।',
        'Women are prohibited from working between 9:00 PM and 7:00 AM during the summer, and 8:00 PM to 8:00 AM in the winter (unless specific ITES exemptions apply).': 'गर्मियों में रात 9:00 बजे से सुबह 7:00 बजे के बीच और सर्दियों में रात 8:00 बजे से सुबह 8:00 बजे के बीच महिलाओं के काम करने पर रोक है (जब तक कि विशिष्ट आईटीईएस छूट लागू न हो)।',
        '3 mandatory national holidays (Jan 26, Aug 15, Oct 2) plus specific local festival days.': '3 अनिवार्य राष्ट्रीय अवकाश (26 जनवरी, 15 अगस्त, 2 अक्टूबर) और विशिष्ट स्थानीय त्योहार के दिन।',
        '1 month notice or 1 month pay in lieu is required for an employee who has been in continuous employment for 3 months.': '3 महीने से निरंतर रोजगार में रहने वाले कर्मचारी के लिए 1 महीने का नोटिस या उसके बदले 1 महीने का वेतन आवश्यक है।',

        // Haryana Texts
        'Haryana': 'हरियाणा',
        'Punjab Shops and Commercial Establishments Act, 1958 (Applicable to Haryana)': 'पंजाब दुकान और वाणिज्यिक प्रतिष्ठान अधिनियम, 1958 (हरियाणा पर लागू)',
        'Double the ordinary rate of wages.': 'सामान्य वेतन दर का दोगुना।',
        '1 day for every 20 days of work.': 'काम के प्रत्येक 20 दिनों के लिए 1 दिन।',
        '7 days of Casual Leave and 7 days of Sick Leave per year.': 'प्रति वर्ष 7 दिन का आकस्मिक अवकाश और 7 दिन का बीमारी अवकाश।',
        'Permitted in IT/ITES with explicit government exemption, transport, and female security guards present.': 'स्पष्ट सरकारी छूट, परिवहन और महिला सुरक्षा गार्डों की उपस्थिति के साथ आईटी/आईटीईएस में अनुमति दी गई है।',
        'Jan 26, Aug 15, and Oct 2, plus 3 festival holidays.': '26 जनवरी, 15 अगस्त और 2 अक्टूबर, साथ ही 3 त्योहारों की छुट्टियां।',
        '1 month notice is standard under the Act for confirmed employees.': 'पुष्टि किए गए कर्मचारियों के लिए अधिनियम के तहत 1 महीने का नोटिस मानक है।',

        // UP Texts
        'Uttar Pradesh': 'उत्तर प्रदेश',
        'UP Shops and Commercial Establishments Act, 1962': 'यूपी दुकान और वाणिज्यिक प्रतिष्ठान अधिनियम, 1962',
        '8 hours per day and 48 hours per week.': 'प्रतिदिन 8 घंटे और प्रति सप्ताह 48 घंटे।',
        '15 days of Earned Leave after 12 months of service.': '12 महीने की सेवा के बाद 15 दिनों का अर्जित अवकाश।',
        '10 days of Casual Leave and 15 days of Sick Leave per year.': 'प्रति वर्ष 10 दिन का आकस्मिक अवकाश और 15 दिन का बीमारी अवकाश।',
        'Not permitted before 6:00 AM or after 7:00 PM unless specific BPO/IT exemption is obtained.': 'सुबह 6:00 बजे से पहले या शाम 7:00 बजे के बाद अनुमति नहीं है जब तक कि विशिष्ट बीपीओ/आईटी छूट प्राप्त न हो।',
        'Jan 26, Aug 15, Oct 2, and May 1.': '26 जनवरी, 15 अगस्त, 2 अक्टूबर और 1 मई।',
        '1 month notice or pay in lieu.': '1 महीने का नोटिस या उसके बदले वेतन।'
    },
    'kn': {
        // UI elements
        '💰 Minimum Wages': '💰 ಕನಿಷ್ಠ ವೇತನ',
        '⚖️ Labour Laws': '⚖️ ಕಾರ್ಮಿಕ ಕಾನೂನುಗಳು',
        '📅 Holidays': '📅 ರಜಾದಿನಗಳು',
        'Key Regulations — ': 'ಪ್ರಮುಖ ನಿಯಮಗಳು — ',
        'Maximum Working Hours': 'ಗರಿಷ್ಠ ಕೆಲಸದ ಸಮಯ',
        'Overtime Rules': 'ಹೆಚ್ಚುವರಿ ಕೆಲಸದ ನಿಯಮಗಳು (ಓವರ್‌ಟೈಮ್)',
        'Earned Leave Policy': 'ಗಳಿಕೆ ರಜೆ (Earned Leave) ನೀತಿ',
        'Casual & Sick Leave': 'ಸಾಂದರ್ಭಿಕ ಮತ್ತು ಕಾಯಿಲೆ ರಜೆ',
        'Women Night Shift': 'ಮಹಿಳಾ ನೈಟ್ ಶಿಫ್ಟ್ ನಿಯಮಗಳು',
        'Termination Notice': 'ಕೆಲಸದಿಂದ ವಜಾಗೊಳಿಸುವ ನೋಟಿಸ್',
        'Does this apply to IT/Software companies?': 'ಇದು ಐಟಿ/ಸಾಫ್ಟ್‌ವೇರ್ ಕಂಪನಿಗಳಿಗೆ ಅನ್ವಯಿಸುತ್ತದೆಯೇ?',
        'Yes. IT companies, BPOs, and KPOs are classified as "Commercial Establishments". While some states grant IT companies 24×7 operation exemptions, the fundamental rights on working hours, overtime pay, and statutory leave still strictly apply.': 'ಹೌದು. ಐಟಿ ಕಂಪನಿಗಳು, ಬಿಪಿಒಗಳು ಮತ್ತು ಕೆಪಿಒಗಳನ್ನು ಅಂಗಡಿಗಳು ಮತ್ತು ಸಂಸ್ಥೆಗಳ ಕಾಯ್ದೆಯಡಿ "ವಾಣಿಜ್ಯ ಸಂಸ್ಥೆಗಳು" ಎಂದು ವರ್ಗೀಕರಿಸಲಾಗಿದೆ. ಕೆಲಸದ ಸಮಯ, ಓವರ್‌ಟೈಮ್ ಪಾವತಿ ಮತ್ತು ಶಾಸನಬದ್ಧ ರಜೆಗಳ ಮೂಲಭೂತ ಹಕ್ಕುಗಳು ಇನ್ನೂ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಅನ್ವಯಿಸುತ್ತವೆ.',
        'Mandatory Holidays — ': 'ಕಡ್ಡಾಯ ರಜಾದಿನಗಳು — ',
        'National & Festival Holidays': 'ರಾಷ್ಟ್ರೀಯ ಮತ್ತು ಹಬ್ಬದ ರಜಾದಿನಗಳು',
        '2026 Holiday Calendar — ': '2026 ರಜಾದಿನಗಳ ಕ್ಯಾಲೆಂಡರ್ — ',
        'Statutory national, state, and festival holidays.': 'ಶಾಸನಬದ್ಧ ರಾಷ್ಟ್ರೀಯ, ರಾಜ್ಯ ಮತ್ತು ಹಬ್ಬದ ರಜಾದಿನಗಳು.',
        'Date & Day': 'ದಿನಾಂಕ ಮತ್ತು ದಿನ',
        'Holiday Name': 'ರಜಾದಿನದ ಹೆಸರು',
        'Type': 'ಪ್ರಕಾರ',
        'National': 'ರಾಷ್ಟ್ರೀಯ',
        'State': 'ರಾಜ್ಯ',
        'Optional': 'ಐಚ್ಛಿಕ',
        'Your Minimum Wage Rights': 'ನಿಮ್ಮ ಕನಿಷ್ಠ ವೇತನದ ಹಕ್ಕುಗಳು',
        'Overtime at 2x:': 'ದ್ವಿಗುಣ ದರದಲ್ಲಿ (2x) ಓವರ್‌ಟೈಮ್',
        'No deductions below MW:': 'ಕನಿಷ್ಠ ವೇತನಕ್ಕಿಂತ ಕಡಿಮೆ ಕಡಿತವಿಲ್ಲ',
        'File a complaint:': 'ದೂರು ದಾಖಲಿಸಿ',
        'Category': 'ವರ್ಗ',
        'Per Day (₹)': 'ಪ್ರತಿ ದಿನ (₹)',
        'Per Month (₹)': 'ಪ್ರತಿ ತಿಂಗಳು (₹)',
        'Applies To': 'ಅನ್ವಯಿಸುವುದು',
        'Source:': 'ಆಧಾರ:',
        'Revised:': 'ಪರಿಷ್ಕೃತ:',
        'Reminder:': 'ನೆನಪೋಲೆ:',
        'Note:': 'ಸೂಚನೆ:',

        // Karnataka Texts
        'Karnataka': 'ಕರ್ನಾಟಕ',
        'Karnataka Shops and Commercial Establishments Act, 1961': 'ಕರ್ನಾಟಕ ಅಂಗಡಿಗಳು ಮತ್ತು ವಾಣಿಜ್ಯ ಸಂಸ್ಥೆಗಳ ಕಾಯ್ದೆ, 1961',
        '9 hours per day and 48 hours per week.': 'ದಿನಕ್ಕೆ 9 ಗಂಟೆಗಳು ಮತ್ತು ವಾರಕ್ಕೆ 48 ಗಂಟೆಗಳು.',
        'Double the normal rate of wages (2x). Total working hours including overtime cannot exceed 10 hours a day.': 'ಹೆಚ್ಚುವರಿ ಕೆಲಸದ ಪಾವತಿ ದ್ವಿಗುಣ (2x). ಓವರ್‌ಟೈಮ್ ಸೇರಿದಂತೆ ಒಟ್ಟು ಕೆಲಸದ ಸಮಯ ದಿನಕ್ಕೆ 10 ಗಂಟೆಗಳನ್ನು ಮೀರಬಾರದು.',
        '1 day of Earned Leave for every 20 days worked in the previous year.': 'ಹಿಂದಿನ ವರ್ಷದಲ್ಲಿ ಕೆಲಸ ಮಾಡಿದ ಪ್ರತಿ 20 ದಿನಗಳಿಗೆ 1 ದಿನದ ಗಳಿಕೆ ರಜೆ.',
        '12 days of Casual/Sick Leave per year (can be split).': 'ವರ್ಷಕ್ಕೆ 12 ದಿನಗಳ ಸಾಂದರ್ಭಿಕ/ಕಾಯಿಲೆ ರಜೆ (ವಿಭಜಿಸಬಹುದು).',
        'Women can work night shifts (8 PM to 6 AM) only if the employer provides mandatory transport (door-to-door) and adequate security.': 'ಉದ್ಯೋಗದಾತರು ಕಡ್ಡಾಯ ಸಾರಿಗೆ (ಮನೆ-ಮನೆಗೆ) ಮತ್ತು ಸಾಕಷ್ಟು ಭದ್ರತೆಯನ್ನು ಒದಗಿಸಿದರೆ ಮಾತ್ರ ಮಹಿಳೆಯರು ರಾತ್ರಿ ಪಾಳಿಯಲ್ಲಿ (ರಾತ್ರಿ 8 ರಿಂದ ಬೆಳಿಗ್ಗೆ 6 ರವರೆಗೆ) ಕೆಲಸ ಮಾಡಬಹುದು.',
        '1 month notice or pay in lieu is statutorily required for termination after 6 months of continuous service.': '6 ತಿಂಗಳ ನಿರಂತರ ಸೇವೆಯ ನಂತರ ವಜಾಗೊಳಿಸಲು 1 ತಿಂಗಳ ನೋಟಿಸ್ ಅಥವಾ ಅದಕ್ಕೆ ಬದಲಾಗಿ ವೇತನ ಅಗತ್ಯವಿದೆ.',
        'Mandatory holidays on Jan 26, Aug 15, Oct 2, Nov 1 (Rajyotsava), and May 1 (Labour Day), plus other festival holidays.': 'ಜನವರಿ 26, ಆಗಸ್ಟ್ 15, ಅಕ್ಟೋಬರ್ 2, ನವೆಂಬರ್ 1 (ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ) ಮತ್ತು ಮೇ 1 (ಕಾರ್ಮಿಕ ದಿನ) ಕಡ್ಡಾಯ ರಜಾದಿನಗಳಾಗಿವೆ.'
    }
};

export default function StateLawDetailPage() {
    const { stateSlug } = useParams();
    const stateData = getStateBySlug(stateSlug);
    const [activeTab, setActiveTab] = useState('wages');
    const [lang, setLang] = useState('en');

    useEffect(() => {
        // Reset language when switching states
        setLang('en');
    }, [stateSlug]);

    if (!stateData) return <Navigate to="/state-labour-laws" replace />;

    const hasTranslation = ['karnataka', 'delhi', 'maharashtra', 'haryana', 'uttar-pradesh'].includes(stateSlug);
    const translationLang = stateSlug === 'karnataka' ? 'kn' : 'hi';

    const t = (key) => {
        if (lang === 'en' || !hasTranslation) return key;
        return TRANSLATIONS[translationLang]?.[key] || key;
    };

    const relatedLinks = getAllStates()
        .filter(s => s.slug !== stateSlug)
        .slice(0, 3)
        .map(s => ({ title: `${s.name} Labour Laws`, subtitle: 'Shops & Establishments Act', path: `/state-labour-laws/${s.slug}` }));

    const TABS = [
        { id: 'wages',    label: t('💰 Minimum Wages'), icon: IndianRupee },
        { id: 'laws',     label: t('⚖️ Labour Laws'),   icon: ShieldCheck  },
        { id: 'holidays', label: t('📅 Holidays'),      icon: Calendar     },
    ];

    return (
        <div>
            <SEOHead path={`/state-labour-laws/${stateSlug}`} schema={{
                '@context': 'https://schema.org', '@type': 'Article',
                headline: `${stateData.name} Minimum Wages 2025 & Labour Laws`,
                description: stateData.description,
            }} />
            <Helmet>
                <title>{t(stateData.name)} Minimum Wages 2025 & Labour Laws | Employee Rights India</title>
                <meta name="description" content={`Official ${t(stateData.name)} minimum wages 2025 for IT, shops, factories. ${stateData.description}`} />
            </Helmet>

            <PageHero
                title={`${t(stateData.name)} ${t('⚖️ Labour Laws')}`}
                subtitle={`Minimum wages 2025 & employee rights under the ${t(stateData.actName)}`}
                icon={MapPin}
                gradient="blue"
            />

            <div className="py-10 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <Breadcrumb items={[
                            { label: 'State Labour Laws', path: '/state-labour-laws' },
                            { label: t(stateData.name), path: `/state-labour-laws/${stateSlug}` },
                        ]} />

                        {/* Translation Toggle Button */}
                        {hasTranslation && (
                            <button
                                onClick={() => setLang(l => l === 'en' ? translationLang : 'en')}
                                className="flex items-center gap-2 bg-white dark:bg-gray-950 border border-gray-250 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors shadow-soft"
                            >
                                <Globe className="w-4 h-4 text-primary" />
                                {lang === 'en' ? (translationLang === 'kn' ? 'ಕನ್ನಡದಲ್ಲಿ ಓದಿ' : 'हिन्दी में पढ़ें') : 'Read in English'}
                            </button>
                        )}
                    </div>

                    {/* ── TAB BAR ── */}
                    <div className="mt-8 flex gap-2 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 p-1.5 rounded-2xl shadow-soft w-full overflow-x-auto">
                        {TABS.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all ${
                                    activeTab === tab.id
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* ══════════════════════════════
                        TAB 1 — MINIMUM WAGES
                    ══════════════════════════════ */}
                    {activeTab === 'wages' && (
                        <div className="mt-8">
                            <div className="flex items-start gap-3 mb-6">
                                <div className="p-2.5 bg-green-100 dark:bg-green-900/40 text-green-600 rounded-xl flex-shrink-0">
                                    <IndianRupee className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                        {t(stateData.name)} {t('💰 Minimum Wages')} 2025
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                                        {t('Revised:')} {stateData.wageRevision} · {t('Source:')} {stateData.wageSource}
                                    </p>
                                </div>
                            </div>

                            {stateData.slug === 'delhi' ? (
                                <div className="mb-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 flex gap-3">
                                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-blue-700 dark:text-blue-300">
                                        <strong>{t('Note:')}</strong> Delhi has the highest minimum wages in India. The ₹783–₹1,035/day rates circulating on social media are <em>Delhi-specific</em> and do <strong>not</strong> apply to other states.
                                    </p>
                                </div>
                            ) : (
                                <div className="mb-5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700 rounded-xl p-4 flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-amber-700 dark:text-amber-400">
                                        <strong>{t('Reminder:')}</strong> The ₹783–₹1,035/day wages shown on social media are Delhi's rates and do <strong>not</strong> apply in {t(stateData.name)}.
                                    </p>
                                </div>
                            )}

                            <div className="space-y-6">
                                {stateData.wages?.map((sector, idx) => {
                                    const c = sectorColors[idx % sectorColors.length];
                                    return (
                                        <div key={idx} className={`rounded-2xl border ${c.border} overflow-hidden shadow-soft`}>
                                            <div className={`${c.header} text-white px-5 py-3`}>
                                                <h3 className="font-bold text-lg">{t(sector.sector)}</h3>
                                                <p className="text-sm opacity-80">{t(sector.note)}</p>
                                            </div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead className={c.bg}>
                                                        <tr className="text-left">
                                                            <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300">{t('Category')}</th>
                                                            <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300 text-right">{t('Per Day (₹)')}</th>
                                                            <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300 text-right">{t('Per Month (₹)')}</th>
                                                            <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300 hidden md:table-cell">{t('Applies To')}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white dark:bg-gray-950 divide-y divide-gray-100 dark:divide-gray-800">
                                                        {sector.rows.map((row, i) => (
                                                            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                                                                <td className="px-5 py-3 font-semibold text-gray-900 dark:text-gray-100">{t(row.category)}</td>
                                                                <td className="px-5 py-3 text-right font-bold text-gray-800 dark:text-gray-200">₹{row.daily.toLocaleString('en-IN')}</td>
                                                                <td className="px-5 py-3 text-right">
                                                                    <span className={`font-bold text-sm px-3 py-1 rounded-full ${c.badge}`}>
                                                                        ₹{row.monthly.toLocaleString('en-IN')}
                                                                    </span>
                                                                </td>
                                                                <td className="px-5 py-3 text-gray-500 dark:text-gray-400 text-xs hidden md:table-cell">{t(row.note)}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Rights summary */}
                            <div className="mt-6 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
                                <h4 className="font-bold text-green-800 dark:text-green-300 mb-3">⚖️ {t('Your Minimum Wage Rights')}</h4>
                                <ul className="space-y-2 text-sm text-green-700 dark:text-green-400">
                                    <li>• <strong>{t('Overtime at 2x:')}</strong> Work beyond 8–9 hrs/day must be paid at double rate.</li>
                                    <li>• <strong>{t('No deductions below MW:')}</strong> Even with fines/advances, take-home cannot fall below the minimum wage.</li>
                                    <li>• <strong>{t('File a complaint:')}</strong> If underpaid, file under Section 20 of the Minimum Wages Act at the nearest Labour Office.</li>
                                </ul>
                                <a href="https://labour.gov.in" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 mt-3 text-sm text-green-700 dark:text-green-400 font-medium hover:underline">
                                    <ExternalLink className="w-3.5 h-3.5" /> Ministry of Labour — Official MW Notifications
                                </a>
                            </div>
                        </div>
                    )}

                    {/* ══════════════════════════════
                        TAB 2 — LABOUR LAWS
                    ══════════════════════════════ */}
                    {activeTab === 'laws' && (
                        <div className="mt-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 rounded-xl">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                    {t('Key Regulations — ')}{t(stateData.name)}
                                </h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <LawCard icon={Clock}         title={t('Maximum Working Hours')}   description={t(stateData.maxWorkingHours)} />
                                <LawCard icon={AlertTriangle} title={t('Overtime Rules')}          description={t(stateData.overtime)} />
                                <LawCard icon={Calendar}      title={t('Earned Leave Policy')}     description={t(stateData.earnedLeave)} />
                                <LawCard icon={Calendar}      title={t('Casual & Sick Leave')}     description={t(stateData.casualSickLeave)} />
                                <LawCard icon={Moon}          title={t('Women Night Shift')}       description={t(stateData.womenNightShift)} />
                                <LawCard icon={FileText}      title={t('Termination Notice')}      description={t(stateData.noticePeriod)} />
                            </div>

                            <div className="mt-8 bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-soft">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">{t('Does this apply to IT/Software companies?')}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                    {t('Yes. IT companies, BPOs, and KPOs are classified as "Commercial Establishments". While some states grant IT companies 24×7 operation exemptions, the fundamental rights on working hours, overtime pay, and statutory leave still strictly apply.')}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* ══════════════════════════════
                        TAB 3 — HOLIDAYS
                    ══════════════════════════════ */}
                    {activeTab === 'holidays' && (
                        <div className="mt-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-purple-100 dark:bg-purple-900/40 text-purple-600 rounded-xl">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                    {t('Mandatory Holidays — ')}{t(stateData.name)}
                                </h2>
                            </div>

                            <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-soft mb-6">
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">{t('National & Festival Holidays')}</h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t(stateData.nationalHolidays)}</p>
                            </div>

                            <div className="mt-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-soft">
                                <div className="bg-purple-600 text-white px-5 py-4 flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-lg">{t('2026 Holiday Calendar — ')}{t(stateData.name)}</h3>
                                        <p className="text-xs opacity-90 mt-0.5">{t('Statutory national, state, and festival holidays.')}</p>
                                    </div>
                                    <span className="bg-white/20 text-white font-bold text-xs px-2.5 py-1 rounded-full">2026</span>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead className="bg-purple-50 dark:bg-purple-950/20 text-left">
                                            <tr>
                                                <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300">{t('Date & Day')}</th>
                                                <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300">{t('Holiday Name')}</th>
                                                <th className="px-5 py-3 font-bold text-gray-700 dark:text-gray-300 text-right">{t('Type')}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-950">
                                            {stateData.holidays2026?.map((h, i) => (
                                                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                                                    <td className="px-5 py-3">
                                                        <div className="font-bold text-gray-900 dark:text-gray-100">{h.date}</div>
                                                        <div className="text-xs text-gray-500 dark:text-gray-400">{h.day}</div>
                                                    </td>
                                                    <td className="px-5 py-3 font-semibold text-gray-800 dark:text-gray-200">
                                                        <span className="mr-2 text-base" role="img" aria-label="emoji">{h.emoji}</span>
                                                        <span>{t(h.name)}</span>
                                                    </td>
                                                    <td className="px-5 py-3 text-right">
                                                        <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                                                            h.type === 'National'
                                                                ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
                                                                : h.type === 'State'
                                                                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
                                                                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                                                        }`}>
                                                            {t(h.type)}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="mt-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700 rounded-xl p-5">
                                <p className="text-sm text-amber-700 dark:text-amber-400">
                                    <strong>⚠️ Important:</strong> If your employer asks you to work on a mandatory national holiday (Jan 26, Aug 15, Oct 2), 
                                    they <strong>must</strong> either give you compensatory off on another day OR pay you <strong>double wages (2x)</strong> for that day. 
                                    Refusing both is a labour law violation.
                                </p>
                            </div>
                        </div>
                    )}

                    <InternalLinks currentPath={`/state-labour-laws/${stateSlug}`} links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
