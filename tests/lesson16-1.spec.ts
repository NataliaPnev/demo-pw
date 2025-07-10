import {expect, Locator, test} from "@playwright/test";


test.beforeEach(async ({ page }) => {
    //await page.goto(process.env.BASE_URL);
    await page.goto('https://fe-delivery.tallinn-learning.ee/signin');
})

test('sing in button is disabled' , async ({ page }) => {
    const loginButton:Locator = page.getByRole('button', { name: 'Sign in' });
    const userName:Locator = page.locator("#username");
    const password:Locator = page.locator("#password");
    await userName.fill("John");
    await password.fill("123");
    await expect(loginButton).toBeDisabled();
});