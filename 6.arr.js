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


