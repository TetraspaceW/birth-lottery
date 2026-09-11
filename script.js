// Species configuration with default moral weights
const speciesConfig = {
    human: { name: "Humans", defaultWeight: 1, category: "humans" },
    // Mammals
    pig: { name: "Pigs", defaultWeight: 0.515, category: "mammals" },
    buffalo: { name: "Buffalo", defaultWeight: 0.515, category: "mammals" },
    cow: { name: "Cows", defaultWeight: 0.515, category: "mammals" },
    sheep: { name: "Sheep", defaultWeight: 0.515, category: "mammals" },
    goat: { name: "Goats", defaultWeight: 0.515, category: "mammals" },
    rabbit: { name: "Rabbits", defaultWeight: 0.515, category: "mammals" },
    cat: { name: "Cats", defaultWeight: 0.515, category: "mammals" },
    dog: { name: "Dogs", defaultWeight: 0.515, category: "mammals" },
    mammal: { name: "Other mammals", defaultWeight: 0.515, category: "mammals" },
    // Birds
    chicken: { name: "Chickens", defaultWeight: 0.332, category: "birds" },
    duck: { name: "Ducks", defaultWeight: 0.332, category: "birds" },
    turkey: { name: "Turkeys", defaultWeight: 0.332, category: "birds" },
    goose: { name: "Geese", defaultWeight: 0.332, category: "birds" },
    "other-bird": { name: "Other birds", defaultWeight: 0.332, category: "birds" },
    // Arthropods
    bee: { name: "Bees", defaultWeight: 0.071, category: "arthropods" },
    shrimp: { name: "Shrimps", defaultWeight: 0.031, category: "arthropods" },
    ant: { name: "Ants", defaultWeight: 0.013, category: "arthropods" },
    termite: { name: "Termites", defaultWeight: 0.013, category: "arthropods" },
    insect: { name: "Other insects", defaultWeight: 0.013, category: "arthropods" },
    springtail: { name: "Springtails", defaultWeight: 0.002, category: "arthropods" },
    mite: { name: "Mites", defaultWeight: 0.002, category: "arthropods" },
    copepod: { name: "Copepods", defaultWeight: 0, category: "arthropods" },
    // Other
    fish: { name: "Fish", defaultWeight: 0.056, category: "other" },
    pteropod: { name: "Pteropods", defaultWeight: 0.002, category: "other" },
    nematode: { name: "Nematodes", defaultWeight: 0, category: "other" }
};

