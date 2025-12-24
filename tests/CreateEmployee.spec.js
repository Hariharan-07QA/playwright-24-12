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

test('verify that able to add account through quick action', async ({ page }) => {
    // your test here
});
