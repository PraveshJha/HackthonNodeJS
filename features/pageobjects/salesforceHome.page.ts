const expectChai = require('chai').expect;
class SalesForceHomePage {
    /**
     * define selectors using getter methods
     */

    get addImage() {
        return $("//*[@data-key='add']");
    }

    get newOppurtunity() {
        return $("//span[text()='New Opportunity']");
    }

    get InputOppurtunity() {
        return $("//label/span[text()='Opportunity Name']/../..//input");
    }

    get InputAccountName() {
        return $("//label/span[text()='Account Name']/../..//input");
    }

    get InputAmount() {
        return $("//label/span[text()='Amount']/../..//input");
    }

    get buttonSave() {
        return $("//div[@class='slds-grid bottomBar']//button/span[text()='Save']");
    }

    get stage() {
        return $("//span[text()='Stage']/../..//*[@class='uiPopupTrigger']//a");
    }
    get AccountList() {
        return $$("//div[@class='listContent']/ul/li");
    }

    get graphData() {
        return $$("//div[@class='overlay homeHeroChartOverlay']//div/a");
    }

    get NewAccountImage() {
        return $("//span[@title='New Account']");
    }

    get saveNewAccount() {
        return $("//div[contains(@class,'modal-container')]//span[text()='Save']");
    }

    get NewAccountName() {
        return $("//div[contains(@class,'modal-container')]//label/span[text()='Account Name']/../..//input");
    }

    get toastMessage() {
        return $("//*[contains(@class,'toast')]");
    }


    async getAccountName(accountName: string) {
        return $("//div[@class='listContent']/ul/li//div[@title='" + accountName + "']");
    }

    async getStageName(stageName: string) {
        return $("//div[contains(@class,'visible')]//ul/li/a[@title='" + stageName + "']");
    }


    /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
    async verifyHomePage() {
        await browser.navigateTo("https://abcltd3-dev-ed.lightning.force.com/lightning/page/home");
        await (await this.addImage).waitForEnabled();
        await browser.pause(5000);
    }

    async createNewOppurtunity(newOppurtunity : string, accountName: string, stageName: string, Amount: string) {
        await (await this.addImage).click();
        await (await this.newOppurtunity).waitForDisplayed();
        await browser.pause(2000);
        await (await this.newOppurtunity).click();
        await (await this.InputOppurtunity).waitForDisplayed();
        await (await this.InputOppurtunity).setValue(newOppurtunity);
        await (await this.InputAccountName).setValue(accountName);
        try {
            await browser.pause(4000);
            const isAccount = await (await this.getAccountName(accountName)).waitForClickable();
            if (isAccount) {
                await (await this.getAccountName(accountName)).click();
            }
        }
        catch (error) {

            await (await this.NewAccountImage).click();
            await browser.pause(5000);
            await (await this.NewAccountName).waitForDisplayed();
            await (await this.NewAccountName).setValue(accountName);
            await (await this.saveNewAccount).click();
            await browser.pause(10000);

        }
        await (await this.stage).click();
        await browser.pause(2000);
        await (await this.getStageName(stageName)).waitForClickable();
        await browser.pause(2000);
        await (await this.getStageName(stageName)).click();
        await (await this.InputAmount).setValue(Amount);
        await (await this.buttonSave).scrollIntoView();
        await (await this.buttonSave).click();
        await browser.pause(2000);
        expect(await this.toastMessage).toBeDisplayed();

    }

    async verifyQuaterlyGoalData() {
        var allData = await this.graphData;
        for(let i=0;i<allData.length;i++)
        {
            await allData[i].scrollIntoView();
            const graphData = await allData[i].getText();
            console.log("Graph Data is " + graphData);
            expectChai(graphData.includes('$'),'Graph Data '+graphData).to.be.true;
        }

    }

}

export default new SalesForceHomePage();
