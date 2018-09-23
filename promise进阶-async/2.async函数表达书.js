let fetch = require("node-fetch");

/**
 * 函数表达式写法
 * async 函数返回的是一个promise
 * await 会把一个promise的成功态resolve（data）返回 data
 * @param {*} id 
 */
let getname1 = async function(id) {
    let url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    let response = await fetch(url)
    return await response.json()
}
getname1("feweekly").then(
    column=>{
        console.log(`intro: ${column.intro}`)//intro: 在前端领域跟上时代的脚步，广度和深度不断精进
        console.log(`name: ${column.name}`)//name: 前端周刊
    }
)