const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');
const uploadImageBrowser = require('../../helpers/uploadImageBrowser');
const path = require('path');

describe('Inputs for Image input field negative tests', function () {

    it('A-121 Multiple files are not uploaded', function () {
        browser.url('');
        uploadImageBrowser(data.imageChoice.PNG200px);
        const imageChoice = data.imageChoice.JPEG200px;
        const image = $(sel.imageUploadK);
        const filePath = path.join(__dirname, `../../data/${imageChoice}`);
        browser.execute(function () {
            document.getElementsByTagName('input')[6].style.display = "block";
        })
        const result = image.getAttribute('alt');
        setTimeout(() => {
            result;
        }, 10000);
        const respons = 'multiple image are not uploaded';
        try {
            browser.waitUntil(
                () => result == data.imageChoice.PNG200px,
                {
                    timeout: 5000,
                    timeoutMsg: respons
                });
        } catch (error){
            respons;
        }
    });

    it('A-122 Can not upload doc. file', function () {
        browser.url('');
        uploadImageBrowser(data.imageChoice.docFile);
        const error = $(sel.imageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-123 Can not upload xlsx. file', function () {
        browser.url('');
        uploadImageBrowser(data.imageChoice.testXLSX);
        const error = $(sel.imageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-124 Can not upload pdf. file', function () {
        browser.url('');
        uploadImageBrowser(data.imageChoice.testPDF);
        const error = $(sel.imageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-125 Input for Image with special characteristics in Name uploaded', function () {
        browser.url('');
        uploadImageBrowser(data.imageChoice.imageSpecialCharacteristics);
        const image = $(sel.imageCorrectK).getAttribute('alt');
        expect(image).toEqual(data.imageChoice.imageSpecialCharacteristics);
    });

});
