module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // 기존 tailwind의 colorset을 유지한채 사용자가 직접 정의하여 확장
      colors: {
        primary: '#1DA1F2',
        dark: '#1a91da',
        light: '#a5d0f5',
        lighter: '#D4E5F4',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
