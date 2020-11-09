const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const uploadImageBrowser = require('../../helpers/uploadImageBrowser');
const path = require('path');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('A-016 Name ', function () {
            browser.url('');
            const name = $(sel.nameK).isDisplayed();
            expect(name).toEqual(true);
        });

        it('A-017 Gender He', function () {
            const gender = $$(sel.genderK)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('A-018 Gender She', function () {
            const gender = $$(sel.genderK)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('A-019 Gender It', function () {
            const gender = $$(sel.genderK)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('A-020 Age', function () {
            const label = $(sel.ageK).isDisplayed();
            expect(label).toEqual(true);
        });

        it('A-021 Story', function () {
            const label = $(sel.storyK).isDisplayed();
            expect(label).toEqual(true);
        });

        it('A-022 Create', function () {            //TC-009
            const label = $(sel.submitButtonK).isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Placeholders and labels are correct', function () {

        it('A-023 Text for Name placeholder = Hero\'s name', function (){ //TC-013
            const text = $(sel.nameK).getAttribute('placeholder');
            expect(text).toEqual(exp.namePlaceholderName);
        });

        it('A-024 Label for Gender choice = HE', function () {      //TC-023.1
            const text = $$(sel.genderTypeK)[data.gender.he[0]].getAttribute('value');
            expect(text).toEqual(data.gender.he[1]);
        });

        it('A-025 Label for Gender choice = SHE', function () {      //TC-023.2
            const text = $$(sel.genderTypeK)[data.gender.she[0]].getAttribute('value');
            expect(text).toEqual(data.gender.she[1]);
        });

        it('A-026 Label for Gender choice = IT', function () {      //TC-023.3
            const text = $$(sel.genderTypeK)[data.gender.it[0]].getAttribute('value');
            expect(text).toEqual(data.gender.it[1]);
        });

        it('A-027 Text for age placeholder = Hero\'s age', function () {    //TC-032
            const text = $(sel.ageK).getAttribute('placeholder');
            expect(text).toEqual(exp.agePlaceholderName);
        });

        it('A-028 Text for Type of the story placeholder = Type of the story', function () {      //TC-048
            const label = $(sel.storyPlaceholderK).getText();
            expect(label).toEqual(exp.typeStoryPlaceholderName);
        });

        it('A-029 Text for Image placeholder = drag and drop your image here or browse', function () {    //TC-057
            const text = $(sel.imagePlaceholderK).getText();
            expect(text).toEqual(exp.imagePlaceholderName);
        });

        it('A-030 Submit button name = Create!', function () {    //TC-078
            const text = $(sel.submitButtonK).getText();
            expect(text).toEqual(exp.submitButtonName);
        });

    });

    describe('Inputs for Name input field are correct', function () {

        it('A-031 Input English letters for name', function () {      //TC-014
            browser.url('');
            const input = $(sel.nameK).setValue(data.name.Hero);
            const value = $(sel.nameK).getValue();
            expect(value).toEqual(data.name.Hero);
        });

        it('A-032 Input digits for name', function () {      //TC-015
            browser.url('');
            const input = $(sel.nameK).setValue(data.name.numbers);
            const value = $(sel.nameK).getValue();
            expect(value).toEqual(data.name.numbers);
        });

        it('A-033 Input special characteristics for name', function () {      //TC-016 ??????
            browser.url('');
            const input = $(sel.nameK).setValue(data.name.specialChar);
            const value = $(sel.nameK).getValue();
            expect(value).toEqual(data.name.specialChar);
        });




    });

    describe('Gender choice is correct', function () {

        it('A-034 Gender choice click on He', function () {      //TC-024
            browser.url('');
            const input = $$(sel.genderTypeK)[data.gender.he[0]].click();
            const text = $$(sel.genderTypeK)[data.gender.he[0]].getAttribute('value');
            expect(text).toEqual(data.gender.he[1]);
        });

        it('A-035 Gender choice click on She', function () {      //TC-025
            const input = $$(sel.genderTypeK)[data.gender.she[0]].click();
            const text = $$(sel.genderTypeK)[data.gender.she[0]].getAttribute('value');
            expect(text).toEqual(data.gender.she[1]);
        });

        it('A-036 Gender choice click on It', function () {      //TC-026
            const input = $$(sel.genderTypeK)[data.gender.it[0]].click();
            const text = $$(sel.genderTypeK)[data.gender.it[0]].getAttribute('value');
            expect(text).toEqual(data.gender.it[1]);
        });

    });

    describe('Inputs for Age input field are correct', function () {

        it('A-037 Input 1 to Age input field', function () {      //TC-033
            browser.url('');
            const input = $(sel.ageK).setValue(data.age.a1);
            const value = +$(sel.ageK).getValue();
            expect(value).toEqual(data.age.a1);
        });




    });

    describe('Inputs for Story type are correct', function () {

        it('A-038 Story type = Overcoming the Monster', function () {      //TC-049
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.OvercomingTheMonster[0]].getAttribute('title');
            expect(input).toEqual(exp.OvercomingTheMonster);
        });

        it('A-039 Story type = Rebirth', function () {      //TC-050
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.Rebirth[0]].getAttribute('title');
            expect(input).toEqual(exp.Rebirth);
        });

        it('A-040 Story type = Quest', function () {      //TC-051
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.Quest[0]].getAttribute('title');
            expect(input).toEqual(exp.Quest);
        });

        it('A-041 Story type = Journey and Return', function () {      //TC-052
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.JourneyAndReturn[0]].getAttribute('title');
            expect(input).toEqual(exp.JourneyAndReturn);
        });

        it('A-042 Story type = Rags and Riches', function () {      //TC-053
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.RagsAndRiches[0]].getAttribute('title');
            expect(input).toEqual(exp.RagsAndRiches);
        });

        it('A-043 Story type = Tragedy', function () {      //TC-054
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.Tragedy[0]].getAttribute('title');
            expect(input).toEqual(exp.Tragedy);
        });

        it('A-044 Story type = Comedy', function () {      //TC-055
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.Comedy[0]].getAttribute('title');
            expect(input).toEqual(exp.Comedy);
        });

    });

    describe('Inputs for Image input field are correct', function () {


        it('A-045 Image input file able to browse', function () {   // TC-061
            browser.url('');
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            })
            const image = $(sel.imageUploadK).isClickable();
            expect(image).toEqual(true);
        });

        it('A-046 Input for Image jpeg file by browsing form the computer', function () {   // TC-062
            browser.url('');
            uploadImageBrowser(data.imageChoice.JPEG200px);
            const image = $(sel.imageCorrectK).getAttribute('alt');
            expect(image).toEqual(data.imageChoice.JPEG200px);
        });

        it('A-047 Input for Image png file by browsing form the computer', function () {   // TC-063
            browser.url('');
            uploadImageBrowser(data.imageChoice.PNG500px);
            const image = $(sel.imageCorrectK).getAttribute('alt');
            expect(image).toEqual(data.imageChoice.PNG500px);
        });

        it('A-048 Input for Image file 200px', function () {   // TC-064
            browser.url('');
            uploadImageBrowser(data.imageChoice.PNG200px);
            const image = $(sel.imageCorrectK).getAttribute('alt');
            expect(image).toEqual(data.imageChoice.PNG200px);
        });

        it('A-049 Input for Image file 500px', function () {   // TC-065
            browser.url('');
            uploadImageBrowser(data.imageChoice.JPEG500px);
            const image = $(sel.imageCorrectK).getAttribute('alt');
            expect(image).toEqual(data.imageChoice.JPEG500px);
        });

        it('A-050 Input for Image file more than 500px', function () {   // TC-066
            browser.url('');
            uploadImageBrowser(data.imageChoice.PNGMore500px);
            const image = $(sel.imageCorrectK).getAttribute('alt');
            expect(image).toEqual(data.imageChoice.PNGMore500px);
        });

        it('A-051 Input for Image file delete after upload', function () {   // TC-067
            browser.url('');
            uploadImageBrowser(data.imageChoice.PNGMore500px);
            $(sel.imageDelete).click();
            const image = $(sel.imageCorrectK).isExisting();
            expect(image).toEqual(false);
        });

    });

})


