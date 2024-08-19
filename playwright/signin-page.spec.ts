import {test, expect} from "@playwright/test";


test.describe("Sign-in Page", () => {
  test("should have the correct URL and social login buttons", async ({page}) => {
    await page.goto(`/api/auth/signin`);
    // Check for the presence of social login buttons
    const githubButton = page.locator("text=Sign in with Github");
    const googleButton = page.locator("text=Sign in with Google");

    await expect(githubButton).toBeVisible();
    await expect(googleButton).toBeVisible();

    // Ensure that the buttons are clickable
    await expect(githubButton).toBeEnabled();
    await expect(googleButton).toBeEnabled();

  });
});
