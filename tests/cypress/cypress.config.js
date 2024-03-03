const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8888',
    specPattern: ['**/*.feature'],
    chromeWebSecurity: false,
    blockHosts: [
      '*.googletagmanager.com',
      '*.demdex.net',
      '*.nr-data.net',
      '*.tt.omtrdc.net',
    ],
    viewportWidth: 1920,
    viewportHeight: 1600,
    defaultCommandTimeout: 8000,
    requestTimeout: 10000,
    userAgent: 'Automation Test DCS Cypress',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    }
  },
})
