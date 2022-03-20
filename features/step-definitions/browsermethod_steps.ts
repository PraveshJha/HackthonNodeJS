import {Given} from "@wdio/cucumber-framework"

    Given(/^I will test browser method$/, async ()=> {

        // launch URL
        await browser.url('https://login.salesforce.com/');
        await browser.url('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
        await browser.waitUntil(
            async () => await browser.execute(() => document.readyState === 'complete'));
        //await browser.debug(1000);
        await browser.maximizeWindow();
        await browser.switchToFrame(0);
        const elementtest = await $("#s");
         var myelementtest = await elementtest.waitForDisplayed();
        let guid = await browser.getWindowHandle()

         const element = await $("#username");
         var myelement = await element.waitForDisplayed();
         await element.keys("F12");
         const elementnew = $(await (browser.findElement("id","username")));
         const elementx = await elementnew.isDisplayed();
         var test = "QA";
         //await browser.debug(1000);
         await browser.keys(['Meta', 'F12']);
         //await browser.debug(100);
         await browser.keys("F11")

        /*
        await browser.switchToWindow(guid);
        // browser refresh;
        await browser.refresh();
        // open new tab
        
        await browser.newWindow('https://www.chaijs.com/' );
        await browser.newWindow('https://google.com' );
        //let guid2 = await browser.getWindowHandle();
       // await browser.switchToWindow(guid);
        await browser.closeWindow();
        
        // reload session
        const  Title = await browser.getTitle(); 
        const expected = 10;
        const actual = 15;
        */
        
    });
  

 