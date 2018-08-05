//函数在js中的地位就是一等公民
//why?
//1.函数可以作为输入的参数
//2.函数可以作为结果 返回(return) 函数返回函数
console.log("例如一个检测类型的需求");
function isType(type,value){
    let ntype = Object.prototype.toString.call(value).replace(/\[object\s|\]/g,'');
    console.log(value,"是一个:",ntype,"类型");
    return type === ntype
}
console.log("是否是一个字符串类型",isType("String",11));
console.log("如果在isType之上建立一个更加容易的类型判断,不写type: isString(value) isNumber(value)...");
function isString(value){
    return isType("String",value)
}
isString(22222222222)

//arr方式
let arr = ["String","Number","Array","Object"]
let util = {}//工具类,用来存储多个类型判断
arr.forEach(item=>{
    util["is"+item] = (value)=>(isType(item,value))
})
console.log("util.string",util.isString(123456));
console.log("util.number",util.isNumber(123456));


//3.科里化函数?


/**
 * 
 */
//4.偏函数?
/**
 * 
 */

//其中 科里化是高阶函数的一种

let pro = new Promise((res,rej)=>{
    res("成功!!")
})
//
let a = Object.prototype.toString.call(pro);
console.log(a.replace(/\[object\s|\]/g,'')); 