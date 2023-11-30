//deep copy & shallow copy 
var a = 20;
var b = a;
// console.log(`
//     ----Copy the data------
//     a = ${a}
//     b = ${b}
// `);
b = 50;
// console.log(`
//     ----after Copy the data------
//     a = ${a}
//     b = ${b}
// `)
var arr = [10, 20, 30, 40];
var arr1 = arr;
// console.log(`
//     ---- copy the array------
//     arr  = ${arr}
//     arr1 = ${arr1}
// `);
arr1[1] = 500;
// console.log(`
//     ---- after copy the array------
//     arr  = ${arr}
//     arr1 = ${arr1}
// `);
var c = [78, 90, 63, 85, 20];
var d = c.slice(0);
console.log("\n    ---- copy the array------\n    c  = ".concat(c, "\n    d  = ").concat(d, "\n"));
d[1] = 1000;
console.log("\n    ---- copy the array------\n    c  = ".concat(c, "\n    d = ").concat(d, "\n"));
