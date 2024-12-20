//@ts-check

import {test,expect} from '@playwright/test'

test('one',async ({request})=>{

    const url ='https://countries.trevorblades.com/'


    const response = await request.post(url,{data:{
        query: 
        `{
            countries(filter:{code:{eq:"DE"}})
            {
              code
              emoji
              languages{
                name
              }
            }
        }`
          
    }})

    console.log(response)
    const resbody = await response.json()
    console.log(resbody)
    expect(await resbody.data.countries[0].code).toBe('DE')
    // expect(resbody.data.countries).toHaveLength(250)
    // const resStatus = response.status()
    // const resStatusText = response.statusText()
    // console.log(resStatus)
    // console.log(resStatusText)
    // console.log(resbody)

})


