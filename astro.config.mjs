import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://__SITE_ORIGIN__',
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
