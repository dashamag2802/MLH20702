const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4.js');
const inputValues4andClick = require ('../../helpers/inputValues4andClick.js');
const inputValueAge = require ('../../helpers/inputValueAge.js');

describe('Checking the main functionality', function () {

    it('A-118 Doesnt accept negative integer', function () {      //TC-041
        browser.url('');
        inputValueAge(data.ageM11);
        browser.pause(1000);
        const error = $(sel.ageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-119 Doesnt accept fractional number', function () {     //TC-042
        browser.url('');
        inputValueAge(data.ageM12);
        browser.pause(1000);
        const error = $(sel.ageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-120  Doesnt accept integer greater than 12 symbols', function () {    //TC-043
        browser.url('');
        inputValueAge(data.ageM7);
        browser.pause(1000);
        const error = $(sel.ageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-121  Spinner doesnt let go over 12 symbols', function () {     //TC-044
        browser.url('');
        inputValueAge(data.ageM8);
        $$(sel.ageArrow)[0].click();
        browser.pause(1000);
        const error = $(sel.ageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-122  Spinner doesnt allow to go lower than 1 in age', function () {    //TC-045
        browser.url('');
        inputValueAge(data.ageM9);
        $$(sel.ageArrow)[1].click();
        browser.pause(1000);
        const error = $(sel.ageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-123  Age field doesnt accept 0', function () {     //TC-046
        browser.url('');
        inputValueAge(data.ageM10);
        browser.pause(1000);
        const error = $(sel.ageError).isExisting();
        expect(error).toEqual(true);
    });

});

