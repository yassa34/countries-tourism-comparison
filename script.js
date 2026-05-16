// Visa requirements data by nationality and destination countries// Visa requirements data by nationality and destination countries
const visaRequirements = {
    "Egypt": {
        noVisa: ["Saudi Arabia", "UAE", "Kuwait", "Qatar", "Bahrain", "Oman"],
        onArrival: ["Turkey", "Tunisia", "Morocco", "Jordan", "Lebanon"]
    },
    "Saudi Arabia": {
        noVisa: ["Egypt", "UAE", "Kuwait", "Qatar", "Bahrain", "Oman"],
        onArrival: ["Turkey", "Tunisia", "Morocco"]
    },
    "UAE": {
        noVisa: ["Egypt", "Saudi Arabia", "Kuwait", "Qatar", "Bahrain", "Oman"],
        onArrival: ["Turkey", "Tunisia", "Morocco", "Jordan"]
    },
    "France": {
        noVisa: ["Italy", "Spain", "Germany", "Greece", "Canada"],
        onArrival: ["Turkey", "Morocco", "Tunisia"]
    },
    "Turkey": {
        noVisa: ["Greece", "Bulgaria"],
        onArrival: ["Egypt", "Saudi Arabia", "UAE", "France", "Tunisia", "Morocco"]
    },
    "Japan": {
        noVisa: ["Canada", "USA"],
        onArrival: ["Turkey", "Thailand"]
    },
    "Tunisia": {
        noVisa: [],
        onArrival: ["Egypt", "Saudi Arabia", "UAE", "France", "Turkey", "Morocco"]
    },
    "Morocco": {
        noVisa: [],
        onArrival: ["Egypt", "Saudi Arabia", "UAE", "France", "Turkey", "Tunisia"]
    },
    "Jordan": {
        noVisa: [],
        onArrival: ["Egypt", "Saudi Arabia", "UAE", "Turkey", "Tunisia", "Morocco"]
    },
    "Lebanon": {
        noVisa: [],
        onArrival: ["Egypt", "Saudi Arabia", "UAE", "Turkey"]
    },
    "Brazil": {
        noVisa: ["Canada"],
        onArrival: ["Turkey", "Morocco"]
    },
    "Mexico": {
        noVisa: ["Canada"],
        onArrival: ["Turkey", "Brazil"]
    },
    "Argentina": {
        noVisa: [],
        onArrival: ["Turkey", "Brazil"]
    },
    "Russia": {
        noVisa: ["Belarus"],
        onArrival: ["Turkey"]
    },
    "Spain": {
        noVisa: ["France", "Italy", "Germany"],
        onArrival: ["Turkey", "Morocco"]
    },
    "Italy": {
        noVisa: ["France", "Spain", "Germany"],
        onArrival: ["Turkey", "Tunisia"]
    },
    "Germany": {
        noVisa: ["France", "Italy", "Spain"],
        onArrival: ["Turkey"]
    },
    "Greece": {
        noVisa: ["France", "Italy", "Germany"],
        onArrival: ["Turkey", "Egypt"]
    },
    "Canada": {
        noVisa: ["USA", "France"],
        onArrival: ["Turkey", "Morocco"]
    },
    "Syria": {
        noVisa: [],
        onArrival: ["Egypt", "Jordan"]
    },
    "Palestine": {
        noVisa: [],
        onArrival: ["Jordan"]
    },
    "Thailand": {
        noVisa: [],
        onArrival: ["Egypt", "Malaysia", "Indonesia"]
    },
    "Malaysia": {
        noVisa: [],
        onArrival: ["Egypt", "Thailand", "Indonesia"]
    },
    "Indonesia": {
        noVisa: [],
        onArrival: ["Egypt", "Thailand", "Malaysia"]
    },
    "Philippines": {
        noVisa: [],
        onArrival: ["Thailand", "Malaysia"]
    },
    "Vietnam": {
        noVisa: [],
        onArrival: ["Thailand", "Cambodia"]
    },
    "Cambodia": {
        noVisa: [],
        onArrival: ["Vietnam", "Thailand"]
    },
    "Laos": {
        noVisa: [],
        onArrival: ["Vietnam", "Thailand"]
    },
    "Myanmar": {
        noVisa: [],
        onArrival: ["Thailand"]
    },
    "Mauritius": {
        noVisa: [],
        onArrival: ["Egypt"]
    },
    "Kenya": {
        noVisa: [],
        onArrival: ["Egypt", "Ethiopia"]
    },
    "Tanzania": {
        noVisa: [],
        onArrival: ["Kenya"]
    },
    "Uganda": {
        noVisa: [],
        onArrival: ["Kenya"]
    },
    "Rwanda": {
        noVisa: [],
        onArrival: ["Kenya"]
    },
    "Cameroon": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Ghana": {
        noVisa: [],
        onArrival: ["Cameroon", "Senegal"]
    },
    "Nigeria": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Ethiopia": {
        noVisa: [],
        onArrival: ["Kenya"]
    },
    "South Africa": {
        noVisa: [],
        onArrival: ["Egypt", "Kenya"]
    },
    "Botswana": {
        noVisa: [],
        onArrival: ["South Africa"]
    },
    "Zimbabwe": {
        noVisa: [],
        onArrival: ["South Africa"]
    },
    "Zambia": {
        noVisa: [],
        onArrival: ["South Africa"]
    },
    "Malawi": {
        noVisa: [],
        onArrival: ["South Africa"]
    },
    "Mozambique": {
        noVisa: [],
        onArrival: ["South Africa"]
    },
    "Senegal": {
        noVisa: [],
        onArrival: ["Ghana", "Mali"]
    },
    "Mali": {
        noVisa: [],
        onArrival: ["Senegal"]
    },
    "Burkina Faso": {
        noVisa: [],
        onArrival: ["Mali"]
    },
    "Ivory Coast": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Benin": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Togo": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Liberia": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Sierra Leone": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Guinea": {
        noVisa: [],
        onArrival: ["Senegal"]
    },
    "Comoros": {
        noVisa: [],
        onArrival: ["Egypt"]
    },
    "Seychelles": {
        noVisa: [],
        onArrival: ["Egypt"]
    },
    "Mongolia": {
        noVisa: [],
        onArrival: ["Japan"]
    },
    "Kazakhstan": {
        noVisa: [],
        onArrival: ["Russia"]
    },
    "Uzbekistan": {
        noVisa: [],
        onArrival: ["Kazakhstan"]
    },
    "Turkmenistan": {
        noVisa: [],
        onArrival: ["Uzbekistan"]
    },
    "Tajikistan": {
        noVisa: [],
        onArrival: ["Uzbekistan"]
    },
    "Kyrgyzstan": {
        noVisa: [],
        onArrival: ["Kazakhstan"]
    },
    "Nepal": {
        noVisa: [],
        onArrival: ["India"]
    },
    "Bangladesh": {
        noVisa: [],
        onArrival: ["India"]
    },
    "Sri Lanka": {
        noVisa: [],
        onArrival: ["India"]
    },
    "India": {
        noVisa: ["Pakistan"],
        onArrival: ["Thailand", "Turkey"]
    },
    "Pakistan": {
        noVisa: ["India"],
        onArrival: ["Iran"]
    },
    "Afghanistan": {
        noVisa: [],
        onArrival: ["Iran", "Pakistan"]
    },
    "Iran": {
        noVisa: ["Iraq"],
        onArrival: ["Turkey", "Jordan"]
    },
    "Iraq": {
        noVisa: ["Iran"],
        onArrival: ["Jordan"]
    },
    "Bhutan": {
        noVisa: [],
        onArrival: ["India"]
    },
    "Colombia": {
        noVisa: [],
        onArrival: ["Brazil", "Peru"]
    },
    "Peru": {
        noVisa: [],
        onArrival: ["Colombia", "Argentina"]
    },
    "Chile": {
        noVisa: [],
        onArrival: ["Argentina", "Peru"]
    },
    "Uruguay": {
        noVisa: [],
        onArrival: ["Argentina", "Brazil"]
    },
    "Paraguay": {
        noVisa: [],
        onArrival: ["Argentina", "Brazil"]
    },
    "Bolivia": {
        noVisa: [],
        onArrival: ["Argentina", "Brazil"]
    },
    "Ecuador": {
        noVisa: [],
        onArrival: ["Peru", "Colombia"]
    },
    "Venezuela": {
        noVisa: [],
        onArrival: ["Colombia"]
    },
    "USA": {
        noVisa: ["Canada"],
        onArrival: ["Mexico"]
    },
    "Greenland": {
        noVisa: [],
        onArrival: ["Canada"]
    },
    "Iceland": {
        noVisa: ["Norway", "Sweden"],
        onArrival: ["France", "UK"]
    },
    "Norway": {
        noVisa: ["Sweden", "Finland", "Denmark"],
        onArrival: ["Spain"]
    },
    "Sweden": {
        noVisa: ["Norway", "Finland", "Denmark"],
        onArrival: ["Spain"]
    },
    "Finland": {
        noVisa: ["Sweden", "Norway"],
        onArrival: ["Russia"]
    },
    "Denmark": {
        noVisa: ["Norway", "Sweden"],
        onArrival: ["Germany"]
    },
    "Netherlands": {
        noVisa: ["France", "Belgium", "Germany"],
        onArrival: ["Spain"]
    },
    "Belgium": {
        noVisa: ["France", "Netherlands"],
        onArrival: ["Germany"]
    }
};

// Flag image mapping
const flagMapping = {
    "Egypt": "images/flages/download.png",
    "Saudi Arabia": "images/flages/download (1).png",
    "ُُEngland": "images/flages/download (2).png",
    "Turkey": "images/flages/download (9).png",
    "France": "images/flages/download (3).png",
    "Italy": "images/flages/download (16).png",
    "Greece": "images/flages/download (8).png",
    "Spain": "images/flages/download (12).png",
    "Germany": "images/flages/download (4).png",
    "Japan": "images/flages/download (15).png",
    "Tunisia": "images/flages/download (6).png",
    "Morocco": "images/flages/download (7).png",
    "Syria": "images/flages/download (11).png",
    "Palestine": "images/flages/download (5).png",
    "Jordan": "images/flages/download (14).png",
    "Iraq": "images/flages/download(13).png",
    "Maldives": "images/flages/download (10).png",
    "Canada" :"images/flages/download (17).png",
    "Usa":"images/flages/download (18).png",
    "Chaina":"images/flages/download (19).png",
    
};

// Function to get flag image or emoji
function getFlagDisplay(countryName) {
    const flagPath = flagMapping[countryName];
    if (flagPath) {
        return `<img src="${encodeURI(flagPath)}" alt="${countryName} flag" class="country-flag">`;
    }
    // Fallback to emoji if flag not available
    const emojiMap = {
        "Egypt": "🇪🇬",
        "UAE": "🇦🇪",
        "Turkey": "🇹🇷",
        "Canada": "🇨🇦",
        "USA": "🇺🇸",
        "Kuwait": "🇰🇼",
        "Qatar": "🇶🇦",
        "Bahrain": "🇧🇭",
        "Oman": "🇴🇲",
        "Lebanon": "🇱🇧",
        "Brazil": "🇧🇷",
        "Mexico": "🇲🇽",
        "Argentina": "🇦🇷",
        "Russia": "🇷🇺",
        "Belarus": "🇧🇾",
        "Bulgaria": "🇧🇬",
        "Thailand": "🇹🇭",
        "Malaysia": "🇲🇾",
        "Indonesia": "🇮🇩",
        "Philippines": "🇵🇭",
        "Vietnam": "🇻🇳",
        "Cambodia": "🇰🇭",
        "Laos": "🇱🇦",
        "Myanmar": "🇲🇲",
        "Mauritius": "🇲🇺",
        "Kenya": "🇰🇪",
        "Tanzania": "🇹🇿",
        "Uganda": "🇺🇬",
        "Rwanda": "🇷🇼",
        "Cameroon": "🇨🇲",
        "Ghana": "🇬🇭",
        "Nigeria": "🇳🇬",
        "Ethiopia": "🇪🇹",
        "South Africa": "🇿🇦",
        "Botswana": "🇧🇼",
        "Zimbabwe": "🇿🇼",
        "Zambia": "🇿🇲",
        "Malawi": "🇲🇼",
        "Mozambique": "🇲🇿",
        "Senegal": "🇸🇳",
        "Mali": "🇲🇱",
        "Burkina Faso": "🇧🇫",
        "Ivory Coast": "🇨🇮",
        "Benin": "🇧🇯",
        "Togo": "🇹🇬",
        "Liberia": "🇱🇷",
        "Sierra Leone": "🇸🇱",
        "Guinea": "🇬🇳",
        "Comoros": "🇰🇲",
        "Seychelles": "🇸🇨",
        "Mongolia": "🇲🇳",
        "Kazakhstan": "🇰🇿",
        "Uzbekistan": "🇺🇿",
        "Turkmenistan": "🇹🇲",
        "Tajikistan": "🇹🇯",
        "Kyrgyzstan": "🇰🇬",
        "Nepal": "🇳🇵",
        "Bangladesh": "🇧🇩",
        "Sri Lanka": "🇱🇰",
        "India": "🇮🇳",
        "Pakistan": "🇵🇰",
        "Afghanistan": "🇦🇫",
        "Iran": "🇮🇷",
        "Bhutan": "🇧🇹",
        "Colombia": "🇨🇴",
        "Peru": "🇵🇪",
        "Chile": "🇨🇱",
        "Uruguay": "🇺🇾",
        "Paraguay": "🇵🇾",
        "Bolivia": "🇧🇴",
        "Ecuador": "🇪🇨",
        "Venezuela": "🇻🇪",
        "Guyana": "🇬🇾",
        "Suriname": "🇸🇷",
        "Czech Republic": "🇨🇿",
        "Austria": "🇦🇹",
        "Switzerland": "🇨🇭",
        "Sweden": "🇸🇪",
        "Norway": "🇳🇴",
        "Finland": "🇫🇮",
        "Denmark": "🇩🇰",
        "Netherlands": "🇳🇱",
        "Belgium": "🇧🇪",
        "Poland": "🇵🇱",
        "Ukraine": "🇺🇦",
        "Romania": "🇷🇴",
        "Serbia": "🇷🇸",
        "Croatia": "🇭🇷",
        "Slovenia": "🇸🇮",
        "Portugal": "🇵🇹",
        "Ireland": "🇮🇪",
        "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "Wales": "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
    };
    return emojiMap[countryName] || "🌍";
}

