import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'

const mdsvexConfig = {
  extensions: ['.svelte.md', '.md', '.svx'],
  // layout: './src/lib/PostLayout.svelte',

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [],
  rehypePlugins: [],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
}

export default config
