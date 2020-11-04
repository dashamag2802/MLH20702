const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4.js');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick.js');
const path = require('path');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {
/*
        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            const inputName = $(sel.nameK).setValue("LadyBug");
            const inputGender = $$(sel.genderK)[1].click();
            const inputAge = $(sel.ageK).setValue(123);
            const click = $(sel.storyClickK).click();
            const inputStory = $$(sel.storyTypeK)[6].click();
            const create = $(sel.submitButtonK).isEnabled();
            expect(create).toEqual(true);
        });

 */
        it('TC-031 Create button is clickable after 1-4 are filled in', function () {     //TC-079
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.JourneyAndReturn);
            const create = $(sel.submitButtonK).isEnabled();
            expect(create).toEqual(true);
        });

        it('TC-032 Create button is clickable after all fields are filled in', function () {     //TC-080
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Quest);
            const image = $(sel.imageUploadK);
            const filePath = path.join(__dirname, '../../data/cart.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            })
            image.waitForDisplayed();
            image.setValue(remoteFilePath);
            const create = $(sel.submitButtonK).isEnabled();
            expect(create).toEqual(true);
        });

    });

    describe('Other paths', function () {

        it('TC-023 gender he is working', function () {
            browser.url('');
            inputValues4(data.name, data.gender.he, data.age, data.storyType.OvercomingTheMonster);
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
            const inputName = $(sel.nameK).setValue("Hero");
            const inputGender = $$(sel.genderK)[0].click();
            const inputAge = $(sel.ageK).setValue(1);
            const click = $(sel.storyClickK).click();
            const inputStory = $$(sel.storyTypeK)[0].click();
            const create = $(sel.submitButtonK).click();
            const label = $(sel.tryAgainK).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-029 Label for Try again button = Try again!', function () { //TC-129b
            browser.url('');
            const inputName = $(sel.nameK).setValue("Hero");
            const inputGender = $$(sel.genderK)[0].click();
            const inputAge = $(sel.ageK).setValue(1);
            const click = $(sel.storyClickK).click();
            const inputStory = $$(sel.storyTypeK)[0].click();
            const create = $(sel.submitButtonK).click();
            const text = $(sel.tryAgainK).getText();
            expect(text).toEqual(exp.tryAgainName);
        });

    });



});


