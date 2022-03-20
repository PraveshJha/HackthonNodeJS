import { ChainablePromiseElement } from 'webdriverio';
class AirportSelector{
    /**
     * define selectors using getter methods
     */

    get flyingFromButton() {
        return  $("//button[text()='Add airports']");
    }

    get LondonAllAirpots() {
        return  $("//input[@id='checkbox-option-LGW:LHR:LTN:SEN:STN:LCY']");
    }
      /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async SelectAirport()
    {
       
        console.log("****** Selecting Airport ***************" + Date.now());
       // await (await this.LondonAllAirpots).waitForDisplayed();
        await (await this.LondonAllAirpots).click();
        console.log("****** Selected Airport ***************" + Date.now());
    }

}


export default new AirportSelector();  