// Country data with coordinates
const countriesData = {
    "Egypt": {
        flag: "images/مصر/download.png",
        Capital: "New Administrative Capital",
        lat: 26.8206,
        lng: 30.8025,
        Area: "1,002,000 kmآ²",
        Population: "104 million",
        Currency: "Egyptian Pound",
        Infrastructure_Rank: "115th globally",
        Internet_Speed: "8.5 Mbps",
        Communications: "4G available in most areas",
        Best_Time_To_Visit: "October - April",
        exchangeRate: 52.5,
        // Education and economy data
        Education: {
            Literacy_Rate: "71.4%",
            Secondary_Education_Rate: "45%",
            University_Education_Rate: "28%",
            Education_Rank_Worldwide: "120"
        },
        Economy: {
            GDP: "1.2 trillion dollars",
            GDP_Per_Capita: "11,500 dollars",
            Unemployment_Rate: "7.2%",
            Inflation_Rate: "13.5%",
            Main_Exports: "Oil, gas, textiles, tourism"
        },
        Tourist_Attractions: [
            { name: "Pyramids of Giza", desc: "One of the seven wonders of the world", img: "images/مصر/download.jpg" },
            { name: "Luxor Temples", desc: "Great pharaonic monuments", img: "images/مصر/download (1).jpg" },
            { name: "New Egyptian Museum", desc: "Largest museum in the world", img: "images/مصر/download (4).jpg" },
            { name: "The Nile", desc: "Longest river in the world", img: "images/مصر/download (3).jpg" },
            { name: "Islamic Cairo", desc: "Mosques and Islamic architecture", img: "images/مصر/download (2).jpg" }
        ]
    },
    "Saudi Arabia": {
        flag: "🇸🇦",
        lat: 23.8859,
        lng: 45.0792,
        Capital: "Riyadh",
        Area: "2,149,690 kmآ²",
        Population: "34 million",
        Currency: "Saudi Riyal",
        Infrastructure_Rank: "28th globally",
        Internet_Speed: "20 Mbps",
        Communications: "5G in major cities",
        Best_Time_To_Visit: "November - March",
        exchangeRate: 3.75,
        Education: {
            Literacy_Rate: "97.5%",
            Secondary_Education_Rate: "68%",
            University_Education_Rate: "35%",
            Education_Rank_Worldwide: "45"
        },
        Economy: {
            GDP: "833 billion dollars",
            GDP_Per_Capita: "23,000 dollars",
            Unemployment_Rate: "5.6%",
            Inflation_Rate: "2.8%",
            Main_Exports: "Oil, gas, petrochemicals"
        },
        Tourist_Attractions: [
            { name: "Mecca", desc: "Holiest Islamic site", img: "images/السعودية/hajj-rituals-makkah-accorhotels.jpg" },
            { name: "Medina", desc: "Second holiest Islamic site", img: "images/السعودية/download.jpg" },
            { name: "AlUla", desc: "Archaeological sites and unique desert views", img: "images/السعودية/download (1).jpg" },
            { name: "Riyadh", desc: "Modern capital with rapid development", img: "images/السعودية/download (2).jpg" },
            { name: "Farasan Islands", desc: "Enchanting islands in the Red Sea", img: "images/السعودية/download (3).jpg" }
        ]
    },
    "UAE": {
        flag: "🇦🇪",
        lat: 23.4241,
        lng: 53.8478,
        Capital: "Abu Dhabi",
        Area: "83,600 kmآ²",
        Population: "9.9 million",
        Currency: "UAE Dirham",
        Infrastructure_Rank: "2nd globally",
        Internet_Speed: "45 Mbps",
        Communications: "Advanced 5G",
        Best_Time_To_Visit: "November - March",
        exchangeRate: 3.67,
        Education: {
            Literacy_Rate: "98.2%",
            Secondary_Education_Rate: "75%",
            University_Education_Rate: "42%",
            Education_Rank_Worldwide: "25"
        },
        Economy: {
            GDP: "421 billion dollars",
            GDP_Per_Capita: "43,000 dollars",
            Unemployment_Rate: "2.1%",
            Inflation_Rate: "1.8%",
            Main_Exports: "Oil, gas, gold, tourism"
        },
        Tourist_Attractions: [
            { name: "Burj Khalifa", desc: "Tallest tower in the world" },
            { name: "Palm Island", desc: "Unique urban project" },
            { name: "Dubai Mall", desc: "Largest mall in the world" },
            { name: "Dubai Desert", desc: "Desert trips and thrilling experiences" },
            { name: "Jumeirah Beach", desc: "Beautiful and modern beach" }
        ]
    },
    "Turkey": {
        flag: "🇹🇷",
        lat: 38.9637,
        lng: 35.2433,
        Area: "783,562 kmآ²",
        Capital: "Ankara",
        Population: "85 million",
        Currency: "Turkish Lira",
        Infrastructure_Rank: "49th globally",
        Internet_Speed: "18 Mbps",
        Communications: "4G/5G good",
        Best_Time_To_Visit: "April - October",
        exchangeRate: 42.5,
        Education: {
            Literacy_Rate: "96.2%",
            Secondary_Education_Rate: "62%",
            University_Education_Rate: "32%",
            Education_Rank_Worldwide: "55"
        },
        Economy: {
            GDP: "819 billion dollars",
            GDP_Per_Capita: "9,600 dollars",
            Unemployment_Rate: "10.2%",
            Inflation_Rate: "36.1%",
            Main_Exports: "Automobiles, textiles, machinery, tourism"
        },
        Tourist_Attractions: [
            { name: "Istanbul", desc: "Historic city between Europe and Asia" },
            { name: "Cappadocia", desc: "Area with fantastical natural views" },
            { name: "Blue Lake", desc: "Enchanting blue lake" },
            { name: "Troy", desc: "World heritage archaeological site" },
            { name: "Turquoise Coast", desc: "Beaches in the Mediterranean Sea" }
        ]
    },
    "France": {
        flag: "🇫🇷",
        lat: 46.2276,
        lng: 2.2137,
        Capital: "Paris",
        Area: "643,801 kmآ²",
        Population: "67 million",
        Currency: "Euro",
        Infrastructure_Rank: "9th globally",
        Internet_Speed: "30 Mbps",
        Communications: "4G/5G excellent",
        Best_Time_To_Visit: "May - September",
        exchangeRate: 1.15,
        Education: {
            Literacy_Rate: "99%",
            Secondary_Education_Rate: "78%",
            University_Education_Rate: "45%",
            Education_Rank_Worldwide: "8"
        },
        Economy: {
            GDP: "2.78 trillion dollars",
            GDP_Per_Capita: "41,500 dollars",
            Unemployment_Rate: "7.4%",
            Inflation_Rate: "5.2%",
            Main_Exports: "Automobiles, machinery, chemicals, tourism"
        },
        Tourist_Attractions: [
            { name: "Eiffel Tower", desc: "Famous iron tower in Paris", img: "images/فرنسا/download (5).jpg" },
            { name: "Louvre Museum", desc: "Largest art museum in the world", img: "images/فرنسا/download.jpg" },
            { name: "Palace of Versailles", desc: "Luxurious royal palace", img: "images/فرنسا/download (1).jpg" },
            { name: "Notre-Dame Cathedral", desc: "Great Gothic architecture", img: "images/فرنسا/download (2).jpg" },
            { name: "Champagne Region", desc: "Area of grapes and luxury wine", img: "images/فرنسا/download (3).jpg" }
        ]
    },
    "Italy": {
        flag: "🇮🇹",
        lat: 41.8719,
        lng: 12.5674,
        Area: "301,340 kmآ²",
        Population: "59 million",
        Capital: "Rome",
        Currency: "Euro",
        Infrastructure_Rank: "8th globally",
        Internet_Speed: "28 Mbps",
        Communications: "4G/5G good",
        Best_Time_To_Visit: "April - October",
        exchangeRate: 1.15,
        Education: {
            Literacy_Rate: "99.2%",
            Secondary_Education_Rate: "72%",
            University_Education_Rate: "38%",
            Education_Rank_Worldwide: "15"
        },
        Economy: {
            GDP: "2.07 trillion dollars",
            GDP_Per_Capita: "35,000 dollars",
            Unemployment_Rate: "7.8%",
            Inflation_Rate: "8.1%",
            Main_Exports: "Automobiles, machinery, textiles, tourism"
        },
        Tourist_Attractions: [
            { name: "Rome", desc: "Ancient imperial capital", img: "images/ايطاليا/download (4).jpg" },
            { name: "Venice", desc: "City of bridges and canals", img: "images/ايطاليا/download.jpg" },
            { name: "Florence", desc: "Center of Italian art and culture", img: "images/ايطاليا/download (1).jpg" },
            { name: "Amalfi Coast", desc: "Beautiful beaches in southern Italy", img: "images/ايطاليا/download (2).jpg" },
            { name: "Milan", desc: "Capital of fashion and design", img: "images/ايطاليا/download (3).jpg" }
        ]
    },
    "Greece": {
        flag: "🇬🇷",
        lat: 39.0742,
        lng: 21.8243,
        Area: "131,957 kmآ²",
        Capital: "Athens",
        Population: "10.7 million",
        Currency: "Euro",
        Infrastructure_Rank: "33rd globally",
        Internet_Speed: "22 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "May - September",
        exchangeRate: 1.15,
        Education: {
            Literacy_Rate: "97.7%",
            Secondary_Education_Rate: "65%",
            University_Education_Rate: "35%",
            Education_Rank_Worldwide: "28"
        },
        Economy: {
            GDP: "219 billion dollars",
            GDP_Per_Capita: "20,400 dollars",
            Unemployment_Rate: "12.1%",
            Inflation_Rate: "9.3%",
            Main_Exports: "Tourism, olives, shipping, agricultural products"
        },
        Tourist_Attractions: [
            { name: "Athens", desc: "Capital of Greek civilization", img: "images/اليونان/download (4).jpg" },
            { name: "Santorini", desc: "Dreamy island with blue domes", img: "images/اليونان/download.jpg" },
            { name: "Mykonos", desc: "Famous tourist island", img: "images/اليونان/download (1).jpg" },
            { name: "Crete Island", desc: "Largest Greek island", img: "images/اليونان/دليلك-الكامل-حول-جزيرة-كريت.jpg" },
            { name: "Acropolis", desc: "Ancient Parthenon temple", img: "images/اليونان/download (2).jpg" }
        ]
    },
    "Japan": {
        flag: "🇯🇵",
        lat: 36.2048,
        lng: 138.2529,
        Capital: "Tokyo",
        Area: "377,975 kmآ²",
        Population: "125 million",
        Currency: "Japanese Yen",
        Infrastructure_Rank: "4th globally",
        Internet_Speed: "50 Mbps",
        Communications: "Advanced 5G",
        Best_Time_To_Visit: "March - May and September - November",
        exchangeRate: 183,
        Education: {
            Literacy_Rate: "99%",
            Secondary_Education_Rate: "95%",
            University_Education_Rate: "52%",
            Education_Rank_Worldwide: "3"
        },
        Economy: {
            GDP: "4.23 trillion dollars",
            GDP_Per_Capita: "33,800 dollars",
            Unemployment_Rate: "2.6%",
            Inflation_Rate: "3.3%",
            Main_Exports: "Automobiles, electronics, machinery, ships"
        },
        Tourist_Attractions: [
            { name: "Tokyo", desc: "Modern and traditional capital", img: "images/اليابان/download (2).jpg" },
            { name: "Fushimi Temple", desc: "Famous temple with thousand gates", img: "images/اليابان/download.jpg" },
            { name: "Mount Fuji", desc: "Japanese natural icon", img: "images/اليابان/download (1).jpg" },
            { name: "Kyoto", desc: "Capital of traditional Japanese culture", img: "images/اليابان/download (3).jpg" },
            { name: "Tokyo Disneyland", desc: "Giant amusement park", img: "images/اليابان/download (4).jpg" }
        ]
    },
    "Canada": {
        flag: "🇨🇦",
        lat: 56.1304,
        lng: -106.3468,
        Area: "9,984,670 kmآ²",
        Population: "39 million",
        Currency: "Canadian Dollar",
        Infrastructure_Rank: "12th globally",
        Capital: "Ottawa",
        Internet_Speed: "32 Mbps",
        Communications: "4G/5G good",
        Best_Time_To_Visit: "June - September",
        exchangeRate: 0.74,
        Education: {
            Literacy_Rate: "99%",
            Secondary_Education_Rate: "88%",
            University_Education_Rate: "58%",
            Education_Rank_Worldwide: "5"
        },
        Economy: {
            GDP: "1.99 trillion dollars",
            GDP_Per_Capita: "51,000 dollars",
            Unemployment_Rate: "5.3%",
            Inflation_Rate: "6.8%",
            Main_Exports: "Oil, gas, wood, automobiles, tourism"
        },
        Tourist_Attractions: [
            { name: "Niagara Falls", desc: "Massive natural falls" },
            { name: "Yellowstone Reserve", desc: "Natural national park" },
            { name: "Toronto", desc: "Major modern Canadian city" },
            { name: "Christ Statue", desc: "Famous stone sculpture" },
            { name: "Rocky Mountains", desc: "Beautiful green mountain range" }
        ]
    },
    "Spain": {
        flag: "🇪🇸",
        lat: 40.4637,
        lng: -3.7492,
        Capital: "Madrid",
        Area: "505,990 kmآ²",
        Population: "47 million",
        Currency: "Euro",
        Infrastructure_Rank: "15th globally",
        Internet_Speed: "25 Mbps",
        Communications: "4G/5G good",
        Education: {
            Literacy_Rate: "98.4%",
            Secondary_Education_Rate: "68%",
            University_Education_Rate: "42%",
            Education_Rank_Worldwide: "22"
        },
        Economy: {
            GDP: "1.43 trillion dollars",
            GDP_Per_Capita: "30,500 dollars",
            Unemployment_Rate: "13.3%",
            Inflation_Rate: "8.3%",
            Main_Exports: "Automobiles, machinery, textiles, tourism"
        },
        Best_Time_To_Visit: "May - September",
        Tourist_Attractions: [
            { name: "Barcelona", desc: "Coastal city with modern architecture", img: "images/إسبانيا/download(4).jpg" },
            { name: "Madrid", desc: "Cultural capital of Spain", img: "images/إسبانيا/download.jpg" },
            { name: "The Alhambra", desc: "Ancient Islamic palace in Granada", img: "images/إسبانيا/download (1).jpg" },
            { name: "Costa del Sol Coast", desc: "Mediterranean beaches", img: "images/إسبانيا/download (2).jpg" },
            { name: "Sagrada Familia", desc: "Unique architectural church", img: "images/إسبانيا/download (3).jpg" }
        ],
        exchangeRate: 1.15 // Euro exchange rate against US dollar
    },
    "Tunisia": {
        flag: "🇹🇳",
        lat: 36.8,
        lng: 10.18,
        Capital: "Tunis",
        Area: "163,610 kmآ²",
        Population: "11.7 million",
        Currency: "Tunisian Dinar",
        Infrastructure_Rank: "15th globally",
        Internet_Speed: "25 Mbps",
        Communications: "4G/5G good",
        Education: {
            Literacy_Rate: "81.8%",
            Secondary_Education_Rate: "55%",
            University_Education_Rate: "28%",
            Education_Rank_Worldwide: "85"
        },
        Economy: {
            GDP: "46 billion dollars",
            GDP_Per_Capita: "3,900 dollars",
            Unemployment_Rate: "15.5%",
            Inflation_Rate: "8.3%",
            Main_Exports: "Oil, phosphate, tourism, textiles"
        },
        Tourist_Attractions: [
            { name: "Carthage", desc: "Ancient archaeological city", img: "images/تونس/download (5).jpg" },
            { name: "Old Medina", desc: "Traditional market and historic sites", img: "images/تونس/download.jpg" },
            { name: "Sidi Bou Said", desc: "Beautiful coastal village", img: "images/تونس/download (1).jpg" },
            { name: "Great Sahara", desc: "Unique desert experience", img: "images/تونس/download (2).jpg" },
            { name: "Djerba Island", desc: "Tourist island with beautiful beaches", img: "images/تونس/download.jpg" }
        ],
        exchangeRate: 2.94
    },
    "Morocco": {
        flag: "🇲🇦",
        lat: 31.7917,
        lng: -7.0926,
        Capital: "Rabat",
        Area: "446,550 kmآ²",
        Population: "36 million",
        Currency: "Moroccan Dirham",
        Infrastructure_Rank: "25th globally",
        Internet_Speed: "20 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "March - May and September - November",
        Tourist_Attractions: [
            { name: "Marrakech", desc: "Historic city and traditional markets", img: "images/المغرب/download (3).jpg" },
            { name: "Fez", desc: "Old city with beautiful Islamic architecture", img: "images/المغرب/Fez city-3-1536x1024.jpg" },
            { name: "Rabat", desc: "Capital of Morocco and historic site", img: "images/المغرب/download.jpg" },
            { name: "Chefchaouen", desc: "Enchanting blue city in the mountains", img: "images/المغرب/download (1).jpg" }
        ],
        exchangeRate: 9.5
    },
    "Syria": {
        flag: "🇸🇾",
        lat: 34.8021,
        lng: 38.9968,
        Capital: "Damascus",
        Area: "185,180 kmآ²",
        Population: "17.5 million",
        Currency: "Syrian Pound",
        Infrastructure_Rank: "120th globally",
        Internet_Speed: "5 Mbps",
        Communications: "4G limited",
        Best_Time_To_Visit: "April - October",
        Tourist_Attractions: [
            { name: "Old Damascus", desc: "Historic city with beautiful Islamic architecture", img: "images/سوريا/download (4).jpg" },
            { name: "Aleppo", desc: "Ancient city with rich cultural heritage", img: "images/سوريا/download.jpg" },
            { name: "Palmyra", desc: "Archaeological city in the desert", img: "images/سوريا/download (1).jpg" },
            { name: "Tyre", desc: "Beautiful coastal city", img: "images/سوريا/download (2).jpg" },
            { name: "Krak des Chevaliers", desc: "Historic Crusader castle", img: "images/سوريا/download (3).jpg" }
        ],
        exchangeRate: 10000
    },
    "Palestine": {
        flag: "🇵🇸",
        lat: 31.9522,
        lng: 35.2332,
        Capital: "Jerusalem",
        Area: "26,990 kmآ²",
        Population: "5.2 million",
        Currency: "Palestinian Pound",
        Infrastructure_Rank: "100th globally",
        Internet_Speed: "15 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "March - May and September - November",
        Tourist_Attractions: [
            { name: "Jerusalem", desc: "Historic and culturally important city", img: "images/فلسطين/download (2).jpg" },
            { name: "Bethlehem", desc: "Ancient city with rich cultural heritage", img: "images/فلسطين/download.jpg" },
            { name: "Gaza", desc: "Beautiful coastal city", img: "images/فلسطين/download (1).jpg" },
            { name: "Nablus", desc: "Historic city with beautiful Islamic architecture", img: "images/فلسطين/download (3).jpg" },
            { name: "Hebron", desc: "Ancient city with rich cultural heritage", img: "images/فلسطين/download (4).jpg" }
        ]
    },
    "Lebanon": {
        flag: "🇱🇧",
        lat: 33.8547,
        lng: 35.8623,
        Capital: "Beirut",
        Area: "10,452 kmآ²",
        Population: "6.8 million",
        Currency: "Lebanese Pound",
        Infrastructure_Rank: "50th globally",
        Internet_Speed: "15 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "April - October",
        Tourist_Attractions: [
            { name: "Beirut", desc: "Vibrant capital with rich culture" },
            { name: "Byblos", desc: "Archaeological city on the coast" },
            { name: "Baalbek", desc: "Massive Roman archaeological site" },
            { name: "Cedars", desc: "Famous cedar forest in Lebanon" },
            { name: "Sidon", desc: "Coastal city with rich cultural heritage" }
        ],
        exchangeRate: 89646
    },
    "Iraq": {
        flag: "🇮🇶",
        lat: 33.2232,
        lng: 43.3615,
        Capital: "Baghdad",
        Area: "438,317 kmآ²",
        Population: "40 million",
        Currency: "Iraqi Dinar",
        Infrastructure_Rank: "80th globally",
        Internet_Speed: "10 Mbps",
        Communications: "4G limited",
        Best_Time_To_Visit: "October - April",
        Tourist_Attractions: [
            { name: "Baghdad", desc: "Historic and cultural capital", img: "images/العراق/download (1).jpg" },
            { name: "Ur", desc: "Ancient archaeological site", img: "images/العراق/download.jpg" },
            { name: "Najaf", desc: "Important religious city", img: "images/العراق/download (2).jpg" }
        ],
        exchangeRate: 1460
    },
    "Jordan": {
        flag: "🇯🇴",
        lat: 31.9454,
        lng: 35.9284,
        Capital: "Amman",
        Area: "89,342 kmآ²",
        Population: "10 million",
        Currency: "Jordanian Dinar",
        Infrastructure_Rank: "65th globally",
        Internet_Speed: "20 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "October - April",
        Tourist_Attractions: [
            { name: "Amman", desc: "Modern capital", img: "images/الأردن/download (3).jpg" },
            { name: "Dead Sea", desc: "Lowest point on Earth", img: "images/الأردن/download.jpg" },
            { name: "Petra", desc: "Ancient pink city", img: "images/الأردن/download (1).jpg" }
        ],
        exchangeRate: 0.71
    },
    "Thailand": {
        flag: "🇹🇭",
        lat: 15.8700,
        lng: 100.9925,
        Capital: "Bangkok",
        Area: "513,120 kmآ²",
        Population: "70 million",
        Currency: "Thai Baht",
        Infrastructure_Rank: "55th globally",
        Internet_Speed: "22 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "November - February",
        Tourist_Attractions: [
            { name: "Bangkok", desc: "Bustling capital" },
            { name: "Phuket", desc: "Beautiful island" },
            { name: "Chiang Mai", desc: "Historic city" }
        ],
        exchangeRate: 36.5
    },
    "Colombia": {
        flag: "🇨🇴",
        lat: 4.5709,
        lng: -74.2973,
        Capital: "Bogota",
        Area: "1,141,748 kmآ²",
        Population: "52 million",
        Currency: "Colombian Peso",
        Infrastructure_Rank: "70th globally",
        Internet_Speed: "21 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "December - March",
        Tourist_Attractions: [
            { name: "Bogota", desc: "Mountain capital" },
            { name: "Cartagena", desc: "Beautiful colonial city" },
            { name: "Coffee Region", desc: "Famous coffee production area" }
        ],
        exchangeRate: 4150
    },
    "Peru": {
        flag: "🇵🇪",
        lat: -9.1900,
        lng: -75.0152,
        Capital: "Lima",
        Area: "1,285,216 kmآ²",
        Population: "35 million",
        Currency: "Peruvian Sol",
        Infrastructure_Rank: "80th globally",
        Internet_Speed: "18 Mbps",
        Communications: "4G moderate",
        Best_Time_To_Visit: "May - September",
        Tourist_Attractions: [
            { name: "Lima", desc: "Coastal capital" },
            { name: "Machu Picchu", desc: "Ancient archaeological wonder" },
            { name: "Amazon River", desc: "Greatest natural river" }
        ],
        exchangeRate: 3.75
    },
    "Chile": {
        flag: "🇨🇱",
        lat: -35.6751,
        lng: -71.5430,
        Capital: "Santiago",
        Area: "756,096 kmآ²",
        Population: "19 million",
        Currency: "Chilean Peso",
        Infrastructure_Rank: "45th globally",
        Internet_Speed: "28 Mbps",
        Communications: "4G excellent",
        Best_Time_To_Visit: "December - February",
        Tourist_Attractions: [
            { name: "Santiago", desc: "Modern mountain capital" },
            { name: "Atacama", desc: "Beautiful desert" },
            { name: "Patagonia", desc: "Stunning glacial landscape" }
        ],
        exchangeRate: 950
    },
    "Uruguay": {
        flag: "🇺🇾",
        lat: -33.8688,
        lng: -56.1693,
        Capital: "Montevideo",
        Area: "176,215 kmآ²",
        Population: "3.5 million",
        Currency: "Uruguayan Peso",
        Infrastructure_Rank: "42nd globally",
        Internet_Speed: "30 Mbps",
        Communications: "4G excellent",
        Best_Time_To_Visit: "December - February",
        Tourist_Attractions: [
            { name: "Montevideo", desc: "Beautiful coastal capital" },
            { name: "Punta del Este", desc: "Coastal resort" },
            { name: "Canelones", desc: "Wine region" }
        ],
        exchangeRate: 39
    },
    "Paraguay": {
        flag: "🇵🇾",
        lat: -23.4425,
        lng: -58.4438,
        Capital: "Asuncion",
        Area: "406,752 kmآ²",
        Population: "7 million",
        Currency: "Paraguayan Guarani",
        Infrastructure_Rank: "85th globally",
        Internet_Speed: "14 Mbps",
        Communications: "4G moderate",
        Best_Time_To_Visit: "March - May",
        Tourist_Attractions: [
            { name: "Asuncion", desc: "River capital" },
            { name: "Iguazu", desc: "Great falls" },
            { name: "Cato Island", desc: "Natural island" }
        ],
        exchangeRate: 7300
    },
    "Bolivia": {
        flag: "🇧🇴",
        lat: -16.2902,
        lng: -63.5887,
        Capital: "La Paz",
        Area: "1,098,581 kmآ²",
        Population: "12 million",
        Currency: "Boliviano",
        Infrastructure_Rank: "108th globally",
        Internet_Speed: "11 Mbps",
        Communications: "4G limited",
        Best_Time_To_Visit: "May - October",
        Tourist_Attractions: [
            { name: "La Paz", desc: "High mountain capital" },
            { name: "Salar de Uyuni", desc: "White salt flat" },
            { name: "Colored Lakes", desc: "Colored lakes" }
        ],
        exchangeRate: 6.9
    },
    "Ecuador": {
        flag: "🇪🇨",
        lat: -1.8312,
        lng: -78.1834,
        Capital: "Quito",
        Area: "283,561 kmآ²",
        Population: "18 million",
        Currency: "US Dollar",
        Infrastructure_Rank: "78th globally",
        Internet_Speed: "17 Mbps",
        Communications: "4G moderate",
        Best_Time_To_Visit: "June - August",
        Tourist_Attractions: [
            { name: "Quito", desc: "Mountain capital" },
            { name: "Galapagos Islands", desc: "Unique natural islands" },
            { name: "Amazon", desc: "Tropical rainforests" }
        ],
        exchangeRate: 1
    },
    "Venezuela": {
        flag: "🇻🇪",
        lat: 6.4238,
        lng: -66.5897,
        Capital: "Caracas",
        Area: "916,445 kmآ²",
        Population: "28 million",
        Currency: "Venezuelan Bolivar",
        Infrastructure_Rank: "95th globally",
        Internet_Speed: "12 Mbps",
        Communications: "4G limited",
        Best_Time_To_Visit: "December - April",
        Tourist_Attractions: [
            { name: "Caracas", desc: "Mountain capital" },
            { name: "Angel Falls", desc: "Great waterfall" },
            { name: "Lake Maracaibo", desc: "Large lake" }
        ],
        exchangeRate: 43500
    },
    "USA": {
        flag: "🇺🇸",
        lat: 37.0902,
        lng: -95.7129,
        Capital: "Washington",
        Area: "9,833,517 kmآ²",
        Population: "333 million",
        Currency: "US Dollar",
        Infrastructure_Rank: "13th globally",
        Internet_Speed: "42 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "June - September",
        Tourist_Attractions: [
            { name: "New York", desc: "Great city" },
            { name: "Washington", desc: "Political capital" },
            { name: "Los Angeles", desc: "Movie city" }
        ],
        exchangeRate: 1
    },
    "Canada": {
        flag: "🇨🇦",
        lat: 56.1304,
        lng: -106.3468,
        Capital: "Ottawa",
        Area: "9,984,670 kmآ²",
        Population: "39 million",
        Currency: "Canadian Dollar",
        Infrastructure_Rank: "25th globally",
        Internet_Speed: "38 Mbps",
        Communications: "5G good",
        Best_Time_To_Visit: "June - September",
        Tourist_Attractions: [
            { name: "Ottawa", desc: "Federal capital" },
            { name: "Niagara", desc: "Great falls" },
            { name: "Toronto", desc: "Large modern city" }
        ],
        exchangeRate: 1.35
    },
    "Greenland": {
        flag: "🇬🇱",
        lat: 71.7069,
        lng: -42.6043,
        Capital: "Nuuk",
        Area: "2,166,086 kmآ²",
        Population: "56,000",
        Currency: "Danish Krone",
        Infrastructure_Rank: "70th globally",
        Internet_Speed: "20 Mbps",
        Communications: "4G limited",
        Best_Time_To_Visit: "June - August",
        Tourist_Attractions: [
            { name: "Nuuk", desc: "Icy capital" },
            { name: "Greenland Ice", desc: "Vast ice" },
            { name: "Northern Lights", desc: "Wonderful natural phenomenon" }
        ],
        exchangeRate: 6.8
    },
    "Iceland": {
        flag: "🇮🇸",
        lat: 64.9631,
        lng: -19.0208,
        Capital: "Reykjavik",
        Area: "103,000 kmآ²",
        Population: "0.37 million",
        Currency: "Icelandic Krأ³na",
        Infrastructure_Rank: "20th globally",
        Internet_Speed: "40 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "June - August",
        Tourist_Attractions: [
            { name: "Reykjavik", desc: "Eastern capital" },
            { name: "Blue Lagoon", desc: "Hot springs" },
            { name: "Falls", desc: "Beautiful waterfalls" }
        ],
        exchangeRate: 138
    },
    "Norway": {
        flag: "🇳🇴",
        lat: 60.4720,
        lng: 8.4689,
        Capital: "Oslo",
        Area: "385,207 kmآ²",
        Population: "5.5 million",
        Currency: "Norwegian Krone",
        Infrastructure_Rank: "18th globally",
        Internet_Speed: "40 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "June - August",
        Tourist_Attractions: [
            { name: "Oslo", desc: "Scandinavian capital" },
            { name: "Fjords", desc: "Wild valleys" },
            { name: "Northern Lights", desc: "Rare natural phenomenon" }
        ],
        exchangeRate: 10.8
    },
    "Sweden": {
        flag: "🇸🇪",
        lat: 60.1282,
        lng: 18.6435,
        Capital: "Stockholm",
        Area: "449,964 kmآ²",
        Population: "10.5 million",
        Currency: "Swedish Krona",
        Infrastructure_Rank: "15th globally",
        Internet_Speed: "42 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "June - August",
        Tourist_Attractions: [
            { name: "Stockholm", desc: "Queen of the Seas" },
            { name: "Gotland", desc: "Beautiful rural area" },
            { name: "Lapland", desc: "Land of snow" }
        ],
        exchangeRate: 10.8
    },
    "Finland": {
        flag: "🇫🇮",
        lat: 61.9241,
        lng: 25.7482,
        Capital: "Helsinki",
        Area: "338,145 kmآ²",
        Population: "5.5 million",
        Currency: "Euro",
        Infrastructure_Rank: "16th globally",
        Internet_Speed: "45 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "June - August",
        Tourist_Attractions: [
            { name: "Helsinki", desc: "Sea capital" },
            { name: "Lapland", desc: "Snowy area" },
            { name: "Lakes", desc: "Thousands of pure lakes" }
        ],
        exchangeRate: 0.95
    },
    "Denmark": {
        flag: "🇩🇰",
        lat: 56.2639,
        lng: 9.5018,
        Capital: "Copenhagen",
        Area: "43,094 kmآ²",
        Population: "5.9 million",
        Currency: "Danish Krone",
        Infrastructure_Rank: "14th globally",
        Internet_Speed: "42 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "May - September",
        Tourist_Attractions: [
            { name: "Copenhagen", desc: "Cheerful capital" },
            { name: "Tivoli", desc: "Amusement park" },
            { name: "Castles", desc: "Historic palaces" }
        ],
        exchangeRate: 7.1
    },
    "Netherlands": {
        flag: "🇳🇱",
        lat: 52.1326,
        lng: 5.2913,
        Capital: "Amsterdam",
        Area: "41,850 kmآ²",
        Population: "17.5 million",
        Currency: "Euro",
        Infrastructure_Rank: "12th globally",
        Internet_Speed: "45 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "April - May",
        Tourist_Attractions: [
            { name: "Amsterdam", desc: "City of canals" },
            { name: "Tulip Fields", desc: "Colored flower fields" },
            { name: "Rotterdam", desc: "Modern port" }
        ],
        exchangeRate: 0.95
    },
    "Belgium": {
        flag: "🇧🇪",
        lat: 50.5039,
        lng: 4.4699,
        Capital: "Brussels",
        Area: "30,528 kmآ²",
        Population: "11.7 million",
        Currency: "Euro",
        Infrastructure_Rank: "20th globally",
        Internet_Speed: "38 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "April - September",
        Tourist_Attractions: [
            { name: "Brussels", desc: "European capital" },
            { name: "Bruges", desc: "Medieval city" },
            { name: "Antwerp", desc: "Diamond city" }
        ],
        exchangeRate: 0.95
    }
};

