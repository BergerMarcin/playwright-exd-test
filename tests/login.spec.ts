import { test, expect } from '@playwright/test';
import * as dotenv from "dotenv";

test.describe("Login page", () => {
  dotenv.config();
  test.skip(typeof process.env.LOG_URL === "undefined");
  try {
    new URL(process.env.LOG_URL);
  } catch (e) {
    console.error("\n\u001b[41mERROR. Wrong login url\u001b[40m");
    test.skip(true);
  }

  test('has redirected to login url', async ({ page }) => {
    await page.goto(process.env.LOG_URL);

    await expect(page).toHaveURL(/.*b2c_1a_jwt_signin\/oauth2\/v2.0\/authorize/);
    await expect(page).toHaveTitle(/Zoovu - AI Conversational Commerce with a Human Touch/);
    const heading = page.locator("h1.heading");
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText(/Sign in/);
  });

  test('log to the panel', async ({ page }) => {
    await page.goto(process.env.LOG_URL);

    const loginInput = page.getByPlaceholder('email address')
    await loginInput.type(process.env.LOGIN);
    await expect(loginInput).toHaveValue(process.env.LOGIN);

    const passwordInput = page.getByPlaceholder('password');
    await passwordInput.type(process.env.PASSWORD);
    await expect(passwordInput).toHaveValue(process.env.PASSWORD);

    const singInButton = page.getByRole('button', { name: 'Sign in' });
    await singInButton.click();

    await expect(page).toHaveURL(/https:\/\/qa10-admin.zoovu.com\/accounts/, { timeout: 10000 }); // NOTE: 10000ms to avoid flaky test
    await expect(page).toHaveTitle(/Admin - Zoovu Search Cloud/);
  });
});
