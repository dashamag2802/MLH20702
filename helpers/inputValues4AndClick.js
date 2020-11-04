const sel = require('../data/selectors.json');

function inputValues4AndClick (name, gender, age, storyType){
    $(sel.nameK).setValue(name);
    $$(sel.genderK)[gender].click();
    $(sel.ageK).setValue(age);
    $(sel.storyClickK).click();
    $$(sel.storyTypeK)[storyType].click();
    $(sel.submitButtonK).click();
}

module.exports = inputValues4AndClick;