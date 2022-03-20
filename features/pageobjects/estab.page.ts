import { ChainablePromiseElement } from 'webdriverio';
class EstabPage{
    /**
     * define selectors using getter methods
     */

    get ChooseRoom() {
        return  $("//span[contains(.,'Choose Room')]");
    }
    
    get ConfirmAndContinue() {
        return  $("//span[contains(.,'Confirm and Continue to Flights')]");
    }

  

      /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async ChooseRooms ()
    {
        await (await this.ChooseRoom).waitForDisplayed({timeout:50000});
        await (await this.ChooseRoom).click();

        await (await this.ConfirmAndContinue).waitForDisplayed({timeout:50000});
        await (await this.ConfirmAndContinue).click();
    }


}

export default new EstabPage();
