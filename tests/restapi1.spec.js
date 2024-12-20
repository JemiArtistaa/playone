//@ts-check

import {test,expect} from '@playwright/test'

const baseUrl = 'https://reqres.in'

test('List Users',async({request})=>{

    const url = `${baseUrl}/api/users?page=1`


    const responseResults = await request.get(url)
    expect (responseResults.ok()).toBeTruthy()

    const responseStatus =  responseResults.status()
    expect (responseStatus).toBe(200)
    const responseBody = await responseResults.json()

    expect (responseBody).toHaveProperty('page')
    expect(responseBody.page).not.toBeNull()
    expect(responseBody.page).not.toBeNaN()
    expect(typeof(responseBody.page)).toBe('number')

    expect (responseBody).toHaveProperty('per_page')
    expect(responseBody.per_page).not.toBeNull()
    expect(responseBody.per_page).not.toBeNaN()
    expect(typeof(responseBody.per_page)).toBe('number')

    expect (responseBody).toHaveProperty('total')
    expect(responseBody.total).not.toBeNull()
    expect(responseBody.total).not.toBeNaN()
    expect(typeof(responseBody.total)).toBe('number')

    expect (responseBody).toHaveProperty('total_pages')
    expect(responseBody.total_pages).not.toBeNull()
    expect(responseBody.total_pages).not.toBeNaN()
    expect(typeof(responseBody.total_pages)).toBe('number')

    expect (responseBody).toHaveProperty('data')
    expect(responseBody.data).not.toBeNull()
    expect(responseBody.data).not.toBeNaN()
    expect(typeof(responseBody.data)).toBe('object')
    expect (await responseBody.data).toHaveLength(6)

    expect(responseBody).toHaveProperty('support')
    expect(responseBody.support).not.toBeNull()
    expect(responseBody.support).not.toBeNaN()
    expect(typeof(responseBody.support)).toBe('object')

    expect(responseBody.support).toHaveProperty('url')
    expect(responseBody.support.url).not.toBeNull()
    expect(responseBody.support.url).not.toBeNaN()
    expect(typeof(responseBody.support.url)).toBe('string')

    expect(responseBody.support).toHaveProperty('text')
    expect(responseBody.support.text).not.toBeNull()
    expect(responseBody.support.text).not.toBeNaN()
    expect(typeof(responseBody.support.text)).toBe('string')

    for(let item of responseBody.data){

        expect (item).toHaveProperty('id')
        expect(item.id).not.toBeNull()
        expect(item.id).not.toBeNaN()
        expect (typeof(item.id)).toBe('number')

        expect (item).toHaveProperty('email')
        expect(item.email).not.toBeNull()
        expect(item.email).not.toBeNaN()
        expect (typeof(item.email)).toBe('string')

        expect (item).toHaveProperty('first_name')
        expect(item.first_name).not.toBeNull()
        expect(item.first_name).not.toBeNaN()
        expect (typeof(item.first_name)).toBe('string')

        expect (item).toHaveProperty('last_name')
        expect(item.last_name).not.toBeNull()
        expect(item.last_name).not.toBeNaN()
        expect (typeof(item.last_name)).toBe('string')

        expect (item).toHaveProperty('avatar')
        expect(item.avatar).not.toBeNull()
        expect(item.avatar).not.toBeNaN()
        expect (typeof(item.avatar)).toBe('string')

    }
  

})

test('Single User',async({request})=>{

    const url = `${baseUrl}/api/users/2`

    const responseResults = await request.get(url)
    expect (responseResults.ok()).toBeTruthy()

    const responseBody = await responseResults.json()
    console.log(responseBody)
    expect(typeof(await responseBody.data)).toBe('object')
    expect(typeof(await responseBody.support)).toBe('object')

    expect(responseBody.data).toHaveProperty('id')
    expect(responseBody.data.id).not.toBeNull()
    expect(responseBody.data.id).not.toBeNaN()
    expect(typeof(responseBody.data.id)).toBe('number')

    expect(responseBody.data).toHaveProperty('email')
    expect(responseBody.data.email).not.toBeNull()
    expect(responseBody.data.email).not.toBeNaN()
    expect(typeof(responseBody.data.email)).toBe('string')

    expect(responseBody.data).toHaveProperty('first_name')
    expect(responseBody.data.first_name).not.toBeNull()
    expect(responseBody.data.first_name).not.toBeNaN()
    expect(typeof(responseBody.data.first_name)).toBe('string')

    expect(responseBody.data).toHaveProperty('last_name')
    expect(responseBody.data.last_name).not.toBeNull()
    expect(responseBody.data.last_name).not.toBeNaN()
    expect(typeof(responseBody.data.last_name)).toBe('string')

    expect(responseBody.data).toHaveProperty('avatar')
    expect(responseBody.data.avatar).not.toBeNull()
    expect(responseBody.data.avatar).not.toBeNaN()
    expect(typeof(responseBody.data.avatar)).toBe('string')

    expect(responseBody.support).toHaveProperty('url')
    expect(responseBody.support.url).not.toBeNull()
    expect(responseBody.support.url).not.toBeNaN()
    expect(typeof(responseBody.support.url)).toBe('string')

    expect(responseBody.support).toHaveProperty('text')
    expect(responseBody.support.text).not.toBeNull()
    expect(responseBody.support.text).not.toBeNaN()
    expect(typeof(responseBody.support.text)).toBe('string')

})

