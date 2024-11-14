class LoginForm{

    get userName(){
        return $('//input[@id="user-name"]')
    }
    get password(){
        return $('//input[@id="password"]')
    }
    get loginButton(){
        return $('//input[@id="login-button"]')
    }
    get errorText(){
        return $('//h3[@data-test="error"]')
    }

    async clearNameInput (){
        await this.userName.click()
        await browser.keys(['Control', 'a']); // Select All
        await browser.keys('Backspace'); // Delete all selected text
    }
    async clearPasswordInput(){
        await this.password.click()
        await browser.keys(['Control', 'a']); // Select All
        await browser.keys('Backspace'); // Delete all selected text
    }
    
}
export default LoginForm