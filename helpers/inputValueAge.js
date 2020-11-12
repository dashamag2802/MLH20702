const sel = require('../data/selectors.json');

function inputValueAge (age){
    $(sel.ageK).setValue(age);

}

module.exports = inputValueAge;
