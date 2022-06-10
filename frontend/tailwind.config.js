module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/Login.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F0FEFF",
          200: '#00045A'
        },
        input: {
          100: '#4F4F4F',
          200: '#9B9B9B'
        },
        button: {
          100: '#FAFF02',
          200: '#FFFFFF'
        },
        text: {
          100: '#000000',
          200: '#00045A'
        }
      }
    },
  },
  plugins: [],
}
