const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');

describe('Inputs for Name input field negative tests', function () {

    it('A-108 Inputs = Rus symbols "Герой"', function () {      //TC-019
        browser.url('');
        $(sel.nameK).setValue(data.name.specialCharRus);
        const value = $(sel.nameK).getValue();
        expect(value).toEqual(data.name.specialCharRus);
    });

    it('A-109 Inputs = user cannot input 71 symbols', function () {      //TC-020
        browser.url('');
        $(sel.nameK).setValue(data.name.name71);
        const error = $(sel.symbolMaxErrorA).isExisting();
        expect(error).toEqual(true);
    });

    it('A-110 Inputs = user cannot input 71 symbols by using copy+paste', function () {      //TC-021
        browser.url('');
        $(sel.nameK).setValue(data.name.name71);
        $(sel.nameK).doubleClick();
        browser.keys(["\uE009" + "x", "\uE000"]);
        $(sel.nameK).click();
        browser.keys(["\uE008" + "\uE016", "\uE000"]);
        const error = $(sel.symbolMaxErrorA).isExisting();
        expect(error).toEqual(true);
    });

});