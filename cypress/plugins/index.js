// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const browserify = require("@cypress/browserify-preprocessor");
const {
  initCypressPlugin,
} = require("@undefinedlabs/scope-agent/cypress/plugin");

module.exports = async (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  const options = {
    browserifyOptions: {
      extensions: [".js", ".ts"],
      plugin: [["tsify"]],
    },
  };
  on("file:preprocessor", browserify(options));

  const newConfig = await initCypressPlugin(on, config);

  return newConfig;
};
