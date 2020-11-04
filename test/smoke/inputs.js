
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');


describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-016 Name ', function () {
            browser.url('');
            const name = $(sel.nameK).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-017 Gender He', function () {
            const gender = $$(sel.genderK)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-018 Gender She', function () {
            const gender = $$(sel.genderK)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-019 Gender It', function () {
            const gender = $$(sel.genderK)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-020 Age', function () {
            const label = $(sel.ageK).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-021 Story', function () {
            const label = $(sel.storyK).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-022 Create', function () {            //TC-009
            const label = $(sel.submitButtonK).isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Placeholders and labels are correct', function () {

        it('TC-023 Text for Name placeholder = Hero\'s name', function (){ //TC-013
            const text = $(sel.nameK).getAttribute('placeholder');
            expect(text).toEqual(exp.namePlaceholderName);
        });

        it('TC-024 Label for Gender choice = HE', function () {      //TC-023.1
            const text = $$(sel.genderTypeK)[0].getText();
            expect(text).toEqual(exp.genderHe);
        });

        it('TC-025 Label for Gender choice = SHE', function () {      //TC-023.2
            const text = $$(sel.genderTypeK)[1].getText();
            expect(text).toEqual(exp.genderShe);
        });

        it('TC-026 Label for Gender choice = SHE', function () {      //TC-023.2
            const text = $$(sel.genderTypeK)[1].getText();
            expect(text).toEqual(exp.genderShe);
        });

        it('TC-027 Text for age placeholder = Hero\'s age', function () {    //TC-032
            const text = $(sel.ageK).getAttribute('placeholder');
            expect(text).toEqual(exp.agePlaceholderName);
        });

        it('TC-028 Text for Type of the story placeholder = Type of the story', function () {      //TC-048
            const label = $(sel.storyPlaceholderK).getText();
            expect(label).toEqual(exp.typeStoryPlaceholderName);
        });

        it('TC-029 Text for Image placeholder = drag and drop your image here or browse', function () {    //TC-057
            const text = $(sel.imagePlaceholderK).getText();
            expect(text).toEqual(exp.imagePlaceholderName);
        });

        it('TC-030 Submit button name = Create!', function () {    //TC-078
            const text = $(sel.submitButtonK).getText();
            expect(text).toEqual(exp.submitButtonName);
        });

    });

})


