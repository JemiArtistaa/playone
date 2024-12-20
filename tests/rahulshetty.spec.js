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

    await page.locator('[class="products"]>div').filter({hasText:'Capsicum'}).getByRole('button',{name:'ADD TO CART'}).click()
    await page.locator('[class="product"]').filter({hasText:'Capsicum'}).getByRole('button',{name:'ADD TO CART'}).click()

    const plist =  page.locator('[class="products"]')
    await plist.locator('div')
                .filter({hasText:'Capsicum'})
                .getByRole('button',{name:'ADD TO CART'})
                .click()

    await page.pause()

})