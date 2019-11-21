describe('CSS Colors Page', () => {
  beforeEach(() => {
    cy.log('Visiting http://localhost:3000/csscolors')
    cy.visit('/csscolors')
  })

  it('should have a title', () => {
    cy.get('h1').should('have.length', 1)
  })

  it('should have a link to return to the index page', () => {
    const cssColorsLink = cy.get('[data-test-id="nav--index"]')
    cssColorsLink.should('have.length', 1)

    cssColorsLink.click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/')
    })
  })
})
