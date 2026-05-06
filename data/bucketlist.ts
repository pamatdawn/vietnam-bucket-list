export type Category = 'destinations' | 'experiences' | 'musttry' | 'food' | 'islands';
export type Region = 'north' | 'central' | 'south' | 'all';

export interface BucketItem {
  id: string;
  category: Category;
  name: string;
  description: string;
  region: Region;
  tags: string[];
  emoji: string;
  imageKeyword: string;
}

export interface Route {
  id: string;
  name: string;
  duration: string;
  stops: string[];
  color: 'blue' | 'orange' | 'red';
}

export interface Tip {
  id: string;
  text: string;
  emoji: string;
}

export const categoryConfig = {
  destinations: {
    label: 'Must See — Iconic Destinations',
    emoji: '🏞️',
    headerBg: 'bg-blue-600',
    sectionBg: 'bg-blue-50',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
  },
  experiences: {
    label: 'Must Do — Real Vietnamese Experiences',
    emoji: '🎯',
    headerBg: 'bg-red-600',
    sectionBg: 'bg-red-50',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-800',
  },
  musttry: {
    label: 'Must Try — Experiences + Shopping',
    emoji: '🛍️',
    headerBg: 'bg-pink-600',
    sectionBg: 'bg-pink-50',
    badgeBg: 'bg-pink-100',
    badgeText: 'text-pink-800',
  },
  food: {
    label: 'Must Eat — From Street to Soul',
    emoji: '🍜',
    headerBg: 'bg-orange-500',
    sectionBg: 'bg-orange-50',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-800',
  },
  islands: {
    label: 'Best Island & Beach Life',
    emoji: '🏝️',
    headerBg: 'bg-teal-600',
    sectionBg: 'bg-teal-50',
    badgeBg: 'bg-teal-100',
    badgeText: 'text-teal-800',
  },
} as const;

export const CATEGORY_ORDER: Category[] = [
  'destinations',
  'experiences',
  'musttry',
  'food',
  'islands',
];

