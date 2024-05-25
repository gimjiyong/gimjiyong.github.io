import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities: Record<string, Record<string, string>> = {
        ".centered": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