let map = null;

// Populate dropdown lists
window.addEventListener("DOMContentLoaded", () => {

    const countrySelect1 = document.getElementById("country1");
    const countrySelect2 = document.getElementById("country2");
    const search1 = document.getElementById("search1");
    const search2 = document.getElementById("search2");
    const passportSelect = document.getElementById("passport");

    const countries = Object.keys(countriesData)
        .sort((a, b) => a.localeCompare(b, "en"));

    // Fill country lists
    countries.forEach(country => {
        const option1 = document.createElement("option");
        option1.value = country;
        option1.textContent = country;
        countrySelect1.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = country;
        option2.textContent = country;
        countrySelect2.appendChild(option2);
    });

    // Fill passport list (nationalities)
    if (passportSelect) {
        const passports = Object.keys(visaRequirements)
            .sort((a, b) => a.localeCompare(b, "en"));

        passports.forEach(passport => {
            const option = document.createElement("option");
            option.value = passport;
            option.textContent = passport;
            passportSelect.appendChild(option);
        });
    }

    // Add search and filter handlers
    if (search1) {
        search1.addEventListener("input", (e) => filterCountries(e.target.value, countrySelect1));
        search1.addEventListener("keypress", (e) => {
            if (e.key === "Enter") compareCountries();
        });
    }

    if (search2) {
        search2.addEventListener("input", (e) => filterCountries(e.target.value, countrySelect2));
        search2.addEventListener("keypress", (e) => {
            if (e.key === "Enter") compareCountries();
        });
    }

    // Support ENTER for comparison
    countrySelect1.addEventListener("keypress", (e) => {
        if (e.key === "Enter") compareCountries();
    });

    countrySelect2.addEventListener("keypress", (e) => {
        if (e.key === "Enter") compareCountries();
    });

    // Update visa display on country change
    countrySelect1.addEventListener("change", () => {
        updateVisaDisplay();
    });

    countrySelect2.addEventListener("change", () => {
        updateVisaDisplay();
    });

});

// Function called when passport changes
function onPassportChange() {
    const passport = document.getElementById("passport").value;
    const filterButtons = document.getElementById("visa-filter-buttons");

    if (passport) {
        filterButtons.style.display = "flex";
    } else {
        filterButtons.style.display = "none";
    }

    resetCountrySelects();
    updateVisaDisplay();
}

function resetCountrySelects() {
    const countrySelect1 = document.getElementById("country1");
    const countrySelect2 = document.getElementById("country2");
    const countries = Object.keys(countriesData)
        .sort((a, b) => a.localeCompare(b, "en"));

    const options1 = countrySelect1.querySelectorAll("option:not(:first-child)");
    const options2 = countrySelect2.querySelectorAll("option:not(:first-child)");
    options1.forEach(opt => opt.remove());
    options2.forEach(opt => opt.remove());

    countries.forEach(country => {
        const option1 = document.createElement("option");
        option1.value = country;
        option1.textContent = country;
        countrySelect1.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = country;
        option2.textContent = country;
        countrySelect2.appendChild(option2);
    });
}

// Function to filter countries by visa type
function filterByVisa(visaType, showButtons = true) {
    const passport = document.getElementById("passport").value;

    if (!passport) {
        alert("Please select a passport first");
        return;
    }

    const requirements = visaRequirements[passport];
    if (!requirements) {
        alert("No data available for this nationality");
        return;
    }

    // Determine allowed countries
    let allowedCountries = [];

    if (visaType === 'allowed') {
        allowedCountries = Array.from(new Set([...(requirements.noVisa || []), ...(requirements.onArrival || [])]));
    } else if (visaType === 'all-countries') {
        allowedCountries = Object.keys(countriesData);
    }

    // Only keep countries for which we have data
    allowedCountries = allowedCountries.filter(country => Boolean(countriesData[country]));

    updateCountrySelects(allowedCountries, passport, visaType);
}

// Function to update country dropdowns
function updateCountrySelects(allowedCountries, passport, visaType) {
    const countrySelect1 = document.getElementById("country1");
    const countrySelect2 = document.getElementById("country2");

    // Clear all options (except empty option)
    const options1 = countrySelect1.querySelectorAll("option:not(:first-child)");
    const options2 = countrySelect2.querySelectorAll("option:not(:first-child)");

    options1.forEach(opt => opt.remove());
    options2.forEach(opt => opt.remove());

    // Add allowed countries
    allowedCountries
        .sort((a, b) => a.localeCompare(b, "en"))
        .forEach(country => {
            const option1 = document.createElement("option");
            option1.value = country;
            
            // Add visa indicator next to country name if allowed
            if (visaType === 'allowed') {
                const requirements = visaRequirements[passport];
                if (requirements && requirements.noVisa.includes(country)) {
                    option1.textContent = `${country} ✅ No Visa`;
                } else if (requirements && requirements.onArrival.includes(country)) {
                    option1.textContent = `${country} ⏱️ Visa on Arrival`;
                } else {
                    option1.textContent = country;
                }
            } else {
                // For all countries view, no markers
                option1.textContent = country;
            }
            
            countrySelect1.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = country;
            option2.textContent = option1.textContent;
            countrySelect2.appendChild(option2);
        });

    // Show helpful message
    if (allowedCountries.length === 0) {
        const emptyMsg = document.createElement("option");
        emptyMsg.textContent = "No countries available";
        countrySelect1.appendChild(emptyMsg);
        countrySelect2.appendChild(emptyMsg.cloneNode(true));
    }
}

// Function to update visa information
function updateVisaDisplay() {
    const passport = document.getElementById("passport").value;
    const country1 = document.getElementById("country1").value;
    const country2 = document.getElementById("country2").value;
    const visaInfoDiv = document.getElementById("visa-info");

    if (!passport) {
        visaInfoDiv.innerHTML = '';
        return;
    }

    const requirements = visaRequirements[passport];

    if (!requirements) {
        visaInfoDiv.innerHTML = '';
        return;
    }

    let html = '<div class="visa-category">';

    // Show no visa countries
    if (requirements.noVisa && requirements.noVisa.length > 0) {
        html += `
            <div class="visa-type no-visa">
                <h4>✅ No Visa Required</h4>
                <div class="visa-countries">
                    ${requirements.noVisa.map(country => {
                        const flagDisplay = getFlagDisplay(country);
                        const isSelected = country === country1 || country === country2 ? 'border: 3px solid #27ae60;' : '';
                        return `<span class="country-badge" style="${isSelected}">${flagDisplay} ${country}</span>`;
                    }).join('')}
                </div>
            </div>
        `;
    }

    // Show visa on arrival countries
    if (requirements.onArrival && requirements.onArrival.length > 0) {
        html += `
            <div class="visa-type on-arrival">
                <h4>🛂 Visa on Arrival</h4>
                <div class="visa-countries">
                    ${requirements.onArrival.map(country => {
                        const flagDisplay = getFlagDisplay(country);
                        const isSelected = country === country1 || country === country2 ? 'border: 3px solid #f39c12;' : '';
                        return `<span class="country-badge" style="${isSelected}">${flagDisplay} ${country}</span>`;
                    }).join('')}
                </div>
            </div>
        `;
    }

    html += '</div>';

    if (requirements.noVisa.length === 0 && requirements.onArrival.length === 0) {
        html = '';
    }

    visaInfoDiv.innerHTML = html;
}

// Function to filter countries in dropdown
function filterCountries(searchText, selectElement) {
    const options = selectElement.querySelectorAll("option");
    const searchLower = searchText.toLowerCase().trim();

    options.forEach(option => {
        if (option.value === "") {
            option.style.display = ""; // Show empty option
            return;
        }

        const countryName = option.textContent.toLowerCase();
        const isMatch = countryName.includes(searchLower);
        option.style.display = isMatch ? "" : "none";
    });

    // Show first matching option automatically
    if (searchLower) {
        for (const option of options) {
            if (option.value && option.style.display !== "none") {
                selectElement.value = option.value;
                break;
            }
        }
    }
}

// Function to select country from quick buttons
function selectCountry(country, countryNumber) {
    const selectElement = document.getElementById(`country${countryNumber}`);
    const searchElement = document.getElementById(`search${countryNumber}`);

    if (selectElement) {
        selectElement.value = country;
    }

    if (searchElement) {
        searchElement.value = country;
    }
}

// Function to reset selections
function clearSelections() {
    document.getElementById("country1").value = "";
    document.getElementById("country2").value = "";
    document.getElementById("search1").value = "";
    document.getElementById("search2").value = "";
    document.getElementById("passport").value = "";
    document.getElementById("comparison").innerHTML = "";
    document.getElementById("comparison").classList.remove("two-column");
    document.getElementById("visa-info").innerHTML = "";
    document.getElementById("visa-filter-buttons").style.display = "none";
    document.getElementById("comparison-tabs").style.display = "none";
    document.getElementById("global-map-section").innerHTML = "";

    resetCountrySelects();
    
    // Reset tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    const generalTab = document.getElementById('general-tab');
    if (generalTab) generalTab.classList.add('active');
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach((btn, index) => {
        if (index === 0) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    
    // Reset country list to all
    const countries = Object.keys(countriesData)
        .sort((a, b) => a.localeCompare(b, "en"));

    const countrySelect1 = document.getElementById("country1");
    const countrySelect2 = document.getElementById("country2");

    // Clear options (except empty option)
    const options1 = countrySelect1.querySelectorAll("option:not(:first-child)");
    const options2 = countrySelect2.querySelectorAll("option:not(:first-child)");
    options1.forEach(opt => opt.remove());
    options2.forEach(opt => opt.remove());

    // Reset all countries
    countries.forEach(country => {
        const option1 = document.createElement("option");
        option1.value = country;
        option1.textContent = country;
        countrySelect1.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = country;
        option2.textContent = country;
        countrySelect2.appendChild(option2);
    });
}

function createCountryCard(country, data, countryId) {

    const attractionsHTML = data.Tourist_Attractions.map(attr => {
        const imageSrc = attr.img ? encodeURI(attr.img) : null;
        return `
        <div class="attraction-item">
            <h4>${attr.name}</h4>
            <p>${attr.desc}</p>
            ${imageSrc ? `<img src="${imageSrc}" class="attraction-img" loading="lazy" alt="${attr.name}">` : ""}
        </div>
        `;
    }).join("");

    const flagDisplay = getFlagDisplay(country);

    return `
    <div class="country-card">
        <div class="country-header">
            <div class="flag-container">${flagDisplay}</div>
            <h2 class="country-title">${country}</h2>
        </div>
        <div class="info-grid">
            <div class="info-item">
                <strong>Capital</strong>
                <p>${data.Capital}</p>
            </div>
            <div class="info-item">
                <strong>Area</strong>
                <p>${data.Area}</p>
            </div>
            <div class="info-item">
                <strong>Population</strong>
                <p>${data.Population}</p>
            </div>
            <div class="info-item">
                <strong>Currency</strong>
                <p>1 USD ≈ ${data.exchangeRate} ${data.Currency}</p>
            </div>
            <div class="info-item">
                <strong>Infrastructure</strong>
                <p>${data.Infrastructure_Rank}</p>
            </div>
            <div class="info-item">
                <strong>Internet Speed</strong>
                <p>${data.Internet_Speed}</p>
            </div>
            <div class="info-item">
                <strong>Communications</strong>
                <p>${data.Communications}</p>
            </div>
            <div class="info-item">
                <strong>Best Time to Visit</strong>
                <p>${data.Best_Time_To_Visit}</p>
            </div>
        </div>
        <div class="attractions-section">
            <h3>Top Tourist Attractions</h3>
            <div class="attractions-list">
                ${attractionsHTML}
            </div>
        </div>
        <div class="booking-section">
            <h3>Start Your Journey Now</h3>
            <div class="booking-buttons">
                <a href="https://www.booking.com/searchresults.html?ss=${country}"
                target="_blank"
                class="booking-btn">
                Book Hotel on Booking
                </a>
                <a href="https://www.airbnb.com/s/${country}/homes"
                target="_blank"
                class="booking-btn airbnb">
                Find Apartment on Airbnb
                </a>
            </div>
        </div>
        <div class="map-container" style="margin-top: 30px;">
            <h3 style="color:#667eea; margin-bottom:10px;">Geographic Location on Map</h3>
            <div id="map-${countryId}"></div>
        </div>
    </div>
    `;
}

// Switch comparison tabs
function switchComparisonTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab and activate button
    const activeTab = document.getElementById(tabName + '-tab');
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    const activeBtn = event.target;
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Create economic comparison
function createEconomyComparison(country1, country2) {
    const data1 = countriesData[country1];
    const data2 = countriesData[country2];
    
    if (!data1 || !data2) return "";
    
    const economy1 = data1.Economy || {};
    const economy2 = data2.Economy || {};
    
    let html = `<h2 style="color: #00d4ff; text-align: center; margin-bottom: 30px;">Economic Comparison between ${country1} and ${country2}</h2>`;
    
    html += `<div class="economy-comparison-row">
        <div class="metric-item">
            <strong>${country1}</strong>
            <p><strong>GDP:</strong> ${economy1.GDP || 'Not available'}</p>
            <p><strong>GDP Per Capita:</strong> ${economy1.GDP_Per_Capita || 'Not available'}</p>
            <p><strong>Unemployment Rate:</strong> ${economy1.Unemployment_Rate || 'Not available'}</p>
            <p><strong>Inflation Rate:</strong> ${economy1.Inflation_Rate || 'Not available'}</p>
            <p><strong>Main Exports:</strong> ${economy1.Main_Exports || 'Not available'}</p>
        </div>
        <div class="metric-item">
            <strong>${country2}</strong>
            <p><strong>GDP:</strong> ${economy2.GDP || 'Not available'}</p>
            <p><strong>GDP Per Capita:</strong> ${economy2.GDP_Per_Capita || 'Not available'}</p>
            <p><strong>Unemployment Rate:</strong> ${economy2.Unemployment_Rate || 'Not available'}</p>
            <p><strong>Inflation Rate:</strong> ${economy2.Inflation_Rate || 'Not available'}</p>
            <p><strong>Main Exports:</strong> ${economy2.Main_Exports || 'Not available'}</p>
        </div>
    </div>`;
    
    // Additional data
    html += `<div class="economy-comparison-row">
        <div class="metric-item">
            <strong>Infrastructure - ${country1}</strong>
            <p>Infrastructure Rank: <span class="metric-value">${data1.Infrastructure_Rank || 'Not available'}</span></p>
            <p>Internet Speed: <span class="metric-value">${data1.Internet_Speed || 'Not available'}</span></p>
            <p>Communications: <span class="metric-value">${data1.Communications || 'Not available'}</span></p>
        </div>
        <div class="metric-item">
            <strong>Infrastructure - ${country2}</strong>
            <p>Infrastructure Rank: <span class="metric-value">${data2.Infrastructure_Rank || 'Not available'}</span></p>
            <p>Internet Speed: <span class="metric-value">${data2.Internet_Speed || 'Not available'}</span></p>
            <p>Communications: <span class="metric-value">${data2.Communications || 'Not available'}</span></p>
        </div>
    </div>`;
    
    return html;
}

// Create cultural comparison
function createCultureComparison(country1, country2) {
    const data1 = countriesData[country1];
    const data2 = countriesData[country2];
    
    if (!data1 || !data2) return "";
    
    const edu1 = data1.Education || {};
    const edu2 = data2.Education || {};
    
    let html = `<h2 style="color: #ff6b9d; text-align: center; margin-bottom: 30px;">Cultural and Education Comparison between ${country1} and ${country2}</h2>`;
    
    html += `<div class="culture-comparison-container">
        <div class="culture-card">
            <h3>${country1}</h3>
            <div class="culture-aspect">
                <strong>Geography</strong>
                <p><strong>Capital:</strong> ${data1.Capital || 'Not available'}</p>
                <p><strong>Area:</strong> ${data1.Area || 'Not available'}</p>
                <p><strong>Population:</strong> ${data1.Population || 'Not available'}</p>
            </div>
            <div class="culture-aspect">
                <strong>Education and Culture</strong>
                <p><strong>Literacy Rate:</strong> ${edu1.Literacy_Rate || 'Not available'}</p>
                <p><strong>Secondary Education Rate:</strong> ${edu1.Secondary_Education_Rate || 'Not available'}</p>
                <p><strong>University Education Rate:</strong> ${edu1.University_Education_Rate || 'Not available'}</p>
                <p><strong>Education Rank Worldwide:</strong> ${edu1.Education_Rank_Worldwide || 'Not available'}</p>
            </div>
            <div class="culture-aspect">
                <strong>Financial Information</strong>
                <p><strong>Currency:</strong> ${data1.Currency || 'Not available'}</p>
                <p><strong>Exchange Rate:</strong> ${data1.exchangeRate || 'Not available'} per dollar</p>
            </div>
            <div class="culture-aspect">
                <strong>Heritage and Tourist Attractions</strong>
                <p><strong>Best Time to Visit:</strong> ${data1.Best_Time_To_Visit || 'Not available'}</p>
                <p><strong>Number of Tourist Sites:</strong> ${(data1.Tourist_Attractions || []).length}</p>
            </div>
        </div>
        
        <div class="culture-card">
            <h3>${country2}</h3>
            <div class="culture-aspect">
                <strong>Geography</strong>
                <p><strong>Capital:</strong> ${data2.Capital || 'Not available'}</p>
                <p><strong>Area:</strong> ${data2.Area || 'Not available'}</p>
                <p><strong>Population:</strong> ${data2.Population || 'Not available'}</p>
            </div>
            <div class="culture-aspect">
                <strong>Education and Culture</strong>
                <p><strong>Literacy Rate:</strong> ${edu2.Literacy_Rate || 'Not available'}</p>
                <p><strong>Secondary Education Rate:</strong> ${edu2.Secondary_Education_Rate || 'Not available'}</p>
                <p><strong>University Education Rate:</strong> ${edu2.University_Education_Rate || 'Not available'}</p>
                <p><strong>Education Rank Worldwide:</strong> ${edu2.Education_Rank_Worldwide || 'Not available'}</p>
            </div>
            <div class="culture-aspect">
                <strong>Financial Information</strong>
                <p><strong>Currency:</strong> ${data2.Currency || 'Not available'}</p>
                <p><strong>Exchange Rate:</strong> ${data2.exchangeRate || 'Not available'} per dollar</p>
            </div>
            <div class="culture-aspect">
                <strong>Heritage and Tourist Attractions</strong>
                <p><strong>Best Time to Visit:</strong> ${data2.Best_Time_To_Visit || 'Not available'}</p>
                <p><strong>Number of Tourist Sites:</strong> ${(data2.Tourist_Attractions || []).length}</p>
            </div>
        </div>
    </div>`;
    
    return html;
}

// Function to display details and comparison
function compareCountries() {
    const country1 = document.getElementById("country1").value;
    const country2 = document.getElementById("country2").value;
    const comparisonDiv = document.getElementById("comparison");
    const comparisonTabs = document.getElementById("comparison-tabs");

    if (!country1 && !country2) {
        comparisonDiv.innerHTML = `<p class="warning">Please select at least one country</p>`;
        comparisonTabs.style.display = "none";
        return;
    }

    let html = "";
    comparisonDiv.classList.remove("two-column");

    if (country1) {
        const data1 = countriesData[country1];
        html += createCountryCard(country1, data1, "1");
    }

    if (country2) {
        const data2 = countriesData[country2];
        html += createCountryCard(country2, data2, "2");
        comparisonDiv.classList.add("two-column");
    }

    comparisonDiv.innerHTML = html;

    // Show comparison tabs for any selection
    if (country1 || country2) {
        comparisonTabs.style.display = "block";
        
        // Fill tabs only when comparing two countries
        if (country1 && country2) {
            // Fill economic comparison
            const economyDiv = document.getElementById("economy-comparison");
            economyDiv.innerHTML = createEconomyComparison(country1, country2);
            createAnimatedChart("economy-chart-container", country1, country2, "economy");
            
            // Fill cultural comparison
            const cultureDiv = document.getElementById("culture-comparison");
            cultureDiv.innerHTML = createCultureComparison(country1, country2);
            createAnimatedChart("culture-chart-container", country1, country2, "culture");
            
            // Fill educational comparison
            const educationDiv = document.getElementById("education-comparison");
            educationDiv.innerHTML = createEducationComparison(country1, country2);
            createAnimatedChart("education-chart-container", country1, country2, "education");
            
            // Fill infrastructure comparison
            const infrastructureDiv = document.getElementById("infrastructure-comparison");
            infrastructureDiv.innerHTML = createInfrastructureComparison(country1, country2);
            createAnimatedChart("infrastructure-chart-container", country1, country2, "infrastructure");
        }
    } else {
        comparisonTabs.style.display = "none";
    }

    // Show map at bottom after comparison
    const mapSection = document.getElementById("global-map-section");
    if (country1 || country2) {
        let mapHtml = `<div class='map-container' style='margin-top:30px;'>`;
        mapHtml += `<h3 style='color:#667eea; margin-bottom:10px;'>Geographic Location of Selected Countries</h3>`;
        mapHtml += `<div id='global-map' style='height:400px;'></div>`;
        mapHtml += `</div>`;
        mapSection.innerHTML = mapHtml;
        setTimeout(() => {
            loadGlobalMap(country1, country2);
        }, 200);
    } else {
        mapSection.innerHTML = "";
    }
}

// Draw global map for selected countries
function loadGlobalMap(country1, country2) {
    const mapDiv = document.getElementById("global-map");
    if (!mapDiv) return;
    mapDiv.innerHTML = "";
    let center = [30, 20];
    let zoom = 2;
    let markers = [];
    let map;
    // Calculate map center based on selected countries
    if (country1 && countriesData[country1] && country2 && countriesData[country2]) {
        const lat1 = countriesData[country1].lat;
        const lng1 = countriesData[country1].lng;
        const lat2 = countriesData[country2].lat;
        const lng2 = countriesData[country2].lng;
        center = [ (lat1+lat2)/2, (lng1+lng2)/2 ];
        zoom = 3;
    } else if (country1 && countriesData[country1]) {
        center = [countriesData[country1].lat, countriesData[country1].lng];
        zoom = 5;
    } else if (country2 && countriesData[country2]) {
        center = [countriesData[country2].lat, countriesData[country2].lng];
        zoom = 5;
    }
    map = L.map("global-map").setView(center, zoom);
    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "آ© OpenStreetMap",
            maxZoom: 19
        }
    ).addTo(map);
    if (country1 && countriesData[country1]) {
        const marker1 = L.marker([countriesData[country1].lat, countriesData[country1].lng])
            .addTo(map)
            .bindPopup(`🚩 ${country1}`)
            .openPopup();
        markers.push(marker1);
    }
    if (country2 && countriesData[country2]) {
        const marker2 = L.marker([countriesData[country2].lat, countriesData[country2].lng])
            .addTo(map)
            .bindPopup(`🚩 ${country2}`)
            .openPopup();
        markers.push(marker2);
    }
    // Adjust map bounds to include all markers
    if (markers.length > 1) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.3));
    }
}

