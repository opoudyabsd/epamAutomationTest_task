import MainPage from "../page/main.page"
class DashbordComp extends MainPage {
    
    get title(){
        return $('//div[@class="app_logo"]')
    }

    async validateTitle(){
        await expect(this.title).toHaveText('Swag Labs')
        await expect(this.title).toHaveTitle('Swag Labs')
    }
}
export default DashbordComp