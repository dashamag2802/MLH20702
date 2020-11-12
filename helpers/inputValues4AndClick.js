const sel = require('../data/selectors.json');

function inputValues4AndClick (name, gender, age, storyType){
    $(sel.nameK).setValue(name);
    $$(sel.genderK)[gender[0]].click();
    $(sel.ageK).setValue(age);
    $(sel.storyClickK).click();
    $$(sel.storyTypeK)[storyType[0]].click();
    browser.pause(8000)
    const create = $(sel.submitButtonK);
    create.waitForClickable();
    browser.pause(3000);
    create.click();
    const story = $(sel.tryAgainK);
    browser.pause(3000);
    story.waitForClickable();
}

module.exports = inputValues4AndClick;



