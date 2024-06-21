function addTwoNumbers(number1,number2){  //parameter
    console.log(number1+number2);
}

addTwoNumbers(1,2); //3              ....arguments
addTwoNumbers(1,"a") //1a

const result = addTwoNumbers(4,5) // nothing is returned so.....  undefined

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage());                  //undefined just logged in
console.log(loginUserMessage("Anurag"));          // Anurag just logged in