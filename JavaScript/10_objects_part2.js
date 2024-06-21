const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

const regularUser ={
    email: "anurag@gamil.com",
    fullname: {
        userfullname: {
            firstname: "anurag",
            lastname: "singh",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2: "b"};
const obj2  = {3: "c", 4: "d"};
const obj3 = {...obj1,...obj2};
// console.log( obj3 );

console.log(Object.keys(tinderUser))    // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))  // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true

