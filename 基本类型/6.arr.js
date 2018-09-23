/**
 * 1.reduce
 */
//简单的面试题
//数组的reduce方法
let a = [1,2,3,4,5].reduce((prev,next,currIndex,arr)=>{
console.log(prev,next,`index:${currIndex}`,arr)
return next+prev
},0)//加0的区别是
console.log(a)
//result:
// 1 2 1 [ 1, 2, 3, 4, 5 ]
// 3 3 2 [ 1, 2, 3, 4, 5 ]
// 6 4 3 [ 1, 2, 3, 4, 5 ]
// 10 5 4 [ 1, 2, 3, 4, 5 ]
// 15

// **注意其原理，这里的pre是单值，而不是对象)**
let total = [{price:10},{price:20},{price:30}].reduce(
    (pre,next,index,arr)=>{
        return pre+next.price
    },0
)
console.log(total)
// 如何开发自己的reduce
Array.prototype.reduce2 = function(fn,first){
    let result = first;
    for(let i = 0; i<this.length;i++){
        if(result==undefined){
            result=0
        }
        result = fn(result,this[i],i,this)
    }
    return result
}
[1,2,3].reduce2(
    function(prev,next,index,arr){
        console.log(prev,next,index,arr)
        return next+prev
    },0
)
let newarr = [[1,2,3],[2,3,4]].reduce(
    (pre,next)=>[...pre,...next]
)
console.log(newarr)



// pop方法 在结尾处弹出一个
let arr1 = [1,2,3,4]

let popdata = arr1.pop()
console.log(arr1)
// shift 开头弹出 
let data1 = arr1.shift()
console.log(arr1)


// push 在结尾处插入值
arr1.push(2,5,7)
console.log(arr1)
// unshift 在开头插入值
arr1.unshift(1,2,3)
console.log(arr1)

console.log( arr1.slice(-3))
console.log(arr1)

// splice 会从原数组中的开始位置共剔除掉 n位数字
console.log(arr1.splice(2,3))

console.log(arr1)


let arr2 = [1,2,3,4,3,2,4,4,5,4,4]

console.log(arr2.lastIndexOf(4)) 

// 遍历的差别

let arr2 = [1,2,3,4,3,2,4,4,5,4,4]

arr2.b = "data"
for (let i in arr2){ // 可以遍历对象，也可以遍历数组
    console.log("arr2 in ",i)
}
let obj2 =  {"name":"zll",age:3}
for(let k in obj2){
    console.log(k)
}


for (let i of arr2){ // of 只能遍历数组，属性不会遍历，一般遍历数组就用ofss
    console.log("arr2 of",i)
}
// map 映射每一个元素

let a = [1,2,3].map(value=>{
    return [value,value]
})
console.log(a)

// 找到具体的某一项 用find
let a =[1,2,3,56,5555]
let dd = a.find(
    item =>{
        return item.toString().indexOf("6")>-1
    }
)
console.log(dd) //56


console.log([1,2,3,5,6].reduce(
    (pre,next,i,arr)=>{
        return pre+next
    }
)) 




// [[1,2,3],[4,5,6],[7,8,9]] 解构

let aaa = [[1,2,3],[4,5,6],[7,8,9]].reduce(
    (pre,next,i,arr)=>{
        return [...pre,...next]
    }
)
console.log(aaa)