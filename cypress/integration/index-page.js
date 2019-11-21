describe('Index page', () => {
  beforeEach(() => {
    cy.log('Visiting http://localhost:3000')
    cy.visit('/')
  })

  it('should have a link to the CSS colors project', () => {
    const cssColorsLink = cy.get('[data-test-id="nav--css-colors"]')
    cssColorsLink.should('have.length', 1)

    cssColorsLink.click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/csscolors')
    })
  })
})
