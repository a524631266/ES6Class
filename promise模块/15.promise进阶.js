//这里是主要讲解promise的异步处理方式 在promise中异步调用比如 setTimeout方法,延时调用的


//自己创建一个类 这里没有实现异步调用
Promise
class MyPromise{
    constructor(excutor){
        this.state = "pending";
        this.value = undefined;
        let resolve = (data)=>{
            if(this.state === "pending"){
                this.state = "resolve"
                this.value = data
                console.log("chenggolkg");
            } 
        }
        let reject = (err)=>{
            if(this.state === "pending"){
                this.state = "reject"
                this.value = err
                // console.log("err");
            }
        }
        try {
            excutor(resolve,reject)
        } catch (error) {
            reject(error)
        }
        
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
    // resolve("成功")
    // reject("失败")
    throw new Error
})
p.then(data=>{
    console.log("suc",data);
},err =>{
    console.log("err",err);
})