// Population data (approximate values)
const humanPopulationData = {
    // Humans (2025 estimates)
    you: { population: 1, category: "human", name: "👤 You" },
    india: { population: 1417492000, category: "human", name: "🇮🇳 Human from India" },
    china: { population: 1408280000, category: "human", name: "🇨🇳 Human from China" },
    "united-states": { population: 340110987, category: "human", name: "🇺🇸 Human from the United States" },
    xenia: { population: 1, category: "human", name: "🦊 Xenia" },
    indonesia: { population: 284438782, category: "human", name: "🇮🇩 Human from Indonesia" },
    pakistan: { population: 241499431, category: "human", name: "🇵🇰 Human from Pakistan" },
    nigeria: { population: 223800000, category: "human", name: "🇳🇬 Human from Nigeria" },
    brazil: { population: 213421037, category: "human", name: "🇧🇷 Human from Brazil" },
    bangladesh: { population: 169828911, category: "human", name: "🇧🇩 Human from Bangladesh" },
    russia: { population: 146028325, category: "human", name: "🇷🇺 Human from Russia" },
    mexico: { population: 130760049, category: "human", name: "🇲🇽 Human from Mexico" },
    japan: { population: 123190000, category: "human", name: "🇯🇵 Human from Japan" },
    philippines: { population: 114123600, category: "human", name: "🇵🇭 Human from the Philippines" },
    "dr-congo": { population: 112832000, category: "human", name: "🇨🇩 Human from the Democratic Republic of the Congo" },
    ethiopia: { population: 111652998, category: "human", name: "🇪🇹 Human from Ethiopia" },
    egypt: { population: 107271260, category: "human", name: "🇪🇬 Human from Egypt" },
    vietnam: { population: 101343800, category: "human", name: "🇻🇳 Human from Vietnam" },
    iran: { population: 85961000, category: "human", name: "🇮🇷 Human from Iran" },
    turkey: { population: 85664944, category: "human", name: "🇹🇷 Human from Turkey" },
    germany: { population: 83497147, category: "human", name: "🇩🇪 Human from Germany" },
    uk: { population: 69486999, category: "human", name: "🇬🇧 Human from the United Kingdom" },
    tetraspace: { population: 1, category: "human", name: "💎 Tetraspace" },
    france: { population: 68736000, category: "human", name: "🇫🇷 Human from France" },
    tanzania: { population: 68153004, category: "human", name: "🇹🇿 Human from Tanzania" },
    thailand: { population: 65826149, category: "human", name: "🇹🇭 Human from Thailand" },
    "south-africa": { population: 63100945, category: "human", name: "🇿🇦 Human from South Africa" },
    italy: { population: 58925596, category: "human", name: "🇮🇹 Human from Italy" },
    kenya: { population: 53330978, category: "human", name: "🇰🇪 Human from Kenya" },
    colombia: { population: 53057212, category: "human", name: "🇨🇴 Human from Colombia" },
    "sudan": { population: 51662000, category: "human", name: "🇸🇩 Human from Sudan" },
    myanmar: { population: 51316756, category: "human", name: "🇲🇲 Human from Myanmar" },
    "south-korea": { population: 51143421, category: "human", name: "🇰🇷 Human from South Korea" },
    spain: { population: 49442844, category: "human", name: "🇪🇸 Human from Spain" },
    algeria: { population: 47400000, category: "human", name: "🇩🇿 Human from Algeria" },
    argentina: { population: 46387098, category: "human", name: "🇦🇷 Human from Argentina" },
    iraq: { population: 46118793, category: "human", name: "🇮🇶 Human from Iraq" },
    uganda: { population: 45905417, category: "human", name: "🇺🇬 Human from Uganda" },
    afghanistan: { population: 43844000, category: "human", name: "🇦🇫 Human from Afghanistan" },
    canada: { population: 41575585, category: "human", name: "🇨🇦 Human from Canada" },
    uzbekistan: { population: 38069116, category: "human", name: "🇺🇿 Human from Uzbekistan" },
    poland: { population: 37376000, category: "human", name: "🇵🇱 Human from Poland" },
    morocco: { population: 36828330, category: "human", name: "🇲🇦 Human from Morocco" },
    angola: { population: 36604681, category: "human", name: "🇦🇴 Human from Angola" },
    "saudi-arabia": { population: 35300280, category: "human", name: "🇸🇦 Human from Saudi Arabia" },
    peru: { population: 34350244, category: "human", name: "🇵🇪 Human from Peru" },
    malaysia: { population: 34281100, category: "human", name: "🇲🇾 Human from Malaysia" },
    mozambique: { population: 34090466, category: "human", name: "🇲🇿 Human from Mozambique" },
    ghana: { population: 33742380, category: "human", name: "🇬🇭 Human from Ghana" },
    ukraine: { population: 32862000, category: "human", name: "🇺🇦 Human from Ukraine" },
    yemen: { population: 32684503, category: "human", name: "🇾🇪 Human from Yemen" },
    madagascar: { population: 31727042, category: "human", name: "🇲🇬 Human from Madagascar" },
    "ivory-coast": { population: 31719275, category: "human", name: "🇨🇮 Human from Ivory Coast" },
    nepal: { population: 29911840, category: "human", name: "🇳🇵 Human from Nepal" },
    cameroon: { population: 29442327, category: "human", name: "🇨🇲 Human from Cameroon" },
    venezuela: { population: 28517000, category: "human", name: "🇻🇪 Human from Venezuela" },
    australia: { population: 27614400, category: "human", name: "🇦🇺 Human from Australia" },
    niger: { population: 26312034, category: "human", name: "🇳🇪 Human from Niger" },
    syria: { population: 26019711, category: "human", name: "🇸🇾 Human from Syria" },
    "north-korea": { population: 25950000, category: "human", name: "🇰🇵 Human from North Korea" },
    "burkina-faso": { population: 24070553, category: "human", name: "🇧🇫 Human from Burkina Faso" },
    taiwan: { population: 23317031, category: "human", name: "🇹🇼 Human from Taiwan" },
    mali: { population: 22395489, category: "human", name: "🇲🇱 Human from Mali" },
    "sri-lanka": { population: 21763170, category: "human", name: "🇱🇰 Human from Sri Lanka" },
    malawi: { population: 20734262, category: "human", name: "🇲🇼 Human from Malawi" },
    kazakhstan: { population: 20464077, category: "human", name: "🇰🇿 Human from Kazakhstan" },
    chile: { population: 20206953, category: "human", name: "🇨🇱 Human from Chile" },
    zambia: { population: 19693423, category: "human", name: "🇿🇲 Human from Zambia" },
    somalia: { population: 19655000, category: "human", name: "🇸🇴 Human from Somalia" },
    chad: { population: 19340757, category: "human", name: "🇹🇩 Human from Chad" },
    romania: { population: 19036031, category: "human", name: "🇷🇴 Human from Romania" },
    senegal: { population: 18593258, category: "human", name: "🇸🇳 Human from Senegal" },
    netherlands: { population: 18130662, category: "human", name: "🇳🇱 Human from the Netherlands" },
    ecuador: { population: 18103660, category: "human", name: "🇪🇨 Human from Ecuador" },
    guatemala: { population: 18079810, category: "human", name: "🇬🇹 Human from Guatemala" },
    cambodia: { population: 17577760, category: "human", name: "🇰🇭 Human from Cambodia" },
    zimbabwe: { population: 17073087, category: "human", name: "🇿🇼 Human from Zimbabwe" },
    "south-sudan": { population: 15786898, category: "human", name: "🇸🇸 Human from South Sudan" },
    guinea: { population: 14363931, category: "human", name: "🇬🇳 Human from Guinea" },
    rwanda: { population: 14104969, category: "human", name: "🇷🇼 Human from Rwanda" },
    benin: { population: 13224860, category: "human", name: "🇧🇯 Human from Benin" },
    burundi: { population: 12332788, category: "human", name: "🇧🇮 Human from Burundi" },
    tunisia: { population: 11972169, category: "human", name: "🇹🇳 Human from Tunisia" },
    belgium: { population: 11917402, category: "human", name: "🇧🇪 Human from Belgium" },
    haiti: { population: 11867032, category: "human", name: "🇭🇹 Human from Haiti" },
    jordan: { population: 11734000, category: "human", name: "🇯🇴 Human from Jordan" },
    bolivia: { population: 11365333, category: "human", name: "🇧🇴 Human from Bolivia" },
    "united-arab-emirates": { population: 11294243, category: "human", name: "🇦🇪 Human from the United Arab Emirates" },
    "czech-republic": { population: 10882341, category: "human", name: "🇨🇿 Human from the Czech Republic" },
    "dominican-republic": { population: 10771504, category: "human", name: "🇩🇴 Human from the Dominican Republic" },
    portugal: { population: 10749635, category: "human", name: "🇵🇹 Human from Portugal" },
    sweden: { population: 10610485, category: "human", name: "🇸🇪 Human from Sweden" },
    tajikistan: { population: 10499000, category: "human", name: "🇹🇯 Human from Tajikistan" },
    greece: { population: 10372335, category: "human", name: "🇬🇷 Human from Greece" },
    azerbaijan: { population: 10253647, category: "human", name: "🇦🇿 Human from Azerbaijan" },
    "papua-new-guinea": { population: 10185363, category: "human", name: "🇵🇬 Human from Papua New Guinea" },
    israel: { population: 10147200, category: "human", name: "🇮🇱 Human from Israel" },
    honduras: { population: 9892632, category: "human", name: "🇭🇳 Human from Honduras" },
    cuba: { population: 9748007, category: "human", name: "🇨🇺 Human from Cuba" },
    hungary: { population: 9539502, category: "human", name: "🇭🇺 Human from Hungary" },
    austria: { population: 9216459, category: "human", name: "🇦🇹 Human from Austria" },
    belarus: { population: 9109280, category: "human", name: "🇧🇾 Human from Belarus" },
    switzerland: { population: 9104063, category: "human", name: "🇨🇭 Human from Switzerland" },
    "sierra-leone": { population: 9077691, category: "human", name: "🇸🇱 Human from Sierra Leone" },
    togo: { population: 8095498, category: "human", name: "🇹🇬 Human from Togo" },
    laos: { population: 7647000, category: "human", name: "🇱🇦 Human from Laos" },
    "hong-kong": { population: 7527500, category: "human", name: "🇭🇰 Human from Hong Kong" },
    libya: { population: 7459000, category: "human", name: "🇱🇾 Human from Libya" },
    kyrgyzstan: { population: 7281800, category: "human", name: "🇰🇬 Human from Kyrgyzstan" },
    turkmenistan: { population: 7057841, category: "human", name: "🇹🇲 Human from Turkmenistan" },
    nicaragua: { population: 6803886, category: "human", name: "🇳🇮 Human from Nicaragua" },
    serbia: { population: 6567783, category: "human", name: "🇷🇸 Human from Serbia" },
    "central-african-republic": { population: 6470307, category: "human", name: "🇨🇫 Human from the Central African Republic" },
    bulgaria: { population: 6437360, category: "human", name: "🇧🇬 Human from Bulgaria" },
    "republic-of-congo": { population: 6142180, category: "human", name: "🇨🇬 Human from the Republic of the Congo" },
    singapore: { population: 6110200, category: "human", name: "🇸🇬 Human from Singapore" },
    paraguay: { population: 6109644, category: "human", name: "🇵🇾 Human from Paraguay" },
    "el-salvador": { population: 6029976, category: "human", name: "🇸🇻 Human from El Salvador" },
    denmark: { population: 6024684, category: "human", name: "🇩🇰 Human from Denmark" },
    finland: { population: 5655715, category: "human", name: "🇫🇮 Human from Finland" },
    norway: { population: 5618354, category: "human", name: "🇳🇴 Human from Norway" },
    "lebanon": { population: 5490000, category: "human", name: "🇱🇧 Human from Lebanon" },
    palestine: { population: 5483450, category: "human", name: "🇵🇸 Human from Palestine" },
    ireland: { population: 5458600, category: "human", name: "🇮🇪 Human from Ireland" },
    slovakia: { population: 5413191, category: "human", name: "🇸🇰 Human from Slovakia" },
    oman: { population: 5356019, category: "human", name: "🇴🇲 Human from Oman" },
    "new-zealand": { population: 5334200, category: "human", name: "🇳🇿 Human from New Zealand" },
    liberia: { population: 5248621, category: "human", name: "🇱🇷 Human from Liberia" },
    "costa-rica": { population: 5191824, category: "human", name: "🇨🇷 Human from Costa Rica" },
    mauritania: { population: 4927532, category: "human", name: "🇲🇷 Human from Mauritania" },
    kuwait: { population: 4881254, category: "human", name: "🇰🇼 Human from Kuwait" },
    panama: { population: 4064780, category: "human", name: "🇵🇦 Human from Panama" },
    croatia: { population: 3866233, category: "human", name: "🇭🇷 Human from Croatia" },
    georgia: { population: 3704500, category: "human", name: "🇬🇪 Human from Georgia" },
    eritrea: { population: 3607000, category: "human", name: "🇪🇷 Human from Eritrea" },
    mongolia: { population: 3544835, category: "human", name: "🇲🇳 Human from Mongolia" },
    uruguay: { population: 3499451, category: "human", name: "🇺🇾 Human from Uruguay" },
    "bosnia-herzegovina": { population: 3412000, category: "human", name: "🇧🇦 Human from Bosnia and Herzegovina" },
    "puerto-rico": { population: 3203295, category: "human", name: "🇵🇷 Human from Puerto Rico" },
    qatar: { population: 3173024, category: "human", name: "🇶🇦 Human from Qatar" },
    armenia: { population: 3076200, category: "human", name: "🇦🇲 Human from Armenia" },
    namibia: { population: 3022401, category: "human", name: "🇳🇦 Human from Namibia" },
    lithuania: { population: 2895826, category: "human", name: "🇱🇹 Human from Lithuania" },
    jamaica: { population: 2774538, category: "human", name: "🇯🇲 Human from Jamaica" },
    gabon: { population: 2469296, category: "human", name: "🇬🇦 Human from Gabon" },
    gambia: { population: 2422712, category: "human", name: "🇬🇲 Human from the Gambia" },
    moldova: { population: 2381300, category: "human", name: "🇲🇩 Human from Moldova" },
    albania: { population: 2363314, category: "human", name: "🇦🇱 Human from Albania" },
    botswana: { population: 2359609, category: "human", name: "🇧🇼 Human from Botswana" },
    slovenia: { population: 2130986, category: "human", name: "🇸🇮 Human from Slovenia" },
    lesotho: { population: 2116427, category: "human", name: "🇱🇸 Human from Lesotho" },
    latvia: { population: 1827800, category: "human", name: "🇱🇻 Human from Latvia" },
    "north-macedonia": { population: 1822612, category: "human", name: "🇲🇰 Human from North Macedonia" },
    "guinea-bissau": { population: 1781308, category: "human", name: "🇬🇼 Human from Guinea-Bissau" },
    "equatorial-guinea": { population: 1668768, category: "human", name: "🇬🇶 Human from Equatorial Guinea" },
    bahrain: { population: 1594654, category: "human", name: "🇧🇭 Human from Bahrain" },
    kosovo: { population: 1585556, category: "human", name: "🇽🇰 Human from Kosovo" },
    "timor-leste": { population: 1391221, category: "human", name: "🇹🇱 Human from Timor-Leste" },
    estonia: { population: 1369995, category: "human", name: "🇪🇪 Human from Estonia" },
    "trinidad-tobago": { population: 1367764, category: "human", name: "🇹🇹 Human from Trinidad and Tobago" },
    mauritius: { population: 1243741, category: "human", name: "🇲🇺 Human from Mauritius" },
    eswatini: { population: 1235549, category: "human", name: "🇸🇿 Human from Eswatini" },
    djibouti: { population: 1066809, category: "human", name: "🇩🇯 Human from Djibouti" },
    cyprus: { population: 966400, category: "human", name: "🇨🇾 Human from Cyprus" },
    comoros: { population: 919901, category: "human", name: "🇰🇲 Human from Comoros" },
    fiji: { population: 900869, category: "human", name: "🇫🇯 Human from Fiji" },
    bhutan: { population: 784043, category: "human", name: "🇧🇹 Human from Bhutan" },
    guyana: { population: 772975, category: "human", name: "🇬🇾 Human from Guyana" },
    "solomon-islands": { population: 750325, category: "human", name: "🇸🇧 Human from the Solomon Islands" },
    macau: { population: 686600, category: "human", name: "🇲🇴 Human from Macau" },
    luxembourg: { population: 681973, category: "human", name: "🇱🇺 Human from Luxembourg" },
    montenegro: { population: 623327, category: "human", name: "🇲🇪 Human from Montenegro" },
    suriname: { population: 616500, category: "human", name: "🇸🇷 Human from Suriname" },
    "western-sahara": { population: 600904, category: "human", name: "🇪🇭 Human from Western Sahara" },
    malta: { population: 574250, category: "human", name: "🇲🇹 Human from Malta" },
    maldives: { population: 515132, category: "human", name: "🇲🇻 Human from Maldives" },
    "cape-verde": { population: 491233, category: "human", name: "🇨🇻 Human from Cape Verde" },
    "northern-cyprus": { population: 476214, category: "human", name: "🇨🇾 Human from Northern Cyprus" },
    brunei: { population: 455500, category: "human", name: "🇧🇳 Human from Brunei" },
    belize: { population: 417634, category: "human", name: "🇧🇿 Human from Belize" },
    bahamas: { population: 398165, category: "human", name: "🇧🇸 Human from the Bahamas" },
    iceland: { population: 393160, category: "human", name: "🇮🇸 Human from Iceland" },
    vanuatu: { population: 321409, category: "human", name: "🇻🇺 Human from Vanuatu" },
    "french-polynesia": { population: 279500, category: "human", name: "🇵🇫 Human from French Polynesia" },
    barbados: { population: 267800, category: "human", name: "🇧🇧 Human from Barbados" },
    "new-caledonia": { population: 264596, category: "human", name: "🇳🇨 Human from New Caledonia" },
    "sao-tome-principe": { population: 209607, category: "human", name: "🇸🇹 Human from São Tomé and Príncipe" },
    samoa: { population: 205557, category: "human", name: "🇼🇸 Human from Samoa" },
    "saint-lucia": { population: 184100, category: "human", name: "🇱🇨 Human from Saint Lucia" },
    curacao: { population: 156115, category: "human", name: "🇨🇼 Human from Curaçao" },
    guam: { population: 153836, category: "human", name: "🇬🇺 Human from Guam" },
    seychelles: { population: 122729, category: "human", name: "🇸🇨 Human from Seychelles" },
    kiribati: { population: 120740, category: "human", name: "🇰🇮 Human from Kiribati" },
    "saint-vincent-grenadines": { population: 110872, category: "human", name: "🇻🇨 Human from Saint Vincent and the Grenadines" },
    grenada: { population: 109021, category: "human", name: "🇬🇩 Human from Grenada" },
    aruba: { population: 108880, category: "human", name: "🇦🇼 Human from Aruba" },
    "federated-states-of-micronesia": { population: 105564, category: "human", name: "🇫🇲 Human from the Federated States of Micronesia" },
    "antigua-barbuda": { population: 103603, category: "human", name: "🇦🇬 Human from Antigua and Barbuda" },
    jersey: { population: 103267, category: "human", name: "🇯🇪 Human from Jersey" },
    tonga: { population: 100179, category: "human", name: "🇹🇴 Human from Tonga" },
    andorra: { population: 88941, category: "human", name: "🇦🇩 Human from Andorra" },
    "us-virgin-islands": { population: 87146, category: "human", name: "🇻🇮 Human from the U.S. Virgin Islands" },
    "cayman-islands": { population: 84738, category: "human", name: "🇰🇾 Human from the Cayman Islands" },
    "isle-of-man": { population: 84530, category: "human", name: "🇮🇲 Human from the Isle of Man" },
    dominica: { population: 67408, category: "human", name: "🇩🇲 Human from Dominica" },
    guernsey: { population: 64781, category: "human", name: "🇬🇬 Human from Guernsey" },
    bermuda: { population: 64055, category: "human", name: "🇧🇲 Human from Bermuda" },
    greenland: { population: 56831, category: "human", name: "🇬🇱 Human from Greenland" },
    "saint-kitts-nevis": { population: 51320, category: "human", name: "🇰🇳 Human from Saint Kitts and Nevis" },
    "turks-caicos": { population: 50828, category: "human", name: "🇹🇨 Human from the Turks and Caicos Islands" },
    "american-samoa": { population: 49710, category: "human", name: "🇦🇸 Human from American Samoa" },
    "northern-mariana": { population: 47329, category: "human", name: "🇲🇵 Human from the Northern Mariana Islands" },
    "marshall-islands": { population: 42418, category: "human", name: "🇲🇭 Human from the Marshall Islands" },
    "sint-maarten": { population: 41349, category: "human", name: "🇸🇽 Human from Sint Maarten" },
    liechtenstein: { population: 41024, category: "human", name: "🇱🇮 Human from Liechtenstein" },
    "british-virgin-islands": { population: 39471, category: "human", name: "🇻🇬 Human from the British Virgin Islands" },
    monaco: { population: 38423, category: "human", name: "🇲🇨 Human from Monaco" },
    gibraltar: { population: 38196, category: "human", name: "🇬🇮 Human from Gibraltar" },
    "san-marino": { population: 34154, category: "human", name: "🇸🇲 Human from San Marino" },
    "saint-martin": { population: 31496, category: "human", name: "🇲🇫 Human from Saint Martin" },
    palau: { population: 16733, category: "human", name: "🇵🇼 Human from Palau" },
    anguilla: { population: 16010, category: "human", name: "🇦🇮 Human from Anguilla" },
    "cook-islands": { population: 15040, category: "human", name: "🇨🇰 Human from the Cook Islands" },
    nauru: { population: 11680, category: "human", name: "🇳🇷 Human from Nauru" },
    "wallis-futuna": { population: 11620, category: "human", name: "🇼🇫 Human from Wallis and Futuna" },
    tuvalu: { population: 10643, category: "human", name: "🇹🇻 Human from Tuvalu" },
    "saint-barthelemy": { population: 10562, category: "human", name: "🇧🇱 Human from Saint Barthélemy" },
    "saint-pierre-miquelon": { population: 5819, category: "human", name: "🇵🇲 Human from Saint Pierre and Miquelon" },
    "saint-helena": { population: 5651, category: "human", name: "🇸🇭 Human from Saint Helena" },
    montserrat: { population: 4386, category: "human", name: "🇲🇸 Human from Montserrat" },
    "falkland-islands": { population: 3662, category: "human", name: "🇫🇰 Human from the Falkland Islands" },
    tokelau: { population: 2608, category: "human", name: "🇹🇰 Human from Tokelau" },
    "norfolk-island": { population: 2188, category: "human", name: "🇳🇫 Human from Norfolk Island" },
    "christmas-island": { population: 1692, category: "human", name: "🇨🇽 Human from Christmas Island" },
    niue: { population: 1681, category: "human", name: "🇳🇺 Human from Niue" },
    "vatican-city": { population: 882, category: "human", name: "🇻🇦 Human from Vatican City" },
    "cocos-islands": { population: 593, category: "human", name: "🇨🇨 Human from the Cocos Islands" },
    "pitcairn-islands": { population: 35, category: "human", name: "🇵🇳 Human from the Pitcairn Islands" },
};

