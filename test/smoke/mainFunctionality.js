const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4.js');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick.js');
const inputValues5 = require('../../helpers/inputValues5.js');
const inputValues5AndClick = require('../../helpers/inputValues5AndClick.js');
const digitToWords = require('../../helpers/digitToWords.js');
const nameToUpperCase = require('../../helpers/nameToUpperCase.js');

describe('Checking the main functionality', function () {

    describe('Happy path and check Create button', function () {

        it('A-059 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            inputValues4(data.name.LadyBug, data.gender.she[0], data.age.a123, data.storyType.Comedy[0]);
            const create = $(sel.submitButtonK).isEnabled();
            expect(create).toEqual(true);
        });

        it('A-060 Create button is clickable after 1-5 are filled in', function () {
            browser.url('');
            inputValues5(data.name.Hero, data.gender.he[0], data.age.a1, data.storyType.Quest[0], data.imageChoice.PNG200px);
            const create = $(sel.submitButtonK).isEnabled();
            expect(create).toEqual(true);
        });

        it('A-061 Create button is clickable after 1-4 are filled in and 1 fill is change', function () {
            browser.url('');
            inputValues4(data.name.Hero, data.gender.he[0], data.age.a1, data.storyType.Quest[0]);
            $(sel.nameK).doubleClick();
            browser.keys(["\ue009" + "a", "\ue017", "\ue000"]);
            $(sel.nameK).addValue(data.name.Hero159);
            const create = $(sel.submitButtonK).isEnabled();
            expect(create).toEqual(true);
        });

        it('A-062 After Create button was clicked Story appears on the same page', function () {
            browser.url('');
            inputValues4AndClick(data.name.Hero159, data.gender.he[0], data.age.a123, data.storyType.JourneyAndReturn[0]);
            const tryAgain = $(sel.tryAgainK).isDisplayed();
            expect(tryAgain).toEqual(true);
        });

    });

    describe('Check Story content', function () {

        describe('A-063 Story content correspond to 1-4 fields', function () {

            const name = data.name.Hero;
            const gender = data.gender.he;
            const age = data.age.a123;
            const story = data.storyType.OvercomingTheMonster;

            it('A-063-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-063-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-063-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });


            it('A-063-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-063-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-064 Story content correspond to 2 and 5 fields', function () {

            it('A-064-1 Content of the Story with Image include correct input He and Image exist', function () {
                browser.url('');
                inputValues5AndClick(data.name.name2G, data.gender.he[0], data.age.age2G, data.storyType.Rebirth[0],data.imageChoice.PNG200px);
                const pic = $(sel.imageStory).getAttribute('src');
                const result = (pic.length > 50);
                expect(result).toEqual(true);
                const text = $(sel.storyTextK).getText();
                const he_2 = text.includes(exp.textHeG);
                expect(he_2).toEqual(true);
            });

            it('A-064-2 Content of the Story with Image include correct input His', function () {
                const text = $(sel.storyTextK).getText();
                const he_2 = text.includes(exp.textHisG);
                expect(he_2).toEqual(true);
            });

        });

        describe('A-065 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-092"][0];
            const gender = data.gender.he;
            const age = data.testSuits["TC-092"][1];
            const story = data.storyType.Quest;

            it('A-065-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.JPEG500px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-065-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-065-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });


            it('A-065-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-065-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-066 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-093"][0];
            const gender = data.gender.he;
            const age = data.testSuits["TC-093"][1];
            const story = data.storyType.JourneyAndReturn;

            it('A-066-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.PNG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-066-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-066-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });


            it('A-066-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-066-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-067 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-094"][0];
            const gender = data.gender.he;
            const age = data.testSuits["TC-094"][1];
            const story = data.storyType.RagsAndRiches;

            it('A-067-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.PNG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-067-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-067-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-067-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-067-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-068 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-095"][0];
            const gender = data.gender.he;
            const age = data.testSuits["TC-095"][1];
            const story = data.storyType.OvercomingTheMonster;

            it('A-068-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.PNG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-068-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-068-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-068-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-068-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

      describe('A-069 Story content correspond to 2 field', function () {

            it('A-069-1 Content of the Story include correct input He', function () {
                    browser.url('');
                    inputValues4AndClick(data.name.nameG, data.gender.he[0], data.age.ageG, data.storyType.Comedy[0]);
                    const text = $(sel.storyTextK).getText();
                    const he_2 = text.includes(exp.textHeG);
                    expect(he_2).toEqual(true);
                });

                it('A-069-2 Content of the Story include correct input His', function () {
                    const text = $(sel.storyTextK).getText();
                    const his_1 = text.includes(exp.textHisG);
                    expect(his_1).toEqual(true);
                });

            });

        describe('A-070 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-097"][0];
            const gender = data.gender.he;
            const age = data.testSuits["TC-097"][1];
            const story = data.storyType.OvercomingTheMonster;

            it('A-070-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.JPEG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-070-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-070-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-070-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-070-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-071 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-098"][0];
            const gender = data.gender.he;
            const age = data.testSuits["TC-098"][1];
            const story = data.storyType.Rebirth;

            it('A-071-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-071-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-071-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-071-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-071-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-072 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-099"][0];
            const gender = data.gender.he;
            const age = data.testSuits["TC-099"][1];
            const story = data.storyType.Quest;

            it('A-072-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-072-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-072-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-072-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-072-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-073 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-100"][0];
            const gender = data.gender.he;
            const age = data.testSuits["TC-100"][1];
            const story = data.storyType.JourneyAndReturn;

            it('A-073-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-073-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-073-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-073-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-073-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-074 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-101"][0];
            const gender = data.gender.he;
            const age = data.testSuits["TC-101"][1];
            const story = data.storyType.RagsAndRiches;

            it('A-074-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-074-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-074-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-074-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-074-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-075 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-102"][0];
            const gender = data.gender.he;
            const age = data.testSuits["TC-102"][1];
            const story = data.storyType.Tragedy;

            it('A-075-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-075-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-075-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-075-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-075-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-076 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-103"][0];
            const gender = data.gender.he;
            const age = data.testSuits["TC-103"][1];
            const story = data.storyType.Comedy;

            it('A-076-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-076-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-076-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-076-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-076-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-077 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-104"][0];
            const gender = data.gender.she;
            const age = data.testSuits["TC-104"][1];
            const story = data.storyType.OvercomingTheMonster;

            it('A-077-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.PNG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-077-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-077-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-077-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-077-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-078 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-105"][0];
            const gender = data.gender.she;
            const age = data.testSuits["TC-105"][1];
            const story = data.storyType.Rebirth;

            it('A-078-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.JPEG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-078-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-078-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-078-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-078-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-079 Story content correspond to 2 and 4 fields', function () {

            it('A-079-1 Content of the Story with Image include correct input She and Image exist', function () {
                browser.url('');
                inputValues5AndClick(data.name.name3G, data.gender.she[0], data.age.age3G, data.storyType.Quest[0],data.imageChoice.PNG200px);
                const pic = $(sel.imageStory).getAttribute('src');
                const result = (pic.length > 50);
                expect(result).toEqual(true);
                const text = $(sel.storyTextK).getText();
                const he_2 = text.includes(exp.textSheG);
                expect(he_2).toEqual(true);
            });

            it('A-079-2 Content of the Story with Image include correct input Her and Image exist', function () {
                const text = $(sel.storyTextK).getText();
                const he_2 = text.includes(exp.textHerG);
                expect(he_2).toEqual(true);
            });

        });

        describe('A-080 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-107"][0];
            const gender = data.gender.she;
            const age = data.testSuits["TC-107"][1];
            const story = data.storyType.JourneyAndReturn;

            it('A-080-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.JPEG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-080-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-080-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-080-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-080-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-081 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-108"][0];
            const gender = data.gender.she;
            const age = data.testSuits["TC-108"][1];
            const story = data.storyType.RagsAndRiches;

            it('A-085-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.JPEG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-081-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-081-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-081-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-081-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-082 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-109"][0];
            const gender = data.gender.she;
            const age = data.testSuits["TC-109"][1];
            const story = data.storyType.Tragedy;

            it('A-082-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.JPEG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-082-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-082-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-082-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-082-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-083 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-110"][0];
            const gender = data.gender.she;
            const age = data.testSuits["TC-110"][1];
            const story = data.storyType.Comedy;

            it('A-083-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-083-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-083-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-083-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-083-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-084 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-111"][0];
            const gender = data.gender.she;
            const age = data.testSuits["TC-111"][1];
            const story = data.storyType.OvercomingTheMonster;

            it('A-084-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-084-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-084-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-084-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-084-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-085 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-112"][0];
            const gender = data.gender.she;
            const age = data.testSuits["TC-112"][1];
            const story = data.storyType.Rebirth;

            it('A-085-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-085-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-085-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-085-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-085-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-086 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-113"][0];
            const gender = data.gender.she;
            const age = data.testSuits["TC-113"][1];
            const story = data.storyType.Quest;

            it('A-086-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-086-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-086-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-086-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-086-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-087 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-114"][0];
            const gender = data.gender.she;
            const age = data.testSuits["TC-114"][1];
            const story = data.storyType.JourneyAndReturn;

            it('A-087-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-087-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-087-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-087-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-087-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-088 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-115"][0];
            const gender = data.gender.she;
            const age = data.testSuits["TC-115"][1];
            const story = data.storyType.RagsAndRiches;

            it('A-088-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-088-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-088-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-088-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-088-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-089 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-116"][0];
            const gender = data.gender.she;
            const age = data.testSuits["TC-116"][1];
            const story = data.storyType.Tragedy;

            it('A-089-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-089-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-089-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-089-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-089-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-090 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-117"][0];
            const gender = data.gender.she;
            const age = data.testSuits["TC-117"][1];
            const story = data.storyType.Comedy;

            it('A-090-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.JPEG500px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-090-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-090-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-090-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-090-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-091 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-118"][0];
            const gender = data.gender.it;
            const age = data.testSuits["TC-118"][1];
            const story = data.storyType.OvercomingTheMonster;

            it('A-091-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.JPEG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-091-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-091-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-091-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-091-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-092 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-119"][0];
            const gender = data.gender.it;
            const age = data.testSuits["TC-119"][1];
            const story = data.storyType.Rebirth;

            it('A-092-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.PNG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-092-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-092-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-092-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-092-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-093 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-120"][0];
            const gender = data.gender.it;
            const age = data.testSuits["TC-120"][1];
            const story = data.storyType.Quest;

            it('A-093-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.JPEG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-093-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-093-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-093-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-093-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-094 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-121"][0];
            const gender = data.gender.it;
            const age = data.testSuits["TC-121"][1];
            const story = data.storyType.JourneyAndReturn;

            it('A-094-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.PNG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-094-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-094-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-094-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-094-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-095 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-122"][0];
            const gender = data.gender.he;
            const age = data.testSuits["TC-122"][1];
            const story = data.storyType.RagsAndRiches;

            it('A-095-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.JPEG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-095-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-095-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-095-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-095-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-096 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-123"][0];
            const gender = data.gender.it;
            const age = data.testSuits["TC-123"][1];
            const story = data.storyType.Tragedy;

            it('A-096-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.JPEG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-096-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-096-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-096-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-096-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-097 Story content correspond to 1-5 fields', function () {

            const name = data.testSuits["TC-124"][0];
            const gender = data.gender.it;
            const age = data.testSuits["TC-124"][1];
            const story = data.storyType.Comedy;

            it('A-097-1 Story content correspond to name', function () {
                browser.url('');
                inputValues5AndClick(name, gender[0], age, story[0], data.imageChoice.JPEG200px);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-097-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-097-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-097-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-097-5 Image in Story exist', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(false);
            });

        });

        describe('A-098 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-125"][0];
            const gender = data.gender.it;
            const age = data.testSuits["TC-125"][1];
            const story = data.storyType.OvercomingTheMonster;

            it('A-098-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-098-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-098-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-098-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-098-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-099 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-126"][0];
            const gender = data.gender.it;
            const age = data.testSuits["TC-126"][1];
            const story = data.storyType.Rebirth;

            it('A-099-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-099-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-099-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-099-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-099-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-100 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-127"][0];
            const gender = data.gender.it;
            const age = data.testSuits["TC-127"][1];
            const story = data.storyType.Quest;

            it('A-100-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-100-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-100-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-100-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-100-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-101 Story content correspond to 2 field', function () {

            it('A-101-1 Content of the Story include correct input It', function () {
                browser.url('');
                inputValues4AndClick(data.name.name1G, data.gender.it[0], data.age.age1G, data.storyType.JourneyAndReturn[0]);
                const text = $(sel.storyTextK).getText();
                const it_1 = text.includes(exp.textItG)
                expect(it_1).toEqual(true);
                });

            it('A-101-2 Content of the Story include correct input It\s', function () {
                const text = $(sel.storyTextK).getText();
                const it_1 = text.includes(exp.textItsG)
                expect(it_1).toEqual(true);
                });

        });

        describe('A-102 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-129"][0];
            const gender = data.gender.it;
            const age = data.testSuits["TC-129"][1];
            const story = data.storyType.RagsAndRiches;

            it('A-102-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-102-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-102-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-102-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-102-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-103 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-130"][0];
            const gender = data.gender.it;
            const age = data.testSuits["TC-130"][1];
            const story = data.storyType.Tragedy;

            it('A-103-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-103-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-103-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-103-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-103-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

        describe('A-104 Story content correspond to 1-4 fields', function () {

            const name = data.testSuits["TC-131"][0];
            const gender = data.gender.it;
            const age = data.testSuits["TC-131"][1];
            const story = data.storyType.Comedy;

            it('A-104-1 Story content correspond to name', function () {
                browser.url('');
                inputValues4AndClick(name, gender[0], age, story[0]);
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${nameToUpperCase(name)}`);
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${nameToUpperCase(name)}`);
            });

            it('A-104-2 Story content correspond to gender', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${gender[2]}`);
                expect(storyText).toHaveTextContaining(`${gender[3]}`);
            });

            it('A-104-3 Story content correspond to Age', function () {
                const storyText = $$(sel.storyTextK)[0];
                expect(storyText).toHaveTextContaining(`${digitToWords(age)}years old`);
            });

            it('A-104-4 Story content correspond to Type of the story', function () {
                const storyName = $(sel.storyHeaderK);
                expect(storyName).toHaveTextContaining(`${story[1]}`);
            });

            it('A-104-5 Image in Story is not selected', function () {
                const image = $(sel.imageStory).getAttribute('src');
                const error = image.includes("/static/error.86e8f937.png");
                expect(error).toEqual(true);
            });

        });

    });

    describe('Try again button exist and label is correct', function () {

        it('A-105 Label for Try again button exist', function () {
            browser.url('');
            inputValues4AndClick(data.name.Hero, data.gender.he[0], data.age.a1, data.storyType.Quest[0]);
            const label = $(sel.tryAgainK).isDisplayed();
            expect(label).toEqual(true);
        });

        it('A-106 Label for Try again button = Try again!', function () {
            browser.url('');
            inputValues4AndClick(data.name.Hero, data.gender.he[0], data.age.a1, data.storyType.Rebirth[0]);
            const text = $(sel.tryAgainK).getText();
            expect(text).toEqual(exp.tryAgainName);
        });

        it('A-107 Try again button is always active', function () {
            browser.url('');
            inputValues4AndClick(data.name.Hero, data.gender.he[0], data.age.a123, data.storyType.Comedy[0]);
            const click = $(sel.tryAgainK).isClickable();
            expect(click).toEqual(true);
        });

    });

});
