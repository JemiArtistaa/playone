//@ts-check

import {test,expect} from '@playwright/test'

test.only('List Users',async({request})=>{

    const url = 'https://reqres.in/api/users?page=2'


    const responseResults = await request.get(url)
    expect (responseResults.ok()).toBeTruthy()

    const responseStatus = await responseResults.status()
    console.log(responseStatus)
    expect (responseStatus).toBe(200)
    const responseBody = await responseResults.json()
    for(let item of responseBody.data){
        expect (item).toHaveProperty('id')
        expect(item.id).not.toBeNull()
        expect (item).toHaveProperty('email')
        expect (item).toHaveProperty('first_name')
        expect (item).toHaveProperty('last_name')
        expect (item).toHaveProperty('avatar')
        expect(typeof('id')).toBe('string')
        expect(typeof('email')).toBe('string')
        expect(typeof('first_name')).toBe('string')
        expect(typeof('last_name')).toBe('string')
        expect(typeof('avatar')).toBe('string')
    }
    // console.log(responseBody.data[0].id)
    // expect (responseJson.name).toBe('Jam')
    // expect (responseJson.job).toBe('Artistaa')
    // expect(responseJson).toHaveProperty('id')
    // expect(responseJson).toHaveProperty('createdAt')

})




test('api test',async({request})=>{

    const url = 'https://reqres.in/api/users'
    const payload = {
        name: "Jam",
        job: "Artistaa"
    }

    const responseResults = await request.post(url,{data:payload})
    expect (responseResults.ok()).toBeTruthy()

    const responseStatus = await responseResults.status()
    console.log(responseStatus)
    expect (responseStatus).toBe(201)
    const responseJson = await responseResults.json()
    console.log(responseJson)
    expect (responseJson.name).toBe('Jam')
    expect (responseJson.job).toBe('Artistaa')
    expect(responseJson).toHaveProperty('id')
    expect(responseJson).toHaveProperty('createdAt')

})

// test.beforeEach(()=>{

// })