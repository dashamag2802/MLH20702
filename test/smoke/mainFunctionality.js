const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4.js');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick.js');
const inputValues5 = require('../../helpers/inputValues5.js');
const inputValues5AndClick = require('../../helpers/inputValues5AndClick.js');
const digitToWords = require('../../helpers/digitToWords.js');
const path = require('path');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-052 Create button is clickable after 1-4 are filled in', function () {     //TC-079
            browser.url('');
            inputValues4(data.name.LadyBug, data.gender.she[0], data.age.a123, data.storyType.Comedy[0]);
            const create = $(sel.submitButtonK).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-053 Create button is clickable after 1-5 are filled in', function () {     //TC-080
            browser.url('');
            inputValues5(data.name.Hero, data.gender.he[0], data.age.a1, data.storyType.Quest[0], data.imageChoice.PNG200px);
            const create = $(sel.submitButtonK).isEnabled();
            expect(create).toEqual(true);
        });

    });

    describe('Other paths', function () {

        it('TC-054 gender he is working', function () {
            browser.url('');
            inputValues4(data.name.LadyBug, data.gender.he[0], data.age.a123, data.storyType.RagsAndRiches[0]);
            $(sel.submitButtonK).click();
            const btn = $(sel.tryAgainK).isDisplayed()
            expect(btn).toEqual(true);
        });

        it('TC-055 gender it is working', function () {
            browser.url('');
            inputValues4AndClick(data.name.numbers, data.gender.it[0], data.age.a1, data.storyType.Tragedy[0]);
            const btn = $(sel.tryAgainK).isDisplayed()
            expect(btn).toEqual(true);
        });

    });

    describe('Check Story content', function () {

        describe('TC-056 Story content correspond to 1-4 fields', function () {

            const name = data.name.Hero;
            const gender = data.gender.he;
            const age = data.age.a123;
            const story = data.storyType.OvercomingTheMonster;

            it('TC-056-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${name}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${name}`);
            });

            it('TC-057-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('TC-057-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)} years old`);
            });


            it('TC-057-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

        });

        describe('TC-057 Story content correspond to 1-4 fields', function () {

            const name = data.name.LadyBug;
            const gender = data.gender.she;
            const age = data.age.a1;
            const story = data.storyType.Comedy;

            it('TC-057-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${name}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${name}`);
            });

            it('TC-057-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('TC-057-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)} years old`);
            });


            it('TC-057-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

        });

    });

    describe('Try again button exist and label is correct', function () {

        it('TC-058 Label for Try again button exist', function () {    //TC-129a
            browser.url('');
            inputValues4AndClick(data.name.Hero, data.gender.he[0], data.age.a1, data.storyType.Quest[0]);
            const label = $(sel.tryAgainK).isDisplayed();
            expect(label).toEqual(true);
        });


        it('TC-059 Label for Try again button = Try again!', function () { //TC-129b
            browser.url('');
            inputValues4AndClick(data.name.Hero, data.gender.he[0], data.age.a1, data.storyType.Rebirth[0]);
            const text = $(sel.tryAgainK).getText();
            expect(text).toEqual(exp.tryAgainName);
        });

    });

});


