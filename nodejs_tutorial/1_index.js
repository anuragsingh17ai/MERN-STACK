// require('./2_module')    for running entire module.
// for certain functionality do this instead

const add=require('./3_exportModule');

console.log("hello world");
sum=add(5,7);
console.log(sum);
