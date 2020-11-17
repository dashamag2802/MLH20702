const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        it('A-001 Title is correct ', function () {
            browser.url('');
            let title = browser.getTitle();
            expect(title).toEqual('MLH trial');
        });

    });

    describe('Labels exist', function () {

        it('A-002 Label for page header', function () {
            const label = $(sel.headerK).isDisplayed();
            expect(label).toEqual(true);
        });

        it('A-003 Label for page header description', function () {
            const label = $(sel.descriptionK).isDisplayed();
            expect(label).toEqual(true);
        });


        it('A-004 Label for name', function () {
            const label = $$(sel.labelK)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('A-005 Label for gender', function () {
            const label = $$(sel.labelK)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('A-006 Label for age', function () {
            const label = $$(sel.labelK)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('A-007 Label for story', function () {
            const label = $$(sel.labelK)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('A-008 Label for Image upload field exist', function () {
            const label = $(sel.imageK).isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Labels are correct', function () {

        it('A-009 Label for page header = My Little Hero', function () {
            const text = $(sel.headerK).getText();
            expect(text).toEqual(exp.headerName);
        });

        it('A-010 Label for page header description = Let\'s create your own HERO! It\'s super easy with our application!', function () {
            const text = $(sel.descriptionK).getText();
            expect(text).toEqual(exp.descriptionName);
        });

        it('A-011 Label for name = 1. What is your Hero\'s name?', function () {
            const text = $$(sel.labelK)[0].getAttribute('title');
            expect(text).toEqual(exp.labelName);
        });

        it('A-012 Label for gender = 2. Please choose a gender.', function () {
            const text = $$(sel.labelK)[1].getAttribute('title');
            expect(text).toEqual(exp.labelGender);
        });

        it('A-013 Label for age = 3. How old is your hero?', function () {
            const text = $$(sel.labelK)[2].getAttribute('title');
            expect(text).toEqual(exp.labelAge);
        });

        it('A-014 Label for story = 4. What type of story would you like to read?', function () {
            const text = $$(sel.labelK)[3].getAttribute('title');
            expect(text).toEqual(exp.labelStory);
        });

        it('A-015 Label for Image upload field = 5. Upload an image (optional)', function () {
            const text = $(sel.imageK).getAttribute('title');
            expect(text).toEqual(exp.imageName);
        });

    });

});

