//deep copy & shallow copy 

let a=20;
let b=a;

// console.log(`
//     ----Copy the data------
//     a = ${a}
//     b = ${b}
// `);

b=50;
// console.log(`
//     ----after Copy the data------
//     a = ${a}
//     b = ${b}
// `)

let arr=[10,20,30,40];
let arr1=arr;

// console.log(`
//     ---- copy the array------
//     arr  = ${arr}
//     arr1 = ${arr1}
// `);

arr1[1]=500;
// console.log(`
//     ---- after copy the array------
//     arr  = ${arr}
//     arr1 = ${arr1}
// `);

let c=[78,90,63,85,20];
let [...d]=c;
console.log(`
    ---- copy the array------
    c  = ${c}
    d  = ${d}
`);

d[1]=1000;

console.log(`
    ---- copy the array------
    c  = ${c}
    d = ${d}
`);

