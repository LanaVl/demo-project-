 

   describe('login functionality', () => {

    it('Verify that login functionality works correctly with correct data', () => {
            cy.visit('https://kristallknuten.se/customer/login'); 
            cy.get('input[name = "email"]').type('svit.volkova@gmail.com');
            cy.get('input[name = "password"]').type('Stenar22');
            cy.get('input[name = "login"]').click() 
         }) 
      }) 

   describe('incorrect login', () => {

      it('verify that the incorrect login displays a massage', () => {  
           cy.visit('https://kristallknuten.se/customer/login');  
           cy.get('input[name = "email"]').type('svit.volkova@gmail.com');
           cy.get('input[name = "password"]').type('Stenar');
           cy.get('input[name = "login"]').click();
           cy.contains('Felaktig e-postadress och/eller lösenord').should('exist') 
         })       
      }) 
    
   describe('Option “Forgot password', () => {
         it('check that option “Forgot password” works', () => {   
           cy.visit('https://kristallknuten.se/customer/login'); 
           cy.get('[class = "customerarea_forgot_link"]').click();
           cy.contains('Återställ lösenord').should('exist') 
         })  
      })      
   describe('Option “Create new account', () => {                    
      it('check that option “Create new account” works properly', () => {  
            cy.visit('https://kristallknuten.se/customer/login');
            cy.get('[class = "customerarea_signup_link btn btn-inverse"]').click();
            cy.url().should('include', 'register')
      
          }) 
      })

 