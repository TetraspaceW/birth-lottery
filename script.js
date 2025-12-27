// Species configuration with default moral weights
const speciesConfig = {
    human: { name: "Humans", defaultWeight: 1, category: "humans" },
    // Birds
    chicken: { name: "Chickens", defaultWeight: 0.332, category: "birds" },
    duck: { name: "Ducks", defaultWeight: 0.3, category: "birds" },
    turkey: { name: "Turkeys", defaultWeight: 0.3, category: "birds" },
    goose: { name: "Geese", defaultWeight: 0.3, category: "birds" },
    "other-bird": { name: "Other birds", defaultWeight: 0.3, category: "birds" },
    // Mammals
    pig: { name: "Pigs", defaultWeight: 0.515, category: "mammals" },
    buffalo: { name: "Buffalo", defaultWeight: 0.5, category: "mammals" },
    cow: { name: "Cows", defaultWeight: 0.5, category: "mammals" },
    sheep: { name: "Sheep", defaultWeight: 0.5, category: "mammals" },
    goat: { name: "Goats", defaultWeight: 0.5, category: "mammals" },
    rabbit: { name: "Rabbits", defaultWeight: 0.5, category: "mammals" },
    cat: { name: "Cats", defaultWeight: 0.5, category: "mammals" },
    dog: { name: "Dogs", defaultWeight: 0.5, category: "mammals" },
    // Other
    fish: { name: "Fish", defaultWeight: 0.05, category: "other" },
};

