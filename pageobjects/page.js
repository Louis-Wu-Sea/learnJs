export default class Page {

    open() {
        return browser.url(`https://www.carnext.com/en-be/`)
    }

    windowSizeDefault() {
        browser.setWindowSize(1920, 1080)
    }
}
