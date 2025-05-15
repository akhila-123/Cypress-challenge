const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.demoblaze.com/',
    pageLoadTimeout: 30000, // increase to 2 minutes
  },
});
