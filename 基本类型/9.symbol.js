// symbol是es6新增的数据类型，目前使用还是一般，但是毕竟重要
// symbol 类型的增加是解决了什么问题？


// 1.symbo使用

let sym = Symbol("aa")

console.log(sym) // ====> Symbol(aa)

console.log(typeof sym) // ====> symbol
// es6 曾经有6个基本类型 number ， string ，boolean ，Object ，function ，undefined

let num1 = new Number(1)
console.log(num1*2)

// 2.symbol 返回的是一个唯一的值
// 使用场景， 一般做一个key或者定义唯一的属性，并且私有（for循环找不出来的）

let keyname1 = Symbol("aaa")
let json = {
    a: 1,
    b: 2,
    [keyname1]:"22"

}
// 打印出来的
// console.log(json[keyname1])


// let dad = [14,3,4]
// for(let i of dad){
//     console.log(i)
// }

for (const key in json) {
    if (json.hasOwnProperty(key)) {
        const element = json[key];
        console.log(element)
    }
}