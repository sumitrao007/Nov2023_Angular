
//1 functions without parameter & without return type
//2 functions with parameter & without return type
//3  functions without parameter & with return type
//4 functions with parameter & with return type

//1 functions without parameter & without return type

function add1(){
    console.log("functions without parameter & without return type");
}

// add1();

//2 functions with parameter & without return type

function add2(a:number,b:number){
    console.log("Addition is "+(a+b));
}

// add2(10,2);

//3  functions without parameter & with return type

function add3():number{
    return (8+8);
}

let res= add3();

// console.log("Result "+res);

//4 functions with parameter & with return type

function add4(a:number,b:number):number{
    return (a+b);
}

let res1= add4(10,5);

// console.log("Result "+res1);