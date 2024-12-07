//@ts-check

import {test} from "@playwright/test"

test('orangeHRM login Test',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com')

})
