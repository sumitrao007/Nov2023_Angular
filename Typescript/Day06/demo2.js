//dereferencing array
var a = [10, 20, 30, 52];
var t1 = a[0], t2 = a[1], t3 = a[2], t4 = a[3];
// console.log(`
//     t1 = ${t1}
//     t2 = ${t2}
//     t3 = ${t3}
//     t4 = ${t4}
// `);
var course = ["core java", 'Adavanced Java', 'Spring boot', 'Angular ', 'Aws', 'Jenkings', 'Docker'];
var str1 = course[0], arrcourse = course.slice(1);
console.log("\n    str1 = ".concat(str1, "\n    ------------------\n    ").concat(arrcourse, "\n"));
