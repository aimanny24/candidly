![Cypress Tests](https://github.com/<your-username>/<your-repo>/actions/workflows/cypress.yml/badge.svg)

# Cypress E2E Test Suite - Demoblaze Sample Site

This repository contains an end-to-end (E2E) test suite using **Cypress** with **TypeScript** for automated UI testing on the [Demoblaze demo site](https://www.demoblaze.com).

## Project Structure

cypress-e2e-demoblaze/
├── cypress/
│ ├── e2e/ # Test specs (e.g., login, cart, nav)
│ ├── fixtures/ # Test data (e.g., contactData.json)
│ ├── support/
│ │ ├── commands.ts # Custom Cypress commands
│ │ └── e2e.ts # Cypress support file
├── cypress.config.ts # Cypress configuration file
├── cypress.env.json # Environment variables (e.g., credentials)
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript compiler config
└── README.md # Project documentation


## Features Covered

- User login with valid credentials
- Product browsing and detail validation
- Add product to cart and view cart
- Contact form and modal interactions
- Custom reusable Cypress commands

## Getting Started

### 1. Install dependencies

```bash
npm install


2. Add credentials to cypress.env.json

{
  "username": "your-username",
  "password": "your-password"
}

3. Run Cypress Test Runner (UI)
npx cypress open

4. Run all tests from CLI
npx cypress run


Custom Commands
cy.login()

cy.logout()

cy.fillContactForm()

cy.verifyProductDetails()
