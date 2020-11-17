const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');

describe('Create! button disabled after user filled Name input field', function () {

    it('A-126 Input Name, Create button disabled', function () {
        browser.url('');
        $(sel.nameField).setValue(data.name.Hero);
        const label = $(sel.submitButtonK).isEnabled();
        expect(label).toEqual(false);
    });

    it('A-127 Input Name and Gender(he), Create button disabled', function () {
        $$(sel.genderK)[data.gender.he[0]].click();
        const label = $(sel.submitButtonK).isEnabled();
        expect(label).toEqual(false);
    });

    it('A-128 Input Name,Gender(he),Age, Create button disabled', function () {
        $(sel.ageK).setValue(data.age.a1);
        const label = $(sel.submitButtonK).isEnabled();
        expect(label).toEqual(false);
    });

});

