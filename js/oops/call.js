function SetUsername(username){
    this.username=username
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    // call is use to hold the refernce
    // this helps to keep the context even after going from stack

    this.email=email
    this.password=password

}

const chai=new createUser("chai","chai@facebook",122)

console.log(chai)