// Population data (approximate values)
const humanPopulationData = {
    // Humans (2025 estimates)
    india: { population: 1417492000, category: "human", name: "🇮🇳 India" },
    china: { population: 1408280000, category: "human", name: "🇨🇳 China" },
    "united-states": { population: 340110988, category: "human", name: "🇺🇸 United States" },
    indonesia: { population: 284438782, category: "human", name: "🇮🇩 Indonesia" },
    pakistan: { population: 241499431, category: "human", name: "🇵🇰 Pakistan" },
    nigeria: { population: 223800000, category: "human", name: "🇳🇬 Nigeria" },
    brazil: { population: 213421037, category: "human", name: "🇧🇷 Brazil" },
    bangladesh: { population: 169828911, category: "human", name: "🇧🇩 Bangladesh" },
    russia: { population: 146028325, category: "human", name: "🇷🇺 Russia" },
    mexico: { population: 130760049, category: "human", name: "🇲🇽 Mexico" },
    japan: { population: 123190000, category: "human", name: "🇯🇵 Japan" },
    philippines: { population: 114123600, category: "human", name: "🇵🇭 Philippines" },
    "dr-congo": { population: 112832000, category: "human", name: "🇨🇩 Democratic Republic of the Congo" },
    ethiopia: { population: 111652998, category: "human", name: "🇪🇹 Ethiopia" },
    egypt: { population: 107271260, category: "human", name: "🇪🇬 Egypt" },
    vietnam: { population: 101343800, category: "human", name: "🇻🇳 Vietnam" },
    iran: { population: 85961000, category: "human", name: "🇮🇷 Iran" },
    turkey: { population: 85664944, category: "human", name: "🇹🇷 Turkey" },
    germany: { population: 83497147, category: "human", name: "🇩🇪 Germany" },
    uk: { population: 69487000, category: "human", name: "🇬🇧 United Kingdom" },
    france: { population: 68736000, category: "human", name: "🇫🇷 France" },
    tanzania: { population: 68153004, category: "human", name: "🇹🇿 Tanzania" },
    thailand: { population: 65826149, category: "human", name: "🇹🇭 Thailand" },
    "south-africa": { population: 63100945, category: "human", name: "🇿🇦 South Africa" },
    italy: { population: 58925596, category: "human", name: "🇮🇹 Italy" },
    kenya: { population: 53330978, category: "human", name: "🇰🇪 Kenya" },
    colombia: { population: 53057212, category: "human", name: "🇨🇴 Colombia" },
    sudan: { population: 51662000, category: "human", name: "🇸🇩 Sudan" },
    myanmar: { population: 51316756, category: "human", name: "🇲🇲 Myanmar" },
    "south-korea": { population: 51143421, category: "human", name: "🇰🇷 South Korea" },
    spain: { population: 49442844, category: "human", name: "🇪🇸 Spain" },
    algeria: { population: 47400000, category: "human", name: "🇩🇿 Algeria" },
    argentina: { population: 46387098, category: "human", name: "🇦🇷 Argentina" },
    iraq: { population: 46118793, category: "human", name: "🇮🇶 Iraq" },
    uganda: { population: 45905417, category: "human", name: "🇺🇬 Uganda" },
    afghanistan: { population: 43844000, category: "human", name: "🇦🇫 Afghanistan" },
    canada: { population: 41575585, category: "human", name: "🇨🇦 Canada" },
    uzbekistan: { population: 38069116, category: "human", name: "🇺🇿 Uzbekistan" },
    poland: { population: 37376000, category: "human", name: "🇵🇱 Poland" },
    morocco: { population: 36828330, category: "human", name: "🇲🇦 Morocco" },
    angola: { population: 36604681, category: "human", name: "🇦🇴 Angola" },
    "saudi-arabia": { population: 35300280, category: "human", name: "🇸🇦 Saudi Arabia" },
    peru: { population: 34350244, category: "human", name: "🇵🇪 Peru" },
    malaysia: { population: 34281100, category: "human", name: "🇲🇾 Malaysia" },
    mozambique: { population: 34090466, category: "human", name: "🇲🇿 Mozambique" },
    ghana: { population: 33742380, category: "human", name: "🇬🇭 Ghana" },
    ukraine: { population: 32862000, category: "human", name: "🇺🇦 Ukraine" },
    yemen: { population: 32684503, category: "human", name: "🇾🇪 Yemen" },
    madagascar: { population: 31727042, category: "human", name: "🇲🇬 Madagascar" },
    "ivory-coast": { population: 31719275, category: "human", name: "🇨🇮 Ivory Coast" },
    nepal: { population: 29911840, category: "human", name: "🇳🇵 Nepal" },
    cameroon: { population: 29442327, category: "human", name: "🇨🇲 Cameroon" },
    venezuela: { population: 28517000, category: "human", name: "🇻🇪 Venezuela" },
    australia: { population: 27614400, category: "human", name: "🇦🇺 Australia" },
    niger: { population: 26312034, category: "human", name: "🇳🇪 Niger" },
    syria: { population: 26019711, category: "human", name: "🇸🇾 Syria" },
    "north-korea": { population: 25950000, category: "human", name: "🇰🇵 North Korea" },
    "burkina-faso": { population: 24070553, category: "human", name: "🇧🇫 Burkina Faso" },
    taiwan: { population: 23317031, category: "human", name: "🇹🇼 Taiwan" },
    mali: { population: 22395489, category: "human", name: "🇲🇱 Mali" },
    "sri-lanka": { population: 21763170, category: "human", name: "🇱🇰 Sri Lanka" },
    malawi: { population: 20734262, category: "human", name: "🇲🇼 Malawi" },
    kazakhstan: { population: 20464077, category: "human", name: "🇰🇿 Kazakhstan" },
    chile: { population: 20206953, category: "human", name: "🇨🇱 Chile" },
    zambia: { population: 19693423, category: "human", name: "🇿🇲 Zambia" },
    somalia: { population: 19655000, category: "human", name: "🇸🇴 Somalia" },
    chad: { population: 19340757, category: "human", name: "🇹🇩 Chad" },
    romania: { population: 19036031, category: "human", name: "🇷🇴 Romania" },
    senegal: { population: 18593258, category: "human", name: "🇸🇳 Senegal" },
    netherlands: { population: 18130662, category: "human", name: "🇳🇱 Netherlands" },
    ecuador: { population: 18103660, category: "human", name: "🇪🇨 Ecuador" },
    guatemala: { population: 18079810, category: "human", name: "🇬🇹 Guatemala" },
    cambodia: { population: 17577760, category: "human", name: "🇰🇭 Cambodia" },
    zimbabwe: { population: 17073087, category: "human", name: "🇿🇼 Zimbabwe" },
    "south-sudan": { population: 15786898, category: "human", name: "🇸🇸 South Sudan" },
    guinea: { population: 14363931, category: "human", name: "🇬🇳 Guinea" },
    rwanda: { population: 14104969, category: "human", name: "🇷🇼 Rwanda" },
    benin: { population: 13224860, category: "human", name: "🇧🇯 Benin" },
    burundi: { population: 12332788, category: "human", name: "🇧🇮 Burundi" },
    tunisia: { population: 11972169, category: "human", name: "🇹🇳 Tunisia" },
    belgium: { population: 11917402, category: "human", name: "🇧🇪 Belgium" },
    haiti: { population: 11867032, category: "human", name: "🇭🇹 Haiti" },
    jordan: { population: 11734000, category: "human", name: "🇯🇴 Jordan" },
    bolivia: { population: 11365333, category: "human", name: "🇧🇴 Bolivia" },
    uae: { population: 11294243, category: "human", name: "🇦🇪 United Arab Emirates" },
    "czech-republic": { population: 10882341, category: "human", name: "🇨🇿 Czech Republic" },
    "dominican-republic": { population: 10771504, category: "human", name: "🇩🇴 Dominican Republic" },
    portugal: { population: 10749635, category: "human", name: "🇵🇹 Portugal" },
    sweden: { population: 10610485, category: "human", name: "🇸🇪 Sweden" },
    tajikistan: { population: 10499000, category: "human", name: "🇹🇯 Tajikistan" },
    greece: { population: 10372335, category: "human", name: "🇬🇷 Greece" },
    azerbaijan: { population: 10253647, category: "human", name: "🇦🇿 Azerbaijan" },
    "papua-new-guinea": { population: 10185363, category: "human", name: "🇵🇬 Papua New Guinea" },
    israel: { population: 10147200, category: "human", name: "🇮🇱 Israel" },
    honduras: { population: 9892632, category: "human", name: "🇭🇳 Honduras" },
    cuba: { population: 9748007, category: "human", name: "🇨🇺 Cuba" },
    hungary: { population: 9539502, category: "human", name: "🇭🇺 Hungary" },
    austria: { population: 9216459, category: "human", name: "🇦🇹 Austria" },
    belarus: { population: 9109280, category: "human", name: "🇧🇾 Belarus" },
    switzerland: { population: 9104063, category: "human", name: "🇨🇭 Switzerland" },
    "sierra-leone": { population: 9077691, category: "human", name: "🇸🇱 Sierra Leone" },
    togo: { population: 8095498, category: "human", name: "🇹🇬 Togo" },
    laos: { population: 7647000, category: "human", name: "🇱🇦 Laos" },
    "hong-kong": { population: 7527500, category: "human", name: "🇭🇰 Hong Kong" },
    libya: { population: 7459000, category: "human", name: "🇱🇾 Libya" },
    kyrgyzstan: { population: 7281800, category: "human", name: "🇰🇬 Kyrgyzstan" },
    turkmenistan: { population: 7057841, category: "human", name: "🇹🇲 Turkmenistan" },
    nicaragua: { population: 6803886, category: "human", name: "🇳🇮 Nicaragua" },
    serbia: { population: 6567783, category: "human", name: "🇷🇸 Serbia" },
    "central-african-republic": { population: 6470307, category: "human", name: "🇨🇫 Central African Republic" },
    bulgaria: { population: 6437360, category: "human", name: "🇧🇬 Bulgaria" },
    "republic-of-congo": { population: 6142180, category: "human", name: "🇨🇬 Republic of the Congo" },
    singapore: { population: 6110200, category: "human", name: "🇸🇬 Singapore" },
    paraguay: { population: 6109644, category: "human", name: "🇵🇾 Paraguay" },
    "el-salvador": { population: 6029976, category: "human", name: "🇸🇻 El Salvador" },
    denmark: { population: 6024684, category: "human", name: "🇩🇰 Denmark" },
    finland: { population: 5655715, category: "human", name: "🇫🇮 Finland" },
    norway: { population: 5618354, category: "human", name: "🇳🇴 Norway" },
    lebanon: { population: 5490000, category: "human", name: "🇱🇧 Lebanon" },
    palestine: { population: 5483450, category: "human", name: "🇵🇸 Palestine" },
    ireland: { population: 5458600, category: "human", name: "🇮🇪 Ireland" },
    slovakia: { population: 5413191, category: "human", name: "🇸🇰 Slovakia" },
    oman: { population: 5356019, category: "human", name: "🇴🇲 Oman" },
    "new-zealand": { population: 5334200, category: "human", name: "🇳🇿 New Zealand" },
    liberia: { population: 5248621, category: "human", name: "🇱🇷 Liberia" },
    "costa-rica": { population: 5191824, category: "human", name: "🇨🇷 Costa Rica" },
    mauritania: { population: 4927532, category: "human", name: "🇲🇷 Mauritania" },
    kuwait: { population: 4881254, category: "human", name: "🇰🇼 Kuwait" },
    panama: { population: 4064780, category: "human", name: "🇵🇦 Panama" },
    croatia: { population: 3866233, category: "human", name: "🇭🇷 Croatia" },
    georgia: { population: 3704500, category: "human", name: "🇬🇪 Georgia" },
    eritrea: { population: 3607000, category: "human", name: "🇪🇷 Eritrea" },
    mongolia: { population: 3544835, category: "human", name: "🇲🇳 Mongolia" },
    uruguay: { population: 3499451, category: "human", name: "🇺🇾 Uruguay" },
    "bosnia-herzegovina": { population: 3412000, category: "human", name: "🇧🇦 Bosnia and Herzegovina" },
    "puerto-rico": { population: 3203295, category: "human", name: "🇵🇷 Puerto Rico" },
    qatar: { population: 3173024, category: "human", name: "🇶🇦 Qatar" },
    armenia: { population: 3076200, category: "human", name: "🇦🇲 Armenia" },
    namibia: { population: 3022401, category: "human", name: "🇳🇦 Namibia" },
    lithuania: { population: 2895826, category: "human", name: "🇱🇹 Lithuania" },
    jamaica: { population: 2774538, category: "human", name: "🇯🇲 Jamaica" },
    gabon: { population: 2469296, category: "human", name: "🇬🇦 Gabon" },
    gambia: { population: 2422712, category: "human", name: "🇬🇲 The Gambia" },
    moldova: { population: 2381300, category: "human", name: "🇲🇩 Moldova" },
    albania: { population: 2363314, category: "human", name: "🇦🇱 Albania" },
    botswana: { population: 2359609, category: "human", name: "🇧🇼 Botswana" },
    slovenia: { population: 2130986, category: "human", name: "🇸🇮 Slovenia" },
    lesotho: { population: 2116427, category: "human", name: "🇱🇸 Lesotho" },
    latvia: { population: 1827800, category: "human", name: "🇱🇻 Latvia" },
    "north-macedonia": { population: 1822612, category: "human", name: "🇲🇰 North Macedonia" },
    "guinea-bissau": { population: 1781308, category: "human", name: "🇬🇼 Guinea-Bissau" },
    "equatorial-guinea": { population: 1668768, category: "human", name: "🇬🇶 Equatorial Guinea" },
    bahrain: { population: 1594654, category: "human", name: "🇧🇭 Bahrain" },
    kosovo: { population: 1585566, category: "human", name: "🇽🇰 Kosovo" },
    "timor-leste": { population: 1391221, category: "human", name: "🇹🇱 Timor-Leste" },
    estonia: { population: 1369995, category: "human", name: "🇪🇪 Estonia" },
    "trinidad-tobago": { population: 1367764, category: "human", name: "🇹🇹 Trinidad and Tobago" },
    mauritius: { population: 1243741, category: "human", name: "🇲🇺 Mauritius" },
    eswatini: { population: 1235549, category: "human", name: "🇸🇿 Eswatini" },
    djibouti: { population: 1066809, category: "human", name: "🇩🇯 Djibouti" },
    cyprus: { population: 966400, category: "human", name: "🇨🇾 Cyprus" },
    comoros: { population: 919901, category: "human", name: "🇰🇲 Comoros" },
    fiji: { population: 900869, category: "human", name: "🇫🇯 Fiji" },
    bhutan: { population: 784043, category: "human", name: "🇧🇹 Bhutan" },
    guyana: { population: 772975, category: "human", name: "🇬🇾 Guyana" },
    "solomon-islands": { population: 750325, category: "human", name: "🇸🇧 Solomon Islands" },
    macau: { population: 686600, category: "human", name: "🇲🇴 Macau" },
    luxembourg: { population: 681973, category: "human", name: "🇱🇺 Luxembourg" },
    montenegro: { population: 623327, category: "human", name: "🇲🇪 Montenegro" },
    suriname: { population: 616500, category: "human", name: "🇸🇷 Suriname" },
    "western-sahara": { population: 600904, category: "human", name: "🇪🇭 Western Sahara" },
    malta: { population: 574250, category: "human", name: "🇲🇹 Malta" },
    maldives: { population: 515132, category: "human", name: "🇲🇻 Maldives" },
    "cape-verde": { population: 491233, category: "human", name: "🇨🇻 Cape Verde" },
    "northern-cyprus": { population: 476214, category: "human", name: "🇨🇾 Northern Cyprus" },
    brunei: { population: 455500, category: "human", name: "🇧🇳 Brunei" },
    belize: { population: 417634, category: "human", name: "🇧🇿 Belize" },
    bahamas: { population: 398165, category: "human", name: "🇧🇸 The Bahamas" },
    iceland: { population: 393160, category: "human", name: "🇮🇸 Iceland" },
    vanuatu: { population: 321409, category: "human", name: "🇻🇺 Vanuatu" },
    "french-polynesia": { population: 279500, category: "human", name: "🇵🇫 French Polynesia" },
    barbados: { population: 267800, category: "human", name: "🇧🇧 Barbados" },
    "new-caledonia": { population: 264596, category: "human", name: "🇳🇨 New Caledonia" },
    "sao-tome-principe": { population: 209607, category: "human", name: "🇸🇹 São Tomé and Príncipe" },
    samoa: { population: 205557, category: "human", name: "🇼🇸 Samoa" },
    "saint-lucia": { population: 184100, category: "human", name: "🇱🇨 Saint Lucia" },
    curacao: { population: 156115, category: "human", name: "🇨🇼 Curaçao" },
    guam: { population: 153836, category: "human", name: "🇬🇺 Guam" },
    seychelles: { population: 122729, category: "human", name: "🇸🇨 Seychelles" },
    kiribati: { population: 120740, category: "human", name: "🇰🇮 Kiribati" },
    "saint-vincent-grenadines": { population: 110872, category: "human", name: "🇻🇨 Saint Vincent and the Grenadines" },
    grenada: { population: 109021, category: "human", name: "🇬🇩 Grenada" },
    aruba: { population: 108880, category: "human", name: "🇦🇼 Aruba" },
    micronesia: { population: 105564, category: "human", name: "🇫🇲 Federated States of Micronesia" },
    "antigua-barbuda": { population: 103603, category: "human", name: "🇦🇬 Antigua and Barbuda" },
    jersey: { population: 103267, category: "human", name: "🇯🇪 Jersey" },
    tonga: { population: 100179, category: "human", name: "🇹🇴 Tonga" },
    andorra: { population: 88941, category: "human", name: "🇦🇩 Andorra" },
    "us-virgin-islands": { population: 87146, category: "human", name: "🇻🇮 U.S. Virgin Islands" },
    "cayman-islands": { population: 84738, category: "human", name: "🇰🇾 Cayman Islands" },
    "isle-of-man": { population: 84530, category: "human", name: "🇮🇲 Isle of Man" },
    dominica: { population: 67408, category: "human", name: "🇩🇲 Dominica" },
    guernsey: { population: 64781, category: "human", name: "🇬🇬 Guernsey" },
    bermuda: { population: 64055, category: "human", name: "🇧🇲 Bermuda" },
    greenland: { population: 56831, category: "human", name: "🇬🇱 Greenland" },
    "saint-kitts-nevis": { population: 51320, category: "human", name: "🇰🇳 Saint Kitts and Nevis" },
    "turks-caicos": { population: 50828, category: "human", name: "🇹🇨 Turks and Caicos Islands" },
    "american-samoa": { population: 49710, category: "human", name: "🇦🇸 American Samoa" },
    "northern-mariana": { population: 47329, category: "human", name: "🇲🇵 Northern Mariana Islands" },
    "marshall-islands": { population: 42418, category: "human", name: "🇲🇭 Marshall Islands" },
    "sint-maarten": { population: 41349, category: "human", name: "🇸🇽 Sint Maarten" },
    liechtenstein: { population: 41024, category: "human", name: "🇱🇮 Liechtenstein" },
    "british-virgin-islands": { population: 39471, category: "human", name: "🇻🇬 British Virgin Islands" },
    monaco: { population: 38423, category: "human", name: "🇲🇨 Monaco" },
    gibraltar: { population: 38196, category: "human", name: "🇬🇮 Gibraltar" },
    "san-marino": { population: 34154, category: "human", name: "🇸🇲 San Marino" },
    "saint-martin": { population: 31496, category: "human", name: "🇲🇫 Saint Martin" },
    palau: { population: 16733, category: "human", name: "🇵🇼 Palau" },
    anguilla: { population: 16010, category: "human", name: "🇦🇮 Anguilla" },
    "cook-islands": { population: 15040, category: "human", name: "🇨🇰 Cook Islands" },
    nauru: { population: 11680, category: "human", name: "🇳🇷 Nauru" },
    "wallis-futuna": { population: 11620, category: "human", name: "🇼🇫 Wallis and Futuna" },
    tuvalu: { population: 10643, category: "human", name: "🇹🇻 Tuvalu" },
    "saint-barthelemy": { population: 10562, category: "human", name: "🇧🇱 Saint Barthélemy" },
    "saint-pierre-miquelon": { population: 5819, category: "human", name: "🇵🇲 Saint Pierre and Miquelon" },
    "saint-helena": { population: 5651, category: "human", name: "🇸🇭 Saint Helena" },
    montserrat: { population: 4386, category: "human", name: "🇲🇸 Montserrat" },
    "falkland-islands": { population: 3662, category: "human", name: "🇫🇰 Falkland Islands" },
    tokelau: { population: 2608, category: "human", name: "🇹🇰 Tokelau" },
    "norfolk-island": { population: 2188, category: "human", name: "🇳🇫 Norfolk Island" },
    "christmas-island": { population: 1692, category: "human", name: "🇨🇽 Christmas Island" },
    niue: { population: 1681, category: "human", name: "🇳🇺 Niue" },
    "vatican-city": { population: 882, category: "human", name: "🇻🇦 Vatican City" },
    "cocos-islands": { population: 593, category: "human", name: "🇨🇨 Cocos Islands" },
    "pitcairn-islands": { population: 35, category: "human", name: "🇵🇳 Pitcairn Islands" },
};