// --- Show country map directly when selected ---
function showSingleMap(selectId, mapDivId) {
    const country = document.getElementById(selectId).value;
    const mapDiv = document.getElementById(mapDivId);
    if (!country) {
        mapDiv.innerHTML = "";
        return;
    }
    const data = countriesData[country];
    if (!data) {
        mapDiv.innerHTML = "";
        return;
    }
    mapDiv.innerHTML = `<div class='map-container'><div id='single-${mapDivId}' style='height:300px;'></div></div>`;
    setTimeout(() => {
        loadMap(data, `single-${mapDivId}`);
    }, 100);
}

// Add event listeners after page load
window.addEventListener("DOMContentLoaded", function() {
    const countrySelect1 = document.getElementById("country1");
    const countrySelect2 = document.getElementById("country2");
    if (countrySelect1) {
        countrySelect1.addEventListener("change", function() {
            showSingleMap("country1", "map-preview-1");
        });
    }
    if (countrySelect2) {
        countrySelect2.addEventListener("change", function() {
            showSingleMap("country2", "map-preview-2");
        });
    }
});

// Function to load map
function loadMap(data, mapId = "map") {

    const mapContainer = document.getElementById(mapId);
    
    if (!mapContainer) return;

    // Remove old map if it exists
    if (mapContainer._leaflet_id) {
        document.querySelector(`#${mapId}`).innerHTML = "";
    }

    const currentMap = L.map(mapId).setView([data.lat, data.lng], 5);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "© OpenStreetMap",
            maxZoom: 19
        }
    ).addTo(currentMap);

    L.marker([data.lat, data.lng])
        .addTo(currentMap)
        .bindPopup(`🚩 Location`)
        .openPopup();
}

// Create educational comparison
function createEducationComparison(country1, country2) {
    const data1 = countriesData[country1];
    const data2 = countriesData[country2];
    
    if (!data1 || !data2) return "";
    
    const edu1 = data1.Education || {};
    const edu2 = data2.Education || {};
    
    let html = `<h2 style="color: #ffa500; text-align: center; margin-bottom: 30px;">Educational Comparison between ${country1} and ${country2}</h2>`;
    
    html += `<div class="education-comparison-row">
        <div class="education-card">
            <h3>${country1}</h3>
            <div class="education-metric">
                <span class="metric-label">Literacy Rate:</span>
                <span class="metric-value">${edu1.Literacy_Rate || 'Not available'}</span>
            </div>
            <div class="education-metric">
                <span class="metric-label">Secondary Education Rate:</span>
                <span class="metric-value">${edu1.Secondary_Education_Rate || 'Not available'}</span>
            </div>
            <div class="education-metric">
                <span class="metric-label">University Education Rate:</span>
                <span class="metric-value">${edu1.University_Education_Rate || 'Not available'}</span>
            </div>
            <div class="education-metric">
                <span class="metric-label">Education Rank Worldwide:</span>
                <span class="metric-value">#${edu1.Education_Rank_Worldwide || 'Not available'}</span>
            </div>
        </div>
        
        <div class="education-card">
            <h3>${country2}</h3>
            <div class="education-metric">
                <span class="metric-label">Literacy Rate:</span>
                <span class="metric-value">${edu2.Literacy_Rate || 'Not available'}</span>
            </div>
            <div class="education-metric">
                <span class="metric-label">Secondary Education Rate:</span>
                <span class="metric-value">${edu2.Secondary_Education_Rate || 'Not available'}</span>
            </div>
            <div class="education-metric">
                <span class="metric-label">University Education Rate:</span>
                <span class="metric-value">${edu2.University_Education_Rate || 'Not available'}</span>
            </div>
            <div class="education-metric">
                <span class="metric-label">Education Rank Worldwide:</span>
                <span class="metric-value">#${edu2.Education_Rank_Worldwide || 'Not available'}</span>
            </div>
        </div>
    </div>`;
    
    return html;
}

// Create infrastructure comparison
function createInfrastructureComparison(country1, country2) {
    const data1 = countriesData[country1];
    const data2 = countriesData[country2];
    
    if (!data1 || !data2) return "";
    
    let html = `<h2 style="color: #00ff88; text-align: center; margin-bottom: 30px;">Infrastructure Comparison between ${country1} and ${country2}</h2>`;
    
    html += `<div class="infrastructure-comparison-row">
        <div class="infrastructure-card">
            <h3>${country1}</h3>
            <div class="infrastructure-metric">
                <span class="metric-label">Infrastructure Rank Worldwide:</span>
                <span class="metric-value">${data1.Infrastructure_Rank || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Internet Speed:</span>
                <span class="metric-value">${data1.Internet_Speed || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Communications:</span>
                <span class="metric-value">${data1.Communications || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Area:</span>
                <span class="metric-value">${data1.Area || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Population:</span>
                <span class="metric-value">${data1.Population || 'Not available'}</span>
            </div>
        </div>
        
        <div class="infrastructure-card">
            <h3>${country2}</h3>
            <div class="infrastructure-metric">
                <span class="metric-label">Infrastructure Rank Worldwide:</span>
                <span class="metric-value">${data2.Infrastructure_Rank || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Internet Speed:</span>
                <span class="metric-value">${data2.Internet_Speed || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Communications:</span>
                <span class="metric-value">${data2.Communications || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Area:</span>
                <span class="metric-value">${data2.Area || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Population:</span>
                <span class="metric-value">${data2.Population || 'Not available'}</span>
            </div>
        </div>
    </div>`;
    
    return html;
}

