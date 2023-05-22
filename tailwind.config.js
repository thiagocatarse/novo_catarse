module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        blue: {
          '50': '#ebf2f6',
          '100': '#dbe8f1',
          '200': '#b9d2e4',
          '300': '#97bcd7',
          '400': '#75a6c9',
          '500': '#5390bc',
          '600': '#317aaf',
          '700': '#296692',
          '800': '#215175',
          '900': '#193d58'
        },
        gray: {
          '50': '#F8f8f8',
          '100': '#dddfe1',
          '200': '#bec0c4',
          '300': '#9ea2a8',
          '400': '#7e848b',
          '500': '#5f656f',
          '600': '#3f4752',
          '700': '#353b44',
          '800': '#2a2f37',
          '900': '#202429'
        },
        green: {
          '50': '#edf3e7',
          '100': '#deead2',
          '200': '#bed6a8',
          '300': '#abc98d',
          '400': '#80ae54',
          '500': '#609a2a',
          '600': '#418600',
          '700': '#367000',
          '800': '#2b5900',
          '900': '#214300'
        },
        red: {
          '50': '#f9eeee',
          '100': '#f6e0e0',
          '200': '#edc2c3',
          '300': '#e4a4a6',
          '400': '#dc8688',
          '500': '#d3696b',
          '600': '#ca4b4e',
          '700': '#a83f41',
          '800': '#873234',
          '900': '#652627'
        }
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0)'
          },
          '20%': {
            opacity: '1',
            transform: 'translateY(-100px)'
          },
          '80%': {
            opacity: '1',
            transform: 'translateY(-100px)'
          },
          '99%': {
            opacity: '0',
            transform: 'translateY(-100px)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 3500ms cubic-bezier(0,1.46,.5,.92) forwards'
      }
      // ...
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],

}