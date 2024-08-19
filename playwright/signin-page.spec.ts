import {test, expect} from "@playwright/test";

test.beforeEach(async ({page}) => {
  await page.goto("http://localhost:3000/api/auth/signin");
});


test.describe('Sign-in Page', () => {
  test('should have the correct URL and social login buttons', async ({ page }) => {
    // Check for the presence of social login buttons
    const githubButton = page.locator('text=Sign in with Github');
    const googleButton = page.locator('text=Sign in with Google');

    await expect(githubButton).toBeVisible();
    await expect(googleButton).toBeVisible();

    // Ensure that the buttons are clickable
    await expect(githubButton).toBeEnabled();
    await expect(googleButton).toBeEnabled();

    // Optionally, click the buttons to ensure they trigger the expected behavior
    await githubButton.click();
    // Assuming it redirects to GitHub's OAuth, we can check if the URL changes
    await page.waitForTimeout(1000); // Wait for the page to potentially navigate
    expect(page.url()).toContain('github.com');

    // Go back to the sign-in page for Google test
    await page.goto('http://localhost:3000/api/auth/signin');

    await googleButton.click();
    // Assuming it redirects to Google's OAuth, we can check if the URL changes
    await page.waitForTimeout(1000); // Wait for the page to potentially navigate
    expect(page.url()).toContain('accounts.google.com');
  });
});
