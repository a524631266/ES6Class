1.//在es5中没有类的概念 只有 构造函数
2.//es6中有class
//类的继承 三种属性 公有属性、方法（即实例可调用的） 私有属性(即实例自带的) 静态属性(es6中的静态方法 es7中的静态属性)

// 一、创建一个父亲类，该类有吃这种方法，同时还有自己的名字
function Parent() {
    //通过new 的实例所拥有的私有属性
    this.name = 'parent'
}
//共有方法
Parent.prototype.eat = function(){
    console.log("Parent Eat!");
}

let parent = new Parent();
console.log(parent.name);
parent.eat();
console.log(parent.constructor===Parent);//true
console.log(Parent.prototype.constructor===Parent);//true

//__proto__是每个人都拥有的属性
console.log(parent.__proto__===Parent.prototype);//true
// 这里有Parent.__proto__会指向哪里?
console.log(Parent.__proto__===Object.prototype);
//比较重要的问题:
// 二.