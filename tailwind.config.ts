import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/_pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      orange: {
        50: "#FF9500",
        70: "#FFBF66",
        75: "#FFCA80",
        80: "#FFD499",
        90: "#FFEACC",
        95: "#FFF4E5",
        97: "#FFF9F0",
        99: "#FFFDFA",
      },
      grey: {
        10: "#191919",
        15: "#262626",
        20: "#333333",
        30: "#4C4C4D",
        35: "#59595A",
        40: "#656567",
        60: "#98989A",
        70: "#B3B3B3",
      },
      white: {
        90: "#E4E4E7",
        95: "#F1F1F3",
        97: "#F7F7F8",
        99: "#FCFCFD",
        100: "#ffffff",
      },
      current: "currentColor"
    },
  },
  plugins: [],
};

export default config;
