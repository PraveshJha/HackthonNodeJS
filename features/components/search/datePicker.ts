import { ChainablePromiseElement } from 'webdriverio';
class DatePicker{
    /**
     * define selectors using getter methods
     */

    get datetimefield() {
        return $("//button[text()='Add dates']")
    }

    get calenderNext() {
        return $("//button[contains(@class,'next')]");
    }

    get fromDate() {
        return $("//div[@class='DayPicker-Day__day-number'][normalize-space()='22']")
    }

    get toDate() {
        return  $("//div[@class='DayPicker-Day__day-number'][normalize-space()='27']");
    }
      /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async SelectDates ()
    {
        console.log("****** Selecting Dates ***************" + Date.now());
        await (await this.datetimefield).click();
       
        await (await this.calenderNext).click();
        await (await this.calenderNext).click();
        await (await this.calenderNext).click();
        await (await this.calenderNext).click();

        await (await this.fromDate).click();
        await (await this.toDate).click();
        console.log("****** Selected Dates ***************" + Date.now());

    }


}

export default new DatePicker();