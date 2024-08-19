const array=[0,1,2,3,4,5];
const myHeros=["Dhoni","sachin"];
const myArray=new Array(1,2,3,4);

// elements in the arrays can be mixed type
// in js array are resizable
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.


// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. 



// to access array
// console.log(array[1]);


// Methods
// array.push(6);
// array.push(7);

// array.pop()

array.unshift(9); //-- to add to start
array.shift();   //-- to remove from start

// console.log(array);

// console.log(array.includes(5));


const newArr=array.join(); //--combines and convert into string
// console.log(newArr);  

// slice ,splice
// slice gives the element within the range without including last range

// splice removes the elements and print them and also change the array

console.log("A",array);

const myn1=array.slice(1,3);

console.log(myn1);

console.log("B" , array);

const myn2=array.splice(1,3);
console.log("C" , array);

console.log(myn2);