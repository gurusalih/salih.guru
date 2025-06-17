import type { WorkItem } from "./types";

const mono: WorkItem = {
  date: "2023-06-01",
  category: "work",
  translation: {
    tr: {
      title: "Yazılım Mühendisi",
      subtitle: "MonoPayments",
      description: `Bankacılık ve fintech için hükümetle entegre zaman damgalama, hazine ve raporlama sistemleri dahil olmak üzere ölçeklenebilir mikro hizmetler oluşturuldu.
Yığın: Go, JavaScript, Docker, PostgreSQL.`,
    },
    en: {
      title: "Software Engineer",
      subtitle: "MonoPayments",
      description: `Built scalable microservices for banking and fintech, including government-integrated timestamping, treasury, and reporting systems.
Stack: Go, JavaScript, Docker, PostgreSQL.`,
    },
  },
  tags: ["golang", "vue", "docker", "postgres"],
  url: "https://monopayments.com",
};

const restayway: WorkItem = {
  date: "2023-06-01",
  category: "work",
  translation: {
    tr: {
      title: "Kurucu Yazılım Mühendisi",
      subtitle: "Restayway (eski adıyla Turistik Rota)",
      description: `Otomatik içerik, gelişmiş arama (Elasticsearch), çok dilli destek ve sağlam bir iş paneliyle ölçeklenebilir bir seyahat pazarı olan Restayway'i tasarladı ve geliştirdi.
Arka uç (Go), DevOps ve AI destekli içerik hatlarına liderlik etti.
Yığın: Go, React, MongoDB, Elasticsearch, Docker, NATS.`,
    },
    en: {
      title: "Founding Software Engineer",
      subtitle: "Restayway (formerly Turistik Rota)",
      description: `Architected and developed Restayway, a scalable travel marketplace with automated content, advanced search (Elasticsearch), multilingual support, and a robust business panel.
Led backend (Go), DevOps, and AI-driven content pipelines.
Stack: Go, React, MongoDB, Elasticsearch, Docker, NATS.`,
    },
  },
  tags: ["golang", "react", "docker", "mongodb"],
  url: "https://restayway.com",
};

const alfa: WorkItem = {
  date: "2021-10-01",
  endDate: "2023-06-01",
  category: "work",
  translation: {
    tr: {
      title: "Software Engineer",
      subtitle: "Alfatek",
      description: `Gerçek zamanlı mesajlaşma, sağlam bildirimler ve tam yığın analitik panosu ile ölçeklenebilir bir C2C sohbet platformu tasarladı ve uyguladı.
Platformlar arası mobil ve PWA geliştirmeyi yönetti.
Yığın: JavaScript, Vue.js, PHP, MongoDB, NATS, Redis, Kubernetes, Docker.`,
    },
    en: {
      title: "Software Engineer",
      subtitle: "Alfatek",
      description: `Designed and implemented a scalable C2C chat platform with real-time messaging, robust notifications, and full-stack analytics dashboard.
Led cross-platform mobile and PWA development.
Stack: JavaScript, Vue.js, PHP, MongoDB, NATS, Redis, Kubernetes, Docker.`,
    },
  },
  tags: ["node", "mongodb", "vue", "docker", "kubernetes"],
  url: "https://www.alfatekyazilim.com.tr",
};

const jrAlfa: WorkItem = {
  date: "2021-06-01",
  endDate: "2021-10-01",
  category: "work",
  translation: {
    tr: {
      title: "Jr. Yazılım Mühendisi",
      subtitle: "Alfatek",
      description: `Ölçeklenebilirlik ve sürdürülebilirlik için geliştirilmiş eski sohbet mimarisi.
Kusursuz gerçek zamanlı entegrasyonlar için protokolden bağımsız modüller (WebSocket ve HTTP) geliştirildi.
Yığın: JavaScript, MongoDB, Redis.`,
    },
    en: {
      title: "Jr. Software Engineer",
      subtitle: "Alfatek",
      description: `Enhanced legacy chat architecture for scalability and maintainability.
Developed protocol-agnostic modules (WebSocket & HTTP) for seamless real-time integrations.
Stack: JavaScript, MongoDB, Redis.`,
    },
  },
  tags: ["node", "mongodb"],
  url: "https://www.alfatekyazilim.com.tr",
};

export const WorkItems: WorkItem[] = [mono, restayway, alfa, jrAlfa];
