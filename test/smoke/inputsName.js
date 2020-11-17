const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');

describe('Inputs for Name input field are correct', function () {

    it('A-031 Input English letters for name', function () {
        browser.url('');
        $(sel.nameK).setValue(data.name.Hero);
        const value = $(sel.nameK).getValue();
        expect(value).toEqual(data.name.Hero);
    });

    it('A-032 Input digits for name', function () {
        browser.url('');
        $(sel.nameK).setValue(data.name.numbers);
        const value = $(sel.nameK).getValue();
        expect(value).toEqual(data.name.numbers);
    });

    it('A-033 Input special characteristics for name', function () {
        browser.url('');
        $(sel.nameK).setValue(data.name.specialChar);
        const value = $(sel.nameK).getValue();
        expect(value).toEqual(data.name.specialChar);
    });

    describe('A-034 Input one letter, one number, one special symbol for Name', function () {

        it('A-034.1 Inputs = "A"', function () {
            browser.url('');
            $(sel.nameK).setValue(data.name.specialCharA);
            const value = $(sel.nameK).getValue();
            expect(value).toEqual(data.name.specialCharA);
        });

        it('A-034.2 Inputs = 1', function () {
            browser.url('');
            $(sel.nameK).setValue(data.name.specialChar1);
            const value = +$(sel.nameK).getValue();
            expect(value).toEqual(data.name.specialChar1);
        });

        it('A-034.3 Inputs = $', function () {
            browser.url('');
            $(sel.nameK).setValue(data.name.specialChar$);
            const value = $(sel.nameK).getValue();
            expect(value).toEqual(data.name.specialChar$);
        });

    });

    it('A-035 Inputs = 70 symbols', function () {
        browser.url('');
        $(sel.nameK).setValue(data.name.specialChar70);
        const value = $(sel.nameK).getValue();
        expect(value).toEqual(data.name.specialChar70);
    });

});