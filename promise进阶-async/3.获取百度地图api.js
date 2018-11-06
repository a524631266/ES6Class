const fetch = require('node-fetch')
// async function getBaiduApi(name){ // 定义一个async方法，返回但是一个promise
//     let url = `http://api.map.baidu.com/geocoder?address=${name}&output=json`
//     let response = await fetch(url) 
//     // [Symbol(Response internals)]: 
//     // { url: 'https://zhuanlan.zhihu.com/api/columns/feweekly111',
//     //   status: 404,
//     //   statusText: 'Not Found',
//     //   headers: Headers { [Symbol(map)]: [Object] } 
//     // } 
//     if (response.status !== 200){
//         throw new Error(`${response.url}::: ${response.statusText}`)
//     }
//     let column = response.json()
//     return column
// }

// data = getBaiduApi("北京")
// data.then(
//     data=>{
//         console.log(data)
//     }
// )
let name = "北京"
let url = `http://api.map.baidu.com/geocoder?address=${name}&output=json`

const axios = require("axios")


axios({
    method:"get",
    url:url,
    mode:'no-cors',
    headers:{ Accept: 'application/json'}
}).then(
    result=>{
        console.log("data",result)
    },
    // err=>{
    //     console.log("err",err)
    // }
)

