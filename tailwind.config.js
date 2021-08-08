module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
    backgroundColor: {
      primary: '#2c293d',
      shadow: '#000000'
    },
    textColor: {
      primary: '#ffffff',
      secondary: '#ff8f5a',
      tertiary: '#85fdf7'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
