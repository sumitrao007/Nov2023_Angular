//slice method
// to copy a section of data from existing array and store it in new array 

let course:string[]=["core java",'Adavanced Java','Spring boot','Angular ','Aws','Jenkings','Docker'];

// let arrCopy=course.slice(1,6);
// console.log(`
//     Original Array 
//     ${course}
//     -------------------------
//     copied data 
//     ${arrCopy}
// `);

//map method 
// element by element operation perform 
let a:number[]=[2,3,4,5,6];

let arrOpr= a.map((value)=>{
    return (value*value)
});

console.log(`
    Original Array 
    ${a}
    -----------------------
    Square Array
    ${arrOpr}
`)

