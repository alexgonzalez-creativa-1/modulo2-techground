const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page');
const DashboardPage = require('../pageobjects/dashboard.page');
const wait = require('../helpers/waits')
const articleDetailPage = require('../pageobjects/articleDetail.page');


describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.setTimeout({ 'pageLoad': 10000 });
        NavigationPage.goToSignIn();
        LoginPage.login('alex.gonzalez@ucreativa.com', 'Test1234');
        browser.setTimeout({ 'implicit': 10000 });
        expect(browser).toHaveUrl('https://demo.realworld.io/#/');
        expect(DashboardPage.getYourFeedTap()).toHaveAttribute('class', 'nav-link active')
    });

    it('should open Global Feed Tab',() => {
        DashboardPage.getGlobalFeedTap().click();
        browser.setTimeout({ 'implicit': 10000 });
        expect(DashboardPage.getGlobalFeedTap()).toHaveClass('active', { message: 'Not active tap!', })
    });

    it('should open read more', () => {
        DashboardPage.getReadMoreAnchor().click();

    })

    it('should add a description', () => {
        browser.setTimeout({ 'implicit': 10000 });
        articleDetailPage.getdescriptionTextBox().setValue('Hola');

        browser.pause(5000);
    })

});