const animalPopulationData = {
    // Farmed animals (annual population)
    fish: { population: 77e9, category: "farmed", name: "🐟 Farmed fish", moralWeightKey: "fish" },
    dog: { population: 471e6, category: "farmed", name: "🐕‍🦺 Pet dog", moralWeightKey: "dog" },
    cat: { population: 373e6, category: "farmed", name: "🐈 Pet cat", moralWeightKey: "cat" },
    hen: { population: 6.5e9, category: "farmed", name: "🐔🥚 Farmed egg-laying chicken", moralWeightKey: "chicken" },
    broiler: { population: 21.3e9, category: "farmed", name: "🐔 Farmed chicken", moralWeightKey: "chicken" },
    cow: { population: 1.47e9, category: "farmed", name: "🐄 Farmed cow", moralWeightKey: "cow" },
    duck: { population: 1.24e9, category: "farmed", name: "🦆 Farmed duck", moralWeightKey: "duck" },
    sheep: { population: 1.17e9, category: "farmed", name: "🐑 Farmed sheep", moralWeightKey: "sheep" },
    goat: { population: 1.00e9, category: "farmed", name: "🐐 Farmed goat", moralWeightKey: "goat" },
    pig: { population: 982e6, category: "farmed", name: "🐖 Farmed pig", moralWeightKey: "pig" },
    turkey: { population: 469e6, category: "farmed", name: "🦃 Farmed turkey", moralWeightKey: "turkey" },
    goose: { population: 381e6, category: "farmed", name: "🦢 Farmed goose", moralWeightKey: "goose" },
    rabbit: { population: 317e6, category: "farmed", name: "🐰 Farmed rabbit", moralWeightKey: "rabbit" },
    buffalo: { population: 199e6, category: "farmed", name: "🦬 Farmed buffalo", moralWeightKey: "buffalo" },

    // Wild animals (very rough estimates)
    "wild-bird": { population: 1e11, category: "wild", name: "🐦 Wild bird", moralWeightKey: "other-bird" },
    "wild-fish": { population: 1e15, category: "wild", name: "🐟 Wild fish", moralWeightKey: "fish" },
};

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
                    // Multiply by 10, but cap at 10 to prevent overflow
                    newValue = currentValue * 10
                } else {
                    // Divide by 10, but don't go below 0.001
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

            // Handle click events on spinner buttons and prevent default behavior
            // We need to intercept before the default step is applied
            input.addEventListener("mousedown", function (e) {
                // Check if click is on spinner buttons (right side of input)
                const rect = this.getBoundingClientRect();
                const spinnerWidth = rect.height; // Approximate spinner button width
                const clickX = e.clientX - rect.left;
                const isSpinnerArea = clickX > rect.width - spinnerWidth;

                if (isSpinnerArea) {
                    e.preventDefault();
                    // Determine which button based on vertical position within spinner
                    const clickY = e.clientY - rect.top;
                    const isUpperHalf = clickY < rect.height / 2;

                    if (isUpperHalf) {
                        applyLogScale("up");
                    } else {
                        applyLogScale("down");
                    }
                }
            });

            // Handle change event for manual typing
            input.addEventListener("change", function (e) {
                // Only update lastValue, don't apply log scale
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
    if (category === "farmed")
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

        showResult(`${result.name}`);
    }
}

function showResult(text) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = text;
    resultDiv.classList.add("show");

    // Remove animation class after animation completes
    setTimeout(() => {
        resultDiv.classList.remove("show");
    }, 500);
}
