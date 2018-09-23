const fetch = require('node-fetch')

function getZhihu(id){
    let url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    fetch(url)
    .then( response => response.json())
    .then(column=>{
        console.log(`intro: ${column.intro}`)
        console.log(`name: ${column.name}`)
    })
}
// getZhihu('feweekly')

"1. 扁平化异步代码"

async function getZhihu2(id){ // 定义一个async方法，返回但是一个promise
    let url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    let response = await fetch(url)
    let column = await response.json()
    console.log(`intro: ${column.intro}`)
    console.log(`name: ${column.name}`)
}

getZhihu2('feweekly').then(data=>{
    console.log("getZhihu2 data:",data)
})

// async 返回的是promise await 返回的是一个promise的成功态数据
const fetch = require('node-fetch')
async function getZhihu3(id){ // 定义一个async方法，返回但是一个promise
    let url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    let response = await fetch(url)
    let column = response.json()
    return column
}

getZhihu3('feweekly').then(column=>{
    console.log(`intro: ${column.intro}`)//intro: 在前端领域跟上时代的脚步，广度和深度不断精进
    console.log(`name: ${column.name}`)//name: 前端周刊
})


