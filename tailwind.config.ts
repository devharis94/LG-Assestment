import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/header.jpg')",
      },
      fontFamily: {
        sans: ['DINOT', 'sans-serif'],
      },
      fontSize: {
        'body': ['18px', { lineHeight: '44px' }],
        'heading': ['35px', { lineHeight: '44px' }],
        'hero': ['100px', { lineHeight: '120px' }],
        'caption': ['13px', { lineHeight: '17px' }],
      },
      colors: {
        'brand': {
          'white': '#FFFFFF',
          'blue': '#144BBE',
          'dark': '#333333',
          'overlay': '#00000019',
        },
      },
      maxWidth: {
        'custom': '1840px',
      },
    },
  },
  plugins: [],
};
export default config;