const animalPopulationData = {
    // Farmed animals
    fish: { population: 77e9, category: "domestic", name: "🐟 Farmed fish", moralWeightKey: "fish" },
    dog: { population: 471e6, category: "domestic", name: "🐕‍🦺 Pet dog", moralWeightKey: "dog" },
    cat: { population: 373e6, category: "domestic", name: "🐈 Pet cat", moralWeightKey: "cat" },
    hen: { population: 6.5e9, category: "domestic", name: "🐔🥚 Farmed egg-laying chicken", moralWeightKey: "chicken" },
    broiler: { population: 21.3e9, category: "domestic", name: "🐔 Farmed chicken", moralWeightKey: "chicken" },
    cow: { population: 1.47e9, category: "domestic", name: "🐄 Farmed cow", moralWeightKey: "cow" },
    duck: { population: 1.24e9, category: "domestic", name: "🦆 Farmed duck", moralWeightKey: "duck" },
    sheep: { population: 1.17e9, category: "domestic", name: "🐑 Farmed sheep", moralWeightKey: "sheep" },
    goat: { population: 1.00e9, category: "domestic", name: "🐐 Farmed goat", moralWeightKey: "goat" },
    pig: { population: 982e6, category: "domestic", name: "🐖 Farmed pig", moralWeightKey: "pig" },
    turkey: { population: 469e6, category: "domestic", name: "🦃 Farmed turkey", moralWeightKey: "turkey" },
    goose: { population: 381e6, category: "domestic", name: "🪿 Farmed goose", moralWeightKey: "goose" },
    rabbit: { population: 317e6, category: "domestic", name: "🐰 Farmed rabbit", moralWeightKey: "rabbit" },
    buffalo: { population: 199e6, category: "domestic", name: "🦬 Farmed buffalo", moralWeightKey: "buffalo" },
    shrimp: { population: 230e9, category: "domestic", name: "🦐 Farmed shrimp", moralWeightKey: "shrimp" },
    cricket: { population: 37.3e9, category: "domestic", name: "🦗 Farmed cricket", moralWeightKey: "insect" },
    mealworm: { population: 27.8e9, category: "domestic", name: "🐛 Farmed mealworm", moralWeightKey: "insect" },
    "soldier-fly": { population: 11.4e9, category: "domestic", name: "🪰 Farmed black soldier fly", moralWeightKey: "insect" },
    bee: { population: 2.87e12, category: "domestic", name: "🐝 Managed honey bee", moralWeightKey: "bee" },
    cochineal: { population: 8.5e9, category: "domestic", name: "🪲 Farmed cochineal", moralWeightKey: "insect" },
    "farmed-insect": { population: 8.485e9, category: "domestic", name: "🦗 Other farmed insect", moralWeightKey: "insect" },

    // Wild animals
    "wild-mammal": { population: 3.5e11, category: "wild", name: "🐀 Other wild mammal", moralWeightKey: "mammal" },
    "wild-bird": { population: 1e11, category: "wild", name: "🐦 Wild bird", moralWeightKey: "other-bird" },
    "wild-duck": { population: 3.1e8, category: "wild", name: "🦆 Wild duck", moralWeightKey: "duck" },
    "wild-rabbit": { population: 3.1e8, category: "wild", name: "🐰 Wild rabbit", moralWeightKey: "rabbit" },
    "feral-cat": { population: 3.1e8, category: "wild", name: "🐈 Feral cat", moralWeightKey: "cat" },
    "wild-goose": { population: 1e8, category: "wild", name: "🪿 Wild goose", moralWeightKey: "goose" },
    "wild-pig": { population: 1e8, category: "wild", name: "🐗 Wild boar", moralWeightKey: "pig" },
    "wild-fish": { population: 1e15, category: "wild", name: "🐟 Wild fish", moralWeightKey: "fish" },
    // Wild soil arthropods from Rosenberg et al. 2023 (Sci Adv abq4049): ~1e19
    // individuals total (0.5-2e19), >95% of which are mites+springtails with
    // ~2/3 of those being mites; soil springtails directly estimated at 3e18
    // and nonarboreal ants at 5e16. Termites/other arthropods have no direct
    // population estimate in the paper, so kept at previous order of magnitude.
    "wild-mite": { population: 1e19 * 0.95 * 2 / 3, category: "wild", name: "🕷️ Wild mite", moralWeightKey: "mite" },
    "wild-springtail": { population: 3e18, category: "wild", name: "🪳 Wild springtail", moralWeightKey: "springtail" },
    "wild-ant": { population: 5e16, category: "wild", name: "🐜 Wild ant", moralWeightKey: "ant" },
    "wild-termite": { population: 5.2e16, category: "wild", name: "🐜 Wild termite", moralWeightKey: "termite" },
    "wild-arthropod": { population: 5.2e16, category: "wild", name: "🕷️ Other wild arthropod", moralWeightKey: "insect" },
    "wild-shrimp": { population: 1e14, category: "wild", name: "🦐 Wild shrimp", moralWeightKey: "shrimp" },
    "wild-marine-arthropod": { population: 1e20, category: "wild", name: "🦐 Wild copepod", moralWeightKey: "copepod" },
    "wild-pteropod": { population: 5e17, category: "wild", name: "🐌 Wild pteropod", moralWeightKey: "pteropod" },
    "wild-nematode": { population: 1e21, category: "wild", name: "🪱 Wild nematode", moralWeightKey: "nematode" }
};
const blurbs = {
    // Category blurbs
    category: {

    },

    // Species-specific blurbs
    species: {
    },

    // Country-specific blurbs for humans
    country: {
    }
};

