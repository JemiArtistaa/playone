//@ts-check

import { test as setup } from "@playwright/test";

setup('write login session data',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{name:'Login'}).click()
    // await expect(await page.locator('aside[class="oxd-sidepanel"]')).toBeVisible()

    await page.context().storageState({path:'./auth/loginauth.json'})
})