// Create animated charts
function createAnimatedChart(containerId, country1, country2, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const data1 = countriesData[country1];
    const data2 = countriesData[country2];
    
    if (!data1 || !data2) return;
    
    // Remove old chart if it exists
    const existingCanvas = container.querySelector('canvas');
    if (existingCanvas) {
        existingCanvas.remove();
    }
    
    // Create new canvas element
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    
    let labels = [];
    let data1Values = [];
    let data2Values = [];
    let chartLabel = "";
    let colors1 = "";
    let colors2 = "";
    
    // Set up data based on comparison type
    if (type === "economy") {
        labels = ["GDP (Billion)", "GDP Per Capita", "Unemployment Rate", "Inflation Rate"];
        chartLabel = "Economic Comparison";
        colors1 = "rgba(0, 212, 255, 0.7)";
        colors2 = "rgba(255, 0, 128, 0.7)";
        
        // Extract numeric values
        data1Values = [
            parseFloat(data1.Economy?.GDP?.split(' ')[0]) || 0,
            parseFloat(data1.Economy?.GDP_Per_Capita?.split(' ')[0]) || 0,
            parseFloat(data1.Economy?.Unemployment_Rate) || 0,
            parseFloat(data1.Economy?.Inflation_Rate) || 0
        ];
        
        data2Values = [
            parseFloat(data2.Economy?.GDP?.split(' ')[0]) || 0,
            parseFloat(data2.Economy?.GDP_Per_Capita?.split(' ')[0]) || 0,
            parseFloat(data2.Economy?.Unemployment_Rate) || 0,
            parseFloat(data2.Economy?.Inflation_Rate) || 0
        ];
    } else if (type === "culture") {
        labels = ["Literacy Rate", "Area (Thousand kmآ²)", "Population (Million)", "Tourist Sites"];
        chartLabel = "Cultural Comparison";
        colors1 = "rgba(255, 107, 157, 0.7)";
        colors2 = "rgba(255, 165, 0, 0.7)";
        
        data1Values = [
            parseFloat(data1.Education?.Literacy_Rate) || 0,
            parseFloat(data1.Area?.split(' ')[0]) || 0,
            parseFloat(data1.Population?.split(' ')[0]) || 0,
            (data1.Tourist_Attractions?.length || 0) * 10
        ];
        
        data2Values = [
            parseFloat(data2.Education?.Literacy_Rate) || 0,
            parseFloat(data2.Area?.split(' ')[0]) || 0,
            parseFloat(data2.Population?.split(' ')[0]) || 0,
            (data2.Tourist_Attractions?.length || 0) * 10
        ];
    } else if (type === "education") {
        labels = ["Literacy Rate", "Secondary Education", "University Education", "Worldwide Rank"];
        chartLabel = "Educational Comparison";
        colors1 = "rgba(255, 165, 0, 0.7)";
        colors2 = "rgba(0, 255, 136, 0.7)";
        
        data1Values = [
            parseFloat(data1.Education?.Literacy_Rate) || 0,
            parseFloat(data1.Education?.Secondary_Education_Rate) || 0,
            parseFloat(data1.Education?.University_Education_Rate) || 0,
            100 - parseFloat(data1.Education?.Education_Rank_Worldwide?.replace(/\D/g, '')) / 2 || 50
        ];
        
        data2Values = [
            parseFloat(data2.Education?.Literacy_Rate) || 0,
            parseFloat(data2.Education?.Secondary_Education_Rate) || 0,
            parseFloat(data2.Education?.University_Education_Rate) || 0,
            100 - parseFloat(data2.Education?.Education_Rank_Worldwide?.replace(/\D/g, '')) / 2 || 50
        ];
    } else if (type === "infrastructure") {
        labels = ["Internet Speed", "Population (Million)", "Infrastructure", "Density"];
        chartLabel = "Infrastructure Comparison";
        colors1 = "rgba(0, 255, 136, 0.7)";
        colors2 = "rgba(0, 212, 255, 0.7)";
        
        data1Values = [
            parseFloat(data1.Internet_Speed) || 0,
            parseFloat(data1.Population?.split(' ')[0]) || 0,
            100 - parseFloat(data1.Infrastructure_Rank?.replace(/\D/g, '')) / 2 || 50,
            parseFloat(data1.Population?.split(' ')[0]) / parseFloat(data1.Area?.split(' ')[0]) || 0
        ];
        
        data2Values = [
            parseFloat(data2.Internet_Speed) || 0,
            parseFloat(data2.Population?.split(' ')[0]) || 0,
            100 - parseFloat(data2.Infrastructure_Rank?.replace(/\D/g, '')) / 2 || 50,
            parseFloat(data2.Population?.split(' ')[0]) / parseFloat(data2.Area?.split(' ')[0]) || 0
        ];
    }
    
    // Create chart using Chart.js
    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: country1,
                    data: data1Values,
                    backgroundColor: colors1,
                    borderColor: colors1.replace('0.7', '1'),
                    borderWidth: 2,
                    borderRadius: 5,
                    animation: {
                        duration: 1500,
                        easing: 'easeInOutQuart'
                    }
                },
                {
                    label: country2,
                    data: data2Values,
                    backgroundColor: colors2,
                    borderColor: colors2.replace('0.7', '1'),
                    borderWidth: 2,
                    borderRadius: 5,
                    animation: {
                        duration: 1500,
                        easing: 'easeInOutQuart'
                    }
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#e0e0e0',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                },
                title: {
                    display: true,
                    text: chartLabel,
                    color: '#00d4ff',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#a0a0a0'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#a0a0a0'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
}

const authStateKey = "loggedInUserEmail";

function showAuthTab(tab) {
    const loginBtn = document.getElementById("login-tab-btn");
    const registerBtn = document.getElementById("register-tab-btn");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (tab === "login") {
        loginBtn.classList.add("active");
        registerBtn.classList.remove("active");
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
    } else {
        loginBtn.classList.remove("active");
        registerBtn.classList.add("active");
        loginForm.classList.remove("active");
        registerForm.classList.add("active");
    }
}

function showAuthMessage(message, success = false) {
    const messageBox = document.getElementById("auth-message");
    messageBox.textContent = message;
    messageBox.style.color = success ? "#7fff7f" : "#ffd166";
}

function showMainApp() {
    document.getElementById("auth-screen").style.display = "none";
    document.getElementById("main-app").classList.remove("hidden");
    document.getElementById("logout-btn").style.display = "inline-block";
}

function showAuthScreen() {
    document.getElementById("auth-screen").style.display = "flex";
    document.getElementById("main-app").classList.add("hidden");
    document.getElementById("logout-btn").style.display = "none";
}

async function registerUser() {
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value.trim();

    if (!email || !password) {
        return showAuthMessage("الرجاء إدخال البريد الإلكتروني وكلمة المرور.");
    }

    try {
        console.log("Sending register request to:", "http://localhost:3000/register");
        const response = await fetch("http://localhost:3000/register", { mode: "cors",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
            return showAuthMessage("خطأ من الخادم. حاول لاحقاً.");
        }

        const data = await response.json();
        console.log("Response data:", data);

        if (data.success) {
            sessionStorage.setItem(authStateKey, email);
            showAuthMessage("تم إنشاء الحساب بنجاح. مرحبًا بك!", true);
            showMainApp();
        } else {
            showAuthMessage(data.message || "حدث خطأ أثناء التسجيل.");
        }
    } catch (error) {
        console.error("Register error:", error);
        showAuthMessage("فشل الاتصال بالخادم. تأكد من أن السيرفر يعمل.");
    }
}

async function loginUser() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (!email || !password) {
        return showAuthMessage("الرجاء إدخال البريد الإلكتروني وكلمة المرور.");
    }

    try {
        console.log("Sending login request to:", "http://localhost:3000/login");
        const response = await fetch("http://localhost:3000/login", { mode: "cors",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
            return showAuthMessage("خطأ من الخادم. حاول لاحقاً.");
        }

        const data = await response.json();
        console.log("Response data:", data);

        if (data.success) {
            sessionStorage.setItem(authStateKey, email);
            showAuthMessage("تم تسجيل الدخول بنجاح.", true);
            showMainApp();
        } else {
            showAuthMessage(data.message || "البريد أو كلمة المرور غير صحيحة.");
        }
    } catch (error) {
        console.error("Login error:", error);
        showAuthMessage("فشل الاتصال بالخادم. تأكد من أن السيرفر يعمل.");
    }
}

function logoutUser() {
    sessionStorage.removeItem(authStateKey);
    showAuthScreen();
    showAuthMessage("تم تسجيل الخروج بنجاح.", true);
}

function checkLoginState() {
    if (sessionStorage.getItem(authStateKey)) {
        showMainApp();
    } else {
        showAuthScreen();
    }
}

window.addEventListener("load", checkLoginState);



const visaRequirements = {
    "Egypt": {
        noVisa: ["Saudi Arabia", "UAE", "Kuwait", "Qatar", "Bahrain", "Oman"],
        onArrival: ["Turkey", "Tunisia", "Morocco", "Jordan", "Lebanon"]
    },
    "Saudi Arabia": {
        noVisa: ["Egypt", "UAE", "Kuwait", "Qatar", "Bahrain", "Oman"],
        onArrival: ["Turkey", "Tunisia", "Morocco"]
    },
    "UAE": {
        noVisa: ["Egypt", "Saudi Arabia", "Kuwait", "Qatar", "Bahrain", "Oman"],
        onArrival: ["Turkey", "Tunisia", "Morocco", "Jordan"]
    },
    "France": {
        noVisa: ["Italy", "Spain", "Germany", "Greece", "Canada"],
        onArrival: ["Turkey", "Morocco", "Tunisia"]
    },
    "Turkey": {
        noVisa: ["Greece", "Bulgaria"],
        onArrival: ["Egypt", "Saudi Arabia", "UAE", "France", "Tunisia", "Morocco"]
    },
    "Japan": {
        noVisa: ["Canada", "USA"],
        onArrival: ["Turkey", "Thailand"]
    },
    "Tunisia": {
        noVisa: [],
        onArrival: ["Egypt", "Saudi Arabia", "UAE", "France", "Turkey", "Morocco"]
    },
    "Morocco": {
        noVisa: [],
        onArrival: ["Egypt", "Saudi Arabia", "UAE", "France", "Turkey", "Tunisia"]
    },
    "Jordan": {
        noVisa: [],
        onArrival: ["Egypt", "Saudi Arabia", "UAE", "Turkey", "Tunisia", "Morocco"]
    },
    "Lebanon": {
        noVisa: [],
        onArrival: ["Egypt", "Saudi Arabia", "UAE", "Turkey"]
    },
    "Brazil": {
        noVisa: ["Canada"],
        onArrival: ["Turkey", "Morocco"]
    },
    "Mexico": {
        noVisa: ["Canada"],
        onArrival: ["Turkey", "Brazil"]
    },
    "Argentina": {
        noVisa: [],
        onArrival: ["Turkey", "Brazil"]
    },
    "Russia": {
        noVisa: ["Belarus"],
        onArrival: ["Turkey"]
    },
    "Spain": {
        noVisa: ["France", "Italy", "Germany"],
        onArrival: ["Turkey", "Morocco"]
    },
    "Italy": {
        noVisa: ["France", "Spain", "Germany"],
        onArrival: ["Turkey", "Tunisia"]
    },
    "Germany": {
        noVisa: ["France", "Italy", "Spain"],
        onArrival: ["Turkey"]
    },
    "Greece": {
        noVisa: ["France", "Italy", "Germany"],
        onArrival: ["Turkey", "Egypt"]
    },
    "Canada": {
        noVisa: ["USA", "France"],
        onArrival: ["Turkey", "Morocco"]
    },
    "Syria": {
        noVisa: [],
        onArrival: ["Egypt", "Jordan"]
    },
    "Palestine": {
        noVisa: [],
        onArrival: ["Jordan"]
    },
    "Thailand": {
        noVisa: [],
        onArrival: ["Egypt", "Malaysia", "Indonesia"]
    },
    "Malaysia": {
        noVisa: [],
        onArrival: ["Egypt", "Thailand", "Indonesia"]
    },
    "Indonesia": {
        noVisa: [],
        onArrival: ["Egypt", "Thailand", "Malaysia"]
    },
    "Philippines": {
        noVisa: [],
        onArrival: ["Thailand", "Malaysia"]
    },
    "Vietnam": {
        noVisa: [],
        onArrival: ["Thailand", "Cambodia"]
    },
    "Cambodia": {
        noVisa: [],
        onArrival: ["Vietnam", "Thailand"]
    },
    "Laos": {
        noVisa: [],
        onArrival: ["Vietnam", "Thailand"]
    },
    "Myanmar": {
        noVisa: [],
        onArrival: ["Thailand"]
    },
    "Mauritius": {
        noVisa: [],
        onArrival: ["Egypt"]
    },
    "Kenya": {
        noVisa: [],
        onArrival: ["Egypt", "Ethiopia"]
    },
    "Tanzania": {
        noVisa: [],
        onArrival: ["Kenya"]
    },
    "Uganda": {
        noVisa: [],
        onArrival: ["Kenya"]
    },
    "Rwanda": {
        noVisa: [],
        onArrival: ["Kenya"]
    },
    "Cameroon": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Ghana": {
        noVisa: [],
        onArrival: ["Cameroon", "Senegal"]
    },
    "Nigeria": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Ethiopia": {
        noVisa: [],
        onArrival: ["Kenya"]
    },
    "South Africa": {
        noVisa: [],
        onArrival: ["Egypt", "Kenya"]
    },
    "Botswana": {
        noVisa: [],
        onArrival: ["South Africa"]
    },
    "Zimbabwe": {
        noVisa: [],
        onArrival: ["South Africa"]
    },
    "Zambia": {
        noVisa: [],
        onArrival: ["South Africa"]
    },
    "Malawi": {
        noVisa: [],
        onArrival: ["South Africa"]
    },
    "Mozambique": {
        noVisa: [],
        onArrival: ["South Africa"]
    },
    "Senegal": {
        noVisa: [],
        onArrival: ["Ghana", "Mali"]
    },
    "Mali": {
        noVisa: [],
        onArrival: ["Senegal"]
    },
    "Burkina Faso": {
        noVisa: [],
        onArrival: ["Mali"]
    },
    "Ivory Coast": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Benin": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Togo": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Liberia": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Sierra Leone": {
        noVisa: [],
        onArrival: ["Ghana"]
    },
    "Guinea": {
        noVisa: [],
        onArrival: ["Senegal"]
    },
    "Comoros": {
        noVisa: [],
        onArrival: ["Egypt"]
    },
    "Seychelles": {
        noVisa: [],
        onArrival: ["Egypt"]
    },
    "Mongolia": {
        noVisa: [],
        onArrival: ["Japan"]
    },
    "Kazakhstan": {
        noVisa: [],
        onArrival: ["Russia"]
    },
    "Uzbekistan": {
        noVisa: [],
        onArrival: ["Kazakhstan"]
    },
    "Turkmenistan": {
        noVisa: [],
        onArrival: ["Uzbekistan"]
    },
    "Tajikistan": {
        noVisa: [],
        onArrival: ["Uzbekistan"]
    },
    "Kyrgyzstan": {
        noVisa: [],
        onArrival: ["Kazakhstan"]
    },
    "Nepal": {
        noVisa: [],
        onArrival: ["India"]
    },
    "Bangladesh": {
        noVisa: [],
        onArrival: ["India"]
    },
    "Sri Lanka": {
        noVisa: [],
        onArrival: ["India"]
    },
    "India": {
        noVisa: ["Pakistan"],
        onArrival: ["Thailand", "Turkey"]
    },
    "Pakistan": {
        noVisa: ["India"],
        onArrival: ["Iran"]
    },
    "Afghanistan": {
        noVisa: [],
        onArrival: ["Iran", "Pakistan"]
    },
    "Iran": {
        noVisa: ["Iraq"],
        onArrival: ["Turkey", "Jordan"]
    },
    "Iraq": {
        noVisa: ["Iran"],
        onArrival: ["Jordan"]
    },
    "Bhutan": {
        noVisa: [],
        onArrival: ["India"]
    },
    "Colombia": {
        noVisa: [],
        onArrival: ["Brazil", "Peru"]
    },
    "Peru": {
        noVisa: [],
        onArrival: ["Colombia", "Argentina"]
    },
    "Chile": {
        noVisa: [],
        onArrival: ["Argentina", "Peru"]
    },
    "Uruguay": {
        noVisa: [],
        onArrival: ["Argentina", "Brazil"]
    },
    "Paraguay": {
        noVisa: [],
        onArrival: ["Argentina", "Brazil"]
    },
    "Bolivia": {
        noVisa: [],
        onArrival: ["Argentina", "Brazil"]
    },
    "Ecuador": {
        noVisa: [],
        onArrival: ["Peru", "Colombia"]
    },
    "Venezuela": {
        noVisa: [],
        onArrival: ["Colombia"]
    },
    "USA": {
        noVisa: ["Canada"],
        onArrival: ["Mexico"]
    },
    "Greenland": {
        noVisa: [],
        onArrival: ["Canada"]
    },
    "Iceland": {
        noVisa: ["Norway", "Sweden"],
        onArrival: ["France", "UK"]
    },
    "Norway": {
        noVisa: ["Sweden", "Finland", "Denmark"],
        onArrival: ["Spain"]
    },
    "Sweden": {
        noVisa: ["Norway", "Finland", "Denmark"],
        onArrival: ["Spain"]
    },
    "Finland": {
        noVisa: ["Sweden", "Norway"],
        onArrival: ["Russia"]
    },
    "Denmark": {
        noVisa: ["Norway", "Sweden"],
        onArrival: ["Germany"]
    },
    "Netherlands": {
        noVisa: ["France", "Belgium", "Germany"],
        onArrival: ["Spain"]
    },
    "Belgium": {
        noVisa: ["France", "Netherlands"],
        onArrival: ["Germany"]
    }
};

// Flag image mapping
const flagMapping = {
    "Egypt": "images/flages/download.png",
    "Saudi Arabia": "images/flages/download (1).png",
    "ُُEngland": "images/flages/download (2).png",
    "Turkey": "images/flages/download (9).png",
    "France": "images/flages/download (3).png",
    "Italy": "images/flages/download (16).png",
    "Greece": "images/flages/download (8).png",
    "Spain": "images/flages/download (12).png",
    "Germany": "images/flages/download (4).png",
    "Japan": "images/flages/download (15).png",
    "Tunisia": "images/flages/download (6).png",
    "Morocco": "images/flages/download (7).png",
    "Syria": "images/flages/download (11).png",
    "Palestine": "images/flages/download (5).png",
    "Jordan": "images/flages/download (14).png",
    "Iraq": "images/flages/download(13).png",
    "Maldives": "images/flages/download (10).png",
    "Canada" :"images/flages/download (17).png",
    "Usa":"images/flages/download (18).png",
    "Chaina":"images/flages/download (19).png",
    
};

// Function to get flag image or emoji
function getFlagDisplay(countryName) {
    const flagPath = flagMapping[countryName];
    if (flagPath) {
        return `<img src="${encodeURI(flagPath)}" alt="${countryName} flag" class="country-flag">`;
    }
    // Fallback to emoji if flag not available
    const emojiMap = {
        "Egypt": "🇪🇬",
        "UAE": "🇦🇪",
        "Turkey": "🇹🇷",
        "Canada": "🇨🇦",
        "USA": "🇺🇸",
        "Kuwait": "🇰🇼",
        "Qatar": "🇶🇦",
        "Bahrain": "🇧🇭",
        "Oman": "🇴🇲",
        "Lebanon": "🇱🇧",
        "Brazil": "🇧🇷",
        "Mexico": "🇲🇽",
        "Argentina": "🇦🇷",
        "Russia": "🇷🇺",
        "Belarus": "🇧🇾",
        "Bulgaria": "🇧🇬",
        "Thailand": "🇹🇭",
        "Malaysia": "🇲🇾",
        "Indonesia": "🇮🇩",
        "Philippines": "🇵🇭",
        "Vietnam": "🇻🇳",
        "Cambodia": "🇰🇭",
        "Laos": "🇱🇦",
        "Myanmar": "🇲🇲",
        "Mauritius": "🇲🇺",
        "Kenya": "🇰🇪",
        "Tanzania": "🇹🇿",
        "Uganda": "🇺🇬",
        "Rwanda": "🇷🇼",
        "Cameroon": "🇨🇲",
        "Ghana": "🇬🇭",
        "Nigeria": "🇳🇬",
        "Ethiopia": "🇪🇹",
        "South Africa": "🇿🇦",
        "Botswana": "🇧🇼",
        "Zimbabwe": "🇿🇼",
        "Zambia": "🇿🇲",
        "Malawi": "🇲🇼",
        "Mozambique": "🇲🇿",
        "Senegal": "🇸🇳",
        "Mali": "🇲🇱",
        "Burkina Faso": "🇧🇫",
        "Ivory Coast": "🇨🇮",
        "Benin": "🇧🇯",
        "Togo": "🇹🇬",
        "Liberia": "🇱🇷",
        "Sierra Leone": "🇸🇱",
        "Guinea": "🇬🇳",
        "Comoros": "🇰🇲",
        "Seychelles": "🇸🇨",
        "Mongolia": "🇲🇳",
        "Kazakhstan": "🇰🇿",
        "Uzbekistan": "🇺🇿",
        "Turkmenistan": "🇹🇲",
        "Tajikistan": "🇹🇯",
        "Kyrgyzstan": "🇰🇬",
        "Nepal": "🇳🇵",
        "Bangladesh": "🇧🇩",
        "Sri Lanka": "🇱🇰",
        "India": "🇮🇳",
        "Pakistan": "🇵🇰",
        "Afghanistan": "🇦🇫",
        "Iran": "🇮🇷",
        "Bhutan": "🇧🇹",
        "Colombia": "🇨🇴",
        "Peru": "🇵🇪",
        "Chile": "🇨🇱",
        "Uruguay": "🇺🇾",
        "Paraguay": "🇵🇾",
        "Bolivia": "🇧🇴",
        "Ecuador": "🇪🇨",
        "Venezuela": "🇻🇪",
        "Guyana": "🇬🇾",
        "Suriname": "🇸🇷",
        "Czech Republic": "🇨🇿",
        "Austria": "🇦🇹",
        "Switzerland": "🇨🇭",
        "Sweden": "🇸🇪",
        "Norway": "🇳🇴",
        "Finland": "🇫🇮",
        "Denmark": "🇩🇰",
        "Netherlands": "🇳🇱",
        "Belgium": "🇧🇪",
        "Poland": "🇵🇱",
        "Ukraine": "🇺🇦",
        "Romania": "🇷🇴",
        "Serbia": "🇷🇸",
        "Croatia": "🇭🇷",
        "Slovenia": "🇸🇮",
        "Portugal": "🇵🇹",
        "Ireland": "🇮🇪",
        "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "Wales": "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
    };
    return emojiMap[countryName] || "🌍";
}

