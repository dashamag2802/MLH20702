const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');

describe('User cant choose more than 1 option', function () {

    it('A-111 User cant select he and she together', function () {
        browser.url('');
        $$(sel.genderTypeK)[data.gender.he[0]].click();
        $$(sel.genderTypeK)[data.gender.she[0]].click();
        const sheSelected = $$(sel.genderTypeK)[data.gender.she[0]].isSelected();
        const heSelected = $$(sel.genderTypeK)[data.gender.he[0]].isSelected();
        const choice = (heSelected || sheSelected);
        expect(choice).toEqual(sheSelected);
        //expect(heSelected).toEqual(false);
    });

    it('A-112 User cant select he and it together', function () {
        $$(sel.genderTypeK)[data.gender.he[0]].click();
        $$(sel.genderTypeK)[data.gender.it[0]].click();
        const heSelected = $$(sel.genderTypeK)[data.gender.he[0]].isSelected();
        const itSelected = $$(sel.genderTypeK)[data.gender.it[0]].isSelected();
        const choice = (heSelected || itSelected);
        expect(choice).toEqual(itSelected);
    });

    it('A-113 User cant select she and it together', function () {
        $$(sel.genderTypeK)[data.gender.she[0]].click();
        $$(sel.genderTypeK)[data.gender.it[0]].click();
        const sheSelected = $$(sel.genderTypeK)[data.gender.she[0]].isSelected();
        const itSelected = $$(sel.genderTypeK)[data.gender.it[0]].isSelected();
        const choice = (sheSelected || itSelected);
        expect(choice).toEqual(itSelected);
    });
    it('A-114 User cant select he, she and it together', function () {
        $$(sel.genderTypeK)[data.gender.he[0]].click();
        $$(sel.genderTypeK)[data.gender.she[0]].click();
        $$(sel.genderTypeK)[data.gender.it[0]].click();
        const heSelected = $$(sel.genderTypeK)[data.gender.he[0]].isSelected();
        const sheSelected = $$(sel.genderTypeK)[data.gender.she[0]].isSelected();
        const itSelected = $$(sel.genderTypeK)[data.gender.it[0]].isSelected();
        const choice = (heSelected || itSelected || sheSelected);
        expect(choice).toEqual(itSelected);
    });

});