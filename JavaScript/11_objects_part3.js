 const course = {
    coursename: "js in hindi",
    price: "99",
    courseInstructor: "hitesh",
 }

 //object destructuring
 const {coursename,price} = course;
 const {courseInstructor: instructor} = course;

 console.log(coursename);
 console.log(price);
 console.log(instructor);