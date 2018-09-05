// ...只适用于有iterator接口的对象，普通对象没有iterator接口
let getMulti =()=>{
    let mapurl = (...rest)=>{
        console.log(rest);
        console.log("a:",a,";b:",b,"c:",c)
    };
    let data = Array.from({a:"x",b:"c",c:"dd"});
    console.log(data);
    mapurl(data)
}
getMulti()