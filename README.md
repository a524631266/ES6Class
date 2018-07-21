# ES6Class
学习ES6语法简单的熟练使用，以针对用来学习react vue等前段框架
## 1.ES6学习资源
* 1.相关的网站,利用babel使得ES6（ES2015）转化成ES5等等语法，以更好地支持
目前浏览器的支持，一款线上比较好的在线编译环境
[babel](http://babeljs.io/repl/ "点击进入官网")
[修改https到ssh攻略](https://blog.csdn.net/accountwcx/article/details/46822257 "进入攻略")
* 2.查看node版本
```
查看node版本
    node -v
安装包
    npm install -g pakage
```
* 3.使用visual Studio Code需要安装
chrome插件调试插件
Debugger for chrome

## 2.学习内容
>### 1.    [学习let与const作用](https://github.com/a524631266/ES6Class/blob/master/1.es6.js)
>>   + 首先介绍js中的var 变量 提升的情况（非函数体变量提升以及后定义变量提升）
>>   + 其次介绍const和 let 与var的不同特性
>### 2.    [学习es6的"打包"与"解包"功能](https://github.com/a524631266/ES6Class/blob/master/2.es6%E5%8F%98%E9%87%8F%E8%B5%8B%E5%80%BC.js)
>>   + 介绍一些有趣的解包和打包命令技巧,It's very interesting！
>>   
>### 3.    [学习string常用的方法，比如新增模板匹配功能](https://github.com/a524631266/ES6Class/blob/master/3.string.js)
>>   + 为什么要引入模板匹配，为了快速开发，减少恶心的字符串拼接
>>   + 学习如何用正则表达方式实现一个模板匹配的功能
>>>   - 经典书籍```[编译原理-第二版](龙书，虎书)```可以看看，用来提升自己的代码能力，想实现编译器的可以参考
>>>   - search replace match 三大字符匹配功能[资料](http://www.runoob.com/js/js-regexp.html)
>### 4.    [箭头函数及其this指向问题](https://github.com/a524631266/ES6Class/blob/master/4.keliFunction.js)
>>   + 首先介绍原声js中使用纯函数、new 对象、内部函数的this指向问题
>>   + 再详细介绍箭头函数中this其实质指向的是书面作用域（非对象上）的对象存在this，而此时的上层对象并不是作用域，这个与第一个介绍的三种情况相互区分（箭头函数本身并不存储this，所以才会向上简单查找）
>>   + 在了解this的基础之上了解并详细介绍bind，apply，call能够改变函数内部this的方式
>>>  [apply与call的实质区别](https://blog.csdn.net/lizeshi125/article/details/53670590)
>### 5.    [展开运算符](https://github.com/a524631266/ES6Class/blob/master/5.dotdotdot.js)
>>   + 了解在函数中使用...操作剩余变量
>>   + 了解数组与字典对象的...操作的能力 也就是浅拷贝
>>>   - 利用deepCopy实现对任意对象的深度拷贝，在这个案例中，能学到 [__proto__](https://blog.csdn.net/ligang2585116/article/details/53522741/)属性的妙用(![原型链](https://github.com/a524631266/ES6Class/blob/master/image/原型链2.jpg "optional title"))
>>>   - 还能学 constructor 任意变量的类构造 new obj.constructor() 生成一个父类默认空类，用来建立结构相同的数据
>>>   - 学习了typeof instanceof的类型检测这里可以看看打印出什么东西出来
>>>   - 使用变量（对象）的hasOwnProperty方法来检测来检测数据是否拥有非原型链上的自身属性
>### 6.    [数组的常见方法](https://github.com/a524631266/ES6Class/blob/master/6.arr.js)
>>   + 了解ES5中常见的操作数组的方法 map (some,every,filter,forEach) 
>>   + 了解ES6中常见的操作数组的方法 find findIndex
>>   + reduce 聚合
>>   + for of() 
>>   + Array.from
>>   + of()

>### 8. [在es5中的没有class的概念](https://github.com/a524631266/ES6Class/blob/master/8.class.js)
>>   + 这一节用来理解在es5中类似于类的概念 比如继承的实现 用来扩展es6中的类的概念