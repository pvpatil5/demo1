var basepage = require("./basePage")

class login extends basepage {

    get username(){
        return  $("#ctl00_CPHContainer_txtUserLogin")
    }
    // async enterUsername(value){
    //     await (await this.username).clearValue()
    //     await (await this.username).setValue(value)
    //     await browser.pause(3000)
    // }

    get password(){
        return  $("#ctl00_CPHContainer_txtPassword")
    }
    // async enterPassword(pwd){
    //     await (await this.password).clearValue()
    //     await (await this.password).setValue(pwd)
    // }
    get loginBtn(){
        return   $("#ctl00_CPHContainer_btnLoginn")
    }
    // async clickOnLoginBtn(){
    //     await (await this.loginBtn).waitForDisplayed()
    //     await (await this.loginBtn).click()
    // }

    get resultText(){
        return $("#ctl00_CPHContainer_lblOutput")
    }
    async validatingResultText(){
        await (await this.resultText).waitForDisplayed()
        console.log("======================"+await (await this.resultText).getText());
        await expect(await this.resultText).toHaveText('Userid or Password did Not Match !!')
        await browser.pause(3000)
    }

}
module.exports = new login()
