const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4.js');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick.js');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {
/*
        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("LadyBug");
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).setValue(123);
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[6].click();
            const create = $(sel.submitButton).isEnabled();
            expect(create).toEqual(true);
        });

 */
        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const create = $(sel.submitButton).isEnabled();
            expect(create).toEqual(true);
        });

    });

    describe('Other paths', function () {

        it('TC-022 gender he is working', function () {
            browser.url('');
            inputValues4(data.name, data.gender.he, data.age, data.storyType);
            $(sel.submitButton).click();
            const btn = $(sel.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
        });

        it('TC-023 gender it is working', function () {
            browser.url('');
            inputValues4AndClick(data.name, data.gender.it, data.age, data.storyType);
            const btn = $(sel.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
        });

    });


});


