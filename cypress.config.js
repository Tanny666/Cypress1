import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      const device = config.env.device
      if (device === "mobile") { 
        config.viewportWidth = 375;
        config.viewportHeight = 667;
      } else if (device === "laptop") {
        config.viewportWidth = 1080;
        config.viewportHeight = 1920;
      }
      return config;
    },
    
  },
});