// Function to collect relevant blurbs for a result
function getBlurbs(result) {
    const collectedBlurbs = [];

    // Add species-specific blurb if exists
    // Use the same key as in animalPopulationData/humanPopulationData
    if (result.key && blurbs.species[result.key]) {
        collectedBlurbs.push(blurbs.species[result.key]);
    }

    // Add country-specific blurb for humans if exists
    if (result.category === "human" && result.key && blurbs.country[result.key]) {
        collectedBlurbs.push(blurbs.country[result.key]);
    }

    // Add category blurb if exists
    if (result.category && blurbs.category[result.category]) {
        collectedBlurbs.push(blurbs.category[result.category]);
    }

    return collectedBlurbs;
}

const populationData = {
    ...humanPopulationData,
    ...animalPopulationData,
};

// Initialize collapsible sections
document.addEventListener("DOMContentLoaded", function () {
    // Generate weight inputs from species config
    generateWeightInputs();

    // Setup reincarnate button
    const reincarnateBtn = document.getElementById("reincarnateBtn");
    reincarnateBtn.addEventListener("click", reincarnate);
});

function generateWeightInputs() {
    const weightInputsContainer = document.getElementById("weightInputs");

    // Group species by category
    const categories = {
        humans: [],
        birds: [],
        mammals: [],
        arthropods: [],
        other: []
    };

    for (const [key, config] of Object.entries(speciesConfig)) {
        categories[config.category].push({ key, config });
    }

    // Create sections for each category
    for (const [categoryName, species] of Object.entries(categories)) {
        if (species.length === 0) continue;

        // Create category section
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "weight-category";

        const categoryTitle = document.createElement("h4");
        categoryTitle.textContent = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
        categoryDiv.appendChild(categoryTitle);

        // Add species inputs for this category
        for (const { key, config } of species) {
            const label = document.createElement("label");
            label.textContent = `${config.name}: `;

            const input = document.createElement("input");
            input.type = "number";
            input.id = `weight-${key}`;
            input.value = config.defaultWeight;
            input.min = "0";
            input.step = "0.1";

            // Store the original value to detect changes
            let lastValue = config.defaultWeight;

            // Function to apply logarithmic scaling
            const applyLogScale = (direction) => {
                const currentValue = parseFloat(input.value) || 0;
                let newValue;

                if (direction === "up") {
                    newValue = currentValue * 10
                } else {
                    newValue = currentValue / 10
                }

                lastValue = newValue;
                input.value = newValue;
            };

            // Handle arrow keys
            input.addEventListener("keydown", function (e) {
                if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                    e.preventDefault();
                    applyLogScale(e.key === "ArrowUp" ? "up" : "down");
                }
            });

            // Handle wheel events (scrolling on the input)
            input.addEventListener("wheel", function (e) {
                e.preventDefault();
                applyLogScale(e.deltaY < 0 ? "up" : "down");
            });

            // Handle change event for manual typing
            input.addEventListener("change", function (e) {
                const currentValue = parseFloat(this.value) || 0;
                lastValue = currentValue;
            });

            label.appendChild(input);
            categoryDiv.appendChild(label);
        }

        weightInputsContainer.appendChild(categoryDiv);
    }
}

