const data = require('../../data/testData.json');
const sel = require('../../data/selectors.json');
const uploadImageBrowser = require('../../helpers/uploadImageBrowser');

describe('Inputs for Image input field are correct', function () {


    it('A-052 Image input file able to browse', function () {
        browser.url('');
        browser.execute(function () {
            document.getElementsByTagName('input')[6].style.display = "block";
        })
        const image = $(sel.imageUploadK).isClickable();
        expect(image).toEqual(true);
    });

    it('A-053 Input for Image jpeg file by browsing form the computer', function () {
        browser.url('');
        uploadImageBrowser(data.imageChoice.JPEG200px);
        const image = $(sel.imageCorrectK).getAttribute('alt');
        expect(image).toEqual(data.imageChoice.JPEG200px);
    });

    it('A-054 Input for Image png file by browsing form the computer', function () {
        browser.url('');
        uploadImageBrowser(data.imageChoice.PNG500px);
        const image = $(sel.imageCorrectK).getAttribute('alt');
        expect(image).toEqual(data.imageChoice.PNG500px);
    });

    it('A-055 Input for Image file 200px', function () {
        browser.url('');
        uploadImageBrowser(data.imageChoice.PNG200px);
        const image = $(sel.imageCorrectK).getAttribute('alt');
        expect(image).toEqual(data.imageChoice.PNG200px);
    });

    it('A-056 Input for Image file 500px', function () {
        browser.url('');
        uploadImageBrowser(data.imageChoice.JPEG500px);
        const image = $(sel.imageCorrectK).getAttribute('alt');
        expect(image).toEqual(data.imageChoice.JPEG500px);
    });

    it('A-057 Input for Image file more than 500px', function () {
        browser.url('');
        uploadImageBrowser(data.imageChoice.PNGMore500px);
        const image = $(sel.imageCorrectK).getAttribute('alt');
        expect(image).toEqual(data.imageChoice.PNGMore500px);
    });

    it('A-058 Input for Image file delete after upload', function () {
        browser.url('');
        uploadImageBrowser(data.imageChoice.PNGMore500px);
        $(sel.imageDelete).click();
        const image = $(sel.imageCorrectK).isExisting();
        expect(image).toEqual(false);
    });

});