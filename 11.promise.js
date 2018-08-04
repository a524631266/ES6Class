//介绍
/**
 * 1. Promise是es6中出现的新概念,以前没有
 * 
 * 因此出现了 generator async await语法出现
 * 这些都是基于promise的,所以需要弄懂promise
 * 
 * 其他基于promise的包 
 * a) koa 
 * b) axios
 * c) redux-saga
 * d) fetch
 */

 /**
  * promise是什么?
  * 他是一种异步流程的控制手段
  * 
  */
//1.首先说起回调地狱,其缺点就是难以维护
$ajax({
    sucess(){
        $ajax({
            sucess(){
                $ajax({
                    sucess(){
                        
                    }
                })                      
            }
        })        
    }
})
//第一个输出是第二个的输入
//promise的链式调用让代码更清晰
//2.其中promise支持多个并发的请求,获取并发请求中的数据
###Promise.all([new Promise1,new Promise2])
###返回1,2按照次序的数据,注意是有顺序的
//3.可以解决异步问题,并不是说promise本身是异步的

/**
 * promise 核心的三个概念
 * 1.pending (等待)
 * 2.resolve (成功)
 * 3.reject (失败并拒绝)
 * 
 * 
 * 2,3 取其一  要不成功要不失败
 * 1状态 转换成2/3
 */

//事件环
// Promise参数是一个执行器,用来执行成功/失败的函数
let p = new Promise(
    (resolve,reject)=>{
        //默认都是同步执行的
        //成功的方法
        // resolve("成功")//在创建的时候就会触发,并用来存储成功值
        console.log(111);
        //失败的两种方法 promise 抛出异常就执行失败
        throw new Error
        reject("失败")
        //异步处理方式,以前是直接传递个函数给setTimeout,
        //现在是包装函数,成功失败处理方式就很清晰了
        setTimeout(
            ()=>{
                resolve("成功")
            },1000
        )
    }
)
//Promise中的then方法是异步处理的
p.then(data=>{
    console.log(data);
},error=>{
    console.log(error);
})

console.log(222);
// 输出结果 111 222 失败 这个失败是最后的
