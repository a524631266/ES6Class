// import { read } from "./12.readFile";


let read = require('./12.readFile.js')
/**
    read promise模块/2.txt
    promise模块/2.txt
    我很帅
 */

// Promise all
read("promise模块/1.txt").then(data=>{
    console.log("nooww",data);
})


