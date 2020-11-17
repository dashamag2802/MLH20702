const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');

describe('Gender choice is correct', function () {

    it('A-036 Gender choice click on He', function () {
        browser.url('');
        $$(sel.genderTypeK)[data.gender.he[0]].click();
        const text = $$(sel.genderTypeK)[data.gender.he[0]].getAttribute('value');
        expect(text).toEqual(data.gender.he[1]);
    });

    it('A-037 Gender choice click on She', function () {
        $$(sel.genderTypeK)[data.gender.she[0]].click();
        const text = $$(sel.genderTypeK)[data.gender.she[0]].getAttribute('value');
        expect(text).toEqual(data.gender.she[1]);
    });

    it('A-038 Gender choice click on It', function () {
        $$(sel.genderTypeK)[data.gender.it[0]].click();
        const text = $$(sel.genderTypeK)[data.gender.it[0]].getAttribute('value');
        expect(text).toEqual(data.gender.it[1]);
    });

});