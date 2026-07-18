import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us.html'),
        contact: resolve(__dirname, 'contact.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        services: resolve(__dirname, 'services.html'),
        team: resolve(__dirname, 'team.html'),
        newsletter: resolve(__dirname, 'newsletter.html')
      }
    }
  }
});