test('Single User Not Found',async({request})=>{

    const url = `${baseUrl}/api/users/23`
    
    const responseResults = await request.get(url)
    expect (responseResults.ok()).toBeFalsy()

    const responseStatus =  responseResults.status()
    expect (responseStatus).toBe(404)

    const responseBody = await responseResults.json()
    console.log(responseBody)

    expect(responseBody).not.toHaveProperty('data')
    expect(responseBody).not.toHaveProperty('support')

    // expect(responseBody).toHaveProperty('error')
    // expect(responseBody.error).not.toBeNull()
    // expect(responseBody.error).not.toBeNaN()
    // expect(typeof(responseBody.error)).toBe('string')
    // expect(responseBody.error).toBe('Not Found')

    // expect(responseBody).toHaveProperty('code')
    // expect(responseBody.code).not.toBeNull()
    // expect(responseBody.code).not.toBeNaN()
    // expect(typeof(responseBody.code)).toBe('number')
    // expect(responseBody.code).toBe(404)

    // expect(responseBody).toHaveProperty('message')
    // expect(responseBody.message).not.toBeNull()
    // expect(responseBody.message).not.toBeNaN()
    // expect(typeof(responseBody.message)).toBe('string')
    // expect(responseBody.message).toBe('Resource not found')


})

test('List <Resource>',async({request})=>{


    const url = `${baseUrl}/api/unknown`

    const responseResults = await request.get(url)
    expect (responseResults.ok()).toBeTruthy()

    const responseStatus =  responseResults.status()
    expect (responseStatus).toBe(200)

    const responseBody = await responseResults.json()
    console.log(responseBody)

    expect (responseBody).toHaveProperty('page')
    expect(responseBody.page).not.toBeNull()
    expect(responseBody.page).not.toBeNaN()
    expect(typeof(responseBody.page)).toBe('number')

    expect (responseBody).toHaveProperty('per_page')
    expect(responseBody.per_page).not.toBeNull()
    expect(responseBody.per_page).not.toBeNaN()
    expect(typeof(responseBody.per_page)).toBe('number')

    expect (responseBody).toHaveProperty('total')
    expect(responseBody.total).not.toBeNull()
    expect(responseBody.total).not.toBeNaN()
    expect(typeof(responseBody.total)).toBe('number')

    expect (responseBody).toHaveProperty('total_pages')
    expect(responseBody.total_pages).not.toBeNull()
    expect(responseBody.total_pages).not.toBeNaN()
    expect(typeof(responseBody.total_pages)).toBe('number')

    expect (responseBody).toHaveProperty('data')
    expect(responseBody.data).not.toBeNull()
    expect(responseBody.data).not.toBeNaN()
    expect(typeof(responseBody.data)).toBe('object')
    expect (await responseBody.data).toHaveLength(6)

    expect(responseBody).toHaveProperty('support')
    expect(responseBody.support).not.toBeNull()
    expect(responseBody.support).not.toBeNaN()
    expect(typeof(responseBody.support)).toBe('object')

    expect(responseBody.support).toHaveProperty('url')
    expect(responseBody.support.url).not.toBeNull()
    expect(responseBody.support.url).not.toBeNaN()
    expect(typeof(responseBody.support.url)).toBe('string')

    expect(responseBody.support).toHaveProperty('text')
    expect(responseBody.support.text).not.toBeNull()
    expect(responseBody.support.text).not.toBeNaN()
    expect(typeof(responseBody.support.text)).toBe('string')

    for(let item of responseBody.data){

        expect (item).toHaveProperty('id')
        expect(item.id).not.toBeNull()
        expect(item.id).not.toBeNaN()
        expect (typeof(item.id)).toBe('number')

        expect (item).toHaveProperty('name')
        expect(item.name).not.toBeNull()
        expect(item.name).not.toBeNaN()
        expect (typeof(item.name)).toBe('string')

        expect (item).toHaveProperty('year')
        expect(item.year).not.toBeNull()
        expect(item.year).not.toBeNaN()
        expect (typeof(item.year)).toBe('number')

        expect (item).toHaveProperty('color')
        expect(item.color).not.toBeNull()
        expect(item.color).not.toBeNaN()
        expect (typeof(item.color)).toBe('string')

        expect (item).toHaveProperty('pantone_value')
        expect(item.pantone_value).not.toBeNull()
        expect(item.pantone_value).not.toBeNaN()
        expect (typeof(item.pantone_value)).toBe('string')

    }
})

