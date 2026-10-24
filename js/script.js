// Centralized Lightweight Image Map (Inlined once for ultra-fast load)
    const IMG_ASSETS = {
      hero_village: "assets/hero_village.jpg",
      ganga_river: "assets/ganga_river.jpg",
      agriculture: "assets/agriculture.jpg",
      menthol_crop: "assets/menthol_crop.jpg",
      temple: "assets/temple.jpg",
      durgasthan: "assets/durgasthan.jpg",
      school: "assets/school.jpg",
      aanganbari: "assets/aanganbari.jpg",
      mosque: "assets/mosque.jpg",
      madrasa: "assets/madrasa.jpg",
      market_nh80: "assets/market_nh80.jpg",
      gramin_bank: "assets/gramin_bank.jpg",
      police_station: "assets/police_station.jpg"
    };
    // 1. Hero Slider Data (Replaces NivoSlider 9 banners)
    const HERO_SLIDES = [
      {
        title: "Welcome to Mednichowki Village",
        desc: "Named in memory of Medania, whose home welcomed every child in the village to play. Situated on the banks of the Ganga River and NH-80 in Lakhisarai District, Bihar.",
        badge: "Village Panorama & Ganga Bank",
        caption: "Scenic banks of the sacred Ganga River & NH-80 in Suryagarha Block",
        img: IMG_ASSETS.hero_village,
        navTarget: "places"
      },
      {
        title: "Menthol, Pulse & Wheat Farming",
        desc: "Pioneered by Zila Parishad Amit Sagar, menthol plant cultivation thrives alongside export-grade Arhar & Masoor pulses, Gram (Chana), Wheat, and sweet Matar peas.",
        badge: "Agriculture & Rural Economy",
        caption: "Fertile agricultural fields of Mednichowki along the Ganga plain",
        img: IMG_ASSETS.agriculture,
        navTarget: "agriculture"
      },
      {
        title: "150+ Year Old Chandisthan & Durgasthan",
        desc: "Home to the historic Chandisthan temple built under a mango and 20+ year old peepal tree with support from Dashrath Mahto, and the 1952 Mata Durga Temple.",
        badge: "Sacred Village Heritage",
        caption: "Historic 150+ year old Chandisthan & 1952 Durgasthan Temple",
        img: IMG_ASSETS.temple,
        navTarget: "places"
      },
      {
        title: "#1 Ranked Primary School & Aanganbari Kendra",
        desc: "Serving 250 primary students under Principal Lalita Kumari (founded ~1950 under first Principal Dhaneshwari Devi) and 40 children at the 2004 Aanganbari Kendra.",
        badge: "Education & Child Welfare",
        caption: "Ranked #1 Primary School in Suryagarha Block, Lakhisarai",
        img: IMG_ASSETS.school,
        navTarget: "places"
      },
      {
        title: "Historic 1946 Mosque & Licensed Madrasa",
        desc: "Shifted from the Ganga bank to central Mednichowki in 1946 on Muharram, alongside the Madrasa & Hostel educating 135 students under Principal Hafiz Mohammad Iqramul Haq.",
        badge: "Harmony & Learning",
        caption: "Central Mednichowki Masjid (1946) & Madrasa Hostel (1999)",
        img: IMG_ASSETS.mosque,
        navTarget: "places"
      },
      {
        title: "NH-80 Market, Gramin Bank & Police Station",
        desc: "Bihar Kshetriya Gramin Bank (serving 60% of villagers under Manager Anil Kumar) and Mednichowki Police Station in the heart of the market.",
        badge: "Civic & Financial Hub",
        caption: "Bustling NH-80 Market, Gramin Bank & Police Station",
        img: IMG_ASSETS.market_nh80,
        navTarget: "places"
      }
    ];

    // 2. All 7 Specialized Places Data (aanganbari.html, school.html, police.html, bank.html, madarsa.html, temple.html, mosque.html)
    const PLACES_DATA = [
      {
        id: "aanganbari",
        name: "Aanganbari Kendra",
        established: "Opened in 2004",
        badge: "40 Children Enrolled",
        img: IMG_ASSETS.aanganbari,
        driveUrl: "https://drive.google.com/file/d/1GDQ3RnVZvGah9dCCytNql60rRG-6wa5S/view",
        origFile: "Mednichowki • Suryagarha Block, Lakhisarai",
        summary: "An educative center opened by the government in 2004 where children under 5 years of age from every section of society come to study and receive nutritious meals.",
        details: [
          "Total Students Studying: 40 children (below 5 years of age).",
          "Sevika (Management & Care): Mita Kumari manages and teaches all the children.",
          "Head / Supervisor: Shikha Devi oversees the Aanganbari Kendra.",
          "Cook (Sahayika): Manju Kumari prepares fresh meals for all 40 children daily."
        ]
      },
      {
        id: "school",
        name: "Primary School, Mednichowki",
        established: "Shifted ~1950 (Front of Durgasthan)",
        badge: "#1 Ranked in Block • 250 Students",
        img: IMG_ASSETS.school,
        driveUrl: "https://drive.google.com/file/d/1QPj5vHH07AXQYAkDOOP-EYVCnQ77gObH/view",
        origFile: "In Front of Durgasthan • Mednichowki",
        summary: "Originally located inside the market, the Primary School shifted behind the market in front of Durgasthan around 1950 and is ranked first in the entire block.",
        details: [
          "First Principal: Dhaneshwari Devi.",
          "Present Principal: Lalita Kumari oversees all school responsibilities.",
          "Enrollment & Faculty: 250 students (up to 5th Standard, with a higher percentage of girls) taught by 6 teachers.",
          "Co-Curricular & Future Plans: Organizes cultural activities and plans to open a hostel facility for poor and physically disabled students."
        ]
      },
      {
        id: "police",
        name: "Mednichowki Police Station (Thana)",
        established: "Case Registration since 2010",
        badge: "Former Panchayat Bhawan Site",
        img: IMG_ASSETS.police_station,
        driveUrl: "https://drive.google.com/file/d/1nuUPoQnsjL1YphPB7W6lB6P2haOVoe_M/view",
        origFile: "NH-80 Corridor • Mednichowki Thana",
        summary: "Situated on land of the first Mukhiya of Mednichowki where the Panchayat Bhawan originally stood; established after a serious incident where policemen were shot by criminals.",
        details: [
          "First Head Officer-in-Charge (2010): Sambhu Saran Prasad (when formal case registration began).",
          "Present Head Officer-in-Charge: Surendra Prasad Singh (posted for ~1 year).",
          "Sub Officer-in-Charge: Mithlesh Kumar (posted for 3–4 months).",
          "Supporting Officers: ASI Video Kisku, ASI Rajendra Kumar Mishra, Thanedar, Jamedar, Chowkidars, and a Munsi serving for ~10 years."
        ]
      },
      {
        id: "bank",
        name: "Bihar Kshetriya Gramin Bank",
        established: "Sponsored by UCO Bank",
        badge: "60% Village Population Enrolled",
        img: IMG_ASSETS.gramin_bank,
        driveUrl: "https://drive.google.com/file/d/1L4tyiX09MrFAfFe5IogTsbXdc0-x0C4M/view",
        origFile: "Mednichowki Market • UCO Bank Sponsored",
        summary: "Situated right in the middle of Mednichowki Market (UCO Bank Sponsored, Govt. of India Undertaking) with Safe Deposit Lockers available.",
        details: [
          "Branch Manager: Anil Kumar.",
          "Key Financial Schemes: Jama Yojanas, Gram Lakshmi Yojanas, Gramin Nagdi Praman Patra, and Gramdhan Lakshmi Yojanas.",
          "Financial Inclusion: Approximately 60% of the population of Mednichowki holds a bank account here."
        ]
      },
      {
        id: "madarsa",
        name: "Madrasa & Student Hostel",
        established: "35–40 Years History • Building Built 1999",
        badge: "135 Students (35 Hostel + 100 Local)",
        img: IMG_ASSETS.madrasa,
        driveUrl: "https://drive.google.com/file/d/1sVhv7_xFnKZq72vN590uybqoFSo2ipJt/view",
        origFile: "Mednichowki • Residential & Day Madrasa",
        summary: "Serving poor Muslim children in Mednichowki for 35–40 years; originally operated on a roof before its permanent building was constructed in 1999.",
        details: [
          "First Teacher: Hafez Tayeeb Ansari.",
          "Present Principal: Hafiz Mohammad Iqramul Haq (serving for 6.5 years; first principal after the Madrasa received its proper license).",
          "Hostel & Day Scholars: 35 outstation students reside in the Madrasa hostel, and 100 local children attend daily.",
          "Curriculum: Special subject Urdu is taught up to Muqamal."
        ]
      },
      {
        id: "temple",
        name: "Temples — Chandisthan & Durgasthan",
        established: "Chandisthan (150+ Yrs) • Durgasthan (1952)",
        badge: "Annual Durga Puja Fair",
        img: IMG_ASSETS.temple,
        driveUrl: "https://drive.google.com/file/d/1mSBayVRewtuAYp9Stzs7Al7lWBJDKhg5/view",
        origFile: "Chandisthan & Durgasthan • Mednichowki",
        summary: "Two revered temples anchoring the spiritual life of Mednichowki: 150+ year old Chandisthan and the 1952 Mata Durga Temple.",
        details: [
          "Chandisthan (150+ Years Old): Built by villagers in memory of a kind pandit who worshipped under a mango tree, with major construction support from Dashrath Mahto; features a 20+ year old Peepal tree.",
          "Durgasthan (Built 1952): Constructed in Mednichowki after an incident involving Natho Saw and people of Kiranpur village, with villagers contributing generous land.",
          "Durga Puja Mela: Every year during Durga Puja, a grand fair takes place in front of the temple drawing huge crowds."
        ]
      },
      {
        id: "mosque",
        name: "Mosque (Masjid) of Mednichowki",
        established: "Shifted to Market in 1946",
        badge: "Daily 4-Time Namaz & Nikah",
        img: IMG_ASSETS.mosque,
        driveUrl: "https://drive.google.com/file/d/1-yeKtRcJ3RXrVVwwXDziA2FddtzKQzWk/view",
        origFile: "Central Mednichowki • Est. 1946",
        summary: "Originally situated on the bank of the River Ganga, the Mosque was built in the middle of Mednichowki in 1946 on the occasion of Muharram by the Muslim committee on the site of a former Imam Bara.",
        details: [
          "First Imam: Ramzan Maulvi Saheb (as recounted by village elders).",
          "Present Imam: Hafiz Mohammad Iqramul Haq, who leads prayers and solemnizes Muslim marriages (Nikah).",
          "Worship: Namaz is offered four times daily and on all Muslim festivals."
        ]
      }
    ];

    // 3. All 5 Panchayat Leadership Tiers (person.html)
    const LEADERS_DATA = [
      {
        category: "zila",
        post: "ZILA PARISHAD",
        currentHolder: "Amit Sagar",
        tenure: "Serving 1.5 Years (Present)",
        jurisdiction: "Rasalpur to Manikpur (6 Panchayats: Tajpur, Vansipur, Khaba Rajpur, Kiranpur, Abgil Rampur & Khawadpur)",
        img: IMG_ASSETS.agriculture,
        driveUrl: "https://drive.google.com/file/d/1f9nbreojwHUMyn1sUmSsVqq8Ss-0D54K/view",
        predecessors: "Preceded by Manoj Kumar of Manikpur (served for 10 years after the Gram Panchayati Raj Act).",
        family: "Grandson of Ram Chandra Prasad Mahto.",
        highlights: [
          "Leads district-level development plans across all 6 Panchayats with the support of Panchayat Samitis, completing one Panchayat systematically before moving to the next.",
          "Pioneered Menthol Plant farming in Mednichowki and advances major farmer yojanas, tree plantation (with the Mukhiya), and education reforms.",
          "Notes that Mednichowki's rapid development graph gives it the capacity to become a separate administrative block."
        ]
      },
      {
        category: "pramukh",
        post: "PRAMUKH (SURYAGARHA PRAKHAND)",
        currentHolder: "Ms. Nita Devi",
        tenure: "Present Pramukh (28 Panchayats)",
        jurisdiction: "Suryagarha Prakhand (28 Panchayats including Mednichowki)",
        img: IMG_ASSETS.market_nh80,
        driveUrl: "https://drive.google.com/file/d/1szjt3JZsDg4Pl7AXRcFElph8LSxW1XYC/view",
        predecessors: "First Pramukh after the Gram Panchayati Raj Act was Praveen Kumar (won in 2001).",
        family: "Daughter of Nageshwar Prasad Singh; wife of Jawahar Prasad Singh.",
        highlights: [
          "Assigns and supervises block-level development yojanas handed over to the Panchs across all 28 Panchayats.",
          "Prioritizes yojanas focused on Education (Shiksha), Roads (Sadak), Electricity (Bijli), and Agriculture (Krishi)."
        ]
      },
      {
        category: "mukhiya",
        post: "MUKHIYA (KHAWBA JAPANI GRAM PANCHAYAT)",
        currentHolder: "Madhvi Lata",
        tenure: "Serving since 2006 – Present",
        jurisdiction: "Khawba Japani Gram Panchayat (Kiranpur to Amarpur)",
        img: IMG_ASSETS.hero_village,
        driveUrl: "https://drive.google.com/file/d/1uchoL9FMR4E4-oFefsp7Kp-tiIGhY-vI/view",
        predecessors: "1st Mukhiya: Ram Kishun Prasad Verma (served continuously for 39 years until his passing in 1998; Up-Mukhiya 1967–1998 was Jagdish Mahto). 2nd Mukhiya: His son Vijay Kumar Verma (2001–2006).",
        family: "Wife of Vijay Kumar Verma; daughter of Hari Prasad Mahto (elected in 2006 when the seat was reserved for women).",
        highlights: [
          "Ram Kishun Prasad Verma served 39 uninterrupted years as the founding Mukhiya before passing away in 1998 due to sudden heart attack.",
          "Infrastructure Pioneer: Lalit Narayan Singh ('Laloo Jee'), as a member of the Telephone Advisory Committee in 1984, applied for electrical power and telecommunications—bringing telephone lines to the area in 1998."
        ]
      },
      {
        category: "sarpanch",
        post: "SARPANCH (GRAM KACHHARI)",
        currentHolder: "Sushila Devi",
        tenure: "Serving since 22 May 2011 (with 11 Panchs)",
        jurisdiction: "Gram Kachhari (Village Justice & Ration Card Oversight)",
        img: IMG_ASSETS.school,
        driveUrl: "https://drive.google.com/file/d/17IhenbRkM9Jvqdbsqe68zFRhvXEZEfdJ/view",
        predecessors: "1st Sarpanch: Late Basudeo Mahto (s/o Sri Badri Mahto, Vill: Khawba; died 1963). 2nd Sarpanch: Vishnu Deo Mahto (born 1943, s/o Lt. Sadhu Mahto, Amarpur High School alumnus; served 20 years winning two elections).",
        family: "Wife of Prof. Dinesh Prasad Verma (MA, LLB). Late Basudeo Mahto's grandson Capt. Banke Bihari Mahto served in the Indian Army (1976 – 31 Jan 2009) and became Project Manager at Megha Developer Pvt. Ltd., West Bengal.",
        highlights: [
          "Delivers grassroots justice through the Gram Kachhari with 11 Panchs.",
          "Oversees Ration Card facilities and community welfare schemes."
        ]
      },
      {
        category: "samiti",
        post: "PANCHAYAT SAMITI",
        currentHolder: "Manoj Das",
        tenure: "Serving since May 2011 – Present",
        jurisdiction: "Block & Panchayat Scheme Implementation",
        img: IMG_ASSETS.gramin_bank,
        driveUrl: "https://drive.google.com/file/d/1S4iR7W6vWR02OEdI9t3YAAuPhFUvAeDD/view",
        predecessors: "1st Panchayat Samiti (2001–2005): Sanju Kumari / Sanju Devi (d/o Sri Tilakdhari Mahto, w/o Lt. Niranjan Mahto, supported by father-in-law Sri Chandra Dev Singh of Jamalpur Railway Karkhana; built village pulia bridge, internal roads & drainage; college science teacher since 2006). 2nd Panchayat Samiti: Kishori Razak.",
        family: "Born 1 Nov 1971, s/o Lt. Ram Kishun Das; educated in Munger (+2 at J.M.S. College Munger); father of 4 and footwear business owner.",
        highlights: [
          "Progresses government development schemes at the Panchayat level.",
          "Spearheads 14th Finance Commission (Chaudahwan Vitta Aayog) investments in handpumps, solar lights, drainage systems, and electricity."
        ]
      }
    ];

    // 4. All 28 Photo Gallery Items from photo.html with exact Google Drive IDs
    const GALLERY_ITEMS = [
      { id: 1, title: "Amit Sagar", desc: "Zila Parishad of Mednichowki", cat: "leaders", img: IMG_ASSETS.agriculture, driveId: "1f9nbreojwHUMyn1sUmSsVqq8Ss-0D54K", origName: "ami.jpg / am.jpg" },
      { id: 2, title: "Nita Devi", desc: "Pramukh of Mednichowki (Suryagarha Prakhand)", cat: "leaders", img: IMG_ASSETS.market_nh80, driveId: "1szjt3JZsDg4Pl7AXRcFElph8LSxW1XYC", origName: "pra1.jpg / pra.jpg" },
      { id: 3, title: "Madhvi Lata", desc: "Mukhiya of Mednichowki (since 2006)", cat: "leaders", img: IMG_ASSETS.hero_village, driveId: "1uchoL9FMR4E4-oFefsp7Kp-tiIGhY-vI", origName: "mu1.jpg / mu.jpg" },
      { id: 4, title: "Sushila Devi", desc: "Sarpanch of Mednichowki (Gram Kachhari)", cat: "leaders", img: IMG_ASSETS.school, driveId: "17IhenbRkM9Jvqdbsqe68zFRhvXEZEfdJ", origName: "sa1.jpg / sa.jpg" },
      { id: 5, title: "Manoj Das", desc: "Panchayat Samiti of Mednichowki", cat: "leaders", img: IMG_ASSETS.gramin_bank, driveId: "11ob-Ff1nkhzpIezWObNu890xBZlgls-Q", origName: "pan1.jpg / pan.jpg" },
      { id: 6, title: "Police Station", desc: "Police Station of Mednichowki (Panchayat Bhawan site)", cat: "places", img: IMG_ASSETS.police_station, driveId: "1nuUPoQnsjL1YphPB7W6lB6P2haOVoe_M", origName: "ps1.jpg / ps.JPG" },
      { id: 7, title: "Vishnu Deo Mahto", desc: "Second Sarpanch of Mednichowki (Served 20 Years)", cat: "leaders", img: IMG_ASSETS.hero_village, driveId: "1qjFHn1SGmqVB6gYktHLlxX2dVwi9VqEM", origName: "fs1.jpg / fs.jpg" },
      { id: 8, title: "Places of Mednichowki", desc: "All Specialized Places in Mednichowki (NH-80)", cat: "places", img: IMG_ASSETS.market_nh80, driveId: "18KX8sCnJb9Hnd3Uma4qpTPuZjX0yaz19", origName: "pla1.jpg / pla.jpg" },
      { id: 9, title: "Mita Kumari", desc: "Sevika of Aanganbari Kendra (40 Students)", cat: "leaders", img: IMG_ASSETS.aanganbari, driveId: "1sN4HIgZFdnaA3x4aZzMPpQAgMv2Fd5q7", origName: "mi.jpg / mita.jpg" },
      { id: 10, title: "Bihar Kshetriya Gramin Bank", desc: "Gramin Bank in Mednichowki Market", cat: "places", img: IMG_ASSETS.gramin_bank, driveId: "1y4RJbwdGfz4jasTYDGng7O3S3gEm6VmF", origName: "ss8.jpg / s8.JPG" },
      { id: 11, title: "Primary School Classroom", desc: "Children Studying in Primary School (#1 in Block)", cat: "places", img: IMG_ASSETS.school, driveId: "1Y-FlU0Yl-4lLK9MDBDzHsoyHdExLAWYO", origName: "ss7.jpg / s7.JPG" },
      { id: 12, title: "Menthol Farming", desc: "The Growing of Menthol Plants in Mednichowki", cat: "nature", img: IMG_ASSETS.menthol_crop, driveId: "1jgOgaEVf2nHiXln-16DIuY10yufA_KBp", origName: "ss2.jpg / s2.JPG" },
      { id: 13, title: "Ganga River", desc: "Sacred Ganga River of Mednichowki", cat: "nature", img: IMG_ASSETS.ganga_river, driveId: "1FfaF0XoSzUw6yj7eU5ZUgdHWEN4vukwr", origName: "im.jpg / im(1).JPG" },
      { id: 14, title: "Durga Mandir", desc: "Historic Durgasthan Temple (Built 1952)", cat: "culture", img: IMG_ASSETS.durgasthan, driveId: "1WgaHmOjNZoDgK9C8z8BIb-V94WD8SEtg", origName: "im1.jpg / im(2).JPG" },
      { id: 15, title: "Lalit Narayan Singh (Laloo Jee)", desc: "Social Worker & Telecom/Electricity Pioneer (1984/1998)", cat: "leaders", img: IMG_ASSETS.market_nh80, driveId: "1Z6WPUVq9JZsR7p2FHo7ne0nKU3bjUudS", origName: "li.jpg / 1.JPG" },
      { id: 16, title: "Jagdish Mahto", desc: "First Up-Mukhiya of Mednichowki (1967–1998)", cat: "leaders", img: IMG_ASSETS.hero_village, driveId: "1CGYqz69XJgnzQIgTMi47CZtnLU5zAtd1", origName: "dd.jpg / 2.JPG" },
      { id: 17, title: "Mednichowki Village", desc: "Scenic View of Mednichowki Village", cat: "places", img: IMG_ASSETS.hero_village, driveId: "1cfPDjswjosa8jjaao-M6acPDZDLFgQMB", origName: "i.JPG / 3.JPG" },
      { id: 18, title: "Hafiz Mohammad Iqramul Haq", desc: "Imam of Masjid & Principal of Madrasa", cat: "leaders", img: IMG_ASSETS.mosque, driveId: "1jzsk6Lr7ekEIHlKal8OmM5kVf2-_FZx1", origName: "mau.jpg / 4.JPG" },
      { id: 19, title: "Sanju Kumari", desc: "First Panchayat Samiti of Mednichowki (2001–2005)", cat: "leaders", img: IMG_ASSETS.school, driveId: "1zfpp5qEM7yLtkfP7Owha0DYutBfuSHtN", origName: "fss.jpg / 5.jpg" },
      { id: 20, title: "Gramin Bank Building", desc: "Bihar Kshetriya Gramin Bank & Sahara Office", cat: "places", img: IMG_ASSETS.gramin_bank, driveId: "1svlqWJVlKFx0Gt1CQsRmH10v54aGS0VO", origName: "im7.jpg / im(8).JPG" },
      { id: 21, title: "Madrasa Students", desc: "Children Studying in Madrasa (35 Hostel + 100 Day)", cat: "places", img: IMG_ASSETS.madrasa, driveId: "1_k99Ienxy8-e82E6awd_AEKKfos91f_J", origName: "im2.jpg / im(3).JPG" },
      { id: 22, title: "Durga Puja Visarjan I", desc: "Durga Visarjan Procession in Mednichowki", cat: "culture", img: IMG_ASSETS.temple, driveId: "1J-zwimqTWQe_xmdh-Z3BJVqj3-wyaXWF", origName: "im3.jpg / im(4).JPG" },
      { id: 23, title: "Durga Puja Visarjan II", desc: "Community Gathering for Durga Visarjan", cat: "culture", img: IMG_ASSETS.durgasthan, driveId: "1U4Bklzj65yz9paSu1lnmfv9lOEvpoBdc", origName: "im4.jpg / im(5).JPG" },
      { id: 24, title: "Durga Puja Visarjan III", desc: "Annual Durga Puja Celebration on Ganga Bank", cat: "culture", img: IMG_ASSETS.ganga_river, driveId: "1FHPP81errR_UAhGk13Tg7WkK78UYVpBG", origName: "im5.jpg / im(6).JPG" },
      { id: 25, title: "BSNL Telephone Exchange", desc: "Bharat Sanchar Nigam Ltd. Exchange, Mednichowki", cat: "places", img: IMG_ASSETS.market_nh80, driveId: "1zxF42cnGeftffqSpuw3LWkqWVgDaa3ZJ", origName: "im6.jpg / im(7).JPG" },
      { id: 26, title: "Capt. Banke Bihari Mahto", desc: "Grandson of First Sarpanch Basudeo Mahto (Retd. Army Captain)", cat: "leaders", img: IMG_ASSETS.police_station, driveId: "1-keZ9Jnb9WkNyoMI28waif33PmisGs-k", origName: "pp.jpg / pp1.jpg" },
      { id: 27, title: "Kisan Bhawan", desc: "Kisan Bhawan of Mednichowki", cat: "places", img: IMG_ASSETS.agriculture, driveId: "19M_cRtr_6x773UwqBh8J2_xcc-fJQmr7", origName: "ki.jpg / ki1.JPG" },
      { id: 28, title: "Mednichowki Market", desc: "Main Market Street on NH-80 in Mednichowki", cat: "places", img: IMG_ASSETS.market_nh80, driveId: "1r0hTF5tFPlvMgnMNF1F5PR8rOys249tv", origName: "mark1.jpg / mark.JPG" }
    ];

    // State Management
    let currentView = "home";
    let currentSlide = 0;
    let currentPlaceFilter = "all";
    let currentLeaderFilter = "all";
    let currentGalleryFilter = "all";
    let slideInterval = null;

    // Navigation Switcher
    function switchView(viewName) {
      currentView = viewName;
      document.querySelectorAll(".page-view").forEach(el => {
        el.classList.toggle("hidden", el.id !== "view-" + viewName);
      });
      document.querySelectorAll(".nav-tab").forEach(btn => {
        const target = btn.getAttribute("data-nav");
        if (!target) return;
        if (btn.classList.contains("footer-nav-link")) {
          if (target === viewName) {
            btn.classList.add("text-amber-300", "underline", "underline-offset-4");
            btn.classList.remove("text-white");
          } else {
            btn.classList.remove("text-amber-300", "underline", "underline-offset-4");
            btn.classList.add("text-white");
          }
          return;
        }
        if (target === viewName) {
          btn.classList.add("bg-teal-600", "text-white");
          btn.classList.remove("text-slate-700", "dark:text-slate-200");
        } else {
          btn.classList.remove("bg-teal-600", "text-white");
          btn.classList.add("text-slate-700", "dark:text-slate-200");
        }
      });
      document.querySelectorAll(".bottom-nav-item").forEach(btn => {
        const target = btn.getAttribute("data-nav");
        btn.classList.toggle("active", target === viewName);
      });
      const mobilePanel = document.getElementById("mobileMenuPanel");
      if (mobilePanel) mobilePanel.classList.add("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Render Hero Carousel
    function renderHeroSlide() {
      const slide = HERO_SLIDES[currentSlide];
      document.getElementById("heroSlideTitle").textContent = slide.title;
      document.getElementById("heroSlideDesc").textContent = slide.desc;
      document.getElementById("heroSlideBadge").textContent = slide.badge;
      document.getElementById("heroSlideCaption").textContent = slide.caption;
      const imgEl = document.getElementById("heroSlideImg");
      imgEl.src = slide.img;
      imgEl.alt = slide.title;
      document.getElementById("heroSlideCounter").textContent = (currentSlide + 1) + " / " + HERO_SLIDES.length;

      const dotsContainer = document.getElementById("heroDots");
      dotsContainer.innerHTML = HERO_SLIDES.map((_, idx) =>
        `<button type="button" data-slide-idx="${idx}" aria-label="Slide ${idx + 1}" class="h-2 rounded-full transition-all ${idx === currentSlide ? 'w-6 bg-teal-400' : 'w-2 bg-white/30 hover:bg-white/60'}"></button>`
      ).join("");
      dotsContainer.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
          currentSlide = parseInt(btn.getAttribute("data-slide-idx"), 10);
          renderHeroSlide();
          restartSlideTimer();
        });
      });
    }

    function restartSlideTimer() {
      if (slideInterval) clearInterval(slideInterval);
      slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % HERO_SLIDES.length;
        renderHeroSlide();
      }, 6000);
    }

    // Render Specialized Places
    function renderPlaces() {
      const container = document.getElementById("placesCardsContainer");
      const list = currentPlaceFilter === "all"
        ? PLACES_DATA
        : PLACES_DATA.filter(p => p.id === currentPlaceFilter);

      container.innerHTML = list.map(place => `
        <article class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col justify-between card-zoom">
          <div>
            <div class="relative h-52 bg-slate-800 overflow-hidden">
              <img src="${place.img}" alt="${place.name}" class="w-full h-full object-cover transition-transform duration-500 max-w-full" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-teal-500 text-slate-950 text-[11px] font-bold">${place.badge}</span>
              <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-[11px] font-medium">${place.established}</span>
              <div class="absolute bottom-3 left-4 right-4 text-white">
                <h3 class="text-xl font-bold font-display">${place.name}</h3>
                <p class="text-[11px] text-teal-200">${place.origFile}</p>
              </div>
            </div>
            <div class="p-5 space-y-3">
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${place.summary}</p>
              <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-100 dark:border-slate-700/60">
                ${place.details.map(d => `<li class="flex items-start gap-2"><span class="text-teal-500 font-bold">•</span><span>${d}</span></li>`).join("")}
              </ul>
            </div>
          </div>
          <div class="px-5 pb-5 pt-2 flex items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800">
            <button type="button" data-lightbox-src="${place.img}" data-lightbox-title="${place.name}" data-lightbox-desc="${place.summary}" data-lightbox-drive="${place.driveUrl}" class="open-lightbox-btn px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold">
              🔍 View Image
            </button>
            <a href="${place.driveUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-semibold text-slate-700 dark:text-slate-300">
              Original in Drive ↗
            </a>
          </div>
        </article>
      `).join("");

      bindLightboxButtons(container);
    }

    // Render Leaders
    function renderLeaders() {
      const container = document.getElementById("leadersContainer");
      const list = currentLeaderFilter === "all"
        ? LEADERS_DATA
        : LEADERS_DATA.filter(l => l.category === currentLeaderFilter);

      container.innerHTML = list.map(leader => `
        <article class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div class="lg:col-span-4 relative min-h-[220px] bg-slate-800 overflow-hidden">
            <img src="${leader.img}" alt="${leader.currentHolder}" class="w-full h-full object-cover max-w-full" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent"></div>
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider">${leader.post}</span>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <h3 class="text-xl font-bold font-display">${leader.currentHolder}</h3>
              <p class="text-xs text-teal-300 mt-0.5">${leader.tenure}</p>
            </div>
          </div>
          <div class="lg:col-span-8 p-6 flex flex-col justify-between space-y-4">
            <div class="space-y-3">
              <div class="text-xs font-semibold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 px-3 py-1.5 rounded-lg border border-teal-200/60 dark:border-teal-800/60">
                <strong>Jurisdiction:</strong> ${leader.jurisdiction}
              </div>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300"><strong>Historical Succession:</strong> ${leader.predecessors}</p>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300"><strong>Family &amp; Background:</strong> ${leader.family}</p>
              <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-1">
                ${leader.highlights.map(h => `<li class="flex items-start gap-2"><span class="text-teal-500 font-bold">✓</span><span>${h}</span></li>`).join("")}
              </ul>
            </div>
            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
              <button type="button" data-lightbox-src="${leader.img}" data-lightbox-title="${leader.currentHolder} — ${leader.post}" data-lightbox-desc="${leader.predecessors}" data-lightbox-drive="${leader.driveUrl}" class="open-lightbox-btn px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold">
                🔍 Inspect Leader Card
              </button>
              <a href="${leader.driveUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline">
                View Original Portrait in Google Drive ↗
              </a>
            </div>
          </div>
        </article>
      `).join("");

      bindLightboxButtons(container);
    }

    // Render 28 Photo Gallery Cards
    function renderGallery() {
      const container = document.getElementById("galleryGrid");
      const list = currentGalleryFilter === "all"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter(item => item.cat === currentGalleryFilter);

      container.innerHTML = list.map(item => {
        const driveUrl = "https://drive.google.com/file/d/" + item.driveId + "/view";
        return `
          <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col justify-between group card-zoom">
            <div>
              <div class="relative h-44 bg-slate-800 overflow-hidden">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 max-w-full" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/65 text-white text-[10px] font-semibold">#${item.id} • ${item.origName}</span>
              </div>
              <div class="p-4">
                <h3 class="font-bold text-sm text-slate-900 dark:text-white">${item.title}</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">${item.desc}</p>
              </div>
            </div>
            <div class="px-4 pb-4 pt-2 flex items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800">
              <button type="button" data-lightbox-src="${item.img}" data-lightbox-title="${item.title} (${item.origName})" data-lightbox-desc="${item.desc}" data-lightbox-drive="${driveUrl}" class="open-lightbox-btn text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline">
                🔍 Preview
              </button>
              <a href="${driveUrl}" target="_blank" rel="noopener noreferrer" class="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 text-slate-700 dark:text-slate-300 font-medium">
                Drive Original ↗
              </a>
            </div>
          </div>
        `;
      }).join("");

      bindLightboxButtons(container);
    }

    // Lightbox Modal Helpers
    function openLightbox(src, title, desc, driveUrl) {
      document.getElementById("lightboxImg").src = src;
      document.getElementById("lightboxTitle").textContent = title || "Mednichowki Village";
      document.getElementById("lightboxDesc").textContent = desc || "";
      document.getElementById("lightboxDriveLink").href = driveUrl || "https://drive.google.com/drive/folders/1wIchbkEhEqa8MQP_aOQ_R9uTpO8G23Fa";
      document.getElementById("lightboxModal").classList.remove("hidden");
    }

    function bindLightboxButtons(root) {
      root.querySelectorAll(".open-lightbox-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          openLightbox(
            btn.getAttribute("data-lightbox-src"),
            btn.getAttribute("data-lightbox-title"),
            btn.getAttribute("data-lightbox-desc"),
            btn.getAttribute("data-lightbox-drive")
          );
        });
      });
    }

    // Toast & Clipboard Helper
    function showToast(msg) {
      const t = document.getElementById("toastBanner");
      t.textContent = msg;
      t.classList.remove("hidden");
      setTimeout(() => t.classList.add("hidden"), 2600);
    }

    function copyText(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => showToast("Copied: " + text)).catch(() => fallbackCopy(text));
      } else {
        fallbackCopy(text);
      }
    }

    function fallbackCopy(text) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
      showToast("Copied: " + text);
    }

    // Initialize All Listeners on DOMContentLoaded
    window.addEventListener("DOMContentLoaded", () => {
      renderHeroSlide();
      restartSlideTimer();
      renderPlaces();
      renderLeaders();
      renderGallery();
      bindLightboxButtons(document);

      // Brand Home click
      document.getElementById("brandHomeBtn").addEventListener("click", () => switchView("home"));

      // Main Nav Tabs
      document.querySelectorAll(".nav-tab").forEach(btn => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-nav");
          if (target) switchView(target);
        });
      });

      // Specialized Place Jump links (from dropdown & home sidebar)
      document.querySelectorAll("[data-place-jump]").forEach(btn => {
        btn.addEventListener("click", () => {
          currentPlaceFilter = btn.getAttribute("data-place-jump");
          document.querySelectorAll(".place-pill").forEach(p => {
            const active = p.getAttribute("data-place-filter") === currentPlaceFilter;
            p.className = active
              ? "place-pill px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-600 text-white shadow-sm"
              : "place-pill px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-100";
          });
          renderPlaces();
          switchView("places");
        });
      });

      // Places Filter Pills
      document.querySelectorAll(".place-pill").forEach(btn => {
        btn.addEventListener("click", () => {
          currentPlaceFilter = btn.getAttribute("data-place-filter");
          document.querySelectorAll(".place-pill").forEach(p => {
            const active = p.getAttribute("data-place-filter") === currentPlaceFilter;
            p.className = active
              ? "place-pill px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-600 text-white shadow-sm"
              : "place-pill px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-100";
          });
          renderPlaces();
        });
      });

      // Leaders Filter Pills
      document.querySelectorAll(".leader-pill").forEach(btn => {
        btn.addEventListener("click", () => {
          currentLeaderFilter = btn.getAttribute("data-leader-filter");
          document.querySelectorAll(".leader-pill").forEach(p => {
            const active = p.getAttribute("data-leader-filter") === currentLeaderFilter;
            p.className = active
              ? "leader-pill px-3 py-1.5 rounded-lg text-xs font-bold bg-teal-600 text-white"
              : "leader-pill px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700";
          });
          renderLeaders();
        });
      });

      // Gallery Filter Pills
      document.querySelectorAll(".gallery-pill").forEach(btn => {
        btn.addEventListener("click", () => {
          currentGalleryFilter = btn.getAttribute("data-gallery-filter");
          document.querySelectorAll(".gallery-pill").forEach(p => {
            const active = p.getAttribute("data-gallery-filter") === currentGalleryFilter;
            p.className = active
              ? "gallery-pill px-3 py-1.5 rounded-lg text-xs font-bold bg-teal-600 text-white"
              : "gallery-pill px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700";
          });
          renderGallery();
        });
      });

      // Hero Slider Buttons
      document.getElementById("prevSlideBtn").addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
        renderHeroSlide();
        restartSlideTimer();
      });
      document.getElementById("nextSlideBtn").addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % HERO_SLIDES.length;
        renderHeroSlide();
        restartSlideTimer();
      });
      document.getElementById("heroPrimaryCta").addEventListener("click", () => switchView("places"));
      document.getElementById("heroSecondaryCta").addEventListener("click", () => switchView("gallery"));
      document.getElementById("heroLightboxBtn").addEventListener("click", () => {
        const s = HERO_SLIDES[currentSlide];
        openLightbox(s.img, s.title, s.desc);
      });

      // Lightbox Close
      document.getElementById("closeLightboxBtn").addEventListener("click", () => {
        document.getElementById("lightboxModal").classList.add("hidden");
      });

      // Mobile Menu Toggle
      document.getElementById("mobileMenuBtn").addEventListener("click", () => {
        document.getElementById("mobileMenuPanel").classList.toggle("hidden");
      });

      // Theme Toggle
      document.getElementById("themeToggleBtn").addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark");
        document.getElementById("themeIcon").textContent = isDark ? "☀️" : "🌙";
      });

      // Copy Buttons
      document.querySelectorAll(".copy-btn").forEach(btn => {
        btn.addEventListener("click", () => copyText(btn.getAttribute("data-copy")));
      });

      // Contact Form Submit
      document.getElementById("contactForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("senderName").value.trim();
        const topic = document.getElementById("senderTopic").value;
        showToast("Thank you, " + name + "! Your " + topic + " message has been recorded.");
        e.target.reset();
      });

      // Global Search Input
      const searchInput = document.getElementById("globalSearchInput");
      const searchBanner = document.getElementById("globalSearchResults");
      const searchGrid = document.getElementById("searchResultsGrid");
      const searchLabel = document.getElementById("searchCountLabel");

      searchInput.addEventListener("input", () => {
        const q = searchInput.value.trim().toLowerCase();
        if (!q) {
          searchBanner.classList.add("hidden");
          return;
        }
        const matches = [];
        PLACES_DATA.forEach(p => {
          if ((p.name + " " + p.summary + " " + p.details.join(" ")).toLowerCase().includes(q)) {
            matches.push({ type: "Specialized Place", title: p.name, sub: p.established, view: "places" });
          }
        });
        LEADERS_DATA.forEach(l => {
          if ((l.post + " " + l.currentHolder + " " + l.predecessors + " " + l.family).toLowerCase().includes(q)) {
            matches.push({ type: "Panchayat Leader", title: l.currentHolder + " (" + l.post + ")", sub: l.tenure, view: "leaders" });
          }
        });
        GALLERY_ITEMS.forEach(g => {
          if ((g.title + " " + g.desc).toLowerCase().includes(q)) {
            matches.push({ type: "Gallery Photo #" + g.id, title: g.title, sub: g.desc, view: "gallery" });
          }
        });

        searchBanner.classList.remove("hidden");
        searchLabel.textContent = `Found ${matches.length} result(s) for "${searchInput.value.trim()}"`;
        searchGrid.innerHTML = matches.slice(0, 6).map(m => `
          <button type="button" data-search-view="${m.view}" class="text-left p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-teal-200 dark:border-slate-700 hover:border-teal-500 transition-colors">
            <div class="text-[10px] font-bold uppercase text-teal-600 dark:text-teal-400">${m.type}</div>
            <div class="text-xs font-bold text-slate-900 dark:text-white truncate">${m.title}</div>
            <div class="text-[11px] text-slate-500 truncate">${m.sub}</div>
          </button>
        `).join("");
        searchGrid.querySelectorAll("button").forEach(b => {
          b.addEventListener("click", () => {
            switchView(b.getAttribute("data-search-view"));
            searchBanner.classList.add("hidden");
          });
        });
      });

      function runSearchQuery(rawQuery) {
        const q = rawQuery.trim().toLowerCase();
        if (!q) {
          searchBanner.classList.add("hidden");
          return;
        }
        const matches = [];
        PLACES_DATA.forEach(p => {
          if ((p.name + " " + p.summary + " " + p.details.join(" ")).toLowerCase().includes(q)) {
            matches.push({ type: "Specialized Place", title: p.name, sub: p.established, view: "places" });
          }
        });
        LEADERS_DATA.forEach(l => {
          if ((l.post + " " + l.currentHolder + " " + l.predecessors + " " + l.family).toLowerCase().includes(q)) {
            matches.push({ type: "Panchayat Leader", title: l.currentHolder + " (" + l.post + ")", sub: l.tenure, view: "leaders" });
          }
        });
        GALLERY_ITEMS.forEach(g => {
          if ((g.title + " " + g.desc).toLowerCase().includes(q)) {
            matches.push({ type: "Gallery Photo #" + g.id, title: g.title, sub: g.desc, view: "gallery" });
          }
        });

        searchBanner.classList.remove("hidden");
        searchLabel.textContent = `Found ${matches.length} result(s) for "${rawQuery.trim()}"`;
        searchGrid.innerHTML = matches.slice(0, 6).map(m => `
          <button type="button" data-search-view="${m.view}" class="text-left p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-teal-200 dark:border-slate-700 hover:border-teal-500 transition-colors">
            <div class="text-[10px] font-bold uppercase text-teal-600 dark:text-teal-400">${m.type}</div>
            <div class="text-xs font-bold text-slate-900 dark:text-white truncate">${m.title}</div>
            <div class="text-[11px] text-slate-500 truncate">${m.sub}</div>
          </button>
        `).join("");
        searchGrid.querySelectorAll("button").forEach(b => {
          b.addEventListener("click", () => {
            switchView(b.getAttribute("data-search-view"));
            searchBanner.classList.add("hidden");
          });
        });
      }

      const mobileSearchInput = document.getElementById("mobileSearchInput");
      if (mobileSearchInput) {
        mobileSearchInput.addEventListener("input", () => {
          searchInput.value = mobileSearchInput.value;
          runSearchQuery(mobileSearchInput.value);
        });
      }

      document.getElementById("clearSearchBtn").addEventListener("click", () => {
        searchInput.value = "";
        if (mobileSearchInput) mobileSearchInput.value = "";
        searchBanner.classList.add("hidden");
      });

    });
