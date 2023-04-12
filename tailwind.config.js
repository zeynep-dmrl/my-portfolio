/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        backdrop:'#121212',
        html:'#e96228',
        js:'#efd81d',
        react:'#5ed3f3',
        tailwind:'#38BDF8',
        css:'#2862e9',
        bootstrap:'#563D7C'
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
      keyframes: {
        around: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        around: 'around 5s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    lineClamp: ['responsive']
  }
}
