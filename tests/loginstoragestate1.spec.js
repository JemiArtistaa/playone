//@ts-check

import {test,expect} from '@playwright/test'

test.beforeEach('move to desired page',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/')
})

test('login state test', async({page})=>{

    await expect(page.locator('aside[class="oxd-sidepanel"]')).toBeVisible()

})

test('login state test with logout', async({page})=>{

    await page.locator('i[class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click()
    await page.locator('ul[class="oxd-dropdown-menu"]>li')
               .filter({hasText:'Logout'}).click()
})

