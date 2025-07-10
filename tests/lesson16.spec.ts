import {expect, test} from "@playwright/test";


test.beforeEach(async ({ page }) => {
    const path = require('path');
    const filePath = `file://${path.resolve('src/order.html' )}`;
    await page.goto(filePath);
})
test('button disabled initially' , async ({ page }) => {
const orderButton = page.getByTestId("submit-order");
await expect(orderButton).toBeDisabled();
});
test('button enabled after filling correct data', async ({ page }) => {
const orderButton = page.getByTestId("submit-order");
const userName = page.getByTestId("username");
const eMail = page.getByTestId("email");
await userName.fill("John");
await eMail.fill("test@test.ru");
await expect(orderButton).toBeEnabled();
});
test('popup is visible', async ({ page }) => {
    const orderButton = page.getByTestId("submit-order");
    const userName = page.getByTestId("username");
    const eMail = page.getByTestId("email");
    const popupMessage = page.locator('#popup-message');
    await userName.fill("John");
    await eMail.fill("test@test.ru");
    await orderButton.click();

    await expect(popupMessage).toBeVisible();
    await expect(popupMessage).toHaveText("OK");
});

test('button disabled after filling incorrect email', async ({ page }) => {
    const orderButton = page.getByTestId("submit-order");
    const userName = page.getByTestId("username");
    const eMail = page.getByTestId("email");
    await userName.fill("John");
    await eMail.fill("test.ru");
    await expect(orderButton).toBeDisabled();
});