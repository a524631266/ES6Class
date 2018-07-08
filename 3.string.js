//模板匹配
//这种方式告别了以往的+++++
//name + name + age 这种格式
let name ="zhangll"
let age = "20"
let string1 = `name:${name},and age: ${age}`
console.log(string1)

//模拟实现一个str 用来做类似于模板匹配的功能
let str = "hello~${name} age:~${age}"
str = str.replace(/\$\{\}/,function(a,b,c){
    return a
})
