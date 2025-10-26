import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./apps/*/index.html",
    "./apps/*/src/**/*.{js,ts,jsx,tsx}",
    "./packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui(), require("@tailwindcss/typography")],
};

