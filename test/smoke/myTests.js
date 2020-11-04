const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const val = require('../../data/values.json');
const path = require('path');

describe('My Little Hero', function () {  //define suite title by passing a string

    describe('Getting to the page', function () {  //define sub-suite title by passing a string
                                         //TC-001
        it('TC-001 Title is correct ', function () {     //define test title by passing a string
            browser.url(sel.homePageK);        //open baseUrl
            let title = browser.getTitle();    //get page title and assign it to the "title" variable
            browser.pause(2000);    //just pause to visually see that something is happening on the page
            expect(title).toEqual('MLH trial');   //compare {title} (actual) and "MLH trial" (expected)
        });

    });


    describe('Labels for page header exist', function () {

        it('TC-010 Label for page header exist', function () {      //TC-002
            const label = $(sel.headerK).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-011 Label for page header description exist', function () {      //TC-003
            const label = $(sel.descriptionK).isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Labels for page header are correct', function () {

        it('TC-012 Label for page header = My Little Hero', function () {    //TC-010
            const text = $(sel.headerK).getText();
            expect(text).toEqual(exp.headerName);
        });

        it('TC-013 Label for page header description = Let\'s create your own HERO! It\'s super easy with our application!', function () {        //TC-011
            const text = $(sel.descriptionK).getText();
            expect(text).toEqual(exp.descriptionName);
        });

    });



    describe('Labels exist and correct for Image upload field', function () {

        it('TC-014 Label for Image upload field exist', function () {      //TC-008
            const label = $(sel.imageK).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-015 Label for Image upload field = 5. Upload an image (optional)', function () {    //TC-056
            const text = $(sel.imageK).getAttribute('title');
            expect(text).toEqual(exp.imageName);
        });

});

    describe('Button exist and name is correct for Submit button', function () {

        it('TC-016 Submit button exist', function () {      //TC-009
            const label = $(sel.submitButtonK).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-017 Submit button name = Create!', function () {    //TC-078
            const text = $(sel.submitButtonK).getText();
            expect(text).toEqual(exp.submitButtonName);
        });

    });

    describe('Required elements are present and correct', function () {

        it('TC-018 Text for Name placeholder = Hero\'s name', function (){ //TC-013
            const text = $(sel.nameK).getAttribute('placeholder');
            expect(text).toEqual(exp.namePlaceholderName);
        });

        it('TC-019 Label for Gender choice = HE', function () {      //TC-023.1
            const text = $$(sel.genderTypeK)[0].getText();
            expect(text).toEqual(exp.genderHe);
        });

        it('TC-020 Field for Gender choice HE exist', function () {    //TC-023.1
            const text = $$(sel.genderK)[0].isDisplayed();
            expect(text).toEqual(true);
        });

        it('TC-021 Label for Gender choice = SHE', function () {      //TC-023.2
            const text = $$(sel.genderTypeK)[1].getText();
            expect(text).toEqual(exp.genderShe);
        });

        it('TC-022 Field for Gender choice SHE exist', function () { //TC-023.2
            const text = $$(sel.genderK)[1].isDisplayed();
            expect(text).toEqual(true);
        });

        it('TC-021 Label for Gender choice = SHE', function () {      //TC-023.2
            const text = $$(sel.genderTypeK)[1].getText();
            expect(text).toEqual(exp.genderShe);
        });

        it('TC-024 Field for Gender choice IT exist', function () { //TC-023.3
            const text = $$(sel.genderK)[2].isDisplayed();
            expect(text).toEqual(true);
        });

        it('TC-025 Text for age placeholder = Hero\'s age', function () {    //TC-032
            const text = $(sel.ageK).getAttribute('placeholder');
            expect(text).toEqual(exp.agePlaceholderName);
        });

        it('TC-026 Text for Type of the story placeholder = Type of the story', function () {      //TC-048
            const label = $(sel.storyPlaceholderK).getText();
            expect(label).toEqual(exp.typeStoryPlaceholderName);
        });

        it('TC-027 Text for Image placeholder = drag and drop your image here or browse', function () {    //TC-057
            const text = $(sel.imagePlaceholderK).getText();
            expect(text).toEqual(exp.imagePlaceholderName);
        });


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

    describe('Correct input for name', function () {

        it('TC-030 Input English letters for name', function () {      //TC-014
            browser.url('');
            const input = $(sel.nameK).addValue("Hero");
            const value = $(sel.nameK).getValue();
            expect(value).toEqual(val.nameHero);
        });

        it('TC-031 Input digits for name', function () {      //TC-015
            browser.url('');
            const input = $(sel.nameK).setValue("0");
            const input1 = $(sel.nameK).addValue(123456789);
            const value = $(sel.nameK).getValue();
            expect(value).toEqual(val.name0123456789);
        });

        it('TC-032 Input special characteristics for name', function () {      //TC-016 ??????
            browser.url('');
            const input = $(sel.nameK).setValue("-+-/*,.?#$%@&{}()[]\"`~|\\ <>:;");
            const value = $(sel.nameK).getValue();
            expect(value).toEqual(val.nameSpecuals);
        });

        it('TC-033 Gender choice click on He', function () {      //TC-024
            browser.url('');
            const input = $$(sel.genderTypeK)[0].click();
            const text = $$(sel.genderTypeK)[0].getAttribute('class');
            expect(text).toEqual(val.genderChoice);
        });

        it('TC-034 Gender choice click on She', function () {      //TC-025
            const input = $$(sel.genderTypeK)[1].click();
            const text = $$(sel.genderTypeK)[1].getAttribute('class');
            expect(text).toEqual(val.genderChoice);
        });

        it('TC-035 Gender choice click on It', function () {      //TC-026
            const input = $$(sel.genderTypeK)[2].click();
            const text = $$(sel.genderTypeK)[2].getAttribute('class');
            expect(text).toEqual(val.genderChoice);
        });

        it('TC-036 Input 1 to Age field', function () {      //TC-033
            browser.url('');
            const input = $(sel.ageK).setValue(1);
            const value = $(sel.ageK).getValue();
            expect(value).toEqual(val.age1);
        });

        it('TC-037 Story type = Overcoming the Monster', function () {      //TC-049
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[0].getAttribute('title');
            expect(input).toEqual(val.OvercomingTheMonster);
        });

        it('TC-038 Story type = Rebirth', function () {      //TC-050
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[1].getAttribute('title');
            expect(input).toEqual(val.Rebirth);
        });

        it('TC-039 Story type = Quest', function () {      //TC-051
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[2].getAttribute('title');
            expect(input).toEqual(val.Quest);
        });

        it('TC-040 Story type = Journey and Return', function () {      //TC-052
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[3].getAttribute('title');
            expect(input).toEqual(val.JourneyAndReturn);
        });

        it('TC-041 Story type = Rags and Riches', function () {      //TC-053
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[4].getAttribute('title');
            expect(input).toEqual(val.RagsAndRiches);
        });

        it('TC-042 Story type = Tragedy', function () {      //TC-054
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[5].getAttribute('title');
            expect(input).toEqual(val.Tragedy);
        });

        it('TC-043 Story type = Comedy', function () {      //TC-055
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[6].getAttribute('title');
            expect(input).toEqual(val.Comedy);
        });

    });

    describe('Check story content', function () {

        it('TC-044 Content of the story appear after 1-4 are filled in', function () {  //TC-086
            browser.url('');
            const inputName = $(sel.nameK).setValue("Hero");
            const inputGender = $$(sel.genderK)[0].click();
            const inputAge = $(sel.ageK).setValue(1);
            const click = $(sel.storyClickK).click();
            const inputStory = $$(sel.storyTypeK)[0].click();
            const create = $(sel.submitButtonK).click();
            const storyContent = $(sel.storyContentK).isDisplayed();
            expect(storyContent).toEqual(true);
        });



        it('TC-045 Content of the story match with selections after 1-4 are filled in', function () {  //TC-087
            browser.url('');
            const inputName = $(sel.nameK).setValue("Hero");
            const inputGender = $$(sel.genderK)[0].click();
            const inputAge = $(sel.ageK).setValue(1);
            const click = $(sel.storyClickK).click();
            const inputStory = $$(sel.storyTypeK)[0].click();
            const create = $(sel.submitButtonK).click();
            const storyName = $(sel.storyHeaderK);
            expect(storyName).toHaveTextContaining("Hero");
            const storyText = $$(sel.storyTextK)[0];
            expect(storyText).toHaveTextContaining("Hero");
            expect(storyText).toHaveTextContaining("He");
            expect(storyText).toHaveTextContaining("his");
            expect(storyText).toHaveTextContaining("one year old");
        });

        it('TC-046 Content of the story match with selections after 1-5 are filled in', function () {  //TC-087
            browser.url('');
            const inputName = $(sel.nameK).setValue("Hero");
            const inputGender = $$(sel.genderK)[0].click();
            const inputAge = $(sel.ageK).setValue(1);
            const click = $(sel.storyClickK).click();
            const inputStory = $$(sel.storyTypeK)[0].click();
            const image = $(sel.imageUploadK);
            const filePath = path.join(__dirname, '../../data/cart.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            })
            image.waitForDisplayed();
            image.setValue(remoteFilePath);
            const create = $(sel.submitButtonK).click();
            const storyName = $(sel.storyHeaderK);
            expect(storyName).toHaveTextContaining("Hero");
            const storyText = $$(sel.storyTextK)[0];
            expect(storyText).toHaveTextContaining("Hero");
            expect(storyText).toHaveTextContaining("He");
            expect(storyText).toHaveTextContaining("his");
            expect(storyText).toHaveTextContaining("one year old");
        });

    });

});





