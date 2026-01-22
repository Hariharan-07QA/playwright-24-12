export class Homepage {
    constructor(page) {
      this.page = page;
      this.dashboard_btn =page.locator("[href*='dashboard']")
      this.accounts = page.locator("#nav-accounts");
      this.transactions= page.locator('#nav-transactions');
      this.add_account_quick=page.locator("a#add-account-link");
      
      //Add account model elements
      this.account_name_txt_box=page.locator("#account-name");
      this.accout_type_dropdown=page.selectOption("//button[@id='account-type']/following-sibling::select",'savings');
      
    }
  
  }
  