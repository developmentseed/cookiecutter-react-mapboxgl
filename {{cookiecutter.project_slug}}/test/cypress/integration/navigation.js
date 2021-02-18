/// <reference types="cypress" />

import config from '../../__fixtures__/config.json'

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // These are examples and currently skipped. Use with your own project routes!

  it.skip('clicking the nav menu items leads to the respective pages', () => {
    cy.get('[data-cy=link-explore]').click()
    cy.location('pathname').should('include', 'explore')
    cy.get('h1').contains(config.country)

    cy.get('[data-cy=link-info]').click()
    cy.location('pathname').should('include', 'info')
    cy.get('h1').contains('The tool')

    cy.get('[data-cy=link-home]').click()
    cy.location('pathname').should('include', '')
    cy.get('h1').contains(config.siteName)

    cy.get('[data-cy=explore-button]').click()
    cy.location('pathname').should('include', 'explore')
    cy.get('h1').contains(config.country)

    cy.get('[data-cy=link-home]').click()
    cy.location('pathname').should('include', '')
    cy.get('h1').contains(config.siteName)

    cy.get('[data-cy=info-button]').click()
    cy.location('pathname').should('include', 'info')
    cy.get('h1').contains('The tool')
  })

  it.skip("going back or forward in the browser's history is possible", () => {
    // https://on.cypress.io/go
    cy.location('pathname').should('not.include', 'info')

    cy.get('[data-cy=link-info]').click()
    cy.location('pathname').should('include', 'info')

    cy.go('back')
    cy.location('pathname').should('not.include', 'info')

    cy.go('forward')
    cy.location('pathname').should('include', 'info')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'info')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'info')
  })

  it.skip('reloading the page maintains the url', () => {
    // https://on.cypress.io/reload

    cy.get('[data-cy=link-info]').click()
    cy.location('pathname').should('include', 'info')

    cy.reload()
    cy.location('pathname').should('include', 'info')

    // reload the page without using the cache
    cy.reload(true)
    cy.location('pathname').should('include', 'info')
  })

  it.skip('visiting a remote url directly loads the respective page', () => {
    // https://on.cypress.io/visit

    // Visit any sub-domain of your current domain

    // Pass options to the visit
    cy.visit('/info', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    })

    cy.location('pathname').should('include', 'info')
    cy.get('main').contains('about')
  })
})
