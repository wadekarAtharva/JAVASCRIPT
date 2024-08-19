// if
// < ,> <= ,>=,==

const isUserLoggedIn=true
const temperature=41;

if (temperature<50) {
    console.log("less than 50");
}
else{
console.log("temperature is greater than 50");
}


// nested if

const balance=1000;

if(balance<500){
    console.log("less than 500");
}

else if(balance<700){
    console.log("less than 700");
}

else if (balance<1200){
    console.log("less than 1200");
}

//  && ,|| ,

const loggedInGoogle=true;
const loggedInEmail=false;

if(loggedInEmail || loggedInGoogle){
    console.log("You can buy now");
}

