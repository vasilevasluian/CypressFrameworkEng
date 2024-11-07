/// <reference types="cypress" />

describe('extract text',() =>{
    it('assert with should and expect', ()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('input[id="login-button"]').then((loginButton)=>{
            expect(loginButton).to.have.class('submit-button btn_action')
        })


        cy.get('input[id="login-button"]').should('have.class', 'submit-button btn_action')
    })
})