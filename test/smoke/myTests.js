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

});