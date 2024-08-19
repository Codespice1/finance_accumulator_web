Cypress.Commands.add("stubGoogleLogin", () => {
  Cypress.log({
    displayName: "STUB GOOGLE LOGIN",
    message: [`🔐 Authenticating`],
  });

  cy.intercept("/api/auth/session", {fixture: "session.json"}).as("session");

  cy.setCookie("next-auth.session-token", Cypress.env("NEXTAUTH_JWT_SECRET"));
  cy.visit("/dashboard");
  cy.wait("@session");
});
