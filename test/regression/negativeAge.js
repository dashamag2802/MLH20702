const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const inputValueAge = require ('../../helpers/inputValueAge.js');

describe('Checking the main functionality', function () {

    it('A-115 Doesnt accept negative integer', function () {
        browser.url('');
        inputValueAge(data.ageM11);
        const error = $(sel.ageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-116 Doesnt accept fractional number', function () {
        browser.url('');
        inputValueAge(data.ageM12);
        const error = $(sel.ageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-117  Doesnt accept integer greater than 12 symbols', function () {
        browser.url('');
        inputValueAge(data.ageM7);
        const error = $(sel.ageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-118 Spinner doesnt let go over 12 symbols', function () {
        browser.url('');
        inputValueAge(data.ageM8);
        $$(sel.ageArrow)[0].click();
        const error = $(sel.ageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-119 Spinner doesnt allow to go lower than 1 in age', function () {
        browser.url('');
        inputValueAge(data.ageM9);
        $$(sel.ageArrow)[1].click();
        const error = $(sel.ageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-120 Age field doesnt accept 0', function () {
        browser.url('');
        inputValueAge(data.ageM10);
        const error = $(sel.ageError).isExisting();
        expect(error).toEqual(true);
    });

});

