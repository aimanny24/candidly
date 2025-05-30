/// <reference types="cypress" />

describe('Validate navigation and modal interactions', () => {
  beforeEach(function () {
    cy.visit('/');
    cy.clearCookies();
    cy.clearLocalStorage();

    // Load contact data from fixture
    cy.fixture('contactData.json').then((data) => {
      this.contact = data;
    });
  });

  it('Test case: should be able to validate home and contact navigation, message form, and about modal', function () {
    cy.contains('Home').click();
    cy.url().should('eq', 'https://www.demoblaze.com/index.html');

    cy.get('a[href="#"]').contains('Contact').click();

    // Wait for modal to be visible instead of fixed time
    cy.get('#exampleModal').should('be.visible');

    // Use fixture data with custom command
    cy.fixture('contactData').then((data) => {
      cy.fillContactForm(data);
    });

    // Stub alert and click Send Message
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
    });

    cy.get('#exampleModal .btn-primary').click();

    cy.get('@alertStub').should('have.been.calledWith', 'Thanks for the message!!');

    cy.get('#exampleModal').should('not.be.visible');
  });
});
