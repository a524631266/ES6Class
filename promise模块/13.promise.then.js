//then是promise中的内置函数,用来处理成功/失败态的处理结果
//1.首先then方法是异步的
let a = new Promise(
    (resolve,reject)=>{
        resolve("a成功!")
        console.log(11111111);
    }
)
//异步操作
a.then((data)=>{
    console.log("成功");
})
console.log("222222");
/**
  result :
    11111111
    222222
    成功
 */

// 对同一个promise实例的可以多次then,返回同一个结果
a.then(data=>{
    console.log(data);
})
a.then(data=>{
    console.log(data);
})
a.then(data=>{
    console.log(data);
})
a.then(data=>{
    console.log(data);
})


console.log("-------------------------");
//2.then方法如果不return 返回的是return  undefined
let athen = a.then((data)=>{
    console.log("11111");
})
console.log(athen);
/**
 *  返回的是一个等待态promise
 * Promise { <pending> }
 * 因此可以继续then ,因为then方法是promise的内置函数
 */

 athen.then((data)=>{
     console.log(data);//undefined,因为上一次then之后没有返回参数
 })

 //这里在then方法中设置一个返回promise
 let bthen = a.then((data)=>{
     return new Promise((
         resolve,reject
     )=>{
         resolve("bvalue")
     })
 })
 bthen.then((data)=>{
     console.log(data);//bvalue
 })


//这里在then方法中设置一个返回promise
let cthen = a.then((data)=>{
    return new Promise((
        resolve,reject
    )=>{
        throw new Error
    })
})
cthen.then((data)=>{
    console.log(data);//无反应
},err=>{
    console.log(err);//err
})
console.log("-------------------------");
// 3.promise最有名的链式调用,是在then返回的基础上做的一层封装
// 注意,这里的失败promise是可以传递的
let createSuccessPromise =  new Promise((
    resolve,reject
)=>{
    resolve("dthen成功")
})

let createErrorPromise =  new Promise((
    resolve,reject
)=>{
    reject("dthen失败")
})

let dthen = createSuccessPromise
dthen.then(data=>{
    console.log("1suc",data);
    return createSuccessPromise
}).then(data=>{
    console.log("2suc",data);
    return createErrorPromise
}).then(data=>{
    console.log("3suc",data);
},err=>{
    console.log("3err",err);
})
/**
 * return 
        1suc dthen成功
        2suc dthen成功
        3err dthen失败
 */

let fthen = createSuccessPromise
fthen.then(data=>{
    console.log("fthen 1suc",data);
    return createSuccessPromise
}).then(data=>{
    console.log("fthen 2suc",data);
    //如果中间没有返回结果,默认为成功态的undefined
}).then(data=>{
    console.log("fthen 3suc",data);//走这句
},err=>{
    console.log("fthen 3err",err);
})
/**
    fthen 1suc dthen成功
    fthen 2suc dthen成功
    fthen 3suc undefined
 */
// 4. catch一般是用来获取本次而非上次的返回结果,同时其特性
// 与then 是一样的,因为在catch之后仍然可以then,因此
// catch 返回的仍然是一个promise 
let createSuccessPromise =  new Promise((
    resolve,reject
)=>{
    resolve("gthen成功")
})

let createErrorPromise =  new Promise((
    resolve,reject
)=>{
    reject("gthen失败")
})

let gthen = createSuccessPromise
gthen.then(data=>{
    console.log("gthen 1suc",data);
    return createSuccessPromise
}).then(data=>{
    console.log("gthen 2suc",data);
    return createErrorPromise
}).catch(
    (err)=>{
        console.log("catcherr",err);//gthen 失败 本次失败的值会传递给catch
        // return gthen === return createSuccessPromise
        return 11111
    }
).then(data=>{
    console.log("gthen 3suc",data);//走这句
},err=>{
    console.log("gthen 3err",err);
})
/**
 *  如果 then或catch
    gthen 1suc gthen成功
    gthen 2suc gthen成功
    catcherr gthen失败
    gthen 3suc 11111
 */

/**
 * 总结,then方法是promise方法的内置函数,用来传递上次promise
 * 保持状态的数值,默认会返回一个新的会走成功态的pedding promise
 * 如果 同时catch 方法是获取 本次then的失败例子的作为下一个thend
 * 成功态处理
 */


 