import { browser, by, element } from 'protractor';
var AppPage = (function () {
    function AppPage() {
    }
    AppPage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    AppPage.prototype.getParagraphText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return AppPage;
}());
export { AppPage };
