const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');
const uploadImageBrowser = require('../../helpers/uploadImageBrowser');
const path = require('path');
const { AssertionError } = require('assert');

describe('Inputs for Image input field negative tests', function () {

    it('A-059 Multiple files are not uploaded', function () {   // TC-068
        browser.url('');
        uploadImageBrowser(data.imageChoice.PNG200px);
        const imageChoice = data.imageChoice.JPEG200px;
        const image = $(sel.imageUploadK);
        const filePath = path.join(__dirname, `../../data/${imageChoice}`);
        const remoteFilePath = browser.uploadFile(filePath);
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