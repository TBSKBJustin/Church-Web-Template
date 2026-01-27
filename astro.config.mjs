import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-church-domain.org',
  output: 'hybrid', // 混合模式：默认静态，API 路由动态
  adapter: cloudflare({
    mode: 'directory',
  }),
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
