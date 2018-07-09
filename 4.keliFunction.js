//箭头函数的使用 1.为了方便使用，2.this指定相对明确
/**
 * 1.最简单的函数调
 */
function a(i){
    return i
}
console.log(a(1))
//1.等价箭头函数
let a2 = i => i;
console.log(a2(2))
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

//2222222222
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
