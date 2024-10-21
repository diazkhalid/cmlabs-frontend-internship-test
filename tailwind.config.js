/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/theme";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top, #00000000, #00000000, #0000007f, #000000)",
        "custom-gradient-yellow":
          "linear-gradient(to bottom, #FBB136, #00000000, #00000000, #00000000)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FBB136",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
