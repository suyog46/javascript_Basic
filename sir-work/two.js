//Data Types primitive data(string, number, boolean, null, undefined,symbol, bigINt), non-primitive data (array, object)
var a='sajan'
console.log(typeof a)

var b=3.3
console.log(typeof b)
var c=false
console.log(typeof c)
var d=null
console.log(typeof d)
var e;
console.log(typeof e)
console.log(Symbol('sajan')==Symbol('sajan'))
var fruits=['mango','mango','mango',2, true]
console.log(typeof fruits)
var obj={
    id: 1, name: "sajan", ph: 111111
}
console.log(typeof obj)

//2+2  //operand opeartor operand

/*
    Arithmetic Operators +,-,*,/,%, ++, --, **
    Comparison Operators
    Logical Operators
    Assignment Operators
    Conditional Operators
    Ternary Operator
*/
//Arithmetic Operators 
var a,b;
a=3
b=4
// console.log("a+b=", a+b) //
// console.log(`a+b= ${a+b}`)
// console.log(`a+b= ${a-b}`)
// console.log(`a+b= ${a*b}`)
// console.log(`a+b= ${a/b}`)
// console.log(`a+b= ${a%b}`)
// console.log(a++) //a=a+1 3+1 //4
// console.log(a--) //a=a-1 
// console.log(a)
// console.log(a**b) // 3*3*3*3


//Assignment Operators =, +=, -=, *=, /=, %=
console.log(a+=b) // a=a+b 3+4 // 7
console.log(a-=b)  // a=a-b  // 7-4 //3
console.log(a*=b) 
console.log(a/=b) 
console.log(a%=b) 


//  Comparison Operators 
var x=3;var y=4; var z='3'
console.log(x==z) // true
console.log(x===z)  //false
console.log(4>1) 
console.log(4<1) 
console.log(4>=4) 

//Logical Operators
console.log(('admin'=='admin') && ('pass'=='pass'))
console.log(('admin'=='admin1') || ('pass'=='pass'))
console.log(!true)