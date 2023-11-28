//anonymous functions
// function does not have any name 
var temp1 = function () {
    console.log("U r in first type of anonymous functions");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(10, 9);
// console.log("Res=> "+res);
//fat arrow functions/ Arrow functions 
var temp3 = function () {
    console.log("Fat arrow function is called ");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
//    let res2= temp4(20,2);
//    console.log("Result is "+res2);
//optional parameter function
function add1(a, b) {
    console.log("Value of a is " + a); //50
    console.log("Value of b is " + b); // undefined
    console.log("Value of a+b is " + (a + b)); // NAN 
}
// add1(50);
// add1(50,5);
function add2(a, b) {
    console.log("Value of a is " + a); //
    console.log("Value of b is " + b); // undefined
    console.log("Value of a+b is " + (a + b)); // NAN 
}
// add2();
// add2(45,6);
//default parameter function
function add3(a, b) {
    if (b === void 0) { b = 10; }
    console.log("Value of a is " + a); //50
    console.log("Value of b is " + b); // 10
    console.log("Value of a+b is " + (a + b)); // 60 
}
// add3(50);
add3(50, 9);
