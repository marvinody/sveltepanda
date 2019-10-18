/// <reference types="Cypress" />
describe('Authentication', () => {
  before(() => {
    cy.exec('npm run seed')
  });

  it('can register as a new user', () => {
    cy.visit('/register')
    cy.get('input[name=username]').type('manny')
    cy.get('input[name=password]').type('123{enter}')
    cy.url().should('match', /https?:\/\/\w+(:\d+)?\/$/)
  });

  it('can login as an existing user', () => {
    cy.visit('/login')
    cy.get('input[name=username]').type('marvinody')
    cy.get('input[name=password]').type('123{enter}')
    cy.url().should('match', /https?:\/\/\w+(:\d+)?\/$/)
  })


});
