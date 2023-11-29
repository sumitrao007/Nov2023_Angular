//array
// array is growable & shrinkable dynamically
// array is hertogenous 
var a1 = [10, 20, 30, 40];
var a2 = [];
var a3 = [2.5, 10, 25];
var a4 = [2, 'sumit', true];
var a5 = [10, 'Sumit'];
// for(let i=0;i<a1.length;i++){
//     console.log("Array value is "+a1[i]);
// }
// console.log(a1);
// console.log(a1.join(" "))
// console.log(a1.join(" # "));
//foreach
// a4.forEach((myvalue,i,arr)=>{
//     console.log(myvalue+" index is "+i+" "+arr);
// });
//rest parameter function
function display(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log(str + " " + item);
}
// display(10,220,30,40);
// display('Sumit',20,30);
//push & pop method
// LIFO Principal => last in first out 
// to add data dynamically in array 
// let a:number[]=[];
// a.push(10);
// console.log(a);
// a.push(20,30,40);
// console.log(a);
// let temp=a.pop();
// console.log(a);
// console.log("Poped data "+temp)
//splice method
var a = [10, 20, 56, 90];
console.log(a);
a.splice(1, 0, 700);
console.log(a);
a.splice(2, 0, 45, 50, 80);
console.log(a);
a.splice(1, 1);
console.log(a);
a.splice(2, 1, 900);
console.log(a);