function getMoralWeight(species) {
    const input = document.getElementById(`weight-${species}`);
    return parseFloat(input.value) || 0;
}

function isIncluded(category) {
    if (category === "human")
        return document.getElementById("includeHumans").checked;
    if (category === "domestic")
        return document.getElementById("includeFarmedAnimals").checked;
    if (category === "wild")
        return document.getElementById("includeWildAnimals").checked;
    return false;
}

function calculateWeightedOptions() {
    const options = [];

    for (const [key, data] of Object.entries(populationData)) {
        if (!isIncluded(data.category)) {
            continue;
        }

        // Get moral weight by species
        let moralWeight;
        if (data.category === "human") {
            moralWeight = getMoralWeight("human");
        } else if (data.moralWeightKey) {
            moralWeight = getMoralWeight(data.moralWeightKey);
        } else {
            moralWeight = getMoralWeight(key);
        }

        const weight = data.population * moralWeight;

        if (weight > 0) {
            options.push({
                key: key,
                name: data.name,
                weight: weight,
                category: data.category,
                moralWeightKey: data.moralWeightKey,
            });
        }
    }

    return options;
}

function weightedRandom(options) {
    const totalWeight = options.reduce((sum, option) => sum + option.weight, 0);

    if (totalWeight === 0) {
        return null;
    }

    let random = Math.random() * totalWeight;

    for (const option of options) {
        random -= option.weight;
        if (random <= 0) {
            return option;
        }
    }

    // Fallback (shouldn't happen)
    return options[options.length - 1];
}

