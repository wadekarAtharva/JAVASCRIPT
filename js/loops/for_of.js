// for of loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}


const greeting="Hello World";

for (const greet of greeting) {
    // console.log(`Each value os ${greet}`);    
}

// Maps-- no duplicates 
// unique

const map=new Map()
map.set('In',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}

// object cannot be acces with for of


// objects
const myObject ={
    js:'javascript',
    cpp: 'c++',
    rb:'ruby',
    swift:'swift by Apple'
}

for (const key in myObject) {
   console.log(myObject[key]);
}