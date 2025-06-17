import type { ProjectItem } from "./types";

export const ProjectItems: ProjectItem[] = [
  {
    date: "2025-02-02",
    endDate: "2025-02-02",
    category: "project",
    type: "personal",
    translation: {
      tr: {
        title: "Katkıda Bulunan",
        subtitle: "Tarotica",
        description:
          `Mobil tarot uygulaması Tarotica için konsept aşamasından TestFlight beta lansmanına kadar 48 saat içinde arka uç hizmeti geliştirildi.`,
      },
      en: {
        title: "Contributor",
        subtitle: "Tarotica",
        description:
          `Developed backend service for Tarotica, a mobile tarot app, from concept to TestFlight beta launch in 48 hours.`,
      },
    },
    tags: ["node", "cloudflare"],
    url: "https://tarotic.app",
  },
  {
    date: "2024-08-30",
    endDate: "2025-01-01",
    category: "project",
    type: "personal",
    translation: {
      tr: {
        title: "Katkıda Bulunan",
        subtitle: "NomadWork",
        description:
          "Go, Postgres ve Docker kullanarak Nomadwork’ün arka ucuna katkıda bulundu.",
      },
      en: {
        title: "Contributor",
        subtitle: "NomadWork",
        description:
          "Contributed to Nomadwork’s backend using Go, Postgres, and Docker.",
      },
    },
    tags: ["golang", "postgres", "docker"],
    url: "https://nomadwork.app",
  },
  {
    date: "2022-07-01",
    endDate: "2022-10-01",
    category: "project",
    type: "personal",
    translation: {
      tr: {
        title: "Creator",
        subtitle: "GalataJS Framework",
        description:
          "Daha hızlı ve güvenli proje geliştirme için Node.js framework'ü olan GalataJS'yi geliştirdi.",
      },
      en: {
        title: "Creator",
        subtitle: "GalataJS Framework",
        description:
          "Developed GalataJS, a Node.js framework for faster and more secure project development.",
      },
    },
    tags: ["node", "typescript"],
    url: "https://github.com/galatajs",
  },
]; 