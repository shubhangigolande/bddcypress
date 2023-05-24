import { Given, Then, When , And} from "cypress-cucumber-preprocessor/steps";


Given('I open sauce demo Url',()=>{
    cy.visit('https://www.saucedemo.com/')
})


And('Fill the Username',()=>{
    cy.get('#user-name').type('standard_user')
})

Then('Fill the password',()=>{
    cy.get('#password').type('secret_sauce')
})

Then('Click on login Button',()=>{
    cy.get('#login-button').click()
})

And('Validate sucessful login.',()=>{
    cy.get('.header_secondary_container > span').should('be.visible').and('have.text','Products')
})




//invalid password
Given('I open sauce demo Url.',()=>{
    cy.visit('https://www.saucedemo.com/')
})
Then('Fill the Username.',()=>{
    cy.get('#user-name').type('standard')
})
Then('Fill the password.',()=>{
    cy.get('#password').type('secret')
})
When('Click on login Button.',()=>{
    cy.get('#login-button').click()
})
 And('invalidate sucessful login.',()=>{
cy.get('.error-message-container.error').should('contain','this service')
 })