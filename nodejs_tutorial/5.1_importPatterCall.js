// const add=require('./5_importPattern')
// console.log(add(2,4));
//.......................................................

// const math=require('./5_importPattern');
// console.log(math.add(3,2));
// console.log(math.sub(3,2));
//...........................................................

const {add,sub}=require('./5_importPattern');
console.log(add(4,3));
console.log(sub(4,3));