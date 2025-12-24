import{test,expect}from'@playwright/test'
import { LoginPage } from '../PageObjects/LoginPage'
import { Homepage } from '../PageObjects/Homepage'
const dataset=JSON.parse(JSON.stringify(require('../TestData/LoginTestData.json')))
let loginPage;
let homepage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  homepage = new Homepage(page);
});

test(`Login Test ${dataset.cred[0].useCase}`,async({page})=>{
    await page.goto(dataset.base_url)
    await loginPage.login(dataset.cred[0].username,dataset.cred[0].password)
    await expect(homepage.dashboard_btn).toBeVisible();
})


test(`Login Test ${dataset.cred[1].useCase}`,async({page})=>{
    await page.goto(dataset.base_url)
    await loginPage.login(dataset.cred[1].username,dataset.cred[1].password)
    expect(await loginPage.error_msg.textContent()).toContain('Invalid username or password');
})

