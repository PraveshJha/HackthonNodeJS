import { ChainablePromiseElement } from 'webdriverio';
class PaymentOptionsPage{
    /**
     * define selectors using getter methods
     */


     

    get AddressDialogTrigger() {
        return  $("#dialogTrigger");
    }
    
    get AddressSearch() {
        return  $("#addressSearch");
    }

    get address() {
        return  $("//li[@class='sc-c-option-list__item']");
    }

    get ccNoIframe() {
        return  $("#pciFrame_cc");
    }
    get ccvIframe() {
        return  $("#pciFrame_cvv3");
    }

    get ccNumber() {
        return  $("//input[@name='cardnumber']");
    }

    get expiryDate() {
        return  $("#expiryDate");
    }
    get ccv() {
        return  $("//input[@placeholder='123']");
    }
    
    get pay() {
        return  $("//span[contains(.,'Pay')]");
    }





     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
 
    async PopulateAddress ()
    {
     await (await this.AddressDialogTrigger).click()
     await (await this.AddressSearch).click()
     await (await this.AddressSearch).setValue("KT26nh")
     await browser.pause(3000)
     await (await this.address).click()
    //  if (await (await this.address).isDisplayed())
    //  await (await this.address).click()
    }

    
    async PopulatePaymentDetails ()
    {
       // https://pp2.travelrepublic.co.uk/v3/booking/payment-details/ba7a9096-1bf0-477b-9c45-5f105513f81d/0/d4bc39de-0ac6-4d2b-a306-cf7dd03e2ff8/
       await browser.pause(20000)
    await (await this.expiryDate).scrollIntoView()
    await (await this.expiryDate).setValue("10/27")
    browser.pause(10000)
    await browser.switchToFrame(0)
    await (await this.ccNumber).setValue("4444333322221111")
    await browser.switchToParentFrame() 
    browser.pause(10000)
    await browser.switchToFrame($("#pciFrame_cvv3"))
    await (await this.ccv).setValue("111")
    browser.pause(100000)
     
    }


//span[contains(.,'Pay')]


    async CompletePayment ()
    {
    await (await this.pay).click()
    
    }
   

}


export default new PaymentOptionsPage();
