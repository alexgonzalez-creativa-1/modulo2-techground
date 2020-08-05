const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get noArticlesLabel () { return $('div=No articles are here... yet.') }
    get yourFeedTap () { return $('.nav-link=Your Feed')}
    get globalFeedTap () {return $('.nav-link=Global Feed')}
    

    getNoArticlesLabel() {
        return this.noArticlesLabel;
    }

    getYourFeedTap () {
        return this.yourFeedTap;
    }

    getGlobalFeedTap() {
        return this.globalFeedTap;
    }

}

module.exports = new DashboardPage();
