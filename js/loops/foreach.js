const coding=["js","ruby","python","cpp"]

// in callback there is no name for function
coding.forEach(function (val){
    // console.log(val);

})

// arrow function
coding.forEach((item)=>{
    // console.log(item);
})


// printing with 
function printMe(item) {
    console.log(item);
    
}
// coding.forEach(printMe);

const myCoding=[
    {
        languageName:"Javascript",
        languagefile:"js"
    },
    {
        languageName:"Java",
        languagefile:"java"
    },
    {
        languageName:"Phyton",
        languagefile:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})

