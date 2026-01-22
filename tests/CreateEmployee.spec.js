import { test, expect } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import { Homepage } from '../PageObjects/Homepage';

let loginpage;
let homepage;

test.beforeEach(async ({ page }) => {
    loginpage = new LoginPage(page);
    homepage = new Homepage(page);
    await loginpage.valid_login();
});

test.only('verify that able to add account through quick action', async ({ page }) => {
    await homepage.add_account_quick.click();
    await homepage.account_name_txt_box.fill("Savings account");
    page.pause();
    await homepage.accout_type_dropdown;
});
