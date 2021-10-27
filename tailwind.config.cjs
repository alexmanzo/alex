const config = {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],

  theme: {
    fontFamily: {
      serif: ['FrauncesVariable', 'ui-serif', 'Georgia'],
      mono: ['Fira Mono', 'ui-monospace', 'Roboto'],
    },
    extend: {},
  },

  plugins: [require('@tailwindcss/typography')],
}

module.exports = config
