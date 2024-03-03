import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit the {string} url', (url) => {
  cy.visit(url);
});

Then('I should see element {string} with text {string}', (element, text) => {
  cy.get(element).should('contain', text);
});
