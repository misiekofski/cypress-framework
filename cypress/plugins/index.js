const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs-extra');
const path = require('path');

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber());

  function getConfigurationByFile(env) {
    const pathToConfigFile = path.resolve("cypress/config", `${env}.config.json`);
    return fs.readJson(pathToConfigFile);
  }
  //if no environment is provided, then PR env will be default
  const env = config.env.configFile || "qa";

  return getConfigurationByFile(env);
}
