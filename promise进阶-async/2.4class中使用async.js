let fetch = require("node-fetch");


// 由于目前浏览器的顶级作用域中async为非法的所以，一般会在一个闭合作用域中返回结果
class APIClient{
    async getname1(id){
        let url = `https://zhuanlan.zhihu.com/api/columns/${id}`
        let response = await fetch(url)
        return await response.json()
    }
}
(
    async (id)  => {
        let client = new APIClient()
        let column = await client.getname1("feweekly")
        console.log(`intro: ${column.intro}`)//intro: 在前端领域跟上时代的脚步，广度和深度不断精进
        console.log(`name: ${column.name}`)//name: 前端周刊
    }
)()