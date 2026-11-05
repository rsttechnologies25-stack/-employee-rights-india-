/**
 * allIndianStatesDirectory.js
 * Comprehensive directory of all 28 States and 8 Union Territories of India.
 * Includes statutory Shops & Establishments legislation, territorial jurisdiction,
 * official state labour department portals, and dispute filing bodies.
 */

export const ALL_INDIAN_JURISDICTIONS = [
    // ── SOUTH ZONE ──
    {
        name: 'Karnataka',
        type: 'State',
        zone: 'South',
        capitalHub: 'Bengaluru (Tech Corridor, Whitefield, Electronic City)',
        actName: 'Karnataka Shops and Commercial Establishments Act, 1961',
        portalUrl: 'https://labour.karnataka.gov.in',
        disputeAuthority: 'Joint/Assistant Labour Commissioner (ALC), Karmika Bhavana, Bengaluru',
        slug: 'karnataka',
        hasDetailedGuide: true
    },
    {
        name: 'Tamil Nadu',
        type: 'State',
        zone: 'South',
        capitalHub: 'Chennai (OMR, Guindy), Coimbatore, Madurai',
        actName: 'Tamil Nadu Shops and Establishments Act, 1947',
        portalUrl: 'https://labour.tn.gov.in',
        disputeAuthority: 'Deputy Commissioner of Labour (Appeals Section 41), DMS Complex, Teynampet',
        slug: 'tamil-nadu',
        customPath: '/tamil-nadu',
        hasDetailedGuide: true
    },
    {
        name: 'Telangana',
        type: 'State',
        zone: 'South',
        capitalHub: 'Hyderabad (HITEC City, Gachibowli, Madhapur)',
        actName: 'Telangana Shops and Establishments Act, 1988',
        portalUrl: 'https://labour.telangana.gov.in',
        disputeAuthority: 'Joint Labour Commissioner, Anjaneya Bhavan, RTC X Roads, Hyderabad',
        slug: 'telangana',
        hasDetailedGuide: true
    },
    {
        name: 'Andhra Pradesh',
        type: 'State',
        zone: 'South',
        capitalHub: 'Amaravati, Visakhapatnam (IT SEZ), Vijayawada',
        actName: 'Andhra Pradesh Shops and Establishments Act, 1988',
        portalUrl: 'https://labour.ap.gov.in',
        disputeAuthority: 'Deputy Commissioner of Labour, Auto Nagar, Vijayawada & Maharanipeta, Vizag',
        slug: 'andhra-pradesh',
        hasDetailedGuide: true
    },
    {
        name: 'Kerala',
        type: 'State',
        zone: 'South',
        capitalHub: 'Thiruvananthapuram (Technopark), Kochi (Infopark)',
        actName: 'Kerala Shops and Commercial Establishments Act, 1960',
        portalUrl: 'https://lc.kerala.gov.in',
        disputeAuthority: 'Labour Commissionerate, Thozhil Bhavan, Vikas Bhavan, Thiruvananthapuram',
        slug: 'kerala',
        hasDetailedGuide: true
    },
    {
        name: 'Puducherry',
        type: 'UT',
        zone: 'South',
        capitalHub: 'Puducherry, Karaikal',
        actName: 'Pondicherry Shops and Establishments Act, 1964',
        portalUrl: 'https://labour.py.gov.in',
        disputeAuthority: 'Labour Department, Government of Puducherry, Gandhi Nagar',
        slug: null,
        hasDetailedGuide: false
    },

    // ── NORTH ZONE ──
    {
        name: 'Delhi (NCT)',
        type: 'UT',
        zone: 'North',
        capitalHub: 'New Delhi (Connaught Place, Okhla, Nehru Place)',
        actName: 'Delhi Shops and Establishments Act, 1954',
        portalUrl: 'https://labour.delhi.gov.in',
        disputeAuthority: 'Joint Labour Commissioner, 5 Sham Nath Marg, Civil Lines, Delhi',
        slug: 'delhi',
        hasDetailedGuide: true
    },
    {
        name: 'Haryana',
        type: 'State',
        zone: 'North',
        capitalHub: 'Gurugram (Cyber City, Golf Course Rd), Faridabad, Panchkula',
        actName: 'Punjab Shops and Commercial Establishments Act, 1958 (as applied to Haryana)',
        portalUrl: 'https://hrylabour.gov.in',
        disputeAuthority: 'Labour Commissioner Haryana, 30 Bays Building, Sector 17, Chandigarh & ALC Gurugram',
        slug: 'haryana',
        hasDetailedGuide: true
    },
    {
        name: 'Uttar Pradesh',
        type: 'State',
        zone: 'North',
        capitalHub: 'Noida (Sector 62, Expressway), Greater Noida, Lucknow, Kanpur',
        actName: 'Uttar Pradesh Dookan Aur Vanijya Adhishthan Adhiniyam, 1962',
        portalUrl: 'https://uplabour.gov.in',
        disputeAuthority: 'Deputy Labour Commissioner, Sector 12, Noida & Labour Commissioner HQ Kanpur',
        slug: 'uttar-pradesh',
        hasDetailedGuide: true
    },
    {
        name: 'Punjab',
        type: 'State',
        zone: 'North',
        capitalHub: 'Mohali (IT City), Ludhiana, Amritsar',
        actName: 'Punjab Shops and Commercial Establishments Act, 1958',
        portalUrl: 'https://pblabour.gov.in',
        disputeAuthority: 'Labour Commissioner Punjab, Sector 17, Chandigarh',
        slug: 'punjab',
        hasDetailedGuide: true
    },
    {
        name: 'Rajasthan',
        type: 'State',
        zone: 'North',
        capitalHub: 'Jaipur (Sitapura, Malviya Nagar), Jodhpur, Udaipur',
        actName: 'Rajasthan Shops and Commercial Establishments Act, 1958',
        portalUrl: 'https://labour.rajasthan.gov.in',
        disputeAuthority: 'Labour Commissionerate, Hasanpura Road, Shanti Nagar, Jaipur',
        slug: 'rajasthan',
        hasDetailedGuide: true
    },
    {
        name: 'Himachal Pradesh',
        type: 'State',
        zone: 'North',
        capitalHub: 'Shimla, Baddi, Solan',
        actName: 'Himachal Pradesh Shops and Commercial Establishments Act, 1969',
        portalUrl: 'https://himachal.nic.in/labour',
        disputeAuthority: 'Labour Commissioner, New Himrus Building, Circular Road, Shimla',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Uttarakhand',
        type: 'State',
        zone: 'North',
        capitalHub: 'Dehradun, Haridwar, Pantnagar',
        actName: 'Uttar Pradesh Dookan Aur Vanijya Adhishthan Adhiniyam, 1962 (as adapted by UK)',
        portalUrl: 'https://labour.uk.gov.in',
        disputeAuthority: 'Labour Commissioner Uttarakhand, Nai Mandi, Haldwani & RLC Dehradun',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Jammu and Kashmir',
        type: 'UT',
        zone: 'North',
        capitalHub: 'Srinagar, Jammu',
        actName: 'Jammu and Kashmir Shops and Establishments Act, 1966',
        portalUrl: 'https://jklabour.gov.in',
        disputeAuthority: 'Labour Commissioner J&K, Rail Head Complex, Jammu / Batamaloo, Srinagar',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Ladakh',
        type: 'UT',
        zone: 'North',
        capitalHub: 'Leh, Kargil',
        actName: 'Jammu and Kashmir Shops and Establishments Act, 1966 (adapted for UT Ladakh)',
        portalUrl: 'https://ladakh.nic.in',
        disputeAuthority: 'Assistant Labour Commissioner, District Administrative Complex, Leh',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Chandigarh',
        type: 'UT',
        zone: 'North',
        capitalHub: 'Chandigarh (IT Park)',
        actName: 'Punjab Shops and Commercial Establishments Act, 1958 (UT Chandigarh)',
        portalUrl: 'https://chandigarh.gov.in',
        disputeAuthority: 'Labour Department, UT Secretariat, Sector 9, Chandigarh',
        slug: null,
        hasDetailedGuide: false
    },

    // ── WEST ZONE ──
    {
        name: 'Maharashtra',
        type: 'State',
        zone: 'West',
        capitalHub: 'Mumbai (BKC, Nariman Point), Pune (Hinjawadi, Magarpatta), Navi Mumbai',
        actName: 'Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017',
        portalUrl: 'https://mahakamgar.maharashtra.gov.in',
        disputeAuthority: 'Commissioner of Labour, Kamgar Bhavan, C-20, E-Block, Bandra Kurla Complex, Mumbai',
        slug: 'maharashtra',
        hasDetailedGuide: true
    },
    {
        name: 'Gujarat',
        type: 'State',
        zone: 'West',
        capitalHub: 'Ahmedabad (SG Highway), GIFT City (Gandhinagar), Surat, Vadodara',
        actName: 'Gujarat Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2019',
        portalUrl: 'https://labour.gujarat.gov.in',
        disputeAuthority: 'Office of the Commissioner of Labour, Shram Bhavan, Sector 10-B, Gandhinagar',
        slug: 'gujarat',
        hasDetailedGuide: true
    },
    {
        name: 'Goa',
        type: 'State',
        zone: 'West',
        capitalHub: 'Panaji, Margao, Verna Industrial Estate',
        actName: 'Goa, Daman and Diu Shops and Establishments Act, 1973',
        portalUrl: 'https://labour.goa.gov.in',
        disputeAuthority: 'Office of the Commissioner of Labour and Employment, Shram Shakti Bhavan, Patto, Panaji',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Dadra and Nagar Haveli and Daman and Diu',
        type: 'UT',
        zone: 'West',
        capitalHub: 'Daman, Silvassa',
        actName: 'Goa, Daman and Diu Shops and Establishments Act, 1973 (as applied)',
        portalUrl: 'https://ddd.gov.in',
        disputeAuthority: 'Labour Department, Collectorate Complex, Dholar, Moti Daman',
        slug: null,
        hasDetailedGuide: false
    },

    // ── EAST & NORTH-EAST ZONE ──
    {
        name: 'West Bengal',
        type: 'State',
        zone: 'East & NE',
        capitalHub: 'Kolkata (Salt Lake Sector V, New Town Rajarhat)',
        actName: 'West Bengal Shops and Establishments Act, 1963',
        portalUrl: 'https://wblc.gov.in',
        disputeAuthority: 'Labour Commissionerate, New Secretariat Buildings, 11th Floor, 1 K.S. Roy Road, Kolkata',
        slug: 'west-bengal',
        hasDetailedGuide: true
    },
    {
        name: 'Odisha',
        type: 'State',
        zone: 'East & NE',
        capitalHub: 'Bhubaneswar (Infocity), Cuttack, Rourkela',
        actName: 'Odisha Shops and Commercial Establishments Act, 1956',
        portalUrl: 'https://labdirodisha.gov.in',
        disputeAuthority: 'Office of the Labour Commissioner, Unit-3, Kharavel Nagar, Bhubaneswar',
        slug: 'odisha',
        hasDetailedGuide: true
    },
    {
        name: 'Bihar',
        type: 'State',
        zone: 'East & NE',
        capitalHub: 'Patna, Muzaffarpur, Gaya',
        actName: 'Bihar Shops and Establishments Act, 1953',
        portalUrl: 'https://labour.bih.nic.in',
        disputeAuthority: 'Labour Resources Department, Niyojan Bhawan, Bailey Road, Patna',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Jharkhand',
        type: 'State',
        zone: 'East & NE',
        capitalHub: 'Ranchi, Jamshedpur, Dhanbad',
        actName: 'Jharkhand Shops and Establishments Act, 2000',
        portalUrl: 'https://shramadhan.jharkhand.gov.in',
        disputeAuthority: 'Department of Labour, Employment & Training, Doranda, Ranchi',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Assam',
        type: 'State',
        zone: 'East & NE',
        capitalHub: 'Guwahati, Dibrugarh, Silchar',
        actName: 'Assam Shops and Establishments Act, 1971',
        portalUrl: 'https://labourcommissioner.assam.gov.in',
        disputeAuthority: 'Office of the Labour Commissioner, Shram Bhavan, Ulubari, Guwahati',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Sikkim',
        type: 'State',
        zone: 'East & NE',
        capitalHub: 'Gangtok',
        actName: 'Sikkim Shops and Commercial Establishments Act, 1983',
        portalUrl: 'https://sikkim.gov.in',
        disputeAuthority: 'Labour Department, Government of Sikkim, Gangtok',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Meghalaya',
        type: 'State',
        zone: 'East & NE',
        capitalHub: 'Shillong',
        actName: 'Meghalaya Shops and Establishments Act, 2003',
        portalUrl: 'https://meglabour.gov.in',
        disputeAuthority: 'Office of the Labour Commissioner, Lower Lachumiere, Shillong',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Tripura',
        type: 'State',
        zone: 'East & NE',
        capitalHub: 'Agartala',
        actName: 'Tripura Shops and Establishments Act, 1970',
        portalUrl: 'https://labour.tripura.gov.in',
        disputeAuthority: 'Labour Directorate, Jackson Gate, Agartala',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Mizoram',
        type: 'State',
        zone: 'East & NE',
        capitalHub: 'Aizawl',
        actName: 'Mizoram Shops and Establishments Act, 2010',
        portalUrl: 'https://lesde.mizoram.gov.in',
        disputeAuthority: 'Directorate of Labour, Tuikhuahtlang, Aizawl',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Manipur',
        type: 'State',
        zone: 'East & NE',
        capitalHub: 'Imphal',
        actName: 'Manipur Shops and Establishments Act, 1972',
        portalUrl: 'https://manipur.gov.in',
        disputeAuthority: 'Department of Labour, Lamphelpat, Imphal',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Nagaland',
        type: 'State',
        zone: 'East & NE',
        capitalHub: 'Kohima, Dimapur',
        actName: 'Nagaland Shops and Commercial Establishments Act, 1993',
        portalUrl: 'https://labour.nagaland.gov.in',
        disputeAuthority: 'Office of the Labour Commissioner, New Capital Complex, Kohima',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Arunachal Pradesh',
        type: 'State',
        zone: 'East & NE',
        capitalHub: 'Itanagar, Naharlagun',
        actName: 'Arunachal Pradesh Model Shops and Establishments Guidelines',
        portalUrl: 'https://arunachalpradesh.gov.in',
        disputeAuthority: 'Department of Labour & Employment, Government of Arunachal Pradesh, Itanagar',
        slug: null,
        hasDetailedGuide: false
    },

    // ── CENTRAL & ISLANDS ZONE ──
    {
        name: 'Madhya Pradesh',
        type: 'State',
        zone: 'Central & Islands',
        capitalHub: 'Indore (Vijay Nagar, Super Corridor), Bhopal, Gwalior, Jabalpur',
        actName: 'Madhya Pradesh Dookan Aur Sthapana Adhiniyam, 1958',
        portalUrl: 'https://labour.mp.gov.in',
        disputeAuthority: 'Labour Commissioner Office, Moti Bunglow, MG Road, Indore & DLC Bhopal',
        slug: 'madhya-pradesh',
        hasDetailedGuide: true
    },
    {
        name: 'Chhattisgarh',
        type: 'State',
        zone: 'Central & Islands',
        capitalHub: 'Raipur, Bhilai, Bilaspur',
        actName: 'Chhattisgarh Dookan Aur Sthapana Adhiniyam, 1958 (as adapted)',
        portalUrl: 'https://cglabour.nic.in',
        disputeAuthority: 'Office of the Labour Commissioner, Indravati Bhawan, Nawa Raipur Atal Nagar',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Andaman and Nicobar Islands',
        type: 'UT',
        zone: 'Central & Islands',
        capitalHub: 'Port Blair',
        actName: 'Andaman and Nicobar Islands Shops and Commercial Establishments Regulation, 2004',
        portalUrl: 'https://andaman.gov.in',
        disputeAuthority: 'Labour Department, Supply Line, Port Blair',
        slug: null,
        hasDetailedGuide: false
    },
    {
        name: 'Lakshadweep',
        type: 'UT',
        zone: 'Central & Islands',
        capitalHub: 'Kavaratti',
        actName: 'Central Shops & Commercial Establishments Model Framework',
        portalUrl: 'https://lakshadweep.gov.in',
        disputeAuthority: 'Office of the Collector and District Magistrate, UT of Lakshadweep, Kavaratti',
        slug: null,
        hasDetailedGuide: false
    }
];

export const ZONES = ['All', 'South', 'North', 'West', 'East & NE', 'Central & Islands'];
