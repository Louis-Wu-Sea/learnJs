import Page from './page';

class SecurePage extends Page {

    rootSelector = '//div[contains(@class, "VehicleListingPage__ListingContainer-sc-")]'

    get rootElement() {
        return $(this.rootSelector);
    }

    get getShoppingList() {
        return $$(this.rootSelector + '//p[@data-e2e-id="carCardName"]');
    }
}

export default new SecurePage();
