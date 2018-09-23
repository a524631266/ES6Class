// 1. Object.defineProperty

let data = {}
Object.defineProperty(
    data,"ad",{
        value:1,
    }
)

console.log(data) // 此时 {} 
console.log(data.ad) // 1 
//??????????? 为什么直接无法显示ad属性呢？
//2 当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。
Object.defineProperty(
    data,"ad1",{
        enumerable:true,
        value:1,
    }
)
console.log(data) //{ ad1: 1 }
// 3 configurable 是否可以配置或者装载，卸载，我们可以理解为configurable是一种可以配置的属性
// 平时写代码的时候，会配置一些重要属性，这些属性一旦配置上去，但是这里配置只能用于delete
Object.defineProperty(data,"candelete",
{
    value:10,
    configurable:true,
})
data.candelete = 11
console.log(data.candelete) //10
delete data.candelete
console.log(data.candelete) // undefined
//4 即使重新赋值属性，仍然没有修改 ，想要修改需要有个新的方法，writeable

Object.defineProperty(data,"canchange",
{
    value:10,
    writable:true
})
data.canchange = 11
console.log(data.canchange) //11
delete data.canchange
console.log(data.canchange) // 11


// 5 get set方法

Object.defineProperty(data,"daa",{
    value:1,
    writable:false,
    get(){
        console.log(111111111)
    }
})
console.log(data.daa) 


// 方法中如果只写方法名，默认以方法名作为key
let funobject = {
    ad(){
        console.log("addd")
    },
    cd(){
        console.log("cdd")
    }
}
for (const key in funobject) {
    funobject[key]()
}