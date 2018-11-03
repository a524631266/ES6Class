// 1. await 等待一个promise返回
// 在react-thunk中，会把action改造成异步的函数，一般会用在异步调用api接口

let waitp = (s)=>{
    return new Promise(
        (resolve,reject)=>{
            setTimeout(()=>{
                resolve(`等待${s}秒成功`)
            },s * 1000)
        }
    )
}

// async是异步的，不堵塞接下来的代码，提高效率，此时放在一个内置的模块中等待执行
let time = async function aa(){
    let rsp = await waitp(2) // 1.await 一般返回promise，如果是数字返回数字的promise
    console.log("time 已经返回rsp")// 2.在内部会堵塞这句话
    return rsp // 3.如果没有return 默认 resolve（undefined）
}
time().then(
    data=>{
        console.log("time async return ",data)
    }
)

let time2 = async function aa(){
    let rsp = await 1 // 1.await 一般返回promise，如果是数字返回数字的promise
    console.log("time2 返回数字proimse")// 2.在内部会堵塞这句话
    return rsp // 
}
time2().then(
    data=>{
        console.log("time2 async return ",data)//
    }
)

// 此句不会堵塞，立马执行
console.log("马上执行！！！！！")