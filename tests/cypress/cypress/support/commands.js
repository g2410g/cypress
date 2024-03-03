//
// https://on.cypress.io/custom-commands
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })

// Allow us to set a username and password if needed.
Cypress.Commands.overwrite('visit', (orig, url, options) => {
  options = options || {};
  if (Cypress.env('username') !== undefined) {
    options.auth = {
      username: Cypress.env('username'),
      password: Cypress.env('password'),
    };
  }
  return orig(url, options);
});

Cypress.Commands.overwrite('viewport', (orig, preset, orientation) => {
  // These are based on the DDS breakpoints.
  const newPresets = {
    xl: [Cypress.config('viewportWidth'), Cypress.config('viewportHeight')],
    lg: [1000, 800],
    md: [800, 800],
    sm: [600, 800],
    xs: [500, 800],
  };

  if (newPresets[preset] !== undefined) {
    return cy.viewport(newPresets[preset][0], newPresets[preset][1]);
  }
  return orig(preset, orientation);
});

Cypress.Commands.add('getPseudoElementProp', { prevSubject: true }, (subject, pseudo, prop) => window.getComputedStyle(subject[0], pseudo)[prop]);

Cypress.Commands.add('isInViewport', element => {
  cy.get(element).then($el => {
    const bottom = Cypress.$(cy.state('window')).height();
    const rect = $el[0].getBoundingClientRect();

    expect(rect.top).not.to.be.greaterThan(bottom);
    expect(rect.bottom).not.to.be.greaterThan(bottom);
    expect(rect.top).not.to.be.greaterThan(bottom);
    expect(rect.bottom).not.to.be.greaterThan(bottom);
  });
});
