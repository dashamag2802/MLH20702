const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const uploadImageBrowser = require('../../helpers/uploadImageBrowser');
const path = require('path');

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

    it('A-033 Input special characteristics for name', function () {      //TC-016
        browser.url('');
        const input = $(sel.nameK).setValue(data.name.specialChar);
        const value = $(sel.nameK).getValue();
        expect(value).toEqual(data.name.specialChar);
    });

    it('A-034 Inputs                 ', function () {      //TC-017
        browser.url('');
        // const input = $(sel.nameK).setValue(data.name.specialChar);
        // const value = $(sel.nameK).getValue();
        // expect(value).toEqual(data.name.specialChar);
    });

    it('A-035 Inputs                 ', function () {      //TC-018
        browser.url('');
        // const input = $(sel.nameK).setValue(data.name.specialChar);
        // const value = $(sel.nameK).getValue();
        // expect(value).toEqual(data.name.specialChar);
    });


});