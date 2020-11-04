const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        it('TC-001 Title is correct ', function () {     //TC-001
            browser.url('');
            let title = browser.getTitle();
            expect(title).toEqual('MLH trial');
        });

    });

    describe('Labels exist', function () {

        it('TC-002 Label for page header', function () {      //TC-002
            const label = $(sel.headerK).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-003 Label for page header description', function () {      //TC-003
            const label = $(sel.descriptionK).isDisplayed();
            expect(label).toEqual(true);
        });


        it('TC-004 Label for name', function () {      //TC-004
            const label = $$(sel.labelK)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Label for gender', function () {      //TC-005
            const label = $$(sel.labelK)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-006 Label for age', function () {      //TC-006
            const label = $$(sel.labelK)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007 Label for story', function () {     //TC-007
            const label = $$(sel.labelK)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-008 Label for Image upload field exist', function () {      //TC-008
            const label = $(sel.imageK).isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Labels are correct', function () {

        it('TC-009 Label for page header = My Little Hero', function () {    //TC-010
            const text = $(sel.headerK).getText();
            expect(text).toEqual(exp.headerName);
        });

        it('TC-010 Label for page header description = Let\'s create your own HERO! It\'s super easy with our application!', function () {        //TC-011
            const text = $(sel.descriptionK).getText();
            expect(text).toEqual(exp.descriptionName);
        });

        it('TC-011 Label for name = 1. What is your Hero\'s name?', function () {    //TC-012
            const text = $$(sel.labelK)[0].getAttribute('title');
            expect(text).toEqual(exp.labelName);
        });

        it('TC-012 Label for gender = 2. Please choose a gender.', function () {        //TC-022
            const text = $$(sel.labelK)[1].getAttribute('title');
            expect(text).toEqual(exp.labelGender);
        });

        it('TC-013 Label for age = 3. How old is your hero?', function () {      //TC-031
            const text = $$(sel.labelK)[2].getAttribute('title');
            expect(text).toEqual(exp.labelAge);
        });

        it('TC-014 Label for story = 4. What type of story would you like to read?', function () {      //TC-047
            const text = $$(sel.labelK)[3].getAttribute('title');
            expect(text).toEqual(exp.labelStory);
        });

        it('TC-015 Label for Image upload field = 5. Upload an image (optional)', function () {    //TC-056
            const text = $(sel.imageK).getAttribute('title');
            expect(text).toEqual(exp.imageName);
        });

    });

});

