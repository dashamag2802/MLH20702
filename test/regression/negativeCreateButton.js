const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');

describe('Create! button disabled after user filled Name input field', function () {

    it('A-124 Input Name, Create button disabled', function () {   // TC-083
        browser.url('');
        $(sel.nameField).setValue(data.name.Hero);
        const label = $(sel.submitButtonK).isEnabled();
        expect(label).toEqual(false);
    });

    it('A-125 Input Name and Gender(he), Create button disabled', function () {  //TC-084
        browser.url('');
        $(sel.nameField).setValue(data.name.Hero);
        $$(sel.genderK)[data.gender.he[0]].click();
        const label = $(sel.submitButtonK).isEnabled();
        expect(label).toEqual(false);
    });

    it('A-126 Input Name,Gender(he),Age, Create button disabled', function () {  //TC-085
        browser.url('');
        $(sel.nameField).setValue(data.name.Hero);
        $$(sel.genderK)[data.gender.he[0]].click();
        $(sel.ageK).setValue(data.age.a1);
        const label = $(sel.submitButtonK).isEnabled();
        expect(label).toEqual(false);
    });

});

