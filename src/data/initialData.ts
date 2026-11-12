import { Artisan, JobPost, ShahjahanpurLocality, TradeMeta } from '../types';

export const SHAHJAHANPUR_LOCALITIES: ShahjahanpurLocality[] = [
  'All',
  'टाउन हॉल (Town Hall)',
  'सदर बाजार (Sadar Bazar)',
  'बहादुरगंज (Bahadurganj)',
  'रोजा (Roza)',
  'शाहजहांपुर कैंट (Cantt)',
  'पुवायां (Powayan)',
  'तिलहर (Tilhar)',
  'जलालाबाद (Jalalabad)',
  'निगोही (Nigohi)',
  'कलान (Kalan)',
  'बंडा (Banda)',
  'खुटार (Khutar)',
  'चौक / घंटाघर (Chowk)',
  'आवास विकास (Awas Vikas)',
  'लोधीपुर (Lodhipur)',
  'आर.सी. मिशन (RC Mission)',
  'अजीजगंज (Azizganj)',
  'बरेली मोड़ (Bareilly Morh)'
];

export const TRADES_LIST: TradeMeta[] = [
  {
    id: 'carpenter',
    nameHi: 'बढ़ई / कारपेंटर',
    nameEn: 'Carpenter',
    iconName: 'Hammer',
    descriptionHi: 'लकड़ी का काम, अलमारी, सोफा, बेड, चौखट, दरवाजा, मॉड्यूलर किचन',
    descriptionEn: 'Woodwork, furniture, wardrobes, doors, kitchen cabinets',
    commonServicesHi: ['अलमारी व ड्रेसर', 'दरवाजा व चौखट', 'बेड व सोफा रिपेयर', 'मॉड्यूलर किचन', 'ताला व कब्जा फिटिंग']
  },
  {
    id: 'blacksmith',
    nameHi: 'लोहार / वेल्डर',
    nameEn: 'Blacksmith & Welder',
    iconName: 'Flame',
    descriptionHi: 'लोहे का गेट, ग्रिल, रेलिंग, चैनल, टीन शेड, कृषि औजार व वेल्डिंग',
    descriptionEn: 'Iron gates, grills, railings, tin sheds, farm tools & welding',
    commonServicesHi: ['मेन गेट व शटर रिपेयर', 'खिड़की ग्रिल व रेलिंग', 'टीन शेड निर्माण', 'कृषि यंत्र मरम्मत', 'स्पॉट व आर्क वेल्डिंग']
  },
  {
    id: 'barber',
    nameHi: 'नाई / हेयर ड्रेसर',
    nameEn: 'Barber & Grooming',
    iconName: 'Scissors',
    descriptionHi: 'हेयर कटिंग, दाढ़ी सेटिंग, फेशियल, मसाज, दूल्हा पैकेज, होम सर्विस',
    descriptionEn: 'Haircuts, beard styling, massage, groom makeup & home visits',
    commonServicesHi: ['हेयरकट व हेयर स्पा', 'दाढ़ी स्टाइलिंग', 'फेस मसाज व फेशियल', 'दूल्हा तैयारी पैकेज', 'घर पर कटिंग सेवा']
  },
  {
    id: 'plumber',
    nameHi: 'प्लंबर / नलसाज',
    nameEn: 'Plumber',
    iconName: 'Wrench',
    descriptionHi: 'पाइप फिटिंग, लीकेज रिपेयर, सबमर्सिबल, वाटर टैंक, नल व सेनेटरी',
    descriptionEn: 'Pipe fitting, leak repairs, submersible pumps, sanitary fixtures',
    commonServicesHi: ['लीकेज व नल रिपेयर', 'सबमर्सिबल मोटर फिटिंग', 'वाटर टैंक सफाई व फिटिंग', 'बाथरूम सेनेटरी फिटिंग', 'ड्रेनेज पाइप ब्लॉक समाधान']
  },
  {
    id: 'electrician',
    nameHi: 'इलेक्ट्रीशियन / बिजली मिस्त्री',
    nameEn: 'Electrician',
    iconName: 'Zap',
    descriptionHi: 'हाउस वायरिंग, इन्वर्टर, पंखा, MCB, स्विच बोर्ड, गीजर, फॉल्ट दुरुस्ती',
    descriptionEn: 'House wiring, inverter repair, fans, MCB boards, appliances',
    commonServicesHi: ['पूरी हाउस वायरिंग', 'इन्वर्टर-बैटरी कनेक्शन', 'पंखे व कूलर मोटर रिपेयर', 'गीजर व स्विच बोर्ड फिटिंग', 'शॉर्ट सर्किट व फॉल्ट चेक']
  },
  {
    id: 'mason',
    nameHi: 'राजमिस्त्री / ठेकेदार',
    nameEn: 'Mason & Construction',
    iconName: 'Building',
    descriptionHi: 'मकान निर्माण, ईंट चिनाई, प्लास्टर, टाइल्स, मार्बल, छत ढलाई, बाउंड्री',
    descriptionEn: 'House construction, brickwork, plaster, tiles, roof casting',
    commonServicesHi: ['मकान चिनाई व प्लास्टर', 'टाइल्स व ग्रेनाइट फिटिंग', 'छत ढलाई (लैंटल)', 'बाउंड्री वॉल निर्माण', 'सीलन व क्रैक रिपेयर']
  },
  {
    id: 'painter',
    nameHi: 'पेंटर / वॉल पुट्टी',
    nameEn: 'Painter & Decorator',
    iconName: 'Paintbrush',
    descriptionHi: 'घर की पुताई, वॉल पुट्टी, एशियन पेंट्स, डिस्टेंपर, पी.ओ.पी, वाटरप्रूफिंग',
    descriptionEn: 'House painting, wall putty, waterproofing, POP designs',
    commonServicesHi: ['अंदर-बाहर की पुताई', 'वॉल पुट्टी व स्मूथ फिनिश', 'छत व दीवार वाटरप्रूफिंग', 'पी.ओ.पी व फॉल्स सीलिंग', 'पॉलिश व एनामेल पेंट']
  },
  {
    id: 'mechanic',
    nameHi: 'मैकेनिक (AC/फ्रिज/RO)',
    nameEn: 'Appliance Mechanic',
    iconName: 'Cpu',
    descriptionHi: 'AC सर्विस व गैस चार्ज, फ्रिज, वॉशिंग मशीन, RO वाटर प्यूरीफायर रिपेयर',
    descriptionEn: 'AC servicing, refrigerator, washing machine & RO repair',
    commonServicesHi: ['AC सर्विस व गैस रीफिल', 'फ्रिज कूलिंग समस्या', 'वॉशिंग मशीन रिपेयर', 'RO फिल्टर व मेम्ब्रेन चेंज', 'कूलर व मोटर वाइंडिंग']
  },
  {
    id: 'tailor',
    nameHi: 'दर्जी / टेलर',
    nameEn: 'Tailor & Stitching',
    iconName: 'Shirt',
    descriptionHi: 'सूट, कुर्ता-पायजामा, पैंट-शर्ट, लेडीज ब्लाउज, शेरवानी, अल्टरेशन',
    descriptionEn: 'Suits, kurta pajama, gents & ladies tailored garments',
    commonServicesHi: ['कुर्ता-पायजामा व सफारी', 'जेंट्स पैंट-शर्ट', 'ब्लाउज व लेडीज सूट', 'शादी के कपड़े व शेरवानी', 'फिटिंग व अल्टरेशन']
  },
  {
    id: 'driver',
    nameHi: 'चालक / ड्राइवर',
    nameEn: 'Driver',
    iconName: 'Car',
    descriptionHi: 'अनुभवी कार ड्राइवर, लोडर, ट्रैक्टर, आपातकालीन व लंबी दूरी की यात्रा',
    descriptionEn: 'Experienced car, commercial loader and private drivers',
    commonServicesHi: ['लोकल शाहजहांपुर ट्रिप', 'बरेली / लखनऊ लंबी दूरी', 'शादी-विवाह बुकिंग', 'लोडर व मालवाहक', 'मंथली पर्सनल ड्राइवर']
  },
  {
    id: 'gardener',
    nameHi: 'माली / गार्डनर',
    nameEn: 'Gardener',
    iconName: 'Flower2',
    descriptionHi: 'बगीचे की देखरेख, गमले, खाद, कटाई-छंटाई, लॉन तैयार करना',
    descriptionEn: 'Lawn maintenance, plants, pruning, soil fertilizing',
    commonServicesHi: ['लॉन की कटाई व छंटाई', 'नए पौधे व गमले सेटिंग', 'ऑर्गेनिक खाद व दवाई', 'मौसमी फूल व क्यारी', 'मंथली गार्डन रख-रखाव']
  },
  {
    id: 'labor',
    nameHi: 'दैनिक मजदूर / लोडिंग',
    nameEn: 'Daily Labor & Shifting',
    iconName: 'Users',
    descriptionHi: 'मकान शिफ्टिंग, सामान चढ़ाना-उतारना, खेत व गोदाम कार्य, दैनिक श्रम',
    descriptionEn: 'House shifting, cargo loading/unloading, warehouse & field labor',
    commonServicesHi: ['मकान सामान शिफ्टिंग', 'ईंट व रेत उतारना', 'गोदाम लोडिंग-अनलोडिंग', 'खेत निराई व कटाई', 'तोड़-फोड़ व मलबा सफाई']
  }
];

