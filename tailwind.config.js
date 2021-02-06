module.exports = {
  purge: {
    enable: false,
    content: [
      './src/**/!(*.d).{ts,js,jsx,tsx,mdx}',
      './data/**/!(*.d).{ts,js,jsx,tsx,mdx}',
    ],
  },
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary-light': '#ffb4b4',
        primary: '#f875aa',
        'primary-darken': '#DE7E7E',
        'primary-darken-50': '#AE6565',
      },
      spacing: {
        18: '4.5rem',
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      rotate: ['last'],
    },
  },
  plugins: [],
}
