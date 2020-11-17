const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('Inputs for Story type are correct', function () {

    it('A-045 Story type = Overcoming the Monster', function () {
        browser.url('');
        $(sel.storyClickK).click();
        const input = $$(sel.storyTypeK)[data.storyType.OvercomingTheMonster[0]].getAttribute('title');
        expect(input).toEqual(exp.OvercomingTheMonster);
    });

    it('A-046 Story type = Rebirth', function () {
        browser.url('');
        $(sel.storyClickK).click();
        const input = $$(sel.storyTypeK)[data.storyType.Rebirth[0]].getAttribute('title');
        expect(input).toEqual(exp.Rebirth);
    });

    it('A-047 Story type = Quest', function () {
        browser.url('');
        $(sel.storyClickK).click();
        const input = $$(sel.storyTypeK)[data.storyType.Quest[0]].getAttribute('title');
        expect(input).toEqual(exp.Quest);
    });

    it('A-048 Story type = Journey and Return', function () {
        browser.url('');
        $(sel.storyClickK).click();
        const input = $$(sel.storyTypeK)[data.storyType.JourneyAndReturn[0]].getAttribute('title');
        expect(input).toEqual(exp.JourneyAndReturn);
    });

    it('A-049 Story type = Rags and Riches', function () {
        browser.url('');
        $(sel.storyClickK).click();
        const input = $$(sel.storyTypeK)[data.storyType.RagsAndRiches[0]].getAttribute('title');
        expect(input).toEqual(exp.RagsAndRiches);
    });

    it('A-050 Story type = Tragedy', function () {
        browser.url('');
        $(sel.storyClickK).click();
        const input = $$(sel.storyTypeK)[data.storyType.Tragedy[0]].getAttribute('title');
        expect(input).toEqual(exp.Tragedy);
    });

    it('A-051 Story type = Comedy', function () {
        browser.url('');
        $(sel.storyClickK).click();
        const input = $$(sel.storyTypeK)[data.storyType.Comedy[0]].getAttribute('title');
        expect(input).toEqual(exp.Comedy);
    });

});