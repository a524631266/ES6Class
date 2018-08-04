let fs = require('fs');


/**
fs.readFile('12data/1.txt','utf8',function(err,data){
    if(err)return console.log(err);
    fs.readFile(data,'utf8',function(err,data){
        if(err)return console.log(err);
        console.log(data);
    })
})

//思考, 如果层数越来越多那么就永无止境,难维护
//切换到promise方法
*/
let read=(url)=>{
    return new Promise(
        (resolve,reject)=>{
            fs.readFile(url,"utf8",(err,data)=>{
                if(err) reject(err)
                resolve(data)
            })
        }
    )
} 

read("promise模块/1.txt").then(data=>{
    console.log("read",data);
})


read("promise模块/1.txt").then(
    (data)=>{
        console.log(data);
        return read(data)
    },
    // (err)=>{
    // }
).then(
    (data)=>{
        console.log(data);
    }    
)

module.exports = read
// export {read};
