//return multiple value from the function

function operation(a:number,b:number){
    return [a+b,a-b,a*b];
}

let [add,sub,mul]=operation(10,5);
console.log(`
    add = ${add}
    sub = ${sub}
    mul = ${mul}
`)