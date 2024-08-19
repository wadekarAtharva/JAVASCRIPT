const user={
    username:"hitesh",
    price:999,

    welcomeMessage:function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
    // this gives the value that are hold within the context

}

// user.welcomeMessage()
// user.username="Atharva"
// user.welcomeMessage()


// console.log(this)
// here is only returns the empty object as no global context is present

// but when we do same in web browser it gives window value 


// we cannot use "this" in function 

function chai() {
    let username="Atharva"
        console.log(this.username);
}
// chai()

// this will return Undefined and some globaol values


// Arrow Function
// Even arrow funvtion will not return anything
const bhai=()=>{
    let username="Atharva"
    console.log(this.username);
}

// chai()


// Arrow Function
// const addTwo = function(num1,num2){
//     return num1+num2;
// }

const addTwo=(num1,num2)=>{
    return num1+num2;

}

// console.log(addTwo(5,6))


// implicit form of arrow function
const addNum=(num1,num2)=> num1+num2
// const addNum=(num1,num2)=> (num1+num2)


// if {} is used than return is compulsory and if () or no brackets than not to write

// even for object we have to use ()
// const addNum=(num1,num2)=> ({username:"atharva"})


console.log(addNum(5,6))