/// <reference types="cypress" />

describe('Interacting with web elements', function() {

    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/actions');
    })

 
    it('get and type', function() {
        cy.get('#email1').type('lesson text')
    });


    it('contains and click', function() {
        cy.contains('Click to toggle popover').click();
        cy.contains('This popover shows up on click').should('be.visible')
    });

    it('find and click', ()=>{
        cy.get('.action-labels').find('span').eq(1).click();
        cy.get('div[role="tooltip"]').should('have.text', 'clicked');
    })
    

    it('check and unckeck', ()=>{

        //radio button
        cy.get('#optionsRadios1').check();

        cy.get('[value="checkbox1"]').first().check();
        cy.get('[value="checkbox1"]').first().uncheck();
    })

    it('select', ()=>{
        cy.get('.action-select').select('apples');
    })


  
    

});
