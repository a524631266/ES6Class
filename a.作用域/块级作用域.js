// 比较好的官网
//https://www.tslang.cn/docs/handbook/variable-declarations.html

//案例1 
var tmp = new Date();

function f() {
  console.log(tmp);
}

f(); // 当前时间

// 案例1.1
var tmp = new Date();

function f() {
  console.log(tmp);//这句话,即使没有执行,也会在函数作用域中创建一个undefined,用来存储值
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
console.log(tmp);//时间

// 案例2.2
// 在循环体中使用var 会提升作用域到上个作用域

function a(){
    s = "abc"
    for (var i in s){
        console.log(s[i]);
    }
    console.log(i);//2
}
a()
console.log(i);//i is not defined


//允许在块级作用域中定义函数
//ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();// f is not defined
}());

// 在es6中规定 let const 的声明 不在 window 这种顶级变量中 而var 是可以赋值的
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined

// let 与var 的区别
//  在
for (var i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i); }, 100 * i); // 打印的是windwo中的i,因为,var 提升到上一个空间
}

for (let i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i); }, 100 * i);
}
console.log("打印的是",i)

function ff(){
  for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log("打印的是",i); }, 100 * i); // 打印的是windwo中的i,因为,var 提升到上一个空间
  } 
}
ff()
console.log("i",i)


// 块作用域
// 当用let声明一个变量，它使用的是词法作用域或块作用域。 
// 不同于使用 var声明的变量那样可以在包含它们的函数外访问，
// 块作用域变量在包含它们的块或for/if循环之外(即大括号{})是不能访问的


//1.if 块外无法访问
function ff2(){
  if(false){
    let a =2
  }
  console.log(a) // a is not defined
}
ff2()
//2. for块外无法访问
function ff2(){
  let data = [1,2]
  for(let i of data){
    console.log("内部i",i)
  }
  console.log("外部i",i)
}
ff2()
//function 为无法访问