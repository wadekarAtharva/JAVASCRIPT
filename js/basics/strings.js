const name="Atharva";
const age =21;

//This method is very outdated do not use.
console.log("My name is " + name +".I am "+age+"years old" );

//Instead use ---> syntax -->` ${ }`
console.log(`My name is ${name}.I am ${age} years Old`);

const gameName=new String('Atharva') 
//Everything in the string is in form of Key pairs

console.log(gameName[0]);//--->A
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

//use console in web Brower to check different methods

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

//to avoid extra character
const newStringOne="  Shubham   ";
console.log(newStringOne);
console.log(newStringOne.trim());

//to repalce
const url="https//atharva.com/atharva%20wadekar";
console.log(url.replace('atharva','satish'));

console.log(url.includes('satish'));

console.log(url);


// to separate using something

console.log(url.split('/'));