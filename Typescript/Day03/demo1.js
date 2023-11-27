var a = 20;
//literal
var a1;
a1 = 2.5;
// console.log("value of a1 is "+a1);
a1 = 'Sumit';
// console.log("value of a1 is "+a1);
var a2;
a2 = 50;
var a3;
a3 = 45;
a3 = null;
//type assertion 
// it tells to tsc compiler to convert ur value=> it converts ur data type  
// pre-requiest 
// any/Object/unknown
// 1 angle bracket syntax
// 2 as syntax
// 1 angle bracket syntax
// generally we used in ts file 
var a4;
var temp = a4;
// temp.
// 2 as syntax
// generally we used in html file as well as ts file 
var a5;
var temp1 = a5;
// temp1.
//operators
// Airthmatic => +,*,-,/,%
// logical => &&,||,!
// bitwise => &,|,~,^,>>,<<
// reational => !=,<,>,<=,>=,== (it checks only value of the variable ),=== (It checks value as well as data type of that variable => strongly equality )
// assignment => =,+=,-=,*=,/=,%=
// ternary => condition?expression1:expression2
// unary => inc/dec ,post,pre => ++a,a--
// control / sequantial statement
// if,if-else,nested if-else,continue,break,switch
var a6 = 21;
// if(a6<4){
//     console.log("Condition is true ");
// }else{
//     console.log("Condition is false ");
// }
//switch
var choice = 21;
// switch(choice){
//     case 1: console.log("U r in case 1");
//             break;
//     case 2: console.log("U r in case 2");
//             break;
//     default:console.log("U r in default...");
//             break;
// }
// loop statement
// while,do-while,for,foreach
var count = 5;
// while(count!=0){
//     console.log("Count is "+count);
//     count--;
// }
// do{
//     console.log("==== Count is "+count);
//     count--;
// }while(count!=0);
// for Loop 
for (var i = 0; i < 5; i++) {
    console.log("i => " + i);
}
console.log("=== Access i after the loop " + i);
