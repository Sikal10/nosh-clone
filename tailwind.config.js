module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nosh_blue: {
          DEFAULT: "#30BCED",
          dark: "#282356",
          light: "#F5FCFF",
          app: "#EAF8FD",
          signIn: "#395d69"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