export const bucketData: Record<Category, BucketItem[]> = {
  destinations: [
    {
      id: 'ha-long-bay',
      category: 'destinations',
      name: 'Ha Long Bay',
      description:
        'Thousands of limestone karsts rising from emerald waters. Cruise overnight, kayak through hidden lagoons, and watch the sunrise over mist-covered islands.',
      region: 'north',
      tags: ['nature', 'cruise', 'UNESCO', 'kayak'],
      emoji: '⛵',
      imageKeyword: 'ha long bay vietnam',
    },
    {
      id: 'ninh-binh',
      category: 'destinations',
      name: 'Ninh Binh',
      description:
        'Temples and ancient pagodas tucked between karst mountains. Row through the Trang An waterways — often called "Ha Long Bay on land."',
      region: 'north',
      tags: ['nature', 'temple', 'river', 'UNESCO'],
      emoji: '🛶',
      imageKeyword: 'ninh binh vietnam',
    },
    {
      id: 'hanoi',
      category: 'destinations',
      name: 'Hanoi',
      description:
        "Vietnam's chaotic, charming capital. French colonial architecture, the Old Quarter's 36 ancient streets, Hoan Kiem Lake, and the world's best street food.",
      region: 'north',
      tags: ['city', 'culture', 'food', 'history'],
      emoji: '🏙️',
      imageKeyword: 'hanoi vietnam old quarter',
    },
    {
      id: 'hoi-an',
      category: 'destinations',
      name: 'Hoi An',
      description:
        'A perfectly preserved ancient trading port lit by thousands of silk lanterns. Best for tailored clothes, cycling rice paddies, and the full moon lantern festival.',
      region: 'central',
      tags: ['culture', 'heritage', 'shopping', 'UNESCO'],
      emoji: '🏮',
      imageKeyword: 'hoi an lanterns vietnam night',
    },
    {
      id: 'hue',
      category: 'destinations',
      name: 'Hue',
      description:
        "Vietnam's former imperial capital with a stunning citadel, royal tombs along the Perfume River, and a cuisine unlike anywhere else in the country.",
      region: 'central',
      tags: ['history', 'imperial', 'food', 'UNESCO'],
      emoji: '🏯',
      imageKeyword: 'hue imperial citadel vietnam',
    },
    {
      id: 'phong-nha',
      category: 'destinations',
      name: 'Phong Nha',
      description:
        'Home to Son Doong — the world\'s largest cave. Even the "smaller" caves here, like Paradise Cave, have chambers taller than skyscrapers.',
      region: 'central',
      tags: ['adventure', 'cave', 'nature', 'UNESCO'],
      emoji: '🕳️',
      imageKeyword: 'phong nha cave vietnam underground',
    },
    {
      id: 'ha-giang',
      category: 'destinations',
      name: 'Ha Giang',
      description:
        "Vietnam's northernmost frontier. The legendary loop winds through dramatic mountain passes, ethnic minority villages, and rice terraces carved into sheer cliffs.",
      region: 'north',
      tags: ['adventure', 'motorbike', 'mountain', 'remote'],
      emoji: '⛰️',
      imageKeyword: 'ha giang mountain pass vietnam',
    },
    {
      id: 'sapa',
      category: 'destinations',
      name: 'Sapa',
      description:
        "Fansipan's terraced slopes descend into valleys where Hmong and Red Dao villagers have farmed for centuries. Trek overnight for the most authentic experience.",
      region: 'north',
      tags: ['trekking', 'culture', 'mountain', 'rice terraces'],
      emoji: '🌾',
      imageKeyword: 'sapa rice terraces vietnam mountains',
    },
    {
      id: 'da-nang',
      category: 'destinations',
      name: 'Da Nang',
      description:
        'Modern city on a stunning bay. The Dragon Bridge breathes fire on weekends, My Khe beach stretches 30km, and Marble Mountain rises dramatically from the sand.',
      region: 'central',
      tags: ['city', 'beach', 'modern', 'bridge'],
      emoji: '🐉',
      imageKeyword: 'da nang dragon bridge vietnam',
    },
    {
      id: 'ho-chi-minh-city',
      category: 'destinations',
      name: 'Ho Chi Minh City',
      description:
        "Vietnam's engine of commerce — 9 million motorbikes, a rapidly changing skyline, incredible war history at Cu Chi tunnels, and the best com tam on earth.",
      region: 'south',
      tags: ['city', 'nightlife', 'history', 'food'],
      emoji: '🌆',
      imageKeyword: 'ho chi minh city saigon vietnam skyline',
    },
    {
      id: 'phu-quoc-dest',
      category: 'destinations',
      name: 'Phu Quoc',
      description:
        "Vietnam's largest island with postcard-perfect white sand beaches, clear water, fresh pepper farms, and a sophisticated dining scene that surprises most visitors.",
      region: 'south',
      tags: ['beach', 'island', 'luxury', 'seafood'],
      emoji: '🌴',
      imageKeyword: 'phu quoc beach vietnam turquoise water',
    },
  ],

  experiences: [
    {
      id: 'cruise-ha-long',
      category: 'experiences',
      name: 'Overnight Ha Long Cruise',
      description:
        'Sleep on the water surrounded by 1,600+ limestone islands. Kayak into hidden lagoons at dusk, wake up to mist-covered karsts at sunrise.',
      region: 'north',
      tags: ['cruise', 'sunrise', 'kayak', 'romance'],
      emoji: '🌅',
      imageKeyword: 'ha long bay cruise junk boat sunrise',
    },
    {
      id: 'ha-giang-loop',
      category: 'experiences',
      name: 'Ha Giang Loop by Motorbike',
      description:
        "The legendary 4-day loop through Vietnam's most dramatic scenery. Conquer the Ma Pi Leng Pass on a manual motorbike as the gorge drops 2,000m below.",
      region: 'north',
      tags: ['motorbike', 'adventure', 'mountain', 'epic'],
      emoji: '🏍️',
      imageKeyword: 'ha giang loop motorbike mountain road',
    },
    {
      id: 'sapa-trek',
      category: 'experiences',
      name: 'Trek Ethnic Villages in Sapa',
      description:
        'Walk through Hmong and Red Dao villages with a local guide. Stay overnight in a family homestay and share a meal cooked over a wood fire.',
      region: 'north',
      tags: ['trekking', 'culture', 'homestay', 'authentic'],
      emoji: '🥾',
      imageKeyword: 'sapa trekking hmong village vietnam',
    },
    {
      id: 'egg-coffee',
      category: 'experiences',
      name: 'Egg Coffee in Hanoi',
      description:
        'Thick, creamy egg yolk whipped with condensed milk, poured over strong Vietnamese coffee. Invented in Hanoi in the 1940s — find it down a hidden Old Quarter alley.',
      region: 'north',
      tags: ['coffee', 'unique', 'Hanoi', 'iconic'],
      emoji: '☕',
      imageKeyword: 'egg coffee hanoi vietnam ca phe trung',
    },
    {
      id: 'water-puppet',
      category: 'experiences',
      name: 'Water Puppet Show',
      description:
        "A 1,000-year-old art form performed on water. Puppeteers hidden behind a bamboo screen bring dragons, phoenixes, and farmers to life on the water's surface.",
      region: 'north',
      tags: ['culture', 'traditional', 'performance', 'history'],
      emoji: '🎭',
      imageKeyword: 'water puppet show vietnam traditional',
    },
    {
      id: 'golden-bridge',
      category: 'experiences',
      name: 'Walk the Golden Bridge',
      description:
        'Giant stone hands cradle a golden bridge above the clouds on Ba Na Hills near Da Nang. The fog rolls through the hands on cool mornings — genuinely surreal.',
      region: 'central',
      tags: ['architecture', 'views', 'clouds', 'unique'],
      emoji: '🌉',
      imageKeyword: 'golden bridge ba na hills da nang vietnam',
    },
    {
      id: 'phong-nha-caves',
      category: 'experiences',
      name: 'Explore Phong Nha Caves',
      description:
        'Paradise Cave: 31km of stalactites taller than apartment buildings. For the ultimate: book Son Doong — the world\'s largest cave, a 4-day jungle expedition underground.',
      region: 'central',
      tags: ['cave', 'adventure', 'nature', 'spelunking'],
      emoji: '🦇',
      imageKeyword: 'paradise cave phong nha stalactites vietnam',
    },
    {
      id: 'trang-an-boat',
      category: 'experiences',
      name: 'Boat Through Trang An',
      description:
        "Glide through limestone valleys and ancient caves in Ninh Binh's UNESCO World Heritage site. The rowers use their feet — the oars are too long for their arms.",
      region: 'north',
      tags: ['boat', 'cave', 'UNESCO', 'nature'],
      emoji: '⛵',
      imageKeyword: 'trang an ninh binh boat cave vietnam',
    },
    {
      id: 'mekong-market',
      category: 'experiences',
      name: 'Mekong Floating Markets',
      description:
        'Cai Rang floating market at 5am: hundreds of wooden boats piled with tropical fruit and vegetables. Vendors hang goods on poles so buyers can spot them from afar.',
      region: 'south',
      tags: ['market', 'culture', 'dawn', 'authentic'],
      emoji: '🛒',
      imageKeyword: 'can tho mekong delta floating market vietnam',
    },
    {
      id: 'hai-van-pass',
      category: 'experiences',
      name: 'Ride the Hai Van Pass',
      description:
        '21km of switchbacks between Da Nang and Hue with the South China Sea on one side and cloud-covered peaks on the other. Jeremy Clarkson called it "one of the best coast roads in the world."',
      region: 'central',
      tags: ['motorbike', 'scenic', 'coastal', 'legendary'],
      emoji: '🛣️',
      imageKeyword: 'hai van pass vietnam coastal road motorbike',
    },
  ],

  musttry: [
    {
      id: 'hoi-an-tailor',
      category: 'musttry',
      name: 'Custom Outfit in Hoi An',
      description:
        'Get a perfectly fitted suit, dress, or traditional ao dai made in 24–48 hours for a fraction of Western prices. Bring reference photos.',
      region: 'central',
      tags: ['shopping', 'fashion', 'custom', 'value'],
      emoji: '🧵',
      imageKeyword: 'hoi an tailor shop custom clothing vietnam',
    },
    {
      id: 'cooking-class',
      category: 'musttry',
      name: 'Vietnamese Cooking Class',
      description:
        'Start with a dawn market tour to pick ingredients, then learn to make pho, fresh spring rolls, and bánh xèo from scratch. Leave with recipes you can actually use at home.',
      region: 'all',
      tags: ['food', 'culture', 'hands-on', 'market'],
      emoji: '👨‍🍳',
      imageKeyword: 'vietnamese cooking class market tour hoi an',
    },
    {
      id: 'coffee-tour',
      category: 'musttry',
      name: 'Coffee Tasting Tour',
      description:
        "Vietnam is the world's second-largest coffee producer. Hop between hidden cafés to try egg coffee, coconut iced coffee, ca phe sua da, and the legendary weasel coffee.",
      region: 'all',
      tags: ['coffee', 'food', 'café', 'culture'],
      emoji: '🫘',
      imageKeyword: 'vietnam coffee shop cafe culture hanoi',
    },
    {
      id: 'lantern-pottery',
      category: 'musttry',
      name: 'Make Lanterns or Pottery',
      description:
        "In Hoi An's workshops, craft your own silk lantern by hand. Or head to Bat Trang ceramic village near Hanoi to throw pottery on a traditional wheel.",
      region: 'central',
      tags: ['craft', 'hands-on', 'souvenir', 'traditional'],
      emoji: '🏺',
      imageKeyword: 'hoi an lantern making workshop silk vietnam',
    },
    {
      id: 'cyclo-ride',
      category: 'musttry',
      name: 'Cyclo Ride — Old Quarter',
      description:
        "Let a cyclo driver pedal you through Hanoi's ancient 36 Streets at walking pace. Slow, charming, and the best way to absorb the organised chaos.",
      region: 'north',
      tags: ['transport', 'culture', 'Hanoi', 'relaxed'],
      emoji: '🚲',
      imageKeyword: 'cyclo hanoi old quarter vietnam rickshaw',
    },
  ],

  food: [
    {
      id: 'pho',
      category: 'food',
      name: 'Phở',
      description:
        "Vietnam's national dish: clear broth simmered for 12 hours with star anise and charred ginger, poured over rice noodles and paper-thin beef slices. Eat it for breakfast, like locals do.",
      region: 'north',
      tags: ['noodles', 'breakfast', 'beef', 'iconic'],
      emoji: '🍲',
      imageKeyword: 'pho vietnam beef noodle soup bowl',
    },
    {
      id: 'banh-mi',
      category: 'food',
      name: 'Bánh Mì',
      description:
        "French baguette meets Vietnamese genius: pâté, mayo, pickled daikon and carrot, cucumber, cilantro, chili, and your choice of protein. Under $1.50 and the world's best sandwich.",
      region: 'all',
      tags: ['sandwich', 'street food', 'iconic', 'cheap'],
      emoji: '🥖',
      imageKeyword: 'banh mi vietnam sandwich street food',
    },
    {
      id: 'bun-cha',
      category: 'food',
      name: 'Bún Chả',
      description:
        "Hanoi's beloved lunch: grilled pork patties and belly in a sweet, tangy fish sauce broth, served with vermicelli noodles and fresh herbs. Obama ate this with Anthony Bourdain.",
      region: 'north',
      tags: ['grilled', 'Hanoi', 'pork', 'noodles'],
      emoji: '🍖',
      imageKeyword: 'bun cha hanoi vietnam pork noodles',
    },
    {
      id: 'mi-quang',
      category: 'food',
      name: 'Mì Quảng',
      description:
        "Central Vietnam's noodle: thick turmeric-yellow noodles with shrimp, pork, and just a splash of rich broth — enough to coat but not drown. Topped with peanuts and crispy rice crackers.",
      region: 'central',
      tags: ['noodles', 'central', 'turmeric', 'unique'],
      emoji: '🌶️',
      imageKeyword: 'mi quang vietnam noodles turmeric central',
    },
    {
      id: 'com-tam',
      category: 'food',
      name: 'Cơm Tấm',
      description:
        "Saigon's soul food: \"broken rice\" with grilled pork chop, shredded pork skin, steamed egg meatloaf, pickled vegetables, and a bowl of fish sauce broth. A city staple since the 1950s.",
      region: 'south',
      tags: ['rice', 'Saigon', 'pork', 'comfort food'],
      emoji: '🍚',
      imageKeyword: 'com tam saigon broken rice pork chop vietnam',
    },
    {
      id: 'che',
      category: 'food',
      name: 'Chè',
      description:
        'Vietnamese sweet dessert soups in infinite varieties: layers of mung beans, taro, lotus seeds, grass jelly, coconut milk, and crushed ice. Intensely satisfying on a hot day.',
      region: 'all',
      tags: ['dessert', 'sweet', 'coconut', 'cold'],
      emoji: '🍨',
      imageKeyword: 'che vietnamese sweet dessert coconut milk',
    },
  ],

  islands: [
    {
      id: 'phu-quoc',
      category: 'islands',
      name: 'Phu Quoc',
      description:
        "Vietnam's largest island transformed into a resort playground. White sand beaches, world-class snorkeling at coral reefs, night markets with fresh seafood, and quiet corners still waiting.",
      region: 'south',
      tags: ['luxury', 'beach', 'snorkeling', 'seafood'],
      emoji: '🏖️',
      imageKeyword: 'phu quoc island beach resort vietnam clear water',
    },
    {
      id: 'nha-trang',
      category: 'islands',
      name: 'Nha Trang',
      description:
        "Vietnam's original beach city: dive the coral reefs, island-hop by speedboat to snorkel with sea turtles, and end the day at a beach club on the famous Tran Phu boulevard.",
      region: 'central',
      tags: ['diving', 'nightlife', 'beach', 'snorkeling'],
      emoji: '🤿',
      imageKeyword: 'nha trang beach diving vietnam coral reef',
    },
    {
      id: 'con-dao',
      category: 'islands',
      name: 'Con Dao',
      description:
        'Remote, pristine, and historically profound. National park covers 80% of the island. Leatherback sea turtles nest here every summer. Zero nightlife — that\'s the point.',
      region: 'south',
      tags: ['remote', 'nature', 'turtles', 'diving', 'peaceful'],
      emoji: '🐢',
      imageKeyword: 'con dao island vietnam beach sea turtle',
    },
    {
      id: 'quy-nhon',
      category: 'islands',
      name: 'Quy Nhon',
      description:
        "The hidden gem most tourists haven't found yet. Ancient Cham towers, deserted beaches, amazing seafood for half the price of Nha Trang, and a local fishing town atmosphere.",
      region: 'central',
      tags: ['hidden gem', 'beach', 'seafood', 'Cham', 'affordable'],
      emoji: '💎',
      imageKeyword: 'quy nhon beach vietnam hidden gem fishing village',
    },
  ],
};

