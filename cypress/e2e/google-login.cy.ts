// default set-up from next-auth documentation. needs some fixes

describe("Login page", () => {
  before(() => {
    cy.log(`Visiting login page`);
    cy.visit("http://localhost:3000");
  });

  it("Login with Google", () => {
    const username: string = Cypress.env("GOOGLE_USER");
    const password: string = Cypress.env("GOOGLE_PW");
    const loginUrl: string = Cypress.env("SITE_NAME");
    const cookieName: string = Cypress.env("COOKIE_NAME");

    const socialLoginOptions = {
      username,
      password,
      loginUrl,
      headless: true,
      logs: true,
      isPopup: true,
      loginSelector: `a[href="${Cypress.env("SITE_NAME")}/api/auth/signin/google"]`,
      postLoginSelector: ".test-stripe",
    };

    return cy.task("GoogleSocialLogin", socialLoginOptions).then((result: any) => {
      const {cookies} = result;

      cy.clearCookies();

      const cookie = cookies.filter((cookie: any) => cookie.name === cookieName).pop();
      if (cookie) {
        cy.setCookie(cookie.name, cookie.value, {
          domain: cookie.domain,
          expiry: cookie.expires,
          httpOnly: cookie.httpOnly,
          path: cookie.path,
          secure: cookie.secure,
        });

        // remove the two lines below if you need to stay logged in
        // for your remaining tests
        cy.visit("/api/auth/signout");
        cy.get("form").submit();
      }
    });
  });
});
