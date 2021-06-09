// var expect = require('chai').expect
describe('first test suite',  () => {

    // it('navigating to url and validating the page', async function () {

    //     await browser.url("https://webdriver.io/docs/api/browser/url")
    //     await browser.pause(2000)
    //     // await browser.saveScreenshot("C:/Users/Pradeep/Desktop/demo_webdriverIO/screenshots/sc_01.png")
    //     // console.log("size of the window is : "+browser.getWindowSize()); 
    //     console.log("the url of the page is : " +await browser.getUrl());

    //     await expect(browser).toHaveUrl('https://webdriver.io/docs/api/browser/url/')

    //     await expect(browser).toHaveTitle('url | WebdriverIO $$$$')
    // });

    it('deals with webElements', async () => {
        //navigating to the url
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        // identifying the checkbox
        var checkBox1 = await $('//input[@value="radio1"]')
        // clicking on checkbox
        await checkBox1.click()
        //validation on radio button
        await expect(checkBox1).toBeSelected()
        //validating element is presenr in view port
        var link = await $('//a[text() = "Latest News"]')
        await expect(link).toBeDisplayedInViewport()
        // identifying the textfield
        // var sugesstionTxtBox = await $("#autocomplete")
        // // clearing the textfield before entering the data
        // await sugesstionTxtBox.clearValue()
        // // entering a value inside a textfield
        // await sugesstionTxtBox.setValue("india")
        // // /identifying the element 
        // var suggestionElement =  await $("//li//div[text() = 'India']")
        // //waiting for ana element to display on webpage
        // await suggestionElement.waitForDisplayed()
        // //clicking on the element
        // await suggestionElement.click()

        // // identifying the dropdown list
        // var dropdownList = await $("#dropdown-class-example")

        // await dropdownList.selectByAttribute("value", "option3")
        // browser.pause(3000)
        // await dropdownList.selectByVisibleText("Option2")
        // await browser.pause(3000)
        // await dropdownList.selectByIndex(1)
        // await browser.pause(3000)
    });

        



        // console.log("the title of te page is : "+ browser.getTitle());

        // expect(browser.getUrl()).to.equal("https://webdriver.io/docs/api/browser/url");

        //validating url
        // var url = browser.getUrl()
        // expect(browser.getUrl()).to.equal(url);

        // expect(browser).toHaveUrl("     ")

        //validadting title
        // var title = browser.getTitle()
        // expect(browser.getTitle()).to.equal(title);
        // browser.pause(3000)
    // });
    // it('', () => {

    //     // navigate to a new URL
    //     browser.url('https://webdriver.io');
    //     // receive url
    //     console.log("=============== : "+browser.getUrl()); // outputs: "https://webdriver.io"

        
    // });

    // it('validating text of an aelement', () => {
    //     browser.url("https://webdriver.io/docs/api/element/getText/")
    //     browser.pause(3000)
    //     var text =  $("//h1[text() =  'getText']").getText()
    //     console.log("text of an element is : "+text);
        
    // });

    // it('validating the login page', async function ()  {
    //     // this.retries(2)
    //     // console.log("number of retries"+this.wdioRetries);
    //     await browser.url("http://www.testyou.in/Login.aspx")
    //     await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js')
    //     await browser.pause(3000)
    //     // var username = await $("#ctl00_CPHContainer_txtUserLogin")
    //     // await browser.pause(5000)
    //     // console.log("title of the page is : "+await browser.getTitle());
    //     // expect(await browser.getTitle()).to.equal("Login Page | Test Creator - TestYou 3333333")

    //     // await username.setValue("pradeep")
    //     // // var value = username.getAttribute("value")
    //     // var value = await username.getValue()
    //     // console.log("=================="+value);


    
});