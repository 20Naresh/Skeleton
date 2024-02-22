const { expect, test } = require("@playwright/test");
const LoginPage = require("../pages/loginpage");
const HomePage = require("../pages/homepage");

const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))

test("Login into the application", async ({ page }) => 
{
  await page.goto("https://freelance-learn-automation.vercel.app/login");

  const loginpage = new LoginPage(page)
  await loginpage.loginToApplication(testdata.username, testdata.password)
 
  const homepage = new HomePage(page)
  
  await homepage.verifyTheHomePage()
  await homepage.logoutTheApplication()

  await loginpage.verifyTheLoginPage()
  

});
