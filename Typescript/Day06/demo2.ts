//dereferencing array
let a:number[]=[10,20,30,52];

let [t1,t2,t3,t4]=a;
// console.log(`
//     t1 = ${t1}
//     t2 = ${t2}
//     t3 = ${t3}
//     t4 = ${t4}
// `);

let course:string[]=["core java",'Adavanced Java','Spring boot','Angular ','Aws','Jenkings','Docker'];

let [str1,...arrcourse]=course;

console.log(`
    str1 = ${str1}
    ------------------
    ${arrcourse}
`);