// Country data with coordinates
const countriesData = {
    "Egypt": {
        flag: "images/مصر/download.png",
        Capital: "New Administrative Capital",
        lat: 26.8206,
        lng: 30.8025,
        Area: "1,002,000 kmآ²",
        Population: "104 million",
        Currency: "Egyptian Pound",
        Infrastructure_Rank: "115th globally",
        Internet_Speed: "8.5 Mbps",
        Communications: "4G available in most areas",
        Best_Time_To_Visit: "October - April",
        exchangeRate: 52.5,
        // Education and economy data
        Education: {
            Literacy_Rate: "71.4%",
            Secondary_Education_Rate: "45%",
            University_Education_Rate: "28%",
            Education_Rank_Worldwide: "120"
        },
        Economy: {
            GDP: "1.2 trillion dollars",
            GDP_Per_Capita: "11,500 dollars",
            Unemployment_Rate: "7.2%",
            Inflation_Rate: "13.5%",
            Main_Exports: "Oil, gas, textiles, tourism"
        },
        Tourist_Attractions: [
            { name: "Pyramids of Giza", desc: "One of the seven wonders of the world", img: "images/مصر/download.jpg" },
            { name: "Luxor Temples", desc: "Great pharaonic monuments", img: "images/مصر/download (1).jpg" },
            { name: "New Egyptian Museum", desc: "Largest museum in the world", img: "images/مصر/download (4).jpg" },
            { name: "The Nile", desc: "Longest river in the world", img: "images/مصر/download (3).jpg" },
            { name: "Islamic Cairo", desc: "Mosques and Islamic architecture", img: "images/مصر/download (2).jpg" }
        ]
    },
    "Saudi Arabia": {
        flag: "🇸🇦",
        lat: 23.8859,
        lng: 45.0792,
        Capital: "Riyadh",
        Area: "2,149,690 kmآ²",
        Population: "34 million",
        Currency: "Saudi Riyal",
        Infrastructure_Rank: "28th globally",
        Internet_Speed: "20 Mbps",
        Communications: "5G in major cities",
        Best_Time_To_Visit: "November - March",
        exchangeRate: 3.75,
        Education: {
            Literacy_Rate: "97.5%",
            Secondary_Education_Rate: "68%",
            University_Education_Rate: "35%",
            Education_Rank_Worldwide: "45"
        },
        Economy: {
            GDP: "833 billion dollars",
            GDP_Per_Capita: "23,000 dollars",
            Unemployment_Rate: "5.6%",
            Inflation_Rate: "2.8%",
            Main_Exports: "Oil, gas, petrochemicals"
        },
        Tourist_Attractions: [
            { name: "Mecca", desc: "Holiest Islamic site", img: "images/السعودية/hajj-rituals-makkah-accorhotels.jpg" },
            { name: "Medina", desc: "Second holiest Islamic site", img: "images/السعودية/download.jpg" },
            { name: "AlUla", desc: "Archaeological sites and unique desert views", img: "images/السعودية/download (1).jpg" },
            { name: "Riyadh", desc: "Modern capital with rapid development", img: "images/السعودية/download (2).jpg" },
            { name: "Farasan Islands", desc: "Enchanting islands in the Red Sea", img: "images/السعودية/download (3).jpg" }
        ]
    },
    "UAE": {
        flag: "🇦🇪",
        lat: 23.4241,
        lng: 53.8478,
        Capital: "Abu Dhabi",
        Area: "83,600 kmآ²",
        Population: "9.9 million",
        Currency: "UAE Dirham",
        Infrastructure_Rank: "2nd globally",
        Internet_Speed: "45 Mbps",
        Communications: "Advanced 5G",
        Best_Time_To_Visit: "November - March",
        exchangeRate: 3.67,
        Education: {
            Literacy_Rate: "98.2%",
            Secondary_Education_Rate: "75%",
            University_Education_Rate: "42%",
            Education_Rank_Worldwide: "25"
        },
        Economy: {
            GDP: "421 billion dollars",
            GDP_Per_Capita: "43,000 dollars",
            Unemployment_Rate: "2.1%",
            Inflation_Rate: "1.8%",
            Main_Exports: "Oil, gas, gold, tourism"
        },
        Tourist_Attractions: [
            { name: "Burj Khalifa", desc: "Tallest tower in the world" },
            { name: "Palm Island", desc: "Unique urban project" },
            { name: "Dubai Mall", desc: "Largest mall in the world" },
            { name: "Dubai Desert", desc: "Desert trips and thrilling experiences" },
            { name: "Jumeirah Beach", desc: "Beautiful and modern beach" }
        ]
    },
    "Turkey": {
        flag: "🇹🇷",
        lat: 38.9637,
        lng: 35.2433,
        Area: "783,562 kmآ²",
        Capital: "Ankara",
        Population: "85 million",
        Currency: "Turkish Lira",
        Infrastructure_Rank: "49th globally",
        Internet_Speed: "18 Mbps",
        Communications: "4G/5G good",
        Best_Time_To_Visit: "April - October",
        exchangeRate: 42.5,
        Education: {
            Literacy_Rate: "96.2%",
            Secondary_Education_Rate: "62%",
            University_Education_Rate: "32%",
            Education_Rank_Worldwide: "55"
        },
        Economy: {
            GDP: "819 billion dollars",
            GDP_Per_Capita: "9,600 dollars",
            Unemployment_Rate: "10.2%",
            Inflation_Rate: "36.1%",
            Main_Exports: "Automobiles, textiles, machinery, tourism"
        },
        Tourist_Attractions: [
            { name: "Istanbul", desc: "Historic city between Europe and Asia" },
            { name: "Cappadocia", desc: "Area with fantastical natural views" },
            { name: "Blue Lake", desc: "Enchanting blue lake" },
            { name: "Troy", desc: "World heritage archaeological site" },
            { name: "Turquoise Coast", desc: "Beaches in the Mediterranean Sea" }
        ]
    },
    "France": {
        flag: "🇫🇷",
        lat: 46.2276,
        lng: 2.2137,
        Capital: "Paris",
        Area: "643,801 kmآ²",
        Population: "67 million",
        Currency: "Euro",
        Infrastructure_Rank: "9th globally",
        Internet_Speed: "30 Mbps",
        Communications: "4G/5G excellent",
        Best_Time_To_Visit: "May - September",
        exchangeRate: 1.15,
        Education: {
            Literacy_Rate: "99%",
            Secondary_Education_Rate: "78%",
            University_Education_Rate: "45%",
            Education_Rank_Worldwide: "8"
        },
        Economy: {
            GDP: "2.78 trillion dollars",
            GDP_Per_Capita: "41,500 dollars",
            Unemployment_Rate: "7.4%",
            Inflation_Rate: "5.2%",
            Main_Exports: "Automobiles, machinery, chemicals, tourism"
        },
        Tourist_Attractions: [
            { name: "Eiffel Tower", desc: "Famous iron tower in Paris", img: "images/فرنسا/download (5).jpg" },
            { name: "Louvre Museum", desc: "Largest art museum in the world", img: "images/فرنسا/download.jpg" },
            { name: "Palace of Versailles", desc: "Luxurious royal palace", img: "images/فرنسا/download (1).jpg" },
            { name: "Notre-Dame Cathedral", desc: "Great Gothic architecture", img: "images/فرنسا/download (2).jpg" },
            { name: "Champagne Region", desc: "Area of grapes and luxury wine", img: "images/فرنسا/download (3).jpg" }
        ]
    },
    "Italy": {
        flag: "🇮🇹",
        lat: 41.8719,
        lng: 12.5674,
        Area: "301,340 kmآ²",
        Population: "59 million",
        Capital: "Rome",
        Currency: "Euro",
        Infrastructure_Rank: "8th globally",
        Internet_Speed: "28 Mbps",
        Communications: "4G/5G good",
        Best_Time_To_Visit: "April - October",
        exchangeRate: 1.15,
        Education: {
            Literacy_Rate: "99.2%",
            Secondary_Education_Rate: "72%",
            University_Education_Rate: "38%",
            Education_Rank_Worldwide: "15"
        },
        Economy: {
            GDP: "2.07 trillion dollars",
            GDP_Per_Capita: "35,000 dollars",
            Unemployment_Rate: "7.8%",
            Inflation_Rate: "8.1%",
            Main_Exports: "Automobiles, machinery, textiles, tourism"
        },
        Tourist_Attractions: [
            { name: "Rome", desc: "Ancient imperial capital", img: "images/ايطاليا/download (4).jpg" },
            { name: "Venice", desc: "City of bridges and canals", img: "images/ايطاليا/download.jpg" },
            { name: "Florence", desc: "Center of Italian art and culture", img: "images/ايطاليا/download (1).jpg" },
            { name: "Amalfi Coast", desc: "Beautiful beaches in southern Italy", img: "images/ايطاليا/download (2).jpg" },
            { name: "Milan", desc: "Capital of fashion and design", img: "images/ايطاليا/download (3).jpg" }
        ]
    },
    "Greece": {
        flag: "🇬🇷",
        lat: 39.0742,
        lng: 21.8243,
        Area: "131,957 kmآ²",
        Capital: "Athens",
        Population: "10.7 million",
        Currency: "Euro",
        Infrastructure_Rank: "33rd globally",
        Internet_Speed: "22 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "May - September",
        exchangeRate: 1.15,
        Education: {
            Literacy_Rate: "97.7%",
            Secondary_Education_Rate: "65%",
            University_Education_Rate: "35%",
            Education_Rank_Worldwide: "28"
        },
        Economy: {
            GDP: "219 billion dollars",
            GDP_Per_Capita: "20,400 dollars",
            Unemployment_Rate: "12.1%",
            Inflation_Rate: "9.3%",
            Main_Exports: "Tourism, olives, shipping, agricultural products"
        },
        Tourist_Attractions: [
            { name: "Athens", desc: "Capital of Greek civilization", img: "images/اليونان/download (4).jpg" },
            { name: "Santorini", desc: "Dreamy island with blue domes", img: "images/اليونان/download.jpg" },
            { name: "Mykonos", desc: "Famous tourist island", img: "images/اليونان/download (1).jpg" },
            { name: "Crete Island", desc: "Largest Greek island", img: "images/اليونان/دليلك-الكامل-حول-جزيرة-كريت.jpg" },
            { name: "Acropolis", desc: "Ancient Parthenon temple", img: "images/اليونان/download (2).jpg" }
        ]
    },
    "Japan": {
        flag: "🇯🇵",
        lat: 36.2048,
        lng: 138.2529,
        Capital: "Tokyo",
        Area: "377,975 kmآ²",
        Population: "125 million",
        Currency: "Japanese Yen",
        Infrastructure_Rank: "4th globally",
        Internet_Speed: "50 Mbps",
        Communications: "Advanced 5G",
        Best_Time_To_Visit: "March - May and September - November",
        exchangeRate: 183,
        Education: {
            Literacy_Rate: "99%",
            Secondary_Education_Rate: "95%",
            University_Education_Rate: "52%",
            Education_Rank_Worldwide: "3"
        },
        Economy: {
            GDP: "4.23 trillion dollars",
            GDP_Per_Capita: "33,800 dollars",
            Unemployment_Rate: "2.6%",
            Inflation_Rate: "3.3%",
            Main_Exports: "Automobiles, electronics, machinery, ships"
        },
        Tourist_Attractions: [
            { name: "Tokyo", desc: "Modern and traditional capital", img: "images/اليابان/download (2).jpg" },
            { name: "Fushimi Temple", desc: "Famous temple with thousand gates", img: "images/اليابان/download.jpg" },
            { name: "Mount Fuji", desc: "Japanese natural icon", img: "images/اليابان/download (1).jpg" },
            { name: "Kyoto", desc: "Capital of traditional Japanese culture", img: "images/اليابان/download (3).jpg" },
            { name: "Tokyo Disneyland", desc: "Giant amusement park", img: "images/اليابان/download (4).jpg" }
        ]
    },
    "Canada": {
        flag: "🇨🇦",
        lat: 56.1304,
        lng: -106.3468,
        Area: "9,984,670 kmآ²",
        Population: "39 million",
        Currency: "Canadian Dollar",
        Infrastructure_Rank: "12th globally",
        Capital: "Ottawa",
        Internet_Speed: "32 Mbps",
        Communications: "4G/5G good",
        Best_Time_To_Visit: "June - September",
        exchangeRate: 0.74,
        Education: {
            Literacy_Rate: "99%",
            Secondary_Education_Rate: "88%",
            University_Education_Rate: "58%",
            Education_Rank_Worldwide: "5"
        },
        Economy: {
            GDP: "1.99 trillion dollars",
            GDP_Per_Capita: "51,000 dollars",
            Unemployment_Rate: "5.3%",
            Inflation_Rate: "6.8%",
            Main_Exports: "Oil, gas, wood, automobiles, tourism"
        },
        Tourist_Attractions: [
            { name: "Niagara Falls", desc: "Massive natural falls" },
            { name: "Yellowstone Reserve", desc: "Natural national park" },
            { name: "Toronto", desc: "Major modern Canadian city" },
            { name: "Christ Statue", desc: "Famous stone sculpture" },
            { name: "Rocky Mountains", desc: "Beautiful green mountain range" }
        ]
    },
    "Spain": {
        flag: "🇪🇸",
        lat: 40.4637,
        lng: -3.7492,
        Capital: "Madrid",
        Area: "505,990 kmآ²",
        Population: "47 million",
        Currency: "Euro",
        Infrastructure_Rank: "15th globally",
        Internet_Speed: "25 Mbps",
        Communications: "4G/5G good",
        Education: {
            Literacy_Rate: "98.4%",
            Secondary_Education_Rate: "68%",
            University_Education_Rate: "42%",
            Education_Rank_Worldwide: "22"
        },
        Economy: {
            GDP: "1.43 trillion dollars",
            GDP_Per_Capita: "30,500 dollars",
            Unemployment_Rate: "13.3%",
            Inflation_Rate: "8.3%",
            Main_Exports: "Automobiles, machinery, textiles, tourism"
        },
        Best_Time_To_Visit: "May - September",
        Tourist_Attractions: [
            { name: "Barcelona", desc: "Coastal city with modern architecture", img: "images/إسبانيا/download(4).jpg" },
            { name: "Madrid", desc: "Cultural capital of Spain", img: "images/إسبانيا/download.jpg" },
            { name: "The Alhambra", desc: "Ancient Islamic palace in Granada", img: "images/إسبانيا/download (1).jpg" },
            { name: "Costa del Sol Coast", desc: "Mediterranean beaches", img: "images/إسبانيا/download (2).jpg" },
            { name: "Sagrada Familia", desc: "Unique architectural church", img: "images/إسبانيا/download (3).jpg" }
        ],
        exchangeRate: 1.15 // Euro exchange rate against US dollar
    },
    "Tunisia": {
        flag: "🇹🇳",
        lat: 36.8,
        lng: 10.18,
        Capital: "Tunis",
        Area: "163,610 kmآ²",
        Population: "11.7 million",
        Currency: "Tunisian Dinar",
        Infrastructure_Rank: "15th globally",
        Internet_Speed: "25 Mbps",
        Communications: "4G/5G good",
        Education: {
            Literacy_Rate: "81.8%",
            Secondary_Education_Rate: "55%",
            University_Education_Rate: "28%",
            Education_Rank_Worldwide: "85"
        },
        Economy: {
            GDP: "46 billion dollars",
            GDP_Per_Capita: "3,900 dollars",
            Unemployment_Rate: "15.5%",
            Inflation_Rate: "8.3%",
            Main_Exports: "Oil, phosphate, tourism, textiles"
        },
        Tourist_Attractions: [
            { name: "Carthage", desc: "Ancient archaeological city", img: "images/تونس/download (5).jpg" },
            { name: "Old Medina", desc: "Traditional market and historic sites", img: "images/تونس/download.jpg" },
            { name: "Sidi Bou Said", desc: "Beautiful coastal village", img: "images/تونس/download (1).jpg" },
            { name: "Great Sahara", desc: "Unique desert experience", img: "images/تونس/download (2).jpg" },
            { name: "Djerba Island", desc: "Tourist island with beautiful beaches", img: "images/تونس/download.jpg" }
        ],
        exchangeRate: 2.94
    },
    "Morocco": {
        flag: "🇲🇦",
        lat: 31.7917,
        lng: -7.0926,
        Capital: "Rabat",
        Area: "446,550 kmآ²",
        Population: "36 million",
        Currency: "Moroccan Dirham",
        Infrastructure_Rank: "25th globally",
        Internet_Speed: "20 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "March - May and September - November",
        Tourist_Attractions: [
            { name: "Marrakech", desc: "Historic city and traditional markets", img: "images/المغرب/download (3).jpg" },
            { name: "Fez", desc: "Old city with beautiful Islamic architecture", img: "images/المغرب/Fez city-3-1536x1024.jpg" },
            { name: "Rabat", desc: "Capital of Morocco and historic site", img: "images/المغرب/download.jpg" },
            { name: "Chefchaouen", desc: "Enchanting blue city in the mountains", img: "images/المغرب/download (1).jpg" }
        ],
        exchangeRate: 9.5
    },
    "Syria": {
        flag: "🇸🇾",
        lat: 34.8021,
        lng: 38.9968,
        Capital: "Damascus",
        Area: "185,180 kmآ²",
        Population: "17.5 million",
        Currency: "Syrian Pound",
        Infrastructure_Rank: "120th globally",
        Internet_Speed: "5 Mbps",
        Communications: "4G limited",
        Best_Time_To_Visit: "April - October",
        Tourist_Attractions: [
            { name: "Old Damascus", desc: "Historic city with beautiful Islamic architecture", img: "images/سوريا/download (4).jpg" },
            { name: "Aleppo", desc: "Ancient city with rich cultural heritage", img: "images/سوريا/download.jpg" },
            { name: "Palmyra", desc: "Archaeological city in the desert", img: "images/سوريا/download (1).jpg" },
            { name: "Tyre", desc: "Beautiful coastal city", img: "images/سوريا/download (2).jpg" },
            { name: "Krak des Chevaliers", desc: "Historic Crusader castle", img: "images/سوريا/download (3).jpg" }
        ],
        exchangeRate: 10000
    },
    "Palestine": {
        flag: "🇵🇸",
        lat: 31.9522,
        lng: 35.2332,
        Capital: "Jerusalem",
        Area: "26,990 kmآ²",
        Population: "5.2 million",
        Currency: "Palestinian Pound",
        Infrastructure_Rank: "100th globally",
        Internet_Speed: "15 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "March - May and September - November",
        Tourist_Attractions: [
            { name: "Jerusalem", desc: "Historic and culturally important city", img: "images/فلسطين/download (2).jpg" },
            { name: "Bethlehem", desc: "Ancient city with rich cultural heritage", img: "images/فلسطين/download.jpg" },
            { name: "Gaza", desc: "Beautiful coastal city", img: "images/فلسطين/download (1).jpg" },
            { name: "Nablus", desc: "Historic city with beautiful Islamic architecture", img: "images/فلسطين/download (3).jpg" },
            { name: "Hebron", desc: "Ancient city with rich cultural heritage", img: "images/فلسطين/download (4).jpg" }
        ]
    },
    "Lebanon": {
        flag: "🇱🇧",
        lat: 33.8547,
        lng: 35.8623,
        Capital: "Beirut",
        Area: "10,452 kmآ²",
        Population: "6.8 million",
        Currency: "Lebanese Pound",
        Infrastructure_Rank: "50th globally",
        Internet_Speed: "15 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "April - October",
        Tourist_Attractions: [
            { name: "Beirut", desc: "Vibrant capital with rich culture" },
            { name: "Byblos", desc: "Archaeological city on the coast" },
            { name: "Baalbek", desc: "Massive Roman archaeological site" },
            { name: "Cedars", desc: "Famous cedar forest in Lebanon" },
            { name: "Sidon", desc: "Coastal city with rich cultural heritage" }
        ],
        exchangeRate: 89646
    },
    "Iraq": {
        flag: "🇮🇶",
        lat: 33.2232,
        lng: 43.3615,
        Capital: "Baghdad",
        Area: "438,317 kmآ²",
        Population: "40 million",
        Currency: "Iraqi Dinar",
        Infrastructure_Rank: "80th globally",
        Internet_Speed: "10 Mbps",
        Communications: "4G limited",
        Best_Time_To_Visit: "October - April",
        Tourist_Attractions: [
            { name: "Baghdad", desc: "Historic and cultural capital", img: "images/العراق/download (1).jpg" },
            { name: "Ur", desc: "Ancient archaeological site", img: "images/العراق/download.jpg" },
            { name: "Najaf", desc: "Important religious city", img: "images/العراق/download (2).jpg" }
        ],
        exchangeRate: 1460
    },
    "Jordan": {
        flag: "🇯🇴",
        lat: 31.9454,
        lng: 35.9284,
        Capital: "Amman",
        Area: "89,342 kmآ²",
        Population: "10 million",
        Currency: "Jordanian Dinar",
        Infrastructure_Rank: "65th globally",
        Internet_Speed: "20 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "October - April",
        Tourist_Attractions: [
            { name: "Amman", desc: "Modern capital", img: "images/الأردن/download (3).jpg" },
            { name: "Dead Sea", desc: "Lowest point on Earth", img: "images/الأردن/download.jpg" },
            { name: "Petra", desc: "Ancient pink city", img: "images/الأردن/download (1).jpg" }
        ],
        exchangeRate: 0.71
    },
    "Thailand": {
        flag: "🇹🇭",
        lat: 15.8700,
        lng: 100.9925,
        Capital: "Bangkok",
        Area: "513,120 kmآ²",
        Population: "70 million",
        Currency: "Thai Baht",
        Infrastructure_Rank: "55th globally",
        Internet_Speed: "22 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "November - February",
        Tourist_Attractions: [
            { name: "Bangkok", desc: "Bustling capital" },
            { name: "Phuket", desc: "Beautiful island" },
            { name: "Chiang Mai", desc: "Historic city" }
        ],
        exchangeRate: 36.5
    },
    "Colombia": {
        flag: "🇨🇴",
        lat: 4.5709,
        lng: -74.2973,
        Capital: "Bogota",
        Area: "1,141,748 kmآ²",
        Population: "52 million",
        Currency: "Colombian Peso",
        Infrastructure_Rank: "70th globally",
        Internet_Speed: "21 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "December - March",
        Tourist_Attractions: [
            { name: "Bogota", desc: "Mountain capital" },
            { name: "Cartagena", desc: "Beautiful colonial city" },
            { name: "Coffee Region", desc: "Famous coffee production area" }
        ],
        exchangeRate: 4150
    },
    "Peru": {
        flag: "🇵🇪",
        lat: -9.1900,
        lng: -75.0152,
        Capital: "Lima",
        Area: "1,285,216 kmآ²",
        Population: "35 million",
        Currency: "Peruvian Sol",
        Infrastructure_Rank: "80th globally",
        Internet_Speed: "18 Mbps",
        Communications: "4G moderate",
        Best_Time_To_Visit: "May - September",
        Tourist_Attractions: [
            { name: "Lima", desc: "Coastal capital" },
            { name: "Machu Picchu", desc: "Ancient archaeological wonder" },
            { name: "Amazon River", desc: "Greatest natural river" }
        ],
        exchangeRate: 3.75
    },
    "Chile": {
        flag: "🇨🇱",
        lat: -35.6751,
        lng: -71.5430,
        Capital: "Santiago",
        Area: "756,096 kmآ²",
        Population: "19 million",
        Currency: "Chilean Peso",
        Infrastructure_Rank: "45th globally",
        Internet_Speed: "28 Mbps",
        Communications: "4G excellent",
        Best_Time_To_Visit: "December - February",
        Tourist_Attractions: [
            { name: "Santiago", desc: "Modern mountain capital" },
            { name: "Atacama", desc: "Beautiful desert" },
            { name: "Patagonia", desc: "Stunning glacial landscape" }
        ],
        exchangeRate: 950
    },
    "Uruguay": {
        flag: "🇺🇾",
        lat: -33.8688,
        lng: -56.1693,
        Capital: "Montevideo",
        Area: "176,215 kmآ²",
        Population: "3.5 million",
        Currency: "Uruguayan Peso",
        Infrastructure_Rank: "42nd globally",
        Internet_Speed: "30 Mbps",
        Communications: "4G excellent",
        Best_Time_To_Visit: "December - February",
        Tourist_Attractions: [
            { name: "Montevideo", desc: "Beautiful coastal capital" },
            { name: "Punta del Este", desc: "Coastal resort" },
            { name: "Canelones", desc: "Wine region" }
        ],
        exchangeRate: 39
    },
    "Paraguay": {
        flag: "🇵🇾",
        lat: -23.4425,
        lng: -58.4438,
        Capital: "Asuncion",
        Area: "406,752 kmآ²",
        Population: "7 million",
        Currency: "Paraguayan Guarani",
        Infrastructure_Rank: "85th globally",
        Internet_Speed: "14 Mbps",
        Communications: "4G moderate",
        Best_Time_To_Visit: "March - May",
        Tourist_Attractions: [
            { name: "Asuncion", desc: "River capital" },
            { name: "Iguazu", desc: "Great falls" },
            { name: "Cato Island", desc: "Natural island" }
        ],
        exchangeRate: 7300
    },
    "Bolivia": {
        flag: "🇧🇴",
        lat: -16.2902,
        lng: -63.5887,
        Capital: "La Paz",
        Area: "1,098,581 kmآ²",
        Population: "12 million",
        Currency: "Boliviano",
        Infrastructure_Rank: "108th globally",
        Internet_Speed: "11 Mbps",
        Communications: "4G limited",
        Best_Time_To_Visit: "May - October",
        Tourist_Attractions: [
            { name: "La Paz", desc: "High mountain capital" },
            { name: "Salar de Uyuni", desc: "White salt flat" },
            { name: "Colored Lakes", desc: "Colored lakes" }
        ],
        exchangeRate: 6.9
    },
    "Ecuador": {
        flag: "🇪🇨",
        lat: -1.8312,
        lng: -78.1834,
        Capital: "Quito",
        Area: "283,561 kmآ²",
        Population: "18 million",
        Currency: "US Dollar",
        Infrastructure_Rank: "78th globally",
        Internet_Speed: "17 Mbps",
        Communications: "4G moderate",
        Best_Time_To_Visit: "June - August",
        Tourist_Attractions: [
            { name: "Quito", desc: "Mountain capital" },
            { name: "Galapagos Islands", desc: "Unique natural islands" },
            { name: "Amazon", desc: "Tropical rainforests" }
        ],
        exchangeRate: 1
    },
    "Venezuela": {
        flag: "🇻🇪",
        lat: 6.4238,
        lng: -66.5897,
        Capital: "Caracas",
        Area: "916,445 kmآ²",
        Population: "28 million",
        Currency: "Venezuelan Bolivar",
        Infrastructure_Rank: "95th globally",
        Internet_Speed: "12 Mbps",
        Communications: "4G limited",
        Best_Time_To_Visit: "December - April",
        Tourist_Attractions: [
            { name: "Caracas", desc: "Mountain capital" },
            { name: "Angel Falls", desc: "Great waterfall" },
            { name: "Lake Maracaibo", desc: "Large lake" }
        ],
        exchangeRate: 43500
    },
    "USA": {
        flag: "🇺🇸",
        lat: 37.0902,
        lng: -95.7129,
        Capital: "Washington",
        Area: "9,833,517 kmآ²",
        Population: "333 million",
        Currency: "US Dollar",
        Infrastructure_Rank: "13th globally",
        Internet_Speed: "42 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "June - September",
        Tourist_Attractions: [
            { name: "New York", desc: "Great city" },
            { name: "Washington", desc: "Political capital" },
            { name: "Los Angeles", desc: "Movie city" }
        ],
        exchangeRate: 1
    },
    "Canada": {
        flag: "🇨🇦",
        lat: 56.1304,
        lng: -106.3468,
        Capital: "Ottawa",
        Area: "9,984,670 kmآ²",
        Population: "39 million",
        Currency: "Canadian Dollar",
        Infrastructure_Rank: "25th globally",
        Internet_Speed: "38 Mbps",
        Communications: "5G good",
        Best_Time_To_Visit: "June - September",
        Tourist_Attractions: [
            { name: "Ottawa", desc: "Federal capital" },
            { name: "Niagara", desc: "Great falls" },
            { name: "Toronto", desc: "Large modern city" }
        ],
        exchangeRate: 1.35
    },
    "Greenland": {
        flag: "🇬🇱",
        lat: 71.7069,
        lng: -42.6043,
        Capital: "Nuuk",
        Area: "2,166,086 kmآ²",
        Population: "56,000",
        Currency: "Danish Krone",
        Infrastructure_Rank: "70th globally",
        Internet_Speed: "20 Mbps",
        Communications: "4G limited",
        Best_Time_To_Visit: "June - August",
        Tourist_Attractions: [
            { name: "Nuuk", desc: "Icy capital" },
            { name: "Greenland Ice", desc: "Vast ice" },
            { name: "Northern Lights", desc: "Wonderful natural phenomenon" }
        ],
        exchangeRate: 6.8
    },
    "Iceland": {
        flag: "🇮🇸",
        lat: 64.9631,
        lng: -19.0208,
        Capital: "Reykjavik",
        Area: "103,000 kmآ²",
        Population: "0.37 million",
        Currency: "Icelandic Krأ³na",
        Infrastructure_Rank: "20th globally",
        Internet_Speed: "40 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "June - August",
        Tourist_Attractions: [
            { name: "Reykjavik", desc: "Eastern capital" },
            { name: "Blue Lagoon", desc: "Hot springs" },
            { name: "Falls", desc: "Beautiful waterfalls" }
        ],
        exchangeRate: 138
    },
    "Norway": {
        flag: "🇳🇴",
        lat: 60.4720,
        lng: 8.4689,
        Capital: "Oslo",
        Area: "385,207 kmآ²",
        Population: "5.5 million",
        Currency: "Norwegian Krone",
        Infrastructure_Rank: "18th globally",
        Internet_Speed: "40 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "June - August",
        Tourist_Attractions: [
            { name: "Oslo", desc: "Scandinavian capital" },
            { name: "Fjords", desc: "Wild valleys" },
            { name: "Northern Lights", desc: "Rare natural phenomenon" }
        ],
        exchangeRate: 10.8
    },
    "Sweden": {
        flag: "🇸🇪",
        lat: 60.1282,
        lng: 18.6435,
        Capital: "Stockholm",
        Area: "449,964 kmآ²",
        Population: "10.5 million",
        Currency: "Swedish Krona",
        Infrastructure_Rank: "15th globally",
        Internet_Speed: "42 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "June - August",
        Tourist_Attractions: [
            { name: "Stockholm", desc: "Queen of the Seas" },
            { name: "Gotland", desc: "Beautiful rural area" },
            { name: "Lapland", desc: "Land of snow" }
        ],
        exchangeRate: 10.8
    },
    "Finland": {
        flag: "🇫🇮",
        lat: 61.9241,
        lng: 25.7482,
        Capital: "Helsinki",
        Area: "338,145 kmآ²",
        Population: "5.5 million",
        Currency: "Euro",
        Infrastructure_Rank: "16th globally",
        Internet_Speed: "45 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "June - August",
        Tourist_Attractions: [
            { name: "Helsinki", desc: "Sea capital" },
            { name: "Lapland", desc: "Snowy area" },
            { name: "Lakes", desc: "Thousands of pure lakes" }
        ],
        exchangeRate: 0.95
    },
    "Denmark": {
        flag: "🇩🇰",
        lat: 56.2639,
        lng: 9.5018,
        Capital: "Copenhagen",
        Area: "43,094 kmآ²",
        Population: "5.9 million",
        Currency: "Danish Krone",
        Infrastructure_Rank: "14th globally",
        Internet_Speed: "42 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "May - September",
        Tourist_Attractions: [
            { name: "Copenhagen", desc: "Cheerful capital" },
            { name: "Tivoli", desc: "Amusement park" },
            { name: "Castles", desc: "Historic palaces" }
        ],
        exchangeRate: 7.1
    },
    "Netherlands": {
        flag: "🇳🇱",
        lat: 52.1326,
        lng: 5.2913,
        Capital: "Amsterdam",
        Area: "41,850 kmآ²",
        Population: "17.5 million",
        Currency: "Euro",
        Infrastructure_Rank: "12th globally",
        Internet_Speed: "45 Mbps",
        Communications: "5G excellent",
        Best_Time_To_Visit: "April - May",
        Tourist_Attractions: [
            { name: "Amsterdam", desc: "City of canals" },
            { name: "Tulip Fields", desc: "Colored flower fields" },
            { name: "Rotterdam", desc: "Modern port" }
        ],
        exchangeRate: 0.95
    },
    "Belgium": {
        flag: "🇧🇪",
        lat: 50.5039,
        lng: 4.4699,
        Capital: "Brussels",
        Area: "30,528 kmآ²",
        Population: "11.7 million",
        Currency: "Euro",
        Infrastructure_Rank: "20th globally",
        Internet_Speed: "38 Mbps",
        Communications: "4G good",
        Best_Time_To_Visit: "April - September",
        Tourist_Attractions: [
            { name: "Brussels", desc: "European capital" },
            { name: "Bruges", desc: "Medieval city" },
            { name: "Antwerp", desc: "Diamond city" }
        ],
        exchangeRate: 0.95
    }
};

