describe('Sorting section behavior', () => {
  it('Checking that first input for sorting section is checked by default and second one is disabled', () => {

    // Opening starting page.
    cy.visit('http://localhost:8080/')

    cy.get('.sort-filters input#release').should('be.checked');
    cy.get('.sort-filters input#rating').should('not.be.checked');
  })

  it('Checking that after clicking on "rating" input it is "checked" and first on is "unchecked"', () => {

    // Opening starting page.
    cy.visit('http://localhost:8080/')

    // Forcing click on the #rating, as cypress doesn't expect any clicks on display: none elements (force click is needed).
    cy.get('.sort-filters input#rating').click({force: true}).should('be.checked');
    cy.get('.sort-filters input#release').should('not.be.checked');
  })
})