function reincarnate() {
    const options = calculateWeightedOptions();

    if (options.length === 0) {
        showResult("No categories selected! Please select at least one category.");
        return;
    }

    const result = weightedRandom(options);

    if (result) {
        // Calculate percentage for display
        const totalWeight = options.reduce((sum, option) => sum + option.weight, 0);
        const percentage = ((result.weight / totalWeight) * 100).toFixed(1);

        showResult(`${result.name}`, result);
    }

    // Change button text to "Draw again" after first click
    const reincarnateBtn = document.getElementById("reincarnateBtn");
    reincarnateBtn.textContent = "Draw again";
}

function showResult(text, result = null) {
    const resultDiv = document.getElementById("result");

    // Clear previous content
    resultDiv.innerHTML = "";

    // Create main result element
    const resultText = document.createElement("div");
    resultText.textContent = text;
    resultText.className = "result-text";
    resultDiv.appendChild(resultText);

    // Add blurbs if result is provided
    if (result) {
        const blurbs = getBlurbs(result);
        if (blurbs.length > 0) {
            const blurbsContainer = document.createElement("div");
            blurbsContainer.className = "blurbs-container";

            blurbs.forEach(blurb => {
                const blurbElement = document.createElement("p");
                blurbElement.className = "blurb";
                blurbElement.innerHTML = blurb;
                blurbsContainer.appendChild(blurbElement);
            });

            resultDiv.appendChild(blurbsContainer);
        }
    }

    resultDiv.classList.add("show");

    // Remove animation class after animation completes
    setTimeout(() => {
        resultDiv.classList.remove("show");
    }, 500);
}

