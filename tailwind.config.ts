import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            primary: "#9EC8B9",
            secondary: "#1B4242",
            tertiary: "#5C8374",
            text: "#333",
            title: "#000",
            subtitle: "#666",
          },
        },
        dark: {
          colors: {
            primary: "#092635",
            secondary: "#1B4242",
            tertiary: "#5C8374",
            text: "#fff",
            title: "#fff",
            subtitle: "#ccc",
          },
        },
      },
    }),
  ],
};
export default config;
