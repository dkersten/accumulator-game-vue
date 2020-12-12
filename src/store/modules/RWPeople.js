import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const state = {
    people: [
        // {
        // "name": "Real-Time Billionaires",
        // "year": 0,
        // "uri": "jeff-bezos",
        // "bio": "",
        // "rank": 1,
        // "listUri": "rtb",
        // "finalWorth": 184395.045,
        // "person": {
        // "name": "Jeff Bezos",
        // "uri": "jeff-bezos",
        // "imageExists": true,
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5bb22ae84bbe6f67d2e82e05/416x416.jpg?background=000000&cropX1=560&cropX2=1783&cropY1=231&cropY2=1455"
        // },
        // "visible": true,
        // "personName": "Jeff Bezos",
        // "state": "Washington",
        // "city": "Seattle",
        // "source": "Amazon",
        // "industries": [
        // "Technology"
        // ],
        // "countryOfCitizenship": "United States",
        // "timestamp": 1607385301338,
        // "version": 682276,
        // "naturalId": "faris/35/0/6713",
        // "position": 1,
        // "imageExists": true,
        // "gender": "M",
        // "birthDate": -188438400000,
        // "lastName": "Bezos",
        // "financialAssets": [
        // {
        // "exchange": "NASDAQ",
        // "ticker": "AMZN-US",
        // "companyName": "Amazon",
        // "numberOfShares": 53220600,
        // "sharePrice": 3162.58,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 3158
        // }
        // ],
        // "shortUri": "http://onforb.es/1iK2bS7",
        // "listShortUri": "http://onforb.es/1iK2c8s",
        // "date": 725846400000,
        // "wealthList": false,
        // "estWorthPrev": 184638.795148,
        // "privateAssetsWorth": 16324.39,
        // "familyList": false,
        // "interactive": true,
        // "archivedWorth": 113000,
        // "thumbnail": "http://specials-images.forbesimg.com/imageserve/5bb22ae84bbe6f67d2e82e05/280x425.jpg?fit=scale&background=000000",
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5bb22ae84bbe6f67d2e82e05/416x416.jpg?background=000000&cropX1=560&cropX2=1783&cropY1=231&cropY2=1455",
        // "bioSuppress": false,
        // "csfDisplayFields": [
        // "rank",
        // "age",
        // "source",
        // "finalWorth",
        // "personName",
        // "bios",
        // "bio",
        // "countryOfCitizenship"
        // ],
        // "bios": [
        // "Jeff Bezos founded e-commerce colossus Amazon in 1994 out of his garage in Seattle. He runs it as CEO and owns an 10.6% stake.",
        // "Between March and April 2020, amid the pandemic, Amazon said it hired 175,000 additional workers. ",
        // "In April 2020, Bezos said he would give $100 million to Feed America, a nonprofit that operates food banks and food pantries across the country.",
        // "Amazon has faced criticism from U.S. senators and the general public for its treatment of warehouse workers during the coronavirus pandemic.",
        // "He divorced his wife MacKenzie in 2019 after 25 years of marriage and transferred a quarter of his Amazon stake to her.",
        // "In 2019, Amazon notched $280.5 billion in revenues and a record $11.5 billion in net profit.",
        // "Bezos owns The Washington Post and Blue Origin, an aerospace company that is developing rockets for commercial use."
        // ],
        // "abouts": [
        // "Growing up, Jeff Bezos worked summers on his grandfather's ranch repairing Caterpillar tractors.",
        // "Bezos met Google founders Larry Page and Sergey Brin in 1998 and managed to become one of the company's first angel investors, putting in $250,000."
        // ]
        // },
        // {
        //     "name": "Real-Time Billionaires",
        // "year": 0,
        // "uri": "bernard-arnault",
        // "bio": "",
        // "rank": 2,
        // "listUri": "rtb",
        // "finalWorth": 144161.411,
        // "person": {
        // "name": "Bernard Arnault & family",
        // "uri": "bernard-arnault",
        // "imageExists": true,
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5dc05518ca425400079c659f/416x416.jpg?background=000000&cropX1=0&cropX2=4000&cropY1=1209&cropY2=5212"
        // },
        // "visible": true,
        // "personName": "Bernard Arnault & family",
        // "city": "Paris",
        // "source": "LVMH",
        // "industries": [
        // "Fashion & Retail"
        // ],
        // "countryOfCitizenship": "France",
        // "timestamp": 1607385301338,
        // "version": 682233,
        // "naturalId": "faris/35/0/4800",
        // "position": 2,
        // "imageExists": true,
        // "gender": "M",
        // "birthDate": -657244800000,
        // "lastName": "Arnault",
        // "financialAssets": [
        // {
        // "exchange": "EURONEXT PARIS",
        // "ticker": "CA-FR",
        // "companyName": "Carrefour S.A.",
        // "numberOfShares": 44420000,
        // "sharePrice": 16.391452161243322,
        // "currencyCode": "EUR",
        // "exchangeRate": 0.8236,
        // "interactive": false
        // },
        // {
        // "exchange": "EURONEXT PARIS",
        // "ticker": "RMS-FR",
        // "companyName": "Hermes International S.C.A.",
        // "numberOfShares": 1974000,
        // "sharePrice": 1003.399708596406,
        // "currencyCode": "EUR",
        // "exchangeRate": 0.8236,
        // "interactive": false
        // },
        // {
        // "exchange": "EURONEXT PARIS",
        // "ticker": "MC-FR",
        // "companyName": "LVMH Moet Hennessy Louis Vuitton",
        // "numberOfShares": 234115474,
        // "sharePrice": 597.6809130645945,
        // "currencyCode": "EUR",
        // "exchangeRate": 0.8236,
        // "interactive": false
        // }
        // ],
        // "shortUri": "http://onforb.es/1iK2bS7",
        // "listShortUri": "http://onforb.es/1iK2c8s",
        // "date": 725846400000,
        // "wealthList": false,
        // "estWorthPrev": 143727.93307,
        // "privateAssetsWorth": 1092.763477,
        // "familyList": false,
        // "interactive": false,
        // "archivedWorth": 76000,
        // "thumbnail": "http://specials-images.forbesimg.com/imageserve/5dc05518ca425400079c659f/280x425.jpg?fit=scale&background=000000",
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5dc05518ca425400079c659f/416x416.jpg?background=000000&cropX1=0&cropX2=4000&cropY1=1209&cropY2=5212",
        // "bioSuppress": false,
        // "csfDisplayFields": [
        // "rank",
        // "age",
        // "source",
        // "finalWorth",
        // "personName",
        // "bios",
        // "bio",
        // "countryOfCitizenship"
        // ],
        // "bios": [
        // "One of the world's ultimate taste-makers, Bernard Arnault oversees an empire of 70 brands including Louis Vuitton and Sephora.",
        // "In November 2019, LVMH struck a deal to buy American jeweler Tiffany & Co for $16.2 billion, believed to be the biggest luxury brand acquisition ever.",
        // "LVMH spent $3.2 billion in 2019 for luxury hospitality group, Belmond, which owns or manages 46 hotels, trains and river cruises.",
        // "His father made a small fortune in construction; Arnault got his start by putting up $15 million from that business to buy Christian Dior in 1985.",
        // "Four of Arnault's five children work in corners of the LVMH empire: Frédéric, Delphine, Antoine and Alexandre."
        // ],
        // "abouts": [
        // "Arnault apparently wooed his wife, Helene Mercier, a concert pianist, by playing Chopin and other classical composers on the piano.",
        // "Every Saturday, Arnault visits as many as 25 stores -- including both his and those of his competitors."
        // ]
        // },
        // {
        //     "name": "Real-Time Billionaires",
        // "year": 0,
        // "uri": "elon-musk",
        // "bio": "",
        // "rank": 3,
        // "listUri": "rtb",
        // "finalWorth": 143100.383,
        // "person": {
        // "name": "Elon Musk",
        // "uri": "elon-musk",
        // "imageExists": true,
        // "squareImage": "https://specials-images.forbesimg.com/imageserve/5f47d4de7637290765bce495/416x416.jpg?background=000000&cropX1=1398&cropX2=3908&cropY1=594&cropY2=3102"
        // },
        // "visible": true,
        // "personName": "Elon Musk",
        // "state": "California",
        // "city": "Los Angeles",
        // "source": "Tesla, SpaceX",
        // "industries": [
        // "Automotive"
        // ],
        // "countryOfCitizenship": "United States",
        // "timestamp": 1607385301338,
        // "version": 682302,
        // "naturalId": "faris/35/0/14117",
        // "position": 3,
        // "imageExists": true,
        // "gender": "M",
        // "birthDate": 46915200000,
        // "lastName": "Musk",
        // "financialAssets": [
        // {
        // "exchange": "NASDAQ",
        // "ticker": "TSLA-US",
        // "companyName": "Tesla",
        // "numberOfShares": 147410000,
        // "sharePrice": 599.04,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 641.76
        // },
        // {
        // "exchange": "NASDAQ",
        // "ticker": "TSLA-US",
        // "companyName": "Tesla",
        // "numberOfShares": 22860000,
        // "exerciseOptionPrice": 6.234,
        // "sharePrice": 599.04,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 641.76
        // },
        // {
        // "exchange": "NASDAQ",
        // "ticker": "TSLA-US",
        // "companyName": "Tesla",
        // "numberOfShares": 25320000,
        // "exerciseOptionPrice": 70.02,
        // "sharePrice": 599.04,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 641.76
        // },
        // {
        // "exchange": "NASDAQ",
        // "ticker": "TSLA-US",
        // "companyName": "Tesla",
        // "numberOfShares": 2000,
        // "exerciseOptionPrice": 8.366,
        // "sharePrice": 599.04,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 641.76
        // },
        // {
        // "exchange": "NASDAQ",
        // "ticker": "TSLA-US",
        // "companyName": "Tesla",
        // "numberOfShares": 2000,
        // "exerciseOptionPrice": 20.01,
        // "sharePrice": 599.04,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 641.76
        // }
        // ],
        // "shortUri": "http://onforb.es/1iK2bS7",
        // "listShortUri": "http://onforb.es/1iK2c8s",
        // "date": 725846400000,
        // "wealthList": false,
        // "estWorthPrev": 134744.607368,
        // "privateAssetsWorth": 19491.45,
        // "familyList": false,
        // "interactive": true,
        // "archivedWorth": 24600,
        // "thumbnail": "http://specials-images.forbesimg.com/imageserve/5f47d4de7637290765bce495/280x425.jpg?fit=scale&background=000000",
        // "squareImage": "https://specials-images.forbesimg.com/imageserve/5f47d4de7637290765bce495/416x416.jpg?background=000000&cropX1=1398&cropX2=3908&cropY1=594&cropY2=3102",
        // "bioSuppress": false,
        // "csfDisplayFields": [
        // "rank",
        // "age",
        // "source",
        // "finalWorth",
        // "personName",
        // "bios",
        // "bio",
        // "countryOfCitizenship"
        // ],
        // "bios": [
        // "Elon Musk is working to revolutionize transportation both on Earth, through electric car maker Tesla - and in space, via rocket producer SpaceX.",
        // "He owns 21% of Tesla but has pledged more than half his stake as collateral for loans; Forbes has discounted his stake to take the loans into account.",
        // "He stepped down as chairman in 2018, after making alleged \"false statements\" about a plan to take Tesla private, triggering an SEC probe.",
        // "SpaceX, Musk's rocket company, is now valued at $46 billion.",
        // "He grew up in South Africa, then immigrated to Canada at age 17. He landed in the U.S. as a transfer student to the University of Pennsylvania."
        // ],
        // "abouts": [
        // "Musk was accepted to a graduate program at Stanford, but deferred attendance to launch his first business, software company Zip2.",
        // "As a kid Musk taught himself to code; he sold his first game, Blastar, for about $500. "
        // ]
        // },
        // {
        //     "name": "Real-Time Billionaires",
        // "year": 0,
        // "uri": "bill-gates",
        // "bio": "",
        // "rank": 4,
        // "listUri": "rtb",
        // "finalWorth": 118704.671,
        // "person": {
        // "name": "Bill Gates",
        // "uri": "bill-gates",
        // "imageExists": true,
        // "squareImage": "https://specials-images.forbesimg.com/imageserve/5f4ebe0c87612dab4f12a597/416x416.jpg?background=000000&cropX1=292&cropX2=3684&cropY1=592&cropY2=3987"
        // },
        // "visible": true,
        // "personName": "Bill Gates",
        // "state": "Washington",
        // "city": "Medina",
        // "source": "Microsoft",
        // "industries": [
        // "Technology"
        // ],
        // "countryOfCitizenship": "United States",
        // "timestamp": 1607385301338,
        // "version": 682349,
        // "naturalId": "faris/35/0/5772",
        // "position": 4,
        // "imageExists": true,
        // "gender": "M",
        // "birthDate": -447465600000,
        // "lastName": "Gates",
        // "financialAssets": [
        // {
        // "exchange": "NASDAQ",
        // "ticker": "ACGL-US",
        // "companyName": "Arch Capital Group",
        // "numberOfShares": 34533000,
        // "sharePrice": 34.17,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 33.25
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "ARCO-US",
        // "companyName": "Arcos Dorados Holdings Inc",
        // "numberOfShares": 8692553,
        // "sharePrice": 5.36,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 5.35
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "AN-US",
        // "companyName": "AutoNation Inc.",
        // "numberOfShares": 18431000,
        // "sharePrice": 67.4,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 67.3
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "BRK.A-US",
        // "companyName": "Berkshire Hathaway Inc. (Cl A)",
        // "numberOfShares": 4350,
        // "sharePrice": 347000,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 343539
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "CNI-US",
        // "companyName": "Canadian National Railway Co.",
        // "numberOfShares": 101400000,
        // "sharePrice": 108.81,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 109.07
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "KOF-US",
        // "companyName": "Coca-Cola FEMSA S.A.B de C.V.",
        // "numberOfShares": 2579000,
        // "sharePrice": 46.93,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 46.25
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "DE-US",
        // "companyName": "Deere & Co",
        // "numberOfShares": 31510000,
        // "sharePrice": 253.39,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 252.01
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "ECL-US",
        // "companyName": "Ecolab",
        // "numberOfShares": 30685000,
        // "sharePrice": 225.61,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 222.74
        // },
        // {
        // "exchange": "NASDAQ",
        // "ticker": "XCUR-US",
        // "companyName": "Exicure",
        // "numberOfShares": 6330000,
        // "sharePrice": 1.51,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 1.45
        // },
        // {
        // "exchange": "MADRID",
        // "ticker": "FCC-ES",
        // "companyName": "Fomento de Construcciones y Contrata",
        // "numberOfShares": 10707368,
        // "sharePrice": 10.842642059252064,
        // "currencyCode": "EUR",
        // "exchangeRate": 0.8236,
        // "interactive": false,
        // "currentPrice": 10.927634774162215
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "FMX-US",
        // "companyName": "Fomento Economico Mex-SP ADR",
        // "numberOfShares": 0,
        // "sharePrice": 76.72,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 75.76
        // },
        // {
        // "exchange": "MEXICO",
        // "ticker": "TLEVISACPO-MX",
        // "companyName": "Grupo Televisa S.A.B Unit Class A (TLEVISACPO-MX)",
        // "numberOfShares": 583130000,
        // "sharePrice": 1.7014608502249404,
        // "currencyCode": "MXN",
        // "exchangeRate": 19.783,
        // "interactive": false,
        // "currentPrice": 1.676186624879947
        // },
        // {
        // "exchange": "NASDAQ",
        // "ticker": "MSFT-US",
        // "companyName": "Microsoft",
        // "numberOfShares": 103417000,
        // "sharePrice": 214.36,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 214.29
        // },
        // {
        // "exchange": "EURONEXT AMSTERDAM",
        // "ticker": "OCI-NL",
        // "companyName": "OCI NV",
        // "numberOfShares": 12725000,
        // "sharePrice": 18.96551724137931,
        // "currencyCode": "EUR",
        // "exchangeRate": 0.8236,
        // "interactive": false,
        // "currentPrice": 19.062651772705195
        // },
        // {
        // "exchange": "EGYPT",
        // "ticker": "OCIC-EG",
        // "companyName": "Orascom Construction Industries S.A.",
        // "numberOfShares": 6524000,
        // "sharePrice": 13.878111040204212,
        // "currencyCode": "EGP",
        // "exchangeRate": 15.67,
        // "interactive": false,
        // "currentPrice": 13.878111040204212
        // },
        // {
        // "exchange": "NASDAQ",
        // "ticker": "OTTR-US",
        // "companyName": "Otter Tail Corp.",
        // "numberOfShares": 3456000,
        // "sharePrice": 41.25,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 41.75
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "RSG-US",
        // "companyName": "Republic Services",
        // "numberOfShares": 108802000,
        // "sharePrice": 95.67,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 94.85
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "BEE-US",
        // "companyName": "Strategic Hotels & Resorts, Inc.",
        // "numberOfShares": 13240000,
        // "sharePrice": 0,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 0
        // },
        // {
        // "exchange": "NASDAQ",
        // "ticker": "VRM-US",
        // "companyName": "Vroom",
        // "numberOfShares": 6770000,
        // "sharePrice": 33.13,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 35.46
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "WM-US",
        // "companyName": "Waste Management",
        // "numberOfShares": 13260000,
        // "sharePrice": 117.54,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 116.77
        // }
        // ],
        // "shortUri": "http://onforb.es/1iK2bS7",
        // "listShortUri": "http://onforb.es/1iK2c8s",
        // "date": 725846400000,
        // "wealthList": false,
        // "estWorthPrev": 118962.502607,
        // "privateAssetsWorth": 52970,
        // "familyList": false,
        // "interactive": true,
        // "archivedWorth": 98000,
        // "thumbnail": "http://specials-images.forbesimg.com/imageserve/5f4ebe0c87612dab4f12a597/280x425.jpg?fit=scale&background=000000",
        // "squareImage": "https://specials-images.forbesimg.com/imageserve/5f4ebe0c87612dab4f12a597/416x416.jpg?background=000000&cropX1=292&cropX2=3684&cropY1=592&cropY2=3987",
        // "bioSuppress": false,
        // "csfDisplayFields": [
        // "rank",
        // "age",
        // "source",
        // "finalWorth",
        // "personName",
        // "bios",
        // "bio",
        // "countryOfCitizenship"
        // ],
        // "bios": [
        // "With his wife Melinda, Bill Gates chairs the Bill & Melinda Gates Foundation, the world's largest private charitable foundation.",
        // "In May 2020, the Gates Foundation said it would spend $300 million to fight the coronavirus pandemic, funding treatment, detection and vaccines.",
        // "Gates has sold or given away much of his stake in Microsoft -- he owns just over 1% of shares -- and invested in a mix of stocks and other assets.",
        // "In mid-March 2020, Gates stepped down as a board member of Microsoft, the software firm he founded with Paul Allen (d. 2018) in 1975.",
        // "The foundation works to improve global health and to create equal opportunity for people around the globe.",
        // "To date, Gates has donated $35.8 billion worth of Microsoft stock to the Gates Foundation."
        // ],
        // "abouts": [
        // "When Gates was a kid, he spent so much time reading that his parents finally forbade him from bringing books to the dinner table.",
        // "Gates took a break from classes his senior year in high school to do programming with his friend Paul Allen at a power plant in North Bonneville, Washington."
        // ]
        // },
        // {
        //     "name": "Real-Time Billionaires",
        // "year": 0,
        // "uri": "mark-zuckerberg",
        // "bio": "",
        // "rank": 5,
        // "listUri": "rtb",
        // "finalWorth": 104834.704,
        // "person": {
        // "name": "Mark Zuckerberg",
        // "uri": "mark-zuckerberg",
        // "imageExists": true,
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5c76b7d331358e35dd2773a9/416x416.jpg?background=000000&cropX1=0&cropX2=4401&cropY1=0&cropY2=4401"
        // },
        // "visible": true,
        // "personName": "Mark Zuckerberg",
        // "state": "California",
        // "city": "Palo Alto",
        // "source": "Facebook",
        // "industries": [
        // "Technology"
        // ],
        // "countryOfCitizenship": "United States",
        // "timestamp": 1607385301338,
        // "version": 682250,
        // "naturalId": "faris/35/0/8047",
        // "position": 5,
        // "imageExists": true,
        // "gender": "M",
        // "birthDate": 453340800000,
        // "lastName": "Zuckerberg",
        // "financialAssets": [
        // {
        // "exchange": "NASDAQ",
        // "ticker": "FB-US",
        // "companyName": "Facebook",
        // "numberOfShares": 361886000,
        // "sharePrice": 279.7,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 285.58
        // }
        // ],
        // "shortUri": "http://onforb.es/1iK2bS7",
        // "listShortUri": "http://onforb.es/1iK2c8s",
        // "date": 725846400000,
        // "wealthList": false,
        // "estWorthPrev": 102706.8142,
        // "privateAssetsWorth": 1487.3,
        // "familyList": false,
        // "interactive": true,
        // "archivedWorth": 54700,
        // "thumbnail": "http://specials-images.forbesimg.com/imageserve/5c76b7d331358e35dd2773a9/280x425.jpg?fit=scale&background=000000",
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5c76b7d331358e35dd2773a9/416x416.jpg?background=000000&cropX1=0&cropX2=4401&cropY1=0&cropY2=4401",
        // "bioSuppress": false,
        // "csfDisplayFields": [
        // "rank",
        // "age",
        // "source",
        // "finalWorth",
        // "personName",
        // "bios",
        // "bio",
        // "countryOfCitizenship"
        // ],
        // "bios": [
        // "Facebook, the social network Zuckerberg runs, has become a go-to communications tool during the coronavirus pandemic lockdown.",
        // "More than 1,000 advertisers joined boycott in June to protest Facebook's lax policing of hate speech and misleading posts from politicians. ",
        // "Zuckerberg started Facebook at Harvard in 2004 at the age of 19 for students to match names with photos of classmates.",
        // "He took Facebook public in May 2012 and still owns about 15% of the stock.",
        // "In December 2015, Zuckerberg and his wife, Priscilla Chan, pledged to give away 99% of their Facebook stake over their lifetimes."
        // ],
        // "abouts": [
        // "Zuckerberg and his wife, Priscilla Chan, are spending $3 billion in an attempt to end, cure or manage all disease by the year 2100. ",
        // "In January 2019, Mark Zuckerberg purchased $59 million worth of waterfront property on Lake Tahoe in California."
        // ]
        // },
        // {
        // "name": "Real-Time Billionaires",
        // "year": 0,
        // "uri": "warren-buffett",
        // "bio": "",
        // "rank": 6,
        // "listUri": "rtb",
        // "finalWorth": 86454.546,
        // "person": {
        // "name": "Warren Buffett",
        // "uri": "warren-buffett",
        // "imageExists": true,
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5babb7f1a7ea4342a948b79a/416x416.jpg?background=000000&cropX1=748&cropX2=3075&cropY1=1753&cropY2=4082"
        // },
        // "visible": true,
        // "personName": "Warren Buffett",
        // "state": "Nebraska",
        // "city": "Omaha",
        // "source": "Berkshire Hathaway",
        // "industries": [
        // "Finance & Investments"
        // ],
        // "countryOfCitizenship": "United States",
        // "timestamp": 1607385301338,
        // "version": 682242,
        // "naturalId": "faris/35/0/5381",
        // "position": 6,
        // "imageExists": true,
        // "gender": "M",
        // "birthDate": -1241481600000,
        // "lastName": "Buffett",
        // "financialAssets": [
        // {
        // "exchange": "NYSE",
        // "ticker": "BRK.A-US",
        // "companyName": "Berkshire Hathaway Inc. (Cl A)",
        // "numberOfShares": 248734,
        // "sharePrice": 347000,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 343539
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "BRK.B-US",
        // "companyName": "Berkshire Hathaway Inc. (Cl B)",
        // "numberOfShares": 10188,
        // "sharePrice": 231.35,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 229.24
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "IBM-US",
        // "companyName": "International Business Machines Corp",
        // "numberOfShares": 9000,
        // "sharePrice": 127.2,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 124.7
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "SRG-US",
        // "companyName": "Seritage Growth Properties",
        // "numberOfShares": 2000000,
        // "sharePrice": 19.45,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 18.22
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "USB-US",
        // "companyName": "U.S. Bancorp",
        // "numberOfShares": 884000,
        // "sharePrice": 45.37,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 44.8
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "WFC-US",
        // "companyName": "Wells Fargo",
        // "numberOfShares": 1916000,
        // "sharePrice": 29.55,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 29.34
        // }
        // ],
        // "shortUri": "http://onforb.es/1iK2bS7",
        // "listShortUri": "http://onforb.es/1iK2c8s",
        // "date": 725846400000,
        // "wealthList": false,
        // "estWorthPrev": 87318.824674,
        // "privateAssetsWorth": 869,
        // "familyList": false,
        // "interactive": true,
        // "archivedWorth": 67500,
        // "thumbnail": "http://specials-images.forbesimg.com/imageserve/5babb7f1a7ea4342a948b79a/280x425.jpg?fit=scale&background=000000",
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5babb7f1a7ea4342a948b79a/416x416.jpg?background=000000&cropX1=748&cropX2=3075&cropY1=1753&cropY2=4082",
        // "bioSuppress": false,
        // "csfDisplayFields": [
        // "rank",
        // "age",
        // "source",
        // "finalWorth",
        // "personName",
        // "bios",
        // "bio",
        // "countryOfCitizenship"
        // ],
        // "bios": [
        // "Known as the \"Oracle of Omaha,\" Warren Buffett is one of the most successful investors of all time.",
        // "Buffett runs Berkshire Hathaway, which owns more than 60 companies, including insurer Geico, battery maker Duracell and restaurant chain Dairy Queen.",
        // "The son of a U.S. congressman, he first bought stock at age 11 and first filed taxes at age 13.",
        // "He has promised to donate over 99% of his wealth. So far he has given more than $41 billion, mostly to the Gates Foundation and his kids' foundations.",
        // "In 2010, he and Bill Gates launched the Giving Pledge, asking billionaires to commit to donating at least half of their wealth to charitable causes."
        // ],
        // "abouts": [
        // "Buffett still lives in the same Omaha, Nebraska home he purchased in 1958 for $31,500.",
        // "Buffett was rejected from Harvard Business School; he got a master's in economics from Columbia University instead."
        // ]
        // },
        // {
        // "name": "Real-Time Billionaires",
        // "year": 0,
        // "uri": "larry-ellison",
        // "bio": "",
        // "rank": 7,
        // "listUri": "rtb",
        // "finalWorth": 81966.653,
        // "person": {
        // "name": "Larry Ellison",
        // "uri": "larry-ellison",
        // "imageExists": true,
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5e8b62cfc095010007bffea0/416x416.jpg?background=000000&cropX1=0&cropX2=4529&cropY1=652&cropY2=5184"
        // },
        // "visible": true,
        // "personName": "Larry Ellison",
        // "state": "California",
        // "city": "Woodside",
        // "source": "software",
        // "industries": [
        // "Technology"
        // ],
        // "countryOfCitizenship": "United States",
        // "timestamp": 1607385301338,
        // "version": 682237,
        // "naturalId": "faris/35/0/5574",
        // "position": 7,
        // "imageExists": true,
        // "gender": "M",
        // "birthDate": -800755200000,
        // "lastName": "Ellison",
        // "financialAssets": [
        // {
        // "exchange": "NYSE",
        // "ticker": "N-US",
        // "companyName": "NetSuite",
        // "numberOfShares": 0,
        // "sharePrice": 90.34,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 90.34
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "ORCL-US",
        // "companyName": "Oracle Corp.",
        // "numberOfShares": 1062482000,
        // "sharePrice": 59.96,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 59.8
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "ORCL-US",
        // "companyName": "Oracle Corp.",
        // "numberOfShares": 0,
        // "exerciseOptionPrice": 14.57,
        // "sharePrice": 59.96,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 59.8
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "ORCL-US",
        // "companyName": "Oracle Corp.",
        // "numberOfShares": 0,
        // "exerciseOptionPrice": 20.73,
        // "sharePrice": 59.96,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 59.8
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "ORCL-US",
        // "companyName": "Oracle Corp.",
        // "numberOfShares": 0,
        // "exerciseOptionPrice": 20.49,
        // "sharePrice": 59.96,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 59.8
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "ORCL-US",
        // "companyName": "Oracle Corp.",
        // "numberOfShares": 2300000,
        // "exerciseOptionPrice": 21.04,
        // "sharePrice": 59.96,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 59.8
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "ORCL-US",
        // "companyName": "Oracle Corp.",
        // "numberOfShares": 0,
        // "exerciseOptionPrice": 21.55,
        // "sharePrice": 59.96,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 59.8
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "ORCL-US",
        // "companyName": "Oracle Corp.",
        // "numberOfShares": 1687000,
        // "exerciseOptionPrice": 40.47,
        // "sharePrice": 59.96,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 59.8
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "ORCL-US",
        // "companyName": "Oracle Corp.",
        // "numberOfShares": 5250000,
        // "exerciseOptionPrice": 32.43,
        // "sharePrice": 59.96,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 59.8
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "ORCL-US",
        // "companyName": "Oracle Corp.",
        // "numberOfShares": 5250000,
        // "exerciseOptionPrice": 29.72,
        // "sharePrice": 59.96,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 59.8
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "ORCL-US",
        // "companyName": "Oracle Corp.",
        // "numberOfShares": 3500000,
        // "exerciseOptionPrice": 30.11,
        // "sharePrice": 59.96,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 59.8
        // },
        // {
        // "exchange": "NYSE",
        // "ticker": "ORCL-US",
        // "companyName": "Oracle Corp.",
        // "numberOfShares": 0,
        // "exerciseOptionPrice": 40.36,
        // "sharePrice": 59.96,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 59.8
        // },
        // {
        // "exchange": "NASDAQ",
        // "ticker": "TSLA-US",
        // "companyName": "Tesla",
        // "numberOfShares": 15000000,
        // "sharePrice": 599.04,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 641.76
        // },
        // {
        // "exchange": "NASDAQ",
        // "ticker": "TSLA-US",
        // "companyName": "Tesla",
        // "numberOfShares": 40000,
        // "exerciseOptionPrice": 334.9,
        // "sharePrice": 599.04,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 641.76
        // }
        // ],
        // "shortUri": "http://onforb.es/1iK2bS7",
        // "listShortUri": "http://onforb.es/1iK2c8s",
        // "date": 725846400000,
        // "wealthList": false,
        // "estWorthPrev": 81497.01945,
        // "privateAssetsWorth": 8264.27,
        // "familyList": false,
        // "interactive": true,
        // "archivedWorth": 59000,
        // "thumbnail": "http://specials-images.forbesimg.com/imageserve/5e8b62cfc095010007bffea0/280x425.jpg?fit=scale&background=000000",
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5e8b62cfc095010007bffea0/416x416.jpg?background=000000&cropX1=0&cropX2=4529&cropY1=652&cropY2=5184",
        // "bioSuppress": false,
        // "csfDisplayFields": [
        // "rank",
        // "age",
        // "source",
        // "finalWorth",
        // "personName",
        // "bios",
        // "bio",
        // "countryOfCitizenship"
        // ],
        // "bios": [
        // "Larry Ellison is chairman, chief technology officer and cofounder of software giant Oracle, of which he owns about 35.4%.",
        // "He gave up the Oracle CEO role in 2014 after 37 years at the helm.",
        // "Oracle has grown in part through steady acquisitions of software companies, the biggest of which was $9.3 billion for Netsuite in 2016.",
        // "In May 2016, Ellison pledged $200 million to the University of Southern California for a cancer treatment center.",
        // "In 2012, Ellison spent $300 million to buy nearly all of Hawaiian island Lanai; so far, he has built a hydroponic farm and a luxury spa there.",
        // "Ellison joined Tesla's board in December 2018, after purchasing 3 million Tesla shares earlier that year."
        // ],
        // "abouts": [
        // "Ellison never finished college. He started out building databases for the CIA.",
        // "Daughter Megan has financed films such as Zero Dark Thirty and American Hustle; son David produced mainstream movies like The Terminator and Mission: Impossible."
        // ]
        // },
        // {
        // "name": "Real-Time Billionaires",
        // "year": 0,
        // "uri": "larry-page",
        // "bio": "",
        // "rank": 8,
        // "listUri": "rtb",
        // "finalWorth": 79847.455,
        // "person": {
        // "name": "Larry Page",
        // "uri": "larry-page",
        // "imageExists": true,
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5c76bcaaa7ea43100043c836/416x416.jpg?background=000000&cropX1=227&cropX2=2022&cropY1=22&cropY2=1817"
        // },
        // "visible": true,
        // "personName": "Larry Page",
        // "state": "California",
        // "city": "Palo Alto",
        // "source": "Google",
        // "industries": [
        // "Technology"
        // ],
        // "countryOfCitizenship": "United States",
        // "timestamp": 1607385301338,
        // "version": 682245,
        // "naturalId": "faris/35/0/7441",
        // "position": 8,
        // "imageExists": true,
        // "gender": "M",
        // "birthDate": 101952000000,
        // "lastName": "Page",
        // "financialAssets": [
        // {
        // "exchange": "NASDAQ",
        // "ticker": "GOOGL-US",
        // "companyName": "Alphabet",
        // "numberOfShares": 19952000,
        // "sharePrice": 1823.76,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 1817.03
        // },
        // {
        // "exchange": "NASDAQ",
        // "ticker": "GOOG-US",
        // "companyName": "Google Inc. (Cl C)",
        // "numberOfShares": 20014000,
        // "sharePrice": 1827.99,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 1819.48
        // }
        // ],
        // "shortUri": "http://onforb.es/1iK2bS7",
        // "listShortUri": "http://onforb.es/1iK2c8s",
        // "date": 725846400000,
        // "wealthList": false,
        // "estWorthPrev": 80152.05138,
        // "privateAssetsWorth": 7179,
        // "familyList": false,
        // "interactive": true,
        // "archivedWorth": 50900,
        // "thumbnail": "http://specials-images.forbesimg.com/imageserve/5c76bcaaa7ea43100043c836/280x425.jpg?fit=scale&background=000000",
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5c76bcaaa7ea43100043c836/416x416.jpg?background=000000&cropX1=227&cropX2=2022&cropY1=22&cropY2=1817",
        // "bioSuppress": false,
        // "csfDisplayFields": [
        // "rank",
        // "age",
        // "source",
        // "finalWorth",
        // "personName",
        // "bios",
        // "bio",
        // "countryOfCitizenship"
        // ],
        // "bios": [
        // "Larry Page stepped down as CEO of Alphabet, the parent of Google, in December 2019 but remains a board member and a controlling shareholder.",
        // "He cofounded Google in 1998 with fellow Stanford Ph.D. student Sergey Brin.",
        // "With Brin, Page invented Google's PageRank algorithm, which powers the search engine.",
        // "Page was CEO until 2001, when Eric Schmidt took over, and then from 2011 until 2015, when he became CEO of Google's new parent company Alphabet.",
        // "He is a founding investor in space exploration company Planetary Resources and is also funding \"flying car\" startups Kitty Hawk and Opener."
        // ],
        // "abouts": [
        // "Page has avoided public appearances since Sundar Pichai became Google's CEO, including Alphabet's 2019 shareholders meeting -- much to investors' chagrin. ",
        // "Page is a clean energy advocate; his Palo Alto home uses fuel cells and geothermal energy."
        // ]
        // },
        // {
        // "name": "Real-Time Billionaires",
        // "year": 0,
        // "uri": "sergey-brin",
        // "bio": "",
        // "rank": 9,
        // "listUri": "rtb",
        // "finalWorth": 77569.158,
        // "person": {
        // "name": "Sergey Brin",
        // "uri": "sergey-brin",
        // "imageExists": true,
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5c7d7c254bbe6f78090d831f/416x416.jpg?background=000000&cropX1=475&cropX2=2887&cropY1=168&cropY2=2582"
        // },
        // "visible": true,
        // "personName": "Sergey Brin",
        // "state": "California",
        // "city": "Los Altos",
        // "source": "Google",
        // "industries": [
        // "Technology"
        // ],
        // "countryOfCitizenship": "United States",
        // "timestamp": 1607385301338,
        // "version": 682260,
        // "naturalId": "faris/35/0/7442",
        // "position": 9,
        // "imageExists": true,
        // "gender": "M",
        // "birthDate": 114739200000,
        // "lastName": "Brin",
        // "financialAssets": [
        // {
        // "exchange": "NASDAQ",
        // "ticker": "GOOGL-US",
        // "companyName": "Alphabet",
        // "numberOfShares": 19178000,
        // "sharePrice": 1823.76,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": false,
        // "currentPrice": 1817.03
        // },
        // {
        // "exchange": "NASDAQ",
        // "ticker": "GOOG-US",
        // "companyName": "Google Inc. (Cl C)",
        // "numberOfShares": 19238000,
        // "sharePrice": 1827.99,
        // "currencyCode": "USD",
        // "exchangeRate": 1,
        // "interactive": true,
        // "currentPrice": 1819.48
        // }
        // ],
        // "shortUri": "http://onforb.es/1iK2bS7",
        // "listShortUri": "http://onforb.es/1iK2c8s",
        // "date": 725846400000,
        // "wealthList": false,
        // "estWorthPrev": 77861.9409,
        // "privateAssetsWorth": 7719,
        // "familyList": false,
        // "interactive": true,
        // "archivedWorth": 49100,
        // "thumbnail": "http://specials-images.forbesimg.com/imageserve/5c7d7c254bbe6f78090d831f/280x425.jpg?fit=scale&background=000000",
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5c7d7c254bbe6f78090d831f/416x416.jpg?background=000000&cropX1=475&cropX2=2887&cropY1=168&cropY2=2582",
        // "bioSuppress": false,
        // "csfDisplayFields": [
        // "rank",
        // "age",
        // "source",
        // "finalWorth",
        // "personName",
        // "bios",
        // "bio",
        // "countryOfCitizenship"
        // ],
        // "bios": [
        // "Sergey Brin stepped down as president of Alphabet, parent company of Google, in December 2019 but remains a controller shareholder and a board member.",
        // "He cofounded Google with Larry Page in 1998 after the two met at Stanford University while studying for advanced degrees in computer science.",
        // "Google went public in 2004 and changed its name to Alphabet in 2015. ",
        // "Brin was absent from public Alphabet events for much of 2019; he spent his time on Alphabet's moonshot research lab X.",
        // "Brin is reportedly funding a high-tech airship project. "
        // ],
        // "abouts": [
        // "The richest immigrant in America, Brin has been an outspoken critic of Trump's immigration ban. ",
        // "Brin moved to the U.S. from Russia when he was 6 years old in the wake of anti-Semitism against his family."
        // ]
        // },
        // {
        // "name": "Real-Time Billionaires",
        // "year": 0,
        // "uri": "amancio-ortega",
        // "bio": "",
        // "rank": 10,
        // "listUri": "rtb",
        // "finalWorth": 80000.213,
        // "person": {
        // "name": "Amancio Ortega",
        // "uri": "amancio-ortega",
        // "imageExists": true,
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5c76b94131358e35dd27748e/416x416.jpg?background=000000&cropX1=179&cropX2=2232&cropY1=216&cropY2=2269"
        // },
        // "visible": true,
        // "personName": "Amancio Ortega",
        // "city": "La Coruna",
        // "source": "Zara",
        // "industries": [
        // "Fashion & Retail"
        // ],
        // "countryOfCitizenship": "Spain",
        // "timestamp": 1607385301338,
        // "version": 682227,
        // "naturalId": "faris/35/0/7034",
        // "position": 10,
        // "imageExists": true,
        // "gender": "M",
        // "birthDate": -1065484800000,
        // "lastName": "Ortega",
        // "financialAssets": [
        // {
        // "exchange": "MADRID",
        // "ticker": "ITX-ES",
        // "companyName": "Industria de Diseno Textil S.A.",
        // "numberOfShares": 1848000000,
        // "sharePrice": 33.681398737251094,
        // "currencyCode": "EUR",
        // "exchangeRate": 0.8236,
        // "interactive": false
        // }
        // ],
        // "shortUri": "http://onforb.es/1iK2bS7",
        // "listShortUri": "http://onforb.es/1iK2c8s",
        // "date": 725846400000,
        // "wealthList": false,
        // "estWorthPrev": 77493.346285,
        // "privateAssetsWorth": 15250.121419,
        // "familyList": false,
        // "interactive": false,
        // "archivedWorth": 55100,
        // "thumbnail": "http://specials-images.forbesimg.com/imageserve/5c76b94131358e35dd27748e/280x425.jpg?fit=scale&background=000000",
        // "squareImage": "//specials-images.forbesimg.com/imageserve/5c76b94131358e35dd27748e/416x416.jpg?background=000000&cropX1=179&cropX2=2232&cropY1=216&cropY2=2269",
        // "bioSuppress": false,
        // "csfDisplayFields": [
        // "rank",
        // "age",
        // "source",
        // "finalWorth",
        // "personName",
        // "bios",
        // "bio",
        // "countryOfCitizenship"
        // ],
        // "bios": [
        // "Amancio Ortega is one of the richest men in Europe, and the wealthiest clothing retailer in the world.",
        // "A pioneer in fast fashion, he cofounded Inditex, known for its Zara fashion chain, with his ex-wife Rosalia Mera (d. 2013) in 1975.",
        // "He owns about 60% of Madrid-listed Inditex, which has 8 brands, including Massimo Dutti and Pull & Bear, and 7,500 stores around the world. ",
        // "Ortega typically earns more than $400 million in dividends a year.",
        // "He has invested his dividends primarily into real estate in Madrid, Barcelona, London, Chicago, Miami and New York. "
        // ],
        // "abouts": [
        // "Ortega first began his career manufacturing textiles through a small family company in 1963. "
        // ]
        // }
        ]
}

const getters = {
    people: (state) => state.people
}

const actions = {
    fetchRichest ({ commit }) {
        Vue.axios.get('https://forbes400.herokuapp.com/api/forbes400?limit=10')
            .then((response) => {
                // console.log(response.data)
                commit('fetchRequest', response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const mutations = {
    fetchRequest (state, people) {
        state.people = people
    } 
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}