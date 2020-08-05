const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page');
const DashboardPage = require('../pageobjects/dashboard.page')

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        NavigationPage.open();
        NavigationPage.goToSignIn();
        browser.pause(5000);
        LoginPage.login('alex.gonzalez@ucreativa.com', 'Test1234');
        expect(browser).toHaveUrl('https://demo.realworld.io/#/');
        expect(DashboardPage.getNoArticlesLabel()).toBeDisplayed();
        expect(DashboardPage.getYourFeedTap()).toHaveAttribute('class', 'nav-link active')
    });

    it('should open Global Feed Tab',() => {
        DashboardPage.getGlobalFeedTap().click();
       // expect(DashboardPage.getGlobalFeedTap()).toHaveAttribute('class', 'nav-link active');
        expect(DashboardPage.getGlobalFeedTap()).toHaveClass('active', { message: 'Not active tap!', })
     //  expect(DashboardPage.getGlobalFeedTap()).toHaveProperty('class', 'nav-link active');
     expect(DashboardPage.getGlobalFeedTap()).toBeClickable();
     expect(DashboardPage.getGlobalFeedTap()).toBeSelected();
     
    });

});


