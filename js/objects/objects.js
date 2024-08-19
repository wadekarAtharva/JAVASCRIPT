// singleton
// Object.create --->constructor

// object literals
// key:pairs


// to create symbol datatype
const mySym=Symbol("key1");

const JsUser={
    name:"Atharva",
    age:18,
    [mySym]:"mykey1",
    location:"Mumbai",
    email:"atharva@gmai.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

// to access
console.log(JsUser.age);
console.log(JsUser["name"]);

console.log(JsUser[mySym]);

// to change or overwrite
JsUser.name="Rahul";
console.log(JsUser["name"]);


// to stop changes 
// Object.freeze(JsUser)
JsUser.name="Prapti";
console.log(JsUser["name"]);

console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greetingTwo());



