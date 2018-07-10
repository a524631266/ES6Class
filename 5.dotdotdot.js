//对于 ...运算符符号的扩展
/**
 * 根据4.keliFunction中es中this对函数的处理方式做了比较简单的介绍
 * 但是有一种情况es对函数的参数有了更为方便的扩展，如下
 */

 //1. Rest parameter 剩余参数的作用，用...对传入的参数进行打包
let fn = (...arguments)=>{//Rest parameter must be last formal parameter
    let args = arguments.slice(1);//切片处理,提取第二个到余下的参数
    console.log(args)
}
fn(1,2,3,4)//array(3)[2,3,4]
//2。默认参数
let fn2 = (a=1,b)=>{//这个是默认赋值方法，类似于python，但是python中必选参数在前，默认参数在后，而此时es6却可以
    console.log(a,b)
}
fn2(2,3)
//3.展开运算符
//a 对数组进行解压，作为函数参数传入其中
function spread(x,...args){
    // sum.apply(null,args)//1 2 3 4
    sum(...args)//1 2 3 4
}
function sum(a,b,c,d){
    console.log(a,b,c,d)
}
spread("x",1,2,3,4)

Math.min(...[1,2,3,4])

//b.对数组元素进行解压，合并到一起
//展开2
let arr = [1,2,3,4].concat([5,6,7])
// 等价
let arr = [...[1,2,3,4],...[5,6,7]]
//c.对字典（js中的对象）进行解压合并在一起
let name = {name:'a'}//一层 不管深浅copy，不影响已经赋值的对象
let age = {age:20}
let person = {...name,...age}
name.name="b"
console.log(person)//{ name: 'a', age: 20 }

let name = {name:{name:"a"}}//二层 不管深浅copy，不影响已经赋值的对象
let age = {age:20}
let person = {...name,...age}
name.name.name="b"
console.log(person)//{ name: { name: 'b' }, age: 20 }
//此时...是浅拷贝

let b = [1,2,3]
let a =[b]
let c = a.slice(0)//浅拷贝
let d = b.slice(0)//一层是不会变的
b[0]=2
console.log(c) //[[2,2,3]]
console.log(d) //[ 1, 2, 3 ]


//js默认都是浅拷贝
//实现深拷贝,有缺陷的方式
let obj ={a:1,fn:function(){},t:/a/,d:new Date(),aa:null}
console.log(JSON.parse(JSON.stringify(obj)))//{ a: 1, t: {}, d: '2018-07-10T12:40:23.576Z', aa: null }

//无缺陷循环递归  https://www.cnblogs.com/yupeng/archive/2012/04/06/2435386.html

//该功能是返回指定类型的数据，可以用于循环使用功能（多层嵌套对象的情况下） 因为这样能保证一次使用的是深拷贝
function deepCopy(obj,ifOwnProperty=false){//false会不关心是否是原型链上的属性
    if(typeof obj !== 'object') return obj
    if(obj==null) return null;//null是对象
    if(obj instanceof Date) return new Date(obj)
    if(obj instanceof RegExp) return new RegExp(obj)
    // console.log(Object.prototype.toString.call(obj))
    //保留对象的继承关系创建一个继承类的空串
    let o = new obj.constructor()
    // console.log(o)
    for(var key in obj){
        if(obj.hasOwnProperty(key) || !ifOwnProperty){//该方法是剔除了__proto__原型链上的方法
            o[key] = typeof obj[key] == 'object'? deepCopy(obj[key],ifOwnProperty):obj[key];
        }
    }
    return o
}
//js 中对象拥有__proto__ 属性链接 function也有
var ad = [1,2,3]
ad.__proto__ = {bb:1}
// console.log(ad.bb)
let obj = [
    1,2,
    {name:"a"},
    function(){return 11},
    ad
]
var newad = deepCopy(obj)
ad.__proto__ = {bb:2}
console.log(newad[4].bb)