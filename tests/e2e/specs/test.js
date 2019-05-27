// https://docs.cypress.io/api/introduction/api.html

describe('Navigation Test', () => {
  it('home', () => {
    cy.visit('/');
    cy.screenshot('home');
    cy.get('#home').click();
    cy.contains('home');
  });
  it('about', () => {
    cy.visit('/');
    cy.screenshot('about');
    cy.get('#about').click();
    cy.contains('About');
  });
});
