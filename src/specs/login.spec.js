import LoginPage from './../po/page/login.page'
import LoginForm from './../po/components/loginForm.container'
import Dashbord from '../po/components/dashbord'
const loginPage = new LoginPage()
const loginForm = new LoginForm()
const dashbord = new Dashbord()

describe("Check login page", ()=>{
    beforeEach(async()=>{
        await loginPage.open()
    })


    it('Test Login form with empty credentials', async()=>{

        await loginForm.userName.setValue("Bohdan")
        await loginForm.password.setValue(12345678)

        await loginForm.clearNameInput()
        await loginForm.clearPasswordInput()

        await loginForm.loginButton.click()

        await expect(loginForm.errorText).toHaveText('Epic sadface: Username is required')

    })

    it('Test Login form with credentials by passing Username', async()=>{
        await loginForm.userName.setValue("Bohdan")
        await loginForm.password.setValue(12345678)

        await loginForm.clearPasswordInput()

        await loginForm.loginButton.click()

        await expect(loginForm.errorText).toHaveText("Epic sadface: Password is required")
    })

    it("Test Login form with credentials by passing Username & Password", async()=>{
        await loginForm.userName.setValue("standard_user")
        await loginForm.password.setValue('secret_sauce')
        await loginForm.loginButton.click()
        await expect(dashbord.title).toBeDisplayed()

    })


})