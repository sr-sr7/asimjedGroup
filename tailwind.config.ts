import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#00d4aa",
        brand: {
          teal: "#00d4aa",
          blue: "#3a7bd5",
          green: "#7ed957",
        },
        dark: {
          DEFAULT: "#0d1117",
          2: "#161b22",
          3: "#1f2937",
        },
      },
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      backgroundImage: {
        "brand-grad": "linear-gradient(135deg, #00d4aa, #3a7bd5, #7ed957)",
      },
    },
  },
  plugins: [],
};

export default config;
