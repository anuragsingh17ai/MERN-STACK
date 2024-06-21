 const arr = [1,2,3,4,5];
 console.log(arr);

 const anotherArr = new Array(2,3,"anurag",3.44)
 console.log(anotherArr)

 console.log(arr[0]) // 1  as zero based indexing

 arr.push(6)
 console.log(arr) // [1,2,3,4,5,6]   as 6 got appended at end;

 arr.pop()
 console.log(arr)// [1,2,3,4,5] as 6 got poped out from end;

 arr.unshift(0);  // will add zero in starting
 console.log(arr);

 console.log(arr.includes(2)) //true
 console.log(arr.indexOf(2)) //1
 
 arr.shift();  //will remove starting element
 console.log(arr);

 const newArr = arr.slice(1,3); // will remove element within these index..not consider last index
 console.log(newArr); // [2,3]  will not modify original element
 console.log(arr);    // [1,2,,3,4,5]

 const newModifiedArr = arr.splice(1,3); //will include last index and modify original array
 console.log(newModifiedArr); // [ 2, 3, 4 ]
 console.log(arr); //  [ 1, 5 ]