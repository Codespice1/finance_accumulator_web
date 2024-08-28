describe("Redirection to Sign-In Page", () => {
  it("should redirect unauthenticated user from root url to sign-in page", () => {
    cy.visit("/");

    cy.url().should("include", "/api/auth/signin");

    cy.get("button").should("contain.text", "Sign in with Google");
  });
});
