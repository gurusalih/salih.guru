export interface Product {
  id: string;
  title: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  image: string;
  link?: string;
  technologies: string[];
  year: string;
}

export const pastProducts: Product[] = [
  {
    id: 'chatier',
    title: {
      en: 'Chatier',
      tr: 'Chatier'
    },
    description: {
      en: 'AI-powered live support SaaS. I developed and managed all technical processes, including widgets, agent panels, and backend.',
      tr: 'AI destekli canlı destek SaaS. Widgetler, agent paneli ve backend işlemlerini geliştirdim ve yönettim.'
    },
    image: '/products/chatier.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'Socket.io'],
    year: '2024-2025'
  },
  {
    id: 'is-search',
    title: {
      en: 'ItemSatis Search Module',
      tr: 'ItemSatis Arama Modülü'
    },
    description: {
      en: 'A search module for ItemSatis, a Turkish e-pin platform. I developed and managed all technical processes, including search indexing, search API, and search UI.',
      tr: 'ItemSatis, bir Türk e-pin platformu için bir arama modülü geliştirdim ve yönettim. Arama dizini, arama API ve arama UI işlemlerini geliştirdim ve yönettim.'
    },
    image: '/products/is-search.jpeg',
    link: 'https://itemsatis.com/ara/valo',
    technologies: ['Node.js', 'Elasticsearch', 'Docker', 'Kafka', 'Debezium'],
    year: '2025'
  },
  {
    id: 'dynoo',
    title: {
      en: 'Dynoo',
      tr: 'Dynoo'
    },
    description: {
      en: 'A comprehensive CMS product that allows a company to manage its customers, employees and businesses.',
      tr: 'Bir şirketin müşterilerini, çalışanlarını ve işlerini yönetmesini sağlayan bir tamamlayıcı CMS ürünü.'
    },
    image: '/products/dynoo.png',
    technologies: ['Golang', 'PostgreSQL', 'Docker', 'Nats', 'Whatsapp API', 'Vue.js'],
    year: '2023-2024'
  },
  {
    id: 'is-notify',
    title: {
      en: 'ItemSatis Notify',
      tr: 'ItemSatis Bildirim'
    },
    description: {
      en: 'A microservice module that enables sending notifications to multiple notification channels asynchronously for ItemSatis, a Turkish e-pin platform.',
      tr: 'ItemSatis, bir Türk e-pin platformu için bir mikroservis modülü geliştirdim ve yönettim. Birden fazla bildirim kanalına asenkron bir şekilde bildirim göndermeyi sağlayan mikroservis modülü.'
    },
    image: '/products/is-notify.png',
    link: 'https://www.itemsatis.com/bildirimler.html',
    technologies: ['Node.js', 'Nats.io', 'Kubernetes', 'MongoDB'],
    year: '2023'
  },
  {
    id: 'is-panel',
    title: {
      en: 'ItemSatis Panel',
      tr: 'ItemSatis Paneli'
    },
    description: {
      en: 'A CMS where customers in the seller role can manage their data on the site with detailed analysis and a comfortable UI.',
      tr: 'ItemSatis, bir Türk e-pin platformu için bir panel geliştirdim ve yönettim. Paneldeki tüm işlemleri geliştirdim ve yönettim.'
    },
    image: '/products/is-panel.png',
    link: 'https://panel.itemsatis.com',
    technologies: ['Node.js', 'MongoDB', 'MySQL', 'Socket.io', 'Vue.js'],
    year: '2022-2023'
  },
  {
    id: 'is-chat',
    title: {
      en: 'ItemSatis Chat',
      tr: 'ItemSatis Sohbet'
    },
    description: {
      en: 'A chat module for ItemSatis, a Turkish e-pin platform. I developed and managed all technical processes, including chat API, chat UI, and chat backend.',
      tr: 'ItemSatis, bir Türk e-pin platformu için bir sohbet modülü geliştirdim ve yönettim. Sohbet API, sohbet UI ve sohbet backend işlemlerini geliştirdim ve yönettim.'
    },
    image: '/products/is-chat.png',
    link: 'https://itemsatis.com',
    technologies: ['Node.js', 'MongoDB', 'Socket.io'],
    year: '2021-2023'
  },
  {
    id: 'is-ticket',
    title: {
      en: 'ItemSatis Ticket',
      tr: 'ItemSatis Destek'
    },
    description: {
      en: 'A support request system that allows for a completely dynamic selection of categories and data selection based on category (product, order, user, etc.) for ItemSatis, a Turkish e-pin platform.',
      tr: 'ItemSatis, bir Türk e-pin platformu için bir destek sistemi geliştirdim ve yönettim. Destek sistemi, kategori ve kategoriye göre veri seçimi (ürün, sipariş, kullanıcı, vb.) için tamamen dinamik seçim sağlar.'
    },
    image: '/products/is-ticket.png',
    link: 'https://www.itemsatis.com/yeni-talep-olustur.html',
    technologies: ['PHP', "MySQL"],
    year: '2022-2023'
  },
  {
    id: 'galatajs',
    title: {
      en: 'GalataJS',
      tr: 'GalataJS'
    },
    description: {
      en: 'A flexible Nodejs framework that can be used module-based or completely function-based, allowing socket.io and http to be used together easily.',
      tr: "Modül bazlı veya tamamen fonksiyon bazlı kullanılabilecek, socket.io ve http'yi bir arada rahat kullanabilen esnek bir Nodejs Framework'u"
    },
    image: '/products/galatajs.png',
    link: 'https://github.com/galatajs',
    technologies: ['Node.js', 'Socket.io', 'HTTP', 'EventEmitter'],
    year: '2022'
  }
];

