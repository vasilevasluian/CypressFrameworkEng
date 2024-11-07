/// <reference types="cypress" />

// beforeEach(()=>{
//     cy.visit('https://www.saucedemo.com/');
      
//     cy.get('[id="user-name"]').type('standard_user');
//     cy.get('[name="password"]').type('secret_sauce');
//     cy.get('[type="submit"]').click();
//     cy.get('[data-test="title"]').should('have.text', 'Products');

// })


describe('practice',() =>{

    /* 
    Navigate to https://www.saucedemo.com/
    Login
    Assert that we are on the main page
    Add the last product and assert that button become Remove
    Go to Cart page and verify if the item was added.
    */
    it.skip('add an item to cart', ()=>{

        cy.get('button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('.shopping_cart_link').click();

        cy.get('[data-test="inventory-item-name"]').then((itemFromCart)=>{

            const itemTextName = itemFromCart.text();
            expect(itemTextName).equal('Test.allTheThings() T-Shirt (Red)')
        })
    })


       /* 
    Navigate to https://www.saucedemo.com/
    Login
    Add firt two item to the cart
    Assert that cart icon is 2
    Click on the Reset App 
    Check that icon number dissapread 
    Sort the items from low to high
    Reload the page
    Check again the icon number
    */

    it.skip('add two items to the cart', ()=>{
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('[name="add-to-cart-sauce-labs-bike-light"]').click();

        cy.get('[class="shopping_cart_badge"]').then((shoppingCartIcon)=>{
            const numberOfItemsInTheCart = shoppingCartIcon.text();

            expect(numberOfItemsInTheCart).equal('2');
        });


        cy.get('[data-test="open-menu"]').click({force: true});
        cy.contains('Reset App State').click({force:true});

        cy.get('[class="shopping_cart_badge"]').should('not.exist');
        cy.get('.product_sort_container').select('Price (low to high)');

        cy.reload();
        cy.get('[class="shopping_cart_badge"]').should('not.exist');

    })


    it.skip('login with locked out user', ()=>{


        cy.visit('https://www.saucedemo.com/');
        cy.get('[id="user-name"]').type('locked_out_user');

        cy.get('#password').type('secret_sauce');
        cy.get('[id="login-button"]').click();
        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible');
    })

    it('easy one', ()=>{

        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    })
 
})