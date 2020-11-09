const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const uploadImageBrowser = require('../../helpers/uploadImageBrowser');
const path = require('path');

describe('Gender choice is correct', function () {

    it('A-036 Gender choice click on He', function () {      //TC-024
        browser.url('');
        const input = $$(sel.genderTypeK)[data.gender.he[0]].click();
        const text = $$(sel.genderTypeK)[data.gender.he[0]].getAttribute('value');
        expect(text).toEqual(data.gender.he[1]);
    });

    it('A-037 Gender choice click on She', function () {      //TC-025
        const input = $$(sel.genderTypeK)[data.gender.she[0]].click();
        const text = $$(sel.genderTypeK)[data.gender.she[0]].getAttribute('value');
        expect(text).toEqual(data.gender.she[1]);
    });

    it('A-038 Gender choice click on It', function () {      //TC-026
        const input = $$(sel.genderTypeK)[data.gender.it[0]].click();
        const text = $$(sel.genderTypeK)[data.gender.it[0]].getAttribute('value');
        expect(text).toEqual(data.gender.it[1]);
    });

});