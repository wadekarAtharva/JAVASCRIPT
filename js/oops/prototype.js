function multipleby5(num){
    return num*5
}
multipleby5.power=2

console.log(multipleby5(5))
console.log(multipleby5.power)
console.log(multipleby5.prototype)

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}

const chai=new createUser("chai",25);
const coffee=new createUser("coffee",250)

// new helps to tell that prototype is injected


chai.printMe()
chai.increment()
chai.printMe()


// exampleeeee

let myName="Atharva    "

console.log(myName.truelength);


let myHero=["Dhoni","Rohit","Virat"]

let heroPower={
    Dhoni:"helicopter",
    Rohit:"Pull Shot",
    Virat:"Cover Drive",

    getDhoniPower:function(){
        console.log(`Dhoni power is ${this.Dhoni}`);
    }

}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all object`);
}

Array.prototype.heyHitesh=function(){
    console.log("hitesh says hi")
}
// heroPower.hitesh();
myHero.hitesh()

myHero.heyHitesh()

// heroPower.heyHitesh  --->error bcz function was only for array

//prototype interentance

//old method

const user={
    name:"chai",
    email:"chai@gmial.com"
}

const teacher={
    qualification:true
}

const teachingSupport={
    isAvaiable:false,
    __proto__:teacher
}

// console.log(teachingSupport.qualification)--old

// Modern method

Object.setPrototypeOf(teacher,user);

console.log(teacher.name);


let anothername="ChaiaurCode     "

String.prototype.truelength=function(){
    // console.log(this)

    console.log(`True Lenght ${this} is ${this.trim().length}`);
}

anothername.truelength()

"atharva".truelength()
