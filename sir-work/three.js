//Conditional Operators
//Ternary Operator
// var aa=parseInt(prompt('enter number'))
// if(aa>= 90)
// {
//     console.log(" ddddd u hv passed exam")
// }
// else if(aa>=80)
// {
//     console.log("A++ hv failed exam")
// }
// else 
// {
//     console.log("hv failed exam")
// }

// var a=22;
// switch(a)
// {
//     case 1: console.log("Today is sunday"); break;
//     case 2: console.log("Today is Monday"); break;
//     case 3: console.log("Today is TTT"); break;
//     default: console.log("Error")
// }

//Ternary Operator
// var a=2
// console.log(a<1? "Its true": "its false")

 
//for, while, do while, for of, for in , continue, break

console.log("loop start")
for(var a=0; a< 10; a++)
{
    if(a==3)
    {
        console.log("3")
        //continue
        break;
    }
    console.log("for loop", a)
}
console.log("loop End")

var b=0;
while(b< 10)
{
    console.log("while loop",b)
    b++
}


var c=10;
do 
{
    console.log("do while", c)
    c++
}while(c< 10)