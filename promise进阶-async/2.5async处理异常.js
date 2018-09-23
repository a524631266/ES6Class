const fetch = require('node-fetch')
async function getZhihu3(id){ // 定义一个async方法，返回但是一个promise
    let url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    let response = await fetch(url) 
    // [Symbol(Response internals)]: 
    // { url: 'https://zhuanlan.zhihu.com/api/columns/feweekly111',
    //   status: 404,
    //   statusText: 'Not Found',
    //   headers: Headers { [Symbol(map)]: [Object] } 
    // } 
    if (response.status !== 200){
        throw new Error(`${response.url}::: ${response.statusText}`)
    }
    let column = response.json()
    return column
}

getZhihu3('feweekly').then(column=>{
    console.log(`intro: ${column.intro}`)//intro: 在前端领域跟上时代的脚步，广度和深度不断精进
    console.log(`name: ${column.name}`)//name: 前端周刊
})