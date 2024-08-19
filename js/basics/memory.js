//stack (Primitve)  Heap(Non-Primitive)

let myYoutubeName="AtharvaCoding.com";

let anotherName=myYoutubeName;

anotherName="coffeeCode";

// console.log(myYoutubeName);
// console.log(anotherName);

//Output : copy is given so no change in myYoutubeName


//object
let userOne={
    email:"atharvaswadekar@gmai.com",
    upi:"atharvaw@ybl"
}

//to access object use . operator

let userTwo=userOne;

userTwo.email="satish@gmail.com";

console.log(userOne.email);

//Output:Reference is given so change takes place

