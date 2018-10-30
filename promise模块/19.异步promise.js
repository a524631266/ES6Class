let p = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('success');
    },5000);
});

let pp = Promise.resolve(p);

pp.then(result => {
    console.log(result); // 5秒钟之后就会触发，也就是异步处理
},err=>{
    console.log(err);
});
console.log(pp == p); // 1. true
