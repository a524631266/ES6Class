// import Axios from "axios";
let Axios = require("axios")
function a(){
    return 1
}
function b(){
    return 2
}

function c(){
    return Promise.resolve("aaa")
}

Axios.all([a(),b(),c()]).then(suc=>{
    console.log(suc)
})


