const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');
const inputValueAge = require('../../helpers/inputValueAge.js');

describe('Inputs for Age input field are correct', function () {

    it('A-039 Input 1 to Age input field', function () {      //TC-035
        browser.url('');
        inputValueAge(data.age.a1);
        const value = +$(sel.ageK).getValue();
        expect(value).toEqual(data.age.a1);
    });

    it('A-040 Age accepts upper board integer', function () {     //TC-036
        browser.url('');
        inputValueAge(data.ageM1);
        const age1 = +$(sel.ageK).getValue();
        expect(age1).toEqual(data.ageM1);
    });

    it('A-041 Verify field accepts middle integer of the range ', function () {     //TC-037
        browser.url('');
        inputValueAge(data.ageM2);
        const age1 = +$(sel.ageK).getValue();
        expect(age1).toEqual(data.ageM2);
    });

    it('A-042 Functionality of increasing spinner', function () {    //TC-038
        browser.url('');
        inputValueAge(data.ageM3);
        $$(sel.ageArrow)[0].click();
        const age1 = +$(sel.ageK).getValue();
        expect(age1).toEqual(data.ageM4);
    });

    it('A-043 Functionality of decreasing spinner', function () {    //TC-039
        browser.url('');
        inputValueAge(data.ageM3);
        $$(sel.ageArrow)[1].doubleClick();
        const age2 = +$(sel.ageK).getValue();
        expect(age2).toEqual(data.ageM6);
    });

    it('A-044 Verify the functionality of the spinner with no value in the filed (increase)', function () {    //TC-040
        browser.url('');
        $$(sel.ageArrow)[0].click();
        const age1 = +$(sel.ageK).getValue();
        expect(age1).toEqual(data.ageM5);
    });

});