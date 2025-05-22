import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { AdminPage } from "../pages/AdminPage";
import { config } from "../utils/env";

test.describe("Search User Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(config.username, config.password);
  });

  test('Search for valid username "Admin"', async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.navigateToUserManagement();
    await adminPage.searchUser("Admin");

    const rowsLocator = page.locator("div.oxd-table-card");
    // Wait for at least one result to appear (max 10 seconds)
    await expect(rowsLocator.first()).toBeVisible({ timeout: 10000 });

    await adminPage.verifySearchResult("Admin");
  });

  test("Search with non-existing username", async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.navigateToUserManagement();
    await adminPage.searchUser("xyzNotExist");
    await expect(page.locator(".orangehrm-horizontal-padding")).toContainText(
      "No Records Found"
    );
  });

  test("Search with special characters", async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.navigateToUserManagement();
    await adminPage.searchUser("!@#$%^&*");
    await expect(page.locator(".orangehrm-horizontal-padding")).toContainText(
      "No Records Found"
    );
  });

  test("Search with empty input returns all users", async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.navigateToUserManagement();
    await adminPage.searchUser("");

    const rowsLocator = page.locator("div.oxd-table-card");

    // Wait for at least one result to appear (max 10 seconds)
    await expect(rowsLocator.first()).toBeVisible({ timeout: 10000 });

    const count = await rowsLocator.count();
    expect(count).toBeGreaterThan(0);
  });
});
