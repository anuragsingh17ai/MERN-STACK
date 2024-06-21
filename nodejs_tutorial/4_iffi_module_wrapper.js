// these are self invoking function with private scope;
(function(message){
    const superhero="Superman";
    console.log(message,superhero);
})('hye');

(function(message){
    const superhero="Batman";
    console.log(message,superhero);
})("hello");
