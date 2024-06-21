function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 2000, 500))  //[ 200, 400, 2000, 500 ]

function calculateCartItems(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartItems(200, 400, 2000, 500))  //[ 2000, 500 ]

const user ={
    username: "hitesh",
    price: 199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)