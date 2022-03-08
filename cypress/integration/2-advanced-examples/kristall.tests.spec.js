 

   describe('Verify login functionality', () => {
        beforeEach(() => {
            cy.visit('https://kristallknuten.se/customer/login')    
        })

     it('login functionality works correctly', () => {

     //	Verify that login function works with correct data
            cy.get('input[name = "email"]').type('svit.volkova@gmail.com');
            cy.get('input[name = "password"]').type('Stenar22');
            cy.get('input[name = "login"]').click() 

          // incorrect login should display massage
           cy.get('input[name = "email"]').type('svit.volkova@gmail.com');
           cy.get('input[name = "password"]').type('Stenar');
           cy.get('input[name = "login"]').click();
           cy.contains('Felaktig e-postadress och/eller lösenord').should('exist') 
            
    
        // check that option “Forgot password” exist
           cy.get('[class = "customerarea_forgot_link"]').click();
           cy.contains('Återställ lösenord').should('exist') 
                        
        // check that option “Create new account” exist 
            cy.get('[class = "customerarea_signup_link btn btn-inverse"]').click();
            cy.url().should('include', 'register')
})
}) 