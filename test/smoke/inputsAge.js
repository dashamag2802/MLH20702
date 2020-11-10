const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const uploadImageBrowser = require('../../helpers/uploadImageBrowser');
const path = require('path');

describe('Inputs for Age input field are correct', function () {

    it('A-039 Input 1 to Age input field', function () {      //TC-033
        browser.url('');
        const input = $(sel.ageK).setValue(data.age.a1);
        const value = +$(sel.ageK).getValue();
        expect(value).toEqual(data.age.a1);
    });

    it('A-040                   ', function () {      //TC-034
        browser.url('');




    });

    it('A-041                   ', function () {      //TC-035
        browser.url('');




    });

    it('A-042                   ', function () {      //TC-036
        browser.url('');




    });

    it('A-043                   ', function () {      //TC-037
        browser.url('');




    });

    it('A-044                   ', function () {      //TC-038
        browser.url('');




    });

});