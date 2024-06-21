const myNums = [1,2,3,4,5,6];

// const myTotal = myNums.reduce( function(acc,curval){
//     console.log(`acc has ${acc} while curval is ${curval}`)
//     return acc +curval;
// },0)

// console.log(myTotal) //21

const total =myNums.reduce( (acc,curval)=> acc+curval,0);
console.log(total); //21