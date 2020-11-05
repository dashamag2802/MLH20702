const sel = require('../data/selectors.json');
const path = require('path');

function inputValues5 (name, gender, age, storyType, imageChoice){
    browser.url('');
    $(sel.nameK).setValue(name);
    $$(sel.genderK)[gender].click();
    $(sel.ageK).setValue(age);
    $(sel.storyClickK).click();
    $$(sel.storyTypeK)[storyType].click();
    const image = $(sel.imageUploadK);
    const filePath = path.join(__dirname, `../data/${imageChoice}`);
    const remoteFilePath = browser.uploadFile(filePath);
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = "block";
    })
    image.waitForDisplayed();
    image.setValue(remoteFilePath);
}

module.exports = inputValues5;