test('Single <Resource>',async({request})=>{

    const url = `${baseUrl}/api/unknown/2`

    const responseResults = await request.get(url)
    expect (responseResults.ok()).toBeTruthy()

    const responseBody = await responseResults.json()
    console.log(responseBody)

    expect(responseBody).toHaveProperty('data')
    expect(typeof(await responseBody.data)).toBe('object')

    expect(responseBody).toHaveProperty('support')
    expect(typeof(await responseBody.support)).toBe('object')

    expect(responseBody.data).toHaveProperty('id')
    expect(responseBody.data.id).not.toBeNull()
    expect(responseBody.data.id).not.toBeNaN()
    expect(typeof(responseBody.data.id)).toBe('number')

    expect(responseBody.data).toHaveProperty('name')
    expect(responseBody.data.name).not.toBeNull()
    expect(responseBody.data.name).not.toBeNaN()
    expect(typeof(responseBody.data.name)).toBe('string')

    expect(responseBody.data).toHaveProperty('year')
    expect(responseBody.data.year).not.toBeNull()
    expect(responseBody.data.year).not.toBeNaN()
    expect(typeof(responseBody.data.year)).toBe('number')

    expect(responseBody.data).toHaveProperty('color')
    expect(responseBody.data.color).not.toBeNull()
    expect(responseBody.data.color).not.toBeNaN()
    expect(typeof(responseBody.data.color)).toBe('string')

    expect(responseBody.data).toHaveProperty('pantone_value')
    expect(responseBody.data.pantone_value).not.toBeNull()
    expect(responseBody.data.pantone_value).not.toBeNaN()
    expect(typeof(responseBody.data.pantone_value)).toBe('string')

    expect(responseBody.support).toHaveProperty('url')
    expect(responseBody.support.url).not.toBeNull()
    expect(responseBody.support.url).not.toBeNaN()
    expect(typeof(responseBody.support.url)).toBe('string')

    expect(responseBody.support).toHaveProperty('text')
    expect(responseBody.support.text).not.toBeNull()
    expect(responseBody.support.text).not.toBeNaN()
    expect(typeof(responseBody.support.text)).toBe('string')

})

test('Single <Resource> Not Found',async({request})=>{
    
    const url = `${baseUrl}/api/unknown/23`
    
    const responseResults = await request.get(url)
    expect (responseResults.ok()).toBeFalsy()

    const responseStatus =  responseResults.status()
    expect (responseStatus).toBe(404)

    const responseBody = await responseResults.json()
    console.log(responseBody)

    expect(responseBody).not.toHaveProperty('data')
    expect(responseBody).not.toHaveProperty('support')

})


test('Create',async({request})=>{

    const url = `${baseUrl}/api/users`
    const payload = {
        name: "Jemi Artistaa",
        job: "Artistaa"
    }

    const responseResults = await request.post(url,{data:payload})
    expect (responseResults.ok()).toBeTruthy()

    const responseStatus =  responseResults.status()
    expect (responseStatus).toBe(201)

    const responseBody = await responseResults.json()
    console.log(responseBody)

    expect(responseBody).toHaveProperty('name')
    expect(responseBody.name).not.toBeNull()
    expect(responseBody.name).not.toBeNaN()
    expect (typeof(responseBody.name)).toBe('string')
    expect (responseBody.name).toBe(payload.name)

    expect(responseBody).toHaveProperty('job')
    expect(responseBody.job).not.toBeNull()
    expect(responseBody.job).not.toBeNaN()
    expect (typeof(responseBody.job)).toBe('string')
    expect (responseBody.job).toBe(payload.job)

    expect(responseBody).toHaveProperty('id')
    expect(responseBody.id).not.toBeNull()
    expect(responseBody.id).not.toBeNaN()
    expect (typeof(responseBody.id)).toBe('string')

    expect(responseBody).toHaveProperty('createdAt')
    expect(responseBody.createdAt).not.toBeNull()
    expect(responseBody.createdAt).not.toBeNaN()
    expect (typeof(responseBody.createdAt)).toBe('string')
})

