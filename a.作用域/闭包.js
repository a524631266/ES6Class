
function a(b){
    return function(c){
        return b+c
    }
}

let ccc = a(1)

console.log(ccc(2))