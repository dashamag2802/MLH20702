const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4.js');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick.js');
const inputValues5 = require('../../helpers/inputValues5.js');
const inputValues5AndClick = require('../../helpers/inputValues5AndClick.js');
const digitToWords = require('../../helpers/digitToWords.js');
const findTextAge = require('../../helpers/findTextAge.js');
const path = require('path');

describe('Checking the additional functionality', function () {

    describe('Check age', function () {

        it('TC-001 Text is correct for age in the text', function () {     //TC-079
            browser.url('');
            for (let i = 0; i < data.checkAge.length; i++){
                inputValues4AndClick(data.name.LadyBug, data.gender.she[0], data.checkAge[i], data.storyType.Comedy[0]);
                let textAge = findTextAge();
                console.log(textAge);
                expect(textAge).toEqual(exp.age[i]);
                $(sel.tryAgainK).click();
            }

        });


    })

})