export const INITIAL_ARTISANS: Artisan[] = [
  {
    id: 'art-1',
    name: 'मास्टर रामवीर शर्मा',
    phone: '9839123450',
    whatsapp: '9839123450',
    tradeId: 'carpenter',
    tradeTitleHi: 'मास्टर बढ़ई व फर्नीचर कारीगर',
    tradeTitleEn: 'Master Carpenter & Furniture Craftsman',
    locality: 'टाउन हॉल (Town Hall)',
    specificAddress: 'दुकान नं. 4, लकड़ी मंडी, टाउन हॉल के पास, शाहजहांपुर',
    experienceYears: 18,
    dailyWage: 750,
    visitFee: 150,
    rating: 4.9,
    reviewsCount: 38,
    verified: true,
    emergencyAvailable: true,
    bioHi: '18 वर्षों से शाहजहांपुर और आसपास सागौन व शीशम के नक्काशीदार फर्नीचर, मॉड्यूलर किचन, और अलमारी बनाने का अनुभव। समय पर और मजबूत काम की पक्की गारंटी।',
    specialties: ['सागौन की अलमारी', 'नक्काशीदार दीवान बेड', 'मॉड्यूलर किचन कैबिनेट', 'दरवाजा व चौखट फिटिंग'],
    avatarImage: '/src/assets/images/carpenter_woodwork_1794325420213.jpg',
    workPhotos: [
      '/src/assets/images/carpenter_woodwork_1794325420213.jpg',
      '/src/assets/images/spn_artisan_hero_1794325420444.jpg'
    ],
    toolsOwned: ['इलेक्ट्रिक कटर', 'राउटर मशीन', 'हैंड प्लेनर', 'लेजर मेजरमेंट', 'चिसल व क्लैम्प्स'],
    reviews: [
      {
        id: 'rev-1',
        authorName: 'आलोक कुमार गुप्ता',
        authorLocality: 'सदर बाजार (Sadar Bazar)',
        rating: 5,
        comment: 'रामवीर जी ने हमारे नए घर की सारी अलमारी और लकड़ी के दरवाजे बहुत ही सफाई से बनाए। लकड़ी की समझ बहुत गहरी है।',
        date: '3 दिन पहले'
      },
      {
        id: 'rev-2',
        authorName: 'विकास अग्निहोत्री',
        authorLocality: 'आवास विकास (Awas Vikas)',
        rating: 5,
        comment: 'मॉड्यूलर किचन का काम बिल्कुल लखनऊ की बड़ी दुकानों जैसा फिनिशिंग में किया और चार्ज भी जायज लिया।',
        date: '10 दिन पहले'
      }
    ],
    registeredAt: '2026-01-15'
  },
  {
    id: 'art-2',
    name: 'उस्ताद मोहम्मद असलम',
    phone: '9450892211',
    whatsapp: '9450892211',
    tradeId: 'blacksmith',
    tradeTitleHi: 'वरिष्ठ लोहार व वेल्डर उस्ताद',
    tradeTitleEn: 'Master Blacksmith & Metal Fabricator',
    locality: 'रोजा (Roza)',
    specificAddress: 'मेन रोड रेलवे क्रॉसिंग के पास, रोजा, शाहजहांपुर',
    experienceYears: 22,
    dailyWage: 700,
    visitFee: 200,
    rating: 4.8,
    reviewsCount: 42,
    verified: true,
    emergencyAvailable: true,
    bioHi: 'लोहे का मजबूत मेन गेट, बालकनी रेलिंग, डिजाइनर ग्रिल, टीन शेड और ट्रैक्टर-ट्राली के सामान का निर्माण। पुरानी भट्टी और मॉडर्न आर्क वेल्डिंग दोनों का माहिर।',
    specialties: ['डिजाइनर मेन गेट', 'सुरक्षा खिड़की ग्रिल', 'टीन शेड स्ट्रक्चर', 'स्टेनलेस स्टील रेलिंग', 'कृषि यंत्र मरम्मत'],
    avatarImage: '/src/assets/images/blacksmith_metalwork_1794325421227.jpg',
    workPhotos: [
      '/src/assets/images/blacksmith_metalwork_1794325421227.jpg'
    ],
    toolsOwned: ['पोर्टेबल इन्वर्टर वेल्डिंग मशीन', 'एंगल ग्राइंडर', 'गैस कटर सेट', 'बड़ा निहाई व हथौड़े', 'ड्रिल प्रेस'],
    reviews: [
      {
        id: 'rev-3',
        authorName: 'अमरीक सिंह',
        authorLocality: 'पुवायां (Powayan)',
        rating: 5,
        comment: 'खेत के लिए बड़ा लोहे का गेट और शेड असलम भाई ने बनाया। वजन और मजबूती में कोई कमी नहीं।',
        date: '1 हफ्ता पहले'
      }
    ],
    registeredAt: '2026-01-10'
  },
  {
    id: 'art-3',
    name: 'राजेश कुमार सेन (सैलून एक्सपर्ट)',
    phone: '9793441298',
    whatsapp: '9793441298',
    tradeId: 'barber',
    tradeTitleHi: 'अनुभवी नाई व ग्रूमिंग स्पेशलिस्ट',
    tradeTitleEn: 'Professional Barber & Men Groomer',
    locality: 'बहादुरगंज (Bahadurganj)',
    specificAddress: 'नियर हनुमान मंदिर, बहादुरगंज बाजार, शाहजहांपुर',
    experienceYears: 12,
    dailyWage: 500,
    visitFee: 100,
    rating: 4.9,
    reviewsCount: 56,
    verified: true,
    emergencyAvailable: true,
    bioHi: 'लेटेस्ट ट्रेंडिंग हेयरकट, बियर्ड शेपिंग, चारकोल फेशियल और दूल्हा तैयार करने का पूरा पैकेज। घर पर भी विजिट सेवा उपलब्ध है (बुजुर्गों और मरीजों के लिए विशेष छूट)।',
    specialties: ['ट्रेंडिंग हेयरकट', 'दाढ़ी स्टाइलिंग व ट्रिमिंग', 'हर्बल फेशियल व मसाज', 'दूल्हा ग्रूमिंग पैकेज', 'होम सर्विस उपलब्ध'],
    avatarImage: '/src/assets/images/barber_grooming_1794325421827.jpg',
    workPhotos: [
      '/src/assets/images/barber_grooming_1794325421827.jpg'
    ],
    toolsOwned: ['प्रोफेशनल कॉर्डलेस ट्रिमर', 'जापानी स्टाइल कैंची', 'स्टीमर', 'यूवी स्टेरिलाइजर', 'डिस्पोजेबल किट'],
    reviews: [
      {
        id: 'rev-4',
        authorName: 'डॉ. शैलेन्द्र सिंह',
        authorLocality: 'शाहजहांपुर कैंट (Cantt)',
        rating: 5,
        comment: 'राजेश जी घर आकर पिताजी की कटिंग और शेविंग बहुत ही सलीके और स्वच्छता के साथ करते हैं। बहुत ही शालीन स्वभाव।',
        date: '4 दिन पहले'
      }
    ],
    registeredAt: '2026-02-01'
  },
  {
    id: 'art-4',
    name: 'इमरान खान (प्लंबिंग मास्टर)',
    phone: '9125678901',
    whatsapp: '9125678901',
    tradeId: 'plumber',
    tradeTitleHi: 'सर्टिफाइड सेनेटरी व प्लंबर कारीगर',
    tradeTitleEn: 'Certified Sanitary & Plumbing Expert',
    locality: 'सदर बाजार (Sadar Bazar)',
    specificAddress: 'घंटाघर के पास, सदर, शाहजहांपुर',
    experienceYears: 14,
    dailyWage: 650,
    visitFee: 150,
    rating: 4.8,
    reviewsCount: 31,
    verified: true,
    emergencyAvailable: true,
    bioHi: 'वाटर पाइप फिटिंग, बाथरूम सेनेटरी, सबमर्सिबल पाइपलाइन और इमरजेंसी वाटर लीकेज के लिए 24 घंटे हाजिर। CPVC और UPVC का आधुनिक काम।',
    specialties: ['बाथरूम सेनेटरी फिटिंग', 'वाटर टैंक ऑटो-कट कनेक्शन', 'अंडरग्राउंड पाइप लीकेज टेस्ट', 'गीजर व शावर फिटिंग'],
    avatarImage: '/src/assets/images/spn_artisan_hero_1794325420444.jpg',
    workPhotos: [
      '/src/assets/images/spn_artisan_hero_1794325420444.jpg'
    ],
    toolsOwned: ['पाइप थ्रेडर मशीन', 'प्रेशर टेस्टिंग पंप', 'CPVC कटर व सॉल्वेंट किट', 'हैमर ड्रिल'],
    reviews: [
      {
        id: 'rev-5',
        authorName: 'संजय रस्तोगी',
        authorLocality: 'चौक / घंटाघर (Chowk)',
        rating: 5,
        comment: 'रात में पाइपलाइन फट गई थी, कॉल करते ही 25 मिनट में आकर पूरा फॉल्ट सही कर दिया। बहुत भरोसेमंद हैं।',
        date: '2 दिन पहले'
      }
    ],
    registeredAt: '2026-01-20'
  },
  {
    id: 'art-5',
    name: 'सुरेश पाल (इलेक्ट्रिकल इंजीनियर)',
    phone: '9935123987',
    whatsapp: '9935123987',
    tradeId: 'electrician',
    tradeTitleHi: 'सीनियर हाउस वायरिंग व बिजली मिस्त्री',
    tradeTitleEn: 'House Wiring & Inverter Technician',
    locality: 'आवास विकास (Awas Vikas)',
    specificAddress: 'सेक्टर 2, आवास विकास कॉलोनी, शाहजहांपुर',
    experienceYears: 16,
    dailyWage: 700,
    visitFee: 150,
    rating: 4.9,
    reviewsCount: 45,
    verified: true,
    emergencyAvailable: true,
    bioHi: 'आधुनिक कंसील्ड वायरिंग, शॉर्ट सर्किट डिटेक्शन, इन्वर्टर-बैटरी बैकअप सेटअप और हाई-राइज बिल्डिंग लाइटिंग का विशेषज्ञ। काम में सुरक्षा पहली प्राथमिकता।',
    specialties: ['कंसील्ड हाउस वायरिंग', 'इन्वर्टर व जनरेटर पैनल', 'एमसीबी व अर्थिंग टेस्टिंग', 'स्मार्ट स्विच बोर्ड फिटिंग'],
    avatarImage: '/src/assets/images/spn_artisan_hero_1794325420444.jpg',
    workPhotos: [
      '/src/assets/images/spn_artisan_hero_1794325420444.jpg'
    ],
    toolsOwned: ['डिजिटल मल्टीमीटर', 'वायर स्ट्रिपर', 'वॉल चेज़र मशीन', 'अर्थ टेस्टर', 'इंसुलेटेड प्लायर सेट'],
    reviews: [
      {
        id: 'rev-6',
        authorName: 'पंकज दीक्षित',
        authorLocality: 'लोधीपुर (Lodhipur)',
        rating: 5,
        comment: 'पूरे 3 मंजिला मकान की वायरिंग सुरेश जी ने की। 3 साल हो गए एक भी फॉल्ट नहीं आया।',
        date: '1 महीना पहले'
      }
    ],
    registeredAt: '2026-01-05'
  },
  {
    id: 'art-6',
    name: 'रमेश चंद्रा (राजमिस्त्री ठेकेदार)',
    phone: '9838776655',
    whatsapp: '9838776655',
    tradeId: 'mason',
    tradeTitleHi: 'वरिष्ठ राजमिस्त्री व निर्माण ठेकेदार',
    tradeTitleEn: 'Senior Mason & Building Contractor',
    locality: 'तिलहर (Tilhar)',
    specificAddress: 'तहसील रोड, तिलहर, शाहजहांपुर',
    experienceYears: 25,
    dailyWage: 800,
    visitFee: 200,
    rating: 4.7,
    reviewsCount: 29,
    verified: true,
    emergencyAvailable: false,
    bioHi: '25 साल का अटूट अनुभव। मजबूत नींव से लेकर लिंटर, कॉलम-बीम, वाटरप्रूफ प्लास्टर और इटैलियन मार्बल फिटिंग तक। 10 कुशल मिस्त्रियों और मजदूरों की पूरी टीम साथ में।',
    specialties: ['लिंटर व कॉलम ढलाई', 'वाटरप्रूफ प्लास्टर', 'टाइल्स व मार्बल फिटिंग', 'बाउंड्री व दुकान निर्माण'],
    avatarImage: '/src/assets/images/carpenter_woodwork_1794325420213.jpg',
    workPhotos: [
      '/src/assets/images/carpenter_woodwork_1794325420213.jpg'
    ],
    toolsOwned: ['कंक्रीट वाइब्रेटर', 'लेवल वाटर पाइप', 'मार्बल कटर मशीन', 'प्लंब बॉब व साहुल'],
    reviews: [
      {
        id: 'rev-7',
        authorName: 'चौधरी बृजपाल सिंह',
        authorLocality: 'तिलहर (Tilhar)',
        rating: 5,
        comment: 'मकान का लैंटल और चिनाई रमेश मिस्त्री से करवाई। साहुल-सूत में 1 इंच का भी फर्क नहीं आया। बहुत ईमानदार कारीगर।',
        date: '2 हफ्ते पहले'
      }
    ],
    registeredAt: '2026-01-18'
  },
  {
    id: 'art-7',
    name: 'संतोष कुमार वर्मा (रंगसाज)',
    phone: '9415567812',
    whatsapp: '9415567812',
    tradeId: 'painter',
    tradeTitleHi: 'मास्टर पेंटर व वॉल टेक्सचर आर्टिस्ट',
    tradeTitleEn: 'Master Painter & Decorative Finisher',
    locality: 'पुवायां (Powayan)',
    specificAddress: 'मेन चौराहा, पुवायां, शाहजहांपुर',
    experienceYears: 15,
    dailyWage: 650,
    visitFee: 150,
    rating: 4.9,
    reviewsCount: 34,
    verified: true,
    emergencyAvailable: true,
    bioHi: 'एशियन पेंट्स और बर्जर पेंट्स के अधिकृत कारीगर। पुट्टी, प्राइमर, रॉयल लक्जरी इमल्शन और 3D वॉल टेक्सचर का बेहतरीन काम। पेंट की बर्बादी 0%।',
    specialties: ['रॉयल इमल्शन पेंटिंग', 'स्मूथ वॉल पुट्टी', '3D टेक्सचर डिजाइन', 'छत सीलन वाटरप्रूफिंग'],
    avatarImage: '/src/assets/images/spn_artisan_hero_1794325420444.jpg',
    workPhotos: [
      '/src/assets/images/spn_artisan_hero_1794325420444.jpg'
    ],
    toolsOwned: ['सैंडिंग मशीन (धूल रहित)', 'एयरलेस पेंट स्प्रेयर', 'टेक्सचर रोलर सेट', 'एल्युमिनियम सीढ़ी'],
    reviews: [
      {
        id: 'rev-8',
        authorName: 'नीरज त्रिपाठी',
        authorLocality: 'पुवायां (Powayan)',
        rating: 5,
        comment: 'दीपावली पर पूरे घर का पेंट संतोष जी से कराया। एक भी दाग फर्श पर नहीं छोड़ा, बहुत सफाई से काम करते हैं।',
        date: '3 हफ्ते पहले'
      }
    ],
    registeredAt: '2026-01-22'
  },
  {
    id: 'art-8',
    name: 'बबलू मिस्त्री (AC व फ्रिज एक्सपर्ट)',
    phone: '9651234900',
    whatsapp: '9651234900',
    tradeId: 'mechanic',
    tradeTitleHi: 'सीनियर रेफ्रिजरेशन व AC मैकेनिक',
    tradeTitleEn: 'Senior HVAC & Refrigerator Technician',
    locality: 'आर.सी. मिशन (RC Mission)',
    specificAddress: 'मिशन कंपाउंड रोड, आर.सी. मिशन, शाहजहांपुर',
    experienceYears: 11,
    dailyWage: 700,
    visitFee: 200,
    rating: 4.8,
    reviewsCount: 27,
    verified: true,
    emergencyAvailable: true,
    bioHi: 'स्प्लिट और विंडो AC की जेट पंप सर्विस, लीकेज टेस्ट, ओरिजिनल गैस चार्जिंग और इन्वर्टर फ्रिज की पीसीबी रिपेयरिंग। तुरंत घर पहुंच सेवा।',
    specialties: ['AC जेट पंप सर्विसिंग', 'R32 / R410A गैस रीफिल', 'इन्वर्टर फ्रिज पीसीबी दुरुस्ती', 'वॉशिंग मशीन मोटर रिपेयर'],
    avatarImage: '/src/assets/images/spn_artisan_hero_1794325420444.jpg',
    workPhotos: [
      '/src/assets/images/spn_artisan_hero_1794325420444.jpg'
    ],
    toolsOwned: ['प्रेशर वॉशर जेट पंप', 'वैक्यूम पंप व गेज मैनिफोल्ड', 'गैस वेल्डिंग टॉर्च', 'क्लैंप मीटर'],
    reviews: [
      {
        id: 'rev-9',
        authorName: 'हर्षित खन्ना',
        authorLocality: 'बरेली मोड़ (Bareilly Morh)',
        rating: 5,
        comment: 'AC की कूलिंग बिल्कुल बंद थी, बबलू जी ने आके कैपेसिटर चेंज किया और गैस का प्रेशर ठीक किया। अब सुपर चिल्ड हवा आ रही है।',
        date: '5 दिन पहले'
      }
    ],
    registeredAt: '2026-02-05'
  }
];

