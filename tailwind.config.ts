import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'
import tailwindcssMotion from "tailwindcss-motion";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        container: '1300px',
      },
      colors: {
        main: '#CCE3DE',
        mainAccent: '#A4C3B2', 
        overlay: 'rgba(0,0,0,0.8)',
        // light mode
        bg: '#E0E7F1',
        text: '#000',
        border: '#000',
        
        // dark mode
        darkBg: '#2c312b',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#212121',
        textSecondary: '#081c15',
        darkTextSecondary: '#cad2c5',
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        light: '4px 4px 0px 0px #000',
        dark: '4px 4px 0px 0px #000',
        brutal: '4px 4px 0px 0px rgba(0,0,0,1)',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
      },
      screens: {
        w900: { raw: '(max-width: 900px)' },
        w500: { raw: '(max-width: 500px)' },
      },
    },
  },
  plugins: [tailwindAnimate, tailwindcssMotion],
  darkMode: 'class',
}
export default config
