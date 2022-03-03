
/// <reference types = "cypress"/>

describe('Test for searching box', () => {
    it('verify search functionality', () => {  
        cy.visit("https://kristallknuten.se/")
        // make sure we are on the home page 
        cy.contains('Välkommen till Kristallknuten');
     //get search field with the specific class name
        cy.get("[class='form-control pl-3 border-0 mobile-search']");
     
     it("to check entering in Search field", () => {
        cy.get('input[type="text"]').type("Halsband").should('have.value', 'Halsband');
        cy.contains('Search').click()        
    })
})
    })

    describe('Verify login functionality', () => {
        beforeEach(() => {
            cy.visit('https://kristallknuten.se/customer/login')
        })
    
       it('login functionality works correctly', () => {
            //	Verify that login function works with correct data
           
         // incorrect login should display massage
            cy.get("[name = 'email']").type('svit.volkova@gmail.com');
            cy.get("[name = 'password']").type('Stenar');
            cy.get("[name = 'login']").click();
    
            cy.contains('Felaktig e-postadress och/eller lösenord').should('exist')
    
    
        // option “Forgot password” exist' 
            cy.get("[class = 'customerarea_forgot_link']").click();
            cy.contains('Återställ lösenord').should('exist')
    
    })
    })