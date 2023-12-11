import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        rubik: ["var(--font-rubik)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        primary: "#E01A2B",
        davy: "#D8D8D8",
        night: "#121212",
        minishaft: "#3A3A3A",
        tundora: "#4A4A4A",
        onyx: "#6A6A6A",
        coal: "#F2F3F4",
        dustygrey: "#989898",
        skull: "#F8F8F8",
        darkblue: "#190844",
        bluesea: "#2CD0EC",
        greensea: "#7FBAAB"
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
};
export default config;
