import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        background: "rgba(var(--background-color))",
        foreground: "rgba(var(--foreground-color))",
        primary:    "rgba(var(--primary-color))",
        secondary:  "rgba(var(--secondary-color))",
        danger:     "rgba(var(--danger-color))",
        gray:       "rgba(var(--gray-color))",
        green:      "rgba(var(--green-color))",
        white:      "rgba(var(--white-color))",
      },
      fontFamily: {
        jaldi: ['Jaldi', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
