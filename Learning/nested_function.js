var num=10
function hello() {
   var num=20
    function hey() {
        num=30
        console.log(num)
    }
    hey()
}
hello()
console.log(num)