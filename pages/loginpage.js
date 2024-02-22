const { expect, test } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = "//input[@id='email1']";
    this.password = "//input[@id='password1']";
    this.submit = "//button[normalize-space()='Sign in']";
  }

  async loginToApplication(username, pass) {
    await this.page.fill(this.email, username);
    //Another way
    await this.page.locator(this.password).fill(pass);
    await this.page.locator(this.submit).click();
  }

  async verifyTheLoginPage() {
    await expect(this.page.locator(this.email)).toBeVisible();
  }
}

module.exports = LoginPage;
