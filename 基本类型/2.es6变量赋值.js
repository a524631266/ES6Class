//es6 支持对象的打包与解包


//打包就是没有对象的时候打包对象


//解包就是存在对象的时候拆分对象,一般应用于传入函数方法内部

//解构赋值   事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
// 数组的必须位置相同
let arr = ["zhangll","20","cccc"];
console.log(arr)
let [a,b]=arr


console.log(a,b)
let [,c]=arr
console.log(c)

//结构对象的属性需要使用{}
let {length} = arr
console.log("长度:",length)
let {name,age} = {name:"zhangll",age:20}
console.log("name",name,"age",age)

// default/new/while等等是是关键字，不能再解构中直接使用 用：形式更改名字
let {name1,age1,new:aaa,while:ss} = {name1:"zhangll",age1:20,new:"xxx",while:"aaa"}
console.log("name",name1,"age",name1,"default",aaa,ss)




//练习
let [obj1,{address:[,a2=22,,,a5=5]},hobby = '游泳'] = [
    {name:"zfpx"},
    {age:9,address:[1,2,3,4]},
]
console.log(a2,hobby,a5)


//练习2 用{}结构array对象，提取属性，并改名字为lll
let {length:lll} = [0,1,2]

console.log(lll)


//es6中的列表态,在export import 中经常出现,要习惯这样的用法
const a = 1
const b = 2
console.log({a,b}); //{ a: 1, b: 2 }


// const 的 赋值是对内存地址不改变的前提下
const obj = []
obj[0]= 1
obj[3] = 3
console.log(obj);//[ 1, <2 empty items>, 3 ]
obj = [1,2]//TypeError: Assignment to constant variable.

const foo = Object.freeze({})
foo.prop = "1" //常规模式 这句话会忽略
console.log(foo);// {}

let a = {"name":"zll","age":2}
Object.freeze(a)
a["name"] = "jln"
console.log(a);//{ name: 'zll', age: 2 } 没有变

//下面是一个将对象彻底冻结的函数,深拷贝
var contantize  = (obj)=>{
    Object.freeze(obj)
    for(let k in obj){
        if( typeof obj[k] === "object"){
            contantize(obj[k])
        }
    }
}
let a = {name:"1",arr:[1,2,3]}
contantize(a)
a["arr"][0] = 3
console.log(a);//{ name: '1', arr: [ 1, 2, 3 ] }




let {a:b} = {"a":1}
console.log(b);


//  实战 1 取数组 最后一个数字
let arr = [1,2,44,5,443] 
let {[arr.length-1]:data,[2]:data2} = arr
console.log(data,data2);

// 实战2 字符串结构
let [a,b,c] = "zhangll"
console.log(a,b,c);// z h a
// 实战3 toString 等号右边的值不是对象或数组，就先将其转为对象
let {toString : s} = 123
console.log(s === Number.prototype.toString);
