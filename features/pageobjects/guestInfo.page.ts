import { ChainablePromiseElement } from 'webdriverio';
class GuestInfoPage{
    /**
     * define selectors using getter methods
     */

    get TitleOne() {
        return  $("//select[@id='title-0-0']");
    }
    
    get FirstNameOne() {
        return  $("//input[@id='firstName-0-0']");
    }

    get LastNameOne() {
        return  $("//input[@id='lastName-0-0']");
    }

    get DOBOne() {
        return  $("//input[@id='dob-0-0']");
    }

    get TitleTwo() {
        return  $("//select[@id='title-0-1']");
    }
    
    get FirstNameTwo() {
        return  $("//input[@id='firstName-0-1']");
    }

    get LastNameTwo() {
        return  $("//input[@id='lastName-0-1']");
    }

    get DOBTwo() {
        return  $("//input[@id='dob-0-1']");
    }

    get PhoneNumber() {
        return  $("//input[@id='mobileTel']");
    }
    get emailID() {
        return  $("//input[@id='email']");
    }
        
    get AddPaymentDetails() {
        return  $("//span[contains(.,'Add My Payment Details')]");
    }

     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
 
    async PopulateGuestDetails ()
    {
        await (await this.TitleOne).waitForExist({timeout:10000});
        await (await this.TitleOne).scrollIntoView();
        await (await this.TitleOne).selectByVisibleText("Mr")

        await (await this.FirstNameOne).setValue("Prasad")
        
        await (await this.LastNameOne).setValue("Sajja")
        await (await this.DOBOne).setValue("01/01/2000")

        await (await this.TitleTwo).waitForDisplayed();
        await (await this.TitleTwo).scrollIntoView();
        await (await this.TitleTwo).selectByVisibleText("Mr")
        await (await this.FirstNameTwo).setValue("Ram    ");
        await (await this.LastNameTwo).setValue("Sajja")
        await (await this.DOBTwo).setValue("01/01/2000")

        await (await this.PhoneNumber).scrollIntoView();
        await (await this.PhoneNumber).setValue("9886123856")
        await (await this.emailID).setValue("vsajja@travelrepublic.com")

        await ( await this.AddPaymentDetails).scrollIntoView();
        await (await this.AddPaymentDetails).click();
    }
}

export default new GuestInfoPage();
