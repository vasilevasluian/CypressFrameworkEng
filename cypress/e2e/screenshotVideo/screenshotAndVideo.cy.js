/// <reference types="cypress" />

describe('add screenshots and video',() =>{
    it('navigate to page and make screenshots', ()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.screenshot('first page screen');
        cy.get('input[id="login-button"]').screenshot('login button').click();
        cy.screenshot();
    })

    it('add an item to cart', ()=>{
        cy.visit('https://www.saucedemo.com/');
       cy.get('[id="user-name"]').type('standard_user')
       cy.get('[data-test="password"]').type('secret_sauce');
       cy.get('#login-button').click();
       cy.get('[data-test="title"]').should('have.text', 'Products');
       cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
       cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').should('exist');
       cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('not.exist')
       cy.get('[data-test="shopping-cart-link"]').click();
       cy.get('[data-test="inventory-item-name"]').then((itemFromCart)=>{
        const itemNameText = itemFromCart.text();
        expect(itemNameText).equal('Test.allTheThings() T-Shirt (Red)')
       })

    })

    it.only('add two items to the cart', ()=>{
        cy.visit('https://www.saucedemo.com/');
      

        cy.get('[id="user-name"]').type('standard_user');
        cy.get('[name="password"]').type('secret_sauce');
        cy.get('[type="submit"]').click();
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

        cy.get('[data-test="shopping-cart-badge"]').then((shoppingCartIcon)=>{
            const numberOfItemsInTheCart = shoppingCartIcon.text();
            expect(numberOfItemsInTheCart).equal('2');
        });

        cy.get('.bm-burger-button').click();
        cy.get('[data-test="reset-sidebar-link"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist');



        cy.get('[data-test="product-sort-container"]').select('Price (low to high)');

        cy.reload();
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist');

    })
})