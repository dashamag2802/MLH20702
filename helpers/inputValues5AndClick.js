const sel = require ('../data/selectors.json');
const path = require('path');

function inputValues5AndClick (name, gender, age, storyType, imageChoice){
    $(sel.nameK).setValue(name);
    $$(sel.genderK)[gender].click();
    $(sel.ageK).setValue(age);
    $(sel.storyClickK).click();
    const typeOfStory = $$(sel.storyTypeK)[storyType];
    typeOfStory.waitForDisplayed(5000);
    typeOfStory.waitForClickable(5000);
    $$(sel.storyTypeK)[storyType].click();
    const image = $(sel.imageUploadK);
    const filePath = path.join(__dirname, `../data/${imageChoice}`);
    const remoteFilePath = browser.uploadFile(filePath);
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = "block";
    });
    image.waitForDisplayed();
    image.setValue(remoteFilePath);
    const create = $(sel.submitButtonK);
    create.waitForDisplayed(10000);
    create.waitForClickable(10000);
    create.click();
    const story = $(sel.tryAgainK);
    story.waitForDisplayed(10000);
    story.waitForClickable(10000);
}

module.exports = inputValues5AndClick;