test('Update Put',async({request})=>{

    const url = `${baseUrl}/api/users/2`
    const payload = {
        name: "Jemi Artistaa",
        job: "Artistaa"
    }

    const responseResults = await request.put(url,{data:payload})
    expect (responseResults.ok()).toBeTruthy()

    const responseStatus =  responseResults.status()
    expect (responseStatus).toBe(200)

    const responseBody = await responseResults.json()
    console.log(responseBody)

    expect(responseBody).toHaveProperty('name')
    expect(responseBody.name).not.toBeNull()
    expect(responseBody.name).not.toBeNaN()
    expect (typeof(responseBody.name)).toBe('string')
    expect (responseBody.name).toBe(payload.name)

    expect(responseBody).toHaveProperty('job')
    expect(responseBody.job).not.toBeNull()
    expect(responseBody.job).not.toBeNaN()
    expect (typeof(responseBody.job)).toBe('string')
    expect (responseBody.job).toBe(payload.job)

    expect(responseBody).toHaveProperty('updatedAt')
    expect(responseBody.updatedAt).not.toBeNull()
    expect(responseBody.updatedAt).not.toBeNaN()
    expect (typeof(responseBody.updatedAt)).toBe('string')
})

test('Update Patch',async({request})=>{

    const url = `${baseUrl}/api/users/2`
    const payload = {
        name: "Jemi Artistaa",
        job: "Artistaa"
    }

    const responseResults = await request.patch(url,{data:payload})
    expect (responseResults.ok()).toBeTruthy()

    const responseStatus =  responseResults.status()
    expect (responseStatus).toBe(200)

    const responseBody = await responseResults.json()
    console.log(responseBody)

    expect(responseBody).toHaveProperty('name')
    expect(responseBody.name).not.toBeNull()
    expect(responseBody.name).not.toBeNaN()
    expect (typeof(responseBody.name)).toBe('string')
    expect (responseBody.name).toBe(payload.name)

    expect(responseBody).toHaveProperty('job')
    expect(responseBody.job).not.toBeNull()
    expect(responseBody.job).not.toBeNaN()
    expect (typeof(responseBody.job)).toBe('string')
    expect (responseBody.job).toBe(payload.job)

    expect(responseBody).toHaveProperty('updatedAt')
    expect(responseBody.updatedAt).not.toBeNull()
    expect(responseBody.updatedAt).not.toBeNaN()
    expect (typeof(responseBody.updatedAt)).toBe('string')
})

test('Delete',async({request})=>{

    const url = `${baseUrl}/api/users/2`

    const responseResults = await request.delete(url)
    expect (responseResults.ok()).toBeTruthy()

    const responseStatus =  responseResults.status()
    expect (responseStatus).toBe(204)
    expect(responseResults.statusText()).toBe('No Content')

})

test('Register Successful',async({request})=>{

    const url = `${baseUrl}/api/register`
    const payload = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }

    const responseResults = await request.post(url,{data:payload})  
    expect (responseResults.ok()).toBeTruthy()

    const responseStatus =  responseResults.status()
    expect (responseStatus).toBe(200)

    const responseBody = await responseResults.json()
    console.log(responseBody)

    expect(typeof(responseBody)).toBe('object')
    expect(responseBody).toHaveProperty('id')
    expect(responseBody.id).not.toBeNull()
    expect(responseBody.id).not.toBeNaN()
    expect (typeof(responseBody.id)).toBe('number')

    expect(responseBody).toHaveProperty('token')
    expect(responseBody.token).not.toBeNull()
    expect(responseBody.token).not.toBeNaN()
    expect (typeof(responseBody.token)).toBe('string')
})

test('Register Unsuccessful',async({request})=>{

    const url = `${baseUrl}/api/register`
    const payload = {
        "email": "sydney@fife"
    }

    const responseResults = await request.post(url,{data:payload})  
    expect (responseResults.ok()).toBeFalsy()

    const responseStatus =  responseResults.status()
    expect (responseStatus).toBe(400)

    const responseBody = await responseResults.json()
    console.log(responseBody)

    expect(typeof(responseBody)).toBe('object')
    expect(responseBody).toHaveProperty('error')
    expect(responseBody.error).not.toBeNull()
    expect(responseBody.error).not.toBeNaN()
    expect (typeof(responseBody.error)).toBe('string')
    expect(responseBody.error).toBe('Missing password')

})

