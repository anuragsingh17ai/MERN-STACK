const arr = [1,2,3,4,5];

for(const val of arr){
    console.log(val)
}

const greeting = "Hello World!";
for (const greet of greeting){
    console.log(`Each char is ${greet}`)
}

const map = new Map();
map.set("IN","India");
map.set("USA","United State of America");
map.set("IN","India");

console.log(map)

for (const [key, value] of map){
    console.log(key, ':-', value);
}
console.log('-----------')
for (const key in map){ //will not work with map
    console.log(key)
}
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman',
}

// for(const [key,value] of myObject) //will give error as they are not itteratable