import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

//TC_01
Given('open video in browser', () => {
    cy.visit('./video-v3-default-not-muted.html')
})

Then('the template is loaded the video is visible', () => {
    cy.get('#video-player').should("be.visible")
})

//TC_02
Given('wait for 5 seconds', () => {
    cy.visit('./video-v3-default-not-muted.html')
    cy.window().then(win => {
        cy.spy(win.console, 'log').as('spyConsoleLog');
      })
    cy.wait(5000)    
})

When('click on Skip button', () => {
    cy.get('.skip-button-img').should("be.visible").click() 
})

Then('hubContainer is visible', () => {
    cy.get('#hud-cta').should("be.visible")
})

Then('Chartboost.Utils.click was NOT called', () => {
    cy.get('@spyConsoleLog').should('not.be.calledWith', 'Chartboost.Utils.click')
})

//TC_3
Given('open endcard view', () => {
    cy.visit('./video-v3-default-not-muted.html')
    cy.window().then(win => {
        cy.spy(win.console, 'log').as('spyConsoleLog');
      })
    cy.wait(5000).get('.skip-button-img').click() 
})

When('click on hubContainer', () => {
    cy.get('#hud-cta').click()    
})

Then('Chartboost.Utils.click was called', () => {
    cy.get('@spyConsoleLog').should('be.calledWith', 'Chartboost.Utils.click')
})
  
    




