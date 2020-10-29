const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        it('TC-001 Title is correct ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual('MLH trial');
        });

    });
/*
    describe('Labels for page header exist', function () {

        it('TC-010 Label for page header', function () {      //TC-002
            const label = $(sel.header).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-011 Label for page header description', function () {      //TC-003
            const label = $(sel.description).isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Labels for page header are correct', function () {

        it('TC-012 Label for page header = My Little Hero', function () {    //TC-010
            const text = $(sel.header).getText();
            expect(text).toEqual(exp.headerName);
        });

        it('TC-013 Label for page header description = Let\'s create your own HERO! It\'s super easy with our application!', function () {        //TC-011
            const text = $(sel.description).getText();
            expect(text).toEqual(exp.descriptionName);
        });

    });



    describe('Labels exist and correct for Image upload field', function () {

        it('TC-014 Label for Image upload field', function () {      //TC-008
            const label = $(sel.image).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-015 Label for Image upload field = 5. Upload an image (optional)', function () {    //TC-056
            const text = $(sel.image).getAttribute('title');
            expect(text).toEqual(exp.imageName);
        });

});

    describe('Button exist and name is correct for Submit button', function () {

        it('TC-016 Submit button exist', function () {      //TC-009
            const label = $(sel.submitButton).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-017 Submit button name = Create', function () {    //TC-078
            const text = $(sel.submitButton).getText();
            expect(text).toEqual(exp.submitButtonName);
        });

    });
*/
    describe('Required elements are present and correct', function () {

        it('TC-018 Label for Name placeholder = Hero\'s name', function () {    //TC-013
            const text = $(sel.name).getAttribute('placeholder');
            expect(text).toEqual(exp.namePlaceholderName);
        });

        it('TC-019 Field for Gender choice HE', function () {      //TC-023.1
            const text = $$(sel.gender)[0].getText();
            expect(text).toEqual(exp.genderHe);
        });

        it('TC-020 Label for Gender choice HE', function () {    //TC-023.1
            const text = $$(sel.gender)[0].isDisplayed();
            expect(text).toEqual(true);
        });

        it('TC-021 Field for Gender choice SHE', function () {      //TC-023.2
            const text = $$(sel.gender)[1].getText();
            expect(text).toEqual(exp.genderShe);
        });

        it('TC-022 Label for Gender choice SHE', function () { //TC-023.2
            const text = $$(sel.gender)[1].isDisplayed();
            expect(text).toEqual(true);
        });

        it('TC-023 Field for Gender choice IT', function () {      //TC-023.3
            const text = $$(sel.gender)[2].getText();
            expect(text).toEqual(exp.genderIt);
        });

        it('TC-024 Label for Gender choice IT', function () { //TC-023.3
            const text = $$(sel.gender)[2].isDisplayed();
            expect(text).toEqual(true);
        });

        it('TC-025 Label for age placeholder = Hero\'s age', function () {    //TC-032
            const text = $(sel.age).getAttribute('placeholder');
            expect(text).toEqual(exp.agePlaceholderName);
        });

        it('TC-026 Label for Type of the story = Type of the story', function () {      //TC-048
            const label = $(sel.story).getText();
            expect(label).toEqual(exp.typeStoryPlaceholderName);
        });
/*
        it('TC-027 Label for Image placeholder = drag and drop your image here or browse', function () {    //TC-057
            const text = $(sel.image).getAttribute('title');
            expect(text).toEqual(exp.imageName);
        });

        it('TC-028 Label for Image upload field', function () {      //TC-129a
            const label = $(sel.image).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-029 Label for Image upload field = 5', function () {    //TC-129b
            const text = $(sel.image).getAttribute('title');
            expect(text).toEqual(exp.imageName);
        });
*/
    });

});