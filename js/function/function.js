function sayMyName(){
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("V");
    console.log("A");
}

// sayMyName()

// FOR PRINTING THE VALUE 
// function addTwoNum(number1,number2) {
//     console.log(number1+number2);
// }


// FOR RETURNING THE VALUE
function addTwoNum(number1,number2) {
    let result=number1+number2;
    return result

    // console.log("hitesh")----> does not print bcz function ignores everything after RETURN statement
}

const result=addTwoNum(3,4);

// console.log(result);


function loginUserMessage(userfullname) {
    if (userfullname===undefined) {
        console.log("Please Enter a Username:")
        return
    }
    return `${userfullname} just logged in`
}

// console.log(loginUserMessage("Atharva"));


// Use of REST operator same as spread to take multiple value in form of array
function calculateCartPrice(...number1) {
    return number1

}

console.log(calculateCartPrice(200,300,400))


// function as Object

const user={
    username:"Atharva",
    price:199
}

function handleObject(anyObject) {
        console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

// we can also directly call within the function

handleObject({
    username:"Atharva",
    price:199
})

// array in function

const myArray=[200,300,400,500]

function returnSecondValue(getArray) {
        return getArray[1];
}

console.log(returnSecondValue(myArray));

