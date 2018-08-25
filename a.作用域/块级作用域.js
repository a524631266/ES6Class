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