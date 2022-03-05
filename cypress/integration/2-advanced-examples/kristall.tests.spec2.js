/// <reference types = "cypress"/>

 describe('Verify search functionality', () => {
    it('check entering in Search field', () => {  
        cy.visit("https://kristallknuten.se/")
        // make sure we are on the home page 
        cy.contains('Välkommen till Kristallknuten');
     // get search field with the specific name check that search function works
        cy.get('input[name="s"]').type('Halsband{enter}');
        cy.url().should('include', '?s=Halsband');
        
    })
})  

describe('Verify product page functionality', () => {
    it('check adding item to the cart', () => {  
        cy.visit("https://kristallknuten.se/shop/search?s=Halsband");
        cy.contains('Halsband Akvamarin').click();
        cy.get('[class = "btn product-btn-addcart btn-block qs-cart-submit qty-cart-submit btn-height-large"]').click();
      
    })
})