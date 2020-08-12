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
    get articlesRows () {return $('<article-list />').$$('<article-preview />')}
    get articlesRowsReadMore () {return $('<article-list />').$$('<article-preview />')[1].$('span=Read more...')}

    getNoArticlesLabel() {
        return this.noArticlesLabel;
    }

    getYourFeedTap () {
        return this.yourFeedTap;
    }

    getGlobalFeedTap() {
     //   this.globalFeedTap.waitForVisible();
        return this.globalFeedTap;
    }

    getArticlesList() {
        return this.articlesRows;
    }

    getReadMoreAnchor() {
        return this.articlesRowsReadMore;
    }

}

module.exports = new DashboardPage();
