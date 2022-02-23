
/// <reference types = "cypress"/>

describe('The first test: verify search functionality', () => {
    it('verify search functionality', () => {  
        cy.visit("https://kristallknuten.se/")
        // make sure we are on the home page 
        cy.contains('Välkommen till Kristallknuten');
     //get search field with the specific class name
        cy.get("[class='form-control pl-3 border-0 mobile-search']");
     
     it("To check entering in Search field", () => {
        cy.get('input[type="text"]').type("Halsband").should('have.value', 'Halsband');
        cy.contains('Search').click() 
        
    })
})

 
 
    })
  