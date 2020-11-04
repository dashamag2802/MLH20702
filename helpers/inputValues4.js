const sel = require('../data/selectors.json');

function inputValues4 (name, gender, age, storyType){
    $(sel.nameK).setValue(name);
    $$(sel.genderK)[gender].click();
    $(sel.ageK).setValue(age);
    $(sel.storyClickK).click();
    $$(sel.storyTypeK)[storyType].click();
}

module.exports = inputValues4;