//模板匹配
//这种方式告别了以往的+++++
//name + name + age 这种格式
let name ="zhangll"
let age = "20"
let string1 = `name:${name},and age: ${age}`
console.log(string1)

//模拟实现一个str 用来做类似于模板匹配的功能
let str = "hello~${name} age:~${age}"
// 正则是贪婪的，这里的意思代表 编译原理中 文法规则 总是匹配最长的子串
//如果要以最短路径，必须添加条件 https://www.cnblogs.com/richiewlq/p/7307581.html  

//replace 回调函数的三个参数 a 为包含匹配的字符串 b为匹配(内部)字符串 c为匹配位置index
//1.贪婪匹配
var str2 = str.replace(/\$\{(.*)\}/,function(a,b,c){
    return b
})
console.log(str2)//"hello~name} age:~${age"
//2.添加条件
// 只能匹配一个
var name = "zhangll"
var age = "20"
var str2 = str.replace(/\$\{([^}]*)\}/,function(a,b,c){
    console.log(a,b,c)
    return eval(b)
})
console.log(str2)//hello~zhangll age:~${age}
// g 全局只能匹配所有
var name = "zhangll"
var age = "20"
var str2 = str.replace(/\$\{([^}]*)\}/g,function(a,b,c){
    console.log(a,b,c)
    return eval(b)
})
console.log(str2)//var name = "zhangll"
var age = "20"
var str2 = str.replace(/\$\{([^}]*)\}/g,function(a,b,c){
    console.log(a,b,c)
    return eval(b)
})
console.log(str2)//hello~zhangll age:~20


/**
 * 自定义模板匹功能
 * 主要是为了在模板匹配的时候一般化扩展被匹配的字符串
 * 比如添加 *${any}*在匹配字符两端均添加统一的
 * 可以节省不少代码
 * 这是一组有限状态机
 */

var name = `zhangll`
var age = 20
function anyname(a,...rest){
    console.log(a)
    console.log(rest)
    var str = ''
    rest.forEach((value,index)=>(
        str += `${a[index]}*${value}*`
    ))    
    str += a[a.length-1]
    return str
}

var strs = anyname`hello~${name} age:${age}`


/**
 * includes
 * startsWith endsWith
 * padStart padEnd
 */