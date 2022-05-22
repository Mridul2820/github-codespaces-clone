const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      // => @media (min-width: 480px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      'gh-primary': '#0d1117',
      'gh-secondary': '#8b949e',
      'gh-tertiary': '#24292f',
      'gh-overlay': '#161b22',
      'gh-muted': '#8b949e',
    },
    extend: {
      fontSize: {
        normal: '18px',
      },
      boxShadow: {
        'bs-card':
          '0 0 0 1px #000, 0 70px 65px rgb(0 0 0 / 9%), 0 30px 30px rgb(0 0 0 / 7%), 0 15px 15px rgb(0 0 0 / 6%), 0 10px 8px rgb(0 0 0 / 5%), 0 4px 4px rgb(0 0 0 / 4%), 0 2px 2px rgb(0 0 0 / 3%)',
        'bs-lg': '0 8px 24px #010409',
        bs3: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        bs4: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
        bs5: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
        bs5: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
      },
      backgroundImage: {
        'gh-gradient-1':
          'linear-gradient(90.91deg, #79c0ff -24.67%, #d2a8ff 53.55%)',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
