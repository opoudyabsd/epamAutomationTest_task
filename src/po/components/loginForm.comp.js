import loginData from '../../testData/loginData'
import LoginPage from '../page/login.page'
class LoginForm extends LoginPage{

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

    async setValue(username, password){
        await this.userName.setValue(username)
        await this.password.setValue(password)
    }

    async specialError(){
        if(loginData.error){
            await expect(this.errorText).toHaveText(loginData.error)
        }
    }

    async checkErrorPassword(){
        await expect(this.errorText).toHaveText("Epic sadface: Password is required")
    }
    async checkErrorUserName(){
        await expect(this.errorText).toHaveText('Epic sadface: Username is required')

    }

    async clearNameInput (){
        await this.userName.click()
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace'); 
    }
    async clearPasswordInput(){
        await this.password.click()
        await browser.keys(['Control', 'a']); 
        await browser.keys('Backspace'); 
    }
    
}
export default LoginForm