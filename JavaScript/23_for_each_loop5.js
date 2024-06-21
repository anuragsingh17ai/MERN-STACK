const coding = ['js', 'ruby', 'python', 'c++'];

// coding.forEach((val)=>{
// console.log(val);
// })

// coding.forEach((val,idx)=>{
//     console.log(`for index ${idx} value is ${val}`);
// })

// function printMe(item){  //pass only refrence
//     console.log(item);
// }

// coding.forEach(printMe);

const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "python",
        languageFileName: "py",
    },
    {
        languageName: "C++",
        languageFileName: "cpp",
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName)
})

//forEach will never return value