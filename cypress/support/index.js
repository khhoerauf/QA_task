{
    beforeEach(function () {
        cy.visit('./video-v3-default-not-muted.html')
        cy.window().then(win => {
            cy.spy(win.console, 'log').as('spyConsoleLog');
          })
        })
}