import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I visit the {string} url', (url) => {
  cy.visit(url);
});

Then('I should see element {string} with text {string}', (element, text) => {
  cy.get(element).should('contain', text);
});

Then('I should see element {string}', (element) => {
  cy.get(element).should('be.visible');
});

Given('I login using {string}', (user) => {
  cy.visit('/user/login');
  cy.get('#edit-name').type(user);
  cy.get('#edit-pass').type(user);
  cy.get('#edit-submit').click();
});
