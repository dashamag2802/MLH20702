const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const uploadImageBrowser = require('../../helpers/uploadImageBrowser');
const path = require('path');

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
            const text = $$(sel.genderTypeK)[data.gender.he].getAttribute('value');
            expect(text).toEqual(data.gender.valueHe);
        });

        it('TC-025 Label for Gender choice = SHE', function () {      //TC-023.2
            const text = $$(sel.genderTypeK)[data.gender.she].getAttribute('value');
            expect(text).toEqual(data.gender.valueShe);
        });

        it('TC-026 Label for Gender choice = IT', function () {      //TC-023.3
            const text = $$(sel.genderTypeK)[data.gender.it].getAttribute('value');
            expect(text).toEqual(data.gender.valueIt);
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

    describe('Inputs for Name input field are correct', function () {

        it('TC-031 Input English letters for name', function () {      //TC-014
            browser.url('');
            const input = $(sel.nameK).setValue(data.name.Hero);
            const value = $(sel.nameK).getValue();
            expect(value).toEqual(data.name.Hero);
        });

        it('TC-032 Input digits for name', function () {      //TC-015
            browser.url('');
            const input = $(sel.nameK).setValue(data.name.numbers);
            //const input1 = $(sel.nameK).addValue(123456789);
            const value = $(sel.nameK).getValue();
            expect(value).toEqual(data.name.numbers);
        });

        it('TC-033 Input special characteristics for name', function () {      //TC-016 ??????
            browser.url('');
            const input = $(sel.nameK).setValue(data.name.specialChar);
            const value = $(sel.nameK).getValue();
            expect(value).toEqual(data.name.specialChar);
        });

    });

    describe('Gender choice is correct', function () {

        it('TC-034 Gender choice click on He', function () {      //TC-024
            browser.url('');
            const input = $$(sel.genderTypeK)[data.gender.he].click();
            const text = $$(sel.genderTypeK)[data.gender.he].getAttribute('value');
            expect(text).toEqual(data.gender.valueHe);
        });

        it('TC-035 Gender choice click on She', function () {      //TC-025
            const input = $$(sel.genderTypeK)[data.gender.she].click();
            const text = $$(sel.genderTypeK)[data.gender.she].getAttribute('value');
            expect(text).toEqual(data.gender.valueShe);
        });

        it('TC-036 Gender choice click on It', function () {      //TC-026
            const input = $$(sel.genderTypeK)[data.gender.it].click();
            const text = $$(sel.genderTypeK)[data.gender.it].getAttribute('value');
            expect(text).toEqual(data.gender.valueIt);
        });

    });

    describe('Inputs for Age input field are correct', function () {

        it('TC-037 Input 1 to Age input field', function () {      //TC-033
            browser.url('');
            const input = $(sel.ageK).setValue(data.age.a1);
            const value = +$(sel.ageK).getValue();
            expect(value).toEqual(data.age.a1);
        });

    });

    describe('Inputs for Story type are correct', function () {

        it('TC-038 Story type = Overcoming the Monster', function () {      //TC-049
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.OvercomingTheMonster].getAttribute('title');
            expect(input).toEqual(exp.OvercomingTheMonster);
        });

        it('TC-039 Story type = Rebirth', function () {      //TC-050
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.Rebirth].getAttribute('title');
            expect(input).toEqual(exp.Rebirth);
        });

        it('TC-040 Story type = Quest', function () {      //TC-051
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.Quest].getAttribute('title');
            expect(input).toEqual(exp.Quest);
        });

        it('TC-041 Story type = Journey and Return', function () {      //TC-052
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.JourneyAndReturn].getAttribute('title');
            expect(input).toEqual(exp.JourneyAndReturn);
        });

        it('TC-042 Story type = Rags and Riches', function () {      //TC-053
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.RagsAndRiches].getAttribute('title');
            expect(input).toEqual(exp.RagsAndRiches);
        });

        it('TC-043 Story type = Tragedy', function () {      //TC-054
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.Tragedy].getAttribute('title');
            expect(input).toEqual(exp.Tragedy);
        });

        it('TC-044 Story type = Comedy', function () {      //TC-055
            browser.url('');
            const click = $(sel.storyClickK).click();
            const input = $$(sel.storyTypeK)[data.storyType.Comedy].getAttribute('title');
            expect(input).toEqual(exp.Comedy);
        });

    });

    describe('Inputs for Image input field are correct', function () {

        it('TC-045 Image input file able to browse', function () {   // TC-061
            browser.url('');
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            })
            const image = $(sel.imageUploadK).isClickable();
            expect(image).toEqual(true);
        });

        it('TC-046 Input for Image jpeg file by browsing form the computer', function () {   // TC-062
            browser.url('');
            uploadImageBrowser(data.imageChoice.JPEG200px);
            const image = $(sel.imageCorrectK).getAttribute('alt');
            expect(image).toEqual(data.imageChoice.JPEG200px);
        });

        it('TC-047 Input for Image png file by browsing form the computer', function () {   // TC-063
            browser.url('');
            uploadImageBrowser(data.imageChoice.PNG500px);
            const image = $(sel.imageCorrectK).getAttribute('alt');
            expect(image).toEqual(data.imageChoice.PNG500px);
        });

        it('TC-048 Input for Image file 200px', function () {   // TC-064
            browser.url('');
            uploadImageBrowser(data.imageChoice.PNG200px);
            const image = $(sel.imageCorrectK).getAttribute('alt');
            expect(image).toEqual(data.imageChoice.PNG200px);
        });

        it('TC-049 Input for Image file 500px', function () {   // TC-065
            browser.url('');
            uploadImageBrowser(data.imageChoice.JPEG500px);
            const image = $(sel.imageCorrectK).getAttribute('alt');
            expect(image).toEqual(data.imageChoice.JPEG500px);
        });

        it('TC-050 Input for Image file more than 500px', function () {   // TC-066
            browser.url('');
            uploadImageBrowser(data.imageChoice.PNGMore500px);
            const image = $(sel.imageCorrectK).getAttribute('alt');
            expect(image).toEqual(data.imageChoice.PNGMore500px);
        });

        it('TC-051 Input for Image file delete after upload', function () {   // TC-067
            browser.url('');
            uploadImageBrowser(data.imageChoice.PNGMore500px);
            $(sel.imageDelete).click();
            const image = $(sel.imageCorrectK).isExisting();
            expect(image).toEqual(false);
        });

    });

})


