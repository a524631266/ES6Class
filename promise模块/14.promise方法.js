// import { read } from "./12.readFile";


let read = require('./12.readFile.js')
/**
    read promise模块/2.txt
    promise模块/2.txt
    我很帅
 */

// Promise all
Promise.all([read("promise模块/1.txt"),read("promise模块/2.txt")]).then(
    data=>{
        console.log("all方法",data);
    }
)
// Promise race 竞争,谁快调用谁
Promise.race([read("promise模块/2.txt"),read("promise模块/1.txt")]).then(
    data=>{
        console.log("race方法",data);
    }
)
// Promise resolve 直接调用正常态
Promise.resolve("成功了").then(data=>{
    console.log(data);
})
// Promise resolve 直接调用失败态
Promise.reject("失败了").then(null,err=>{
    console.log(err);
})
