// let pizza;
// function getPizza(){
//     console.log(`order pizza`)
//     setTimeout(()=>{               //asynchorunus part
//         pizza='5';
//     },2000);
//     console.log(`pizza ordered`)
// }
// getPizza();
// console.log('call')
// console.log(`${pizza}`);

function orderPizza(callback){
    setTimeout(()=>{
        const pizza='4';
        callback(pizza);
    },2000)
}

function pizzaReady(pizza){
    console.log(`Eat the ${pizza}`)
}

orderPizza(pizzaReady);
console.log(`cal Qoli`);