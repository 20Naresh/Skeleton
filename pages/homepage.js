const { expect, test } = require("@playwright/test");

class HomePage {
  constructor(page) {
    this.page = page;
    this.menu = "//img[@alt='menu']";
    this.signout = "//button[normalize-space()='Sign out']";
  }

  async verifyTheHomePage() {
    await expect(this.page.locator(this.menu)).toBeVisible();
  }

  async logoutTheApplication() {
    await this.page.locator(this.menu).click();
    await this.page.locator(this.signout).click();
  }
}

module.exports = HomePage;
