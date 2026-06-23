export const tnHubData = {
    hero: {
        en: {
            title: "Tamil Nadu Mega-Hub",
            subtitle: "The ultimate guide to Employee Rights and Labour Laws in Tamil Nadu across all sectors.",
            toggleLabel: "Read in Tamil (தமிழ்)"
        },
        ta: {
            title: "தமிழ்நாடு தொழிலாளர் உரிமைகள் மையம்",
            subtitle: "தமிழ்நாட்டில் உள்ள அனைத்து துறைகளிலும் உள்ள தொழிலாளர் உரிமைகள் மற்றும் தொழிலாளர் சட்டங்களுக்கான முழுமையான வழிகாட்டி.",
            toggleLabel: "ஆங்கிலத்தில் படிக்க (English)"
        }
    },
    sectors: [
        {
            id: 'it-ites',
            icon: 'Laptop',
            color: 'blue',
            en: {
                title: "IT & ITES Sector",
                description: "Rules for Software Companies, BPOs, and Tech Startups in Chennai & Coimbatore.",
                content: {
                    workingHours: "8 hours/day or 48 hours/week. Exempted from strict opening/closing hour regulations.",
                    leaves: "1 day of Earned Leave for every 20 days worked. 12 days Casual Leave and 12 days Sick Leave annually.",
                    nightShift: "Women are permitted to work night shifts (8 PM to 6 AM) provided the employer guarantees safe door-to-door transport and security.",
                    termination: "1 month notice is mandatory after confirmation. IT employees CAN form unions and approach the Labour Court."
                }
            },
            ta: {
                title: "தகவல் தொழில்நுட்ப துறை (IT & ITES)",
                description: "சென்னை மற்றும் கோயம்புத்தூரில் உள்ள மென்பொருள் நிறுவனங்கள் மற்றும் BPO-களுக்கான விதிகள்.",
                content: {
                    workingHours: "ஒரு நாளைக்கு 8 மணிநேரம் அல்லது வாரத்திற்கு 48 மணிநேரம்.",
                    leaves: "வேலை செய்த ஒவ்வொரு 20 நாட்களுக்கும் 1 நாள் ஈட்டிய விடுப்பு (Earned Leave). ஆண்டுக்கு 12 தற்செயல் விடுப்பு (Casual) மற்றும் 12 மருத்துவ விடுப்பு (Sick Leave).",
                    nightShift: "பணியளிப்பவர் பாதுகாப்பான போக்குவரத்து மற்றும் பாதுகாப்பிற்கு உத்தரவாதம் அளித்தால் பெண்கள் இரவு ஷிப்டுகளில் (இரவு 8 மணி முதல் காலை 6 மணி வரை) வேலை செய்ய அனுமதிக்கப்படுவார்கள்.",
                    termination: "பணி நிரந்தரம் செய்யப்பட்ட பின் 1 மாத நோட்டீஸ் கட்டாயம். IT ஊழியர்கள் தொழிற்சங்கங்களை உருவாக்கலாம் மற்றும் தொழிலாளர் நீதிமன்றத்தை அணுகலாம்."
                }
            }
        },
        {
            id: 'manufacturing',
            icon: 'Factory',
            color: 'gray',
            en: {
                title: "Manufacturing & Factories",
                description: "Rules under the Factories Act for automobile, textile, and industrial workers.",
                content: {
                    workingHours: "Strictly 9 hours/day or 48 hours/week. Double pay (2x) for overtime.",
                    leaves: "1 day of Earned Leave for every 20 days worked. Minimum 9 days of paid festival/national holidays.",
                    safety: "Mandatory protective gear, clean drinking water, and immediate first-aid availability. Crèche facility mandatory if 30+ women are employed.",
                    termination: "Prior government permission required for layoffs if the factory employs more than 100/300 workers."
                }
            },
            ta: {
                title: "உற்பத்தி மற்றும் தொழிற்சாலைகள்",
                description: "வாகன, ஜவுளி மற்றும் தொழில்துறை தொழிலாளர்களுக்கான தொழிற்சாலைகள் சட்டத்தின் கீழ் உள்ள விதிகள்.",
                content: {
                    workingHours: "ஒரு நாளைக்கு 9 மணிநேரம் அல்லது வாரத்திற்கு 48 மணிநேரம். கூடுதல் நேரத்திற்கு (Overtime) இரட்டிப்பு ஊதியம்.",
                    leaves: "வேலை செய்த 20 நாட்களுக்கு 1 நாள் விடுப்பு. குறைந்தபட்சம் 9 நாட்கள் ஊதியத்துடன் கூடிய பண்டிகை/தேசிய விடுமுறைகள்.",
                    safety: "பாதுகாப்பு உபகரணங்கள், சுத்தமான குடிநீர் கட்டாயம். 30க்கும் மேற்பட்ட பெண்கள் பணிபுரிந்தால் குழந்தைகள் காப்பகம் (Crèche) கட்டாயம்.",
                    termination: "100/300க்கும் மேற்பட்ட தொழிலாளர்கள் பணிபுரிந்தால், பணிநீக்கம் செய்ய அரசின் முன் அனுமதி அவசியம்."
                }
            }
        },
        {
            id: 'shops',
            icon: 'Store',
            color: 'orange',
            en: {
                title: "Shops & Commercial Establishments",
                description: "Rules for retail stores, malls, restaurants, and local businesses.",
                content: {
                    workingHours: "8 hours/day. 1 day complete mandatory holiday per week.",
                    leaves: "12 days casual leave, 12 days sick leave, and 12 days annual leave.",
                    rightToSit: "Tamil Nadu uniquely passed the 'Right to Sit' act, mandating employers to provide seating facilities to shop workers to prevent continuous standing.",
                    termination: "Cannot terminate an employee with 6+ months of continuous service without 1 month notice or pay."
                }
            },
            ta: {
                title: "கடைகள் மற்றும் நிறுவனங்கள்",
                description: "சில்லறை விற்பனைக் கடைகள், மால்கள் மற்றும் உணவகங்களுக்கான விதிகள்.",
                content: {
                    workingHours: "ஒரு நாளைக்கு 8 மணிநேரம். வாரத்திற்கு 1 நாள் முழு விடுமுறை.",
                    leaves: "12 தற்செயல் விடுப்பு, 12 மருத்துவ விடுப்பு மற்றும் 12 வருடாந்திர விடுப்பு.",
                    rightToSit: "கடை ஊழியர்கள் தொடர்ந்து நிற்பதைத் தவிர்க்க இருக்கை வசதிகளை வழங்குவதை கட்டாயமாக்கும் 'அமரும் உரிமை' (Right to Sit) சட்டத்தை தமிழ்நாடு இயற்றியுள்ளது.",
                    termination: "6 மாதங்களுக்கும் மேலாக பணிபுரியும் ஊழியரை 1 மாத நோட்டீஸ் இல்லாமல் பணிநீக்கம் செய்ய முடியாது."
                }
            }
        },
        {
            id: 'construction',
            icon: 'HardHat',
            color: 'yellow',
            en: {
                title: "Construction & Migrant Workers",
                description: "Rights for daily wage laborers and inter-state migrant workers in TN.",
                content: {
                    wages: "Strict adherence to Tamil Nadu Minimum Wages. Wages must be paid directly to the worker, not just the contractor.",
                    safety: "Mandatory provision of helmets, safety nets, harnesses, and basic medical facilities on-site.",
                    welfareBoard: "Workers must be registered with the Tamil Nadu Construction Workers Welfare Board to receive accidental death and educational assistance.",
                    accommodation: "Contractors must provide safe, hygienic temporary accommodation with sanitation facilities."
                }
            },
            ta: {
                title: "கட்டுமானப் பணியாளர்கள்",
                description: "தினக்கூலி தொழிலாளர்கள் மற்றும் வெளிமாநில தொழிலாளர்களுக்கான உரிமைகள்.",
                content: {
                    wages: "குறைந்தபட்ச ஊதியத்தை கண்டிப்பாக வழங்க வேண்டும். ஒப்பந்ததாரருக்கு மட்டுமின்றி தொழிலாளிக்கு நேரடியாக ஊதியம் வழங்க வேண்டும்.",
                    safety: "ஹெல்மெட், பாதுகாப்பு வலைகள் மற்றும் அடிப்படை மருத்துவ வசதிகள் கட்டாயம்.",
                    welfareBoard: "விபத்து மரணம் மற்றும் கல்வி உதவியைப் பெற தமிழ்நாடு கட்டுமானத் தொழிலாளர்கள் நல வாரியத்தில் பதிவு செய்திருக்க வேண்டும்.",
                    accommodation: "பாதுகாப்பான, சுகாதாரமான தற்காலிக தங்குமிடத்தை ஒப்பந்ததாரர்கள் வழங்க வேண்டும்."
                }
            }
        }
    ],
    benefits: [
        {
            id: 'maternity',
            icon: 'Baby',
            en: {
                title: "Maternity Benefits (மகப்பேறு சலுகைகள்)",
                description: "26 weeks of paid maternity leave for all female employees (first two children). Additionally, the TN Government offers the Dr. Muthulakshmi Reddy Maternity Benefit Scheme, providing financial assistance of ₹18,000 for poor pregnant women."
            },
            ta: {
                title: "மகப்பேறு சலுகைகள் (Maternity Benefits)",
                description: "அனைத்து பெண் ஊழியர்களுக்கும் 26 வார ஊதியத்துடன் கூடிய மகப்பேறு விடுப்பு. கூடுதலாக, டாக்டர் முத்துலட்சுமி ரெட்டி மகப்பேறு உதவித் திட்டத்தின் கீழ் ஏழை கர்ப்பிணிப் பெண்களுக்கு ₹18,000 நிதியுதவி."
            }
        },
        {
            id: 'holidays',
            icon: 'CalendarDays',
            en: {
                title: "Mandatory State Holidays",
                description: "Under the TN Industrial Establishments Act, employers MUST grant paid holidays on Jan 26 (Republic Day), May 1 (May Day), Aug 15 (Independence Day), Oct 2 (Gandhi Jayanti). Usually, Pongal, Tamil New Year, and Diwali are also included as mandatory festival holidays."
            },
            ta: {
                title: "கட்டாய அரசு விடுமுறைகள்",
                description: "ஜனவரி 26 (குடியரசு தினம்), மே 1 (உழைப்பாளர் தினம்), ஆகஸ்ட் 15 (சுதந்திர தினம்), அக்டோபர் 2 (காந்தி ஜெயந்தி) ஆகிய நாட்களில் சம்பளத்துடன் கூடிய விடுமுறை கட்டாயம். பொங்கல், தமிழ் புத்தாண்டு மற்றும் தீபாவளி ஆகியவையும் இதில் அடங்கும்."
            }
        },
        {
            id: 'minimum-wage',
            icon: 'Banknote',
            en: {
                title: "Minimum Wages (2025)",
                description: "Tamil Nadu revises minimum wages frequently based on the Cost of Living Index. Employers paying less than the prescribed minimum wage for a specific schedule of employment can face criminal prosecution and hefty fines."
            },
            ta: {
                title: "குறைந்தபட்ச ஊதியம்",
                description: "தமிழ்நாடு அரசு வாழ்க்கைச் செலவுக் குறியீட்டின் அடிப்படையில் குறைந்தபட்ச ஊதியத்தை அடிக்கடி மாற்றியமைக்கிறது. நிர்ணயிக்கப்பட்ட குறைந்தபட்ச ஊதியத்தை விட குறைவாக வழங்கும் முதலாளிகள் மீது குற்றவியல் நடவடிக்கை பாயும்."
            }
        }
    ]
};
