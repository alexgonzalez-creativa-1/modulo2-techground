
class waits { 

    waitUntilElementIsDisplayedInViewport(element) {
        browser.waitUntil(
            () => element.isDisplayed(),
            {
                timeout: 15000,
                timeoutMsg: element + ' was not found in after 5s'
            }
        );
    }

}

module.exports = new waits();

