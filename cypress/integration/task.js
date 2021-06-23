const skipButton = '.skip-button-img'
const videoContainer = '#video-player'
const hudContainer = '#hud-container'
const closeButton = '#close-button'

describe('Video test', () => {
    beforeEach(() => {
        cy.visit('./video-v3-default-not-muted.html', {onBeforeLog(win) {
            cy.spy(win.console, 'log').as('consoleLog')
        }});
    })

    it('TC_01 The template loads and the video is visible', () => {   
       
       cy.get(videoContainer).should("be.visible")
    })

    it('TC_02 Skip button', () => {
        cy.get(skipButton).should("not.be.visible")
        cy.wait(5000)
        cy.get(skipButton).should("be.visible") 
        cy.log("The Skip button should be visible 5 seconds in the video")

        cy.get(skipButton).click()
        cy.get(hudContainer).should("be.visible")
        cy.log("A click on the skip button takes to the endcard")
    })
  
    //toDo
    it('TC_03 Close button', () => {      
        
        cy.wait(5000)
        cy.get(skipButton).should("be.visible").click();  
        cy.get(closeButton).should("be.visible").click()
        //error: You have not aliased anything yet.
        cy.get('@consoleLog').should('becalledWith','mraid.close')
   
    })

    //toDo
    it('TC_04 Video validation', () => {
        cy.task('log', "Chartboost.EventHandler.handleNativeEvent('onBackground');")
        //video is not pause 
        cy.get('#play-button').should("be.visible")
    })
})
