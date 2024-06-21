//object literals
// non singleton object
const mySym = Symbol("key1");

const jsUser = {
    name : "Anurag",  //it will take key as string
    "full name": "Anurag Singh",
    [mySym] : "myKey1",       // way to define symbol
    age  : 23,
    location : "Noida",
    Male     : true,
};

console.log(jsUser.Male);
console.log(jsUser["Male"]);

console.log(jsUser["full name"]);
console.log(jsUser[mySym]); // way to access symbol;

jsUser.location = "sector";
// Object.freeze(jsUser);  // not this object is freeze so you can update or delete any thing

// jsUser.location = "Noida"; //this will  not give error but value will not update
// console.log(jsUser.location);

jsUser.greeting = function (){
    console.log(`hello js User ${this["full name"]}`);
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting());  //hello js User
                                 //undefined  //undefined because nothing is return
