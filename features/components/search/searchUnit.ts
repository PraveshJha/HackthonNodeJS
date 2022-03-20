import { ChainablePromiseElement } from 'webdriverio';
import DestinationCompleter from './destinationAutoCompleter';
import AirportSelector from './airportSelector';
import  DatePicker from './datePicker';
import GuestSelection from './guestSelection';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchUnit {
    /**
     * define selectors using getter methods
     */
   

get searchButton(){
    return  $("//span[normalize-space()='Search']");
}

    async PopulateSearch(destination:string)
    { 
       await DestinationCompleter.SetDestination(destination);
       await AirportSelector.SelectAirport();
       await DatePicker.SelectDates();
       await (await this.searchButton).click();
    }


}

export default new SearchUnit();