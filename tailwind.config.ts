import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",         // for App Router
    "./components/**/*.{ts,tsx,js,jsx}",   // if you have a components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [scrollbarHide],
};

export default config;
