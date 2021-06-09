var login = require("C:/Users/Pradeep/Desktop/demo_webdriverIO/test/pageobjects/loginPage.js")
var data = require("C:/Users/Pradeep/Desktop/demo_webdriverIO/testData/data.json")

const {exceldata} = require("C:/Users/Pradeep/Desktop/demo_webdriverIO/testData/excelData.js")
// var obj_excelData = require("C/Users/Pradeep/Desktop/demo_webdriverIO/testData/excelData.js")
// var exceldata = obj_excelData.exceldata

describe('loging to application', function() {
    // this.retries(3)
    it('login by jason dat', async function()  {
        // this.retries(2)
       await login.navigateTOUrl(data.url)
       await login.entervalue(login.username, data.username)
       await login.entervalue(login.password, data.password)
       await login.clickOnElement(login.loginBtn)
       await login.validatingResultText()
    });

    it.skip('login by excel adat', async function()  {
        console.log("##############################################"+this.wdioRetries)
        await login.navigateTOUrl(exceldata[0].URL)
        await login.entervalue(login.username, exceldata[0].USERNAME)
        await login.entervalue(login.password, exceldata[0].PASSWORD)
        await login.clickOnElement(login.loginBtn)
        await login.validatingResultText()
       
     },2);
});

