# demo-project-
Test Automation for https://kristallknuten.se/

Automation testing practice using Cypress

Functionality tests of UI:
1. Log in first with correct data, then with incorrect data
2. Test how the "search box" works  
3. Add item to the shopping cart
4. Remove items from the cart
5. Go to the cart and check if there is the product
6. Change the quantity 
7. Make a checkout

How automated tests were set up:

1) Search field:
Go to the homepage and:
• verify that you are on the home page
• get the search bar
• enter something, for ex. “halsband”
• press search
• see that you have ended up where you expect

2) Login function:
• Go to login page
• Check that email bar and password bar exist
• Verify that login function works with correct data
• Verify that login function does not work with incorrect data
Check that option “Forgot password” exist. Verify that the link works
Check that option “Create new account” exist. Verify that the link works

3) Acts with the product and cart
Go to the product page with necklaces and:
• verify that you are on the product page
• get the “köp” button for the certain item, press it
• verify that the item is in the cart

4) Delete the item from the cart

5) Check that Social media buttons
 