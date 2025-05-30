/// <reference types="cypress" />

describe('Add Product to Cart and View Cart Details', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Test case: Add MacBook Pro product to the cart and validate cart contents', () => {

    cy.url().should('include', 'demoblaze.com');
    
    cy.contains('Laptops').click();
    
    cy.wait(5000)
    
    cy.get('.card-title a').contains('MacBook Pro').click();

    // Check price
    cy.get('.price-container').should('contain', '$1100');

    // Ensure Add to cart is visible
    cy.contains('Add to cart').should('be.visible');

    // Validate URL and product details
    cy.url().should('include', 'prod.html?idp_=15');
    cy.get('.price-container').should('contain', '$1100');
    cy.contains('Add to cart').should('be.visible');

    //Click Add to cart
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('addAlert');
    });

    cy.wait(2000)

    cy.contains('Add to cart').click();

    cy.get('@addAlert').should('have.been.calledWith', 'Product added');
    cy.url().should('include', 'prod.html?idp_=15');

    cy.contains('Cart').click();
    cy.url().should('include', 'cart.html');

    //Validate product exists
    cy.get('.success td').should('have.length.at.least', 4);

    // Validate cart product details
    cy.verifyProductDetails('MacBook Pro', '1100');

    // Validate total price matches product price
    cy.get('#totalp').should('contain', '1100');

    // Validate Place Order button
    cy.contains('Place Order').should('be.visible');
  });
});
