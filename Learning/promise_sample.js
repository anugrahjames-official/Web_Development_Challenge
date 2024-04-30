/*function add(num1, num2, callback) {
    let err=false
    if(num1==0 || num2==0){
        err=true
    }
    callback(num1 + num2,err)
}

function multiply(num1, num2, callback) {
    callback(num1 * num2)
}

function divide(num1, num2, callback) {
    callback(num1 / num2)
}

add(20, 10, function (sum,err) {
    if(err){
        console.log("Error")
    }else{
        console.log(sum)
        multiply(sum, sum, function (product) {
            console.log(product)
            divide(product, sum, function (quotient) {
                console.log(quotient)
            })
        })
    }
})*/

//Same problem with Promise

const Promise = require('promise')

function add(num1, num2) {
  return new Promise((resolve) => resolve(num1 + num2));
}

add(20, 10).then((sum) => {
  console.log(sum)
})