import Page from './page';

class LoginPage extends Page {

    get rootSelector() {
        return $('//div[contains(@class, "HomePage__Background")]')
    }

    getOpenMake() {
        return $('//span[contains(text(), "Make")]');
    }

    getOpenModel() {
        return $('//span[contains(text(), "Model")]');
    }

    getElementInList(textElement) {
        return $(`//input[(@name = "${textElement}")]`);
    }

    getButtonForText(textElement) {
        return $(`//span[contains(text(), "${textElement}")]`);
    }

    async checkOpenPage() {
        await this.rootSelector.waitForDisplayed();
    }

    open() {
        super.windowSizeDefault();
        return super.open();
    }
}

export default new LoginPage();
