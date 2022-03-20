class SalesForceLoginPage{
    /**
     * define selectors using getter methods
     */

    get userName() {
        return  $("#username");
    }

  
    get password() {
        return  $("#password");
    }

    get LoginIn() {
        return  $("#Login");
    }

      /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login ()
    { 
        await (await this.userName).setValue("Aashish.khanna@gmail.com.qede");
        await (await this.password).setValue("Coforge2022");
        await (await this.LoginIn).click();;
    }


}

export default new SalesForceLoginPage();
