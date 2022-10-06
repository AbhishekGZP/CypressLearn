describe('Launch and login', ()=>{

  beforeEach(() => {
    cy.visit('https://www.quizzop.com/')
  });

it('Checking  That User land on the the onboarding page', ()=>{
    cy.contains('begin').should('be.visible')
})

it('Answer First And Second onboarding question & Check that user Got the Lets Start Screen After that ', ()=>{
  cy.contains('Question 1').should('be.visible')  
  cy.get('.undefined > .px-10 > :nth-child(2)').click()
    cy.contains('Question 2').should('be.visible')
    cy.get('.undefined > .px-10 > :nth-child(3)').click()
    cy.contains('Play more quizzes and win more coins').should('be.visible')
})

it('Click on the Lets Start button after the Onboarding Question ', ()=>{
  cy.contains('Question 1').should('be.visible')
  cy.get('.undefined > .px-10 > :nth-child(2)').click()
  cy.contains('Question 2').should('be.visible')
  cy.get('.undefined > .px-10 > :nth-child(3)').click()
  cy.contains('Play more quizzes and win more coins').should('be.visible')
  cy.get('.px-20.text-center > .py-12').click()
  
})
})

