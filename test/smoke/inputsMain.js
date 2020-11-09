const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const uploadImageBrowser = require('../../helpers/uploadImageBrowser');
const path = require('path');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('A-016 Name ', function () {
            browser.url('');
            const name = $(sel.nameK).isDisplayed();
            expect(name).toEqual(true);
        });

        it('A-017 Gender He', function () {
            const gender = $$(sel.genderK)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('A-018 Gender She', function () {
            const gender = $$(sel.genderK)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('A-019 Gender It', function () {
            const gender = $$(sel.genderK)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('A-020 Age', function () {
            const label = $(sel.ageK).isDisplayed();
            expect(label).toEqual(true);
        });

        it('A-021 Story', function () {
            const label = $(sel.storyK).isDisplayed();
            expect(label).toEqual(true);
        });

        it('A-022 Create', function () {            //TC-009
            const label = $(sel.submitButtonK).isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Placeholders and labels are correct', function () {

        it('A-023 Text for Name placeholder = Hero\'s name', function (){ //TC-013
            const text = $(sel.nameK).getAttribute('placeholder');
            expect(text).toEqual(exp.namePlaceholderName);
        });

        it('A-024 Label for Gender choice = HE', function () {      //TC-023.1
            const text = $$(sel.genderTypeK)[data.gender.he[0]].getAttribute('value');
            expect(text).toEqual(data.gender.he[1]);
        });

        it('A-025 Label for Gender choice = SHE', function () {      //TC-023.2
            const text = $$(sel.genderTypeK)[data.gender.she[0]].getAttribute('value');
            expect(text).toEqual(data.gender.she[1]);
        });

        it('A-026 Label for Gender choice = IT', function () {      //TC-023.3
            const text = $$(sel.genderTypeK)[data.gender.it[0]].getAttribute('value');
            expect(text).toEqual(data.gender.it[1]);
        });

        it('A-027 Text for age placeholder = Hero\'s age', function () {    //TC-032
            const text = $(sel.ageK).getAttribute('placeholder');
            expect(text).toEqual(exp.agePlaceholderName);
        });

        it('A-028 Text for Type of the story placeholder = Type of the story', function () {      //TC-048
            const label = $(sel.storyPlaceholderK).getText();
            expect(label).toEqual(exp.typeStoryPlaceholderName);
        });

        it('A-029 Text for Image placeholder = drag and drop your image here or browse', function () {    //TC-057
            const text = $(sel.imagePlaceholderK).getText();
            expect(text).toEqual(exp.imagePlaceholderName);
        });

        it('A-030 Submit button name = Create!', function () {    //TC-078
            const text = $(sel.submitButtonK).getText();
            expect(text).toEqual(exp.submitButtonName);
        });

    });

})


