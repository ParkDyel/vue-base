// https://docs.cypress.io/api/introduction/api.html

describe('Account Test', () => {
  it('login', () => {
    const email = 'dyel@gmail.com';
    const pwd = 'password123';
    const name = 'dyel';

    const serverOption = {
      delay: 1000,
      status: 200,
    };
    cy.server(serverOption);

    cy.fixture('users/commonUser').as('userJson');
    cy.route('POST', '/login', '@userJson').as('postLogin');

    cy.visit('/');
    cy.get('#account')
      .should('contain', 'account_box')
      .click();
    cy.get('.v-dialog .form--id input').type(email);
    cy.get('.v-dialog .form--pwd input').type(pwd);
    cy.get('#btnSave').click();

    cy.wait('@postLogin');

    cy.get('#navi .title').click();
    cy.get('#navi .title').should('contain', name);

    cy.clearLocalStorage();
    cy.reload(true);
  });

  it('logOut', () => {
    const email = 'dyel@gmail.com';
    const pwd = 'password123';
    const name = 'dyel';

    const serverOption = {
      delay: 1000,
      status: 200,
    };
    cy.server(serverOption);

    cy.fixture('users/commonUser').as('userJson');
    cy.route('POST', '/login', '@userJson').as('postLogin');

    cy.visit('/');
    cy.get('#account')
      .should('contain', 'account_box')
      .click();
    cy.get('.v-dialog .form--id input').type(email);
    cy.get('.v-dialog .form--pwd input').type(pwd);
    cy.get('#btnSave').click();

    cy.wait('@postLogin');

    cy.get('#navi .title').click();
    cy.get('#navi .title').should('contain', name);

    cy.get('#account')
      .should('contain', 'logout')
      .click();

    cy.get('#navi .title').click();
    cy.get('#navi .title').should('not.contain', name);
  });

  it('failed Login', () => {
    const email = 'dyel@gmail.com';
    const pwd = 'password123';

    const serverOption = {
      delay: 1000,
      status: 200,
    };
    cy.server(serverOption);

    cy.fixture('users/fail').as('userJson');
    cy.route('POST', '/login', '@userJson').as('postLogin');

    cy.visit('/');
    cy.get('#account')
      .should('contain', 'account_box')
      .click();
    cy.get('.v-dialog .form--id input').type(email);
    cy.get('.v-dialog .form--pwd input').type(pwd);
    cy.get('#btnSave').click();

    cy.wait('@postLogin');

    cy.get('.v-dialog').should('contain', 'Failed Login');
  });
});