export const routes: Route[] = [
  {
    id: 'north-route',
    name: 'North Vietnam',
    duration: '7–10 Days',
    stops: ['Hanoi', 'Ninh Binh', 'Ha Long Bay', 'Sapa / Ha Giang'],
    color: 'blue',
  },
  {
    id: 'central-route',
    name: 'North + Central',
    duration: '14 Days',
    stops: ['Hanoi', 'Hue', 'Da Nang', 'Hoi An'],
    color: 'orange',
  },
  {
    id: 'full-route',
    name: 'Full Vietnam',
    duration: '20+ Days',
    stops: ['Hanoi', 'North Loop', 'Hue → Da Nang → Hoi An', 'HCMC', 'Mekong Delta', 'Phu Quoc'],
    color: 'red',
  },
];

export const tips: Tip[] = [
  { id: 'use-grab',      emoji: '📱', text: "Use Grab instead of taxis — always metered, safe, and cheaper" },
  { id: 'carry-cash',    emoji: '💵', text: "Carry cash — many street food stalls and local markets don't accept cards" },
  { id: 'bargain',       emoji: '🤝', text: "Bargain at markets — it's expected and part of the culture. Start at 40% of asking price" },
  { id: 'weather-varies',emoji: '🌦️', text: "Weather varies hugely: when it's hot in the south it can be rainy in the north" },
  { id: 'wake-early',    emoji: '🌅', text: "Wake up early — Vietnam is most alive at sunrise, from markets to mountain fog" },
];

export const ALL_ITEM_IDS = (Object.values(bucketData) as BucketItem[][])
  .flat()
  .map((i) => i.id);

export const TOTAL_ITEMS = ALL_ITEM_IDS.length; // 41
