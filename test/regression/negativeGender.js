const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');

describe('User cant choose more than 1 option', function () {

    it('A-111 User cant select he and she together', function () {      //TC-029
        browser.url('https://qa-apps.netlify.app/app_my_hero');
        const input1 = $$(sel.genderTypeK)[data.gender.he[0]].click();
        const input2 = $$(sel.genderTypeK)[data.gender.she[0]].click();
        const sheSelected = $$(sel.genderTypeK)[data.gender.she[0]].isSelected();
        const heSelected = $$(sel.genderTypeK)[data.gender.he[0]].isSelected();
        expect(sheSelected).toEqual(true);
        expect(heSelected).toEqual(false);
    });

    it('A-112 User cant select he and it together', function () {      //TC-030
        const input1 = $$(sel.genderTypeK)[data.gender.he[0]].click();
        const input2 = $$(sel.genderTypeK)[data.gender.it[0]].click();
        const heSelected = $$(sel.genderTypeK)[data.gender.he[0]].isSelected();
        const itSelected = $$(sel.genderTypeK)[data.gender.it[0]].isSelected();
        expect(itSelected).toEqual(true);
        expect(heSelected).toEqual(false);
    });

    it('A-113 User cant select she and it together', function () {      //TC-031
        const input1 = $$(sel.genderTypeK)[data.gender.she[0]].click();
        const input2 = $$(sel.genderTypeK)[data.gender.it[0]].click();
        const sheSelected = $$(sel.genderTypeK)[data.gender.she[0]].isSelected();
        const itSelected = $$(sel.genderTypeK)[data.gender.it[0]].isSelected();
        expect(itSelected).toEqual(true);
        expect(sheSelected).toEqual(false);
    });
    it('A-114 User cant select he, she and it together', function () {      //TC-032
        const input1 = $$(sel.genderTypeK)[data.gender.he[0]].click();
        const input2 = $$(sel.genderTypeK)[data.gender.she[0]].click();
        const input3 = $$(sel.genderTypeK)[data.gender.it[0]].click();
        const heSelected = $$(sel.genderTypeK)[data.gender.he[0]].isSelected();
        const sheSelected = $$(sel.genderTypeK)[data.gender.she[0]].isSelected();
        const itSelected = $$(sel.genderTypeK)[data.gender.it[0]].isSelected();
        expect(sheSelected).toEqual(false);
        expect(heSelected).toEqual(false);
        expect(itSelected).toEqual(true);
    });

});