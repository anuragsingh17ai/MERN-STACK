// let myDate = new Date();

// console.log(myDate); //2023-11-24T12:50:56.617Z

// console.log(myDate.toString()); // Fri Nov 24 2023 18:20:56 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleString());  //  24/11/2023, 6:20:56 pm

let myCreateDate = new Date(2023,0,23);
console.log(myCreateDate.toLocaleDateString()); // 23/1/2023
console.log(myCreateDate.toLocaleString());     // 23/1/2023, 12:00:00 am

let myUpdatedDate = new Date(2023,0,23,5,3);
console.log(myUpdatedDate.toLocaleDateString());  // 23/1/2023
console.log(myUpdatedDate.toLocaleString());      // 23/1/2023, 5:03:00 am

