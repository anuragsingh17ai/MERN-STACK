const myNums = [1,2,3,4,5,6,8];

let newNums = myNums.map( (val)=> val + 10 )
console.log(newNums) // [11,12,13,14,15,16,17,18]

newNums = myNums.map( (val) => {
    return val*3
})
console.log(newNums) // [3,6,9,12,15,18,24]

//chaining

const newNumers = myNums.map( (val) => val+10).filter( (newval) => newval%2==0)
.map( (againNewval) => againNewval + 10 )
console.log(newNumers) // [22,24,26,28]