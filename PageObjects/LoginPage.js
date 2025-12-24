const dataset=JSON.parse(JSON.stringify(require('../TestData/LoginTestData.json')))
export class LoginPage{
    constructor(page){
        this.page =page
        this.username=page.locator("input[name='username']")
        this.password=page.locator("input[name='password']")
        this.loginBtn=page.locator("#login-btn")
        this.error_msg =page.locator("#alert-message");
    }

   async login(username,password) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
     }
    async valid_login() {
        await this.page.goto(dataset.base_url)
        console.log(dataset.valid_login.username)
        await this.username.fill(dataset.valid_login.username)
        await this.password.fill(dataset.valid_login.password)
        await this.loginBtn.click()
     }

}