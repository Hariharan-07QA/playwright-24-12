export class Homepage {
    constructor(page) {
      this.page = page;
      this.dashboard_btn =page.locator("[href*='dashboard']")
      this.accounts = page.locator("#nav-accounts");
      this.transactions= page.locator('#nav-transactions');
      this.add_account_quick=page.locator("#add-account-quick");
      this.account_name_txt_box=page.locator("#account-name");
    }
  
  }
  