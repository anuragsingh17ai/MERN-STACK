const userEmail = "anurag@gmail.com";

if( userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email")
}

// falsy value
//  false, 0, -0, BigInt 0n, "", null, undefined, Nan

//truty value
//  '0', 'false', " ", [], {}, function(){}, 

// const arr = [];

// if(arr.length === 0 ){
//     console.log("Array is empty");
// }

// const obj = {};
// if(Object.keys(obj).length === 0 )
// {
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??) : null undefined // will not take null or undefined  value

let val1;

val1 = 5 ?? 10;
console.log(val1) //5

let val2;
val2 = null ?? 10;
console.log(val2) //10

let val3;
val3 = undefined ?? 14;
console.log(val3)  //14

// Terniary Operator

// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log('less than equal to 80') : console.log('greater than 80');