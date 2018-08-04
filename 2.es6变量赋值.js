//es6 支持对象的打包与解包


//打包就是没有对象的时候打包对象


//解包就是存在对象的时候拆分对象,一般应用于传入函数方法内部

//解构赋值
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