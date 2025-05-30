/// <reference types="cypress" />

describe('User Login', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should log in with valid credentials', () => {
    cy.visit('https://www.demoblaze.com');

    cy.get('#login2').click();
    cy.get('#logInModal').should('be.visible');

    // Use env variables for credentials
    cy.get('#loginusername').clear().type(Cypress.env('username'));
    cy.get('#loginpassword').clear().type(Cypress.env('password'));

    cy.wait(500); // Give modal time to settle

    cy.get('button[onclick="logIn()"]').should('be.visible').click({ force: true });

    cy.contains('Welcome mannyh', { timeout: 10000 }).should('be.visible');
    cy.get('#logout2').should('be.visible');
  });
});
