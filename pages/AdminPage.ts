import { Page, expect } from "@playwright/test";

export class AdminPage {
  constructor(readonly page: Page) {}

  async navigateToUserManagement() {
    await this.page.getByRole("link", { name: "Admin" }).click();
  }

  async searchUser(username: string) {
    await this.page.getByRole("textbox").nth(1).fill(username);
    await this.page.getByRole("button", { name: "Search" }).click();
  }

  async verifySearchResult(username: string) {
    await expect(this.page.locator("div.oxd-table-card")).toContainText(
      username
    );
  }
}
