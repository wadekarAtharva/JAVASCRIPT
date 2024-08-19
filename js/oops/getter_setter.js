// class User {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password
//     }
//     get password() {
//         return this._password.toUpperCase()
//     }

//     set password(value){
//         this._password=value
// }

// }
// const hitesh = new User("hitesh@hitesh.ai", 123)
// console.log(hitesh.password);


// old method
// function User(email,password){
//     this.email=email
//     this.password=password

//     Object.defineProperties(this,"email",{
//         get:function(){
//             return this._email.toUpperCase
//         },
//         set:function(value){
//             this._email=value
//         }
//     })
// }

// object based gettersetter

const User={
    _email: 'a@ath.com',
    _password : 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }
}

const tea=Object.create(User)
console.log(tea.email);