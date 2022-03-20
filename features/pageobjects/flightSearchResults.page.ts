import { ChainablePromiseElement } from 'webdriverio';

class FlightSearchResultsPage{
    /**
     * define selectors using getter methods
     */

    get ContinueToBook() {
        return  $("//span[contains(.,'Continue To Book')]");
    }

    get ConfirmAndContinueToBook() {
        return  $("//span[contains(.,'Continue to Book')]");
    }

    get OptionsPageTitle()
    {
        return $("//*[text()='Customise your trip']")
    }
  

      /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async SelectFlight ()
    {
        await (await this.ContinueToBook).waitForEnabled({timeout:50000});
        await (await this.ContinueToBook).click(); 
    }
    async ContinueFromOptionsPage ()
    {
        
        await (await this.OptionsPageTitle).waitForEnabled({timeout:50000});
        await (await this.ContinueToBook).waitForEnabled();
        await (await this.ContinueToBook).click();
    }

    async  ContinueWithOutInsurance() {
        await (await this.ConfirmAndContinueToBook).waitForDisplayed({timeout:50000});
        await (await this.ConfirmAndContinueToBook).click()
    }




}

export default new FlightSearchResultsPage();
