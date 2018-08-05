//这里是主要讲解promise的异步处理方式 在promise中异步调用比如 setTimeout方法,延时调用的


//自己创建一个类 这里没有实现异步调用
Promise
class MyPromise{
    constructor(excutor){
        this.value= undefined;
        this.state = "pending";
        this.value = undefined;
        let resolve = (data)=>{
            if(this.state === "pending"){
                this.state = "resolve"
                this.value = data
                console.log("chenggong");
            } 
        }
        let reject = (err)=>{
            if(this.state === "pending"){
                this.state = "reject"
                this.value = err
                console.log("err");
            }
        }
        excutor(resolve,reject)
    }
    then(successfunc,errfunc){
        if(this.state === "resovle"){
            successfunc(this.value)
        }else{
            errfunc(this.value)
        }
    }
}

let p = new MyPromise((resolve,reject)=>{
    resolve("成功")
})
p.then(data=>{
    console.log(data);
},err =>{
    console.log(err);
})