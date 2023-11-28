//anonymous functions
// function does not have any name 

let temp1= function (){
    console.log("U r in first type of anonymous functions")
}

// temp1();

let temp2= function (a:number,b:number):number{
    return (a+b);
}

let res=temp2(10,9);
// console.log("Res=> "+res);


//fat arrow functions/ Arrow functions 

   let temp3 = ()=>{
        console.log("Fat arrow function is called ")
    }

    // temp3();

    let temp4= (a:number,b:number):number =>{
        return (a+b);
    }

//    let res2= temp4(20,2);
//    console.log("Result is "+res2);

//optional parameter function

function add1(a:number,b?:number){
    console.log("Value of a is "+a);//50
    console.log("Value of b is "+b);// undefined
    console.log("Value of a+b is "+(a+b!));// NAN 
}

// add1(50);
// add1(50,5);


function add2(a?:number,b?:number){
    console.log("Value of a is "+a);//
    console.log("Value of b is "+b);// undefined
    console.log("Value of a+b is "+(a!+b!));// NAN 
}
// add2();
// add2(45,6);

//default parameter function

function add3(a:number,b:number=10){
    console.log("Value of a is "+a);//50
    console.log("Value of b is "+b);// 10
    console.log("Value of a+b is "+(a+b));// 60 
}

// add3(50);
add3(50,9);


