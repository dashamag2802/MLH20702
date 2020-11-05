const sel = require('../data/selectors.json');
const path = require('path');

function uploadImageBrowser (imageChoice){
    const image = $(sel.imageUploadK);
    const filePath = path.join(__dirname, `../data/${imageChoice}`);
    const remoteFilePath = browser.uploadFile(filePath);
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = "block";
    })
    image.waitForDisplayed();
    image.setValue(remoteFilePath);
}

module.exports = uploadImageBrowser;