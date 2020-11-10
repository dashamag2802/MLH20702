const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');
const uploadImageBrowser = require('../../helpers/uploadImageBrowser');
const path = require('path');

describe('Inputs for Image input field negative tests', function () {

    it('A-059 Multiple files are not uploaded', function () {   // TC-068
        browser.url('');
        uploadImageBrowser(data.imageChoice.PNG200px);
        uploadImageBrowser(data.imageChoice.JPEG200px);
        const image = $(sel.imageCorrectK).waitForDisplayed(true);
        expect(image).toEqual(true);
    });

    it('A-060 Can not upload doc. file', function () {   // TC-070
        browser.url('');
        uploadImageBrowser(data.imageChoice.docFile);
        const error = $(sel.imageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-061 Input for Image with special characteristics in Name uploaded', function () {  // TC-072
        browser.url('');
        uploadImageBrowser(data.imageChoice.imageSpecialCharacteristics);
        const image = $(sel.imageCorrectK).getAttribute('alt');
        expect(image).toEqual(data.imageChoice.imageSpecialCharacteristics);
    });

});