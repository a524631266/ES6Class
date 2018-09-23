let fetch = require("node-fetch");

/**
 * 函数表达式写法
 * 
 * @param {*} id 
 */
let getname1 = async (id)=> {
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