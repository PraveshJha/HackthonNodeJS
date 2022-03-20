import {Given, When, Then} from "@wdio/cucumber-framework"
import HomePage from '../pageobjects/home.page';
import HotelSearchResultsPage from '../pageobjects/hotelSearchResults.page';
import EstabPage from '../pageobjects/estab.page';
import FlightSearchResultsPage from '../pageobjects/flightSearchResults.page'
import GuestInfoPage from '../pageobjects/guestInfo.page'
import PaymentOptionsPage from '../pageobjects/paymentOptions.page'

    Given(/^I am on TR Site$/, async ()=> {
        await browser.url('https://www.travelrepublic.co.uk');
        await browser.maximizeWindow(); 
        
        
    });

    When(/^I search for a hotels$/, async function () {
        await HomePage.PopulateSearch("Dubai");
    });

    When(/^Choose a hotel$/, async function () {
        await HotelSearchResultsPage.SelectAHotel();
    });
  
    When(/^Choose rooms$/, async function () {
        await EstabPage.ChooseRooms();
    });
  
    When(/^Choose the flight$/, async function () {
        await FlightSearchResultsPage.SelectFlight();
        await FlightSearchResultsPage.ContinueFromOptionsPage();
        await FlightSearchResultsPage.ContinueWithOutInsurance();
    });

    When(/^Populate guest details$/, async function () {
        await GuestInfoPage.PopulateGuestDetails();
    });
  
    When(/^Populate address details$/, async function () {
        await PaymentOptionsPage.PopulateAddress();
    });
  
    When(/^Populate payment details$/, async function () {
       await PaymentOptionsPage.PopulatePaymentDetails();
    });
  
    When(/^Confirm hotel booking$/, async function () {
        await PaymentOptionsPage.CompletePayment();
    });
    Then(/^I should be presented with the booking id$/, async function () {
     
    });

 