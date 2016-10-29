
//var homepage = require('../spec/end2end/PageObjects.js');

var homepage = {
    pageHeading: element(By.id('heading')),
    get: function() {
        browser.get('index.html');
    }

};

describe('main controller', function(){
    it('should display a welcome message', function(){
         //expect(true).toBe(true); //enable this to test your setup and commented rest below
        homepage.get();
        //console.log(homepage) // test to check homepage object
        expect(homepage.pageHeading.getText()).toEqual('welcome to the end2end testing!');

    });
});