export const currentProducts: Product[] = [
  {
    id: 'restayway',
    title: {
      en: 'Restayway',
      tr: 'Restayway'
    },
    description: {
      en: 'A platform where users can find the best routes for their trips.',
      tr: 'Kullanıcıların yolculukları için en iyi rotaları bulabileceği bir platform.'
    },
    image: '/products/restayway.png',
    link: 'https://restayway.com',
    technologies: ['Golang', 'PostgreSQL', 'Typesense', 'Postgis', 'Astro', 'Docker'],
    year: '2023-Present'
  },
  {
    id: 'treasury',
    title: {
      en: 'Treasury',
      tr: 'Treasury'
    },
    description: {
      en: 'Lists account transactions in different banks, matches them with wallets or orders in the system, and manages cash flow.',
      tr: 'Farklı bankaların hesap işlemlerini listeler, sistemdeki cüzdanlar veya siparişlerle eşler ve nakit akışını yönetir.'
    },
    image: '/products/treasury.png',
    technologies: ['Golang', 'PostgreSQL', 'Docker', 'Typesense', "GRPC"],
    year: '2024-Present'
  }
];

export const collaboratedProducts: Product[] = [
  {
    id: 'tarotica',
    title: {
      en: 'Tarotica',
      tr: 'Tarotica'
    },
    description: {
      en: 'A platform where users can get tarot readings and fortune tellings.',
      tr: 'Kullanıcıların tarot okumaları ve fal okumaları alabileceği bir platform.'
    },
    link: 'https://tarotic.app',
    image: '/products/tarotica.jpeg',
    technologies: ['Cloudflare', 'Workers', 'Pages', 'R2, KV, D1 & Queue', 'OpenAI'],
    year: '2025'
  },
  {
    id: 'nomadwork',
    title: {
      en: 'Nomad Work',
      tr: 'Nomad Work'
    },
    description: {
      en: 'A social network where nomad workers can find a suitable cafe to work from and organize coworkers together.',
      tr: 'Nomad çalışanların iş yapabileceği uygun bir kafe bulması ve çalışan arkadaşlarını bir araya getirmesi için bir sosyal ağ.'
    },
    image: '/products/nomadwork.jpeg',
    link: 'https://nomadwork.app',
    technologies: ['Go', 'Docker', 'PostgreSQL', 'Postgis', 'Self-Hosted'],
    year: '2024-2025'
  },
  {
    id: 'yurtlarburada',
    title: {
      en: 'Yurtlar Burada',
      tr: 'Yurtlar Burada'
    },
    description: {
      en: 'A product that helps students find and book the best dormitories near their universities.',
      tr: 'Öğrencilerin üniversitelerine en yakın en iyi yurtları bulmasına ve rezervasyon yapmasına yardımcı bir ürün.'
    },
    link: 'https://yurtlarburada.com',
    image: '/products/yurtlarburada.png',
    technologies: ['MySQL','Vue.js'],
    year: '2022-2023'
  },
  {
    id: 'garaj',
    title: {
      en: 'Garaj.net',
      tr: 'Garaj.net'
    },
    description: {
      en: 'Automobile services, spare parts, and a social network where car enthusiasts can create profiles and share content.',
      tr: 'Otomobil hizmetleri, yedek parçalar ve otomobil hayranlarının profilleri oluşturabileceği ve içerik paylaşabileceği bir sosyal ağ.'
    },
    link: 'https://garaj.net',
    image: '/products/garaj.png',
    technologies: ['Node.js', 'MySQL', 'Next.js'],
    year: '2022-2023'
  },
  {
    id: 'saglikseriilan',
    title: {
      en: 'Sağlık Seri İlan',
      tr: 'Sağlık Seri İlan'
    },
    description: {
      en: 'A recruitment platform serving the healthcare sector.',
      tr: 'Sağlık sektörü için bir iş ilanı platformu.'
    },
    link: 'https://www.saglikseriilan.com/',
    image: '/products/saglikseriilan.png',
    technologies: ['MySQL', 'PHP', 'Laravel'],
    year: '2022'
  }
];

