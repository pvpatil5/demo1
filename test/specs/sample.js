describe('element methods', () => {
    // it('scrolling to perticular element', async () => {
    //     browser.url("https://skillrary.com/")
    //    var element = await $("//h3[text() =  'Enterprise ']")
    //    await element.scrollIntoView()
    //    await expect(element).toBeDisplayedInViewport()
    // });

    it('mouseHover action', async () => {
        await browser.maximizeWindow()
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        var HoverElement = await $("#mousehover")
        await HoverElement.scrollIntoView()
        await HoverElement.waitForDisplayed()
        await HoverElement.moveTo()
        await browser.pause(2000)
        var reloadElement = await $("//a[text() = 'Reload']")
        await reloadElement.waitForDisplayed()
        await reloadElement.click()
    });
});