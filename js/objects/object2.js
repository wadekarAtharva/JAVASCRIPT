// const tinderUser=new Object() -- singleton object

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false;

// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudary"

        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj3 ={5:"e",6:"f"}

const obj4=Object.assign({},obj1,obj2,obj3)
// console.log(obj4);

// spread operator
const obj5={...obj1,...obj2,...obj3}
console.log(obj5);


const user=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

user[1].id

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));