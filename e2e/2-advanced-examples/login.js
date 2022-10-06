describe('Launch and login', ()=>{

    it('Launch application', ()=>{

        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform')
        cy.contains('Platform').click()
        cy.url().should('include', '/Platform')


})
})