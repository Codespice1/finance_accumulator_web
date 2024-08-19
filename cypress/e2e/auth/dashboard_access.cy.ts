describe("Accessing Dashboard Page With Authentication", () => {
  beforeEach(() => {
    cy.stubGoogleLogin();
  });

  it('Should display dashboard', () => {
    cy.get("[data-cy='authenticated']")
    .should("exist")
    .then(() => {
      cy.log("Cypress login successful");
    });
  })
});

