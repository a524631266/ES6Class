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