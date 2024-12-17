//@ts-check

import {test} from '@playwright/test'

test('rahulshetty website',async ({browser}) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')
    await page.waitForLoadState("networkidle")

    const productList =  await page.locator('[class="products"]>div>h4').all()
    console.log(productList)


    for(let item of productList){

        if(await  item.locator('h4').textContent()=='Capsicum'){
            
            await item.getByRole('button',{name:'ADD TO CART'}).click()
            break

        }
        
    }
    await page.pause()

})