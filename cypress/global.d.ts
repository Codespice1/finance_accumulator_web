declare namespace Cypress {
  // noinspection JSUnusedGlobalSymbols
  interface Chainable {
    /**
     * Logs in via the next-auth session cookie for the JWT strategy ONLY!
     */
    stubGoogleLogin(): Chainable<any>;
  }
}
