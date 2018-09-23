const fetch = require('node-fetch')

let sleep = (timeout = 2000) => new Promise(res =>{
    setTimeout(res,timeout)
})

async function getZhihu3(id){ // 定义一个async方法，返回但是一个promise
    let url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    await sleep()
    let response = await fetch(url) 
    if (response.status !== 200){
        throw new Error(`${response.url}::: ${response.statusText}`)
    }
    let column = response.json()
    return column
}
let showColumn_serial = async () =>{ // 串行执行，先执行feweekly再执行toolingtips，但是为了加速运行我们必须要并行处理
    
    console.time("ShowSerial")
    let column = await getZhihu3('feweekly')
    let column2 = await getZhihu3('toolingtips')

    console.log(`intro: ${column.intro}`)
    console.log(`name: ${column.name}`)
    console.log(`intro: ${column2.intro}`)
    console.log(`name: ${column2.name}`)

    console.timeEnd("ShowSerial")
}
showColumn_serial().then(
    data=>{
        console.log("show",data)
    }
)

let showColumn_parallel = async () =>{ // 串行执行，先执行feweekly再执行toolingtips，但是为了加速运行我们必须要并行处理
    console.time("ShowParaller")
    
    let promise1 =  getZhihu3('feweekly')
    let promise2 = getZhihu3('toolingtips')
    
    let column = await promise1;
    let column2 = await promise2
    
    console.log(`intro: ${column.intro}`)
    console.log(`name: ${column.name}`)
    console.log(`intro: ${column2.intro}`)
    console.log(`name: ${column2.name}`)
    console.timeEnd("ShowParaller")

}
showColumn_parallel().then(
    data=>{
        console.log("show",data)
    }
)

