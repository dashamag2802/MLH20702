const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const uploadImageBrowser = require('../../helpers/uploadImageBrowser');
const path = require('path');

describe('Inputs for Image input field are correct', function () {


    it('A-052 Image input file able to browse', function () {   // TC-061
        browser.url('');
        browser.execute(function () {
            document.getElementsByTagName('input')[6].style.display = "block";
        })
        const image = $(sel.imageUploadK).isClickable();
        expect(image).toEqual(true);
    });

    it('A-053 Input for Image jpeg file by browsing form the computer', function () {   // TC-062
        browser.url('');
        uploadImageBrowser(data.imageChoice.JPEG200px);
        const image = $(sel.imageCorrectK).getAttribute('alt');
        expect(image).toEqual(data.imageChoice.JPEG200px);
    });

    it('A-054 Input for Image png file by browsing form the computer', function () {   // TC-063
        browser.url('');
        uploadImageBrowser(data.imageChoice.PNG500px);
        const image = $(sel.imageCorrectK).getAttribute('alt');
        expect(image).toEqual(data.imageChoice.PNG500px);
    });

    it('A-055 Input for Image file 200px', function () {   // TC-064
        browser.url('');
        uploadImageBrowser(data.imageChoice.PNG200px);
        const image = $(sel.imageCorrectK).getAttribute('alt');
        expect(image).toEqual(data.imageChoice.PNG200px);
    });

    it('A-056 Input for Image file 500px', function () {   // TC-065
        browser.url('');
        uploadImageBrowser(data.imageChoice.JPEG500px);
        const image = $(sel.imageCorrectK).getAttribute('alt');
        expect(image).toEqual(data.imageChoice.JPEG500px);
    });

    it('A-057 Input for Image file more than 500px', function () {   // TC-066
        browser.url('');
        uploadImageBrowser(data.imageChoice.PNGMore500px);
        const image = $(sel.imageCorrectK).getAttribute('alt');
        expect(image).toEqual(data.imageChoice.PNGMore500px);
    });

    it('A-058 Input for Image file delete after upload', function () {   // TC-067
        browser.url('');
        uploadImageBrowser(data.imageChoice.PNGMore500px);
        $(sel.imageDelete).click();
        const image = $(sel.imageCorrectK).isExisting();
        expect(image).toEqual(false);
    });

    it('A-059 Multiple files are not uploaded', function () {   // TC-068
        browser.url('');
        uploadImageBrowser(data.imageChoice.PNG200px);
        uploadImageBrowser(data.imageChoice.JPEG200px);
        expect(image).toEqual(false);
    });

    it('A-060 Can not upload doc. file', function () {   // TC-070
        browser.url('');
        uploadImageBrowser(data.imageChoice.docFile);
        const error = $(sel.imageError).isExisting();
        expect(error).toEqual(true);
    });

    it('A-061 Input for Image with special characteristics in Name', function () {   // TC-072
        browser.url('');
        uploadImageBrowser(data.imageChoice.imageSpecialCharacteristics);
        const image = $(sel.imageCorrectK).getAttribute('alt');
        expect(image).toEqual(data.imageChoice.imageSpecialCharacteristics);
    });

});