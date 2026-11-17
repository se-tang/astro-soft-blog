import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://__site_origin__',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});
