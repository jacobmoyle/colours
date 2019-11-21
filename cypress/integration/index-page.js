describe('Index page', () => {
  beforeEach(() => {
    cy.log('Visiting http://localhost:3000');
    cy.visit('/');
  });

  it('should have a logo', () => {
    cy.get('[data-test-id="nav--brand_logo"]').should('have.length', 1);
  });
});
