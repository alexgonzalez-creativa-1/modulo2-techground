
const Page = require('./page');

class articleDetailPage extends Page { 
    get descriptionTextBox () { return $('<textarea />') }

    getdescriptionTextBox() {
        return this.descriptionTextBox;
    }
}
module.exports = new articleDetailPage();