const arr =[1,2,3,4];
const superhero =['shaktiman','nagrag'];

const merge = [...arr , ...superhero];
console.log(merge)  //[ 1, 2, 3, 4, 'shaktiman', 'nagrag' ]

const name ="Anurag";
console.log(Array.from(name));  //[ 'A', 'n', 'u', 'r', 'a', 'g' ]

console.log(Array.isArray(name)); // false

console.log(Array.of(1,2,4));      //[ 1, 2, 4 ]