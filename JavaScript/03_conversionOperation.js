let score = 33;

console.log(typeof score);
console.log(typeof(score));

let roll = "1";

console.log(typeof(roll)); //string

let valueInRoll = Number(roll);
console.log(valueInRoll); //converted into number

//"33" => 33
// "33abc" => NaN
// true => 1; false =>0

let isLoggedIn=1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false;
// "" => false
// "hitesh" => true

let someNumber = 33;
let stringNumber =String(33)

console.log(typeof(stringNumber));