// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';

beforeEach(() => {
  cy.intercept({
    method: 'GET',
    pathname: '**/sajari-response-*.js',
  }, {
    body: '// Sajari is throwing an error which affects Cypress tests',
    statusCode: 200,
  });
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
