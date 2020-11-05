const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4.js');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick.js');
const inputValues5 = require('../../helpers/inputValues5.js');
const inputValues5AndClick = require('../../helpers/inputValues5AndClick.js');
const path = require('path');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-031 Create button is clickable after 1-4 are filled in', function () {     //TC-079
            browser.url('');
            inputValues4(data.name.LadyBug, data.gender.she, data.age.a123, data.storyType.Comedy);
            const create = $(sel.submitButtonK).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-032 Create button is clickable after all fields are filled in', function () {     //TC-080
            browser.url('');
            inputValues5(data.name.Hero, data.gender.he, data.age.a1, data.storyType.Quest, data.imageChoice.PNG200px);
            const create = $(sel.submitButtonK).isEnabled();
            expect(create).toEqual(true);
        });

    });

    describe('Other paths', function () {

        it('TC-023 gender he is working', function () {
            browser.url('');
            inputValues4(data.name.LadyBug, data.gender.he, data.age, data.storyType.OvercomingTheMonster);
            $(sel.submitButtonK).click();
            const btn = $(sel.tryAgainK).isDisplayed()
            expect(btn).toEqual(true);
        });

        it('TC-024 gender it is working', function () {
            browser.url('');
            inputValues4AndClick(data.name, data.gender.it, data.age, data.storyType.Comedy);
            const btn = $(sel.tryAgainK).isDisplayed()
            expect(btn).toEqual(true);
        });

    });

    describe('Try again button exist and label is correct', function () {

        it('TC-028 Label for Try again button exist', function () {    //TC-129a
            browser.url('');
            inputValues4AndClick(data.name.Hero, data.gender.he, data.age.a1, data.storyType.OvercomingTheMonster);
            const label = $(sel.tryAgainK).isDisplayed();
            expect(label).toEqual(true);
        });


        it('TC-029 Label for Try again button = Try again!', function () { //TC-129b
            browser.url('');
            inputValues4AndClick(data.name.Hero, data.gender.he, data.age.a1, data.storyType.Tragedy);
            const text = $(sel.tryAgainK).getText();
            expect(text).toEqual(exp.tryAgainName);
        });


    });

});


