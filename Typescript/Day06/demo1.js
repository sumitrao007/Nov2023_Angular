//slice method
// to copy a section of data from existing array and store it in new array 
var course = ["core java", 'Adavanced Java', 'Spring boot', 'Angular ', 'Aws', 'Jenkings', 'Docker'];
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
var a = [2, 3, 4, 5, 6];
var arrOpr = a.map(function (value) {
    return (value * value);
});
console.log("\n    Original Array \n    ".concat(a, "\n    -----------------------\n    Square Array\n    ").concat(arrOpr, "\n"));
