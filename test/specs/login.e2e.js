const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page');
const DashboardPage = require('../pageobjects/dashboard.page');
const wait = require('../helpers/waits')
const articleDetailPage = require('../pageobjects/articleDetail.page');

const user = require('../data/user');



describe('My Login application', () => {

    before(()=> {
        console.log('before')
        browser.url(`https://demo.realworld.io/#/login`)
    })

    beforeEach(() => {
        console.log('Before Each')
    })

    after(()=> {
        console.log('After');
    })

    afterEach(()=> {
        console.log('After');
    })
    
    it('should login with valid credentials', () => {
        browser.setTimeout({ 'pageLoad': 10000 });
        //NavigationPage.goToSignIn();
        LoginPage.login(user.email, user.password);
        browser.setTimeout({ 'implicit': 10000 });
        expect(browser).toHaveUrl('https://demo.realworld.io/#/');
        expect(DashboardPage.getYourFeedTap()).toHaveAttribute('class', 'nav-link active')
    });

    it('should open Global Feed Tab',() => {
        DashboardPage.getGlobalFeedTap().click();
        browser.setTimeout({ 'implicit': 10000 });
        browser.saveScreenshot('/Users/alexander.gonzalez/modulo2-techground/test/resources/sc/testcase2.png');
        expect(DashboardPage.getGlobalFeedTap()).toHaveClass('active', { message: 'Not active tap!', })
    });

    it('should open read more', () => {
        DashboardPage.getReadMoreAnchor().click();

        browser.newWindow('https://webdriver.io', 'WebdriverIO window', 'width=420,height=230,resizable,scrollbars=yes,status=1')

       
     
        //browser.switchWindow('https://demo.realworld.io/');


       // var windowHandles = browser.windowHandles()
       // var window2 = windowHandles.value[1];
       expect(browser).toHaveUrl('https://webdriver.io/');
       browser.switchWindow('https://demo.realworld.io/');
    })

    it('should add a description', () => {
        browser.setTimeout({ 'implicit': 10000 });
        articleDetailPage.getdescriptionTextBox().setValue('Hola');
        browser.pause(5000);
    })

});


