// function  is a block of code that performs a specific task.

//Declaring a Function
function abc()
{
    console.log('Declaring a Function')
}

//Calling a Function
abc()
console.log('something')
 
//function with argument & parameter
function wlc(a='std',ph=555)//parameter
{
    console.log('wlc  ',a, ph)
}
wlc('ashok',987654) //argument
wlc('ram')
wlc('sita')
wlc()

//function with return value
function tshirt(payment)
{
    return payment
}
var e=tshirt(2000)
console.log(e)
console.log(tshirt(2200))

// var aa=parseInt(prompt("enter 1"))
// var bb=parseInt(prompt("enter 1=2"))
// function sum(a,b)
// {
//     return a+b
// }
// console.log(sum(aa,bb))

var abc=function()  // anonymous function.
{
    return "Function Expressions"
}
console.log(abc())


//es6 arrow function =>
var subb=a=>a*a;
console.log(subb(44))

var egh=(a,b)=>a*b;
console.log(egh(4,5))

var hjk=(a,b)=>{
    return a*b;
}
console.log(hjk(4,5))

//array in js 
// Create an Array
var abcd=['apple','ball','cat'] // array literal
var mm=new Array('apple','ball','cat')//new keyword

//Access Elements of an Array indices 
console.log(abcd[1])
console.log(mm[2])
for(var a=0; a<3; a++)
{
    console.log(abcd[a])
}
for (const z of abcd) {
    console.log("for of",z)
}
//Add an Element to an Array push, unshift
abcd.push('sajan')
console.log(abcd)
abcd.unshift('kafle')
console.log(abcd)
///remove an Element to an  
abcd.pop()
console.log(abcd)
abcd.shift()
console.log(abcd)
abcd[2]='aaaa'
console.log(abcd)
console.log(abcd.sort())
console.log(abcd.join('-'))