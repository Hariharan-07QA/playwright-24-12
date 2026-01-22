import test from '@playwright/test' 

test('locator',async({page})=>{
    await page.goto('https://demoqa.com/alertsWindows')
    const text= page.locator("//div[@class='element-list collapse show']/child::ul/child::li").nth(2);
    console.log(await text.locator('//span').textContent())
    await page.locator("//div[@class='element-list collapse show']/child::ul/child::li").nth(2).click();
    
    
})