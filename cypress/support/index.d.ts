declare namespace Cypress {
  interface Chainable {
    fillContactForm(contactData: {
      email: string;
      name: string;
      message: string;
    }): Chainable<void>;
  }
}
