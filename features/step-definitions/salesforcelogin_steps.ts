import {Given, When, Then} from "@wdio/cucumber-framework"
import SalesForceLoginPage from '../pageobjects/salesforceLogin.page';
import SalesForceHomePage from '../pageobjects/salesforceHome.page';

    Given(/^I am on Sales force home page$/, async ()=> {
        await browser.url('https://login.salesforce.com/');
        await browser.maximizeWindow();
        await SalesForceLoginPage.login();   
        
    });
    Then(/^I verify salesforce home page$/, async ()=> {
        await SalesForceHomePage.verifyHomePage();  
        
    });

    When(/^I will create new Opportunities with (.*), (.*), (.*) and Amount (.*)$/, async (oppurtunity, account,stage,amount) => {
        await SalesForceHomePage.createNewOppurtunity(oppurtunity,account,stage,amount);
    });

    Then(/^I verify Quarterly goal data$/, async ()=> {
        await SalesForceHomePage.verifyQuaterlyGoalData();  
        
    });
  
 