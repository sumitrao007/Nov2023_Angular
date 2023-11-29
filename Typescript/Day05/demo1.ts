//array
// array is growable & shrinkable dynamically
// array is hertogenous 
let a1:number[]=[10,20,30,40];
let a2:number[]=[];
let a3=[2.5,10,25];
let a4:any[]=[2,'sumit',true];
let a5=[10,'Sumit'];
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

function display(str:string,...item:number[]){
        console.log(str+" "+item);
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
let a:number[]=[10,20,56,90];
console.log(a);
a.splice(1,0,700);
console.log(a);
a.splice(2,0,45,50,80);
console.log(a);
a.splice(1,1);
console.log(a);
a.splice(2,1,900);
console.log(a);

