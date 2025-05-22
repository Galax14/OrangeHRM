import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { config } from "../utils/env";

test.describe("Login Tests", () => {
  test(" Valid login with correct credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(config.username, config.password);
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator("h6")).toHaveText("Dashboard");
  });

  test(" Login fails with invalid password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(config.username, "wrongpass");
    await expect(page.locator(".oxd-alert-content-text")).toContainText(
      "Invalid credentials"
    );
  });

  test(" Login fails with empty username", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("", config.password);
    await expect(page.locator(".oxd-input-group > .oxd-text")).toContainText(
      "Required"
    );
  });

  test(" Login fails with empty password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(config.username, "");
    await expect(page.locator(".oxd-input-group > .oxd-text")).toContainText(
      "Required"
    );
  });
});
