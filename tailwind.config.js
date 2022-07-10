/* eslint-disable functional/immutable-data */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/images/background-blur.png)'
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(300px, 1fr))'
      },
      width: {
        128: '32rem'
      },
      padding: {
        0.75: '3px'
      },
      fontFamily: {
        sans: 'Fira Code'
      },
      colors: {
        green: {
          300: '#43D9AD',
          500: '#3C9D93'
        },
        purple: {
          500: '#4D5BCE'
        },
        pink: {
          500: '#C98BDF'
        },
        orange: {
          500: '#FEA55F',
          700: '#E99287'
        },
        red: {
          500: '#F75A68'
        },
        gray: {
          300: '#607B96',
          400: '#1C2B3A',
          500: '#1E2D3D',
          600: '#011627',
          900: '#01080E'
        }
      }
    }
  },
  plugins: []
};
