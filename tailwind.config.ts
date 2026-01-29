import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: {
            primary: 'var(--color-background-primary)',
            secondary: 'var(--color-background-secondary)',
            elevated: 'var(--color-background-elevated)',
          },
          text: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-secondary)',
            tertiary: 'var(--color-text-tertiary)',
          },
          accent: {
            DEFAULT: 'var(--color-accent)',
            hover: 'var(--color-accent-hover)',
            pressed: 'var(--color-accent-pressed)',
          },
          brand: {
            primary: 'var(--color-brand-primary)',
            secondary: 'var(--color-brand-secondary)',
          },
          border: 'var(--color-border)',
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          error: 'var(--color-error)',
          info: 'var(--color-info)',
        }
      }
    }
  }
};

export default config;
