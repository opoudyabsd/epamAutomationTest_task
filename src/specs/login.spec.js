import LoginPage from './../po/page/login.page'
import LoginForm from '../po/components/loginForm.comp'
import DashbordComp from '../po/components/dashbord.comp'
import loginData from "../testData/loginData"
import logger from "../configs/winstonLogger"
const loginPage = new LoginPage()
const loginForm = new LoginForm()
const dashbord = new DashbordComp()

describe("Check login page", ()=>{
    beforeEach(async()=>{
        await loginPage.open()
    })

    loginData.forEach(({userName,password, error})=>{
        it('Test Login form with empty credentials', async()=>{
            logger.info('Starting test with empty credentials');

            await loginForm.setInputValue(userName, password)
            logger.info("Set username and password value")
    
            await loginForm.clearNameInput()
            logger.info("Clear username form")
            await loginForm.clearPasswordInput()
            logger.info("Clear password form")

            await loginForm.loginButton.click()
            logger.info('Click login button')
    
            await loginForm.checkErrorUserName()
            logger.info('Check the error messages: "Username is required".')
        })
    
        it('Test Login form with credentials by passing Username', async()=>{
            logger.info('Starting test with empty credentials');
            
            await loginForm.setInputValue(userName, password)
            logger.info("Set username and password value")

            await loginForm.clearPasswordInput()
            logger.info("Clear password form")

            await loginForm.loginButton.click()
            logger.info('Click login button')

            await loginForm.checkErrorPassword()
            logger.info('Check the error messages: "Password is required".')
    
        })
    
        it("Test Login form with credentials by passing Username & Password", async()=>{
            logger.info('Starting test with empty credentials');

            await loginForm.setInputValue(userName, password)
            logger.info("Set username and password value")

            await loginForm.loginButton.click()
            logger.info('Click login button')

            
            error ? await loginForm.specialError() : await dashbord.validateTitle();
            logger.info('Check for error if not validate the title “Swag Labs” in the dashboard.')
        })
    })
})