let map = null;

// Populate dropdown lists
window.addEventListener("DOMContentLoaded", () => {

    const countrySelect1 = document.getElementById("country1");
    const countrySelect2 = document.getElementById("country2");
    const search1 = document.getElementById("search1");
    const search2 = document.getElementById("search2");
    const passportSelect = document.getElementById("passport");

    const countries = Object.keys(countriesData)
        .sort((a, b) => a.localeCompare(b, "en"));

    // Fill country lists
    countries.forEach(country => {
        const option1 = document.createElement("option");
        option1.value = country;
        option1.textContent = country;
        countrySelect1.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = country;
        option2.textContent = country;
        countrySelect2.appendChild(option2);
    });

    // Fill passport list (nationalities)
    if (passportSelect) {
        const passports = Object.keys(visaRequirements)
            .sort((a, b) => a.localeCompare(b, "en"));

        passports.forEach(passport => {
            const option = document.createElement("option");
            option.value = passport;
            option.textContent = passport;
            passportSelect.appendChild(option);
        });
    }

    // Add search and filter handlers
    if (search1) {
        search1.addEventListener("input", (e) => filterCountries(e.target.value, countrySelect1));
        search1.addEventListener("keypress", (e) => {
            if (e.key === "Enter") compareCountries();
        });
    }

    if (search2) {
        search2.addEventListener("input", (e) => filterCountries(e.target.value, countrySelect2));
        search2.addEventListener("keypress", (e) => {
            if (e.key === "Enter") compareCountries();
        });
    }

    // Support ENTER for comparison
    countrySelect1.addEventListener("keypress", (e) => {
        if (e.key === "Enter") compareCountries();
    });

    countrySelect2.addEventListener("keypress", (e) => {
        if (e.key === "Enter") compareCountries();
    });

    // Update visa display on country change
    countrySelect1.addEventListener("change", () => {
        updateVisaDisplay();
    });

    countrySelect2.addEventListener("change", () => {
        updateVisaDisplay();
    });

});

// Function called when passport changes
function onPassportChange() {
    const passport = document.getElementById("passport").value;
    const filterButtons = document.getElementById("visa-filter-buttons");

    if (passport) {
        filterButtons.style.display = "flex";
    } else {
        filterButtons.style.display = "none";
    }

    resetCountrySelects();
    updateVisaDisplay();
}

function resetCountrySelects() {
    const countrySelect1 = document.getElementById("country1");
    const countrySelect2 = document.getElementById("country2");
    const countries = Object.keys(countriesData)
        .sort((a, b) => a.localeCompare(b, "en"));

    const options1 = countrySelect1.querySelectorAll("option:not(:first-child)");
    const options2 = countrySelect2.querySelectorAll("option:not(:first-child)");
    options1.forEach(opt => opt.remove());
    options2.forEach(opt => opt.remove());

    countries.forEach(country => {
        const option1 = document.createElement("option");
        option1.value = country;
        option1.textContent = country;
        countrySelect1.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = country;
        option2.textContent = country;
        countrySelect2.appendChild(option2);
    });
}

// Function to filter countries by visa type
function filterByVisa(visaType, showButtons = true) {
    const passport = document.getElementById("passport").value;

    if (!passport) {
        alert("Please select a passport first");
        return;
    }

    const requirements = visaRequirements[passport];
    if (!requirements) {
        alert("No data available for this nationality");
        return;
    }

    // Determine allowed countries
    let allowedCountries = [];

    if (visaType === 'allowed') {
        allowedCountries = Array.from(new Set([...(requirements.noVisa || []), ...(requirements.onArrival || [])]));
    } else if (visaType === 'all-countries') {
        allowedCountries = Object.keys(countriesData);
    }

    // Only keep countries for which we have data
    allowedCountries = allowedCountries.filter(country => Boolean(countriesData[country]));

    updateCountrySelects(allowedCountries, passport, visaType);
}

// Function to update country dropdowns
function updateCountrySelects(allowedCountries, passport, visaType) {
    const countrySelect1 = document.getElementById("country1");
    const countrySelect2 = document.getElementById("country2");

    // Clear all options (except empty option)
    const options1 = countrySelect1.querySelectorAll("option:not(:first-child)");
    const options2 = countrySelect2.querySelectorAll("option:not(:first-child)");

    options1.forEach(opt => opt.remove());
    options2.forEach(opt => opt.remove());

    // Add allowed countries
    allowedCountries
        .sort((a, b) => a.localeCompare(b, "en"))
        .forEach(country => {
            const option1 = document.createElement("option");
            option1.value = country;
            
            // Add visa indicator next to country name if allowed
            if (visaType === 'allowed') {
                const requirements = visaRequirements[passport];
                if (requirements && requirements.noVisa.includes(country)) {
                    option1.textContent = `${country} ✅ No Visa`;
                } else if (requirements && requirements.onArrival.includes(country)) {
                    option1.textContent = `${country} ⏱️ Visa on Arrival`;
                } else {
                    option1.textContent = country;
                }
            } else {
                // For all countries view, no markers
                option1.textContent = country;
            }
            
            countrySelect1.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = country;
            option2.textContent = option1.textContent;
            countrySelect2.appendChild(option2);
        });

    // Show helpful message
    if (allowedCountries.length === 0) {
        const emptyMsg = document.createElement("option");
        emptyMsg.textContent = "No countries available";
        countrySelect1.appendChild(emptyMsg);
        countrySelect2.appendChild(emptyMsg.cloneNode(true));
    }
}

// Function to update visa information
function updateVisaDisplay() {
    const passport = document.getElementById("passport").value;
    const country1 = document.getElementById("country1").value;
    const country2 = document.getElementById("country2").value;
    const visaInfoDiv = document.getElementById("visa-info");

    if (!passport) {
        visaInfoDiv.innerHTML = '';
        return;
    }

    const requirements = visaRequirements[passport];

    if (!requirements) {
        visaInfoDiv.innerHTML = '';
        return;
    }

    let html = '<div class="visa-category">';

    // Show no visa countries
    if (requirements.noVisa && requirements.noVisa.length > 0) {
        html += `
            <div class="visa-type no-visa">
                <h4>✅ No Visa Required</h4>
                <div class="visa-countries">
                    ${requirements.noVisa.map(country => {
                        const flagDisplay = getFlagDisplay(country);
                        const isSelected = country === country1 || country === country2 ? 'border: 3px solid #27ae60;' : '';
                        return `<span class="country-badge" style="${isSelected}">${flagDisplay} ${country}</span>`;
                    }).join('')}
                </div>
            </div>
        `;
    }

    // Show visa on arrival countries
    if (requirements.onArrival && requirements.onArrival.length > 0) {
        html += `
            <div class="visa-type on-arrival">
                <h4>🛂 Visa on Arrival</h4>
                <div class="visa-countries">
                    ${requirements.onArrival.map(country => {
                        const flagDisplay = getFlagDisplay(country);
                        const isSelected = country === country1 || country === country2 ? 'border: 3px solid #f39c12;' : '';
                        return `<span class="country-badge" style="${isSelected}">${flagDisplay} ${country}</span>`;
                    }).join('')}
                </div>
            </div>
        `;
    }

    html += '</div>';

    if (requirements.noVisa.length === 0 && requirements.onArrival.length === 0) {
        html = '';
    }

    visaInfoDiv.innerHTML = html;
}

// Function to filter countries in dropdown
function filterCountries(searchText, selectElement) {
    const options = selectElement.querySelectorAll("option");
    const searchLower = searchText.toLowerCase().trim();

    options.forEach(option => {
        if (option.value === "") {
            option.style.display = ""; // Show empty option
            return;
        }

        const countryName = option.textContent.toLowerCase();
        const isMatch = countryName.includes(searchLower);
        option.style.display = isMatch ? "" : "none";
    });

    // Show first matching option automatically
    if (searchLower) {
        for (const option of options) {
            if (option.value && option.style.display !== "none") {
                selectElement.value = option.value;
                break;
            }
        }
    }
}

// Function to select country from quick buttons
function selectCountry(country, countryNumber) {
    const selectElement = document.getElementById(`country${countryNumber}`);
    const searchElement = document.getElementById(`search${countryNumber}`);

    if (selectElement) {
        selectElement.value = country;
    }

    if (searchElement) {
        searchElement.value = country;
    }
}

// Function to reset selections
function clearSelections() {
    document.getElementById("country1").value = "";
    document.getElementById("country2").value = "";
    document.getElementById("search1").value = "";
    document.getElementById("search2").value = "";
    document.getElementById("passport").value = "";
    document.getElementById("comparison").innerHTML = "";
    document.getElementById("comparison").classList.remove("two-column");
    document.getElementById("visa-info").innerHTML = "";
    document.getElementById("visa-filter-buttons").style.display = "none";
    document.getElementById("comparison-tabs").style.display = "none";
    document.getElementById("global-map-section").innerHTML = "";

    resetCountrySelects();
    
    // Reset tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    const generalTab = document.getElementById('general-tab');
    if (generalTab) generalTab.classList.add('active');
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach((btn, index) => {
        if (index === 0) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    
    // Reset country list to all
    const countries = Object.keys(countriesData)
        .sort((a, b) => a.localeCompare(b, "en"));

    const countrySelect1 = document.getElementById("country1");
    const countrySelect2 = document.getElementById("country2");

    // Clear options (except empty option)
    const options1 = countrySelect1.querySelectorAll("option:not(:first-child)");
    const options2 = countrySelect2.querySelectorAll("option:not(:first-child)");
    options1.forEach(opt => opt.remove());
    options2.forEach(opt => opt.remove());

    // Reset all countries
    countries.forEach(country => {
        const option1 = document.createElement("option");
        option1.value = country;
        option1.textContent = country;
        countrySelect1.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = country;
        option2.textContent = country;
        countrySelect2.appendChild(option2);
    });
}

function createCountryCard(country, data, countryId) {

    const attractionsHTML = data.Tourist_Attractions.map(attr => {
        const imageSrc = attr.img ? encodeURI(attr.img) : null;
        return `
        <div class="attraction-item">
            <h4>${attr.name}</h4>
            <p>${attr.desc}</p>
            ${imageSrc ? `<img src="${imageSrc}" class="attraction-img" loading="lazy" alt="${attr.name}">` : ""}
        </div>
        `;
    }).join("");

    const flagDisplay = getFlagDisplay(country);

    return `
    <div class="country-card">
        <div class="country-header">
            <div class="flag-container">${flagDisplay}</div>
            <h2 class="country-title">${country}</h2>
        </div>
        <div class="info-grid">
            <div class="info-item">
                <strong>Capital</strong>
                <p>${data.Capital}</p>
            </div>
            <div class="info-item">
                <strong>Area</strong>
                <p>${data.Area}</p>
            </div>
            <div class="info-item">
                <strong>Population</strong>
                <p>${data.Population}</p>
            </div>
            <div class="info-item">
                <strong>Currency</strong>
                <p>1 USD ≈ ${data.exchangeRate} ${data.Currency}</p>
            </div>
            <div class="info-item">
                <strong>Infrastructure</strong>
                <p>${data.Infrastructure_Rank}</p>
            </div>
            <div class="info-item">
                <strong>Internet Speed</strong>
                <p>${data.Internet_Speed}</p>
            </div>
            <div class="info-item">
                <strong>Communications</strong>
                <p>${data.Communications}</p>
            </div>
            <div class="info-item">
                <strong>Best Time to Visit</strong>
                <p>${data.Best_Time_To_Visit}</p>
            </div>
        </div>
        <div class="attractions-section">
            <h3>Top Tourist Attractions</h3>
            <div class="attractions-list">
                ${attractionsHTML}
            </div>
        </div>
        <div class="booking-section">
            <h3>Start Your Journey Now</h3>
            <div class="booking-buttons">
                <a href="https://www.booking.com/searchresults.html?ss=${country}"
                target="_blank"
                class="booking-btn">
                Book Hotel on Booking
                </a>
                <a href="https://www.airbnb.com/s/${country}/homes"
                target="_blank"
                class="booking-btn airbnb">
                Find Apartment on Airbnb
                </a>
            </div>
        </div>
        <div class="map-container" style="margin-top: 30px;">
            <h3 style="color:#667eea; margin-bottom:10px;">Geographic Location on Map</h3>
            <div id="map-${countryId}"></div>
        </div>
    </div>
    `;
}

// Switch comparison tabs
function switchComparisonTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab and activate button
    const activeTab = document.getElementById(tabName + '-tab');
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    const activeBtn = event.target;
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Create economic comparison
function createEconomyComparison(country1, country2) {
    const data1 = countriesData[country1];
    const data2 = countriesData[country2];
    
    if (!data1 || !data2) return "";
    
    const economy1 = data1.Economy || {};
    const economy2 = data2.Economy || {};
    
    let html = `<h2 style="color: #00d4ff; text-align: center; margin-bottom: 30px;">Economic Comparison between ${country1} and ${country2}</h2>`;
    
    html += `<div class="economy-comparison-row">
        <div class="metric-item">
            <strong>${country1}</strong>
            <p><strong>GDP:</strong> ${economy1.GDP || 'Not available'}</p>
            <p><strong>GDP Per Capita:</strong> ${economy1.GDP_Per_Capita || 'Not available'}</p>
            <p><strong>Unemployment Rate:</strong> ${economy1.Unemployment_Rate || 'Not available'}</p>
            <p><strong>Inflation Rate:</strong> ${economy1.Inflation_Rate || 'Not available'}</p>
            <p><strong>Main Exports:</strong> ${economy1.Main_Exports || 'Not available'}</p>
        </div>
        <div class="metric-item">
            <strong>${country2}</strong>
            <p><strong>GDP:</strong> ${economy2.GDP || 'Not available'}</p>
            <p><strong>GDP Per Capita:</strong> ${economy2.GDP_Per_Capita || 'Not available'}</p>
            <p><strong>Unemployment Rate:</strong> ${economy2.Unemployment_Rate || 'Not available'}</p>
            <p><strong>Inflation Rate:</strong> ${economy2.Inflation_Rate || 'Not available'}</p>
            <p><strong>Main Exports:</strong> ${economy2.Main_Exports || 'Not available'}</p>
        </div>
    </div>`;
    
    // Additional data
    html += `<div class="economy-comparison-row">
        <div class="metric-item">
            <strong>Infrastructure - ${country1}</strong>
            <p>Infrastructure Rank: <span class="metric-value">${data1.Infrastructure_Rank || 'Not available'}</span></p>
            <p>Internet Speed: <span class="metric-value">${data1.Internet_Speed || 'Not available'}</span></p>
            <p>Communications: <span class="metric-value">${data1.Communications || 'Not available'}</span></p>
        </div>
        <div class="metric-item">
            <strong>Infrastructure - ${country2}</strong>
            <p>Infrastructure Rank: <span class="metric-value">${data2.Infrastructure_Rank || 'Not available'}</span></p>
            <p>Internet Speed: <span class="metric-value">${data2.Internet_Speed || 'Not available'}</span></p>
            <p>Communications: <span class="metric-value">${data2.Communications || 'Not available'}</span></p>
        </div>
    </div>`;
    
    return html;
}

// Create cultural comparison
function createCultureComparison(country1, country2) {
    const data1 = countriesData[country1];
    const data2 = countriesData[country2];
    
    if (!data1 || !data2) return "";
    
    const edu1 = data1.Education || {};
    const edu2 = data2.Education || {};
    
    let html = `<h2 style="color: #ff6b9d; text-align: center; margin-bottom: 30px;">Cultural and Education Comparison between ${country1} and ${country2}</h2>`;
    
    html += `<div class="culture-comparison-container">
        <div class="culture-card">
            <h3>${country1}</h3>
            <div class="culture-aspect">
                <strong>Geography</strong>
                <p><strong>Capital:</strong> ${data1.Capital || 'Not available'}</p>
                <p><strong>Area:</strong> ${data1.Area || 'Not available'}</p>
                <p><strong>Population:</strong> ${data1.Population || 'Not available'}</p>
            </div>
            <div class="culture-aspect">
                <strong>Education and Culture</strong>
                <p><strong>Literacy Rate:</strong> ${edu1.Literacy_Rate || 'Not available'}</p>
                <p><strong>Secondary Education Rate:</strong> ${edu1.Secondary_Education_Rate || 'Not available'}</p>
                <p><strong>University Education Rate:</strong> ${edu1.University_Education_Rate || 'Not available'}</p>
                <p><strong>Education Rank Worldwide:</strong> ${edu1.Education_Rank_Worldwide || 'Not available'}</p>
            </div>
            <div class="culture-aspect">
                <strong>Financial Information</strong>
                <p><strong>Currency:</strong> ${data1.Currency || 'Not available'}</p>
                <p><strong>Exchange Rate:</strong> ${data1.exchangeRate || 'Not available'} per dollar</p>
            </div>
            <div class="culture-aspect">
                <strong>Heritage and Tourist Attractions</strong>
                <p><strong>Best Time to Visit:</strong> ${data1.Best_Time_To_Visit || 'Not available'}</p>
                <p><strong>Number of Tourist Sites:</strong> ${(data1.Tourist_Attractions || []).length}</p>
            </div>
        </div>
        
        <div class="culture-card">
            <h3>${country2}</h3>
            <div class="culture-aspect">
                <strong>Geography</strong>
                <p><strong>Capital:</strong> ${data2.Capital || 'Not available'}</p>
                <p><strong>Area:</strong> ${data2.Area || 'Not available'}</p>
                <p><strong>Population:</strong> ${data2.Population || 'Not available'}</p>
            </div>
            <div class="culture-aspect">
                <strong>Education and Culture</strong>
                <p><strong>Literacy Rate:</strong> ${edu2.Literacy_Rate || 'Not available'}</p>
                <p><strong>Secondary Education Rate:</strong> ${edu2.Secondary_Education_Rate || 'Not available'}</p>
                <p><strong>University Education Rate:</strong> ${edu2.University_Education_Rate || 'Not available'}</p>
                <p><strong>Education Rank Worldwide:</strong> ${edu2.Education_Rank_Worldwide || 'Not available'}</p>
            </div>
            <div class="culture-aspect">
                <strong>Financial Information</strong>
                <p><strong>Currency:</strong> ${data2.Currency || 'Not available'}</p>
                <p><strong>Exchange Rate:</strong> ${data2.exchangeRate || 'Not available'} per dollar</p>
            </div>
            <div class="culture-aspect">
                <strong>Heritage and Tourist Attractions</strong>
                <p><strong>Best Time to Visit:</strong> ${data2.Best_Time_To_Visit || 'Not available'}</p>
                <p><strong>Number of Tourist Sites:</strong> ${(data2.Tourist_Attractions || []).length}</p>
            </div>
        </div>
    </div>`;
    
    return html;
}

// Function to display details and comparison
function compareCountries() {
    const country1 = document.getElementById("country1").value;
    const country2 = document.getElementById("country2").value;
    const comparisonDiv = document.getElementById("comparison");
    const comparisonTabs = document.getElementById("comparison-tabs");

    if (!country1 && !country2) {
        comparisonDiv.innerHTML = `<p class="warning">Please select at least one country</p>`;
        comparisonTabs.style.display = "none";
        return;
    }

    let html = "";
    comparisonDiv.classList.remove("two-column");

    if (country1) {
        const data1 = countriesData[country1];
        html += createCountryCard(country1, data1, "1");
    }

    if (country2) {
        const data2 = countriesData[country2];
        html += createCountryCard(country2, data2, "2");
        comparisonDiv.classList.add("two-column");
    }

    comparisonDiv.innerHTML = html;

    // Show comparison tabs for any selection
    if (country1 || country2) {
        comparisonTabs.style.display = "block";
        
        // Fill tabs only when comparing two countries
        if (country1 && country2) {
            // Fill economic comparison
            const economyDiv = document.getElementById("economy-comparison");
            economyDiv.innerHTML = createEconomyComparison(country1, country2);
            createAnimatedChart("economy-chart-container", country1, country2, "economy");
            
            // Fill cultural comparison
            const cultureDiv = document.getElementById("culture-comparison");
            cultureDiv.innerHTML = createCultureComparison(country1, country2);
            createAnimatedChart("culture-chart-container", country1, country2, "culture");
            
            // Fill educational comparison
            const educationDiv = document.getElementById("education-comparison");
            educationDiv.innerHTML = createEducationComparison(country1, country2);
            createAnimatedChart("education-chart-container", country1, country2, "education");
            
            // Fill infrastructure comparison
            const infrastructureDiv = document.getElementById("infrastructure-comparison");
            infrastructureDiv.innerHTML = createInfrastructureComparison(country1, country2);
            createAnimatedChart("infrastructure-chart-container", country1, country2, "infrastructure");
        }
    } else {
        comparisonTabs.style.display = "none";
    }

    // Show map at bottom after comparison
    const mapSection = document.getElementById("global-map-section");
    if (country1 || country2) {
        let mapHtml = `<div class='map-container' style='margin-top:30px;'>`;
        mapHtml += `<h3 style='color:#667eea; margin-bottom:10px;'>Geographic Location of Selected Countries</h3>`;
        mapHtml += `<div id='global-map' style='height:400px;'></div>`;
        mapHtml += `</div>`;
        mapSection.innerHTML = mapHtml;
        setTimeout(() => {
            loadGlobalMap(country1, country2);
        }, 200);
    } else {
        mapSection.innerHTML = "";
    }
}

// Draw global map for selected countries
function loadGlobalMap(country1, country2) {
    const mapDiv = document.getElementById("global-map");
    if (!mapDiv) return;
    mapDiv.innerHTML = "";
    let center = [30, 20];
    let zoom = 2;
    let markers = [];
    let map;
    // Calculate map center based on selected countries
    if (country1 && countriesData[country1] && country2 && countriesData[country2]) {
        const lat1 = countriesData[country1].lat;
        const lng1 = countriesData[country1].lng;
        const lat2 = countriesData[country2].lat;
        const lng2 = countriesData[country2].lng;
        center = [ (lat1+lat2)/2, (lng1+lng2)/2 ];
        zoom = 3;
    } else if (country1 && countriesData[country1]) {
        center = [countriesData[country1].lat, countriesData[country1].lng];
        zoom = 5;
    } else if (country2 && countriesData[country2]) {
        center = [countriesData[country2].lat, countriesData[country2].lng];
        zoom = 5;
    }
    map = L.map("global-map").setView(center, zoom);
    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "آ© OpenStreetMap",
            maxZoom: 19
        }
    ).addTo(map);
    if (country1 && countriesData[country1]) {
        const marker1 = L.marker([countriesData[country1].lat, countriesData[country1].lng])
            .addTo(map)
            .bindPopup(`🚩 ${country1}`)
            .openPopup();
        markers.push(marker1);
    }
    if (country2 && countriesData[country2]) {
        const marker2 = L.marker([countriesData[country2].lat, countriesData[country2].lng])
            .addTo(map)
            .bindPopup(`🚩 ${country2}`)
            .openPopup();
        markers.push(marker2);
    }
    // Adjust map bounds to include all markers
    if (markers.length > 1) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.3));
    }
}

