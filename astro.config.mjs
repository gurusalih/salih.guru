import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://salih.guru',
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
    imageService: 'passthrough'
  })
});