export const INITIAL_JOB_POSTS: JobPost[] = [
  {
    id: 'job-1',
    customerName: 'अमित कुमार सक्सेना',
    customerPhone: '9838112233',
    customerWhatsapp: '9838112233',
    tradeNeeded: 'carpenter',
    tradeTitleHi: 'बढ़ई / कारपेंटर',
    title: 'सदर बाजार में 2 कमरों के लिए लकड़ी की अलमारी और ड्रेसिंग टेबल बनवानी है',
    description: 'हमें अपने नए मकान के लिए 8x6 फीट की 2 सागौन प्लाईवुड अलमारी बनवानी है। सारा सामान हम देंगे या मिस्त्री की सलाह से खरीदेंगे। मेहनताना प्रति स्क्वायर फीट या दिहाड़ी तय कर सकते हैं।',
    locality: 'सदर बाजार (Sadar Bazar)',
    budgetInr: 12000,
    urgency: 'urgent_today',
    postedAt: 'आज, 2 घंटे पहले',
    status: 'open'
  },
  {
    id: 'job-2',
    customerName: 'सरदार हरजीत सिंह',
    customerPhone: '9450334455',
    customerWhatsapp: '9450334455',
    tradeNeeded: 'blacksmith',
    tradeTitleHi: 'लोहार / वेल्डर',
    title: 'रोजा में गोदाम का 12 फीट का लोहे का स्लाइडिंग गेट रिपेयर व वेल्डिंग करवानी है',
    description: 'गोदाम के गेट का निचला पहिया जाम हो गया है और चैनल में वेल्डिंग टूट गई है। वेल्डिंग मशीन और औजार साथ लाने होंगे। काम आज ही शुरू करना है।',
    locality: 'रोजा (Roza)',
    budgetInr: 2500,
    urgency: 'urgent_today',
    postedAt: 'आज, 4 घंटे पहले',
    status: 'open'
  },
  {
    id: 'job-3',
    customerName: 'मोहित वर्मा',
    customerPhone: '9120778899',
    customerWhatsapp: '9120778899',
    tradeNeeded: 'barber',
    tradeTitleHi: 'नाई / सैलून',
    title: 'टाउन हॉल में शादी समारोह के लिए 4 लोगों की घर पर ग्रूमिंग व कटिंग चाहिए',
    description: 'शादी के लिए घर पर सुबह 10 बजे आकर 4 सदस्यों का हेयरकट, शेविंग और फेस मसाज करना है। हाइजीनिक और अच्छे औजार होने चाहिए।',
    locality: 'टाउन हॉल (Town Hall)',
    budgetInr: 1500,
    urgency: 'this_week',
    postedAt: 'कल शाम',
    status: 'open'
  },
  {
    id: 'job-4',
    customerName: 'दिनेश चंद्र पांडे',
    customerPhone: '9650998877',
    customerWhatsapp: '9650998877',
    tradeNeeded: 'plumber',
    tradeTitleHi: 'प्लंबर / नलसाज',
    title: 'पुवायां में छत की 1000 लीटर पानी टंकी और मोटर पाइपलाइन फिटिंग',
    description: 'छत पर नई सिंटेक्स टंकी रखनी है और मोटर से इनलेट-आउटलेट पाइप जोड़ना है। 2 बाथरूम में नल भी बदलने हैं।',
    locality: 'पुवायां (Powayan)',
    budgetInr: 1800,
    urgency: 'this_week',
    postedAt: '1 दिन पहले',
    status: 'open'
  }
];
