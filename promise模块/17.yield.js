//1.生成函数的基础是promise,等待一段时间
function *show(){
    console.log("1111111");
    yield 11;//这里与then的影子
    yield 22;
    return 33;
}
let ss = show()

console.log(ss.next()); //{ value: 11, done: false }
console.log(ss.next()); //{ value: 22, done: false }
console.log(ss.next()); //{ value: 33, done: true }
console.log(ss.next()); //{ value: undefined, done: true }

//2.可以返回结果
function 买菜(){
    return "脏胡萝卜"
}
function 洗菜(){
    return "干净的胡萝卜 "
}
function 切菜(){
    return "胡萝卜片"
}
function 完成(){
    return "大炒萝卜"
}
function *做菜(){
    let something = yield 0;
    console.log(something);
}

let do1 = 做菜();
console.log(do1.next()); 
console.log(do1.next(买菜())); //在next中传入参数,如果不传参数,就直接返回undefined

runner(function * (){
    let data1 = yield 1;
    let data2 = yield 2;
    let data3 = yield 3;
    console.log(data1,data2,data3);
})

