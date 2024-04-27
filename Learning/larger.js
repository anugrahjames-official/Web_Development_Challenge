var r=require('readline-sync');
num1='123'
num2=123

console.log(num1===num2)

if(num1>num2)
{
    console.log(num1+" is larger");
}else if(num1===num2)
{
    console.log("Both numbers are equal");
}
else
{
    console.log(num2+" is larger");
}