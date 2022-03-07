 

/* describe('Verify search functionality', () => {
    it('check entering in Search field', () => {  
        cy.visit("https://kristallknuten.se/")
        // make sure we are on the home page 
        cy.contains('Välkommen till Kristallknuten');
     // get search field with the specific name check that search function works
        cy.get('input[name="s"]').type('Halsband{enter}');
        cy.url().should('include', '?s=Halsband');
        
    })
})  */

describe('Verify product page functionality', () => {
     it('check adding item to the cart', () => {  
        cy.visit("https://kristallknuten.se/smycken/halsband/halsband-akvamarin");
        cy.contains('Halsband Akvamarin').click();
        cy.get('[class = "btn product-btn-addcart btn-block qs-cart-submit qty-cart-submit btn-height-large"]').click()
        cy.url().should('include', 'halsband-akvamarin')
        
    //check deliting item from the cart' 
        cy.get('[class = "qs-cart-delete btn"]').click({force: true});
        cy.contains('Din varukorg är tom, men det behöver den inte vara.').should('exist')
    })
    })
