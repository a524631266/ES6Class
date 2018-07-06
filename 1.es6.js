/**
 * 
//es6 声明方式 类似var
// var 变量外部能访问
//{}为一个作用域块,var 会声明到全局作用域（顶部）
//1.函数作用域
//2.全局作用域（非函数）
for(var i =0 ;i<3;i++){//这不是函数，所以会声明到全局作用域
    console.log(i)
}
console.log("1:",i)//3
console.log("1.1:",window.i)//3
//自定义函数并不是闭包，这里()代表了执行，前面的()代表了一个函数体
//这样i就只能存在与函数体里面，并不会外泄
(function(){
    for(var i =0 ;i<3;i++){
        console.log(i)
    }
})()
console.log(i)//undefined
//如下打印的都是3
//事件管理，同步代码（会把这个set代码压入队列），原因 ：这里的i因为不是在函数体中
//所以会上升到全局变量，而这里的每个i都指向这个全局变量
for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log(i)
    },1000)
}
*/
//为了不让i找到全局的i，需要用函数体包裹，以封装函数体

// for(var i=0;i<3;i++){
//     (function(i){//以i的方式放入进去，所以，如果不一i为参数或者包裹for循环的函数均无效，因为这两种情况均是调用同一组函数
//         setTimeout(function(){
//             console.log(i)
//         },1000)
//     })(i)
// }

/**
 * let 和 {} 可以产生一个作用域
 * 1.let 支持块级作用域中声明变量
 * 2.let 在同一作用域下不能同时声明
 * 2.let 可以在不同作用域中声明同一个变量，因为不同作用域不会互相干涉
 * 所以let能够自己产生作用域 牛逼啊
 */
for(let i = 1; i<3;i++){
    let i = 2
    // var i = 2 //报错，
    // 因为 var会变量提升到上一层let创建的作用域中，所以会出现 
    // SyntaxError: Identifier 'i' has already been declared
    setTimeout(function(){
        console.log(i)//2 ， 2 
    })
}