// Preset configurations for moral weights
const moralWeightPresets = {
    rethink: {
        human: 1,
        chicken: 0.332,
        duck: 0.332,
        turkey: 0.332,
        goose: 0.332,
        "other-bird": 0.332,
        pig: 0.515,
        buffalo: 0.515,
        cow: 0.515,
        sheep: 0.515,
        goat: 0.515,
        rabbit: 0.515,
        cat: 0.515,
        dog: 0.515,
        fish: 0.056,
        shrimp: 0.031,
        mite: 0.002,
        springtail: 0.002,
        ant: 0.013,
        termite: 0.013,
        insect: 0.013,
        bee: 0.071,
        mammal: 0.515,
        copepod: 0,
        pteropod: 0.002,
        nematode: 0
    },
    neurons: {
        human: 16.3e3,
        chicken: 60,
        duck: 250,
        turkey: 100,
        goose: 300,
        "other-bird": 200,
        pig: 425,
        buffalo: 500,
        cow: 500,
        sheep: 300,
        goat: 300,
        rabbit: 70,
        cat: 250,
        dog: 600,
        fish: 1,
        shrimp: 8.6e-3,
        insect: 50e-3,
        mite: 580e-6,
        springtail: 580e-6,
        ant: 25e-3,
        termite: 10e-3,
        bee: 170e-3,
        pteropod: 1800e-6,
        mammal: 20,
        copepod: 727e-6,
        nematode: 30e-6
    }
};

function isMammal(species) {
    return speciesConfig[species].category == "mammals" || speciesConfig[species].category == "humans";
}

function isVertebrate(species) {
    return isMammal(species) || speciesConfig[species].category == "birds" || species == "fish";
}

// Apply preset moral weights
function applyPreset(presetName) {
    if (presetName == "equal") {
        for (const species of Object.keys(speciesConfig)) {
            const input = document.getElementById(`weight-${species}`);
            if (input) {
                input.value = 1;
            }
        }
    } else if (presetName == "mammals") {
        for (const species of Object.keys(speciesConfig)) {
            const input = document.getElementById(`weight-${species}`);
            if (input) {
                input.value = isMammal(species) ? 1 : 0;
            }
        }
    } else if (presetName == "vertebrates") {
        for (const species of Object.keys(speciesConfig)) {
            const input = document.getElementById(`weight-${species}`);
            if (input) {
                input.value = isVertebrate(species) ? 1 : 0;
            }
        }
    } else {
        const preset = moralWeightPresets[presetName];
        if (!preset) return;

        for (const [species, weight] of Object.entries(preset)) {
            const input = document.getElementById(`weight-${species}`);
            if (input) {
                input.value = weight;
            }
        }
    }
}
