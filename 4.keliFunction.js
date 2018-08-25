//箭头函数的使用 1.为了方便使用，2.this指定相对明确
/**
 * 1.最简单的函数调
 */
function a(i){
    return i
}
console.log(a(1))
//1.等价箭头函数 这里需要注意,
let a2 = i => i;
console.log(a2(2))
//在包裹了{}的函数体中,没有return 就相当于 return undefined
let a3 = i => {i};
console.log(a3(1)); // undefined 

/**
 * 2.柯里函数
 * 其实质就是一单个参数作为函数的输入，最后输出结果
 */
function do1(a){
    console.log("a",a) //1.a 6
    return function(b){
        console.log("b",b)//2.b 2
        return a+b
    }
}
console.log(do1(6)(2))//8

//2.等价函数
let do2 = a=>b=>a+b;
console.log(do2(3)(7))
/**
 * 2.柯里变形
 */
function do2(a){
    return function d3(param){
        return function d4(param){
            return param(a)
        }
    }
}
//等价如下，其实d3 d4这种函数名没有多大意义
let do33 = a=>param=>param=>param(a);




/**
 * this 问题
 * 先找this指向的对象，然后找到对象中的属性
 * 1.this 指向 的是.前面的对象，this不是变量而是对象，只有函数里面有this
 * 2.对象不是作用域，作用域的作用是变量访问用的
 * 3.箭头函数本身不包含this
 * 4.
 * https://www.cnblogs.com/pssp/p/5216085.html
 */
//11111111111111
let a =1
let obj = {
    a:2,
    b:function(){
        console.log(this)//这里的this指的是bfunction内的this，所以，谁调用b，谁就是this
    }
}
obj.b()//{a:2,b:}

//所以
let a =1
let obj = {
    a:2,
    b:function(){
        console.log(this.a)//这里的this指的是bfunction内的this，所以，谁调用b，谁就是this
    }
}
obj.b()//2

//内部函数this的应用，其实各种监听事件函数里面写的回调函数里面指定的this就是指向window，这也是
//内部函数中的this为什么会指向window的原因，因为一旦函数的里面再嵌套一层函数
//层层相扣，最后里面的this满天飞，那么为了最简单明了起见，this都会指向window，这也符合
//外国人比较直接的思维方式，不像中国人这么绕
let a =1
let obj = {
    a:2,
    b:function(){
        return function(){console.log(this)}//
    }
}

obj.b()()//Window 是因为obj.b() 相当于输出的是一个函数，而这个函数是绑定到window下的，
//所以最终调用的是window
//2222 https://www.jb51.net/article/103611.htm
let obj = {
    a:2,
    b:function(){
        var handle = function(){
            console.log(this)
        }
        handle()
    }
}
obj.b()//window

//3333333

let a =1
let obj = {
    a:2,
    b:()=>{
        console.log(this)//箭头函数的this寻找方法是代码文字级别的向上查找，不管对象是谁，但是对象没有this属性
    
}
}
obj.b()//Window 指的是最上一层的window this


//3333333   kankan

let a =1
let obj = {
    a:2,
    b:function(){
        return ()=>{
        console.log(this)//箭头函数的this寻找方法是代码文字级别的向上查找，不管对象是谁，但是对象没有this属性
        }
    }
}
obj.b()()//{a:2,b:f}




/**
 * 改变this的三大方法（三种方法都可以传一个对象参数，作为this的对象）
 * bind apply call
 * 这三种方法最本质的区别是
 * 1.bind只是绑定this传入函数体中，并不执行函数
 * 2.apply和call在传入函数体中就会默认执行函数
 */
//1.bind 并不执行函数的直观试验
let a =2;
let bindFunc = {
    a:1,
    b:function(){
        return (function(){
            console.log(this)//这里的this指的是bindFunc看下方的.之前的对象，如果不bind就直接指向window，因为这是内部函数形式
        }).bind(this)
    }

}
bindFunc.b()//返回函数function () { … }
bindFunc.b()()//{a: 1, b: }
//2.apply和call函数的直观试验
let a =2;
let callFunc = {
    a:1,
    b:function(){
        return (function(){
            console.log(this)//这里的this指的是bindFunc看下方的.之前的对象，如果不bind就直接指向window，因为这是内部函数形式
        }).call(this)
    }
}
callFunc.b()//{a: 1, b: }

let a =2;
let applyFunc = {
    a:1,
    b:function(){
        return (function(){
            console.log(this)//这里的this指的是bindFunc看下方的.之前的对象，如果不bind就直接指向window，因为这是内部函数形式
        }).apply(this)
    }
}
applyFunc.b()//{a: 1, b: }

/**
 * apply与 call传入其他对象，比如window的话
 */

let a =2;
let callFuncW = {
    a:1,
    b:function(){
        return (function(){
            console.log(this)//这里的this指的是bindFunc看下方的.之前的对象，如果不bind就直接指向window，因为这是内部函数形式
        }).call(window)
    }
}
callFuncW.b()//window

let a =2;
let applyFuncW = {
    a:1,
    b:function(){
        return (function(){
            console.log(this)//这里的this指的是bindFunc看下方的.之前的对象，如果不bind就直接指向window，因为这是内部函数形式
        }).apply(window)
    }
}
applyFuncW.b()//window

