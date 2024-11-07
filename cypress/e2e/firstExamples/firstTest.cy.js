/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the Cypress website and checks the title', function() {
        cy.visit('https://example.cypress.io/');
        cy.title().should('eq', 'Cypress.io: Kitchen Sink 2');
    });

});
