/// <reference types="cypress" />

describe('extract text',() =>{

    it('extract text from web element', ()=>{

        cy.visit('https://www.saucedemo.com/');
        cy.get('.login_logo').then((logoObject)=>{
            const logoText = logoObject.text();
            expect(logoText).equal('Swag Labs');
        })

        cy.get('.login_logo').should('have.text', 'Swag Labs');
    })
})