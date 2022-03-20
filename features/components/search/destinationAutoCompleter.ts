import { ChainablePromiseElement } from 'webdriverio';
class DestinationAutoCompleter{
    /**
     * define selectors using getter methods
     */

    get destinationButton() {
        return  $("//button[text()='Add a destination']");
    }

       get destination() {
        return  $("//input[@id='destination-autocompleter-field']");
    }

    get destinationItem() {
        return  $("//ul[@role='listbox']/li[1]/div[1]");
    }
  

      /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async SetDestination (destinationName:string)
    {
        console.log("****** Populating Destination ***************" + Date.now());
        await (await this.destinationButton).waitForDisplayed({timeout:20000});
        await (await this.destinationButton).click()
        await (await this.destination).setValue(destinationName);
        await browser.pause(2000);  
        await (await this.destinationItem).waitForDisplayed();
        await (await this.destinationItem).click();
        console.log("****** Populated Destination ***************" + Date.now());

    }


}

export default new DestinationAutoCompleter();
