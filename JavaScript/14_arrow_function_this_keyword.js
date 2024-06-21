//this is used to refer to current instance
const user ={
    username: "hitesh",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
};
user.welcomeMessage() //hitesh, welcome to website
user.username ="Anurag";
user.welcomeMessage()


// normal arrow function

const addTwo =(num1, num2)=>{           //explict return
    return num1 + num2;
}

console.log(addTwo(3, 4))  // 7

//if function is onliner you don't need to use {} and return. it will automatically return

const addTwoAgain = (num1, num2) => (num1 + num2) ;  //implicit return

console.log(addTwoAgain(5, 6));  // 11   auto return active