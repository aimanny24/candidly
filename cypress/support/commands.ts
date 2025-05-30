// cypress/support/commands.ts

// Declare custom types so TypeScript understands your custom commands
declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
      logout(): Chainable<void>;
      fillContactForm(contactData: { email: string; name: string; message: string }): Chainable<void>;
      verifyProductDetails(title: string, price: string): Chainable<void>;

    }
  }
}

// Define custom Cypress commands

Cypress.Commands.add('login', () => {
  cy.visit('/login'); // Adjust path if needed
});

Cypress.Commands.add('logout', () => {
  cy.visit('/logout'); // Adjust as needed
});

Cypress.Commands.add('fillContactForm', (contactData) => {
  cy.get('#recipient-email').type(contactData.email);
  cy.get('#recipient-name').type(contactData.name);
  cy.get('#message-text').type(contactData.message);
});

Cypress.Commands.add('verifyProductDetails', (title: string, price: string) => {
  cy.get('.success td').eq(0).find('img').should('be.visible');             
  cy.get('.success td').eq(1).should('contain', title);                    
  cy.get('.success td').eq(2).should('contain', price);                    
  cy.get('.success td').eq(3).contains('Delete').should('exist');         
});



export {}; // Ensures the file is treated as a module
