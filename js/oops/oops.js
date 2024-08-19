const user = {
    username: 'hitesh',
    loginCount: 8,
    signedIn: true,

    getUserDetails : function(){
        // console.log("Got user detailes from databade")
        console.log(`Username:${this.username}`);
    }
}

console.log(user.username)
console.log(user.getUserDetails());


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    return this
}

const userOne=new User("Atharva",8,true)
const userTwo=new User("Satish",8,false)

// change in orginal if new is not used
//constructor function always give new instance

// new steps
// empty objects is created called as instance--->new
// constructor fucntion  is called with use ...
// this keyword helps to inject all argument 
//returns ans

console.log(userOne.constructor)
// cosnstructor is its own definition



