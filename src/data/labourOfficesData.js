/**
 * labourOfficesData.js
 * Comprehensive district-level directory of State Labour Departments (ALC, DLC, JLC, Labour Commissioners)
 * and Central Sphere Regional Labour Commissioners (RLC Central) across major Indian economic hubs.
 */

export const LABOUR_DIRECTORY = {
    karnataka: [
        {
            sphere: 'State Sphere',
            district: 'Bengaluru Urban & Central (HQ)',
            office: 'Office of the Commissioner of Labour, Karnataka',
            jurisdiction: 'State-wide Labour Administration & Appellate Authority',
            address: 'Karmika Bhavana, ITI Compound, Near Dairy Circle, Bannerghatta Road, Bengaluru, Karnataka 560029',
            phone: '080-29753066 / 080-22256428',
            mail: 'labourcommissioner.ka@gmail.com',
            web: 'labour.karnataka.gov.in',
            mapsQuery: 'Karmika Bhavana Bannerghatta Road Bengaluru'
        },
        {
            sphere: 'State Sphere',
            district: 'Bengaluru Division-1 (East & IT Corridor)',
            office: 'Office of the Joint Labour Commissioner (Bengaluru Region 1)',
            jurisdiction: 'Whitefield, Mahadevapura, Bellandur, Electronic City, Sarjapur, Marathahalli',
            address: 'Karmika Bhavana, 2nd Floor, Bannerghatta Road, Bengaluru, Karnataka 560029',
            phone: '080-22256430',
            mail: 'jlcblr1@gmail.com',
            web: 'labour.karnataka.gov.in',
            mapsQuery: 'Karmika Bhavana Bannerghatta Road Bengaluru'
        },
        {
            sphere: 'State Sphere',
            district: 'Bengaluru Division-2 (North & West)',
            office: 'Office of the Joint Labour Commissioner (Bengaluru Region 2)',
            jurisdiction: 'Manyata Tech Park, Hebbal, Yeshwanthpur, Peenya Industrial Area, Malleshwaram',
            address: 'Karmika Bhavana, 3rd Floor, Bannerghatta Road, Bengaluru, Karnataka 560029',
            phone: '080-22256432',
            mail: 'jlcblr2@gmail.com',
            web: 'labour.karnataka.gov.in',
            mapsQuery: 'Karmika Bhavana Bannerghatta Road Bengaluru'
        },
        {
            sphere: 'State Sphere',
            district: 'Mysuru Division',
            office: 'Office of the Deputy Labour Commissioner, Mysuru',
            jurisdiction: 'Mysuru, Mandya, Chamarajanagar, Hassan, Kodagu',
            address: 'Karmika Bhavana, Akshaya Bhandar Circle, Kuvempunagar, Mysuru, Karnataka 570023',
            phone: '0821-2565651',
            mail: 'dlcmysore@gmail.com',
            web: 'labour.karnataka.gov.in',
            mapsQuery: 'Karmika Bhavana Kuvempunagar Mysuru'
        },
        {
            sphere: 'State Sphere',
            district: 'Mangaluru & Coastal Division',
            office: 'Office of the Assistant Labour Commissioner, Mangaluru',
            jurisdiction: 'Dakshina Kannada, Udupi, Karwar, Mangaluru SEZ',
            address: 'Karmika Bhavana, 1st Floor, Behind Kadri Police Station, Kadri, Mangaluru 575003',
            phone: '0824-2211516',
            mail: 'alcmangalore@gmail.com',
            web: 'labour.karnataka.gov.in',
            mapsQuery: 'Karmika Bhavana Kadri Mangaluru'
        },
        {
            sphere: 'Central Sphere (RLC Central)',
            district: 'Central Sphere — Bengaluru',
            office: 'Office of the Regional Labour Commissioner (Central)',
            jurisdiction: 'Nationalized Banks, Railways, PSUs, Defense Units, Major Telecom & SEZ Operators',
            address: 'Shram Kalyan Sadan, 3rd Main, 3rd Cross, II Phase, Yeshwanthpur Industrial Suburb, Goraguntepalya, Bengaluru 560022',
            phone: '080-23377151',
            mail: 'rlc-bengaluru-mole@gov.in',
            web: 'clc.gov.in',
            mapsQuery: 'Shram Kalyan Sadan Yeshwanthpur Goraguntepalya Bengaluru'
        }
    ],

    tamilnadu: [
        {
            sphere: 'State Sphere',
            district: 'Chennai (HQ & Appellate)',
            office: 'Office of the Commissioner of Labour, Tamil Nadu',
            jurisdiction: 'Headquarters & State-wide Administration',
            address: 'Tamil Nadu Labour Department, DMS Campus, Anna Salai, Teynampet, Chennai 600006',
            phone: '044-24321302 / 044-24321404',
            mail: 'colchennai@tn.gov.in',
            web: 'labour.tn.gov.in',
            mapsQuery: 'DMS Campus Anna Salai Teynampet Chennai'
        },
        {
            sphere: 'State Sphere',
            district: 'Chennai South & OMR Tech Corridor',
            office: 'Office of the Deputy Commissioner of Labour (Chennai South)',
            jurisdiction: 'OMR, Guindy Industrial Estate, Sholinganallur, Taramani, Velachery, Perungudi',
            address: 'Labour Department Complex, DMS Compound, Teynampet, Chennai 600006',
            phone: '044-24321448',
            mail: 'dclsouthchennai@tn.gov.in',
            web: 'labour.tn.gov.in',
            mapsQuery: 'DMS Campus Teynampet Chennai'
        },
        {
            sphere: 'State Sphere',
            district: 'Sriperumbudur & Kanchipuram (Industrial Belt)',
            office: 'Office of the Deputy Commissioner of Labour, Kanchipuram & Sriperumbudur',
            jurisdiction: 'Sriperumbudur Auto Hub, Oragadam, Maraimalai Nagar, Mahindra World City',
            address: 'District Collectorate Campus, Gandhi Nagar, Kanchipuram, Tamil Nadu 631501',
            phone: '044-27237890',
            mail: 'dclkanchipuram@tn.gov.in',
            web: 'labour.tn.gov.in',
            mapsQuery: 'District Collectorate Kanchipuram'
        },
        {
            sphere: 'State Sphere',
            district: 'Coimbatore Division',
            office: 'Office of the Deputy Commissioner of Labour, Coimbatore',
            jurisdiction: 'Coimbatore, Tiruppur, Erode, Nilgiris',
            address: 'Balasundaram Road, Near RTO Office, Gopalapuram, Coimbatore, Tamil Nadu 641018',
            phone: '0422-2241604',
            mail: 'dclcoimbatore@tn.gov.in',
            web: 'labour.tn.gov.in',
            mapsQuery: 'Balasundaram Road Coimbatore Labour Office'
        },
        {
            sphere: 'Central Sphere (RLC Central)',
            district: 'Central Sphere — Chennai',
            office: 'Office of the Regional Labour Commissioner (Central), Chennai',
            jurisdiction: 'Ports, Air Transport, Central PSUs, Nationalized Financial Institutions in TN',
            address: 'Shastri Bhavan, Block 5, 26 Haddows Road, Nungambakkam, Chennai 600006',
            phone: '044-28271778',
            mail: 'rlc-chennai-mole@gov.in',
            web: 'clc.gov.in',
            mapsQuery: 'Shastri Bhavan Haddows Road Chennai'
        }
    ],

    maharashtra: [
        {
            sphere: 'State Sphere',
            district: 'Mumbai (BKC Headquarters)',
            office: 'Office of the Commissioner of Labour, Maharashtra',
            jurisdiction: 'State-wide Labour Administration & Appellate Registry',
            address: 'Kamgar Bhavan, C-20, Block E, Bandra Kurla Complex (BKC), Bandra (East), Mumbai 400051',
            phone: '022-26573844 / 022-26573845',
            mail: 'commissioner.labour@maharashtra.gov.in',
            web: 'mahakamgar.maharashtra.gov.in',
            mapsQuery: 'Kamgar Bhavan BKC Bandra East Mumbai'
        },
        {
            sphere: 'State Sphere',
            district: 'Pune Division (Hinjewadi & Magarpatta)',
            office: 'Office of the Deputy Labour Commissioner, Pune',
            jurisdiction: 'Pune, Hinjewadi IT Park, Magarpatta, Hadapsar, Pimpri-Chinchwad, Chakan',
            address: 'Kamgar Bhavan, Near Pune Municipal Corporation, Wakdewadi, Shivajinagar, Pune 411005',
            phone: '020-25531235 / 020-25531236',
            mail: 'dlcpune@maharashtra.gov.in',
            web: 'mahakamgar.maharashtra.gov.in',
            mapsQuery: 'Kamgar Bhavan Wakdewadi Shivajinagar Pune'
        },
        {
            sphere: 'State Sphere',
            district: 'Thane & Navi Mumbai Division',
            office: 'Office of the Deputy Labour Commissioner, Thane',
            jurisdiction: 'Thane, Navi Mumbai (Airoli, Mahape, Turbhe IT Parks), Kalyan, Dombivli',
            address: 'Kamgar Bhavan, Wagle Industrial Estate, Road No. 16, Thane (West) 400604',
            phone: '022-25828450',
            mail: 'dlcthane@maharashtra.gov.in',
            web: 'mahakamgar.maharashtra.gov.in',
            mapsQuery: 'Kamgar Bhavan Wagle Industrial Estate Thane'
        },
        {
            sphere: 'Central Sphere (RLC Central)',
            district: 'Central Sphere — Mumbai',
            office: 'Office of the Regional Labour Commissioner (Central), Mumbai',
            jurisdiction: 'Central Government Establishments, ONGC, Jawaharlal Nehru Port, Reserve Bank',
            address: 'Shram Raksha Bhavan, Shivshrushti Road, Eastern Express Highway, Sion (East), Mumbai 400022',
            phone: '022-24072714',
            mail: 'rlc-mumbai-mole@gov.in',
            web: 'clc.gov.in',
            mapsQuery: 'Shram Raksha Bhavan Sion East Mumbai'
        }
    ],

    delhi: [
        {
            sphere: 'State Sphere',
            district: 'Delhi (HQ & Civil Lines)',
            office: 'Office of the Labour Commissioner, GNCTD',
            jurisdiction: 'State-wide Labour Administration (NCT of Delhi)',
            address: '5-Sham Nath Marg, Prema Kunj, Civil Lines, Delhi 110054',
            phone: '011-23951230 / 011-23967345',
            mail: 'labourcommissioner@delhi.gov.in',
            web: 'labour.delhi.gov.in',
            mapsQuery: '5 Sham Nath Marg Civil Lines Delhi'
        },
        {
            sphere: 'State Sphere',
            district: 'South Delhi & Okhla Industrial Area',
            office: 'Office of the Joint Labour Commissioner (South District)',
            jurisdiction: 'Okhla Industrial Area Phases 1-3, Saket, Nehru Place, Hauz Khas, Pushp Vihar',
            address: 'Labour Welfare Centre, Sector-4, Pushpa Vihar, New Delhi 110017',
            phone: '011-29562391',
            mail: 'jlcsouth.delhi@gov.in',
            web: 'labour.delhi.gov.in',
            mapsQuery: 'Sector 4 Pushpa Vihar New Delhi Labour Office'
        },
        {
            sphere: 'State Sphere',
            district: 'West & North-West Delhi',
            office: 'Office of the Joint Labour Commissioner (West District)',
            jurisdiction: 'Karampura, Kirti Nagar, Naraina, Rajouri Garden, Janakpuri',
            address: 'Labour Welfare Centre, F-Block, Karampura, New Delhi 110015',
            phone: '011-25460833',
            mail: 'jlcwest.delhi@gov.in',
            web: 'labour.delhi.gov.in',
            mapsQuery: 'Karampura Labour Welfare Centre New Delhi'
        },
        {
            sphere: 'Central Sphere (RLC Central)',
            district: 'Central Sphere — New Delhi',
            office: 'Office of the Chief Labour Commissioner (Central)',
            jurisdiction: 'Supreme Central Sphere Authority, Shram Shakti Bhawan',
            address: 'Shram Shakti Bhawan, Rafi Marg, Connaught Place, New Delhi 110001',
            phone: '011-23710446',
            mail: 'clc-delhi@nic.in',
            web: 'clc.gov.in',
            mapsQuery: 'Shram Shakti Bhawan Rafi Marg New Delhi'
        }
    ],

    telangana: [
        {
            sphere: 'State Sphere',
            district: 'Hyderabad & Secunderabad (HQ)',
            office: 'Office of the Commissioner of Labour, Telangana',
            jurisdiction: 'State-wide Administration & Conciliation Registry',
            address: 'Anjaya Karmika Bhavan, RTC Cross Roads, Musheerabad, Hyderabad, Telangana 500020',
            phone: '040-27615301 / 040-27615302',
            mail: 'comm_labour@telangana.gov.in',
            web: 'labour.telangana.gov.in',
            mapsQuery: 'Anjaya Karmika Bhavan RTC X Roads Musheerabad Hyderabad'
        },
        {
            sphere: 'State Sphere',
            district: 'Cyberabad & Ranga Reddy (IT Hub)',
            office: 'Office of the Joint Commissioner of Labour (Ranga Reddy & Cyberabad Zone)',
            jurisdiction: 'HITEC City, Gachibowli, Madhapur, Kondapur, Financial District, Kokapet',
            address: 'Chandravihar Complex, 4th Floor, MJ Road, Nampally / Ranga Reddy ZP Complex, Hyderabad 500001',
            phone: '040-24602854',
            mail: 'jclrngareddy@telangana.gov.in',
            web: 'labour.telangana.gov.in',
            mapsQuery: 'Chandravihar Complex Nampally Hyderabad'
        },
        {
            sphere: 'Central Sphere (RLC Central)',
            district: 'Central Sphere — Hyderabad',
            office: 'Office of the Regional Labour Commissioner (Central), Hyderabad',
            jurisdiction: 'Central PSUs, Defense Establishments, Nationalized Financial Institutions',
            address: 'Kendriya Sadan, Block 3, 2nd Floor, Sultan Bazar, Koti, Hyderabad 500095',
            phone: '040-24653778',
            mail: 'rlc-hyd-mole@gov.in',
            web: 'clc.gov.in',
            mapsQuery: 'Kendriya Sadan Sultan Bazar Koti Hyderabad'
        }
    ],

    haryana: [
        {
            sphere: 'State Sphere',
            district: 'Gurugram Division (Cyber City & Udyog Vihar)',
            office: 'Office of the Deputy Labour Commissioner, Gurugram Circle 1 & 2',
            jurisdiction: 'DLF Cyber City, Golf Course Road, Udyog Vihar Phases 1-5, Manesar Industrial Area',
            address: 'Karmik Bhawan, Sector-12, Near Bus Stand, Gurugram, Haryana 122001',
            phone: '0124-2321530 / 0124-2322540',
            mail: 'dlcgurugram.hry@gov.in',
            web: 'hrylabour.gov.in',
            mapsQuery: 'Karmik Bhawan Sector 12 Gurugram'
        },
        {
            sphere: 'State Sphere',
            district: 'Faridabad Division',
            office: 'Office of the Deputy Labour Commissioner, Faridabad',
            jurisdiction: 'Faridabad Industrial Area, Ballabgarh, Palwal',
            address: 'Labour Welfare Complex, BK Chowk, Sector-23, Faridabad, Haryana 121005',
            phone: '0129-2231530',
            mail: 'dlcfaridabad.hry@gov.in',
            web: 'hrylabour.gov.in',
            mapsQuery: 'Labour Welfare Complex Sector 23 Faridabad'
        }
    ],

    uttarpradesh: [
        {
            sphere: 'State Sphere',
            district: 'Noida (Gautam Buddha Nagar)',
            office: 'Office of the Deputy Labour Commissioner, Gautam Buddha Nagar',
            jurisdiction: 'Noida Sectors 1-150, Noida Expressway, Greater Noida Knowledge Park, Yamuna Expressway',
            address: 'Labour Welfare Centre, Sector-3, Near Harola, Noida, Uttar Pradesh 201301',
            phone: '0120-2442430 / 0120-2442431',
            mail: 'dlcnoida.up@gov.in',
            web: 'uplabour.gov.in',
            mapsQuery: 'Sector 3 Near Harola Noida Labour Office'
        },
        {
            sphere: 'State Sphere',
            district: 'Ghaziabad Division',
            office: 'Office of the Deputy Labour Commissioner, Ghaziabad',
            jurisdiction: 'Ghaziabad, Sahibabad Industrial Area, Raj Nagar Extension',
            address: 'C-Block, Kavi Nagar, Near Old Bus Stand, Ghaziabad, Uttar Pradesh 201002',
            phone: '0120-2712530',
            mail: 'dlcghaziabad.up@gov.in',
            web: 'uplabour.gov.in',
            mapsQuery: 'Kavi Nagar Ghaziabad Labour Office'
        }
    ],

    gujarat: [
        {
            sphere: 'State Sphere',
            district: 'Gandhinagar (State HQ)',
            office: 'Office of the Commissioner of Labour, Gujarat',
            jurisdiction: 'State-wide Labour Administration',
            address: 'Shram Bhavan, 2nd Floor, Sector-10/B, Near CHH-3 Circle, Gandhinagar, Gujarat 382010',
            phone: '079-23253531 / 079-23253532',
            mail: 'col-labour@gujarat.gov.in',
            web: 'col.gujarat.gov.in',
            mapsQuery: 'Shram Bhavan Sector 10B Gandhinagar'
        },
        {
            sphere: 'State Sphere',
            district: 'Ahmedabad Division',
            office: 'Office of the Deputy Labour Commissioner, Ahmedabad',
            jurisdiction: 'Ahmedabad Urban, Sanand Auto Hub, Changodar, SG Highway',
            address: 'Bahumali Bhavan, 6th Floor, Near Lal Darwaja, Khanpur, Ahmedabad, Gujarat 380001',
            phone: '079-25507421',
            mail: 'dlc-ahmedabad@gujarat.gov.in',
            web: 'col.gujarat.gov.in',
            mapsQuery: 'Bahumali Bhavan Lal Darwaja Ahmedabad'
        }
    ],

    westbengal: [
        {
            sphere: 'State Sphere',
            district: 'Kolkata Central (HQ)',
            office: 'Office of the Labour Commissioner, West Bengal',
            jurisdiction: 'State-wide Administration & Conciliation Division',
            address: 'New Secretariat Buildings, 11th Floor, 1, K.S. Roy Road, Kolkata 700001',
            phone: '033-22625301 / 033-22625302',
            mail: 'lcwb@wb.gov.in',
            web: 'wblabour.gov.in',
            mapsQuery: 'New Secretariat Buildings KS Roy Road Kolkata'
        },
        {
            sphere: 'State Sphere',
            district: 'Salt Lake & Sector V (IT Hub)',
            office: 'Office of the Deputy Labour Commissioner (Bidhannagar / North 24 Parganas)',
            jurisdiction: 'Sector V, Salt Lake, New Town Rajarhat, Bidhannagar',
            address: 'Bikash Bhavan, 6th Floor, Salt Lake, Kolkata, West Bengal 700091',
            phone: '033-23348123',
            mail: 'dlcbidhannagar.wb@gov.in',
            web: 'wblabour.gov.in',
            mapsQuery: 'Bikash Bhavan Salt Lake Kolkata'
        }
    ],

    kerala: [
        {
            sphere: 'State Sphere',
            district: 'Thiruvananthapuram (HQ)',
            office: 'Office of the Labour Commissioner, Kerala',
            jurisdiction: 'State-wide Labour Administration',
            address: 'Labour Commissionerate, Thozhil Bhavan, Vikas Bhavan P.O., Thiruvananthapuram 695033',
            phone: '0471-2301530',
            mail: 'lc@kerala.gov.in',
            web: 'lc.kerala.gov.in',
            mapsQuery: 'Thozhil Bhavan Vikas Bhavan Thiruvananthapuram'
        },
        {
            sphere: 'State Sphere',
            district: 'Kochi & Ernakulam (Infopark)',
            office: 'Office of the District Labour Officer, Ernakulam',
            jurisdiction: 'Kochi, Kakkanad Infopark, Kalamassery, Willingdon Island',
            address: 'Civil Station, 2nd Floor, Kakkanad, Ernakulam, Kerala 682030',
            phone: '0484-2422262',
            mail: 'dloekm.labour@kerala.gov.in',
            web: 'lc.kerala.gov.in',
            mapsQuery: 'Civil Station Kakkanad Ernakulam'
        }
    ],

    andhrapradesh: [
        {
            sphere: 'State Sphere',
            district: 'Vijayawada (HQ & Capital Region)',
            office: 'Office of the Commissioner of Labour, Andhra Pradesh',
            jurisdiction: 'State-wide Labour Department',
            address: 'AP Labour Commissionerate, Industrial Estate, Auto Nagar, Vijayawada, Andhra Pradesh 520007',
            phone: '0866-2541604',
            mail: 'aplabourcomm@gmail.com',
            web: 'labour.ap.gov.in',
            mapsQuery: 'Auto Nagar Vijayawada Labour Commissioner'
        },
        {
            sphere: 'State Sphere',
            district: 'Visakhapatnam (Steel & Tech Hub)',
            office: 'Office of the Deputy Commissioner of Labour, Visakhapatnam',
            jurisdiction: 'Visakhapatnam IT SEZ, Rushikonda, Gajuwaka, Anakapalli',
            address: 'Old Collectorate Building, Maharanipeta, Visakhapatnam, Andhra Pradesh 530002',
            phone: '0891-2564240',
            mail: 'dclvizag.ap@gmail.com',
            web: 'labour.ap.gov.in',
            mapsQuery: 'Old Collectorate Maharanipeta Visakhapatnam'
        }
    ]
};

export const DIRECTORY_STATES = [
    { slug: 'karnataka', name: 'Karnataka' },
    { slug: 'tamilnadu', name: 'Tamil Nadu' },
    { slug: 'maharashtra', name: 'Maharashtra' },
    { slug: 'delhi', name: 'Delhi NCR' },
    { slug: 'telangana', name: 'Telangana' },
    { slug: 'haryana', name: 'Haryana (Gurugram)' },
    { slug: 'uttarpradesh', name: 'Uttar Pradesh (Noida)' },
    { slug: 'gujarat', name: 'Gujarat' },
    { slug: 'westbengal', name: 'West Bengal (Kolkata)' },
    { slug: 'kerala', name: 'Kerala (Kochi/TVM)' },
    { slug: 'andhrapradesh', name: 'Andhra Pradesh' }
];
