let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate=new Date(2023,0,23,5,3)
// let myCreatedDate=new Date("2023-01-14")

let myCreatedDate=new Date("01-14-2002")

// console.log( myCreatedDate.toLocaleString())


let myTimeStamp=Date.now();
// console.log(myTimeStamp);


myCreatedDate.toLocaleString('default',{
    weekday:"long",
})

console.log(myCreatedDate.toLocaleString('default',{
    weekday:"long",
    hour:"2-digit"
}))

