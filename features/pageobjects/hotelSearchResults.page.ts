import { ChainablePromiseElement } from 'webdriverio';
class HotelSearchResultsPage{
    /**
     * define selectors using getter methods
     */

    get ViewMoreDetails() {
        return  $("//span[contains(.,'View More Details')]");
    }

  
    get BreadCrumb() {
        return $("//ol[@class='sc-c-breadcrumb_list']")
    }

      /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async SelectAHotel ()
    {
        await (await this.ViewMoreDetails).waitForExist({timeout:50000})  
        await (await this.ViewMoreDetails).scrollIntoView(); 
        const Itenary  = await((await this.BreadCrumb).getText())
        console.log("Itenary" + await((await this.BreadCrumb).getText()))   
        await (await this.ViewMoreDetails).click();;
    }


}

export default new HotelSearchResultsPage();