// --- Show country map directly when selected ---
function showSingleMap(selectId, mapDivId) {
    const country = document.getElementById(selectId).value;
    const mapDiv = document.getElementById(mapDivId);
    if (!country) {
        mapDiv.innerHTML = "";
        return;
    }
    const data = countriesData[country];
    if (!data) {
        mapDiv.innerHTML = "";
        return;
    }
    mapDiv.innerHTML = `<div class='map-container'><div id='single-${mapDivId}' style='height:300px;'></div></div>`;
    setTimeout(() => {
        loadMap(data, `single-${mapDivId}`);
    }, 100);
}

// Add event listeners after page load
window.addEventListener("DOMContentLoaded", function() {
    const countrySelect1 = document.getElementById("country1");
    const countrySelect2 = document.getElementById("country2");
    if (countrySelect1) {
        countrySelect1.addEventListener("change", function() {
            showSingleMap("country1", "map-preview-1");
        });
    }
    if (countrySelect2) {
        countrySelect2.addEventListener("change", function() {
            showSingleMap("country2", "map-preview-2");
        });
    }
});

// Function to load map
function loadMap(data, mapId = "map") {

    const mapContainer = document.getElementById(mapId);
    
    if (!mapContainer) return;

    // Remove old map if it exists
    if (mapContainer._leaflet_id) {
        document.querySelector(`#${mapId}`).innerHTML = "";
    }

    const currentMap = L.map(mapId).setView([data.lat, data.lng], 5);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "© OpenStreetMap",
            maxZoom: 19
        }
    ).addTo(currentMap);

    L.marker([data.lat, data.lng])
        .addTo(currentMap)
        .bindPopup(`🚩 Location`)
        .openPopup();
}

// Create educational comparison
function createEducationComparison(country1, country2) {
    const data1 = countriesData[country1];
    const data2 = countriesData[country2];
    
    if (!data1 || !data2) return "";
    
    const edu1 = data1.Education || {};
    const edu2 = data2.Education || {};
    
    let html = `<h2 style="color: #ffa500; text-align: center; margin-bottom: 30px;">Educational Comparison between ${country1} and ${country2}</h2>`;
    
    html += `<div class="education-comparison-row">
        <div class="education-card">
            <h3>${country1}</h3>
            <div class="education-metric">
                <span class="metric-label">Literacy Rate:</span>
                <span class="metric-value">${edu1.Literacy_Rate || 'Not available'}</span>
            </div>
            <div class="education-metric">
                <span class="metric-label">Secondary Education Rate:</span>
                <span class="metric-value">${edu1.Secondary_Education_Rate || 'Not available'}</span>
            </div>
            <div class="education-metric">
                <span class="metric-label">University Education Rate:</span>
                <span class="metric-value">${edu1.University_Education_Rate || 'Not available'}</span>
            </div>
            <div class="education-metric">
                <span class="metric-label">Education Rank Worldwide:</span>
                <span class="metric-value">#${edu1.Education_Rank_Worldwide || 'Not available'}</span>
            </div>
        </div>
        
        <div class="education-card">
            <h3>${country2}</h3>
            <div class="education-metric">
                <span class="metric-label">Literacy Rate:</span>
                <span class="metric-value">${edu2.Literacy_Rate || 'Not available'}</span>
            </div>
            <div class="education-metric">
                <span class="metric-label">Secondary Education Rate:</span>
                <span class="metric-value">${edu2.Secondary_Education_Rate || 'Not available'}</span>
            </div>
            <div class="education-metric">
                <span class="metric-label">University Education Rate:</span>
                <span class="metric-value">${edu2.University_Education_Rate || 'Not available'}</span>
            </div>
            <div class="education-metric">
                <span class="metric-label">Education Rank Worldwide:</span>
                <span class="metric-value">#${edu2.Education_Rank_Worldwide || 'Not available'}</span>
            </div>
        </div>
    </div>`;
    
    return html;
}

// Create infrastructure comparison
function createInfrastructureComparison(country1, country2) {
    const data1 = countriesData[country1];
    const data2 = countriesData[country2];
    
    if (!data1 || !data2) return "";
    
    let html = `<h2 style="color: #00ff88; text-align: center; margin-bottom: 30px;">Infrastructure Comparison between ${country1} and ${country2}</h2>`;
    
    html += `<div class="infrastructure-comparison-row">
        <div class="infrastructure-card">
            <h3>${country1}</h3>
            <div class="infrastructure-metric">
                <span class="metric-label">Infrastructure Rank Worldwide:</span>
                <span class="metric-value">${data1.Infrastructure_Rank || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Internet Speed:</span>
                <span class="metric-value">${data1.Internet_Speed || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Communications:</span>
                <span class="metric-value">${data1.Communications || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Area:</span>
                <span class="metric-value">${data1.Area || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Population:</span>
                <span class="metric-value">${data1.Population || 'Not available'}</span>
            </div>
        </div>
        
        <div class="infrastructure-card">
            <h3>${country2}</h3>
            <div class="infrastructure-metric">
                <span class="metric-label">Infrastructure Rank Worldwide:</span>
                <span class="metric-value">${data2.Infrastructure_Rank || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Internet Speed:</span>
                <span class="metric-value">${data2.Internet_Speed || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Communications:</span>
                <span class="metric-value">${data2.Communications || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Area:</span>
                <span class="metric-value">${data2.Area || 'Not available'}</span>
            </div>
            <div class="infrastructure-metric">
                <span class="metric-label">Population:</span>
                <span class="metric-value">${data2.Population || 'Not available'}</span>
            </div>
        </div>
    </div>`;
    
    return html;
}

// Create animated charts
function createAnimatedChart(containerId, country1, country2, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const data1 = countriesData[country1];
    const data2 = countriesData[country2];
    
    if (!data1 || !data2) return;
    
    // Remove old chart if it exists
    const existingCanvas = container.querySelector('canvas');
    if (existingCanvas) {
        existingCanvas.remove();
    }
    
    // Create new canvas element
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    
    let labels = [];
    let data1Values = [];
    let data2Values = [];
    let chartLabel = "";
    let colors1 = "";
    let colors2 = "";
    
    // Set up data based on comparison type
    if (type === "economy") {
        labels = ["GDP (Billion)", "GDP Per Capita", "Unemployment Rate", "Inflation Rate"];
        chartLabel = "Economic Comparison";
        colors1 = "rgba(0, 212, 255, 0.7)";
        colors2 = "rgba(255, 0, 128, 0.7)";
        
        // Extract numeric values
        data1Values = [
            parseFloat(data1.Economy?.GDP?.split(' ')[0]) || 0,
            parseFloat(data1.Economy?.GDP_Per_Capita?.split(' ')[0]) || 0,
            parseFloat(data1.Economy?.Unemployment_Rate) || 0,
            parseFloat(data1.Economy?.Inflation_Rate) || 0
        ];
        
        data2Values = [
            parseFloat(data2.Economy?.GDP?.split(' ')[0]) || 0,
            parseFloat(data2.Economy?.GDP_Per_Capita?.split(' ')[0]) || 0,
            parseFloat(data2.Economy?.Unemployment_Rate) || 0,
            parseFloat(data2.Economy?.Inflation_Rate) || 0
        ];
    } else if (type === "culture") {
        labels = ["Literacy Rate", "Area (Thousand kmآ²)", "Population (Million)", "Tourist Sites"];
        chartLabel = "Cultural Comparison";
        colors1 = "rgba(255, 107, 157, 0.7)";
        colors2 = "rgba(255, 165, 0, 0.7)";
        
        data1Values = [
            parseFloat(data1.Education?.Literacy_Rate) || 0,
            parseFloat(data1.Area?.split(' ')[0]) || 0,
            parseFloat(data1.Population?.split(' ')[0]) || 0,
            (data1.Tourist_Attractions?.length || 0) * 10
        ];
        
        data2Values = [
            parseFloat(data2.Education?.Literacy_Rate) || 0,
            parseFloat(data2.Area?.split(' ')[0]) || 0,
            parseFloat(data2.Population?.split(' ')[0]) || 0,
            (data2.Tourist_Attractions?.length || 0) * 10
        ];
    } else if (type === "education") {
        labels = ["Literacy Rate", "Secondary Education", "University Education", "Worldwide Rank"];
        chartLabel = "Educational Comparison";
        colors1 = "rgba(255, 165, 0, 0.7)";
        colors2 = "rgba(0, 255, 136, 0.7)";
        
        data1Values = [
            parseFloat(data1.Education?.Literacy_Rate) || 0,
            parseFloat(data1.Education?.Secondary_Education_Rate) || 0,
            parseFloat(data1.Education?.University_Education_Rate) || 0,
            100 - parseFloat(data1.Education?.Education_Rank_Worldwide?.replace(/\D/g, '')) / 2 || 50
        ];
        
        data2Values = [
            parseFloat(data2.Education?.Literacy_Rate) || 0,
            parseFloat(data2.Education?.Secondary_Education_Rate) || 0,
            parseFloat(data2.Education?.University_Education_Rate) || 0,
            100 - parseFloat(data2.Education?.Education_Rank_Worldwide?.replace(/\D/g, '')) / 2 || 50
        ];
    } else if (type === "infrastructure") {
        labels = ["Internet Speed", "Population (Million)", "Infrastructure", "Density"];
        chartLabel = "Infrastructure Comparison";
        colors1 = "rgba(0, 255, 136, 0.7)";
        colors2 = "rgba(0, 212, 255, 0.7)";
        
        data1Values = [
            parseFloat(data1.Internet_Speed) || 0,
            parseFloat(data1.Population?.split(' ')[0]) || 0,
            100 - parseFloat(data1.Infrastructure_Rank?.replace(/\D/g, '')) / 2 || 50,
            parseFloat(data1.Population?.split(' ')[0]) / parseFloat(data1.Area?.split(' ')[0]) || 0
        ];
        
        data2Values = [
            parseFloat(data2.Internet_Speed) || 0,
            parseFloat(data2.Population?.split(' ')[0]) || 0,
            100 - parseFloat(data2.Infrastructure_Rank?.replace(/\D/g, '')) / 2 || 50,
            parseFloat(data2.Population?.split(' ')[0]) / parseFloat(data2.Area?.split(' ')[0]) || 0
        ];
    }
    
    // Create chart using Chart.js
    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: country1,
                    data: data1Values,
                    backgroundColor: colors1,
                    borderColor: colors1.replace('0.7', '1'),
                    borderWidth: 2,
                    borderRadius: 5,
                    animation: {
                        duration: 1500,
                        easing: 'easeInOutQuart'
                    }
                },
                {
                    label: country2,
                    data: data2Values,
                    backgroundColor: colors2,
                    borderColor: colors2.replace('0.7', '1'),
                    borderWidth: 2,
                    borderRadius: 5,
                    animation: {
                        duration: 1500,
                        easing: 'easeInOutQuart'
                    }
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#e0e0e0',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                },
                title: {
                    display: true,
                    text: chartLabel,
                    color: '#00d4ff',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#a0a0a0'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#a0a0a0'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
}

const authStateKey = "loggedInUserEmail";

function showAuthTab(tab) {
    const loginBtn = document.getElementById("login-tab-btn");
    const registerBtn = document.getElementById("register-tab-btn");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (tab === "login") {
        loginBtn.classList.add("active");
        registerBtn.classList.remove("active");
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
    } else {
        loginBtn.classList.remove("active");
        registerBtn.classList.add("active");
        loginForm.classList.remove("active");
        registerForm.classList.add("active");
    }
}

function showAuthMessage(message, success = false) {
    const messageBox = document.getElementById("auth-message");
    messageBox.textContent = message;
    messageBox.style.color = success ? "#7fff7f" : "#ffd166";
}

function showMainApp() {
    document.getElementById("auth-screen").style.display = "none";
    document.getElementById("main-app").classList.remove("hidden");
    document.getElementById("logout-btn").style.display = "inline-block";
}

function showAuthScreen() {
    document.getElementById("auth-screen").style.display = "flex";
    document.getElementById("main-app").classList.add("hidden");
    document.getElementById("logout-btn").style.display = "none";
}

async function registerUser() {
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value.trim();

    if (!email || !password) {
        return showAuthMessage("الرجاء إدخال البريد الإلكتروني وكلمة المرور.");
    }

    try {
        console.log("Sending register request to:", "http://localhost:3000/register");
        const response = await fetch("http://localhost:3000/register", { mode: "cors",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
            return showAuthMessage("خطأ من الخادم. حاول لاحقاً.");
        }

        const data = await response.json();
        console.log("Response data:", data);

        if (data.success) {
            sessionStorage.setItem(authStateKey, email);
            showAuthMessage("تم إنشاء الحساب بنجاح. مرحبًا بك!", true);
            showMainApp();
        } else {
            showAuthMessage(data.message || "حدث خطأ أثناء التسجيل.");
        }
    } catch (error) {
        console.error("Register error:", error);
        showAuthMessage("فشل الاتصال بالخادم. تأكد من أن السيرفر يعمل.");
    }
}

async function loginUser() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (!email || !password) {
        return showAuthMessage("الرجاء إدخال البريد الإلكتروني وكلمة المرور.");
    }

    try {
        console.log("Sending login request to:", "http://localhost:3000/login");
        const response = await fetch("http://localhost:3000/login", { mode: "cors",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
            return showAuthMessage("خطأ من الخادم. حاول لاحقاً.");
        }

        const data = await response.json();
        console.log("Response data:", data);

        if (data.success) {
            sessionStorage.setItem(authStateKey, email);
            showAuthMessage("تم تسجيل الدخول بنجاح.", true);
            showMainApp();
        } else {
            showAuthMessage(data.message || "البريد أو كلمة المرور غير صحيحة.");
        }
    } catch (error) {
        console.error("Login error:", error);
        showAuthMessage("فشل الاتصال بالخادم. تأكد من أن السيرفر يعمل.");
    }
}

function logoutUser() {
    sessionStorage.removeItem(authStateKey);
    showAuthScreen();
    showAuthMessage("تم تسجيل الخروج بنجاح.", true);
}

function checkLoginState() {
    if (sessionStorage.getItem(authStateKey)) {
        showMainApp();
    } else {
        showAuthScreen();
    }
}

window.addEventListener("load", checkLoginState);


