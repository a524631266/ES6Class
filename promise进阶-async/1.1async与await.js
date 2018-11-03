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


let time = async function aa(){// async是异步的，不堵塞接下来的代码，提高效率，此时放在一个内置的模块中等待执行
    let rsp = await waitp(2)
    console.log("已经返回rsp")
    return rsp
}
time().then(
    data=>{
        console.log("async return ",data)
    }
)
// 此句不会堵塞，立马执行
console.log("马上执行！！！！！")