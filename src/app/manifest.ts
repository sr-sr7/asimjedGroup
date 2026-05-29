import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AsiMjed – مجموعة تطوير المواقع والتطبيقات",
    short_name: "AsiMjed",
    description: "نصمّم ونطوّر مواقع وتطبيقات احترافية تعكس هوية علامتك التجارية.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1117",
    theme_color: "#00d4aa",
    lang: "ar",
    dir: "rtl",
    orientation: "portrait",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "تواصل معنا",
        url: "/contact",
        description: "ابدأ مشروعك معنا",
      },
      {
        name: "أعمالنا",
        url: "/portfolio",
        description: "استعرض مشاريعنا",
      },
    ],
  };
}
