describe("Accessing Dashboard Page Without Authentication", () => {
  it("should redirect to the login page if user is not authenticated", () => {
    cy.visit("/dashboard");

    cy.url().should("include", "api/auth/signin");

    cy.get("button").should("contain.text", "Sign in with Google");
  });
});


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

