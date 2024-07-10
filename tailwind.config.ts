import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "neue-montreal": ["Neue Montreal", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeInUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
