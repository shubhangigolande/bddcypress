import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'

// fetch the url
Given('User is on Login page',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

// enter uses Name
When('User enters {string}',(Username)=>{
    cy.get('[name="username"]').type(Username)
})


//enter password
Then('User enters pass {string}',(password)=>{
    cy.get('[name="password"]').type(password)
})

// enter login button
And('click on login Button',()=>{
    cy.get('[type="submit"]').click()
})

//enter mob no
Then('Print the Contact {string}',(Mobile_No)=>{
    cy.log(Mobile_No)
})


// validate the assertion 
Then('Validate User in on dashboard',()=>{
    cy.get('[alt="client brand banner"]').should('be.visible')
})