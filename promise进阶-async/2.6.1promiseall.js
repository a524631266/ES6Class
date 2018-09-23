let fetch = require('node-fetch');

let sleep = (timeout =2000)=>{
    return new Promise(
        res =>{
            setTimeout(res,timeout)
        }
    )
}

async function getZhihu3(id){ // 定义一个async方法，返回但是一个promise
    let url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    console.log("!11111")
    await sleep(2000)
    let response = await fetch(url) 
    if (response.status !== 200){
        throw new Error(`${response.url}::: ${response.statusText}`)
    }
    return response.json()
}


let promiseall_parallel = async ()=>{
    console.time("promisall_parallel")
    let [feweekly,toolingtips] =await  Promise.all([
        getZhihu3("feweekly"),
        getZhihu3("toolingtips")
    ])
    console.log(`feweekly:intro: ${feweekly.intro}`)
    console.log(`feweekly:name: ${feweekly.name}`)
    console.log(`toolingtips:intro: ${toolingtips.intro}`)
    console.log(`toolingtips:name: ${toolingtips.name}`)

    console.timeEnd("promisall_parallel")
}
promiseall_parallel()