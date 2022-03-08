import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../../pageobjects/login.page';
import SecurePage from '../../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

Given(/^User opens (\w+) page$/, async (page) => {
    await pages[page].open();
    await LoginPage.checkOpenPage();
});

When(/^User selects in (\w+) and (\w+) dropdowns$/, async (make, model) => {
    await LoginPage.getOpenMake().click();
    await LoginPage.getElementInList(make).click();
    await LoginPage.getOpenModel().click();
    await LoginPage.getElementInList(model).click()
});

When(/^User clicks ([\w\s]+) button$/, async (nameButton) => {
    await LoginPage.getButtonForText(nameButton).waitForClickable();
    await LoginPage.getButtonForText(nameButton).click();
});

Then(/^Only the following item is displayed in the list (.*)$/, async (nameModel) => {
    await SecurePage.rootElement.waitForDisplayed();
    for (const element of await SecurePage.getShoppingList) {
        await expect(element).toHaveText(nameModel);
    }
});

