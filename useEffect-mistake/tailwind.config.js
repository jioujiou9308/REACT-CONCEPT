/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bootstrap_primary:'#0d6efd'
      },
     fontSize:{
        komabig:['10rem',{lineHeight: '10rem'}],
      },
      fontFamily:{
        komafont:['Liu Jian Mao Cao']
      }
    },
  },
  plugins: [],
  // 可以完全取消使用中的動畫效果
  // corePlugins: {
  //  animation: false,
  // }
}


// button: {
//   fontSize: '1.2rem',
//   backgroundColor: '#0d6efd',
//   color: '#fff',
//   borderRadius: '0.25rem',
//   padding: '0.5rem 1rem',
//   '&:hover': {
//     backgroundColor: '#0b5ed7',
//   },
// },