test('Login Successful',async({request})=>{
    
    const url = `${baseUrl}/api/login`
    const payload = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }

    const responseResults = await request.post(url,{data:payload})  
    expect (responseResults.ok()).toBeTruthy()

    const responseStatus =  responseResults.status()
    expect (responseStatus).toBe(200)

    const responseBody = await responseResults.json()
    console.log(responseBody)

    expect(typeof(responseBody)).toBe('object') 
    expect(responseBody).toHaveProperty('token')
    expect(responseBody.token).not.toBeNull()
    expect(responseBody.token).not.toBeNaN()
    expect (typeof(responseBody.token)).toBe('string')
})

test('Login Unsuccessful',async({request})=>{
    
    const url = `${baseUrl}/api/login`
    const payload = {
        "email": "peter@klaven"
    }

    const responseResults = await request.post(url,{data:payload})  
    expect (responseResults.ok()).toBeFalsy()

    const responseStatus =  responseResults.status()
    expect (responseStatus).toBe(400)

    const responseBody = await responseResults.json()
    console.log(responseBody)

    expect(typeof(responseBody)).toBe('object')
    expect(responseBody).toHaveProperty('error')
    expect(responseBody.error).not.toBeNull()
    expect(responseBody.error).not.toBeNaN()
    expect (typeof(responseBody.error)).toBe('string')
    expect(responseBody.error).toBe('Missing password')

})

test('Delayed Response',async({request})=>{

    const url = `${baseUrl}/api/users?delay=3`

    const responseResults = await request.get(url)
    expect (responseResults.ok()).toBeTruthy()

    const responseStatus =  responseResults.status()
    expect (responseStatus).toBe(200)

    const responseBody = await responseResults.json()
    console.log(responseBody)

    expect (responseBody).toHaveProperty('page')
    expect(responseBody.page).not.toBeNull()
    expect(responseBody.page).not.toBeNaN()
    expect(typeof(responseBody.page)).toBe('number')

    expect (responseBody).toHaveProperty('per_page')
    expect(responseBody.per_page).not.toBeNull()
    expect(responseBody.per_page).not.toBeNaN()
    expect(typeof(responseBody.per_page)).toBe('number')

    expect (responseBody).toHaveProperty('total')
    expect(responseBody.total).not.toBeNull()
    expect(responseBody.total).not.toBeNaN()
    expect(typeof(responseBody.total)).toBe('number')

    expect (responseBody).toHaveProperty('total_pages')
    expect(responseBody.total_pages).not.toBeNull()
    expect(responseBody.total_pages).not.toBeNaN()
    expect(typeof(responseBody.total_pages)).toBe('number')

    expect (responseBody).toHaveProperty('data')
    expect(responseBody.data).not.toBeNull()
    expect(responseBody.data).not.toBeNaN()
    expect(typeof(responseBody.data)).toBe('object')
    expect (await responseBody.data).toHaveLength(6)

    expect(responseBody).toHaveProperty('support')
    expect(responseBody.support).not.toBeNull()
    expect(responseBody.support).not.toBeNaN()
    expect(typeof(responseBody.support)).toBe('object')

    expect(responseBody.support).toHaveProperty('url')
    expect(responseBody.support.url).not.toBeNull()
    expect(responseBody.support.url).not.toBeNaN()
    expect(typeof(responseBody.support.url)).toBe('string')

    expect(responseBody.support).toHaveProperty('text')
    expect(responseBody.support.text).not.toBeNull()
    expect(responseBody.support.text).not.toBeNaN()
    expect(typeof(responseBody.support.text)).toBe('string')

    for(let item of responseBody.data){

        expect (item).toHaveProperty('id')
        expect(item.id).not.toBeNull()
        expect(item.id).not.toBeNaN()
        expect (typeof(item.id)).toBe('number')

        expect (item).toHaveProperty('email')
        expect(item.email).not.toBeNull()
        expect(item.email).not.toBeNaN()    
        expect (typeof(item.email)).toBe('string')

        expect (item).toHaveProperty('first_name')
        expect(item.first_name).not.toBeNull()
        expect(item.first_name).not.toBeNaN()
        expect (typeof(item.first_name)).toBe('string')

        expect (item).toHaveProperty('last_name')
        expect(item.last_name).not.toBeNull()
        expect(item.last_name).not.toBeNaN()
        expect (typeof(item.last_name)).toBe('string')

        expect (item).toHaveProperty('avatar')
        expect(item.avatar).not.toBeNull()
        expect(item.avatar).not.toBeNaN()
        expect (typeof(item.avatar)).toBe('string')

    }
})