const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "cbv9vc",

  e2e: {
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
    viewportWidth: 1500,
    viewportHeight: 900,
    chromeWebSecurity: false,
    pageLoadTimeout:90000,
    video: true,
    defaultCommandTimeout: 6000,
    experimentalStudio: true
      
   
  },

});
