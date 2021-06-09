class basePage {

    async navigateTOUrl(url){
        await browser.url(url)
        await browser.maximizeWindow()
    }
    async entervalue(element, value){
        await (await element).clearValue()
        await (await element).setValue(value)
    }
    async clickOnElement(element){
        await (await element).click()
    }
    async switchingWindow(){
       var currentWindow  =  await browser.getWindowHandle()
       var windowHandles = await browser.getWindowHandles()
       for (const window of windowHandles) {
           if (window != currentWindow) {
               await browser.switchToWindow(window)
               break
           }  
       }
    }
    async switchFrame(element){
        await browser.switchToFrame(await element)
    }


}
module.exports = basePage